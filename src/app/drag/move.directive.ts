import { Directive, HostListener, HostBinding } from '@angular/core';
import { DragDirective } from './drag.directive';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

interface Position{
  x:number;
  y:number;
}

@Directive({
  selector: '[appMove]'
})
export class MoveDirective extends DragDirective{
  @HostBinding('style.transform') get transform():SafeStyle{
    return this.sanitizer.bypassSecurityTrustStyle(`translateX(${this.position.x}px) translateY(${this.position.y}px)`);
  }
  
  private position:Position = {
    x:0,
    y:0
  }
  private startPos:Position;

  constructor(private sanitizer: DomSanitizer){
    super();
  }

  @HostListener('dragStart', ['$event']) onDragStart(event:PointerEvent){
    this.startPos = {
      x:event.clientX - this.position.x,
      y:event.clientY - this.position.y
    }
  }

  @HostListener('dragMove', ['$event']) onDragMove(event:PointerEvent){
    this.position.x = event.clientX - this.startPos.x;
    this.position.y = event.clientY - this.startPos.y;
  }

  @HostListener('dragEnd', ['$event']) onDragEnd(event:PointerEvent){
    
  }
}