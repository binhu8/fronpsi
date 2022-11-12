import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TimelineModule } from '../timeline/timeline.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    TimelineModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule

  ],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
