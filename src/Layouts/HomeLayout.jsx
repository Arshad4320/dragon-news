import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestLayout from "./LatestLayout";
import Navbar from "../components/Navbar";

class HomeLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <section>
          <LatestLayout />
        </section>
        <nav>
          <Navbar />
        </nav>
        <main>
          <section className="left-nav"></section>
          <section className="main">
            <Outlet />
          </section>
          <section className="right-nav"></section>
        </main>
      </div>
    );
  }
}

export default HomeLayout;
