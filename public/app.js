let products = [];

document.addEventListener('DOMContentLoaded', () => {
  fetch('products.json')
    .then(res => res.json())
    .then(data => {
      products = data;
      showAll();
    });
});

function showAll() {
  document.getElementById('categories').classList.add('hidden');
  document.getElementById('product-detail').classList.add('hidden');
  displayProducts(products);
}

function filterType(type) {
  const filtered = products.filter(p => p.type === type);
  displayProducts(filtered);
}

function showCategories() {
  const categorySet = new Set(products.map(p => p.category));
  const container = document.getElementById('categories');
  container.innerHTML = '<h3>Categories</h3>';
  categorySet.forEach(category => {
    const btn = document.createElement('button');
    btn.innerText = category;
    btn.className = 'category-btn';
    btn.onclick = () => filterCategory(category);
    container.appendChild(btn);
  });
  container.classList.remove('hidden');
}

function filterCategory(category) {
  const filtered = products.filter(p => p.category === category);
  displayProducts(filtered);
}

function displayProducts(items) {
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => showDetail(item);

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.category}</p>
      <p><strong>$${item.price}</strong></p>
    `;
    list.appendChild(card);
  });
}

function showDetail(product) {
  const detail = document.getElementById('product-detail');
  detail.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h2>${product.name}</h2>
    <p><strong>Category:</strong> ${product.category}</p>
    <p><strong>Type:</strong> ${product.type}</p>
    <p><strong>Price:</strong> $${product.price}</p>
    <p><strong>Description:</strong> ${product.description}</p>
    <button class="category-btn" onclick="document.getElementById('product-detail').classList.add('hidden')">Close</button>
  `;
  detail.classList.remove('hidden');
}