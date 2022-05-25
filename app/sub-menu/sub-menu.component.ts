import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css'],
})
export class SubMenuComponent implements OnInit {
  @Input() items: any[];
  @ViewChild('subMenu') public subMenu;
  @Input() trigger: any;

  constructor() {}

  ngOnInit() {
    
  }
}
