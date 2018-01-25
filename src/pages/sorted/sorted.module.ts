import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SortedPage } from './sorted';

@NgModule({
  declarations: [
    SortedPage,
  ],
  imports: [
    IonicPageModule.forChild(SortedPage),
  ],
  exports: [
    SortedPage
  ]
})
export class SortedPageModule {}
