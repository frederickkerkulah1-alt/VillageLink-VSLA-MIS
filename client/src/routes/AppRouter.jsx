
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

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

// Reports and Settings
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

// Not Found
import NotFound from "../pages/NotFound";

// Temporary screens for modules not yet developed
function AdditionalModulePage() {
  const location = useLocation();

  const pageNames = {
    "/organization-dashboard": "Organization Dashboard",
    "/project-dashboard": "Project Dashboard",
    "/program-dashboard": "Program Dashboard",
    "/me-dashboard": "Monitoring and Evaluation Dashboard",
    "/field-dashboard": "Field Officer Dashboard",
    "/saving-agent-dashboard": "Saving Agent Dashboard",

    "/documents/dashboard": "Document Management Dashboard",
    "/documents/upload": "Upload Document",
    "/documents/library": "Document Library",
    "/documents/categories": "Document Categories",
    "/documents/folders": "Folder Manager",
    "/documents/approvals": "Document Approvals",
    "/documents/versions": "Document Version Control",
    "/documents/archive": "Document Archive",
    "/documents/reports": "Document Reports",
    "/documents/settings": "Document Settings",

    "/knowledge/dashboard": "Knowledge Centre Dashboard",
    "/knowledge/training-topics": "Training Topics",
    "/knowledge/manuals": "Training Manuals",
    "/knowledge/policies": "Policies",
    "/knowledge/templates": "Templates",
    "/knowledge/downloads": "Downloads",
    "/knowledge/videos": "Training Videos",
    "/knowledge/best-practices": "Best Practices",
    "/knowledge/faqs": "Frequently Asked Questions",
    "/knowledge/settings": "Knowledge Centre Settings"
  };

  const title = pageNames[location.pathname] || "VillageLink Module";

  return (
    <div className="module-page">
      <h1>{title}</h1>
      <p>
        This module has been registered in VillageLink MIS.
        Its full functionality will be developed in the next stages.
      </p>
    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* APPLICATION LAYOUT */}
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Dashboard />} />

          {/* ROLE DASHBOARDS */}
          <Route path="organization-dashboard" element={<AdditionalModulePage />} />
          <Route path="project-dashboard" element={<AdditionalModulePage />} />
          <Route path="program-dashboard" element={<AdditionalModulePage />} />
          <Route path="me-dashboard" element={<AdditionalModulePage />} />
          <Route path="field-dashboard" element={<AdditionalModulePage />} />
          <Route path="saving-agent-dashboard" element={<AdditionalModulePage />} />

          {/* ADMINISTRATION */}
          <Route path="organizations" element={<Organizations />} />
          <Route path="projects" element={<Projects />} />
          <Route path="countries" element={<Countries />} />
          <Route path="districts" element={<Districts />} />
          <Route path="clans" element={<Clans />} />
          <Route path="communities" element={<Communities />} />
          <Route path="users" element={<Users />} />
          <Route path="roles" element={<Roles />} />

          {/* VSLA MANAGEMENT */}
          <Route path="groups" element={<Groups />} />
          <Route path="members" element={<Members />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="savings" element={<Savings />} />
          <Route path="loans" element={<Loans />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="livelihood" element={<Livelihood />} />
          <Route path="cash-count" element={<CashCount />} />

          {/* DOCUMENT MANAGEMENT */}
          <Route path="documents/dashboard" element={<AdditionalModulePage />} />
          <Route path="documents/upload" element={<AdditionalModulePage />} />
          <Route path="documents/library" element={<AdditionalModulePage />} />
          <Route path="documents/categories" element={<AdditionalModulePage />} />
          <Route path="documents/folders" element={<AdditionalModulePage />} />
          <Route path="documents/approvals" element={<AdditionalModulePage />} />
          <Route path="documents/versions" element={<AdditionalModulePage />} />
          <Route path="documents/archive" element={<AdditionalModulePage />} />
          <Route path="documents/reports" element={<AdditionalModulePage />} />
          <Route path="documents/settings" element={<AdditionalModulePage />} />

          {/* KNOWLEDGE CENTRE */}
          <Route path="knowledge/dashboard" element={<AdditionalModulePage />} />
          <Route path="knowledge/training-topics" element={<AdditionalModulePage />} />
          <Route path="knowledge/manuals" element={<AdditionalModulePage />} />
          <Route path="knowledge/policies" element={<AdditionalModulePage />} />
          <Route path="knowledge/templates" element={<AdditionalModulePage />} />
          <Route path="knowledge/downloads" element={<AdditionalModulePage />} />
          <Route path="knowledge/videos" element={<AdditionalModulePage />} />
          <Route path="knowledge/best-practices" element={<AdditionalModulePage />} />
          <Route path="knowledge/faqs" element={<AdditionalModulePage />} />
          <Route path="knowledge/settings" element={<AdditionalModulePage />} />

          {/* REPORTS AND SETTINGS */}
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />

        </Route>

        {/* 404 PAGE */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
