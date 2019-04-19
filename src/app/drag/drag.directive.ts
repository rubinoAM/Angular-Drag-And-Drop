import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  @HostBinding('class.draggable') draggable = true;
  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();

  private pointerDown = new Subject<PointerEvent>();

  @HostListener('pointerdown', ['$event']) onpointerdown(event:PointerEvent):void{
    this.pointerDown.next(event);
  }

  ngOnInit():void{
    //Start Dragging
    const dragStart$ = this.pointerDown.asObservable();
    dragStart$.subscribe(()=>{console.log('YAP')})

    //Dragging Object

    //End Dragging
  }
  /* private dragging = false;

  @HostListener('pointerdown', ['$event']) onPointerDown(event:PointerEvent):void{
    this.dragging = true;
    this.dragStart.emit(event);
  }

  @HostListener('document:pointermove', ['$event']) onPointerMove(event:PointerEvent):void{
    if(this.dragging){
      this.dragMove.emit(event);
    }
  }

  @HostListener('document:pointerup', ['$event']) onPointerUp(event:PointerEvent):void{
    this.dragging = false;
    this.dragEnd.emit(event);
  } */
}
