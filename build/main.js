// variable
var a;
// a = "hello" ERROR
// a = false ERROR
a = 200;
var b;
b = 200;
//b = false ERROR
b = "True";
b = new Date();
var c;
c = true;
c = "hello";
c = 145;
c = new Date();
var f;
f = "hello";
f = 250;
// --------------------------------------------------
function func(age, name) {
    console.log(name + " is " + age + " years old");
}
func(23, "Adir");
