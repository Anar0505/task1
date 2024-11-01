

async function getAll() {
    const response = await fetch(
      "https://6724a9d7c39fedae05b24389.mockapi.io/selena"
    );
    const data = await response.json();
    return data;
  }

let cards = document.querySelector(".cards__card")

async function generateMainPage(){
    const data = await getAll();
    data.forEach(element => {
  cards.innerHTML+=`<div class="cards__card__item">
  <div class="item__sale">Sale</div>
  <img
    class="item__topimg"
    src=${element.image}
    alt=""
  />
  <div class="item__header">
    <h5>${element.name}</h5>
    ${
        element.is5starrated ? ` <div class="item__header__stars">
        <i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i>
      </div>`:  ""
            
    }
   
    <div class="item__header__price">
      <span>${"$"+element.price+".00" }</span> ${parseInt(element.price)*(parseInt(element.sale)/100)}
    </div>
  </div>
  <div class="item__footer"><button>Add to cart</button></div>
  </div>`
    
   });
  }

  generateMainPage()