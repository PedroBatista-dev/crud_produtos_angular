export class Product {
  public readonly id: number;
  public name: string;
  public qtItems: number;
  public vlUnit: number;

  constructor(props: Omit<Product, "id">, id?: string) {
    Object.assign(this, props);
  }
}
