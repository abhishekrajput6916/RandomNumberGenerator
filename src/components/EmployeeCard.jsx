import React from 'react'
import employeeImg from "../assets/employeeImg.png"

function EmployeeCard({employee,setEmployee}) {
    function handleMouseEnter(){
        setEmployee(employee)
    }
  return (
    <div className="employee-card" onMouseLeave={()=>setEmployee("")} onMouseOver={handleMouseEnter}>
        <img src={employeeImg} alt={employeeImg} width="80px" />
        <h2>{employee.FIRST_NAME}</h2>
    </div>
  )
}

export default EmployeeCard