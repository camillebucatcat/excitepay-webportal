import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';

@NgModule({
  declarations: [
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    NzListModule,
    NzSelectModule,
    NavbarModule
  ]
})
export class CategoriesModule {}
