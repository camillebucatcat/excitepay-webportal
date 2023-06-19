import { NgModule } from '@angular/core';
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
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { CategoryComponent } from 'src/app/shared/category/category.component';
import { AboutComponent } from 'src/app/shared/about/about.component';
import { FaqComponent } from 'src/app/shared/faq/faq.component';
import { CtaComponent } from 'src/app/shared/cta/cta.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FoodComponent } from 'src/app/shared/food/food.component';
import { GamingComponent } from 'src/app/shared/gaming/gaming.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { PrepaidComponent } from 'src/app/shared/prepaid/prepaid.component';
import { AppFeaturesComponent } from 'src/app/shared/app-features/app-features.component';
import { HowItWorksComponent } from 'src/app/shared/how-it-works/how-it-works.component';
import { ReviewComponent } from 'src/app/shared/review/review.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { FeaturedCardsComponent } from 'src/app/components/featured-cards/featured-cards.component';
@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    NavbarComponent,
    HeroComponent,
    FeaturedCardsComponent,
    CategoryComponent,
    AboutComponent,
    FaqComponent,
    CtaComponent,
    GamingComponent,
    PrepaidComponent,
    FoodComponent,
    AppFeaturesComponent,
    HowItWorksComponent,
    ReviewComponent
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
    NzCarouselModule
  ]
})
export class MainModule { }
