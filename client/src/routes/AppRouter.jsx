import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../Layout/MainLayout";

// Authentication
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Unauthorized from "../pages/Unauthorized";

// Dashboard
import Dashboard from "../pages/Dashboard";

// Administration
import Organizations from "../pages/Organizations";
import Countries from "../pages/Administration/Countries";
import Districts from "../pages/Districts";
import Clans from "../pages/Clans";
import Communities from "../pages/Communities";
import Users from "../pages/Users";
import Roles from "../pages/Roles";
import Projects from "../pages/Projects";

// VSLA
import Groups from "../pages/Groups";
import Members from "../pages/Members";
import Meetings from "../pages/Meetings";
import Savings from "../pages/Savings";
import Loans from "../pages/Loans";
import Leadership from "../pages/Leadership";
import Monitoring from "../pages/Monitoring";
import Livelihood from "../pages/Livelihood";
import CashCount from "../pages/CashCount";

// Reports
import Reports from "../pages/Reports";

// Settings
import Settings from "../pages/Settings";

// Not Found
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes */}
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Dashboard />} />

          {/* Administration */}
          <Route path="organizations" element={<Organizations />} />
          <Route path="projects" element={<Projects />} />
          <Route path="countries" element={<Countries />} />
          <Route path="districts" element={<Districts />} />
          <Route path="clans" element={<Clans />} />
          <Route path="communities" element={<Communities />} />
          <Route path="users" element={<Users />} />
          <Route path="roles" element={<Roles />} />

          {/* VSLA */}
          <Route path="groups" element={<Groups />} />
          <Route path="members" element={<Members />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="savings" element={<Savings />} />
          <Route path="loans" element={<Loans />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="livelihood" element={<Livelihood />} />
          <Route path="cash-count" element={<CashCount />} />

          {/* Reports */}
          <Route path="reports" element={<Reports />} />

          {/* Settings */}
          <Route path="settings" element={<Settings />} />

        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;