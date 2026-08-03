const prisma = require("../prismaClient");

// ======================================
// Get All Countries
// ======================================

exports.getCountries = async (req, res) => {
  try {
    const countries = await prisma.country.findMany({
      orderBy: {
        name: "asc",
      },
    });

    res.json(countries);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================================
// Create Country
// ======================================

exports.createCountry = async (req, res) => {
  try {
    const country = await prisma.country.create({
      data: req.body,
    });

    res.status(201).json(country);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================================
// Update Country
// ======================================

exports.updateCountry = async (req, res) => {
  try {
    const country = await prisma.country.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    res.json(country);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================================
// Delete Country
// ======================================

exports.deleteCountry = async (req, res) => {
  try {
    await prisma.country.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Country deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};