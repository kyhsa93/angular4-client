import { Component, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'confirm-password',
    templateUrl: './confirm-password.component.html',
    styleUrls: ['./confirm-password.component.css']
})

export class ConfirmPasswordComponent {
    @Output() confirmed = new EventEmitter();
    private password: string ='';
    private confirmError: boolean = false;

    constructor (
        private http: Http,
    ) {}

    confirm () {
      var loginData = {
        'loginId': sessionStorage.getItem('id'),
        'loginPassword': this.password
      };
      this.http.post('http://localhost:5000/login', loginData).
          subscribe(response => {
              this.confirmed.emit(true);
              this.confirmError = false;
          }, error => {
              this.confirmed.emit(false);
              this.confirmError = true;
              console.log('password confirm error: ', error);
          });
    }
};
