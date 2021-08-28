import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/shared/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css'],
})
export class ProductCrudComponent implements OnInit {
  constructor(headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products',
    };
  }

  ngOnInit(): void {}
}
