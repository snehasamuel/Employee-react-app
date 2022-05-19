import React from 'react'
import Header from './Header'

const View = () => {

    var emplist=[{"id":134,"name":"Samuel","designation":"accountant","salary":"35000","Company":"abc","DOB":"2-4-1992","email":"fhgjh"},
    {"id":458,"name":"Sneha","designation":"HR","salary":"40000","Company":"hffh","DOB":"2-6-1998","email":"hfhj"},
    {"id":622,"name":"Ernesto","designation":"hgfh","salary":"32000","Company":"hgh","DOB":"24-4-1992","email":"hghgh"},
    {"id":782,"name":"Anil","designation":"uedtfh","salary":"30000","Company":"htjuy","DOB":"29-9-1999","email":"dsdfzd"},
    {"id":354,"name":"Jainy","designation":"fdsrdt","salary":"25000","Company":"hgdhgd","DOB":"7-6-1998","email":"gjygjh"},]



  return (
    <div><Header/>


 
    
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Employee ID</th>
      <th scope="col">Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Salary</th>
      <th scope="col">Comapany Name</th>
      <th scope="col">D O B</th>
      <th scope="col">Email Id</th>
    </tr>
  </thead>
 <tbody>
 {emplist.map((value,key)=>{

return <tr>
<th scope="row">{value.id}</th>
<td>{value.name}</td>
<td>{value.designation}</td>
<td>{value.salary}</td>
<td>{value.Company}</td>
<td>{value.DOB}</td>
<td>{value.email}</td>
</tr>

  })}
  </tbody>
</table>
    
    
    
    
    </div>
  )
}

export default View