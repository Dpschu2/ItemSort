import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdditemsPage } from './additems';

@NgModule({
  declarations: [
    AdditemsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdditemsPage),
  ],
  exports: [
    AdditemsPage
  ]
})
export class AdditemsPageModule {}
