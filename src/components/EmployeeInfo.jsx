import React from 'react'

function EmployeeInfo({activeEmployee}) {
  return (
    <div className='employee-container'>
    <div className="employee-info ">
   <div>Name : <span>{ activeEmployee.FIRST_NAME}</span></div>
   <div>Email : <span>{ activeEmployee.EMAIL}</span></div>
   <div>Salary : <span>{ activeEmployee.SALARY}</span></div>
   <div>ID : <span>{ activeEmployee.id}</span></div>
   </div>
</div>
  )
}

export default EmployeeInfo