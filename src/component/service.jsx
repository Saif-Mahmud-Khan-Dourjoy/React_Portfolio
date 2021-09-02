import React from 'react'
import Project from './project'
import Pdata from "./pData"


const service = () => {
    return (
        <>
              <div className="my-5">
              <div className="container">
              <div className="ser-text text-center text-success">
                  <h3>All Projects</h3>
              </div>
              <div className="row">
             <div className="col-10 mx-auto mt-5">
              <div className="row ">
              
              {
                  Pdata.map((val,ind)=>{
                    return <Project
                      key={ind}
                      imgSrc={val.imgSrc}
                      title={val.title}
                      description={val.description}
                      goto={val.goto}

                    />
                  })

              }
           
                 
              </div>
              </div>
              </div>
              </div>
              </div>
              
        </>
    )
}

export default service
