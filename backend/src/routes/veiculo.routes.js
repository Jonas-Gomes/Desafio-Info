const router = require('express-promise-router')();
const veiculoController = require('../controllers/veiculoController');

// Create
router.post('/veiculo', veiculoController.createVeiculo);

// Read
router.get('/veiculo', veiculoController.listVeiculos);

// Update
router.put('/veiculo/:id', veiculoController.updateVeiculo);

// Delete
router.delete('/veiculo/:id', veiculoController.deleteVeiculo);

module.exports = router;