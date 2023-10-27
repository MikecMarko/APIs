let request = new XMLHttpRequest();

request.open(
  'GET',
  'https://api.giphy.com/v1/gifs/random?api_key=nhOLcivujaHkRxGeGV3m7jXeNWST2lkf&tag=porn&rating=r'
);

request.onload = function () {
  let response = request.response;

  let parsData = JSON.parse(response);
  console.log(parsData);
  let originalUrl = parsData.data.images.original.url;
  console.log(originalUrl);

  let gif = document.createElement('img');
  gif.setAttribute('src', originalUrl);
  document.body.appendChild(gif);
};

request.onerror = function () {
  console.log('There seems to be a problem');
};

request.send();
