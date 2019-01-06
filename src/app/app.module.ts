import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeroChildComponent} from './hero-child.component';
import {HeroParentComponent} from './hero-parent.component';
import {NameChildComponent} from './name-child.component';
import {NameParentComponent} from './name-parent.component';
import {VersionChildComponent} from './version-child.component';
import {VersionParentComponent} from './version-parent.component';

let directives: any[] = [
  AppComponent,
  HeroChildComponent,
  HeroParentComponent,
  NameChildComponent,
  NameParentComponent,
  VersionChildComponent,
  VersionParentComponent
]
@NgModule({
  declarations: directives,
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
