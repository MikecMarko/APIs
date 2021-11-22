let request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products?qty=50&order=name');

request.onload = function () {
  let response = request.response;
  let parsData = JSON.parse(response);
  console.log(parsData);

  for (item in parsData) {
    let name = parsData[item].name;
    let products = document.createElement('li');
    products.innerHTML = name;
    document.body.appendChild(products);

    let imageUrl = parsData[item].image;
    let images = document.createElement('img');
    images.setAttribute('src', imageUrl);
    document.body.appendChild(images);
  }
};

request.send();
