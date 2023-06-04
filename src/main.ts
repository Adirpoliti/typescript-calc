// variable

let a: number;
// a = "hello" ERROR
// a = false ERROR
a = 200;

let b: number | string | Date;
b = 200;
//b = false ERROR
b = "True"
b = new Date()

let c: any;
c = true;
c = "hello";
c = 145;
c = new Date()

let f;
f = "hello";
f = 250;

// --------------------------------F U N C T I O N S-------------------------------- \\

function func(age: number, name: string) {
    console.log(name + " is " + age + " years old")
}

func(23, "Adir");

function func2() {
    console.log("another function")
}

function func3() {
    console.log("my third function")
}