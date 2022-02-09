const db = require("../connection/PgConnection");

exports.createVeiculo = async (req, res) => {
  const { id, placa, chassi, renavam, modelo, marca, ano } = req.body;
  const { rows } = await db.query(
    "INSERT INTO veiculos (id, placa, chassi, renavam, modelo, marca, ano) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [id, placa, chassi, renavam, modelo, marca, ano]
  );

  res.status(201).send({
    message: "Novo veículo Cadastrado",
    body: {
      id: { id },
      placa: { placa },
      chassi: { chassi },
      renavam: { renavam },
      modelo: { modelo },
      marca: { marca },
      ano: { ano }
    },
  });
};

exports.listVeiculos = async (req, res) =>{
  const response = await db.query('SELECT * FROM veiculos ORDER BY id ASC');
  res.status(200).send(response.rows);
}

exports.updateVeiculo = async (req, res) => {
  const id = parseInt(req.params.id);
  const{nome} = req.body;

  const response = await db.query(
    "UPDATE veiculos SET nome = $1 WHERE id = $2",
    [nome, id]
  );
  res.status(200).send({message: "usuario atualizado!"});
};

exports.deleteVeiculo = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query("DELETE FROM veiculos WHERE id = $1",[
    id
  ]);
  res.status(200).send({message: "veiculo deletado!", id});
}
