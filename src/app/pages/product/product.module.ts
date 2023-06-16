import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { GiftcardsComponent } from 'src/app/components/giftcards/giftcards.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@NgModule({
  declarations: [
    ProductComponent,
    GiftcardsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NzButtonModule,
    NzDropDownModule,
    NzSelectModule,
    NzInputModule,
    NzGridModule,
    NzRateModule,
    FormsModule,
    NzCollapseModule,
    NzIconModule,
    NzInputNumberModule
    
  ]
})
export class ProductModule { }
