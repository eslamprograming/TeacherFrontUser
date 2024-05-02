import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './Payment.component';
import { FormsModule } from '@angular/forms';
import { SharedModelModule } from 'src/SharedModel/SharedModel.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormPaymentComponent } from './formPayment/formPayment.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,SharedModelModule,HttpClientModule,RouterModule
  ],
  declarations: [PaymentComponent,FormPaymentComponent],
  exports:[FormPaymentComponent]
})
export class PaymentModule { }
