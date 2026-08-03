import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

// =====================================
// Executive Dashboard
// =====================================

import Dashboard from "./pages/Dashboard";

// =====================================
// Role Dashboards
// =====================================

import OrganizationDashboard from "./pages/OrganizationDashboard";
import ProjectManagerDashboard from "./pages/ProjectManagerDashboard";
import ProgramDashboard from "./pages/ProgramDashboard";
import MEDashboard from "./pages/MEDashboard";
import FieldOfficerDashboard from "./pages/FieldOfficerDashboard";
import SavingAgentDashboard from "./pages/SavingAgentDashboard";

// =====================================
// Administration
// =====================================

import Organizations from "./pages/Organizations";
import Countries from "./pages/Administration/Countries";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import Roles from "./pages/Roles";

// =====================================
// Location Management
// =====================================

import Districts from "./pages/Districts";
import Clans from "./pages/Clans";
import Communities from "./pages/Communities";

// =====================================
// VSLA Management
// =====================================

import Groups from "./pages/Groups";
import Members from "./pages/Members";
import Leadership from "./pages/Leadership";
import Meetings from "./pages/Meetings";
import Monitoring from "./pages/Monitoring";
import CashCount from "./pages/CashCount";
import Savings from "./pages/Savings";
import Loans from "./pages/Loans";
import Livelihood from "./pages/Livelihood";

// =====================================
// Document Management
// =====================================

import DocumentDashboard from "./pages/documents/DocumentDashboard";
import UploadDocument from "./pages/documents/UploadDocument";
import DocumentLibrary from "./pages/documents/DocumentLibrary";
import DocumentCategories from "./pages/documents/DocumentCategories";
import FolderManager from "./pages/documents/FolderManager";
import DocumentApprovals from "./pages/documents/DocumentApprovals";
import VersionControl from "./pages/documents/VersionControl";
import Archive from "./pages/documents/Archive";
import DocumentReports from "./pages/documents/DocumentReports";
import DocumentSettings from "./pages/documents/DocumentSettings";

// =====================================
// Knowledge Centre
// =====================================

import KnowledgeDashboard from "./pages/knowledge/KnowledgeDashboard";
import TrainingTopics from "./pages/knowledge/TrainingTopics";
import Manuals from "./pages/knowledge/Manuals";
import Policies from "./pages/knowledge/Policies";
import Templates from "./pages/knowledge/Templates";
import Downloads from "./pages/knowledge/Downloads";
import Videos from "./pages/knowledge/Videos";
import BestPractices from "./pages/knowledge/BestPractices";
import FAQs from "./pages/knowledge/FAQs";
import KnowledgeSettings from "./pages/knowledge/KnowledgeSettings";

// =====================================
// Reports & Settings
// =====================================

import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <MainLayout>
      <Routes>

        {/* =====================================
            Executive Dashboard
        ===================================== */}

        <Route path="/" element={<Dashboard />} />

        {/* =====================================
            Role Dashboards
        ===================================== */}

        <Route
          path="/organization-dashboard"
          element={<OrganizationDashboard />}
        />

        <Route
          path="/project-dashboard"
          element={<ProjectManagerDashboard />}
        />

        <Route
          path="/program-dashboard"
          element={<ProgramDashboard />}
        />

        <Route
          path="/me-dashboard"
          element={<MEDashboard />}
        />

        <Route
          path="/field-dashboard"
          element={<FieldOfficerDashboard />}
        />

        <Route
          path="/saving-agent-dashboard"
          element={<SavingAgentDashboard />}
        />

        {/* =====================================
            Administration
        ===================================== */}

        <Route path="/organizations" element={<Organizations />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />

        {/* =====================================
            Location Management
        ===================================== */}

        <Route path="/districts" element={<Districts />} />
        <Route path="/clans" element={<Clans />} />
        <Route path="/communities" element={<Communities />} />

        {/* =====================================
            VSLA Management
        ===================================== */}

        <Route path="/groups" element={<Groups />} />
        <Route path="/members" element={<Members />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/cashcount" element={<CashCount />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/livelihood" element={<Livelihood />} />

        {/* =====================================
            Document Management
        ===================================== */}

        <Route
          path="/documents/dashboard"
          element={<DocumentDashboard />}
        />

        <Route
          path="/documents/upload"
          element={<UploadDocument />}
        />

        <Route
          path="/documents/library"
          element={<DocumentLibrary />}
        />

        <Route
          path="/documents/categories"
          element={<DocumentCategories />}
        />

        <Route
          path="/documents/folders"
          element={<FolderManager />}
        />

        <Route
          path="/documents/approvals"
          element={<DocumentApprovals />}
        />

        <Route
          path="/documents/versions"
          element={<VersionControl />}
        />

        <Route
          path="/documents/archive"
          element={<Archive />}
        />

        <Route
          path="/documents/reports"
          element={<DocumentReports />}
        />

        <Route
          path="/documents/settings"
          element={<DocumentSettings />}
        />

        {/* =====================================
            Knowledge Centre
        ===================================== */}

        <Route
          path="/knowledge/dashboard"
          element={<KnowledgeDashboard />}
        />

        <Route
          path="/knowledge/training-topics"
          element={<TrainingTopics />}
        />

        <Route
          path="/knowledge/manuals"
          element={<Manuals />}
        />

        <Route
          path="/knowledge/policies"
          element={<Policies />}
        />

        <Route
          path="/knowledge/templates"
          element={<Templates />}
        />

        <Route
          path="/knowledge/downloads"
          element={<Downloads />}
        />

        <Route
          path="/knowledge/videos"
          element={<Videos />}
        />

        <Route
          path="/knowledge/best-practices"
          element={<BestPractices />}
        />

        <Route
          path="/knowledge/faqs"
          element={<FAQs />}
        />

        <Route
          path="/knowledge/settings"
          element={<KnowledgeSettings />}
        />

        {/* =====================================
            Reports
        ===================================== */}

        <Route path="/reports" element={<Reports />} />

        {/* =====================================
            Settings
        ===================================== */}

        <Route path="/settings" element={<Settings />} />

      </Routes>
    </MainLayout>
  );
}

export default App;