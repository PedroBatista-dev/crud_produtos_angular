import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

module.exports = (product: any) => {
  it("update product", (done) => {
    product.name = "Teste UPDATE";
    request("localhost:3001")
      .put("/products/" + product.id)
      .send(product)
      .end((err, response) => {
        expect(response.body.status).to.equal(true);
        expect(response.body.statusCode).to.equal(200);
        done();
      });
  });
};
