import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  buttons = [
    'In Triage',
    'Completed',
    'Drafts',
    'Rejected',
    'Discharged',
    'Archived',
  ];
  selectedItem: number = 3;
  // buttons = [
  //   {name:'In Triage', active: false},
  //   {name:'Completed', active: false},
  //   {name:'Drafts',  active: false},
  //   {name:'Rejected',  active: true},
  //   {name:'Discharged',  active: false},
  //   {name:'Archived',  active: false}
  // ];

  constructor() {}
  // toggleClass(button) {
  //   item.active = !item.active;
  // }
  ngOnInit(): void {}
}
