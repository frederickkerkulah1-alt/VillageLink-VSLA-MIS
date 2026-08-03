import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  Alert,
  TextField,
  Typography,
} from "@mui/material";

import {
  DataGrid,
} from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import {
  getCountries,
  createCountry,
  updateCountry,
  deleteCountry,
} from "../../services/countryService";

function Countries() {
  const [countries, setCountries] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);

  const [editingCountry, setEditingCountry] = useState(null);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(false);

  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // ==========================================
  // Load Countries
  // ==========================================

  const loadCountries = async () => {
    try {
      setLoading(true);

      const response = await getCountries();

      setCountries(response.data);
    } catch (error) {
      console.error(error);

      showNotification(
        "Unable to load countries.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  // ==========================================
  // Notification
  // ==========================================

  const showNotification = (message, severity = "success") => {
    setNotification({
      open: true,
      message,
      severity,
    });
  };

  const closeNotification = () => {
    setNotification({
      ...notification,
      open: false,
    });
  };

  // ==========================================
  // Open Add Dialog
  // ==========================================

  const handleAdd = () => {
    setEditingCountry(null);
    setName("");
    setCode("");

    setOpenDialog(true);
  };

  // ==========================================
  // Open Edit Dialog
  // ==========================================

  const handleEdit = (country) => {
    setEditingCountry(country);

    setName(country.name);
    setCode(country.code);

    setOpenDialog(true);
  };

  // ==========================================
  // Close Dialog
  // ==========================================

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // ==========================================
  // Save Country
  // ==========================================

  const handleSubmit = async () => {
    if (!name.trim() || !code.trim()) {
      showNotification(
        "Please enter both country name and country code.",
        "warning"
      );

      return;
    }

    try {
      if (editingCountry) {
        await updateCountry(editingCountry.id, {
          name: name.trim(),
          code: code.trim().toUpperCase(),
        });

        showNotification(
          "Country updated successfully."
        );
      } else {
        await createCountry({
          name: name.trim(),
          code: code.trim().toUpperCase(),
        });

        showNotification(
          "Country added successfully."
        );
      }

      setOpenDialog(false);

      setName("");
      setCode("");

      await loadCountries();
    } catch (error) {
      console.error(error);

      showNotification(
        error.response?.data?.message ||
          "Unable to save country.",
        "error"
      );
    }
  };

  // ==========================================
  // Delete Country
  // ==========================================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this country?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteCountry(id);

      showNotification(
        "Country deleted successfully."
      );

      await loadCountries();
    } catch (error) {
      console.error(error);

      showNotification(
        error.response?.data?.message ||
          "Unable to delete country.",
        "error"
      );
    }
  };

  // ==========================================
  // DataGrid Columns
  // ==========================================

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },

    {
      field: "name",
      headerName: "Country Name",
      flex: 1,
      minWidth: 200,
    },

    {
      field: "code",
      headerName: "Country Code",
      width: 180,
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      filterable: false,

      renderCell: (params) => (
        <Box>
          <IconButton
            color="primary"
            onClick={() =>
              handleEdit(params.row)
            }
          >
            <EditIcon />
          </IconButton>

          <IconButton
            color="error"
            onClick={() =>
              handleDelete(params.row.id)
            }
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  // ==========================================
  // Page
  // ==========================================

  return (
    <Box sx={{ p: 3 }}>

      {/* Page Header */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Country Management
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
          >
            Manage countries registered in
            VillageLink VSLA MIS.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          Add Country
        </Button>
      </Box>

      {/* Data Table */}

      <Card elevation={2}>
        <CardContent>

          <Box
            sx={{
              height: 500,
              width: "100%",
            }}
          >
            <DataGrid
              rows={countries}
              columns={columns}
              loading={loading}
              pageSizeOptions={[5, 10, 25, 50]}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                    page: 0,
                  },
                },
              }}
              disableRowSelectionOnClick
            />
          </Box>

        </CardContent>
      </Card>

      {/* Add/Edit Dialog */}

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {editingCountry
            ? "Edit Country"
            : "Add Country"}
        </DialogTitle>

        <DialogContent>

          <TextField
            label="Country Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <TextField
            label="Country Code"
            fullWidth
            margin="normal"
            value={code}
            onChange={(e) =>
              setCode(e.target.value)
            }
            inputProps={{
              maxLength: 3,
            }}
            helperText="Example: LBR"
          />

        </DialogContent>

        <DialogActions>

          <Button
            onClick={handleCloseDialog}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSubmit}
          >
            {editingCountry
              ? "Update Country"
              : "Save Country"}
          </Button>

        </DialogActions>
      </Dialog>

      {/* Notifications */}

      <Snackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={closeNotification}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={closeNotification}
          severity={notification.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>

    </Box>
  );
}

export default Countries;