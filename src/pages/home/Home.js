import React from "react";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";
import Card from "../../components/Card";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Card></Card>
     
      <Footer></Footer>
    </div>
  );
}
