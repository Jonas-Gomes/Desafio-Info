const db = require("../database/database.js");
const express = require('express');
const Veiculos = require('../models/veiculoModel');

exports.createVeiculo = async (req, res) => {
  Veiculos.create({
    placa: req.body.placa,
    chassi: req.body.chassi,
    renavam: req.body.renavam, 
    modelo: req.body.modelo,
    marca: req.body.marca,
    ano: req.body.ano,
  }).then(() => {
        res.status(201).send('Cadastrado com sucesso');
    }).catch((err) => {
        res.send('erro', err);
    })
};

exports.listVeiculos = async (req, res) =>{
  Veiculos.findAll().then((veiculos) => {
    res.status(200).send(veiculos);
  });
}

exports.updateVeiculo = async (req, res) => {
  Veiculos.update(
        {placa: req.body.placa,
        chassi: req.body.chassi,
        renavam: req.body.renavam,
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano},
        {where: {id: req.params.id}},
    ).then(() => {
        res.status(201).send('Dados do veículo alterados com sucesso');
    }).catch(err => {
        res.send('erro ao atualizar');
    })
};

exports.deleteVeiculo = async (req, res) => {
  Veiculos.destroy({where: {'id': req.params.id}}).then(() => {
        res.status(200).send('Veículo deletado com sucesso.');
    }).catch(err => {
        res.send('erro ao deletar veículo.');
    })
}
