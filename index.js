var array=[]
function dwarfRollCall(dwarves) {
  for (let i=0;i<dwarves.length;i++){
    array.push(`${i+1}. ${dwarves[i]} `)
  }
  return array.join("");
}


//function summonCaptainPlanet(planeteerCalls){
//  var array1=[]
//  var punctuation="!"
//  for (let i=0;i<planeteerCalls.length;i++){
//    array1.push(`${planeteerCalls[i]}${punctuation}`.toUpperCase())
//  }
//  return array1
//}

function summonCaptainPlanet(planeteerCalls){
  var array1=[]
  var punctuation="!"
  for (let i=0;i<planeteerCalls.length;i++){
    array1.push(planeteerCalls[i].toUpperCase()+"!")
  }
  return array1
}


function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
    if(words[i].length>4){
      return true
    }
  }
  return false
}

function findTheCheese (foods) {
  for(let i=0;i<foods.length;i++){
    if (foods[i] === "gouda" || foods[i]=== "cheddar" || foods[i]=== "camembert"){
    return foods[i]
  }
}
    return "no cheese!"
}


function findTheCheese (foods) {
	var cheeses = ["cheddar", "gouda", "camembert"];
	for (var i = 0; i < foods.length; i++) {
		for (var j = 0; j < cheeses.length; j++) {
			if ( cheeses[j]=== foods[i] ) {
				return foods[i]; //#will quit and return the first cheese that it finds
			}
		}
	}
	return "no cheese!"; //#returns "no cheese!" if it doesn't find any cheese :(
}


function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camambert"]
  for (let i=0; i < foods.length; i++) {
    if (foods[i] == cheese[i]) {
      return (`${cheese[i]}`) }
  else {
       return "no cheese!"
      }
  }
}



function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camambert"]
  for (let i=0; i < foods.length; i++) {
    if (foods.includes(cheese[i])) {
      return (`${cheese[i]}`) }
  else {
       return "no cheese!"
      }
  }
}


function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camambert"]
  for (let i=0; i < foods.length; i++) {
    if (foods.includes(cheese[i])) {
      return cheese[i] //no need to interpolate with backtics as this amounts to the same thing
  } //end of if block
} //end of for loop
  return 'No cheese found.' //outside of for loop, so entire loop can execute
  } //end of function block
