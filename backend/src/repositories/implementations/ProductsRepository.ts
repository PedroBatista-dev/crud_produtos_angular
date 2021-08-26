import { dbQuery } from "../../db";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepository implements IProductsRepository {
  private products: Product[] = [];
  async save(product: Product): Promise<Product | undefined> {
    await dbQuery(
      "INSERT INTO products (name, qtItems, vlUnit) VALUES (?,?,?)",
      [product.name, product.qtItems, product.vlUnit]
    );
    return product;
  }

  async update(product: Product): Promise<Product | any> {
    await dbQuery(
      "UPDATE products SET name = ?, qtItems = ?, vlUnit = ? WHERE id = ?",
      [product.name, product.qtItems, product.vlUnit, product.id]
    );
    return product;
  }

  async delete(id: string): Promise<boolean> {
    await dbQuery("DELETE FROM products WHERE id = ?", [id]);
    return true;
  }

  async get(): Promise<Product[]> {
    return await dbQuery("SELECT * FROM products");
  }

  async getById(id: string): Promise<Product> {
    const product = await dbQuery("SELECT * FROM products WHERE id = ?", [id]);
    return;
  }
}
