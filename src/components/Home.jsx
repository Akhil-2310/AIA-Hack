import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Social</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/marketplace">Marketplace</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://inatba.org/wp-content/uploads/2022/12/Onchain.001.jpeg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Social</h1>
              <p className="py-6 text-3xl">
                Consumers are the kings! Crypto Mass adoption is the focus!
                Bringing the world onchain is the goal!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
