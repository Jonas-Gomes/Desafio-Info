const { describe, it } = require("mocha");
const Chai = require("chai");
const ChaiHttp = require("chai-http");
const App = require("../app");

let should = Chai.should();
Chai.use(ChaiHttp);
Chai.use(require("chai-things"));

const server = App;

describe("Teste Veículos", () => {

  // Teste da funcionalidade Create
  it("Teste criando veículo", async (done) => {
    const dataCopy = {
      placa: "ABC-1234",
      chassi: "9BWZZZ377VT004251",
      renavam: "00891353364",
      modelo: "SUV",
      marca: "Chevrolet",
      ano: 2020,
    };

    Chai.request(server)
      .post("http://localhost:3000/veiculo")
      .send(dataCopy)
      .end((err, res) => {
        res.should.have.status(200);
      });

    done();
  });

  // Teste da funcionalidade Read
  it("Teste listando veículos", async (done) => {
    Chai.request(server)
      .get("http://localhost:3000/veiculo")
      .send(dataCopy)
      .end((err, res) => {
        res.should.have.status(200);
      });

    done();
  });

  // Teste da funcionalidade Update
  it("Teste atualizando veículos", async (done) => {
    const dataCopy = {
      placa: "DEF-5678",
      chassi: "9BWZZZ377VT004200",
      renavam: "00891353311",
      modelo: "SUV",
      marca: "Chevrolet",
      ano: 2020,
    };

    Chai.request(server)
      .put("http://localhost:3000/veiculo/1")
      .send(dataCopy)
      .end((err, res) => {
        res.should.have.status(200);
      });

    done();
  });

  // Teste da funcionalidade Delete
  it("Teste para deletar veículo", async (done) => {
      Chai.request(server)
        .delete("http://localhost:3000/veiculo")
        .end((err, res) => {
          Chai.request(server)
            .get("http://localhost:3000/veiculo/"+res.body.model.id)
            .end((err, res) => {
                res.should.have.status(200);
            });
        });
    done();
  })
});