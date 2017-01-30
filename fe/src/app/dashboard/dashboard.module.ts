import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { DevExtremeModule } from 'devextreme-angular'; 
import { HttpModule }    from '@angular/http';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    DropdownModule,
    DevExtremeModule,
    HttpModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
