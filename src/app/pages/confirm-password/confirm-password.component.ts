import { Component, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { AlertsService } from 'angular-alert-module';

@Component({
    selector: 'confirm-password',
    templateUrl: './confirm-password.component.html',
    styleUrls: ['./confirm-password.component.css']
})

export class ConfirmPasswordComponent {
    @Output() confirmed = new EventEmitter();
    private password: string ='';

    constructor (
        private http: Http,
        private alerts: AlertsService
    ) {}

    confirm () {
      var loginData = {
        'loginId': sessionStorage.getItem('id'),
        'loginPassword': this.password
      };
      this.http.post('http://localhost:5000/login', loginData).
          subscribe(response => {
              this.confirmed.emit(true);
          }, error => {
              this.alerts.setMessage('비밀번호를 확인해 주세요.', 'error');
              this.confirmed.emit(false);
              console.log('password confirm error: ', error);
          });
    }
};
