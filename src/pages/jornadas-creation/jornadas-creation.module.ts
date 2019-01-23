import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornadasCreationPage } from './jornadas-creation';

@NgModule({
  declarations: [
    JornadasCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(JornadasCreationPage),
  ],
})
export class JornadasCreationPageModule {}
