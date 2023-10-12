import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MaterialModule } from '../material/material.module';
import { TrainRoutingModule } from './train-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

@NgModule({
  declarations: [ListPageComponent, LayoutPageComponent],
  imports: [CommonModule, MaterialModule, TrainRoutingModule],
})
export class TrainModule {}
