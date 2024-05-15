const express = require("express");
const router = express.Router();
const fs = require("fs");

//function to read our data file
function readCharacters() {
  const characterData = fs.readFileSync("./data/characters.json");
  const parsedData = JSON.parse(characterData);
  return parsedData;
}

//GET endpoint for all characters
router.get("/", (_req, res) => {
  const characters = readCharacters();
  console.log(characters);
  res.json(characters);
});

//GET endpoint for individual character
router.get("/:id", (req, res) => {
  const character = readCharacters();
  const singleCharacter = character.find(
    (character) => character.id === req.params.id
  );
  if (!singleCharacter) {
    res.status(404).send("No Face not found; 顔なしが見つかりません");
  } else {
    res.json(singleCharacter);
  }
});

//Export router for use in index.js
module.exports = router;
