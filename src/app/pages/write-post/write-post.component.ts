import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';
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

    constructor (
        private route: ActivatedRoute,
        private alerts: AlertsService,
        private http: Http,
        private router: Router
    ) {}

    ngOnInit () {
        this.route.params.subscribe(params => {
            this.activatedPage = params['page'];
        });
    }

    submit () {
        if (!this.category) {
            this.alerts.setMessage('Please select category', 'error');
        } else {
            this
            var postData = [
                this.title,
                this.category,
                this.content
            ];
            this.http.post('http://localhost:5000/write-post', postData).
                subscribe(response => {
                    this.alerts.setMessage('Submit success', 'success');
                    this.router.navigate(['/' + this.category]);
                }, error => {
                    this.alerts.setMessage('Submit fail', 'error');
                });
        }
    }
};
