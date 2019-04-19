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

  onDragMove():void{
    console.log("BARK")
  }

  onDragEnd():void{
    console.log("WOOF")
  }
}
