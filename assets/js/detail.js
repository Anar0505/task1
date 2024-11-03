import { getElementByIdFromApi } from "./api.js";

const productId = window.location.hash.slice(1);
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productSale = document.getElementById("product-sale");
const productRating = document.getElementById("product-rating");

async function displayProductDetails() {
    try {
        const product = await getElementByIdFromApi(productId);
        productName.textContent = product.name;
        productPrice.textContent = product.price.toFixed(2);
        productSale.textContent = product.sale;
        productRating.textContent = product.is5starrated ? "Yes" : "No";
    } catch (error) {
        console.error("Error fetching product details:", error);
        alert("An error occurred while fetching product details.");
    }
}

displayProductDetails();
