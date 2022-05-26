// Module4 solution
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

debugger;

for (let i = 0; i < names.length; i++) {
  if (names[i].charAt(0).toLowerCase() == 'j') {
    speakeGoodBye(names[i]);
  } else {
    speakHello(names[i]);
  }
  
}





function speakHello(name) {
  const speaksWord = "Hello";
  console.log(speaksWord + " " + name);
}


function speakeGoodBye(name){
  const speakeWord = "Good Bye";
  console.log(speakeWord + " " + name);
}