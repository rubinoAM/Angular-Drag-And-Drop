import { Directive, HostListener } from '@angular/core';
import { DragDirective } from './drag.directive';

@Directive({
  selector: '[appMove]'
})
export class MoveDirective extends DragDirective{
  @HostListener('dragStart') onDragStart(){
    console.log("BOO")
  }

  @HostListener('dragMove') onDragMove(){
    console.log("BOOP")
  }

  @HostListener('dragEnd') onDragEnd(){
    console.log("BOOBOO")
  }
}