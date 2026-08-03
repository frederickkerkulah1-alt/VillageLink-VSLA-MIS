const prisma = require("../prismaClient");

// Get all organizations
exports.getOrganizations = async (req, res) => {
  try {
    const organizations = await prisma.organization.findMany({
      include: {
        country: true,
      },
    });

    res.json(organizations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create organization
exports.createOrganization = async (req, res) => {
  try {
    const organization = await prisma.organization.create({
      data: req.body,
    });

    res.json(organization);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};