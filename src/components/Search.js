import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    var [id,setID]=useState("")
    const searchValue=()=>{
const data={"ID":id}
console.log(data)

    }
  return (
    <div>
        <Header/>

        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Employee Id</label>
                    <input onChange={(s)=>{setID(s.target.value)}} type="text" className="form-control"/>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={searchValue} className="btn btn-info">SEARCH</button>
                    
                </div>
            </div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Search