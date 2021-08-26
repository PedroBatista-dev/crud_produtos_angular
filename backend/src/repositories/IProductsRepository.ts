import { Product } from "../entities/Product";

export interface IProductsRepository {
  save(product: Product): Promise<Product | undefined>;
  update(product: Product): Promise<Product | undefined>;
  delete(id: string): Promise<boolean>;
  get(): Promise<Product[]>;
  getById(id: string): Promise<Product>;
}
