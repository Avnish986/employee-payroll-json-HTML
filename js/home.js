window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
 });
 
 const createInnerHtml = () => {
    
   const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
   let innerHtml = `${headerHtml}`;
   let empPayrollList = createEmployeePayrollJSON();
   for(const empPayrollData of empPayrollList){
   innerHtml = `${headerHtml}
                <tr>
                    <td><img class="profile" src="${empPayrollData._picture}"></td>
                    <td>${empPayrollData._name}</td>
                    <td>${empPayrollData._gender}</td>
                    <td>${getDeptHtml(empPayrollData._department)}</td>
                    <td>${empPayrollData._salary}</td>
                    <td>${empPayrollData._startDate}</td>
                    <td><img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                        <img id="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
                    </td>
                </tr>
    `;
   }
    document.querySelector("#display").innerHTML = innerHtml;
 }

 const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
        _name: "Narayan Mahadevan",
        _gender: "male",
        _department: ['Engineering','Finance'],
        _salary: "500000",
        _startDate: "29 Oct 2019",
        _note: "",
        _id: new Date().getTime(),
        _picture: "../assets/profile-images/Ellipse -2.png"
        },
    {
     _name: "Amarpa Shashanka Keerthi Kumar",
     _gender: "female",
     _department: ['Sales'],
     _salary: "400000",
     _startDate: "29 Oct 2019",
     _note: "",
     _id: new Date().getTime() + 1,
     _picture: "../assets/profile-images/Ellipse -1.png"
    }
    ];
    return empPayrollListLocal;
 }

 const getDeptHtml = (deptList) => {
    let deptHtml = "";
    for(const dept of deptList){
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}