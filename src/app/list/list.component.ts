import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  dataSource: any[] = [
    { name: 'admin', age: 12, address: 'aaaaa' },
    { name: 'bob', age: 32, address: 'bbbbbb' },
    { name: 'ann', age: 21, address: 'ccccc' },
    { name: 'bill', age: 42, address: 'ddddd' },
  ];

  @Input() headTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<{ $implecit: any }>;
  constructor() { }

  ngOnInit() {
  }

}
