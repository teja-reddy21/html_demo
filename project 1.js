// _____ if we want to see output on browser
document.write("this is java script <br>")
document.write(12345)
document.write("<h1>this is heading text</h1><br>")
var a=30;
var b=20;
document.write("result:",a%b)
 a=60;
a++
 b=20;
b++
document.write("result:",a + "<br>")
// ____ control flow
// ________if (){}
var x=100;
var y=50;
var z=200;
if(x==y){
    document.write("x is equal to y")
}else if(y<z){
    document.write("blue color <br>")
}else if(z>x){
    document.write("yellow color")
}else{
    document.write("all wrong statements")
}
// _______logical operators__NOT!,AND&,OR||
var x=20;
var y=10;
var z=50;
if(x!==y || y<z){
    document.write("true <br>")
}else if((x+y)>z){
    document.write("false")
}
//_______ternary operator
document.write(
2+3==5 ? "yes correct answer" : "no wrong"
)
var x=100;
var y=50;
x<y ? document.write("true"):document.write("false <br>")
// _____Dialog Boxes
var woman= confirm("are you woman")
if(woman){
    let name=prompt("please enter your name")
    document.write("hello madam. " + name +  " welcome to")
}else{
    let name =prompt("please enter your name")
    document.write("hello mr. " + name +  " welcome to <br>")
}
//______switch case
switch(true){
    case 10>20: 
        myAnswer="red"
    break;
    case 20<30:
        myAnswer="green"
    break;
    case 50>20:
        myAnswer="orange"
    break;
    default:
        myAnswer="none of the above"
    break
}
document.write(myAnswer+ "<br>")
//________  functions
  function goodstart(){
    document.write("hello  <br>")
  }
  goodstart();
  goodstart();
  goodstart();
  goodstart();
  goodstart();
  //_____scopes--global scope,function scope,block scope
   var apple="red";
   let orange="orange";
   const banana="yellow";
   function fruit(){
    var x=100; //function scope
    document.write(apple + "<br>") 
    document.write(x + "<br>")
   }
   fruit();//global scope
   //_____block scope
   function sports(){
    if (10<20){
        var tennis="sania"
        let cricket="virat"
        const ground="stadium"
        document.write(cricket + "<br>")
        document.write(ground + "<br>")
    }
    document.write(tennis + "<br>")
   }
   sports();
   // any code after the return statement will not run
   function padRow(name){
    const test="Testing";
    console.log("This Works!")
    return test;
    console.log("This works!")
   }
 