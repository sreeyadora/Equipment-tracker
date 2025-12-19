const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const filePath = "./data/equipment.json";

// Read data
const readData = () => {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

// Write data
const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// GET all equipment
router.get("/", (req, res) => {
  res.json(readData());
});

// POST new equipment
router.post("/", (req, res) => {
  const data = readData();
  const newItem = { id: uuidv4(), ...req.body };
  data.push(newItem);
  writeData(data);
  res.status(201).json(newItem);
});

// PUT update equipment
router.put("/:id", (req, res) => {
  const data = readData();
  const index = data.findIndex(item => item.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Equipment not found" });
  }

  data[index] = { ...data[index], ...req.body };
  writeData(data);
  res.json(data[index]);
});

// DELETE equipment
router.delete("/:id", (req, res) => {
  const data = readData().filter(item => item.id !== req.params.id);
  writeData(data);
  res.status(204).end();
});

module.exports = router;
