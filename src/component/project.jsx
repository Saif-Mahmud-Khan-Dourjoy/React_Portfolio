import React from 'react'
// import { NavLink } from 'react-router-dom'
import './css/card.css'

const project = (props) => {
    return (
        <>
           <div className="col-10 col-md-4 mx-auto mb-4">
              <div className="card" >
                    <img src={props.imgSrc} className="card-img-top card-img" alt={props.imgSrc}/>
                    <div class="card-body ">
                        <h5 className="card-title text-warning mb-3">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.goto} class="btn btn-outline-success project-button " target="_blank" rel="noreferrer">Go To Project</a>
                    </div>
                </div>
                
              </div> 
        </>
    )
}

export default project
