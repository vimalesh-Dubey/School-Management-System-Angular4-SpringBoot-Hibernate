import { Component, OnInit, ComponentFactoryResolver, Type } from '@angular/core';
import {DynamicCompRendererDirective} from '../directives/dynamic-comp-renderer.directive';
import {tableDragger} from 'table-dragger';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
   // comp:Type<any> = app-student;
  counter = 0;
  constructor(private compresolver: ComponentFactoryResolver,
 ) {

               }

  ngOnInit() {
        // this.compresolver.resolveComponentFactory(Type<any);
       // new tableDragger(document.querySelector('#default-table'), { mode: 'row' });
  }

  teacherlistenchild() {
    this.counter++;
  }

  // tableDragger(this.document.querySelector('#default-table'));
 // tableDragger(document.querySelector("#row-table"), { mode: "row" });


}
