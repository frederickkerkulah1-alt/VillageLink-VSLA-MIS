import { Link } from "react-router-dom";

import {
  FaHome,
  FaBuilding,
  FaGlobe,
  FaProjectDiagram,
  FaUserCog,
  FaUserShield,
  FaMapMarkedAlt,
  FaMap,
  FaPlaceOfWorship,
  FaUsers,
  FaUserFriends,
  FaUserTie,
  FaCalendarAlt,
  FaClipboardCheck,
  FaCashRegister,
  FaPiggyBank,
  FaMoneyCheckAlt,
  FaSeedling,
  FaChartBar,
  FaCog,
  FaTachometerAlt,
  FaFolderOpen,
  FaBook,
  FaFileUpload,
  FaFolder,
  FaTags,
  FaCheckCircle,
  FaHistory,
  FaArchive,
  FaDownload,
  FaVideo,
  FaQuestionCircle,
  FaAward,
  FaFileAlt
} from "react-icons/fa";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2>VillageLink MIS</h2>

      {/* ====================================== */}
      {/* EXECUTIVE */}
      {/* ====================================== */}

      <h4>Executive</h4>

      <nav>

        <Link to="/">
          <FaHome /> Executive Dashboard
        </Link>

      </nav>

      {/* ====================================== */}
      {/* ROLE DASHBOARDS */}
      {/* ====================================== */}

      <h4>Role Dashboards</h4>

      <nav>

        <Link to="/organization-dashboard">
          <FaTachometerAlt /> Organization Dashboard
        </Link>

        <Link to="/project-dashboard">
          <FaTachometerAlt /> Project Dashboard
        </Link>

        <Link to="/program-dashboard">
          <FaTachometerAlt /> Program Dashboard
        </Link>

        <Link to="/me-dashboard">
          <FaTachometerAlt /> M&E Dashboard
        </Link>

        <Link to="/field-dashboard">
          <FaTachometerAlt /> Field Officer Dashboard
        </Link>

        <Link to="/saving-agent-dashboard">
          <FaTachometerAlt /> Saving Agent Dashboard
        </Link>

      </nav>

      {/* ====================================== */}
      {/* ADMINISTRATION */}
      {/* ====================================== */}

      <h4>Administration</h4>

      <nav>

        <Link to="/organizations">
          <FaBuilding /> Organizations
        </Link>

        <Link to="/countries">
          <FaGlobe /> Countries
        </Link>

        <Link to="/projects">
          <FaProjectDiagram /> Projects
        </Link>

        <Link to="/users">
          <FaUserCog /> Users
        </Link>

        <Link to="/roles">
          <FaUserShield /> Role Management
        </Link>

      </nav>

      {/* ====================================== */}
      {/* LOCATION */}
      {/* ====================================== */}

      <h4>Location Management</h4>

      <nav>

        <Link to="/districts">
          <FaMapMarkedAlt /> Districts
        </Link>

        <Link to="/clans">
          <FaMap /> Clans
        </Link>

        <Link to="/communities">
          <FaPlaceOfWorship /> Communities
        </Link>

      </nav>

      {/* ====================================== */}
      {/* VSLA */}
      {/* ====================================== */}

      <h4>VSLA Management</h4>

      <nav>

        <Link to="/groups">
          <FaUsers /> Groups
        </Link>

        <Link to="/members">
          <FaUserFriends /> Members
        </Link>

        <Link to="/leadership">
          <FaUserTie /> Leadership
        </Link>

        <Link to="/meetings">
          <FaCalendarAlt /> Weekly Meetings
        </Link>

        <Link to="/monitoring">
          <FaClipboardCheck /> Monitoring
        </Link>

        <Link to="/cashcount">
          <FaCashRegister /> Cash Count
        </Link>

        <Link to="/savings">
          <FaPiggyBank /> Savings
        </Link>

        <Link to="/loans">
          <FaMoneyCheckAlt /> Loans
        </Link>

        <Link to="/livelihood">
          <FaSeedling /> Livelihood
        </Link>

      </nav>
            {/* ====================================== */}
      {/* DOCUMENT MANAGEMENT */}
      {/* ====================================== */}

      <h4>Document Management</h4>

      <nav>

        <Link to="/documents/dashboard">
          <FaFolderOpen /> Dashboard
        </Link>

        <Link to="/documents/upload">
          <FaFileUpload /> Upload Document
        </Link>

        <Link to="/documents/library">
          <FaFolder /> Document Library
        </Link>

        <Link to="/documents/categories">
          <FaTags /> Categories
        </Link>

        <Link to="/documents/folders">
          <FaFolder /> Folder Manager
        </Link>

        <Link to="/documents/approvals">
          <FaCheckCircle /> Approvals
        </Link>

        <Link to="/documents/versions">
          <FaHistory /> Version Control
        </Link>

        <Link to="/documents/archive">
          <FaArchive /> Archive
        </Link>

        <Link to="/documents/reports">
          <FaChartBar /> Reports
        </Link>

        <Link to="/documents/settings">
          <FaCog /> Settings
        </Link>

      </nav>

      {/* ====================================== */}
      {/* KNOWLEDGE CENTRE */}
      {/* ====================================== */}

      <h4>Knowledge Centre</h4>

      <nav>

        <Link to="/knowledge/dashboard">
          <FaBook /> Dashboard
        </Link>

        <Link to="/knowledge/training-topics">
          <FaBook /> Training Topics
        </Link>

        <Link to="/knowledge/manuals">
          <FaFileAlt /> Manuals
        </Link>

        <Link to="/knowledge/policies">
          <FaFileAlt /> Policies
        </Link>

        <Link to="/knowledge/templates">
          <FaFileAlt /> Templates
        </Link>

        <Link to="/knowledge/downloads">
          <FaDownload /> Downloads
        </Link>

        <Link to="/knowledge/videos">
          <FaVideo /> Videos
        </Link>

        <Link to="/knowledge/best-practices">
          <FaAward /> Best Practices
        </Link>

        <Link to="/knowledge/faqs">
          <FaQuestionCircle /> FAQs
        </Link>

        <Link to="/knowledge/settings">
          <FaCog /> Settings
        </Link>

      </nav>

      {/* ====================================== */}
      {/* REPORTS */}
      {/* ====================================== */}

      <h4>Reports</h4>

      <nav>

        <Link to="/reports">
          <FaChartBar /> Reports
        </Link>

      </nav>

      {/* ====================================== */}
      {/* SYSTEM */}
      {/* ====================================== */}

      <h4>System</h4>

      <nav>

        <Link to="/settings">
          <FaCog /> Settings
        </Link>

      </nav>

    </div>

  );

}

export default Sidebar;