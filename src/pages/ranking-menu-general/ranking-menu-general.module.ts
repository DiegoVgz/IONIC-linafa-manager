import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RankingMenuGeneralPage } from './ranking-menu-general';

@NgModule({
  declarations: [
    RankingMenuGeneralPage,
  ],
  imports: [
    IonicPageModule.forChild(RankingMenuGeneralPage),
  ],
})
export class RankingMenuGeneralPageModule {}
