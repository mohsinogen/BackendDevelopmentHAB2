const fs = require("fs");

// Function to read JSON data from file
function read() {
  try {
    const data = fs.readFileSync("./db.json", "utf8");
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (err) {
    console.log("ERRROR", err);
    throw new Error("Error reading file:", err);
  }
}

module.exports = {
  read,
};
