import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImagenComponent } from './components/lazy-imagen/lazy-imagen.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImagenComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[  SidebarComponent, LazyImagenComponent ]
})
export class SharedModule { }
