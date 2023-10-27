let request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products');

request.onload = function () {
  let response = request.response;
  console.log(response);
  console.log(typeof response);
  let jsonData = JSON.parse(response);
  console.log(jsonData);
  console.log(typeof jsonData);
};

request.send();
