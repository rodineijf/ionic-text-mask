import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazyPage } from './lazy-page';

import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    LazyPage,
  ],
  imports: [
    IonicPageModule.forChild(LazyPage),
    TextMaskModule
  ],
  exports: [
    LazyPage
  ]
})
export class LazyPageModule { }
