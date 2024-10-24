a = "apple";
console.log(a)
// ____________var variable
var teja="playing"
console.log(teja)
var teja="ludo"
console.log(teja)
  // __________________let variable

  let school="sv"
  console.log(school)
  school="srinivasa"
  console.log(school)
   
  // _____________const variable

const ground="stadium"
console.log(ground)

// _________ data types
// _________ string
a="this is teja"
console.log(a)
// _______number
console.log(10,20,30)
a=10
b=20
console.log(a,b)
// ________boolean boolean=true,false
test=10>20;
console.log(test)
// ________null and undefined
 var tej="null"
console.log(tej)
var teju;
console.log(teju)
// _______array[]
let fruits=["apple","mango",25, { name:"teja"}]
console.log(fruits)
//_____index update
fruits[0]="pinaaple";
//_____add index
fruits.push(20)
// _______object{}
const games={
    cricket:"dhoni",
    football:"racer"
}
console.log(games)
// ______to check datatype
console.log(typeof tej)
console.log(Array.isArray(fruits))
// _______operators
var a=30;
var b=20;
console.log(a/b)
var a=60;
a++
var b=20;
b++
console.log(a)
//______for loop 
const count=8;
const rows=[];
for(i=0;i<count;i=i+1) {
rows.push(i);
}
let result=""
for(const row of rows){
result=result+row; //____"\n" for division
}
console.log(i)


car="apple"
console.log(car)

a=10
b=20
console.log(a+b)

var game = "cricket";
let captain = "dhoni";
if(game == "cricket"){
  console.log("match captain is", captain)
} else{
  console.log("nothing")
}
let obj={
  val:function(a){
    return a**3;
  },
};
console.log(obj.val(3))
