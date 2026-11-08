
import { NavLink } from "react-router-dom";

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
  const linkClass = ({ isActive }) =>
    `sidebar-link ${isActive ? "active" : ""}`;

  return (
    <aside className="sidebar">

      <h2>VillageLink MIS</h2>

      <nav className="sidebar-navigation">

        {/* EXECUTIVE */}
        <h4>Executive</h4>

        <NavLink to="/" end className={linkClass}>
          <FaHome /> Executive Dashboard
        </NavLink>

        {/* ROLE DASHBOARDS */}
        <h4>Role Dashboards</h4>

        <NavLink to="/organization-dashboard" className={linkClass}>
          <FaTachometerAlt /> Organization Dashboard
        </NavLink>

        <NavLink to="/project-dashboard" className={linkClass}>
          <FaTachometerAlt /> Project Dashboard
        </NavLink>

        <NavLink to="/program-dashboard" className={linkClass}>
          <FaTachometerAlt /> Program Dashboard
        </NavLink>

        <NavLink to="/me-dashboard" className={linkClass}>
          <FaTachometerAlt /> M&E Dashboard
        </NavLink>

        <NavLink to="/field-dashboard" className={linkClass}>
          <FaTachometerAlt /> Field Officer Dashboard
        </NavLink>

        <NavLink to="/saving-agent-dashboard" className={linkClass}>
          <FaTachometerAlt /> Saving Agent Dashboard
        </NavLink>

        {/* ADMINISTRATION */}
        <h4>Administration</h4>

        <NavLink to="/organizations" className={linkClass}>
          <FaBuilding /> Organizations
        </NavLink>

        <NavLink to="/countries" className={linkClass}>
          <FaGlobe /> Countries
        </NavLink>

        <NavLink to="/projects" className={linkClass}>
          <FaProjectDiagram /> Projects
        </NavLink>

        <NavLink to="/users" className={linkClass}>
          <FaUserCog /> Users
        </NavLink>

        <NavLink to="/roles" className={linkClass}>
          <FaUserShield /> Role Management
        </NavLink>

        {/* LOCATION MANAGEMENT */}
        <h4>Location Management</h4>

        <NavLink to="/districts" className={linkClass}>
          <FaMapMarkedAlt /> Districts
        </NavLink>

        <NavLink to="/clans" className={linkClass}>
          <FaMap /> Clans
        </NavLink>

        <NavLink to="/communities" className={linkClass}>
          <FaPlaceOfWorship /> Communities
        </NavLink>

        {/* VSLA MANAGEMENT */}
        <h4>VSLA Management</h4>

        <NavLink to="/groups" className={linkClass}>
          <FaUsers /> Groups
        </NavLink>

        <NavLink to="/members" className={linkClass}>
          <FaUserFriends /> Members
        </NavLink>

        <NavLink to="/leadership" className={linkClass}>
          <FaUserTie /> Leadership
        </NavLink>

        <NavLink to="/meetings" className={linkClass}>
          <FaCalendarAlt /> Weekly Meetings
        </NavLink>

        <NavLink to="/monitoring" className={linkClass}>
          <FaClipboardCheck /> Monitoring
        </NavLink>

        <NavLink to="/cash-count" className={linkClass}>
          <FaCashRegister /> Cash Count
        </NavLink>

        <NavLink to="/savings" className={linkClass}>
          <FaPiggyBank /> Savings
        </NavLink>

        <NavLink to="/loans" className={linkClass}>
          <FaMoneyCheckAlt /> Loans
        </NavLink>

        <NavLink to="/livelihood" className={linkClass}>
          <FaSeedling /> Livelihood
        </NavLink>

        {/* DOCUMENT MANAGEMENT */}
        <h4>Document Management</h4>

        <NavLink to="/documents/dashboard" className={linkClass}>
          <FaFolderOpen /> Dashboard
        </NavLink>

        <NavLink to="/documents/upload" className={linkClass}>
          <FaFileUpload /> Upload Document
        </NavLink>

        <NavLink to="/documents/library" className={linkClass}>
          <FaFolder /> Document Library
        </NavLink>

        <NavLink to="/documents/categories" className={linkClass}>
          <FaTags /> Categories
        </NavLink>

        <NavLink to="/documents/folders" className={linkClass}>
          <FaFolder /> Folder Manager
        </NavLink>

        <NavLink to="/documents/approvals" className={linkClass}>
          <FaCheckCircle /> Approvals
        </NavLink>

        <NavLink to="/documents/versions" className={linkClass}>
          <FaHistory /> Version Control
        </NavLink>

        <NavLink to="/documents/archive" className={linkClass}>
          <FaArchive /> Archive
        </NavLink>

        <NavLink to="/documents/reports" className={linkClass}>
          <FaChartBar /> Reports
        </NavLink>

        <NavLink to="/documents/settings" className={linkClass}>
          <FaCog /> Settings
        </NavLink>

        {/* KNOWLEDGE CENTRE */}
        <h4>Knowledge Centre</h4>

        <NavLink to="/knowledge/dashboard" className={linkClass}>
          <FaBook /> Dashboard
        </NavLink>

        <NavLink to="/knowledge/training-topics" className={linkClass}>
          <FaBook /> Training Topics
        </NavLink>

        <NavLink to="/knowledge/manuals" className={linkClass}>
          <FaFileAlt /> Manuals
        </NavLink>

        <NavLink to="/knowledge/policies" className={linkClass}>
          <FaFileAlt /> Policies
        </NavLink>

        <NavLink to="/knowledge/templates" className={linkClass}>
          <FaFileAlt /> Templates
        </NavLink>

        <NavLink to="/knowledge/downloads" className={linkClass}>
          <FaDownload /> Downloads
        </NavLink>

        <NavLink to="/knowledge/videos" className={linkClass}>
          <FaVideo /> Videos
        </NavLink>

        <NavLink to="/knowledge/best-practices" className={linkClass}>
          <FaAward /> Best Practices
        </NavLink>

        <NavLink to="/knowledge/faqs" className={linkClass}>
          <FaQuestionCircle /> FAQs
        </NavLink>

        <NavLink to="/knowledge/settings" className={linkClass}>
          <FaCog /> Settings
        </NavLink>

        {/* REPORTS */}
        <h4>Reports</h4>

        <NavLink to="/reports" className={linkClass}>
          <FaChartBar /> Reports
        </NavLink>

        {/* SYSTEM */}
        <h4>System</h4>

        <NavLink to="/settings" className={linkClass}>
          <FaCog /> Settings
        </NavLink>

      </nav>
    </aside>
  );
}

export default Sidebar;
