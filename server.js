#!/usr/bin/env node

import minimist from "minimist";
import express from "express";
import { roll } from "./lib/roll.js";

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port||5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port);

app.get("/app/", (req,res) => {
    res.send("200 OK");
});


app.get("/app/roll/", (req,res) => {
    res.send(roll(6, 2, 1));
});

app.post('/app/roll', (req, res) => {
    var sides = parseInt(req.body.sides) || 6;
    var dice = parseInt(req.body.dice) || 2;
    var rolls = parseInt(req.body.rolls) || 1;
    res.send(roll(sides, dice, rolls));
})

app.get('/app/roll/:sides/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), 2, 1));
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
})

app.get('/app/roll/:sides/:dice/:rolls', (req, res) => {
    const sides = parseInt(req.params.sides)
    const dice = parseInt(req.params.dice)
    const rolls = parseInt(req.params.rolls)
    res.send(roll(sides, dice, rolls))
})

app.get("*", (req,res) => {
    res.status(404).send("404 NOT FOUND");
});
