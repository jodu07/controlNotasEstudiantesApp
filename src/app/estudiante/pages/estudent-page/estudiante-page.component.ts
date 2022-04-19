import { Component, OnInit } from '@angular/core';
import { Estudent } from '../../interface/estudiante.interface';
import { EstudentService } from '../../services/estudent.service';
import { Product } from '../../interface/product.interface';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-estudiante-page',
  templateUrl: './estudiante-page.component.html',
  styleUrls: ['./estudiante-page.component.css']
})
export class EstudentPageComponent implements OnInit {

products: Product[]=[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit():void {
    this.productService.getProductsSmall().then(data => this.products = data);
  }





}
