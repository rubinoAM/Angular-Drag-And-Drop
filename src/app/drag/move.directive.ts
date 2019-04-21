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

  @HostBinding('class.movable') movable = false;
  
  private position:Position = {
    x:0,
    y:0
  }
  private startPos:Position;
  private reset:boolean=true;

  constructor(private sanitizer: DomSanitizer){
    super();
  }

  @HostListener('dragStart', ['$event']) onDragStart(event:PointerEvent){
    this.startPos = {
      x:event.clientX - this.position.x,
      y:event.clientY - this.position.y
    }
    this.movable = true;
  }

  @HostListener('dragMove', ['$event']) onDragMove(event:PointerEvent){
    this.position.x = event.clientX - this.startPos.x;
    this.position.y = event.clientY - this.startPos.y;
  }

  @HostListener('dragEnd', ['$event']) onDragEnd(event:PointerEvent){
    const columnOne = document.getElementById('col-1');

    /*console.log(columnOne.offsetLeft);
    console.log(columnOne.offsetLeft + columnOne.offsetWidth);
    console.log(columnOne.offsetTop);
    console.log(columnOne.offsetTop + columnOne.offsetHeight);*/
    if(this.reset){
      let xRange:Array<number> = range(
        columnOne.offsetLeft,
        columnOne.offsetLeft + columnOne.offsetWidth);
      let yRange:Array<number> = range(
        columnOne.offsetTop,
        columnOne.offsetTop + columnOne.offsetHeight
      );
      //console.log(xRange,yRange);

      for(let i=0;i<xRange.length;i++){
        for(let j=0;j<yRange.length;j++){
          if(this.position.x === xRange[i] || this.position.y === yRange[j]){
            console.log("MEOW")
            this.position = {x:0, y:0}
            this.movable = false;
            return;
          } else {
            console.log("BARK")
            this.position = {x:0, y:0}
            this.movable = false;
          }
        }
      }
    }
  }
}

function range(start:number,end:number){
  let arr:Array<number> = [];
  for(let i=start;i<=end;i++){
    arr.push(i);
  }
  return arr;
}