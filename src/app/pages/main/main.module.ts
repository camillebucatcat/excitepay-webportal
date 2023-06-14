import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HeroComponent,
    CategoryComponent,
    AboutComponent,
    FaqComponent,
    CtaComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzButtonModule,
    NzDropDownModule,
    NzSelectModule,
    NzInputModule,
    NzGridModule
  ]
})
export class MainModule { }
