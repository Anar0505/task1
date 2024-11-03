import { getElementByIdFromApi, updateByIdCategory } from "./api.js";

const name = document.getElementById("name_inp")
const price = document.getElementById("price_inp")
const sale = document.getElementById("sale_inp")
const is5starrated = document.getElementById("is5starrated_inp")
const updateBtn = document.getElementById("updateBtn")
const updateid = window.location.hash.slice(1)

async function fillform() {
    const data = await getElementByIdFromApi(updateid)
    name.value = data.name,
        price.value = data.price,
        sale.value = data.sale,
        is5starrated.checked = data.is5starrated
}

fillform()

updateBtn.onclick = async () => {

    const productData = {
        name: name.value,
        price: parseFloat(price.value),
        sale: parseFloat(sale.value),
        is5starrated: is5starrated.checked,
    };

    await updateByIdCategory(updateid, productData)
    window.location.href = './adminpage.html';
}