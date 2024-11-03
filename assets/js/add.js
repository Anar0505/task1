import { createOneCategory } from "./api.js";

const form = document.getElementById("productForm"); // Form elementini seçin


 form.onsubmit = async(event) => {
    event.preventDefault();

const name = document.getElementById("name_inp").value;
const price = parseFloat(document.getElementById("price_inp").value);
const sale = parseFloat(document.getElementById("sale_inp").value);
const is5starrated = document.getElementById("is5starrated_inp").checked;


    const productData = {
        name: name,
        price: price,
        sale: sale,
        is5starrated: is5starrated,
    };
   await createOneCategory(productData);

    window.location.href = './adminpage.html'; 
};
