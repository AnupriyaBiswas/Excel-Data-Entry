const express = require("express");
const XLSX = require("xlsx");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "data.xlsx";
const SHEET = "Sheet1";

/* POST: Save form data */
app.post("/submit", (req, res) => {
  const { name, email, age } = req.body;

  let workbook, worksheet;

  if (fs.existsSync(FILE)) {
    workbook = XLSX.readFile(FILE);
    worksheet = workbook.Sheets[SHEET];
  } else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.aoa_to_sheet([
      ["Name", "Email", "Age", "Timestamp"]
    ]);
    XLSX.utils.book_append_sheet(workbook, worksheet, SHEET);
  }

  XLSX.utils.sheet_add_aoa(
    worksheet,
    [[name, email, age, new Date().toISOString()]],
    { origin: -1 }
  );

  XLSX.writeFile(workbook, FILE);
  res.json({ success: true });
});

/* GET: Download Excel */
app.get("/download", (req, res) => {
  if (!fs.existsSync(FILE)) {
    return res.status(404).send("Excel file not found");
  }
  res.download(FILE);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
