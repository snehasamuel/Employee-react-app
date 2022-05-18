import React, { useState } from 'react'
import Header from './Header'

const AddEmployee = () => {
var [id,setID]=useState("")
var [name,setName]=useState("")
var [desig,setDesig]=useState("")
var [salary,setSalary]=useState("")
var [company,setCompany]=useState("")
var [dob,setDob]=useState("")
var [email,setEmail]=useState("")

const registerValues=()=>{
    const datas={"id":id,"name":name,"designation":desig,"salary":salary,"company":company,"D O B":dob,"Email ID":email}
    console.log(datas)
}

const clearValues=()=>{
    setID(id="")
    setName(name="")
    setDesig(desig="")
    setSalary(salary="")
    setCompany(company="")
    setDob(dob="")
    setEmail(email="")
}
  return (
    <div>
        <Header/>


        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Employee Id</label>
                    <input onChange={(s)=>{setID(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Employee Name</label>
                    <input onChange={(s)=>{setName(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Designation</label>
                    <input onChange={(s)=>{setDesig(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Salary</label>
                    <input onChange={(s)=>{setSalary(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Comapany Name</label>
                    <input onChange={(s)=>{setCompany(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">DOB</label>
                    <input onChange={(s)=>{setDob(s.target.value)}} type="date" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Email Id</label>
                    <input onChange={(s)=>{setEmail(s.target.value)}} type="email" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <button onClick={clearValues} className="btn btn-info">CLEAR</button>  
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={registerValues} className="btn btn-info">REGISTER</button>
                    
                </div>
            </div>

        </div>
    </div>
</div>

    </div>
  )
}

export default AddEmployee