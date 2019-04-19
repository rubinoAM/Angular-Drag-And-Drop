import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {
  constructor(){}
  ngOnInit(){}

  onDragStart():void{
    console.log("ARF")
  }

  onDragMove(event:PointerEvent):void{
    console.log(Math.round(event.clientX) + Math.round(event.clientY));
  }

  onDragEnd():void{
    console.log("WOOF")
  }
}
