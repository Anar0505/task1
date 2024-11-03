import { getAll, deleteByIdCategory } from './api.js';

const tbody = document.getElementById("tbody");

export async function generateTable() {
  const data = await getAll();
  data.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${element.id}</td>
      <td><a href="./detail.html#${element.id}">${element.name}</a></td>
      <td>${element.price}</td>
      <td>${element.sale}</td>
      <td>${element.is5starrated}</td>
      <td class="lasttd"><button class="update"><a href="./update.html#${element.id}">u</a></button><button class="remove">x</button></td>
    `;

    const deleteBtn = tr.querySelector(".remove");
    deleteBtn.addEventListener("click", async () => {
      await deleteByIdCategory(element.id);
      tbody.innerHTML = "";
      generateTable();
    });

    tbody.appendChild(tr);
  });
}

generateTable()