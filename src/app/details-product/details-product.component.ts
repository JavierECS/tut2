import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  public product:any = {}
  
  constructor(private route:ActivatedRoute, private dataSvc: DataService) { }

  ngOnInit(): void {
    const productID = this.route.snapshot.paramMap.get('id');
    console.log('ProductID', productID );
    [this.product] = this.dataSvc.getProductById(productID);

  }

}
