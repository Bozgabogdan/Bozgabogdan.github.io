$( function() {
   
   var food = [{
    tile : "Pasta Carbonara",
    type : "Second courses",
    price : 9
  },{
    title : "Chicken Soup",
    type : "Entrees",
    price : 13
  },{
    title : "Vitamin Salad",
    type : "Salads",
    price : 7
  },{
    tilte : "Pasta With Walnut",
    type : "Second courses",
    price : 25
  },{
    tilte : "Pasta Bolognese",
    type : "Second courses",
    price : 17
  },{
    tilte : "Roast Pork With Prunes",
    type : "Second courses",
    price : 36
  },{
    tilte : "Pizza Margherita",
    type : "Second courses",
    price : 15
  },{
    title : "Pancakes",
    type : "Desert",
    price : 8
  }];

  localStorage.setItem('itemToSave', JSON.stringify(food));

  function sliderRange() {
    $( ".slider-range" ).slider({
      range: true,
      min: 0,
      max: 150,
      values: [ 15, 100 ],
      slide: function( event, ui ) {
        $( ".amount1" ).text( "$" + ui.values[ 0 ]);
        $(" .amount2").text("$" + ui.values[ 1 ]);
      } 
    });

    $( ".amount1" ).text( "$" + $( ".slider-range" ).slider( "values", 0 ));
    $(".amount2").text("$" + $( ".slider-range" ).slider( "values", 1 ));
  } 

  sliderRange();
});