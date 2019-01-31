let myFavouriteFoods = function(food) {
let favouriteFoods = [

    'Rice',
    'Plantain',
    'Pizza',
    'Yam',
    'Cereals'
];

    let foodName = favouriteFoods.indexOf(food);
return new Promise((resolve, reject) => {
         if(favouriteFoods.indexOf(food) !== -1) {
             return resolve(favouriteFoods[foodName]);
          }
             reject('food is not on the list oooo');
         } 
    );
}

myFavouriteFoods('Rice')


.then(function(result) {
    console.log(`${result} is on the list`);
})
      .catch(function(e){
    console.log(e);
  });