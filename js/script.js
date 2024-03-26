function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.getElementById('filter-button').addEventListener('click', function() {
    var minPrice = document.getElementById('min-price').value;
    var maxPrice = document.getElementById('max-price').value;
    
    // Выполнить фильтрацию с ценами от minPrice до maxPrice
  });