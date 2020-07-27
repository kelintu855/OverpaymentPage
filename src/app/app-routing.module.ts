import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverpaymentComponent } from './overpayment/overpayment.component'
const routes: Routes = [
  {path:'',component: OverpaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
