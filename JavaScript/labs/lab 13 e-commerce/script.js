const slideImages = [
  "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6q8_0SwnNkM0c0vOT_twL1yzrcvlGuToSw&s",
  "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
];

function createSlider() {
  let sliderContainer = document.querySelectorAll(".slides")[0];

  for (let i = 0; i < slideImages.length; i++) {
    let img = `<img src="${slideImages[i]}" alt="Slide ${i + 1}">`;
    sliderContainer.innerHTML += img;
  }
}
createSlider();

const products = [
  {
    id: "34147cb5-70ae-409a-9116-df6a47c698f6",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "THE DOUBLE DECKER",
    price: "$10.00",
  },
  {
    id: "adb520e4-5e1b-4a3e-a372-7ab21b0649dd",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "QUADRA RELOADED",
    price: "$20.00",
  },
  {
    id: "ee2389ae-ba2b-424c-9055-4624325e63ec",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "ALL AMERICAN DOUBLE CHEESE",
    price: "$30.00",
  },
  {
    id: "64d6fec5-f76c-44e0-ab27-337c3b60af98",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "Big Bang",
    price: "$40.00",
  },
];

function listAllProducts() {
  let productListContainer = document.querySelectorAll(".product-list")[0];

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let productCard = `
    <div class="product-item">
        <img src="${product.image}" alt="${product.productName} image">
        <h3>${product.productName}</h3>
        <p>${product.price}</p>
        <button onclick="addToCartInObj(${i})">Add to Cart</button>
    </div>
    `;
    productListContainer.innerHTML += productCard;
  }
}
listAllProducts();

let cart = {};
function addToCartInObj(index) {
  const { id } = products[index];

  if (id in cart) {
    cart[id].qty = cart[id].qty + 1;
    cart[id].totalPrice = cart[id].qty * Number(cart[id].price.slice(1));
  } else {
    cart[id] = { ...products[index] };

    cart[id].qty = 1;
    cart[id].totalPrice = cart[id].qty * Number(cart[id].price.slice(1));
  }

  console.log(cart);
}

// let cart = [];

// function addToCartInArr(index) {
//   const { id } = products[index];
//   let isMatchId = false;
//   let targetIndex;
//   cart.forEach((item, index) => {
//     if (item.id === id) {
//       isMatchId = true;
//       console.log("match found", index);
//       targetIndex = index;
//     }
//   });

//   if (!isMatchId) {
//     let productClone = {
//       ...products[index],
//     };

//     productClone.qty = 1;
//     productClone.totalPrice =
//       productClone.qty * Number(productClone.price.slice(1));

//     cart.push(productClone);
//   } else {
//     let cartItem = cart[targetIndex];
//     cartItem.qty = cartItem.qty + 1;
//     cartItem.totalPrice = cartItem.qty * Number(cartItem.price.slice(1));
//   }
//   console.log(cart);
// }
