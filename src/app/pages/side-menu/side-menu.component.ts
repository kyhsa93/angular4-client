import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent {
    @Input() contentsList;
    @Output() selected = new EventEmitter();

    constructor () {}

    selectContent(index: number) {
        this.selected.emit(index);
    }
};
