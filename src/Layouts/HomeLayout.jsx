import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestLayout from "./LatestLayout";
import Navbar from "../components/Navbar";
import LeftSideAside from "../components/homeLayout/LeftSideAside";
import RightSideAside from "../components/homeLayout/RightSideAside";

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
        <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-4">
          <aside className="col-span-3">
            <LeftSideAside />
          </aside>
          <section className="main col-span-6">
            <Outlet />
          </section>
          <aside className="col-span-3">
            <RightSideAside />
          </aside>
        </main>
      </div>
    );
  }
}

export default HomeLayout;
