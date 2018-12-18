var array=[]
function dwarfRollCall(dwarves) {
  for (let i=0;i<dwarves.length;i++){
    array.push(`${i+1}. ${dwarves[i]} `)
  }
  return array.join("");
}


function summonCaptainPlanet(planeteerCalls){
  var array1=[]
  var punctuation="!"
  for (let i=0;i<planeteerCalls.length;i++){
    array1.push(`${planeteerCalls[i]}${punctuation}`.toUpperCase())
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
}
