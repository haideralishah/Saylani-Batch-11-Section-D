// JavaScript code will be here

// document.addEventListener('DOMContentLoaded', function() {
//     const slides = document.querySelector('.slides');
//     let currentIndex = 0;
//     const totalSlides = slides.children.length;

//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         slides.style.transform = `translateX(-${currentIndex * 100 / totalSlides}%)`;
//     }, 5000); // Change slide every 5 seconds
// });


const slideImages = [
  "https://burgerlab.com.pk/wp-content/uploads/2024/05/app-banner-2.jpg?c062ef&c062ef",
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



















let cart = [ {
    image:
      "https://burgerlab.com.pk/wp-content/uploads/2022/01/doppler.png?c062ef&c062ef",
    productName: "THE DOUBLE DECKER",
    price: "$10.00",
    qty:1,
    totalPrice: this.price * this.qty
  }];

const products = [
  {
    image:
      "https://burgerlab.com.pk/wp-content/uploads/2022/01/doppler.png?c062ef&c062ef",
    productName: "THE DOUBLE DECKER",
    price: "$10.00",
  },
  {
    image:
      "https://burgerlab.com.pk/wp-content/uploads/2022/01/quadra.png?c062ef&c062ef",
    productName: "QUADRA RELOADED",
    price: "$20.00",
  },
  {
    image:
      "https://burgerlab.com.pk/wp-content/uploads/2022/01/all-american-4.png?c062ef&c062ef",
    productName: "ALL AMERICAN DOUBLE CHEESE",
    price: "$30.00",
  },
  {
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
        <h4>+</h4>
    </div>
    `;
    productListContainer.innerHTML += productCard;
  }
}
listAllProducts();
