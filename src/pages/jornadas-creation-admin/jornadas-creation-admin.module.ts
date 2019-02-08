import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornadasCreationAdminPage } from './jornadas-creation-admin';

@NgModule({
  declarations: [
    JornadasCreationAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(JornadasCreationAdminPage),
  ],
})
export class JornadasCreationAdminPageModule {}
