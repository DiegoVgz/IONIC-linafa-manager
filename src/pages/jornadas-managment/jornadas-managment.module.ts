import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornadasManagmentPage } from './jornadas-managment';

@NgModule({
  declarations: [
    JornadasManagmentPage,
  ],
  imports: [
    IonicPageModule.forChild(JornadasManagmentPage),
  ],
})
export class JornadasManagmentPageModule {}
