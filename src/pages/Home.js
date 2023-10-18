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
          <h2>Taste the best of desi food in Ranchi </h2>
          <p>
            Experience the vibrant flavors of Ranchi's best food made by some
            our best foodies at our FoodZilla!
          </p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
