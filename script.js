let tbody = document.getElementById("tbody");
let remove = document.getElementById("remove");

async function getAll() {
  const response = await fetch(
    "https://6724a9d7c39fedae05b24389.mockapi.io/selena"
  );
  const data = await response.json();
  return data;
}
export default getAll
function getElementById(id) {
  fetch("https://6724a9d7c39fedae05b24389.mockapi.io/selena/" + id)
    .then((res) => res.json())
    .then((data) => console.log(data));
}
async function deleteByIdCategory(id) {
  const response = await fetch(
    "https://6724a9d7c39fedae05b24389.mockapi.io/selena/" +id
  ,{method:"delete"});
  const data = await response.json();
  return data;
}
function updateByIdCategory(id, obj) {
  fetch("https://6724a9d7c39fedae05b24389.mockapi.io/selena/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  }).then((res) => res.json());
}
function createOneCategory(oby) {
  fetch("https://6724a9d7c39fedae05b24389.mockapi.io/selena", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(oby),
  }).then((res) => res.json());
}

async function generateTable() {
  const data = await getAll();
  data.forEach((element) => {
    const tr = document.createElement("tr");

    tr.innerHTML += `   
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.price}</td>
    <td>${element.sale}</td>
    <td>${element.is5starrated}</td>
    <td class="lasttd"><button class="update">u</button><button class="remove">x</button></td>
     `;

    const deleteBtn = tr.querySelector(".remove");
    deleteBtn.addEventListener("click", async function () {
      
      await deleteByIdCategory(element.id);

      tbody.innerHTML = "";
      generateTable();
    });
    console.log(tbody);
    tbody.appendChild(tr);
  });
}
generateTable();



