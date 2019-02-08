import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RankingMenuPage } from './ranking-menu';

@NgModule({
  declarations: [
    RankingMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(RankingMenuPage),
  ],
})
export class RankingMenuPageModule {}
