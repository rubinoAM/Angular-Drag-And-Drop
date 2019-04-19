import { Directive } from '@angular/core';
import { DragDirective } from './drag.directive';

@Directive({
  selector: '[appMove]'
})
export class MoveDirective {
  constructor(private draggable:DragDirective){}

  ngOnInit():void{
    this.draggable.dragStart.subscribe(()=>{this.onDragStart()})
  }

  private onDragStart(){
    console.log("BOO")
  }
}