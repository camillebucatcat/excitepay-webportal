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
import { HeroComponent } from 'src/app/shared/hero/hero.component';
import { CategoryComponent } from 'src/app/shared/category/category.component';
import { AboutComponent } from 'src/app/shared/about/about.component';
import { FaqComponent } from 'src/app/shared/faq/faq.component';
import { CtaComponent } from 'src/app/shared/cta/cta.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FeaturedCardsComponent } from 'src/app/shared/featured-cards/featured-cards.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HeroComponent,
    CategoryComponent,
    AboutComponent,
    FaqComponent,
    CtaComponent,
    FeaturedCardsComponent
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
    FormsModule
  ]
})
export class MainModule { }
