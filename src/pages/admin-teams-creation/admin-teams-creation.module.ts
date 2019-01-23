import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminTeamsCreationPage } from './admin-teams-creation';

@NgModule({
  declarations: [
    AdminTeamsCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminTeamsCreationPage),
  ],
})
export class AdminTeamsCreationPageModule {}
