import { Product } from "../entities/Product";

export interface IProductsRepository {
  save(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
  get(): Promise<Product[]>;
  getById(id: string): Promise<Product>;
}
