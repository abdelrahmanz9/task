import { Component , OnInit} from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../interface/customer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    constructor(private CustomerService:CustomerService){

    }
    lenth:number =0
    customers:Customer[] = this.CustomerService.customers
    getRowIndexArray(): number[] {
      return Array.from({ length: this.customers.length }, (_, i) => i + 1);
    }
    ngOnInit(): void {
      
    }
}
