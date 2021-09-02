import React from 'react';
import { NavLink } from 'react-router-dom';

import "./css/common.css"

const common = (props) => {
    return (
        <>
       <section className="header d-flex align-items-center ">
           <div className="container">
             <div className="row">
             <div className="col-10 mx-auto d-flex align-items-center ">
              <div className="row">
               <div className="col-md-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
               <h1>
                   {props.name}  
                   <strong className="brand-name"> Dourjoy Khan</strong>
               </h1>
               <div className="mt-2">
                   <h3>Talented Web Application Developer</h3>
               </div>
               <div className="mt-2">
               <NavLink className="btn btn-outline-success home-button" to={props.visit}>{props.button_name}</NavLink>
               </div>
               </div>
               <div className="col-md-6 order-1 order-lg-2 ">
               <img className="home-img" src={props.imgsrc} alt=""/>
               </div>

              </div>
              

             </div>

             </div>

           </div>
        </section>
        </>
    )
}

export default common
