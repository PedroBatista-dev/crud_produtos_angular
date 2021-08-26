export const product = {
  id: undefined,
  name: "Teste Create",
  qtItems: 2,
  vlUnit: 100,
};

describe("Module Products", () => {
  require("../useCases/CreateProduct/CreateProductUseCase.spec")(product);
  require("../useCases/UpdateProduct/UpdateProductUseCase.spec")(product);
  require("../useCases/GetProduct/GetProductUseCase.spec")();
  require("../useCases/GetByIdProduct/GetByIdProductUseCase.spec")(product);
  require("../useCases/DeleteProduct/DeleteProductUseCase.spec")(product);
});
