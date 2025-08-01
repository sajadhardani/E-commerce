import React from "react";
import { Link } from "react-router-dom";

function PageHeader() {
  return (
    <div className="pageheader-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pageheader-content text-center">
              <h2> Shop Page</h2>
              <nav aria-label="breadcrumb">
                <ol>
                  <li className="breadcrumb-item"><Link to="/"> Home </Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Shop<Link to="/"> </Link></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
