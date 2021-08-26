import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'qtItems', 'vlUnit', 'action'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(id: string): void {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage(`Produto excluido com sucesso!`);
      // falta dar reload na pagina!
    });
  }
}
