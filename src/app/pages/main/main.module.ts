import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { CtaModule } from 'src/app/shared/cta/cta.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzButtonModule,
    NzDropDownModule,
    NzSelectModule,
    NzInputModule,
    NzGridModule,
    NzRateModule,
    FormsModule,
    NzCollapseModule,
    NzIconModule,
    NzBadgeModule,
    NzDrawerModule,
    NzCarouselModule,
    NzRateModule,
    NavbarModule,
    CtaModule,
    FooterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class MainModule { }
