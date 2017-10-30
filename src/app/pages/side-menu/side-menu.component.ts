import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent {
    @Input() postList;
    @Output() selected = new EventEmitter();

    constructor () {}

    selectPosting (index: number) {
        this.selected.emit(index);
    }
};
