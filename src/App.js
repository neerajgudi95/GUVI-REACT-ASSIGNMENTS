import "./App.css";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

function App() {
  let data = [
    {
      title: "Earnings (Monthly)",
      value: 40000,
      icon: <i className="fas fa-calendar fa-2x text-gray-300"></i>,
    },
    {
      title: "Earnings (Annual)",
      value: 480000,
      icon: <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>,
    },
    {
      title: "Tasks",
      value: 80,
      icon: <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>,
    },
    {
      title: "Pending Requests",
      value: 10,
      icon: <i className="fas fa-comments fa-2x text-gray-300"></i>,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Dashboard dashboardData={data} />
          </div>

          {/* <!-- Footer -->/ */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website {currentYear}</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
      </div>
    </>
  );
}

export default App;
