import React, { Fragment } from "react";
import { Routes, Router, Switch, Route, BrowserRouter } from "react-router-dom";
import TicketPanel from "./Components/TicketPanel";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <main className="container-fluid">
          <div className="container">
            <div className="row">
              <TicketPanel />
            </div>
          </div>
        </main>
        <footer className="footer-wrapper">
          <div className="row">
            <Footer />
          </div>
        </footer>
      </BrowserRouter>
    </Fragment>
  );
}
