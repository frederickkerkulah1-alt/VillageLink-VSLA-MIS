import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="app">
      <Sidebar />

      <main className="content">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;