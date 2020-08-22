import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() currentPage = 1;
  @Input() pageAmount = 10;
  @Output() pageUp = new EventEmitter();
  @Output() pageDown = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
