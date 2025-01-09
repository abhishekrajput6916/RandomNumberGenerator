import React, { useState } from 'react'
import EmployeeList from ".././assets/employeeList";
import EmployeeCard from './EmployeeCard';
import EmployeeInfo from './EmployeeInfo';

function EmployeeListContainer() {
    const [activeEmployee, setActiveEmployee] = useState("")
    return (
        <div >
            {EmployeeList.employees.map(employee =>
                <div key={employee.id}>
                    <EmployeeCard employee={employee} setEmployee={(employee=>setActiveEmployee(employee))}></EmployeeCard>
                </div>)}
            {activeEmployee && <EmployeeInfo activeEmployee={activeEmployee} />}
        </div>
    )
}

export default EmployeeListContainer;
