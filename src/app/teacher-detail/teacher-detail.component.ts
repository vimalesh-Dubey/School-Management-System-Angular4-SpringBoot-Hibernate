import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  @Output()
  clickevent = new EventEmitter();

  @Input()
  childCounter:number;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.clickevent.emit('child event clicked');
  }

}
