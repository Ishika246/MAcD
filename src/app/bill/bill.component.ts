import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { BillService } from '../bill.service';
import { Ibills } from '../billing';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
bills:Ibills[]=[];
//sum:number=0;
price:any;


  constructor(private billService : BillService) {
    
   }

  ngOnInit(): void {
      
      this.billService.getAllBills().subscribe((data)=>this.bills=data)
     
      
     
  }
  /*public GetDetails(index:number)
{
  for(let i=0;i<this.bills.length;i++){
   this.price=this.bills[i].fixPrice;
  
  }
}*/
  public total()
  {
   var total = 0;
 
   for(let i=0;i<this.bills.length;i++){
    total+=this.bills[i].fixPrice;
   //total += this.bills. * this.prodPrice;  
  }
  return total;
    
}
  
    
  }


