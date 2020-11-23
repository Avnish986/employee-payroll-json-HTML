let empPayrollList;

window.addEventListener("DOMContentLoaded", (event) => {
    empPayrollList=getEmployeePayrollDataFromStoarge();
    
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
 });
 const getEmployeePayrollDataFromStoarge = () => {
    return localStorage.getItem("EmployeePayrollList") ? JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
};
 const createInnerHtml = () => {
   if(empPayrollList.length==0)return;
   const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
   let innerHtml = `${headerHtml}`
   for(const empPayrollData of empPayrollList){
   innerHtml = `${innerHtml}
                <tr>
                    <td><img class="profile" src="${empPayrollData._profilePic}"></td>
                    <td>${empPayrollData._name}</td>
                    <td>${empPayrollData._gender}</td>
                    <td>${getDeptHtml(empPayrollData._department)}</td>
                    <td>${empPayrollData._salary}</td>
                    <td>${stringifyDate(empPayrollData._startDate)}</td>
                    <td><img id="${empPayrollData._name}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                        <img id="${empPayrollData._name}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
                    </td>
                </tr>
    `;
   }
    document.querySelector("#display").innerHTML = innerHtml;
 }

 
 const getDeptHtml = (deptList) => {
    let deptHtml = "";
    for(const dept of deptList){
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}
const remove = (node) => {
    let employee = empPayrollList.find(emp => emp._name == node.id);
    if(!employee) return;
    const index = empPayrollList
                  .map(emp => emp._name)
                  .indexOf(employee._name);
    empPayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
};

const update = (node) => {
    let employee = empPayrollList.find(emp => emp._name == node.id);
    if(!employee) return;
    localStorage.setItem("editEmp", JSON.stringify(employee));
    window.location.replace(site_properties.add_emp_payroll_page);
};
