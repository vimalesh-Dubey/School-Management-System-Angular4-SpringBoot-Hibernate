import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicCompRenderer]'
})
export class DynamicCompRendererDirective {

  constructor(private viewContainerRef:ViewContainerRef ) {
    
  }

}
