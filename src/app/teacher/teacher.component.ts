import { Component, OnInit, ComponentFactoryResolver,Type } from '@angular/core';
import {DynamicCompRendererDirective} from '../directives/dynamic-comp-renderer.directive';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
   // comp:Type<any> = app-student;
  counter=0;
  constructor(private compresolver:ComponentFactoryResolver,
              public DynamicCompRenderer  :DynamicCompRendererDirective) {

               }

  ngOnInit() {
        // this.compresolver.resolveComponentFactory(Type<any);
  }

  teacherlistenchild(){
    this.counter++;
  }

}
