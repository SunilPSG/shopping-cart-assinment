const data = [
  {
    "name": "Beverages",
    "key": "beverages",
    "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
    "enabled": true,
    "order": 3,
    "imageUrl": "/static/images/category/beverages.png",
    "id": "5b675e5e5936635728f9fc30"
  },
  {
    "name": "Bakery Cakes and Dairy",
    "key": "bakery-cakes-dairy",
    "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
    "enabled": true,
    "order": 2,
    "imageUrl": "/static/images/category/bakery.png",
    "id": "5b6899123d1a866534f516de"
  },
  {
    "name": "Beauty and Hygiene",
    "key": "beauty-hygiene",
    "description": "Buy beauty and personal care products online in India at best prices.",
    "enabled": true,
    "order": 4,
    "imageUrl": "/static/images/category/beauty.png",
    "id": "5b68994e3d1a866534f516df"
  },
  {
    "name": "Baby Care",
    "key": "baby",
    "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
    "enabled": true,
    "order": 5,
    "imageUrl": "/static/images/category/baby.png",
    "id": "5b6899683d1a866534f516e0"
  },
  {
    "name": "Fruits & Vegetables",
    "key": "fruit-and-veg",
    "description": "A variety of fresh fruits and vegetables.",
    "enabled": true,
    "order": 1,
    "imageUrl": "/static/images/category/fruits.png",
    "id": "5b6899953d1a866534f516e2"
  }
]

const result = data.map((item, idx) => {
  if (idx % 2 == 0) {
    return (
      `    <div class="item-container2">
      <div class="menu-1">
          <h2>${item.name}</h2>
          <p>${item.description}</p>
          <button class="btn">Explore ${item.name} </button>
      </div>
      <div class="image">
          <img src="../../static/images/category/bakery.png" alt="Baby Care"width="40%">
      </div>
      
  </div>`
    )
  } else {
    return (
      `    <div class="item-container1">
      <div>
          <img src="../../static/images/category/fruits.png" alt="vegetables" width="40%">
      </div>
      <div class="menu-1">
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <button class="btn">Explore ${item.name} </button>
      </div>
  </div>`
    )
  }

}).join('');
console.log(result);
const container = document.getElementById('container')
container.innerHTML = result