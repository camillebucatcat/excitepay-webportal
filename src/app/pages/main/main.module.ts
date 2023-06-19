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
import { CategoryComponent } from 'src/app/components/category/category.component';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { CtaComponent } from 'src/app/shared/cta/cta.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HowItWorksComponent } from 'src/app/shared/how-it-works/how-it-works.component';
import { ReviewComponent } from 'src/app/components/review/review.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    NavbarComponent,
    CategoryComponent,
    FaqComponent,
    CtaComponent,
    HowItWorksComponent,
    ReviewComponent,
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class MainModule { }
