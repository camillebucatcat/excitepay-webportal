import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NavigationComponent } from 'src/app/shared/navigation/navigation.component';
import { NavigationModule } from 'src/app/shared/navigation/navigation.module';
import { NzSelectModule } from 'ng-zorro-antd/select';


@NgModule({
  declarations: [
    MainComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzButtonModule,
    NzDropDownModule,
    NzSelectModule
  ]
})
export class MainModule { }
