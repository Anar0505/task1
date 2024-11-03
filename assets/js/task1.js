import { getAll, capitalizeText } from './api.js';


const cards__container = document.querySelector(".cards__container")

async function generateMainPage() {
    const data = await getAll();
    data.forEach((element) => {
        const div = document.createElement("div")
        div.classList.add("cards__card")
        div.innerHTML =
            `
<div class="cards__card__item">
            ${element.sale ? `<div class="item__sale">Sale</div>` : ``}
            <img class="item__topimg" src="${element.image}" alt="">
            <div class="item__header">
              <h5>${capitalizeText(element.name)}</h5>
              ${element.is5starrated ? '<div class="item__header__stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>' : ''}
              <div class="item__header__price"> ${element.sale ? `<span>$${element.price}</span> $${(element.price * (1 - element.sale / 100)).toFixed(2)}` : `$${element.price}`}</div>
            </div>
            <div class="item__footer"><button>Add to cart</button></div>
          </div>
`
        cards__container.appendChild(div)
    })

}
generateMainPage()