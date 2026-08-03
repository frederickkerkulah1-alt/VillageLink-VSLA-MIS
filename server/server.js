const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ================================
// ROUTES
// ================================

const organizationRoutes = require("./routes/organizationRoutes");
const countryRoutes = require("./routes/countryRoutes");

// ================================
// API ROUTES
// ================================

app.use("/api/organizations", organizationRoutes);
app.use("/api/countries", countryRoutes);

// ================================
// HOME
// ================================

app.get("/", (req, res) => {
  res.json({
    system: "VillageLink VSLA MIS",
    version: "2.0",
    backend: "Running",
    database: "SQLite + Prisma"
  });
});

// ================================

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 VillageLink Backend running on Port ${PORT}`);
});