import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {HeaderComponent} from './header/header.component';

import {ReactiveFormsModule} from "@angular/forms";
import {CommentsModule} from "./comments-item/comments.module";


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
