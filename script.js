"use strict";

const featuredIems = `[
  {
    "image": "img/product1.jpg",
    "color" : "Red",
    "title": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
  },
  {
    "image": "img/product2.png",
    "color" : "Black",
    "title": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
  },
  {
    "image": "img/product3.png",
    "color" : "Red",
    "title": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
  },
  {
    "image": "img/product4.png",
    "color" : "Black",
    "title": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
  },
  {
    "image": "img/product5.png",
    "color" : "Red",
    "title": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
  },
  {
    "image": "img/product6.png",
    "color" : "Black",
    "title": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"
  }
]`;

function generateCard(cardData, container) {
  const card = document.createElement("div");
  card.classList.add("product");

  const image = document.createElement("img");
  image.classList.add("product__img");
  image.src = cardData.image;
  image.alt = "";

  const content = document.createElement("div");
  content.classList.add("product__content");

  const heading = document.createElement("a");
  heading.classList.add("product__heading");
  heading.href = "product.html";
  heading.textContent = cardData.title;

  const text = document.createElement("p");
  text.classList.add("product__text");
  text.textContent = cardData.text;

  const price = document.createElement("p");
  price.classList.add("product__price");
  price.textContent = cardData.price;

  const addLink = document.createElement("a");
  addLink.classList.add("product__add");
  addLink.href = "#";
  addLink.addEventListener("click", (event) => {
    event.preventDefault();
    onAddClick(cardData);
  });

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "27");
  svg.setAttribute("height", "25");
  svg.setAttribute("viewBox", "0 0 27 25");

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute(
    "d",
    "M21.9509 23.2667H21.8386C21.2294 23.2667 20.7177 22.7671 20.6735 22.1294C20.629 21.4607 21.1175 20.8785 21.7626 20.8346C21.788 20.8329 21.8145 20.832 21.8405 20.832C22.4575 20.832 22.9743 21.3219 23.0201 21.9487C23.0319 22.1971 22.9914 22.5514 22.736 22.8439L22.73 22.8507L22.7242 22.8575C22.5275 23.0912 22.2607 23.2321 21.9509 23.2667ZM8.21887 23.2604C7.5683 23.2604 7.03906 22.7174 7.03906 22.05C7.03906 21.3832 7.5683 20.8406 8.21887 20.8406C8.86945 20.8406 9.39868 21.3832 9.39868 22.05C9.39868 22.7174 8.86945 23.2604 8.21887 23.2604Z"
  );
  path1.setAttribute("fill", "white");

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute(
    "d",
    "M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z"
  );
  path2.setAttribute("fill", "white");

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute(
    "d",
    "M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z"
  );
  path3.setAttribute("fill", "white");

  svg.appendChild(path1);
  svg.appendChild(path2);
  svg.appendChild(path3);
  addLink.textContent = `Add to Cart`;
  addLink.appendChild(svg);

  content.appendChild(heading);
  content.appendChild(text);
  content.appendChild(price);
  content.appendChild(addLink);

  card.appendChild(image);
  card.appendChild(content);

  container.appendChild(card);
}

function addCartItem(cardData) {
  const container = document.querySelector(`.cart-items-container`);
  const card = document.createElement("div");
  card.classList.add("cart_card");

  const image = document.createElement("img");
  image.classList.add("cart_img");
  image.src = cardData.image;
  image.alt = "";

  const details = document.createElement("div");
  details.classList.add("cart_details");

  const header = document.createElement("h2");
  header.classList.add("cart_item_header");
  header.textContent = cardData.title;

  const price = document.createElement("p");
  price.classList.add("cart_item_price");
  price.innerHTML = `Price: <span class="pink">${cardData.price}</span>`;

  const colorDetails = document.createElement("p");
  colorDetails.classList.add("cart_item_details");
  colorDetails.innerHTML = `Color: <span class="grey">${cardData.color}</span>`;

  const sizeDetails = document.createElement("p");
  sizeDetails.classList.add("cart_item_details");
  sizeDetails.innerHTML = 'Size: <span class="grey">Xl</span>';

  const quantityContainer = document.createElement("div");
  quantityContainer.classList.add("cart_item_quantity_container");

  const quantityText = document.createElement("p");
  quantityText.classList.add("cart_item_details");
  quantityText.textContent = "Quantity:";

  const quantityInput = document.createElement("input");
  quantityInput.classList.add("cart_item_quantity_input");
  quantityInput.type = "text";
  quantityInput.value = "1";

  const closeBtn = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  closeBtn.classList.add("cart_close");
  closeBtn.setAttribute("width", "18");
  closeBtn.setAttribute("height", "18");
  closeBtn.setAttribute("viewBox", "0 0 18 18");
  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    onRemoveClick(card);
  });

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
  );
  path.setAttribute("fill", "#575757");

  closeBtn.appendChild(path);

  card.appendChild(image);

  details.appendChild(header);
  details.appendChild(price);
  details.appendChild(colorDetails);
  details.appendChild(sizeDetails);

  quantityContainer.appendChild(quantityText);
  quantityContainer.appendChild(quantityInput);

  details.appendChild(quantityContainer);

  card.appendChild(details);
  card.appendChild(closeBtn);

  container.appendChild(card);
}

function displayFeatured() {
  const data = JSON.parse(featuredIems);
  const container = document.querySelector(`.product-box__content`);
  data.map((item) => generateCard(item, container));
}

function showHideCart(show) {
  const container = document.querySelector(`.cart-container`);
  show
    ? (container.style.display = `flex`)
    : (container.style.display = `none`);
}

function checkForCartItems() {
  const container = document.querySelector(`.cart-items-container`);
  showHideCart(container.childElementCount != 0);
}

function onAddClick(item) {
  addCartItem(item);
  checkForCartItems();
}

function onRemoveClick(card) {
  const container = document.querySelector(`.cart-items-container`);
  container.removeChild(card);
  checkForCartItems();
}

displayFeatured();
