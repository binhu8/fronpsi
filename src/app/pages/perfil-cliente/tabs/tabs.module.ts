import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TimelineModule } from '../timeline/timeline.module';


@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    TimelineModule

  ],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
