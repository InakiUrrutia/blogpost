import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogHomeComponent,
    BlogFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
