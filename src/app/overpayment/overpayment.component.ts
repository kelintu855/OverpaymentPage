import { Component, OnInit } from '@angular/core';
import {OverpaymentService } from '../overpayment.service';
import {OverpaymentDetail} from '../models/OverpaymentDetail'
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-overpayment',
  templateUrl: './overpayment.component.html',
  styleUrls: ['./overpayment.component.css']
})
export class OverpaymentComponent implements OnInit {

  public overpayments:OverpaymentDetail[];
  public id;
  public dataSource;
  public aggBalanceAmt;
  public aggOverpaymentAmt;
  public aggAmtPaid

  constructor(private overpaymentService: OverpaymentService, private http: HttpClient) { }

  ngOnInit() {
    this.aggBalanceAmt=0;
    this.aggOverpaymentAmt=0;
    this.aggAmtPaid=0;
  }

  search(){
    this.overpaymentService.getOverpaymentDetail(this.id)
    .subscribe(responseData=>{
      this.overpayments=responseData
      this.dataSource=this.overpayments
      console.log(responseData)
      this.aggBalanceAmt=this.overpayments.reduce((acc,curr)=>acc+curr.balance_amount,0).toFixed(2)
      this.aggOverpaymentAmt=this.overpayments.reduce((acc,curr)=>acc+curr.overpayment_amount,0).toFixed(2)
      this.aggAmtPaid=this.aggOverpaymentAmt-this.aggBalanceAmt
    });
  }



}
