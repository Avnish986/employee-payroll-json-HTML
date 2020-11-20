window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
 });
 
 const createInnerHtml = () => {
    
   const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
   const innerHtml = `${headerHtml}
                <tr>
                    <td><img class="profile" src="../assets/profile-images/Ellipse -2.png" alt=""></td>
                    <td>Narayan Mahadevan</td>
                    <td>Male</td>
                    <td><div class="dept-label">HR</div>
                        <div class="dept-label">Finance</div>
                    </td>
                    <td>300000</td>
                    <td>1 Nov 2020</td>
                    <td><img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                        <img id="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
                    </td>
                </tr>
    `;
    document.querySelector("#display").innerHTML = innerHtml;
 };