// console.log('js working');
//
//
// //examples
//
//object to send as data in an http call
//used to send data to server side potentially to put into database or computer logic.
var personObject = {
  name: 'bob',
  age: 122,
  young: false,
  pets:  {dog: 'spot', cat: 'charles'},
  plants: [['roses', 'tulips', 'dasies'], ['calluna', 'rubus', 'aloe'], ['maple', 'oak', 'pine']]
};

//array example
var arrayOfPlants = [['roses', 'tulips', 'dasies'], ['calluna', 'rubus', 'aloe'], ['maple', 'oak', 'pine']];

//object example in full stack - object in a service
//used to make a call to the server to send some data.
$http({
  method: 'POST',
  url:  '/inYourFace',
  data: personObject
}).then(function(response){
  return response;
});

//this didn't work in edabit, but works in real life
function keysAndValues(obj) {
  var objKeys = Object.keys(obj);
  // var objValues = Object.values(obj);
  console.log(objKeys);
  // console.log(objValues);
  var objValues = [];
  for (var values in obj) {
    objValues.push(obj[values]);
    console.log('objValues', objValues);
  }
}

// this works in both
function keysAndValues(obj) {
  var objKeys = Object.keys(obj);
  var objValues = [];
	for (var values in obj) {
    objValues.push(obj[values]);
  }
  return [objKeys, objValues];
}

keysAndValues(personObject);
