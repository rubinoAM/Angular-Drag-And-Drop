import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlacematComponent } from './components/placemat/placemat.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { AddComponent } from './components/functions/add/add.component';
import { FooComponent } from './components/functions/foo/foo.component';
import { SubtractComponent } from './components/functions/subtract/subtract.component';
import { ComplicatedComponent } from './components/functions/complicated/complicated.component';
import { DragModule } from './drag/drag.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlacematComponent,
    FunctionsComponent,
    AddComponent,
    FooComponent,
    SubtractComponent,
    ComplicatedComponent
  ],
  imports: [
    BrowserModule,
    DragModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
