import { Component } from '@angular/core';

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent {

    public showSideMenuFlag: boolean = false;

    constructor () {}

    showSideMenu () {
        // this.showSideMenuFlag = true ? false : true;
        if (this.showSideMenuFlag) {
                this.showSideMenuFlag = false;
        } else {
            this.showSideMenuFlag = true;
        }
        console.log('11', this.showSideMenuFlag);
    }
};
