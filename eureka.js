$( function() {
   

   var food = [{
    title : "Pasta Carbonara",
    image: "./assets/pizza.jpg",
    type : "Second courses",
    price : 9
  },{
    title : "Chicken Soup",
    image: "./assets/pizza.jpg",
    type : "Entrees",
    price : 13
  },{
    title : "Vitamin Salad",
    image: "./assets/pizza.jpg",
    type : "Salads",
    price : 7
  },{
    title : "Pasta With Walnut",
    image: "./assets/pizza.jpg",
    type : "Second courses",
    price : 25
  },{
    title : "Pasta Bolognese",
    image: "./assets/pizza.jpg",
    type : "Second courses",
    price : 17
  },{
    title : "Roast Pork With Prunes",
    image: "./assets/pizza.jpg",
    type : "Second courses",
    price : 36
  },{
    title : "Pizza Margherita",
    image: "./assets/pizza.jpg",
    type : "Second courses",
    price : 15
  },{
    title : "Pancakes",
    image: "./assets/pizza.jpg",
    type : "Desert",
    price : 8
  }];

  localStorage.setItem('itemToSave', JSON.stringify(food));

  function sliderRange() {
    $( ".slider-range" ).slider({
      range: true,
      min: 0,
      max: 150,
      values: [ 0, 150 ],
      slide: function( event, ui ) {
        $( ".amount1" ).text("$" + ui.values[ 0 ]);
        $(" .amount2").text("$" + ui.values[ 1 ]);
        getFromLocalStorage();
      } 
    });

    $( ".amount1" ).text("$" + $( ".slider-range" ).slider( "values", 0 ));
    $(".amount2").text("$" + $( ".slider-range" ).slider( "values", 1 ));

    
  } 

  sliderRange();
  getFromLocalStorage();

  function render (array) {
    for(let i=0; i < array.length; i++ ){
      let product = $('<div>');
      let image = $('<img>');
      let productInfo = $('<div>');
      let title = $('<span>' + array[i].title + '</span>');
      let type = $('<span>' + array[i].type + '</span>');
      let price = $(`<span>$  ${Number(array[i].price).toFixed(2)}  </span>`);

      image.attr('src',array[i].image);

      product.addClass('product');
      image.addClass('product-image');
      productInfo.addClass('product-info');
      title.addClass('product-title item-info');
      type.addClass('product-type item-info');
      price.addClass('product-price');




      product.append(image);
      product.append(productInfo);
      productInfo.append(title);
      productInfo.append(type);
      productInfo.append(price);


      $('.products').append(product);
    }
  }

  function getFromLocalStorage () {
    var arrStorage = localStorage.getItem('itemToSave');
    var arr = JSON.parse(arrStorage);
    var filteredArray = [];
    const span1 = $('.amount1').text();
    const span2 = $('.amount2').text();
    const amount1 = parseInt(span1.substring(1));
    const amount2 = parseInt(span2.substring(1));
    console.log(amount2);
    for(let i = 0; i < arr.length; i++) {

      if( arr[i].price > amount1 && arr[i].price < amount2 ) {
        filteredArray.push(arr[i]);
      }
    }

    $('.products').html('');
    render(filteredArray);
  }
});