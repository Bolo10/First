import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ListComponent],
  exports:[ListComponent]
})
export class ListComponentModule { }
