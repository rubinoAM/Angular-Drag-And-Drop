import { Directive, HostBinding, HostListener, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  @HostBinding('class.draggable') draggable = true;
  @Output() dragStart = new EventEmitter();
  @Output() dragMove = new EventEmitter();
  @Output() dragEnd = new EventEmitter();
  private dragging = false;

  @HostListener('pointerdown') onPointerDown():void{
    this.dragging = true;
    this.dragStart.emit();
  }

  @HostListener('document:pointermove') onPointerMove():void{
    if(this.dragging){
      this.dragMove.emit();
    }
  }

  @HostListener('document:pointerup') onPointerUp():void{
    this.dragging = false;
    this.dragEnd.emit();
  }
}
