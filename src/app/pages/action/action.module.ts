import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActionPageRoutingModule } from './action-routing.module';
import { ActionPage } from './action.page';
//componentes
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ActionPage]
})
export class ActionPageModule {}
