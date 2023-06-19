import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { CtaModule } from 'src/app/shared/cta/cta.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { NzRateComponent, NzRateModule } from 'ng-zorro-antd/rate';
import { NzDrawerComponent, NzDrawerModule } from 'ng-zorro-antd/drawer';

@NgModule({
  declarations: [
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    NzListModule,
    NzSelectModule,
    NavbarModule,
    CtaModule,
    FooterModule,
    NzRateModule,
    NzDrawerModule
  ]
})
export class CategoriesModule {}
