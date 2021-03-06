import { Directive, EventEmitter, HostBinding, HostListener, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, take } from 'rxjs/operators';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective implements OnInit{
  @HostBinding('class.draggable') draggable = true;
  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();

  private pointerDown = new Subject<PointerEvent>();
  private pointerMove = new Subject<PointerEvent>();
  private pointerUp = new Subject<PointerEvent>();

  @HostListener('pointerdown', ['$event']) onPointerDown(event:PointerEvent):void{
    this.pointerDown.next(event);
  }

  @HostListener('document:pointermove', ['$event']) onPointerMove(event:PointerEvent):void{
    this.pointerMove.next(event);
  }

  @HostListener('document:pointerup', ['$event']) onPointerUp(event:PointerEvent):void{
    this.pointerUp.next(event);
  }

  ngOnInit():void{
    this.pointerDown.asObservable()
      .subscribe((event)=>{this.dragStart.emit(event)});

    this.pointerDown.pipe(
      switchMap(()=> this.pointerMove.pipe(
        takeUntil(this.pointerUp)
      ))
    ).subscribe((event)=>{this.dragMove.emit(event)});

    this.pointerDown.pipe(
      switchMap(()=> this.pointerUp.pipe(
        take(1)
      ))
    ).subscribe((event)=>{this.dragEnd.emit(event)});
  }
}
