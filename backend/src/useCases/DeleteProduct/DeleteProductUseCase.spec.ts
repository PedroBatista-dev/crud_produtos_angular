import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

module.exports = (product: any) => {
  it("delete product", (done) => {
    request("localhost:3001")
      .delete("/products/" + product.id)
      .end((err, response) => {
        expect(response.body.status).to.equal(true);
        expect(response.body.statusCode).to.equal(200);
        done();
      });
  });
};
