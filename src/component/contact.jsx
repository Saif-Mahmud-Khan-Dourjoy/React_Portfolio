import React,{useState} from 'react'

const Contact = () => {

     const [data, setnewdata] = useState({
         name:"",
         email:"",
         phone:"",
         msg:"",
     });

     const setdata=(e)=>{

       const {name,value}=e.target;

       setnewdata((preV)=>{
         
        return{

            ...preV,
            [name]:value,

        }
   

       });


     }

     const buttonClick =(e)=>{
         e.preventDefault();
         data.name==="" ? (alert(`You did not input anything`)) : (alert(`Your name is ${data.name}`))
     }
      

    return (
        <>
            <div className="my-5">
             <div className="container">
               <div className="text-center text-success">
                   <h3>Contact Me</h3>
               </div>
               <div className="row mt-5">
                <div className="col-md-6 col-10 mx-auto fst-italic">
                <form className="">
                <div className="mb-3">
                    <label  className="form-label ">Full Name</label>
                    <input placeholder="Enter Your Name"
                    type="text" className="form-control"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={setdata}   
                   />
                    
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input placeholder="Enter Your Email address" 
                    type="email" className="form-control" 
                    id="exampleInputEmail1"
                    name="email"
                    value={data.email}
                    onChange={setdata}      
                    />
                    
                </div>
                <div className="mb-3">
                    <label  className="form-label">Phone Number</label>
                    <input placeholder="Enter Your Phone Number" 
                    type="text" 
                    className="form-control" 
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={setdata}  

                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    {/* <input placeholder="Enter Your Message" 
                    type="text" 
                    className="form-control" 
                    id="msg"
                    name="msg"
                    value={data.msg}
                    onChange={setdata}  

                    /> */}

                    <textarea placeholder="Enter Message" 
                    className="form-control"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={setdata}   
                    ></textarea>


                    
                </div>
                
                <button type="submit" onClick={buttonClick} className="btn btn-outline-success px-5 fst-italic">Submit</button>
                </form>

                </div>

               </div>

             </div>

            </div>
        </>
    )
}

export default Contact


