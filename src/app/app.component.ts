import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title = 'app';
  private getData: number;
  private getResultId: any;
  private getResultName: any;
  private getResultSeq: any;
  
  constructor(private http: Http ) {
      
  }

  clicked() {
    this.http.get('http://localhost:5000/get-test/' + this.getData)
    .map(response => {
      return response.json();
    })
    .subscribe(data => {
        this.getResultId = data[0].id;
        this.getResultName = data[0].name;
        this.getResultSeq = data[0].seq;
    }, error => {
      console.log(error)
    });
  }
}
