import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import  {HtmlDirective }            from './htmlDirective.directive'

import { DevExtremeModule } from 'devextreme-angular'; 
import { BrandListComponent }         from './brandList.component';
import { BrandComponent }         from './brand.component';

import { ButtonsComponent }         from './buttons.component';
import { CardsComponent }           from './cards.component';
import { FormsComponent }           from './forms.component';
import { SocialButtonsComponent }   from './social-buttons.component';
import { SwitchesComponent }        from './switches.component';
import { TablesComponent }          from './tables.component';

// Modal Component
import { ModalModule }              from 'ng2-bootstrap/modal';
import { ModalsComponent }          from './modals.component';

// Tabs Component
import { TabsModule }               from 'ng2-bootstrap/tabs';
import { TabsComponent }            from './tabs.component';

// Components Routing
import { ComponentsRoutingModule }  from './components-routing.module';


@NgModule({
    imports: [
        DevExtremeModule,
        CommonModule,
        ComponentsRoutingModule,
        ModalModule.forRoot(),
        TabsModule
    ],
    declarations: [
        BrandComponent,
        BrandListComponent,
        ButtonsComponent,
        CardsComponent,
        FormsComponent,
        ModalsComponent,
        SocialButtonsComponent,
        SwitchesComponent,
        TablesComponent,
        TabsComponent,
        HtmlDirective
    ]
})
export class ComponentsModule { }
