import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    templateUrl: './write-post.component.html',
    styleUrls: ['./write-post.component.css']
})

export class WritePostComponent implements OnInit{

    private activatedPage: string = '';
    private title: string = '';
    private category: string = '';
    private content: string = '';
    private saveError: boolean = false;
    private categoryError: boolean = false;
    private modify: boolean = false;
    private contentNumber: string = '';

    constructor (
        private route: ActivatedRoute,
        private http: Http,
        private router: Router
    ) {}

    ngOnInit () {
        this.route.params.subscribe(params => {
            if (params['numeber'] != 'write') {
                this.http.get('http://localhost:5000/select-content/' + params['number']).
                    map(response => {
                        return response.json();
                    }).subscribe(data => {
                        if (data.length) {
                            this.title = data[0].title;
                            this.category = data[0].category;
                            this.content = data[0].content;
                            this.contentNumber = data[0].seq;
                            this.modify = true;
                        }
                    }, error => {
                        console.log('write post ngOnInit', error);
                    });
            }
        });
    }

    responseError (error) {
        this.saveError = true;
        console.log('write post error', error);
    }

    submit () {
        if (!this.category) {
          this.categoryError = true;
          return ;
        }
        var contentData = [
            this.title,
            this.category,
            this.content
        ];
        if (this.modify) {
            contentData.push(this.contentNumber);
            this.http.post('http://localhost:5000/update-content', contentData).
                subscribe(response => {
                    this.saveError = false;
                    this.categoryError = false;
                    this.router.navigate(['/home']);
                }, this.responseError)
        } else {
            contentData.push(sessionStorage.getItem('id'));
            this.http.post('http://localhost:5000/write-post', contentData).
                subscribe(response => {
                    this.saveError = false;
                    this.categoryError = false;
                    this.router.navigate(['/home']);
                }, this.responseError);
        }
    }
};
