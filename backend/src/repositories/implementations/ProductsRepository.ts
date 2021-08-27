import { dbQuery } from "../../db";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepository implements IProductsRepository {
  async save(product: Product): Promise<void> {
    await dbQuery(
      "INSERT INTO products (name, qtItems, vlUnit) VALUES (?,?,?)",
      [product.name, product.qtItems, product.vlUnit]
    );
  }

  async update(product: Product): Promise<void> {
    await dbQuery(
      "UPDATE products SET name = ?, qtItems = ?, vlUnit = ? WHERE id = ?",
      [product.name, product.qtItems, product.vlUnit, product.id]
    );
  }

  async delete(id: string): Promise<void> {
    await dbQuery("DELETE FROM products WHERE id = ?", [id]);
  }

  async get(): Promise<Product[]> {
    return await dbQuery("SELECT * FROM products");
  }

  async getById(id: string): Promise<any> {
    return await dbQuery("SELECT * FROM products WHERE id = ?", [id]);
  }
}
