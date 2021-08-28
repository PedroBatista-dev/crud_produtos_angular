import { dbQuery, createProduct, updateOrDeleteProduct } from "../../db";
import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepository implements IProductsRepository {
  async save(product: Product): Promise<Product> {
    const id = await createProduct(
      "INSERT INTO products (name, qtItems, vlUnit) VALUES (?,?,?)",
      [product.name, product.qtItems, product.vlUnit]
    );
    return new Product(product, id);
  }

  async update(product: Product): Promise<Product> {
    const changes = await updateOrDeleteProduct(
      "UPDATE products SET name = ?, qtItems = ?, vlUnit = ? WHERE id = ?",
      [product.name, product.qtItems, product.vlUnit, product.id]
    );
    if (changes) return product;
  }

  async delete(id: string): Promise<boolean> {
    const changes = await updateOrDeleteProduct(
      "DELETE FROM products WHERE id = ?",
      [id]
    );
    if (changes) return true;
  }

  async get(name: string): Promise<Product[]> {
    if (name) {
      name = `${name}%`;
      return await dbQuery("SELECT * FROM products WHERE name LIKE ?", [name]);
    } else return await dbQuery("SELECT * FROM products");
  }

  async getById(id: string): Promise<any> {
    return await dbQuery("SELECT * FROM products WHERE id = ?", [id]);
  }
}
