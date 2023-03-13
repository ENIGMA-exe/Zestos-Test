
//add city

import Link from "next/link";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";

import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Navbar from "../../../components/_App/Navbar";

//modal
import CityModal from "../../../components/Modal/CityModal";


const AddCities = () => {

var [displayCM,toggleCM] = useState(false)
useEffect(()=>{},[])

  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <Navbar/>

        <div className="breadcrumb-area">
          <h1>Add Cities</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/dashboard">
                <a>Home</a>
              </Link>
            </li>
            <li className="item">
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li className="item">Add city</li>
          </ol>
        </div>
        
{/*..........................city information............................................*/}
        
        {/* <div className="add-listings-box">
          <h3>Location</h3>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>
                  <i className="bx bx-menu-alt-left"></i> City:
                </label>
                <select className="dashbaord-category-select">
                  <option>Select City</option>
                  <option>New York</option>
                  <option>London</option>
                  <option>Paris</option>
                  <option>Moscow</option>
                  <option>Rome</option>
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>
                  <i className="bx bx-menu-alt-left"></i> Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. 55 County Laois"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>
                  <i className="bx bx-menu-alt-left"></i> State:
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>
                  <i className="bx bx-menu-alt-left"></i> Zip-Code:
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div> */}



        <div className="add-listings-btn">
          <button type="submit" onClick={()=>{toggleCM(!displayCM)}}>Add Cities</button>
        </div>

        <div className="flex-grow-1"></div>

        <div className="copyrights-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-md-6">
              <p>
                <i className="bx bx-copyright"></i> Indice All rights reserved
              </p>
            </div>

            <div className="col-lg-6 col-sm-6 col-md-6 text-right">
              <p>
                Designed by ❤️{" "}
                <a
                  href="https://envytheme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

{/*..........................CITY MODAL................................................. */}
        <CityModal displayCM={displayCM} toggleCM={toggleCM}/>
    </>
  );
};

export default AddCities;