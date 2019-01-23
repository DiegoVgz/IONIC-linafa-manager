import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornadasCreationManagerPage } from './jornadas-creation-manager';

@NgModule({
  declarations: [
    JornadasCreationManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(JornadasCreationManagerPage),
  ],
})
export class JornadasCreationManagerPageModule {}
