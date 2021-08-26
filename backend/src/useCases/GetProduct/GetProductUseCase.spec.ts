import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

module.exports = () => {
  it("get products", (done) => {
    request("localhost:3001")
      .get("/products")
      .end((err, response) => {
        expect(response.body.status).to.equal(true);
        expect(response.body.statusCode).to.equal(200);
        done();
      });
  });
};
