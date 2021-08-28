import { Product } from "../entities/Product";

export interface IProductsRepository {
  save(product: Product): Promise<Product>;
  update(product: Product): Promise<Product>;
  delete(id: string): Promise<boolean>;
  get(name: string): Promise<Product[]>;
  getById(id: string): Promise<Product>;
}
