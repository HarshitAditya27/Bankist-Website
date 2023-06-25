import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../components/photo.png";
import "../styles/Home.css";
function Home() {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="header">
          <h1>Food Website</h1>
          <p>Best food In India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
