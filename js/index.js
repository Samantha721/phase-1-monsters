const dataMonsters = 
fetch ("http://localhost:3000/monsters")
.then (response => response.json())
.then ((data) => data);
console.log(monster);
}