import React from "react";

function Dashboard({ dashboardData }) {
  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4 p-3">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#!"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate
            Report
          </a>
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">
          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      {dashboardData[0].title}
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      ${dashboardData[0].value}
                    </div>
                  </div>
                  <div className="col-auto">{dashboardData[0].icon}</div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      {dashboardData[1].title}
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      ${dashboardData[1].value}
                    </div>
                  </div>
                  <div className="col-auto">{dashboardData[1].icon}</div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      {dashboardData[2].title}
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          {dashboardData[2].value}%
                        </div>
                      </div>
                      <div className="col">
                        <div className="progress progress-sm mr-2">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: `${dashboardData[2].value}%` }}
                            aria-valuenow={dashboardData[2].value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">{dashboardData[2].icon}</div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pending Requests Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      {dashboardData[3].title}
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {dashboardData[3].value}
                    </div>
                  </div>
                  <div className="col-auto">{dashboardData[3].icon}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Content Row --> */}
      </div>
    </>
  );
}

export default Dashboard;
