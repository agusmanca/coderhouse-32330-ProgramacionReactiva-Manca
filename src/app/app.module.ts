import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToobarComponent } from './toobar/toobar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatCardModule} from '@angular/material/card';
import { EdadPipe } from './main-content/pipe/edad.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    ToobarComponent,
    MainContentComponent,
    SidebarComponent,
    EdadPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
