import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminTeamsCreationMenuPage } from './admin-teams-creation-menu';

@NgModule({
  declarations: [
    AdminTeamsCreationMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminTeamsCreationMenuPage),
  ],
})
export class AdminTeamsCreationMenuPageModule {}
