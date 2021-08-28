import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import Swal from 'sweetalert2';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'qtItems', 'vlUnit', 'action'];
  searchProduct: string = '';

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }

  navigateForCreateProduct(): void {
    this.router.navigate(['/products/create']);
  }

  search(): void {
    this.productService.read(this.searchProduct).subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(id: string): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'O registro será excluído permanentemente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, apague!',
      cancelButtonText: 'Não, engano',
    }).then((result) => {
      if (result.value) {
        this.productService.delete(id).subscribe(
          (result) => {
            this.productService.read().subscribe((products) => {
              this.products = products;
            });
            Swal.fire('Deletado!', 'Registro deletado com sucesso!', 'success');
          },
          (error) => {
            Swal.fire('Cancelado', 'Operação foi cancelada!', 'error');
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Operação foi cancelada!', 'error');
      }
    });
  }
}
