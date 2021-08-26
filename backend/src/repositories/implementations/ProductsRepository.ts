import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepository implements IProductsRepository {
  private products: Product[] = [];
  async save(product: Product): Promise<Product | undefined> {
    this.products.push(product);
    return product;
  }

  async update(product: Product): Promise<Product | any> {
    const condicoes = { id: product.id };
    return product;
  }

  async delete(id: string): Promise<boolean> {
    const condicoes = { id: id };
    return true;
  }

  async get(): Promise<any[]> {
    return this.products;
  }

  async getById(id: string): Promise<Product> {
    return this.products[0];
  }
}
