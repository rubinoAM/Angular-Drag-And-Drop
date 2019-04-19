import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDirective } from './drag.directive';
import { MoveDirective } from './move.directive';

@NgModule({
  declarations: [
    DragDirective,
    MoveDirective],
  imports: [
    CommonModule
  ],
  exports:[
    DragDirective,
    MoveDirective]
})
export class DragModule { }
