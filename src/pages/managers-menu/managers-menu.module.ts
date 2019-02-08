import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagersMenuPage } from './managers-menu';

@NgModule({
  declarations: [
    ManagersMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagersMenuPage),
  ],
})
export class ManagersMenuPageModule {}
