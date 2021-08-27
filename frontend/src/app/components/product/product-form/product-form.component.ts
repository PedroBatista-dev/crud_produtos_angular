import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    name: '',
    qtItems: null,
    vlUnit: null,
  };

  titulo = 'Adicionar';

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setCurrentAction();
  }

  setCurrentAction(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.titulo = 'Alterar';
      this.productService.readById(id).subscribe((product) => {
        this.product = product;
      });
    }
  }

  createUpdateProduct(): void {
    if (this.titulo == 'Adicionar') {
      this.productService.create(this.product).subscribe((product) => {
        this.productService.showMessage(
          `Produto ${product.name} criado com sucesso!`
        );
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.update(this.product).subscribe((product) => {
        this.productService.showMessage(
          `Produto ${product.name} atualizado com sucesso!`
        );
        this.router.navigate(['/products']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
