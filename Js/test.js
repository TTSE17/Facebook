/* #007 Output To Screen */

// window.alert("hello Js "); // Stop Running
// // window.close();
// document.write("<h1>I <span> Hello</span> js</h1>");
// document.querySelector("h1").style.color="20px" ;
// console.log("Taha" + 10/6)

/* #008 Console Methods And Styling And Web API */

// console.error("Error");
// console.time();
// console.table(["Taha", ["A", "B"], [1 , 2, 3],'a']);
// console.log("%cHello From Js %cFile " ,"color:blue ; ", "color:red;")

/* #009 What Is ECMAScript ?*/

// var name = "taah" ;
// console.log(`Hello ${name}`);

/* #010 Data Types And typeof Operator */

// console.log(typeof "TAHA");String
// console.log(typeof  hello);undefined
// console.log(typeof null); Object
// console.log(typeof [10, 20, 30]); Object
// console.log(typeof ["taha", 1, "ali"]);Object
// console.log(typeof ["taha", "Osama", "ali"]);Object
// console.log(typeof {name:"TAHA" , Age : 19}); Object
// console.log(typeof false); boolean
// console.log(typeof undefined); undefined
// console.log(typeof NaN); Number
// console.log(typeof 500.1);Number
// console.log(typeof Infinity); Number

/* 12-13-14-15  */

// var _ =1; // Undefined
// var user = 103 , age =20;
// // <h1 id="hello">S</h1> Global
// hello.innerHTML="we";
// console.log("Hello \"\" ")
// console.log("TAHA\n \tWEB SCHOOL");
// let a = "We Love";
// let b ="js";
// document.write(a + " " + b);
// console.log(a+" \n"+b);
// console.log("Elzero
// Web \
// School");

// var x = 8 ;
// {var x = 1};

// console.log(x);

/* #016 Template Literals (Template Strings) */

// let a = "We Love";
// let b = "js";
// let c = "also";
// console.log(a + " \n" + b + " '' " + c);
// console.log(`${a} ${b+" "  + (10 * 3)  / 2}
//  ${c}`);

// let title = "Hiding";
// let desc = "paragraph";
// let markUp = `
// <div>
//   <div class="child">
//    <h2>${title}</h2>
//    <p>${desc}</p>
//   </div>
// </div>
// `;
// document.write(markUp);

/* 18-19-20-21-22 */

// console.log("wev" - 1);//NaN
// console.log(-" k");
// console.log(-0xc);
// console.log(+0xc);
// console.log(-null);
// console.log("   "+ +false + 1);
// console.log(-false);
// console.log(Number("111"));
// console.log((typeof undefined).length); // 9
// console.log(+"");//0

/* #23 Number */

// Double precision
// console.log(1_000_000);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(NaN + "!") //NaN

/* #024 Number Methods & #025 Math Object */

// console.log((100).toString(2 , 8 , 10 ,12 , 16 , 32 , 36))
// console.log(100.14.toString().length.toString())
// console.log(1.11111.toFixed(0))
// console.log(+"100 T")
// console.log(Number("100 T"))
// console.log(parseInt("100 TT"))
// console.log(parseInt("T 100 T"))
// console.log(parseInt(" 100.1 T"))
// console.log(parseFloat(" 100.1 T"))
// console.log(Number.isInteger("100"))
// console.log(Number.isInteger(1.1))
// console.log(Number.isInteger(1))
// console.log(Number.isNaN(1))
// console.log(Number.isNaN(1/"t"))
// console.log(Number.isNaN(" t"))
// console.log(Number.MAX_SAFE_INTEGER.toString().length);//16;
// console.log(Math.ceil(-10.4));
// // console.log(Math.ceil(Math.random() * (max - min + 1) + min));

// console.log(Number.MIN_SAFE_INTEGER);

/* #027 String Methods Part 1 */

// let x = "  TAhA  ";
// console.log(x[0]);
// console.log(x.charAt(2));
// console.log(x.trim());
// console.log(x[0]);
// console.log(x.charAt(2));
// console.log(x.toLowerCase());
// console.log(x.toUpperCase());
// console.log(x.trim().charAt().toLowerCase())
// console.log(x.trim()[0].toLowerCase())

/* #028 String Methods Part 2 & #029 String Methods Part 3 */

// let x = "Elzero Web School";
// console.log(x.indexOf("E", 11));
// console.log(x.lastIndexOf("e"));
// console.log(x.slice());
// console.log(x.slice(2, 1)); //No Swap
// console.log(x.slice(-7, -5));
// console.log(x.split(" ", 2));
// console.log(x.substring(0, 6));
// console.log(x.substring(6, 0)); //Swap
// console.log(x.substring(-10 /*(Any Index == 0)*/, 1));
// console.log(x.substring(x.length - 5, x.length - 3));
// console.log(x.substr(0, 6));
// console.log(x.substr(-6, 3 /*(Lenght , Not Index)*/));
// console.log(x.includes("c", 1));
// console.log(x.startsWith("l", x.length - 1));
// console.log(x.endsWith("ool", 17));
// console.log(isNaN("myString"),Number.isNaN("S"));

/* isNaN converts the argument to a Number and returns true if the resulting value is NaN.
Number.isNaN does not convert the argument; it returns true when the argument is a Number and is NaN. */

/* #035 Conditional Ternary Operator */

// let gender ="Male"
// gender == "Male" ? console.log("Yes") : console.log("No");
// let result = gender == "Masle" ? document.write("Yes") : document.write("No");
// console.log(result);
// console.log(`${gender == "Male" ? "Yes" : "No"} ${name}`);
// let age = 10;
// age < 10
//   ? console.log(10)
//   : age >= 10 && age <= 40
//   ? console.log("10 - 40")
//   : age > 40
//   ? console.log("Larger ")
//   : console.log("Error");

/* #036 Nullish Coalescing Operator & Logical Or*/

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = 0;
// console.log(`The Price Is ${price || 4}`); // NaN + Null + Undefined + Any Falsy Value
// console.log(`The Price Is ${price ?? 1}`);

/* 40-41-42-43-44-45-46-47*/

// let arr = ["Taha", "Ali", " Mohamned"];
// // arr[0] = 1;
// console.log(arr)
// // // console.log(arr.charAt(0)) // Wrong
// console.log(Array.isArray(arr));
// console.log(arr instanceof Array);
// console.log(arr[0][0]);
// arr = ["Taha", "Ali", "Mohamned", [1, 2, 3]];
// console.log(arr[3][1]);
// arr[0] = "Ahmed";
// arr[1] = "Ameer";
// arr[3] = [4, 5, 6];
// arr[arr.length] = "Youssef";
// console.log(arr);
// arr.length = 2;
// console.log(arr);

// let arr = ["Taha", "Osama", "ALi", "Ahmed", "Ameer", "Sayed", "Gamal"];
// arr.unshift("Hbeb");
// arr.push("Mohamed");
// console.log(arr);
// arr.shift();
// arr.pop();
// console.log(arr);

// let arr = ["Taha", "Osama", "ALi", "Ahmed", "Sayed", "Ameer"];
// console.log(arr.indexOf("Taha", -6));
// console.log(arr.lastIndexOf("Taha", -7));
// console.log(arr.includes("Taha"));
// console.log(arr.sort().reverse());

// let arr = ["Taha", "Osama", "ALi", "Ahmed", "Ameer", "Sayed"];
// // console.log(arr.slice(1,-1))
// // arr.splice(2, 999, "TAHA","Taha2");
// console.log(arr)

// let arr2 = [1, 3, 5, 7, 9];
// // console.log(arr2.splice(0 , 2));
// // console.log(arr2);
// // console.log(arr2.fill("Kiwi", 2 ,3));
// // console.log(arr.slice(3, -1));
// console.log(arr2.concat([2, 5, 0], arr, "as"))
// console.log(arr2.join("/").toUpperCase())

/* 48-49*/

// for (let i = 0; i < 10; ++i) {
//     console.log(i);
// }

// let arr = [1, "Ali", 2, "Taha", 3, "sayed"];
// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     newArray.unshift(arr[i]);
//   }
// }
// console.log(newArray);

/* #050 Nested Loops And Trainings */

// let a = ["Keyboard", "Mouse", "Moniter"];
// let b = ["Red", "Blue"];
// let c = [2020, 2021];
// for (let i = 0; i < a.length; i++) {
//   console.log("#".repeat(15));
//   console.log(a[i]);
//   console.log("#".repeat(15));
//   console.log("Colors :  ");
//   for (let j = 0; j < b.length; j++) {
//     console.log(b[j]);
//   }
//   console.log("Models : ");
//   for (let k = 0; k < c.length; k++) {
//     console.log(c[k]);
//   }}

/* #051 Loop Control – Break, Continue, Label */

// let arr = ["a", "b", "c", "d", "e"];
// let color = ["Red", "Green"];
// mainlopp: for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   nestedloop: for (let j = 0; j < color.length; j++) {
//     if (color[j] === "Green") {
//       break mainlopp;
//       }
//       console.log("-  "+color[j])
//   }
// }

/* #052 Loop For – Advanced Example */

// let arr = ["a", "b", "c", "d", "e"];
// let i = 0;
// for (;;) {
//   console.log(arr[i]);
//   i++;
//   if (i >= arr.length) break;
// }

/* #053 Practice – Add Products To Page */

// let arr = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 3;

// document.write(`Show ${arr.length} Products`);
// for (let i = 0; i < arr.length; i++) {
//   document.write(`<div>
//   <h3>${arr[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>- ${colors[j]}</p>`);
//   }
//   // document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }

/* #054 Loop – While */

// let arr = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let i = 0;
// while (true) {
//   console.log(arr[i]);
//   i++;
//   if (i === 3) break;
// }
// do {
//   console.log(arr[i]);
//   i++;
// } while (false);

/* #059 Function Return Statement And Use Cases */

// function calc(n1, n2) {
//   return n1 + n2;
// }
// console.log(calc(10) + 10);

// console.log(typeof console.log)
// function sum(n1, n2) {
//   return ;
//   n1 + n2;
// }
// console.log(sum())
// console.log(sum(1, 2) /*undefined*/ + 10);//Nan

// function generate(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (i == 15) {
//             return ;
//         }
//         console.log(i)
//     }
// }
// console.log(generate(1, 20))
// console.log("T")

/* #060 Function Default Parameters */

// function fun(name, age) {
//     age = age ?? "Unkown"; // (??) null+ undefined
//     console.log(name,age)
// }
// fun("Taha" , 0)

/* #061 Function Default Parameters */

// function calc(...numbers) {
//   console.log(Array.isArray(numbers));
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return `Final Result Is ${result}`;
// }

// console.log(calc(10, 20, 10, undefined, 50, 30));

/* #062 Practice – Ultimate Function */

// function info(us = "-", age = "-", rt = 0, sh = "yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Hello ${us}</h2>`);
//   document.write(`<p>Your Age : ${age}</p>`);
//   document.write(`<p>Hour Rate : ${rt} </p>`);
//   if (sh == "yes") {
//     if (sk.length > 0) document.write(`<p>Your Skills : ${sk.join(" | ")}</p>`);
//     else document.write(`<p>You Don't Have Skills</p>`);
//   } else {
//     document.write(`Your Skills Is Hidden`);
//   }
//   document.write(`</div>`);
// }

// info("Osama", 41, 10, "yes", "Html", "Css", "JS");

/* #064 Anonymous Function and Use Cases */

// let test = function () {
//   console.log("Hi");
// };
// // test;

// document.getElementById("show").onclick = function () {
//   console.log("Done");
// }; //override

// document.getElementById("show").onclick = test;

// setTimeout(test, 1000);

// setTimeout( function(){
//   console.log("Welcome")
// }, 3000);

/* #065 Return Nested Function */

// function method(x, y) {
//   let m = "Hello";
//   function fun2() {
//     function fun3() {
//       return ` ${x}${y}`;
//     }
//     return `${m} ${fun3()} `;
//   }
//   return fun2();
// }
// console.log(method("TA", "HA"));

/* #66 Arrow Function Syntax */

// let print = _ => console.log("Hello");
// print();

// let print2 = n => n;
// console.log(print2(10));

// let print3 = (x, y) => x + y;
// console.log(print3(10, 5));

/* #67 Scope – Global And Local */

// var a = 1;
// let b = 2;
// function text() {
//   var a = 10;
//   let b = 20;
//   console.log(`inside Fun ${a}`);
//   console.log(`inside Fun ${b}`);
// }
// console.log(`Global var ${a}`);
// console.log(`Global var ${b}`);
// text();

/* #68  Scope – Block */

// var x = 10;
// function f() {
//   //Test When If (Block)
//   var x = 50;
//   console.log(`F() : ${x}`);
// }
// console.log(x);
// f();
// console.log(x);

// var x = 10;
// {
//   let x = 50;
//   console.log(`Block ${x}`);
// }
// console.log(x);

/* #69 Scope – Lexical (Static) */

// function parent() {
//   let a = 10;
//   function child() {
//     console.log(`Child ${a}`);
//     // console.log(`Child ${b}`);
//     function grand() {
//       let b = 100;
//       console.log(`Grand ${a}`);
//       console.log(`Grand ${b}`);
//     }
//     grand();
//   }
//   child();
// }
// parent();

// Currying Function Technique

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `I am Not Available`;
//     };
//   };
// }

// let checker = (zName) => {
//   return (status) => {
//     return (salary) => {
//       return status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `I am Not Available`;
//     };
//   };
// };

// let checker = (zName) => (status) => (salary) =>
//   status === "Available"
//       ? `${zName}, My Salary Is ${salary}`
//       : `I am Not Available`;

// console.log(checker("Philo")("Available")("40000$")); // Output => Philo, My Salary Is 4000$
// console.log(checker("Osama")("Not Available")()); // Output => I am Not Avaialble

/* #71 Higher Order Functions – Map */

// let arr = [1, 2, 3, 4, 5];

// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//   newArr.push(arr[index] * 2);
// }
// console.log(newArr);

// let x = arr.map(function (el) {
//   console.log(`This ${this}`);
//   return el+this;
// }, 2);
// console.log(x);

// let y = arr.map(a => a + a ,1); // this does not work with arrow Function
// console.log(y);

// function addition(num) {
//     console.log(this)
//   return num + num;
// }

// let z = arr.map(addition,10);
// console.log(z);

/* #72 Higher Order Functions – Map Practice */

// let a = "elZeRo";
// let x = a
//   .split("")
//   .map(function (el) {
//     return el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase();
//   })
//   .join("");
// console.log(x);

// let b = [1, -1, 2, -2, 3];
// let y = b.map(function (e) {
//   return -e;
// });
// console.log(y,b);

// let c = "Elz123e4ro5";
// let z = c
//   .split("")
//   .map(function (e) {
//     return isNaN(e) ? e : "";
//   })
//   .join("");
// console.log(z);

/* #73 Higher Order Functions – Filter */

// let a = ["ahmed", "Taha", "Ali", "Osama", "Alaa"];

// let x = a.filter(function (el) {
//   return el.toUpperCase().startsWith("A");
// });
// console.log(x);

// let b = [1, 2, 3, , 4, 5];

// let y = b.filter(function (e) {
//   return !(e % 2 ) ;
// });
// console.log(y);

/* #74 Higher Order Functions – Filter Practice */

// let sentence = "I Love Foood Code Too PLaying Much";
// let a = sentence
//   .split(" ")
//   .filter(function (el) {
//     return el.length <= 4 ? false : true;
//   })
//   .join(" ");
// console.log(a);

// let mix = "A12B3C45";
// let b = mix.split("").filter(function (el) {
//     return Number.isInteger(Number(el));
//     // return !isNaN(el);
//     // return parseInt(el);
// }).map(function (el ) {
//     return el * el;
// }).join(" ")
// console.log(b);

/* #75 Higher Order Functions – Reduce */

// let nums = [1, 2, 3, 4, 5];
// let sum = nums.reduce(function (acc, curr, i, arr) {
//   console.log(acc);
//   console.log(curr);
//   console.log(i);
//   console.log(arr);
//   return acc + curr;
// },0);
// console.log(sum);

/* #76 Higher Order Functions – Reduce Practice */

// let names = ["A", "BB", "CCC", "DDD", "EEE"];
// let max = names.reduce(function (acc, curr) {
//     console.log(acc,curr)
//   return acc.length > curr.length ? acc : curr;
// },"a");
// console.log(max);

// let strings = ["E", "@", "L", "Z", "@", "E", "R", "@", "O"];
// let final = strings.reduce(function (acc, curr) {
//   console.log(acc + " | " + curr);
//   return curr !== "@" ? acc + curr : acc;
// }, "");
// console.log(final);

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let solution =myArray
// .reduce((acc, curr) => acc.concat(curr), []);

// console.log(solution);

/* #77 Higher Order Functions – ForEach And Practice */

// let all = document.querySelectorAll("ul li");
// let divs = document.querySelectorAll(".content div");

// console.log(divs)
// console.log(all)

// all.forEach(function (el) {
//   // console.log(el)
//   // console.log(el.className);
//   // console.log(el.innerHTML);
//   el.onclick = function () {
//     // console.log(el);
//     all.forEach(function (el) {
//       el.classList.remove("active");
//     });
//     this.classList.add("acitve");
//     divs.forEach(function (el) {
//       el.style.display = "none";
//     });
//   };
// });

/* #79 Object – Introduction */

// console.log(window.location.href);
// // console.log(window.location.assign("https://google"));
// let user = {
//   name: "TAHA",
//   age: 19,
//   print: function (ele) {
//     return `hello ${ele}`;
//   },
// };
// console.log(user.age);
// console.log(user.print("Ahmed"));

// x = {
//   a: 1,
//   b: 1,
// };
// console.log(Object.keys(x));
// console.log(Object.values(x));
// console.log(Object.entries(x)[1]);

/* #80 Dot Notation vs Bracket Notation */

// let myvar = "name";
// let user = {
//   name: "Osama",
//   country: "Egypt",
//   "country of": "palestine",
//   _: "Notation",  // Or $
//   100: "Number",
// };
// console.log(user["country of"]);
// console.log(user._);
// console.log(user[myvar]);

/* #81 Nested Object And Advanced Examples */

// let ava = false;
// let user = {
//   name: "TAHA",
//   age: 19,
//   skills: ["HTML", "CSS", "JS"],
//   ava: true,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   check: function () {
//     return  this.ava == true ? "Free" : "Not Free";
//   },
// };
// console.log(user.skills.join(" "));
// console.log(user.skills[1]);
// console.log(user.addresses);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt["one"]);
// console.log(user.check());

/* #82 Create Object With New Keyword */

// let user = new Object({
//   age: 29,
// });
// console.log(user);
// user.age = 19;
// user["name"] = "Osama";
// user["print"] = function () {
//     return "Hello";
// }
// console.log(user);

/* #83 This Keyword */

// console.log(this);
// console.log(this == window);
// myvar = 100; // or var
// console.log(this.myvar)
// console.log(window.myvar)

// function This() {
//     return (this);
// }
// console.log(This()==window)

// document.getElementById("show").onclick = function () {
//   console.log(this);
// };

// let user = {
//     age: 19,
//     days:  () => this.age * 365,
// }
// console.log(user.days())

/* #84 Create Object With Create Method */

// let user = {
//   age: 19,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// };

// console.log(user.doubleAge());
// console.log(user);

// let obj = Object.create({});
// obj.nunber = 100;
// console.log(obj);

// let newObject = Object.create(user);
// // newObject.age = 21;
// console.log(newObject, user);
// console.log(newObject.doubleAge());

/* #85 Create Object With Assign Method */

// let o1 = {
//   prop1: 100,
//   method1: function () {
//     return this.prop1;
//   },
// };
// let o2 = {
//   prop2: 2,
//   method2: function () {
//     return this.prop2;
//   },
// };
// let o3 = {
//   prop1: 1,
//   prop2: 4,

// };

// let newObject = Object.assign( o1,o1,o3);
// console.log(newObject,o2);
// console.log(newObject,o3);
// console.log(newObject,o1);
// newObject.p4 = 15;
// console.log(newObject);

// let finalObj = Object.assign( {},o1, {
//   p5: 5,
//   p6: 6,
//   mult: function () {
//     return o1.prop1 + this.p5 ;
//   },
// });
// console.log(finalObj,o1);
// console.log(finalObj.mult());

/* use strict */

// "use strict"

// var arguments = 3.14;

// x = 10;

// let y = 10;
// delete y;

// function same (p1 , p1){}

// x = {};
// // let x = 010;
// let x = "\10\";

/* Assignments */

// let names = function (...x) {
//   return `String [${x.join("], [")}]=> Done !`;
// };
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

/* #086 What Is DOM ? And Select Elements */

// let myId = document.getElementById("my-div");
// console.log(myId);
// let myTage = document.getElementsByTagName("span");
// console.log(myTage[1].innerHTML);
// // console.log(document.getElementsByTagName("*"))
// let myClass = document.getElementsByClassName("my-span");
// console.log(myClass);
// console.log(document.getElementsByName("two")[0]);

// let myQuery = document.querySelector("form");
// console.log(myQuery);
// console.log(myQuery.one.type); // Just One
// let myQueryAll = document.querySelectorAll(".my-span");
// console.log(myQueryAll[1].innerHTML);
// console.log(document.title)
// console.log(document.forms[1][0].name);
// console.log(document.forms.item(0)[0].name);
// console.log(document.forms[1].two.value)
// console.log(document.links[0].href)

/* #087 Get, Set Elements Content And Attributes */

// let ele = document.querySelector(".my-span");
// console.log(ele.innerHTML); //get
// console.log(ele.textContent);
// ele.innerHTML = "JS <p>paragraph</p> File"; //set
// ele.textContent = "JS <p>paragraph</p> File";
// // document.images[0].src = "https://twitter.com";//override
// document.images[0].alt = "alternate";
// document.images[0].title = "image";//add
// let ele = document.querySelector(".link");
// let el = "TIlte"
// console.log(ele.getAttribute("class"))
// console.log(ele.getAttribute("href"))//Null
// ele.setAttribute("class", "li")
// ele.setAttribute("href", "https://google.come")
// ele.setAttribute(el, el)

/* #088 Check Attributes And Examples */

// console.log(document.getElementsByClassName("par")[0].attributes[2]);
// let el = document.getElementsByTagName("p")[0];
// if (el.hasAttribute("data")) {
//   if (el.getAttribute("data") == "") {
//     el.removeAttribute("data")
//   } else {
//     el.setAttribute("data", "newData");
//   }
// } else {
//   console.log("Not Found");
// }
// console.log(el.hasAttributes())
// console.log(document.getElementsByTagName("div")[0].hasAttributes())

/* #089 Create And Append Elements */

// let ele = document.createElement("div");
// ele.className = "DIV";
// let att = document.createAttribute("data-sc");
// let el = "ATT"
// ele.setAttributeNode(att);//only variable
// ele.setAttribute(el, el);//Except Create Attribute
// ele.setAttribute("data-sc", "new");
// let tex = document.createTextNode("Product One");
// let com = document.createComment("THIS IS COMMENT");
// document.body.appendChild(ele);
// ele.appendChild(tex);
// ele.append( com,"hello","S","S");

/* #090 Product With Heading And Paragraph Practice */

// for (let index = 0; index < 5; index++) {
//   let dv = document.createElement("div");
//   let par = document.createElement("p");
//   let tit = document.createElement("h3");
//   par.innerHTML = "Product One"; //Or CreateTextNode
//   tit.innerHTML = "price: 20$";
//   dv.appendChild(par);
//   par.appendChild(tit);
//   document.body.append(dv);
//   document.write("<br>")
//   // document.write(dv.innerHTML+"<br>")
// }
// document.write(dv.innerHTML.repeat(5))

/* #091 Deal With Childrens */

// let ele = document.querySelector("div");
// console.log(ele.children)
// console.log(ele.children[1]);
// console.log(ele.childNodes[2]);
// console.log(ele.firstChild)
// console.log(ele.lastChild)
// console.log(ele.lastElementChild)
// console.log(ele.firstElementChild)

/* #092 DOM Events */

// let ele = document.getElementById("btn");
// ele.onclick = function () {
//   console.log("Rclick");
// };
// ele.oncontextmenu = function () {
//   console.log("menu");
// };
// ele.onmouseover = () => console.log("Hover2");
// ele.onmouseenter = () => console.log("Hover1");
// ele.onmouseleave = () => console.log("Leave1");
// ele.onmouseout = () => console.log("Leave2");
// ele.onblur = () => console.log("Leave3");
// window.onload = () => console.log("Load");
// window.onscroll = () => console.log("Scroll");
// window.onresize = () => console.log("ReSize");

/* #093 Validate Form And Prevent Default */

// document.links[0].onmouseenter = function (ev) {
//   console.log(ev);
// };

// document.links[0].onclick = function (ev) {
//   console.log(ev);
//   ev.preventDefault();
// };

// let user = document.querySelector('[name="user"]');
// let age = document.querySelector('[name="age"]');
// document.forms[0].onsubmit = function (ev) {
//   let usV = false,
//     agV = false;
//   if (user.value !== "" && user.value.length <= 10 && age.value !== "") {
//     usV = true;
//     agV = true;
//   }
//   // if (age.value !== "") {
//   //   agV = true;
//   // }
//   if (agV == false || usV == false) {
//     document.querySelector("a").innerHTML = "Do Not Send";
//     ev.preventDefault();
//   }
// };

/* #094 Event Simulation – Click, Focus, Blur */

// let one = document.querySelector(".one")
// let two = document.querySelector(".two")
// window.onload= function () {
//     two.focus();
// }
// one.onblur = function () {
//     document.links[0].click();
// }

// let fo = document.forms[0];
// for (let i = 0; i < fo.length; i++) {
//   fo[i].oninput = function () {
//     if (fo[i].value.trim().length != 0) {
//       console.log(fo[i])
//       if (i < 4) {
//         fo[i + 1].focus();
//       }
//       else {
//         document.links[0].click();
//       }
//     }
//   };
// }

/* #095 ClassList Object and Methods */

// let ele = document.getElementById("DIV");
// console.log(ele.classList);
// console.log(typeof ele.classList);
// console.log(ele.classList.contains("one"));
// console.log(ele.classList.item("2"));
// console.log(ele.classList.item(2));
// console.log(ele.classList.value); // as String
// console.log(ele.classList.toString());
// ele.onclick = function () {
//   ele.classList.add("four", "five")
//   // ele.classList.remove("one", "two")
//   ele.classList.toggle("one"); // remove and add last
// };

/* #096 CSS Styling And Stylesheets */

// let ele = document.getElementById("DIV");
// ele.style.color = "green";
// ele.style.fontSize = "35px";
// ele.style.cssText = "color:yellow ; font-size:39px; padding:7px";
// ele.style = "font-size:55px;"; // override all cssText
// ele.style.removeProperty("font-size");
// ele.style.setProperty("font-size", "35px", "important");

// document.styleSheets[0].cssRules[0].style = "background:black; color:white"; //override all css file
// document.styleSheets[0].cssRules[0].style.setProperty("margin","10px")
// document.styleSheets[0].cssRules[0].style.removeProperty("margin")

/* #097 Before, After, Prepend, Append, Remove */

// let ele = document.getElementById("DIV");
// let par = document.createElement("p");
// ele.before(",");
// ele.before("hello");
// ele.before("heo");
// ele.after("k");
// ele.after("hello");
// ele.after("heo");
// ele.before(par);
// par.textContent="P";
// ele.after(par); //override
// console.log(ele.before(par)); // append throw undefined and before aftter
// ele.prepend("BEfore1");
// ele.prepend("BEfore2");
// ele.append("After");
// ele.append("After2");
// ele.remove();

/* #098 DOM Traversing */

// let ele = document.querySelector(".two");
// console.log(ele.nextSibling);
// console.log(ele.previousSibling);
// console.log(ele.nextElementSibling);
// console.log(ele.previousElementSibling);
// console.log(ele.parentNode)
// console.log(ele.parentElement)

// ele.onclick = function () {
//   ele.parentElement.remove();
// };

// let DIV = document.documentElement
// console.log(DIV)
// console.log(DIV.parentNode);
// console.log(DIV.parentElement);

/* #099 DOM Cloning */

// let par = document.querySelector("p").cloneNode();
// par.id="clone"
// document.body.prepend(par)

/* #100 addEventListener */

// let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two; //override
// myP.onclick = three; //override

// function one() {
//   console.log("One");
// }
// function two() {
//   console.log("Two");
// }
// function three() {
//   console.log("Three");
// }

// window.onclick = "osama"; // No Error
// window.onclick = one;
// myP.addEventListener("click", two);
// myP.addEventListener("click", one);
// myP.addEventListener("click", three);
// // myP.addEventListener("click", ""); // Error

// myP.onclick = function () {
//   let clone = myP.cloneNode(true);
//   clone.className = "Cloned";
//   clone.textContent="Cloned";
//   document.body.appendChild(clone);
//   clone.onclick = function () {
//     console.log("I am Cloned");
//   };
// };

// let ele = document.querySelector(".Cloned"); // Not exist

// ele.onclick = function () {
//   console.log("I am Cloned");
// };

// document.addEventListener("click", function (e) {
//   console.log(e.target);
//   if (e.target.className == "Cloned") {
//     console.log(e.target);
//   }
// });

/* #103 Alert, Confirm, Prompt */

// let mess = alert("hello");
// console.log(mess); // undefined

// let mess2 = confirm("Are you sure ?");
// console.log(mess2);

// let mess3 = prompt("What's Up ? ", "Answer here...");
// console.log(mess3);

/* #104 setTimeout and clearTimeout */

// setTimeout(() => {
//   console.log("Hello");
// }, 500);

// setTimeout(() => {
//   console.log("Hello");
// }, 1500);

// function print(user, age) {
//   console.log(`Name is ${user} , Age Is ${age}`);
// }

// let counter = setTimeout(print, 1000, "Osama", 38);
// console.log(counter);

// let btn = document.querySelector("button");
// btn.onclick = function () {
//   clearTimeout(counter);
// };

// let countr = 1,
//   timer = 0;

// let div = document.querySelector("div");
// div.innerHTML = timer;
// div.style.backgroundColor="red";

// function start() {
//   div.innerHTML = countr++;
//   timer = setTimeout(start, 500);
// }

// div.onmouseleave = stop;
// div.onmouseover = start;

// function stop() {
//   clearTimeout(timer);
// }

/* #105 setInterval and clearInterval */

// setInterval(print, 1000, "taha", 19);

// let div = document.querySelector("div");
// div.innerHTML=17;
// let counter = setInterval(cutdown, 500);
// function cutdown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }

// let counter= setInterval(setColor, 500)
// let bd = document.body;
// function setColor() {
//   bd.style.backgroundColor =
//     bd.style.backgroundColor == "yellow" ? "red" : "yellow";
// }

/* #106 Window Location Object */

// console.log(window.location);
// console.log(location.href);
// console.log(location.origin);
// console.log(location.search);
// console.log(location.pathname);
// console.log(location.port);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.hash);
// // location.href="https://google.com"
// // location.href="/Test/test.html#sec002"
// // location.hostname = "google.com";
// // location.protocol="https"
// // window.location.reload();
// // location.replace()
// // location.assign()

/* #107 Window Open And Close */

// let a = window.open();
// window.close();

// let p;
// setTimeout(function () {
//   p = window.open(
//     "https://google.com",
//     "_blank",
//     "width=300,height=300,top=500,left=1000",
//     false
//   );
// }, 1000);

// setTimeout(function () {
//   p.close();
// }, 5000);

/* #108 Window History Object */

// console.log(window.history)
// console.log(window.history.length)
// console.log(window.history.back())
// console.log(window.history.forward())
// console.log(window.history.go(1))

/* #109 Scroll, ScrollTo, ScrollBy, Focus, Print, Stop */

// window.stop();
// window.print();
// let myWindow= window.open("https://google,.com","","width=500,height=500,left=500")
// myWindow.focus();
// myWindow.blur();

// document.body.style.height = "500vh"
// document.body.style.width = "500vw"

// window.scroll(500, 500);
// window.scrollTo(500, 500);
// window.scrollBy(500, 1500);

// window.setInterval(function () {
// window.scrollBy({
//   left: 100,
//   top: 100,
//   behavior: "smooth",
// });
// },1000)

/* #110 Scroll To Top Using ScrollY Practice */

// console.log(window.scrollX === window.pageXOffset);

// let btn = document.querySelector("button");
// document.body.style.height = "500vh"
// document.body.style.width = "500vw"

// window.onscroll = function () {
//   if (window.scrollY >600) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };

// btn.onclick = function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// };

// let a = prompt("Print Number From – To", "20-5").split("-").sort((b,c)=> b-c);
// console.log(a);
// let max = +a[0] > +a[1] ? a[0] : a[1];
// let min = +a[0] < +a[1] ? a[0] : a[1];
// for (let i = +min; i <= +max; i++) {
//   console.log(i);
// }
// let counter = setInterval(function () {
//   console.log(a[0]++);
//   if (a[0] > a[1]) {
//     clearInterval(counter);
//   }
// });

/* #111 Local Storage */

// console.log( window.localStorage);
// window.localStorage.setItem("color", "red");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "10px";
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.fontSize);
// console.log(window.localStorage["fontWeight"]);
// document.body.style.backgroundColor = window.localStorage.getItem("color");
// // window.localStorage.removeItem("color");
// console.log(window.localStorage.key(1))
// // window.localStorage.clear();
// for (let index = 0; index < localStorage.length; index++) {
//   console.log(window.localStorage.key(index))
// }

/* #112 Local Storage Color App Practice */

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector("div");

// // // window.localStorage.clear()

// if (window.localStorage.getItem("color")) {
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color)
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // exp.style.backgroundColor = e.currentTarget.dataset.color;
//     exp.style.backgroundColor = window.localStorage.getItem("color");
//   });
// });

/* #113 Session Storage And Use Cases */

// window.localStorage.setItem("color", "red");

// window.sessionStorage.setItem("color", "blue");
// window.sessionStorage.clear()

// document.querySelector(".name").onblur = function () {
//   window.sessionStorage.setItem("inf", this.value);
// };

/* #114 BOM + Storage Challenge  */

// let input = document.querySelector(".input");
// let submit = document.querySelector(".add");
// let tasksDiv = document.querySelector(".tasks");

// let arrayOfTasks = [];
// if (window.localStorage.getItem("tasks")) {
//   arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
//   addElementsToPageFrom(arrayOfTasks);
// }
// // getDataFromLocalStorage();

// // window.localStorage.clear();

// submit.addEventListener("click", function () {
//   if (input.value != "") {
//     addTaskToArray(input.value);

//     addElementsToPageFrom(arrayOfTasks);

//     addDataToLocalStorageFrom(arrayOfTasks);
//   }

//   input.value = "";
// });

// tasksDiv.addEventListener("click", function (e) {
//   if (e.target.className == "del") {
//     e.target.parentElement.remove();
//     deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
//   }
//   if (e.target.classList.contains("task")) {
//     e.target.classList.toggle("done");
//     toggleStatusTaskWith(e.target.getAttribute("data-id"));
//   }
// });

// function deleteTaskWith(idValue) {
//   arrayOfTasks = arrayOfTasks.filter(function (task) {
//     return task.id != idValue;
//   });
//   addDataToLocalStorageFrom(arrayOfTasks);
// }

// function toggleStatusTaskWith(taskId) {
//   for (let i = 0; i < arrayOfTasks.length; i++) {
//     if (arrayOfTasks[i].id == taskId) {
//       arrayOfTasks[i].completed == false
//         ? (arrayOfTasks[i].completed = true)
//         : (arrayOfTasks[i].completed = false);
//     }
//   }
//   addDataToLocalStorageFrom(arrayOfTasks);
// }

// function getDataFromLocalStorage() {
//   let data = window.localStorage.getItem("tasks");
//   if (data) {
//     let tasks = JSON.parse(data);
//     addElementsToPageFrom(tasks);
//   }
// }

// function addDataToLocalStorageFrom(arrayOfTasks) {
//   window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
// }

// function addTaskToArray(inputValue) {
//   const task = {
//     id: Date.now(),
//     title: inputValue,
//     completed: false,
//   };
//   arrayOfTasks.push(task);
// }

// function addElementsToPageFrom(arrayOfTasks) {
//   tasksDiv.innerHTML = "";
//   for (let i = 0; i < arrayOfTasks.length; i++) {
//     let div = document.createElement("div");
//     div.className = "task";

//     if (arrayOfTasks[i].completed) {
//       div.className = "task done";
//     }
//     div.setAttribute("data-id", arrayOfTasks[i].id);
//     div.appendChild(document.createTextNode(arrayOfTasks[i].title));

//     let span = document.createElement("span");
//     span.innerHTML = "Delete";
//     span.className = "del";

//     div.append(span);
//     tasksDiv.append(div);
//   }
// }

// to remove All [tasksDiv.innerHTML=""] and  localStorage.removeItem("tasks")

/* Assignments */

// window.localStorage.clear();

// let sel1 = document.querySelectorAll("select")[2];
// let opg1 = document.querySelectorAll("select optgroup")[2];

// for (let i = 16; i <= 30; i++) {
//   let opt = document.createElement("option");
//   opt.textContent = i;
//   opg1.append(opt);
// }

// let s = document.querySelectorAll(".size optgroup option");

// sel1.oninput = function () {
//   window.localStorage.setItem("size", sel1.value);
//   document.body.style.fontSize = `${sel1.value}px`;
// };

// if (window.localStorage.getItem("size")) {
//   document.body.style.fontSize = `${window.localStorage.getItem("size")}px`;
// }

// let sel2 = document.querySelectorAll("select")[1];

// sel2.oninput = function () {
//   window.localStorage.setItem("color", sel2.value);
//   document.body.style.color = `${sel2.value.toLowerCase()}`;
// };

// if (window.localStorage.getItem("color")) {
//   document.body.style.color = `${window.localStorage.getItem("color")}`;
// }

// window.onload = function () {
//   if (window.localStorage.getItem("size")) {
//     sel1.value = window.localStorage.getItem("size");
//     // let n = +window.localStorage.getItem("size");
//     // for (let i = 0; i < s.length; i++) {
//     //   if (+s[i].innerHTML == n) {
//     //     s[i].setAttribute(`${window.localStorage.getItem("selec")}`, "");
//     //   }
//     // }
//   }
//   let s1 = document.querySelectorAll(".color optgroup option");
//   if (window.localStorage.getItem("color")) {
//     sel2.value = window.localStorage.getItem("color");
//     // let n = window.localStorage.getItem("color");
//     // for (let i = 0; i < s1.length; i++) {
//     //   if (s1[i].innerHTML.toLowerCase() == n) {
//     //     s1[i].setAttribute(`${window.localStorage.getItem("selec")}`, "");
//     //   }
//     // }
//   }
// };

////////////////
// window.localStorage.clear()
// let arr = [];
// let inps = document.querySelectorAll("form input");
// for (let i = 0; i < inps.length; i++) {
//   inps[i].oninput = function () {
//     arr[i] = inps[i].value;
//     window.sessionStorage.setItem("in", JSON.stringify(arr));
//   };
// }

// if (JSON.parse(window.sessionStorage.getItem("in"))) {
//   for (let i = 0; i < inps.length; i++) {
//     inps[i].value = JSON.parse(window.sessionStorage.getItem("in"))[i];
//   }
// }

// let sel = document.querySelector("select");
// sel.oninput = function () {
//   window.sessionStorage.setItem("sec", sel.value);
// };
// sel.value = window.sessionStorage.getItem("sec");
// window.sessionStorage.clear();

/* #115 Destructuring Arrays Part 1 */

// let a = 3,
//   b = "B",
//   c = false,
//   d = "D",
//   f;

// [a, b, ...rest] = friends;
// console.log(a, rest);

/* #116 Destructuring Arrays Part 2 */

// let friends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]]
// let [a ,   ,  b] = friends[3];
// console.log(a);
// console.log(b[1]);

/* #117 Destructuring Arrays Part 3 */

// let book = 1;
// let video = 2;

// let stash = book;
// book = video;
// video = stash;

// video = video + book;
// book = video - book;
// video = video - book;

// [book, video] = [video, book];

// console.log(book, video);

/* #118 Destructuring Objects Part 1 */

// const user = {
//   username: "TAHA",
//   age: 19,
//   country: "Palestaine",
// };

// let theName = user.name;
// let theAge = user.age;
// let theCountry = user.country;

// let { username, country, age } = user;
// ({ username, theAge, theCountry } = user);
// console.log(username );

/* #119 Destructuring Objects Part 2 */

// const obj = {
//   name: "Ali",
//   age: 19,
//   country: "Syria",
//   skills: { html: 71 },
// };

// const {
//   name: n,
//   age: a,
//   skills: { html: h, css: c, js: j = 11 },
// } = obj;

// console.log(n, a, h, c ,j);

// const { html: non, css: two = "c" } = obj.skills;
// console.log(non, two);

/* #120 Destructuring Function Parameters */

// const user = {
//   name: "osama",
//   age: 41,
//   skills: {
//     html: 31,
//     css: 13,
//   },
// };

// print(user);

// function print({ name: n, age: a, skills: { html: h, css: c, js: j = -1 } }) {
//   console.log(a, n, h, c, j);
// }

/* #121 Destructuring Mixed Content */

// const user = {
//   name: "Taha",
//   age: 19,
//   skills: ["html", "css", "js"],
//   addresses: { egypt: "Cairo" },
// };

// const {
//   name: n,
//   age: a,
//   skills: [, , three],
//   addresses: { egypt: e },
// } = user;
// console.log(n, a, three, e);

/* #122  */

// const obj = {
//     b: undefined,
//     c: null,
// }

// const { b = 2, c = 3, d = "now" } = obj
// console.log(b, c,d);

// const { a = console.log("Hello") } = obj
// console.log(a,b, c,d)

// const [a, b, ...[c, d]] = [1, 2, 3, 4];
// console.log(a, b, c, d); // 1 2 3 4

// const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c, d, e, f); // 1 2 3 4 5 6

// const obj = {
//   z: "bar",
// };
// let key = "z";
// const { [key]: foo } = obj;
// console.log(foo);

// let m = new Map();
// m.set('a', 1).set("b", 2).set("c", 3)
// console.log(m)
// console.log(Object.fromEntries(m))
// const [A, [, B], [C,]] = m;
// console.log(A, B, C)
// const { a, b, cc } = Object.fromEntries(m);
// console.log(a, b, cc)

/* #122 Challenge */

// let chosen = 3;
// let myFriends = [
//     { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//     { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//     { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// const { title, age, available, skills: [, s] } = myFriends[chosen - 1];
// console.log(title)
// console.log(age)
// available ? console.log("Available") : console.log("Not Available");
// console.log(s)

/* Assignments */

// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };

// const {
//   title: t,
//   developer: d,
//   releases: { Origin: or },
// } = game;

// let [o, a] = Object.keys(game.releases);

// let { [o]: a2 } = game.releases;
// let [u, j] = a2;

// let { [a]: a3 } = game.releases;
// let {US:u_price, JAP:j_price} = a3;

// const [o, a] = Object.keys(game.releases);

// const [u, j] = game.releases["Oath In Felghana"];

// const { US: u_price, JAP: j_price } = game.releases["Ark Of Napishtim"];

// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

/* #123 Set Data Type And Methods */

// let unique = new Set([1, 2, 1, 2, 3])
// // let unique = new Set().add(1).add(1).add(2).add(3).add(2);
// // let unique = new Set();
// unique.add(1).add(1).add("A")
// unique.add(2).add(3).add(2).add(true);
// console.log(unique)
// console.log(unique.size)
// console.log(unique[0]) //undefined
// console.log(unique.delete(1));
// console.log(unique.delete(1));
// // console.log(unique.clear())
// console.log(unique.has(2))
// console.log(unique.has("a".toLocaleUpperCase()))
// console.log(unique.keys())

/* #124 Set vs WeakSet And Garbage Collector */

// let ws = new WeakSet([{ a: 1, c: 3, b: 5 }]);
// console.log(ws);

// let unique = new Set([1, 4, 1, 2, 3])
// let itera = unique.entries(); // values and keys
// console.log(itera)
// console.log(itera.next().value);
// console.log(itera.next());
// console.log(itera.next());
// console.log(itera.next().done);
// console.log(itera.next().done);
// console.log(itera.next().done);

// unique.forEach((ele) => console.log(ele))

/* #125 Map Data Type vs Object */

// let obj = {}
// let empty = Object.create(null);
// let map = new Map();
// console.log(obj)
// console.log(empty)
// console.log(map)

// let obj = {
//     10: "Number",
//     "10": "string",//override;
// }
// console.log(obj)

// let mapObj = new Map();
// mapObj.set(10, "Number")
// mapObj.set("10", "String")
// console.log(mapObj)
// console.log(mapObj.get(10))

// mapObj.set({ a: "A" }, "Object")
// mapObj.set(true, "Boolean");
// mapObj.set(function fun(a) { console.log("Hello")}, "Function")

// console.log(mapObj);

/* #126 Map Methods */

// let myMap = new Map([
//     [10, "Number"],
//     ["Name", "String"],
//     [false, "Boolean"],
// ]);

// myMap.set(10, "number").set("Name", "string");
// myMap.set("10", "number").set("Name", "String");
// console.log(myMap)
// console.log(myMap.get(false));
// console.log(myMap.delete(false))
// console.log(myMap.has(10))
// // console.log(myMap.clear())
// console.log(myMap)

// let m = new Map(myMap.entries());

// console.log(m);

/* #127 Map vs WeakMap */

// let obj1= { theName: "Taha" };
// let map = new Map([[obj1, "Object"]]);
// map.set(obj1, "Object")
// obj1 = null;
// console.log(map)

// let obj = { theName: "Osama" };
// let wMap = new WeakMap([[obj, "Object"]])
// obj = null;
// console.log(wMap)

/* #128 Array.from Method */

// console.log(Array.from("Taha"));
// console.log(("Taha").split(""));
// console.log(Array.from(12345));
// console.log(Array.from("12345", (n) => +n + +n));

// let arr = [1, 1, 1, "A", 2, 2, 3, 'A', 4, 5, 5];
// let set = new Set(arr);
// console.log(set);
// console.log(Array.from(set));
// console.log([...set])

// function fun() {
//   return arguments;
// }

// console.log(fun("Osama", 1, "Ali"));

// function arrFrom() {
//   return Array.from(arguments);
// }

// console.log(arrFrom("Osama", 1, "Ali"));

// let arr = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8, 9];

// console.log(Array.from([arr]))

// console.log([arr,arr2]);
// console.log(Array.from([arr,arr2]))

// console.log([...arr,...arr2])
// console.log(Array.from([...arr,...arr2]))

// console.log(([arr, arr2]).flat())
// console.log(Array.from([arr, arr2]).flat())

// console.log(Array.of(arr, arr2));
// console.log(Array.of(arr, arr2).flat());
// console.log(Array.of([arr, arr2]).flat().flat());

/* #129 Array.copyWithin Method */

// let arr = [10, 20, 30, 40, 50, "A", "B"]

// arr.copyWithin(3)
// arr.copyWithin(-3)

// arr.copyWithin(2,1)
// arr.copyWithin(2,-3)

// arr.copyWithin(5, 0,3)
// arr.copyWithin(1, 0,3);
// console.log(arr);

/* #130 Array.some Method */

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let n = 1;
// let check = nums.some(function (e, i) {
//     console.log(e);
//     return e > this ;
// },n)
// console.log(check)

// function test(arr, val) {
//     return arr.some(function (e) {
//         console.log(e , val)
//         return e == val;
//     })
// }
// console.log(test(nums, 2))

// let range = { min: 1, max: 20 };
// // let range = [10 ,20];
// console.log(
//   nums.some(function (e) {
//     console.log(e);
//     return e >= this.min && e <= this.max;
//   }, range)
// );

// console.log([1, ,1].some(function(e){
//   console.log(e);
//   return e==undefined;
// }));

// console.log([1, ,1].some((e)=> e !==1))
// console.log([1,undefined ,1].some((e)=> e !==1))

/* #131 Array.every Method */

// let locations = {
//   "place 1 ": "16",
//   "place 2 ": "20",
//   "place 3 ": "30",
//   "place 4 ": "40",
//   "place 5 ": "50",
// };

// let mainLocations = 15;

// let locArrayNumber = Object.values(locations)
//   .map((e) => +e)
//   .every(function (n) {
//     console.log(n);
//     return n > this;
//   }, mainLocations);

// console.log(locArrayNumber);

// console.log([1, ,3].every((e)=> e !==undefined))
// console.log([2,,2].every((e)=> e ==2))

/* #132 Spread Syntax And Use Cases */

// console.log(..."Osama");
// console.log({ ..."Osama" });
// console.log([..."Osama"]);

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6, 7]
// console.log([...arr1, ...arr2])
// console.log([...arr1, arr2].flat())

// let copied = [...arr1];
// // let copied = ...arr1; // error
// console.log(copied)

// let friends = ["Osama", "Ali", "Sayed"];
// let New = ["Sameh", "Mahmoud"];
// let Now = [ "Gamal"]
// friends.push(Now)
// console.log(friends)
// friends.push(...New)
// console.log(friends)
// console.log(friends.flat())

// let number = [1, 2, 3, 4, 5];
// console.log(Math.max(number));//NaN;
// console.log(Math.max(...number))

// let obj1 = {
//     a: 1,
//     b: 2,
// }

// let obj2 = {
//     c: 3,
//     d: 4,
// }

// console.log({ obj1, ...obj2, e: 2 });

/* #133  Map And Set Challenge */

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log(Math.max(...n1) * [...n1, ...n2].length); // 210
// console.log(
//   n1.reduce(function (a, c) {
//     return a + c;
//   }, 0) * n2.length
// );

/* A4 */

// let theNumber = 100020003000;

// console.log(

//   Array.from(new Set([...theNumber.toString()]))
//       .sort()
//       .join("")
// ) // 123

/* A5 */

// let theName = "Elzero";
// console.log(Object.assign([], theName));
// console.log(Object.values(theName))
// console.log([...theName])
// console.log(theName.split(""))
// console.log([...new Set(theName)]);
// console.log(Array.from(theName))
// console.log(Array.of(...theName))

// let arr = []
// arr.push(...theName)

// console.log(arr)

/* A6 */

// let chars = [33,"Z", "Y", 22,"A", "D", "E", 10, 1];
// // console.log(...chars.splice(4,1))
// let counter = 0;
// for (let i = 0; i < chars.length; i++) {
//     if (!isNaN(chars[i])) {
//         counter++;
//         chars.unshift(...chars.splice(i, 1))
//     }
// }
// // console.log(counter);
// console.log(chars)
// // console.log(chars.findIndex((e) => typeof e == 'string'))
// console.log(chars.copyWithin(0, counter, counter * 2))

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];let countNumber = 0;

// let chars2 = [];

// chars.map(function (e) {
//   if (Number.isInteger(e)) {
//     chars2.unshift(e);
//     countNumber++;
//   }
//   else chars2.push(e);
// });

// console.log(chars2);
// console.log(chars2.copyWithin(0,countNumber,countNumber*2));

/* A7 */

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// console.log(numsOne.concat(numsTwo))
// console.log(numsOne.concat(...numsTwo))
// console.log(Array.from([numsOne,numsTwo]).flat())
// console.log([...Array.from(numsOne), ...Array.from(numsTwo)])
// console.log(Array.of([numsOne, numsTwo]).flat().flat());
// console.log(Array.of(...numsOne,...numsTwo))
// console.log([...numsOne, ...numsTwo])
// console.log([...new Set(numsOne), ...new Set(numsTwo)])

/* #135 Regular Expression – Modifiers */

// let myString  = "Elzero 1 eLzero 2 elZero 3 Elzero 4 elzeRo 5";
// let rexp = /Elzero/;
// console.log(myString.match(/e/));
// console.log(myString.match(/elzeros/i)); //NULL;
// rexp = /Elzero/gi;
// console.log(myString.match(rexp));

/* #136 Regular Expression – Ranges Part 1 */

// let tdl = "Com Net Org Info Code Io";
// let regEx = /(iO|inFo|orG)/ig;
// console.log(tdl.match(regEx))

// let nums = "12345678910";

// let regEx = /[0-9]/g;
// let regEx = /\d/g;
// console.log(nums.match(regEx))

// regEx = /[^0-2]/g
// console.log(nums.match(regEx))

// let special = '1!2@3#4$5%!678910';
// let regEx = /[^1-9 |!]/g // /[^(0-9|!)]/
// console.log(special.match(regEx))

// let practice = "OS1 OS1OS OS2 OS8OS OS77OS OS8";
// let regEx = /os[1-8]O/gi;
// console.log(practice.match(regEx))

/* #137 Regular Expression – Ranges Part 2 */

// let String = "AaBbCcDdEefgHIjK1234567890!@#$%^&*()";

// let regEx = /[a-z]/g
// console.log(String.match(regEx))

// let regEx = /[^a-z]/g;
// console.log(String.match(regEx))

// let regEx = /[A-Z]/g;
// console.log(String.match(regEx))

// let regEx = /[^A-Z]/g;
// console.log(String.match(regEx))

// let regEx = /[acE]/gi;
// console.log(String.match(regEx))

// let regEx = /[A-Ca-c]/g; // /[a-c]/gi
// console.log(String.match(regEx))

// let regEx = /[^A-Za-z]/g; // /[^a-z]/gi
// console.log(String.match(regEx))

// let regEx = /[^A-Za-z0-9]|[1-3]/g;
// console.log(String.match(regEx))

// let regEx = /[A-d]/g;
// console.log(Array.from(String.match(regEx)).sort())

/* #138 Regular Expression – Character Classes Part 1 */

// let email = 'O@@@g...com o@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.cOm';

// let valid = /./g;
// console.log(email.match(valid))

// let valid = /\w/g;
// console.log(email.match(valid))

// let valid = /\W/g;
// console.log(email.match(valid))

// let valid = /\w@\w\.(com|net)/gi;
// console.log(email.match(valid))

// let valid = /([a-z])@\w\.(com|net)/gi;
// console.log(email.match(valid))

// let valid = /\d/g;
// console.log(email.match(valid))

// let valid = /\D/g;
// console.log(email.match(valid))

// let valid = /\s/g;
// console.log(email.match(valid))

// let valid = /\S/g;
// console.log(email.match(valid))

// let dot = "That h.t is Hot";
// console.log(dot.match(/h.t/gi))
// console.log(dot.match(/h\.t/gi))

/* #139 Regular Expression – Character Classes Part 2 */

// let Name = 'Sayed 1spam 2Spam 3spAm Spam4 spam5 Aspamo'

// let regEx = /\bspam\d/gi;
// console.log(Name.match(regEx))

// let regEx = /\dspam\b/gi;
// console.log(Name.match(regEx))

// let regEx = /(\dspam\b|\bspam\d)/gi;
// console.log(Name.match(regEx))

// let regEx = /(spam\b|\bspam)/gi;
// console.log(regEx.test(Name));
// console.log(/(spam\b|\bspam)/gi.test("TAHA"));
// console.log(/(\dspam\b|\bspam\d)/gi.test("123spam"));

/* #140 Regular Expression – Quantifiers Part 1 */

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails

// let regEx = /\w+@\w+\.\w+/ig;
// console.log(mails.match(regEx));

// let nums = "0110 010 100 1000 150 05120 0560 350 00"; // 0 Numbers Or No 0

// let regEx = /0\d*0/ig;
// console.log(nums.match(regEx));
// console.log(nums.match(/10*/gi));

// let urls = "https://google.com http://www.website.net web.com"; // http + https

// let regEx = /https?/ig;
// console.log(urls.match(regEx));

// let regEx = /https?:\/\/(www.)?\w+.\w+/ig;
// console.log(urls.match(regEx));

// let regEx = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// //let regEx = /(http:\/\/www.)?\w+.\w+/ig;
// console.log(urls.match(regEx));

/* #141 Regular Expression – Quantifiers Part 2 */

// let serials = "s1s s70s s100s s3000s s50000s s700000s s9000000s"
// console.log(serials.match(/s\d{4}s/gi));
// console.log(serials.match(/s\d{1,5}s/gi));
// console.log(serials.match(/s\d{5,}s/gi));

/* #142 Regular Expression – Quantifiers Part 3 */

// $  => End With Something
// ^  => Start With Something
// ?= => Followed By Something
// ?! => Not Followed By Something

// let str = " We love Programming ";
// console.log(/ing\s$/i.test(str));
// console.log(/^\d/i.test(str));
// console.log(/^\s/i.test(str));

// let names = "1OsamaZ 2AhmedZ 3Mohammed 4Moustafa 5GamalZ";

// let regEx = /\d\w{5,}(?=z)/ig;
// console.log(names.match(regEx))

// let regEx = /\d\w{8}(?!z)/ig;
// console.log(names.match(regEx))

/* #143 Regular Expression - Replace With Pattern */

// let Str = "We Love @ Because @ Is Amazing";

// console.log(Str.replace("@", "JavaScript"));
// console.log(Str.replaceAll("@", "JavaScript"));

// let regEx = /@/gi;
// console.log(Str.replace(regEx, "js"));
// console.log(
//   Str.replace(/[wba]|@/gi, function (e) {
//     return "T".toLowerCase();
//   })
// );

// console.log(Str.replaceAll(/@/g,"j"));

/* #144 Regular Expression – Form Validation */

// let form = document.getElementById("register");
// let inp = document.getElementById("phone");

// let pattern = /\(?\d{4}\)?\s\d{3}-\d{4}/; //(1234) 567-8910

// form.onsubmit = function (e) {

//   if (pattern.test(inp.value) == false) {
//     console.log("False");
//     e.preventDefault();
//     return false;
//   }
// };

/* #146 Regular Expression Challenge */

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/(www.)?)?\w+\.\w+.*/gi

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));

/* A1 */

// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let regEx = /(\w+:?){1,}/gi;
// // let regEx = /(\w+|:)+/gi;
// console.log(ip.match(regEx))

/* A5 */

// let date1 = "25/10/1982";
// let date2 = "25-10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// // let re = /(\d+(.?)+)+/gi;
// let re = /(\d{2}(\/|\s-\s|\s|-)){2}(\d{4}|\d{2})/g;

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"

/* #148 Constructor Function Introduction*/

// function User(id, user, salary) {
//   this.i = id;
//   this.u = user;
//   this.s = salary + 175;
// }

// let user1 = new User(101, "Ali", 5000);
// let user2 = new User(102, "Elz", 6000);
// let user3 = new User(103, "Tah", 7000);

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user1 instanceof User);
// console.log(user1.constructor === User);

/* #149 Constructor Function New Syntax */

// class User {
//   constructor(id, user, salary) {
//     this.i = id;
//     this.u = user;
//     this.s = salary + 175;
//   }
// }

// let user1 = new User(101, "Ali", 5000);
// let user2 = new User(102, "Elz", 6000);
// let user3 = new User(103, "Tah", 7000);
// console.log(user1.u);
// console.log(user1 instanceof User);
// console.log(user1.constructor === User);

/* #150 Deal With Properties And Methods  */

// class User {
//   constructor(id, user, salary) {
//     this.i = id;
//     this.u = user || "Unkonwn";
//     this.s = salary < 6000 ? salary + 1000 : salary;
//     this.message = () => {
//       return `Hello ${this.u} Your Salary Is ${this.s}`;
//     };
//   }
//   write() {
//     console.log(`Hiya Heya`);
//   }
// }

// let userOne = new User(1, "", 5999);
// console.log(userOne);
// console.log(userOne.message());
// console.log(userOne.message)//Native
// userOne.write();

/* #151 Update Properties & Built In Constructors */

// class User {
//   constructor(id, user, salary) {
//     this.i = id;
//     this.u = user;
//     this.s = salary + 175;
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
// }
// let userOne = new User(1, "", 5999);

// console.log(userOne);
// userOne.updateName("Taha");
// console.log(userOne);

// let s1 = 100;
// let s2 = new Number(100);
// // let a = "elzero";

// console.log(typeof s1);
// console.log(typeof s2);

// console.log(s1 instanceof Number);
// console.log(s2 instanceof Number);

// console.log(s1.constructor === Number);
// console.log(s2.constructor === Number);

/* #152 Class Static Properties And Methods */

// class User {
//   static count = 0;

//   constructor(user) {
//     this.i = ++User.count;
//     this.u = user;
//   }

//   static countObject() {
//     console.log(`${this.count} Members`);
//   }
// }

// let u1 = new User("Osama");
// console.log(u1);

// let u2 = new User("Ahmed");
// console.log(u2);

// console.log(u1.count);
// console.log(User.count);
// User.countObject();
// // u1.countObject(); // TypeError : u1.countObject is not function

/* #153 Class Inheritance */

// class User {
//   constructor(id, user) {
//     console.log("Super Class");
//     this.i = id;
//     this.u = user;
//   }
//   write() {
//     return ` Hello ${this.u}  `;
//   }
// }

// class Sub extends User {
//   constructor(id, user, permission) {
//     console.log("Sub Class");
//     super(id, user);
//     this.permission = permission;
//   }
// }
// let u = new User(1, "Ali");

// console.log(u);
// console.log(u.write());

// let u1 = new Sub(101, "Osama", 1);

// console.log(u1);
// console.log(u1.write());

/* #154 Class Encapsulation */

// class User {
//   #s;
//   constructor(id, user, salary) {
//     this.i = id;
//     this.u = user;
//     this.#s = salary;
//   }
//   getSalary() {
//     return parseInt(this.#s);
//   }
// }

// class Sub extends User {
//   constructor(i, u, s) {
//     super(i, u, s);
//   }
//   method() {
//     return super.getSalary(); //this.getSalary();
//   }
// }

// let user = new User(1, "Osama", "5000 Genh");
// let sub = new Sub(2, "Taha", "3000 Genh");

// console.log(user, sub);
// console.log(user.getSalary());
// console.log(sub.method());

/* #155 Prototype Introduction */

// class User {
//   constructor(id, user) {
//     this.i = id;
//     this.u = user;
//   }
//   getSalary() {
//     return "";
//   }
// }

// class Sub extends User {
//   constructor(id, user, permission) {
//     console.log("Sub Class");
//     super(id, user);
//     this.permission = permission;
//   }
// }

// console.log(User.prototype);
// console.log(Sub.prototype);
// console.log(Object.prototype);

/* #156 Add To Prototype Chain */

// class User {
//   constructor(id, user) {
//     this.i = id;
//     this.u = user;
//   }

//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(1, "Elzero");

// console.log(userOne.sayHello());

// User.prototype.sayHello = function () {
//   return `HELLO ${this.u}`;
// };

// console.log(userOne.sayHello());

// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };

// console.log(userOne.sayWelcome());

// Object.prototype.love = "Developer";
// console.log(userOne.love);

// console.log(User.prototype);

// String.prototype.m = function () {
//   return `${this}`;
// };

// // let str = "Hello";
// let str = new String("Hello");
// console.log(str.m());

/* #157 Object Meta Data And Descriptor Part 1 */

// const obj = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(obj, "c", {
//   writable: true,
//   enumerable: false,
//   configurable: false,
//   value: 3,
// });

// console.log(obj);

// Object.defineProperty(obj, "c", {
//   // writable: false,
//   // enumerable: false,
//   // configurable: false,
//   value: 30,
// });

// console.log(obj);
// obj.c = 100;
// console.log(obj);

// console.log(delete obj.c);
// console.log(obj);

// for (let p in obj) {
//   console.log(p, obj[p]);
// }
// console.log(Object.values(obj));
// console.log(Object.keys(obj));

// console.log(Object.getOwnPropertyDescriptor(obj, "c"));

// console.log(obj.propertyIsEnumerable("a"));

/* #158 Object Meta Data And Descriptor Part 2 */

// const obj = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperties(obj, {
//   a: {
//     writable: false,
//     value: 3,
//   },
//   c: {
//     writable: true,
//     value: 3,
//   },
//   d: {
//     writable: true,
//     value: 4,
//   },
// });

// obj.a = 55;

// console.log(Object.getOwnPropertyDescriptor(obj, "c"));
// console.log(Object.getOwnPropertyDescriptors(obj));

/* A3 */

// class User {
//   #c;
//   constructor(username, card) {
//     this.u = username;
//     this.#c = card;
//   }

//   #fullData() {
//     this.#c = this.#c.toString().match(/\d{4}/g).join("-");

//     // this.#c = this.#c
//     // .toString()
//     // .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2-$3-$4");
//     // $1 stands for group number 1 and $2 for group number 2 and so on...

//     return `Hello ${this.u}, Your Credit Card Number is ${this.#c}`;
//   }

//   get showData() {
//     return this.#fullData();
//   }
// }

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "8371573962052855");
// let userThree = new User("Ghareeb", 6432143805876582);
// let userFour = new User("Philopater", 4805110405236578);

// console.log(userOne.showData);
// // Output => Hello Osama, Your Credit Card Number is 1234-5678-1234-5678

// console.log(userTwo.showData);
// // Output => Hello Ahmed, Your Credit Card Number is 8371-5739-6205-2855

// console.log(userThree.showData);
// // Output => Hello Ghareeb, Your Credit Card Number is 6432-1438-0587-6582

// console.log(userFour.showData);
// // Output => Hello Philopater, Your Credit Card Number is 4805-1145-8523-6578

// console.log(userOne.c); // TIP: Prevent Accessing To Card Property
// // Output => undefined

/* #159 Date And Time Introduction */

// console.log(new Date())
// console.log(new Date(2003,8,3,10,9,20,0))
// console.log(new Date(2003,12,32,10,9,20,0))// Add to year

// console.log(Date.now() / 1000 / 60 / 60 / 24 / 365);

/* #160 Get Date And Time */

// let date = new Date();

// let myBirthDay = new Date(2003,9,17,4,17,57);

// console.log((date - myBirthDay) / 1000 / 60 / 60 / 24 / 365);
// // 20.61671131269026
// console.log(date);
// console.log(date.getTime())
// console.log(date.getDate())
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

/* #161 Set Date And Time */

// let date = new Date(2022, 0, 10,0,0,0,0);
// console.log(date);
// console.log("#".repeat(10));

// date.setTime(3000);
// console.log(date);

// date.setDate(0); // back
// console.log(date);
// date.setDate(-61); // back
// console.log(date);
// date.setDate(31); // front
// console.log(date);

// date.setFullYear(2000, 11, 31, 3, 3, 3);
// console.log(date);
// date.setFullYear(2000, -1, 31);
// console.log(date);

// date.setMonth(15, 1, 9, 9, 9);
// console.log(date);

// date.setHours(1, 8, 7, 6000);
// console.log(date);

// date.setMinutes(1, 8, 7000);
// console.log(date);

// date.setSeconds(1, 8000);
// console.log(date);

/* #162 Formatting Date And Time */

// let date = new Date(1000);
// console.log(date)

// console.log(Date.parse("sept 17 2003"));

// let date2 = new Date(1063746000000);
// console.log(date2)

// let date3 = new Date(" 10/19-1999")
// // let date3 = new Date("22-23-febu-2000")
// console.log(date3)

// let date4 = new Date(" 10 11 2003 ") // IOS
// // let date4 = new Date("05")
// console.log(date4)

// let date5 = new Date(2010,5,5,5,5,4,1000);
// console.log(date5)

// let date6 = new Date("2010-10-09T06:10:09z");
// console.log(date6)

/* #163 Tracking Operations Time */

// let start = new Date();

// for (let index = 0; index < 1000; index++) {
//   let div = document.createElement("div");
//   div.append(document.createTextNode(index));
//   document.body.append(div);
// }

// let end = new Date();

// console.log(end - start);

/* #164 Generator Function Introduction */

// function* generate() {
//   yield 1;
//   console.log("Hello After Yield 1");
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }

// let gen = generate();

// console.log(gen);
// console.log(typeof gen);

// for (const iterator of gen) {
//   console.log(iterator);
// }

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// for (const iterator of gen) {
//   console.log(iterator);
// }

/* #165 Delegate Generator Function */

// function* gen1() {
//   yield 1;
//   yield 2;
//   return "Stop";
//   yield 3;
// }

// function* gen2() {
//   yield "a";
//   yield "b";
//   yield "c";
// }

// function* genAll() {
//   yield* gen1();
//   yield* gen2();
//   yield* [1, 2, 3];
// }

// let gen = genAll();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// // console.log(gen.return("Stop"));
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

/* #166 Generate Infinite Numbers */

// function* generate() {
//   yield 1;
//   yield 2;
//   yield 3;
//   return "Stop";
//   yield 4;
//   yield 5;
// }

// let gen = generate();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

//
// let i = 0; // Global

// function* generate() {
//   let i = 0; // Local
//   while (true) {
//     yield ++i;
//   }
// }

// let gen = generate();
// console.log(generate().next());
// console.log(generate().next());
// console.log(generate().next());
// console.log(generate().next());
// console.log(generate().next());
// console.log("#".repeat(39));
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

/* #167 Modules Import And Export */

// export let num = 10;

// let arr = [1, 2, 3, 4, 5];

// function sayHello(s, id) {
//   return `hello ${s} Id : ${id}`;
// }

// export { arr, sayHello as f };

// /* #168  */

// // export default function sayWelcome(s, id) {
// //   return `hello ${s} Id : ${id}`;
// // }

// export default function () {
//   return `Welcome`;
// }

/* A2 */

// let date = new Date("1980T00:00:01");
// console.log(date);

// let myDate = new Date(0);
// myDate.setFullYear("1980");
// myDate.setHours(0);
// myDate.setSeconds(1);
// console.log(myDate);

/* A7 */

// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }

// function* genAll() {
//   yield* new Set(genNumbers());
//   yield* genLetters();
// }

// let generator = genAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

/* #172 Parse And Stringify */

// let jsonFromServer = '{"name":"Taha","age":20}';

// console.log(typeof jsonFromServer)
// console.log(JSON.parse(jsonFromServer))

// let jsObject = JSON.parse(jsonFromServer, function (key, value) {
//   if (key == "name") {
//     return value.toUpperCase();
//   } else {
//     return value;
//   }
// });
// console.log(jsObject);

// jsObject.name = "Elzero";
// jsObject["age"] = 41;

// console.log(jsObject);

// let jsonTOServer = JSON.stringify(
//   jsObject,
//   function replacer(key, value) {
//     if (key == "name") {
//       return value.toLowerCase();
//     } else {
//       return value;
//     }
//   },
//   3
// );

// console.log(jsonTOServer);

// console.log(JSON.parse('{"1":1,"2":2,"3":{"4":4,"5":{"6":6}}}'));
// console.log(JSON.stringify([null, Infinity, undefined]));

/* #173 Asynchronous vs Synchronous Programming */

// To Understand Ajax, Fetch, Promises .

// console.log(1);
// console.log(2);
// // alert("operation"); // Synchronous
// console.log(3);

// setTimeout(() => console.log("Operation"), 0); // Asynchronous
// console.log(1);
// console.log(2);
// console.log(3);

/* #174 Call Stack And Web API */

// setTimeout(() => {
//   console.log("last");
// });

// function one() {
//   console.log("One");
// }

// function two() {
//   one();
//   console.log("Two");
// }

// function three() {
//   setTimeout(() => {
//     two();
//   });

//   console.log("Three");
// }

// three();

/* #175 Event Loop And Callback Queue */

// console.log("One");

// setTimeout(() => {
//   console.log("Three");
// });

// setTimeout(() => {
//   console.log("Four");
// }, 1);

// console.log("Two");

// setTimeout(() => {
//   console.log(Var);
// });

// let Var = 100;
// Var += 100;

/* #176 What Is AJAX And Network Informations */

// AJAX
// - Asynchronous JavaScript And XML
// - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
// - It Use "XMLHttpRequest" Object To Interact With The Server
// - You Can Fetch Data Or Send Data Without Page Refresh

// Test new XMLHttpRequest();
// Request And Response
// Status Code

// let req = new XMLHttpRequest();
// console.log(req);

/* #177 Request And Response From Real API */

// Ajax
// - Ready State => Status Of The Request
//  [0] Request Not Initialized
//  [1] Server Connection Established
//  [2] Request Received
//  [3] Processing Request
//  [4] Request Is Finished And Response Is Ready

// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/tahaTAHA579/repos");
// req.send();
// console.log(req);
// req.onreadystatechange = function () {
//   console.log(this.readyState);
//   console.log(this.status);
//   if (req.readyState == 4 && req.status == 200) {
//     console.log(JSON.parse(this.responseText));
//   }
// };

/* #178 Loop On Data */

// you're trying to dynamically load files from your local machine.
// This is not allowed by the Same-Origin Polciy (CORS)
// that Chrome is telling you about. Chrome is particularly strict on this rule.

// let req = new XMLHttpRequest();

// req.open("GET", "https://api.github.com/users/tahaTAHA579/repos");
// req.send();
// // console.log(req)

// req.onreadystatechange = function () {
//   if (req.readyState == 4 && req.status == 200) {
//     let obj = JSON.parse(this.responseText);

//     console.log(obj);

//     for (let ele of obj) {
//       let div = document.createElement("div");
//       div.style.cssText =
//         "padding:10px ; margin:10px ; border-bottom:1px solid #ccc";
//       let str = document.createTextNode(ele.full_name);
//       div.append(str);
//       document.body.append(div);
//     }
//   }
// };

// req.onloadend = function () {
//   console.log("Data Loaded");
// };

/* A */

// let req = new XMLHttpRequest();
// req.open("GET", "articles.json");
// req.send();
// req.onreadystatechange = function () {
//   if (this.readyState == 4 && req.status == 200) {
//     // console.log(this.responseText)
//     let main = JSON.parse(req.responseText);
//     // console.log(main)
//     let divMain = document.createElement("div");
//     divMain.id = "data";
//     for (let i = 0; i < main.length; i++) {
//       let div = document.createElement("div");
//       div.style.cssText = "padding:10px ; margin:10px ; border-bottom:1px solid #ccc"

//       let h2 = document.createElement("h2")
//       h2.innerHTML = main[i].title;

//       let p1 = document.createElement("p")
//       p1.innerHTML = main[i].answer_1;

//       let p2 = document.createElement("p")
//       p2.innerHTML = main[i].answer_2;

//       let p3 = document.createElement("p")
//       main[i].category = "All";
//       p3.innerHTML = main[i].right_answer;

//       div.append(h2, p1, p2, p3)
//       divMain.append(div)
//       document.body.append(divMain)

//     }
//     // console.log(main)
//     let update = JSON.stringify(main, null, 5)
//     // console.log(update)
//   }
// }

/* #179 Callback Hell Or Pyramid Of Doom */

// function back() {
//   console.log("I Am A Call Back ");
// }
// setTimeout(back, 3000);

// // Callback : A Function That Is Passed Into Another One As An Argument To Be Executed Later

// setTimeout(() => {
//   console.log("Download Photo From URL");
//   setTimeout(() => {
//     console.log("Resize Photo");
//     setTimeout(() => {
//       console.log("Add Logo To The Photo");
//       setTimeout(() => {
//         console.log("Show The Photo In Website");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

/* #180 Promise Intro And Syntax */

// - Promise Is Something That Will Happen In The Future
// - Promise Avoid Callback Hell

// let myPromise = new Promise((resolveFun, rejectFun) => {
//   let connect = true;
//   if (connect) {
//     resolveFun("Established");
//     console.log("G");
//   } else {
//     rejectFun(Error("Faild"));
//     console.log("B");
//   }
// }); // with .then => Asyn

// console.log(myPromise);

// myPromise.then(
//   (resolveValue) => {
//     console.log(` Good ${resolveValue}`);
//   },
//   (rejectValue) => {
//     console.log(` Bad ${rejectValue}`);
//   }
// );

// myPromise.then(
//   (resolveValue) => {
//     console.log(` Good ${resolveValue}`);
//   },
//   (rejectValue) => {
//     console.log(` Bad ${rejectValue}`);
//   }
// ); // Asyn

// console.log(myPromise);

// function res(resolveValue) {
//   console.log(`Good ${resolveValue}`);
// }

// let rej = (rejectValue) => {
//   console.log(`Bad ${rejectValue}`);
// };

// console.log(myPromise);

// myPromise.then(res, rej);

// console.log(myPromise);

/* #181 Promise – Then, Catch And Finally */

// const myPromise = new Promise((resolveFun, rejectFun) => {
//   let employees = ["A", "C", "D"];
//   if (employees.length === 4) {
//     resolveFun(employees);
//   } else {
//     rejectFun(Error("Employees Are Not 4"));
//   }
// });

// myPromise
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
//   })

//   .then((resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue;
//   })

//   .then((resolveValue) => {
//     console.log(resolveValue); // A
//   })

//   .finally(() => console.log("finally2"))
//   .catch((rejValue) => console.log(rejValue))

//   .finally(console.log("finally1"))
//   .finally(() => console.log("finally2"))
// ;

/* #182 Promise And XHR */

// let getData = (link) => {
//   return new Promise((resolveFun, rejectFun) => {
//     let myRequest = new XMLHttpRequest();

//     myRequest.onload = function () {
//       console.log(this.readyState);
//       console.log(this.status);

//       if (this.readyState == 4 && this.status == 200) {
//         resolveFun(JSON.parse(this.responseText));
//       } else {
//         rejectFun(Error("Not Found"));
//       }
//     };

//     myRequest.open("GET", link);
//     myRequest.send();
//   });
// };

// console.log("E");

// getData("https://api.github.com/users/TahaTAHA579/repos")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/* #183 Fetch API */

// fetch("https://api.github.com/users/TahaTaha579/repos")
//   .then((res) => {
//     console.log(res);
//     let myData = res.json();
//     console.log(myData);
//     return myData;
//   })
//   .then((a) => {
//     console.log(a);
//     console.log(a[0]);
//     return a;
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

/* #184 Promise – All, All Settled, Race */

// let p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("First Resolve");
//     // rej("First Reject");
//   }, 0);
// });

// let p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Second Resolve");
//     // rej("Second Reject");
//   }, 0);
// });

// let p3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     // res("Third Resolve");
//     rej("Third Reject");
//   }, 0);
// });

// Promise.all([p1, p2, p3]).then(
//   (resValues) => {
//     console.log(resValues);
//   },
//   (rejValues) => {
//     console.log(rejValues);
//   }
// );

// Promise.allSettled([p1, p2, p3]).then(
//   (resValues) => {
//     console.log(resValues);
//   },
//   (rejValues) => {
//     console.log(rejValues);
//   }
// );

// Promise.race([p1, p2, p3]).then(
//   (resValues) => {
//     console.log(resValues);
//   },
//   (rejValues) => {
//     console.log(rejValues);
//   }
// );

/* #185 Async And Training */

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Found");
//     } else {
//       rej(Error("Not Found"));
//     }
//   });
// }
// getData().then(
//   (resValue) => {
//     console.log(resValue);
//   },
//   (rejValues) => {
//     console.log(rejValues);
//   }
// );

// function getData() {
//   let users = [""];
//   if (users.length > 0) {
//     return Promise.resolve("Found");
//   } else {
//     return Promise.reject(Error("Not Found"));
//   }
// }
// getData().then(
//   (resValue) => {
//     console.log(resValue);
//   },
//   (rejValue) => {
//     console.log(rejValue);
//   }
// );

// async function getData() {
//   let users = [""];
//   if (users.length > 0) {
//     return "Found";
//   } else {
//     throw new Error("Not Found");
//   }
// }

// getData().then(
//   (resValue) => {
//     console.log(resValue);
//   },
//   (rejValue) => {
//     console.log(rejValue);
//   }
// );

// setTimeout(() => {
//   console.log(
//     getData().catch((err) => {
//       console.log(err);
//     })
//   );
// }, 100);

// let p = new Promise((res) => {
//   res(1);
// });

// async function m1() {
//   return p;
// }

// function m2() {
//   return Promise.resolve(p);
// }

// console.log(m1()==p);
// console.log(m2()==p);

// p.then((res) => console.log(res));
// m1().then((res) => console.log(res));
// m2().then((res) => console.log(res));

/* #186 Await And Training */

// - Await Works Only Inside Asnyc Functions .
// - Await Make JavaScript Wait For The Promise Result .
// - Await Is More Elegant Syntax Of Getting Promise Result .

// const myPromise = new Promise((resolveFun, rejectFun) => {
//   setTimeout(() => {
//     resolveFun("I Am Good Promise");
//     rejectFun(Error("I Am Bad Promise"));
//   });
// });

// async function getData() {
//   console.log("getData()");

//   await myPromise.then(
//     (resolveValue) => {
//       console.log("myPromise : " + resolveValue);
//     },
//     (rejectValue) => {
//       console.log("myPromise : " + rejectValue);
//     }
//   );

//   console.log(await myPromise); // Only Resolve

//   console.log("After await");

//   await myPromise.catch((err) => console.log("catch : " + err));
//   //   myPromise.catch((err) => console.log("catch : " + err));

//   console.log("After await2");

//   try {
//     console.log("Try ");
//   } catch (err) {
//     console.log("Try :" + err);
//   }

//   console.log("After await3");
// }

// getData();

/* #187 Try, Catch, Finally With Fetch */

// async function getFetch() {
//   console.log("Before Fetch");
//   try {
//     let data = await fetch("https://api.github.com/users/TahaTaha579/repos");
//     console.log(await data.json());
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("After Fetch");
//   }
// }

// getFetch();

/* A1 */

// function getData(link) {
//   return new Promise((res, rej) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.open("GET", link);
//     myRequest.send();
//     myRequest.onload = () => {
//       if (myRequest.readyState == 4 && myRequest.status == 200) {
//         res(JSON.parse(myRequest.responseText))
//       } else {
//         rej(Error("Crach"))
//       }
//     }
//   })
// }
// getData("articles.json").then(
//   (resValue) => {
//     (resValue.length) = 5;
//     return resValue
//   }
// ).then((resValue) => {
//     console.log(resValue)
//     for (let i = 0; i < resValue.length; i++) {
//       let div = document.createElement("div");
//       div.style.cssText="padding:10px;margin:10px;border-bottom:1px solid #ccc"

//       let h3 = document.createElement("h3");
//       h3.append(resValue[i].title)

//       let p = document.createElement("p");
//       p.append(resValue[i].description)

//       div.append(h3, p);
//       document.body.append(div)
//     }
//   })

/* A2 */

// fetch("Test/articles.json")
//   .then((resValue) => {
//     return resValue.json();
//   })
//   .then((values) => {
//     values.length = 5;
//     for (let i = 0; i < values.length; i++) {
//       let div = document.createElement("div");
//       div.style.cssText =
//         "padding:15px;margin:15px;border-bottom:1px solid #ccc";

//       let h3 = document.createElement("h3");
//       h3.append(values[i].title);

//       let p = document.createElement("p");
//       p.append(values[i].description);

//       div.append(h3, p);
//       document.body.append(div);
//     }
//   });

// async function getData(jsonLink) {
//   try {
//     const response = await fetch(jsonLink);
//     console.log(response)
//     const data = await (response.json());
//     console.log(data)
//     data.length = 5;
//     for (let i = 0; i < data.length; i++) {
//       let div = document.createElement("div");
//       div.style.cssText = "padding:10px;margin:10px;border-bottom:1px solid #ccc"

//       let h3 = document.createElement("h3");
//       h3.innerHTML = data[i].title;
//       div.appendChild(h3);

//       let p = document.createElement("p");
//       p.innerHTML = data[i].description;
//       div.appendChild(p);

//       document.body.appendChild(div);
//     }
//   } catch (error) {
//     document.body.appendChild(document.createTextNode(error));
//   }
// }
// getData("articles.json");

/* C */

// import { getToken, removeToken } from "../Js/token.js";

// import {
//   CreateModal,
//   ShowMessage,
//   HandleDate,
//   HandleDate2,
//   HandleTotal,
//   ToggleClassLiked,
// } from "../Js/helper.js";

// CreateModal();

// // console.log(HandleTotal(111));

// let token = getToken();

// // console.log(token);

// let editInfoBtn = document.querySelector(".navbar .edit-info");
// let imageElement, removeImageBtn, imageInput, uploadButton;

// let changePasswordItem = document.querySelector(".navbar .change-password");
// let currentPasswordInput, newPasswordInput;

// let profileBtn = document.querySelector(".navbar .image");
// let profileImage = document.querySelector(".navbar .image img");

// let homeImage = document.querySelector(".home-header img");
// var createPostBtn = document.querySelector(".home-header button ");

// var recentBtn = document.querySelector(".posts .post-header li:first-child a");
// var popularBtn = document.querySelector(".posts .post-header li:last-child a");

// var postsContainer = document.querySelector(".posts .content");

// var LoadingSection = document.querySelector(".loading");

// function ShowLoadingSection() {
//   LoadingSection.classList.remove("d-none");
// }

// function RemoveLoadingSection() {
//   LoadingSection.classList.add("d-none");
// }

// let recentBtnActive = true;
// let defaultImage = "../imgs/unknown.png";

// class Response {
//   constructor() {
//     this.valid = false;
//     this.obj = null;
//     this.error = null;
//   }
// }

// class Post {
//   static posts = [];

//   static async FetchPosts(filterRequest) {
//     let response = new Response();

//     try {
//       let data = await fetch("https://localhost:7203/api/Posts/GetAllPosts", {
//         method: "post",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(filterRequest),
//       });

//       if (data.ok) {
//         response.obj = await data.json();

//         response.valid = true;
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed To Load Posts";
//     } finally {
//       return response;
//     }
//   }

//   static RenderPosts() {
//     postsContainer.innerHTML = "";

//     Post.posts.forEach((post) => {
//       Post.CreatePost(post);
//     });

//     // console.log(this.posts);
//   }

//   static CreatePost(post) {
//     let originalPost = post.originalPost;

//     if (originalPost == null)
//       postsContainer.innerHTML += `
//     <div class="post bg-white mt-4 p-3 rounded-4" id=${post.id}>

//       <div class="user d-flex gap-3">

//         <div class="image">

//           <img
//             class="w-100 h-100 rounded-circle"
//             src="${post.imagePath != null ? post.imagePath : defaultImage}"
//             decoding="async" alt="../imgs/unknown.png"
//             onclick="LoadUserInfo(${post.userId})"
//             role='button'
//           />

//         </div>

//         <div class="info">

//           <h4 class="m-0" onclick="LoadUserInfo(${post.userId})"
//           role='button'>${post.userName}</h4>

//           <small class="text-muted">${HandleDate(post.createdAt)}</small>

//         </div>

//         <div class="dropdown ms-auto">

//           <button
//             class="btn border-0 p-0"
//             data-bs-toggle="dropdown" data-bs-offset="-1,-3"
//             onclick = "ClickOptionsBtn(event,${post.userId})"
//           >
//             <i class="fa-solid fa-ellipsis"></i>
//           </button>

//           <ul class="dropdown-menu">
//             <li class="dropdown-item" role='button'>Save</li>

//             <li class="dropdown-item" role='button'
//                 onclick="ClickEditPost(${post.id})">
//               Edit
//             </li>

//             <li class="dropdown-item" role='button'>Delete</li>

//           </ul>

//         </div>

//       </div>

//       <p class="text mt-3 px-2" style="white-space: pre-wrap;">${post.text}</p>

//       <div class="action-buttons px-2 d-flex justify-content-between gap-3"  >

//         <div class="" >
//           <span class="shares me-1">${HandleTotal(post.countShares)}</span>
//           <span class="share"
//             onclick="ClickShareBtn(${post.id})" role="button">
//             <i class="fa-solid fa-share"></i>
//           </span>
//         </div>

//         <div class="text-center" role="button"
//           onclick="ClickCommentsBtn(${post.id})">

//           <span class="comments me-1">
//             ${HandleTotal(post.countComments)}
//           </span>

//           <span class="comment">
//             <i class="fa-regular fa-comment-dots"></i>
//           </span>

//         </div>

//         <div class="text-end">

//           <span class="likes me-1"
//           onclick="ClickLikesBtn(${post.id})" role="button">
//             ${HandleTotal(post.countLikes)}
//           </span>

//           <span class="like ${ToggleClassLiked(post.isLiked)}"
//             onclick="window.ClickLikeBtn(event,${post.id})" role="button">
//             <i class="fa-regular fa-thumbs-up"></i>
//           </span>

//         </div>

//       </div>
//   </div>
//     `;
//     else
//       postsContainer.innerHTML += `
//     <div class="post bg-white mt-4 p-3 rounded-4" id="${post.id}">
//       <div class="user d-flex gap-3">
//         <div class="image">
//           <img
//           class="w-100 h-100 rounded-circle"
//           src="${post.imagePath != null ? post.imagePath : defaultImage}"
//           decoding="async" alt="../imgs/unknown.png"
//           onclick="LoadUserInfo(${post.userId})"
//           role='button'
//         />
//         </div>

//         <div class="info">
//           <h4 class="m-0" onclick="LoadUserInfo(${post.userId})"
//               role="button">${post.userName}</h4>

//           <small class="text-muted"
//             >${HandleDate(post.createdAt)}</small
//           >
//         </div>

//         <div class="dropdown ms-auto ">

//           <button
//               class="btn border-0 p-0"
//               data-bs-toggle="dropdown" data-bs-offset="-1,-3"
//               onclick = "ClickOptionsBtn(event,${post.userId})"
//           >
//             <i class="fa-solid fa-ellipsis"></i>
//           </button>

//           <ul class="dropdown-menu ">
//             <li class="dropdown-item" role='button'>Save</li>

//             <li class="dropdown-item" role='button'
//                 onclick="ClickEditPost(${post.id})">
//               Edit
//             </li>

//             <li class="dropdown-item" role='button'>Delete</li>
//           </ul>

//         </div>

//       </div>

//       <p class="text px-2 ${post.text != null ? "mt-3" : ""}"
//       style="white-space: pre-wrap;word-break: break-word;">${
//         post.text != null ? post.text : ""
//       }</p>

//       <div class="shared-post p-3 mb-3 border border-1 rounded-5">

//         <div class="user d-flex gap-3">
//           <div class="image">
//             <img
//               class="w-100 h-100 rounded-circle"
//               src="${
//                 originalPost.imagePath != null
//                   ? originalPost.imagePath
//                   : defaultImage
//               }"
//               decoding="async" alt="../imgs/unknown.png"
//               onclick="LoadUserInfo(${originalPost.userId})"
//               role="button"
//             />
//           </div>

//           <div class="info flex-grow-1">
//             <h5 class="m-0" onclick="LoadUserInfo(${originalPost.userId})"
//               role="button">${originalPost.userName}</h5>

//             <small class="text-muted fs-7"
//               >${HandleDate(originalPost.createdAt)}</small
//             >
//           </div>
//         </div>

//         <p class="text mt-3 mb-0 px-2"
//         style="white-space: pre-wrap;">${originalPost.text}</p>

//       </div>

//     <div class="action-buttons px-2 d-flex justify-content-between gap-3">

//       <div>
//         <span class="shares me-1">
//         ${HandleTotal(post.countShares)}
//         </span>

//         <span class="share"
//             onclick="ClickShareBtn(${originalPost.id})"
//             role="button">

//           <i class="fa-solid fa-share"></i>

//         </span>

//       </div>

//       <div class="text-center" role="button"
//         onclick="ClickCommentsBtn(${post.id})">
//           <span class="comments me-1">
//             ${HandleTotal(post.countComments)}
//           </span>

//           <span class="comment">
//             <i class="fa-regular fa-comment-dots"></i>
//           </span>
//       </div>

//       <div class="text-end">
//         <span class="likes me-1"
//         onclick="ClickLikesBtn(${post.id})" role="button">
//           ${HandleTotal(post.countLikes)}
//         </span>

//         <span
//           class="like ${ToggleClassLiked(post.isLiked)}"
//           onclick="window.ClickLikeBtn(event,${post.id})" role="button">

//           <i class="fa-regular fa-thumbs-up"></i>
//         </span>
//       </div>

//     </div>
//   </div>
//     `;
//   }

//   static async AddPost(text, originalPostId) {
//     // text = encodeURIComponent(text);

//     let postRequest = {
//       text: text,
//       originalPostId: originalPostId,
//     };

//     let response = new Response();

//     try {
//       let data = await fetch(`https://localhost:7203/api/Posts/Create`, {
//         method: "post",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(postRequest),
//       });

//       if (data.ok) {
//         response.obj = await data.json();
//         response.valid = true;
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed Add Post";
//     } finally {
//       return response;
//     }
//   }

//   static async getPost(postId) {
//     let response = new Response();

//     try {
//       let data = await fetch(
//         `https://localhost:7203/api/Posts/GetPost?id=${postId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (data.ok) {
//         response.obj = await data.json();

//         response.valid = true;
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed To Get User";
//     } finally {
//       return response;
//     }
//   }

//   static async EditPost(postId, text) {
//     // text = encodeURIComponent(text);

//     let postRequest = {
//       id: postId,
//       text: text,
//     };

//     let response = new Response();

//     try {
//       let data = await fetch(`https://localhost:7203/api/Posts/Edit`, {
//         method: "post",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(postRequest),
//       });

//       if (data.ok) {
//         response.obj = await data.json();
//         response.valid = true;
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed Add Post";
//     } finally {
//       return response;
//     }
//   }

//   constructor(postId) {
//     this.obj = this.GetPost(postId);
//     // this.countLikes = this.post.countLikes;
//     this.obj.comments = [];
//   }

//   GetPost(postId) {
//     return Post.posts.find(function (post) {
//       return post.id == postId;
//     });
//   }

//   async RemoveLike() {
//     let response = new Response();

//     try {
//       let data = await fetch(
//         `https://localhost:7203/api/Like/RemoveLike/${this.obj.id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (data.ok) {
//         response.valid = true;

//         this.obj.countLikes -= 1;
//         this.obj.isLiked = false;

//         this.#EditPostInfo();
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed Remove Like";
//     } finally {
//       return response;
//     }
//   }

//   async AddLike() {
//     let response = new Response();
//     try {
//       let data = await fetch(
//         `https://localhost:7203/api/Like/AddLike/${this.obj.id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (data.ok) {
//         response.valid = true;
//         // response.obj = await data.json();

//         this.obj.countLikes += 1;
//         this.obj.isLiked = true;

//         this.#EditPostInfo();
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed Add Like";
//     } finally {
//       return response;
//     }
//   }

//   #EditPostInfo() {
//     const totalLikesElement = document.querySelector(
//       `.posts .content .post[id='${this.obj.id}'] .likes`
//     );

//     const totalCommentsElement = document.querySelector(
//       `.posts .content .post[id='${this.obj.id}'] .comments`
//     );

//     totalLikesElement.innerHTML = HandleTotal(this.obj.countLikes);
//     totalCommentsElement.innerHTML = HandleTotal(this.obj.countComments);
//   }

//   async GetLikers() {
//     let response = new Response();

//     try {
//       let data = await fetch(
//         `https://localhost:7203/api/Posts/GetLikersOnPost/${this.obj.id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (data.ok) {
//         response.obj = await data.json();

//         response.valid = true;
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed Get Likers";
//     } finally {
//       return response;
//     }
//   }

//   async GetComments() {
//     let response = new Response();

//     try {
//       let data = await fetch(
//         `https://localhost:7203/api/Posts/GetCommentsOnPost/${this.obj.id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (data.ok) {
//         let comments = await data.json();

//         this.obj.comments = comments;

//         response.valid = true;
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed Load Comments";
//     } finally {
//       return response;
//     }
//   }

//   async AddComment(text) {
//     let response = new Response();

//     text = encodeURIComponent(text);

//     try {
//       let data = await fetch(
//         `https://localhost:7203/api/Comment/CreateComment/${this.obj.id}?text=${text}`,
//         {
//           method: "post",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (data.ok) {
//         response.obj = await data.json();

//         response.valid = true;

//         this.obj.countComments += 1;

//         this.#EditPostInfo();
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed Load Comments";
//     } finally {
//       return response;
//     }
//   }

//   RenderComments() {
//     let commentsContent = document.querySelector(".comments .content");

//     commentsContent.innerHTML = "";

//     this.obj["comments"].forEach((comment) => {
//       CreateCommentNode(comment);
//     });

//     // console.log(this.posts);
//   }
// }

// class User {
//   static async IsNameFound(name) {
//     let response = new Response();

//     try {
//       let data = await fetch(
//         `https://localhost:7203/api/Users/IsNameFound?name=${name}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (data.ok) {
//         response.obj = await data.json();

//         response.valid = true;
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed";
//     } finally {
//       return response;
//     }
//   }

//   constructor(userId) {
//     this.id = userId;
//     this.obj = null;
//   }

//   async Profile() {
//     let response = new Response();

//     try {
//       let data = await fetch(`https://localhost:7203/api/Users/Profile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (data.ok) {
//         response.obj = await data.json();

//         response.valid = true;
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed To Get Profile";
//     } finally {
//       return response;
//     }
//   }

//   async GetUser() {
//     let response = new Response();

//     try {
//       let data = await fetch(
//         `https://localhost:7203/api/Users/GetUser?id=${this.id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (data.ok) {
//         response.obj = await data.json();

//         response.valid = true;
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed To Get User";
//     } finally {
//       return response;
//     }
//   }

//   async SaveUserInfo() {
//     let response = new Response();

//     let userDto = {
//       name: this.obj.name,
//       imagePath: this.obj.imagePath,
//     };

//     try {
//       let data = await fetch("https://localhost:7203/api/Users/update", {
//         method: "put",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userDto),
//       });

//       if (data.ok) {
//         response.obj = await data.json();
//         response.valid = true;
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed To Save";
//     } finally {
//       return response;
//     }
//   }

//   async ChangePassword(currentPassword, newPassword) {
//     let response = new Response();

//     let request = {
//       currentPassword: currentPassword,
//       newPassword: newPassword,
//     };

//     try {
//       let data = await fetch(
//         "https://localhost:7203/api/Users/ChangePassword",
//         {
//           method: "post",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(request),
//         }
//       );

//       if (data.ok) {
//         response.obj = await data.json();
//         response.valid = true;
//       } else if (data.status == 401) {
//         UnAuthenication();
//       } else {
//         response.error = (await data.json()).error;
//       }
//     } catch (error) {
//       response.error = "Failed To Change";
//     } finally {
//       return response;
//     }
//   }
// }

// let currentUser = null;

// function UnAuthenication() {
//   window.location.href = "../Login_Signup/login_signup.html";

//   alert("You Need To Login");

//   throw new Error("UN"); // Throw an error to stop further execution
// }

// await LoadPage();

// async function LoadPage() {
//   ShowLoadingSection();

//   GetCurrentUser();

//   await LoadPosts();

//   RemoveLoadingSection();
// }

// async function LoadPosts() {
//   console.log("Main");

//   let filterReuest = {
//     type: recentBtnActive ? null : "popular",
//   };

//   let response = await Post.FetchPosts(filterReuest);

//   if (response.valid) {
//     Post.posts = response.obj;

//     Post.RenderPosts();
//   } else {
//     ShowMessage("Error", response.error);
//   }
// }

// async function GetCurrentUser() {
//   let user = new User();

//   let response = await user.Profile();

//   if (response.error) {
//     ShowMessage("Error", response.error);

//     return;
//   }

//   user.obj = response.obj;
//   user.id = response.obj.id;

//   currentUser = user;

//   LoadCurrentUserInfo();
// }

// function GetImage() {
//   let image = currentUser.obj.imagePath;
//   return image != null ? image : defaultImage;
// }

// function LoadCurrentUserInfo() {
//   profileImage.src = GetImage();
//   homeImage.src = profileImage.src;
// }

// editInfoBtn.addEventListener("click", () => {
//   ShowLoadingSection();

//   document.querySelector(".pop-section").innerHTML += `
//   <div class="edit-user position-fixed top-0 w-100 h-100">
//         <div class="overlay position-absolute w-100 h-100"></div>

//         <div class="container py-4 text-center position-absolute
//               top-50 start-50 translate-middle border border-3 bg-white rounded-3"
//         >

//           <div class="image">
//             <img alt="" class="rounded-5" decoding="async" alt="../imgs/unknown.png" />
//           </div>

//           <p class="mt-3 mb-2">
//             <a
//               class="link-danger link-offset-2 link-offset-3-hover
//               link-underline link-underline-opacity-0
//               link-underline-opacity-75-hover"
//               href="#"
//             >
//               Remove Image
//             </a>
//           </p>

//           <div class="my-4 upload-image">
//             <button class="btn btn-primary">Upload Image</button>
//             <input class="form-control d-none" type="file" accept="image/*" />
//           </div>

//           <div class="input-group input-group-lg">
//             <span class="input-group-text">Name</span>
//             <input type="text" class="form-control"required maxlength="17" value="${currentUser.obj.name}" />
//           </div>

//           <div class="form-floating my-4">
//             <input
//               type="email"
//               class="form-control"
//               id="floatingInput"
//               value=${currentUser.obj.email}
//               disabled
//             />
//             <label for="floatingInput" class="form-label">Email address</label>
//           </div>

//           <div class="d-flex gap-3">
//             <button class="btn btn-primary flex-fill" onclick="RemoveSection(event ,'.edit-user')">Close</button>
//             <button class="btn btn-primary flex-fill" onclick="SaveEditProfile('.edit-user')">Save</button>
//           </div>

//         </div>
//       </div>
//   `;

//   // console.log(user.imagePath);

//   imageElement = document.querySelector(".edit-user .image img");
//   removeImageBtn = document.querySelector(".edit-user p a");
//   imageInput = document.querySelector(".edit-user div input[type='file']");
//   uploadButton = document.querySelector(".edit-user .upload-image button");

//   // user.obj.imagePath = "../imgs/unknown.png";

//   LoadImage();

//   uploadButton.addEventListener("click", () => {
//     imageInput.click();
//   });

//   imageInput.addEventListener("change", (e) => SetImage(e));

//   removeImageBtn.addEventListener("click", (e) => RemoveImage(e));

//   RemoveLoadingSection();
// });

// function LoadImage() {
//   let image = GetImage();
//   imageElement.src = image;

//   if (image == defaultImage) {
//     removeImageBtn.classList.add("invisible");
//   } else {
//     removeImageBtn.classList.remove("invisible");
//   }
// }

// function SetImage(event) {
//   const file = event.target.files[0];
//   if (file && file.type.startsWith("image/")) {
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       imageElement.src = e.target.result;

//       removeImageBtn.classList.remove("invisible");

//       prev = current;
//       current = e.target.result;
//       change = true;
//     };

//     reader.readAsDataURL(file);
//   } else {
//     event.target.value = "";

//     ShowMessage("Invalid", "Please select a valid image file.");
//   }
// }

// function RemoveImage(event) {
//   event.preventDefault();
//   imageElement.src = "../imgs/unknown.png";
//   imageInput.value = "";

//   currentUser.obj.imagePath = null;

//   removeImageBtn.classList.add("invisible");
// }

// let current = "",
//   prev = "",
//   change = false;

// async function HandleImage() {
//   const file = imageInput.files[0];

//   if (!change || prev == current || !file) return;

//   const cloudName = "dw91ky7d4";
//   const uploadPreset = "n4wm4jwm";
//   const folderName = "blog";

//   const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", uploadPreset);
//   formData.append("folder", folderName); // Add folder parameter

//   let result = await fetch(url, {
//     method: "POST",
//     body: formData,
//   });

//   if (result.ok) {
//     let data = await result.json();

//     // console.log("Image successfully uploaded:", data.secure_url);

//     currentUser.obj.imagePath = data.secure_url;
//   } else {
//     console.error("Error uploading image:", result.statusText);
//   }

//   change = false;
// }

// window.SaveEditProfile = async function () {
//   ShowLoadingSection();

//   let check = await CheckUserName();

//   if (!check) {
//     RemoveLoadingSection();

//     return;
//   }

//   await HandleImage();

//   let response = await currentUser.SaveUserInfo();

//   if (!response.valid) {
//     ShowMessage("Error", response.error);

//     RemoveLoadingSection();

//     return;
//   }

//   await LoadPosts();

//   RemoveLoadingSection();

//   ShowMessage("Done", "Saved Successfully");
// };

// async function CheckUserName() {
//   let userNameInput = document.querySelector(".edit-user input[type='text']");
//   let userNameValue = userNameInput.value.trim();

//   if (userNameValue == "") {
//     ShowMessage("Name Is Required");
//     return false;
//   }

//   if (userNameValue.toLowerCase() != currentUser.obj.name.toLowerCase()) {
//     let response = await User.IsNameFound(userNameValue);

//     if (response.obj) {
//       ShowMessage("Error", "Name Is Existing");

//       return false;
//     }

//     currentUser.obj.name = userNameValue;
//   }

//   return true;
// }

// changePasswordItem.addEventListener("click", () => {
//   ShowLoadingSection();

//   document.querySelector(".pop-section").innerHTML += `
//     <div class="change-password position-fixed top-0 w-100 h-100">

//       <div class="overlay position-absolute w-100 h-100"></div>

//       <div
//         class="container p-4 position-absolute top-50 start-50 translate-middle border border-3 bg-white rounded-3"
//       >

//           <h3 class="text-center text-primary fw-bolder mb-5">
//             Change Your Password
//           </h3>

//           <div>
//             <label for="cp" class="form-label fs-5">Current Password :</label>

//             <input
//               oninput="this.value = this.value.trim()"
//               id="cp"
//               type="password"
//               class="form-control"
//               aria-describedby="emailHelp"
//               maxlength="13"
//               />

//             <div class="form-text text-danger mt-2 ">At Least 7 Char</div>

//           </div>

//           <div class="my-4">
//             <label for="np" class="form-label fs-5">New Password :</label>

//             <input
//               oninput="this.value = this.value.trim()"
//               class="form-control"
//               id="np"
//               type="password"
//               maxlength="13"
//             />

//             <div class="form-text text-danger mt-2 ">At Least 7 Char</div>

//           </div>

//           <div class="d-flex gap-3">

//             <button class="close btn btn-primary flex-fill"
//               onclick="RemoveSection(event,'.change-password')">
//                 Close
//             </button>

//             <button class="change btn btn-primary flex-fill disabled"
//               onclick="ChangePassword(event)">
//                 Change
//             </button>
//           </div>

//       </div>

//     </div>
//   `;

//   currentPasswordInput = document.getElementById("cp");

//   currentPasswordInput.addEventListener("blur", (e) => HandleInput(e));

//   newPasswordInput = document.getElementById("np");

//   newPasswordInput.addEventListener("blur", (e) => HandleInput(e));

//   RemoveLoadingSection();
// });

// window.HandleSpace = function (e) {
//   e.currentTarget.value = e.currentTarget.value.trim();
// };

// function HandleInput(e) {
//   let input = e.currentTarget;
//   let ErrorElement = input.nextElementSibling;

//   let value = input.value.trim();

//   let error = null;

//   if (value.length < 7) error = "At Least 7 Char";

//   if (error != null) {
//     ErrorElement.classList.remove("d-none");

//     ErrorElement.innerHTML = error;
//   } else if (error == null) {
//     ErrorElement.classList.add("d-none");
//   }

//   EnableChangeButton();
// }

// function EnableChangeButton() {
//   let changePasswordBtn = document.querySelector(".change-password .change");

//   let errors = document.querySelectorAll(".change-password .d-none");

//   errors.length == 2
//     ? changePasswordBtn.classList.remove("disabled")
//     : changePasswordBtn.classList.add("disabled");
// }

// window.ChangePassword = async function () {
//   ShowLoadingSection();

//   let currentPassword = currentPasswordInput.value.trim();

//   let newPassword = newPasswordInput.value.trim();

//   let response = await currentUser.ChangePassword(currentPassword, newPassword);

//   if (!response.valid) {
//     ShowMessage("Error", response.error);

//     RemoveLoadingSection();

//     return;
//   }

//   RemoveLoadingSection();

//   ShowMessage("Done", "Saved Successfully");
// };

// profileBtn.addEventListener("click", async () => {
//   LoadUserInfo(currentUser.obj.id);
// });

// /*
//   Functions and variables are scoped to the module.
//   They are not available in the global scope unless you explicitly
//   attach them to the window object or export/import them properly.

//   Functions like HandleDate, HandleTotal, and AddClassLiked: These are called within the same module,
//   so they do not need to be attached to the window object.
//   Function ClickLikeBtn: This needs to be attached to the window object because
//   it is being called from an inline HTML onclick attribute, which expects the function to be in the global scope.
// */

// createPostBtn.addEventListener("click", () => {
//   ShowLoadingSection();

//   CreatePostSection();

//   let toggleModelBtn = document.querySelector(".create-post button");

//   toggleModelBtn.click();

//   RemoveLoadingSection();
// });

// function CreatePostSection() {
//   document.querySelector(".pop-section").innerHTML = `
//     <div class="create-post">
//       <button
//         class="d-none close"
//         data-bs-toggle="modal"
//         data-bs-target="#create-post"
//       ></button>

//       <div
//         class="modal fade"
//         id="create-post"
//         data-bs-backdrop="static"
//         data-bs-keyboard="false"
//         tabindex="-1"
//         aria-labelledby="staticBackdropLabel"
//         aria-hidden="true"
//       >

//         <!-- modal-dialog-scrollable -->
//         <div class="modal-dialog modal-dialog-centered">

//           <div class="modal-content">

//             <div class="modal-header">
//               <h4 class="modal-title">Create Post</h4>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>

//             <div class="modal-body">
//               <div class="mb-3 d-flex align-items-center">

//                 <div class="image me-3">
//                   <img
//                     class="rounded-circle border border-primary"
//                     src="${GetImage()}" decoding="async" alt="../imgs/unknown.png"
//                   />
//                 </div>

//                 <h5 class="mb-0">${currentUser.obj.name}</h5>
//               </div>

//               <textarea class="w-100 fs-5 border-0" rows="11"
//                     placeholder="Say something about this..."
//                     onkeyup="InsertText(event,'.create-post .modal-footer button')"
//               ></textarea>
//             </div>

//             <div class="modal-footer">
//               <button type="button" class="btn btn-primary w-100 fs-5 disabled"
//                       onclick="window.CreatePost()"
//               >
//                 Post
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//     `;
// }

// window.CreatePost = async function () {
//   ShowLoadingSection();

//   let postInput = document.querySelector(".create-post textarea");

//   // console.log(encodeURIComponent(postInput.value));

//   let response = await Post.AddPost(postInput.value, null);

//   if (!response.valid) {
//     ShowMessage("Error", response.error);

//     RemoveLoadingSection();

//     return;
//   }

//   await LoadPosts();

//   let closeBtn = document.querySelector(".create-post button.close");

//   closeBtn.click();

//   RemoveLoadingSection();
// };

// recentBtn.addEventListener("click", async () => {
//   if (recentBtnActive) return;

//   ShowLoadingSection();

//   recentBtnActive = true;

//   await LoadPosts();

//   RemoveLoadingSection();
// });

// popularBtn.addEventListener("click", async () => {
//   if (!recentBtnActive) return;

//   ShowLoadingSection();

//   recentBtnActive = false;

//   await LoadPosts();

//   RemoveLoadingSection();
// });

// window.LoadUserInfo = async function (userId) {
//   ShowLoadingSection();

//   let user = new User(userId);

//   let response = await user.GetUser();

//   RemoveLoadingSection();

//   if (response.error) {
//     ShowMessage("Error", response.error);
//     return;
//   }

//   user.obj = response.obj;

//   document.querySelector(".pop-section").innerHTML += `
//   <div class="user-info position-fixed top-0 w-100 h-100">
//     <div class="overlay position-absolute w-100 h-100"></div>

//     <div class="container py-4 text-center position-absolute top-50 start-50
//           translate-middle border border-3 bg-white rounded-3" >

//       <div class="image">
//           <img src="${
//             user.obj.imagePath != null ? user.obj.imagePath : defaultImage
//           }" decoding="async" alt="../imgs/unknown.png"
//           class="rounded-5" />
//       </div>

//       <button class="close-btn btn position-absolute top-0 end-0
//               fw-bolder rounded-circle px-3 py-2 btn-danger
//               text-white m-0 rounded-3" onclick="RemoveSection(event ,'.user-info')"
//       >
//         X
//       </button>

//       <h2 class="mt-5 mb-4">${user.obj["name"]}</h2>

//       <h3 class="">${user.obj.email}</h3>

//     </div>
//   </div>`;
// };

// window.ClickOptionsBtn = function (event, userId) {
//   let options = event.currentTarget.nextElementSibling.children;

//   if (currentUser.id == userId) {
//     options[1].classList.remove("d-none");
//     options[2].classList.remove("d-none");
//   } else {
//     options[1].classList.add("d-none");
//     options[2].classList.add("d-none");
//   }
// };

// window.ClickEditPost = async function (postId) {
//   ShowLoadingSection();

//   await EditPostSection(postId);

//   let toggleModelBtn = document.querySelector(".edit-post button");

//   toggleModelBtn.click();

//   RemoveLoadingSection();
// };

// async function EditPostSection(postId) {
//   let post = await Post.getPost(postId);

//   let text = post.obj.text != null ? post.obj.text : "";
//   let originalPostId = post.obj.originalPostId;

//   document.querySelector(".pop-section").innerHTML = `
//     <div class="edit-post">
//       <button
//         class="d-none close"
//         data-bs-toggle="modal"
//         data-bs-target="#create-post"
//       ></button>

//       <div
//         class="modal fade"
//         id="create-post"
//         data-bs-backdrop="static"
//         data-bs-keyboard="false"
//         tabindex="-1"
//         aria-labelledby="staticBackdropLabel"
//         aria-hidden="true"
//       >

//         <div class="modal-dialog modal-dialog-centered">
//           <div class="modal-content">

//             <div class="modal-header">

//               <h4 class="modal-title">Edit Post</h4>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>

//             </div>

//             <div class="modal-body">

//               <div class="mb-3 d-flex align-items-center">

//                 <div class="image me-3">
//                   <img
//                     class="rounded-circle border border-primary"
//                     src="${GetImage()}" decoding="async" alt="../imgs/unknown.png"
//                   />
//                 </div>

//                 <h5 class="mb-0">${currentUser.obj.name}</h5>

//               </div>

//               <textarea
//                 class="w-100 fs-5 border-0"
//                 rows="11"
//                 placeholder="Say something about this..."
//               >${text}</textarea>

//             </div>

//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-primary w-100 fs-5"
//                 onclick="window.EditPost(${postId})"
//               >
//                 Post
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//     `;

//   let postInput = document.querySelector(".edit-post textarea");
//   let postBtn = document.querySelector(".edit-post .modal-footer button");

//   if (originalPostId == null) {
//     EnablePostBtn(postBtn, postInput.value.trim() != "");

//     postInput.addEventListener("keyup", (e) => {
//       InsertText(e, ".edit-post .modal-footer button");
//     });
//   }
// }

// window.EditPost = async function (postId) {
//   ShowLoadingSection();

//   let postInput = document.querySelector(".edit-post textarea");

//   let text = postInput.value.trim();

//   text = text == "" ? null : text;

//   let response = await Post.EditPost(postId, text);

//   if (!response.valid) {
//     ShowMessage("Error", response.error);

//     RemoveLoadingSection();

//     return;
//   }

//   await LoadPosts();

//   let closeBtn = document.querySelector(".edit-post button.close");

//   closeBtn.click();

//   RemoveLoadingSection();
// };

// window.ClickLikeBtn = async function (event, postId) {
//   let post = new Post(postId);

//   const clickedElement = event.currentTarget;

//   let response = clickedElement.classList.contains("liked")
//     ? await post.RemoveLike()
//     : await post.AddLike();

//   if (response.valid) {
//     clickedElement.classList.toggle("liked");
//   } else {
//     ShowMessage("Error", response.error);
//   }
// };

// // window.ClickLikesBtn = async function (postId) {
// //   ShowLoadingSection();

// //   let post = new Post(postId);

// //   let response = await post.GetLikers();

// //   if (response.valid) {
// //     let likers = response.obj;

// //     CreateLikersSection(likers.length);

// //     likers.forEach((liker) => {
// //       CreateLikerNode(liker);
// //     });
// //   }

// //   RemoveLoadingSection();
// // };

// function CreateLikersSection(totalLikes) {
//   document.querySelector(".pop-section").innerHTML = `
//   <div class="likers position-fixed top-0 w-100 h-100 ">

//     <div class="overlay position-absolute w-100 h-100"></div>

//       <div class="container position-absolute top-50 start-50 translate-middle
//         border border-3 p-0 bg-white rounded-3" >

//         <div class="d-flex align-items-center bg-primary p-3">

//           <h2 class="flex-grow-1 ps-1 text-white m-0">Total : ${totalLikes}</h2>

//           <h3 class="close-btn fw-bolder rounded-circle px-4 py-3 bg-danger
//             text-white m-0 rounded-3" role="button"
//             onclick="RemoveSection(event , '.likers')"
//             >  X</h3>

//         </div>

//         <div class="content"></div>

//       </div>
//     </div>
//     `;
// }

// function CreateLikerNode(liker) {
//   let content = document.querySelector(".likers .content");
//   content.innerHTML += `
//   <div class="liker d-flex gap-3 align-items-center h3 m-0 p-3"
//       role="button" id =${liker.id}
//       onclick="LoadUserInfo(${liker.id})"
//       >

//     <div class="image rounded-5 overflow-hidden">
//       <img src="${
//         liker.imagePath != null ? liker.imagePath : defaultImage
//       }" decoding="async" alt="../imgs/unknown.png"
//       class="w-100 h-100" />
//     </div>

//       ${liker.name}

//   </div>
//   `;
// }

// window.RemoveSection = function (e, sectionClass) {
//   if (e != null) e.preventDefault();

//   let section = document.querySelector(`.pop-section ${sectionClass}`);

//   section.remove();
// };

// let post;

// window.ClickCommentsBtn = async function (postId) {
//   ShowLoadingSection();

//   post = new Post(postId);

//   let response = await post.GetComments();

//   if (response.valid) {
//     CreateCommentsSection(post.obj["comments"].length);

//     post.RenderComments();
//   } else {
//     ShowMessage("Error", response.error);
//   }

//   RemoveLoadingSection();
// };

// function CreateCommentsSection(totalComments) {
//   document.querySelector(".pop-section").innerHTML = `
//   <div class="comments position-fixed top-0 w-100 h-100">

//     <div class="overlay position-absolute w-100 h-100"></div>

//     <div class="container position-absolute top-50 start-50
//     translate-middle border border-3 p-0 bg-white rounded-3" >

//       <div class="d-flex align-items-center bg-primary p-3">

//         <h2 class="flex-grow-1 ps-1 text-white m-0">
//           Total : ${totalComments}
//         </h2>

//         <h3
//           class="close-btn fw-bolder rounded-circle
//           px-4 py-3 bg-danger text-white m-0 rounded-3" role="button"
//           onclick="RemoveSection(event,'.comments')">
//           X
//         </h3>

//       </div>

//       <div class="content"></div>

//       <div class="create-comment border rounded-3 p-3 d-flex align-items-start gap-3" >

//         <div class="image rounded-circle overflow-hidden">
//           <img src="${GetImage()}" decoding="async" alt="../imgs/unknown.png"/>
//         </div>

//         <textarea
//           class="flex-grow-1 border-0"
//           placeholder="Your Comment . . ."
//           rows="5"
//           onkeyup = "window.InsertText(event,'.comments button')"
//         ></textarea>

//         <button class="btn btn-primary px-5 rounded-5 disabled"
//           onclick="window.PostComment()"
//         >
//           POST
//         </button>

//       </div>
//     </div>
//   </div>
//     `;
// }

// function CreateCommentNode(comment) {
//   let content = document.querySelector(".comments .content");

//   content.innerHTML += `
//   <div class="comment d-flex gap-3 p-3 pe-4">

//     <div class="image">
//       <img src="${
//         comment.imagePath != null ? comment.imagePath : defaultImage
//       }" alt="../imgs/unknown.png"
//             class="rounded-circle"
//             role="button"
//             onclick="LoadUserInfo(${comment.userId})"
//       />
//     </div>

//     <div>
//       <div class="info rounded-3 p-2 mb-1">
//         <h4 class="mb-1">${comment.userName}</h4>

//         <p class="mb-0 fs-5" style="white-space: pre-wrap">${comment.text}</p>
//       </div>

//       <small class="text-muted ps-1">${HandleDate2(comment.createdAt)}</small>

//     </div>

//   </div>
//   `;
// }

// window.InsertText = function (event, buttonName) {
//   let textarea = event.currentTarget;

//   // textarea.style.height = textarea.scrollHeight + "px";

//   let text = textarea.value.trim();
//   let button = document.querySelector(`${buttonName}`);

//   EnablePostBtn(button, text != "");
// };

// function EnablePostBtn(btn, enable) {
//   if (btn == null) return;

//   enable ? btn.classList.remove("disabled") : btn.classList.add("disabled");
// }

// window.PostComment = async function () {
//   ShowLoadingSection();

//   let commentInput = document.querySelector(".comments textarea");
//   let PostCommentBtn = document.querySelector(".comments button");

//   let response = await post.AddComment(commentInput.value);

//   if (!response.valid) {
//     ShowMessage("Error", response.error);

//     RemoveLoadingSection();

//     return;
//   }

//   post.obj["comments"].unshift(response.obj);

//   post.RenderComments();

//   EnablePostBtn(PostCommentBtn, false);
//   commentInput.value = "";

//   RemoveLoadingSection();
// };

// window.ClickShareBtn = function (postId) {
//   ShowLoadingSection();

//   CreateShareSection(postId);

//   let toggleModelBtn = document.querySelector(".share button");

//   toggleModelBtn.click();

//   RemoveLoadingSection();
// };

// function CreateShareSection(postId) {
//   document.querySelector(".pop-section").innerHTML = `
//   <div class="share">
//     <button
//       class ='d-none' data-bs-toggle="modal"
//       data-bs-target="#shareModal">
//     </button>

//     <div
//       class="modal fade"
//       id="shareModal"
//       data-bs-backdrop="static"
//       data-bs-keyboard="false"
//       tabindex="-1"
//       aria-labelledby="exampleModalLabel"
//       role="dialog"
//     >

//       <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content rounded-3 shadow">
//           <div class="modal-header fs-4">
//             <div class="Image me-3">
//               <img
//                 class="rounded-circle border border-primary"
//                 src="${GetImage()}" decoding="async" alt="../imgs/unknown.png"
//               />
//             </div>
//             ${currentUser.obj.name}
//           </div>

//           <div class="modal-body">

//             <textarea
//               class="share-input border border-white-50 p-3 w-100 rounded-3"
//               placeholder="Say something about this..."
//               rows = "9"
//             ></textarea>

//           </div>

//           <div
//             class="modal-footer d-flex justify-content-between border-top-0"
//           >
//             <button
//               type="button"
//               class="close btn btn-secondary px-3"
//               data-bs-dismiss="modal"
//               onclick="RemoveSection(event , '.share')"

//             >
//               Close
//             </button>

//             <button type="button" class="btn btn-primary px-3 btn-share"
//                     onclick="window.SharePost(${postId})"
//             >
//               Share
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     `;
// }

// window.SharePost = async function (postId) {
//   ShowLoadingSection();

//   let shareInput = document.querySelector(".share textarea");

//   let text = shareInput.value.trim();

//   text = text == "" ? null : text;

//   let response = await Post.AddPost(text, postId);

//   if (!response.valid) {
//     ShowMessage("Error", response.error);

//     RemoveLoadingSection();

//     return;
//   }

//   await LoadPosts();

//   let closeBtn = document.querySelector(".share button.close");

//   closeBtn.click();

//   RemoveLoadingSection();
// };

// if (type == "OriginalDeleted") {
//   postsContainer.innerHTML += `
//     <div class="post bg-white mt-4 p-3 rounded-4" id="${post.id}">
//       <div class="user d-flex gap-3">
//         <div class="image">
//           <img
//           class="w-100 h-100 rounded-circle"
//           src="${GetImage(post.imagePath)}"
//           decoding="async" alt="../imgs/unknown.png"
//           onclick="LoadUserInfo(${post.userId})"
//           role='button'
//         />
//         </div>

//         <div class="info">
//           <h4 class="m-0" onclick="LoadUserInfo(${post.userId})"
//               role="button">${post.userName}</h4>

//           <small class="text-muted"
//             >${HandleDate(post.createdAt)}</small
//           >
//         </div>

//         <div class="dropdown ms-auto ">

//           <button
//               class="btn border-0 p-0"
//               data-bs-toggle="dropdown" data-bs-offset="-1,-3"
//               onclick = "ClickOptionsBtn(event,${post.userId})"
//           >
//             <i class="fa-solid fa-ellipsis"></i>
//           </button>

//           <ul class="dropdown-menu ">
//             <li class="dropdown-item" role='button'>Save</li>

//             <li class="dropdown-item" role='button'
//                 onclick="ClickEditPost(${post.id})">
//               Edit
//             </li>

//             <li class="dropdown-item" role='button'
//                 onclick="ClickDeletePost(${post.id})">
//                   Delete
//             </li>

//            </ul>

//         </div>

//       </div>

//       <p class="text px-2 ${post.text != null ? "mt-3" : ""}"
//       style="white-space: pre-wrap;word-break: break-word;">${
//         post.text != null ? post.text : ""
//       }</p>

//       <div class="shared-post p-3 mb-3 border border-1 rounded-5">
//         This Post Maybe Deletet
//       </div>

//     <div class="action-buttons px-2 d-flex justify-content-between gap-3">

//       <div>
//         <span class="shares me-1">
//         ${HandleTotal(post.countShares)}
//         </span>

//         <span class="share">

//           <i class="fa-solid fa-share"></i>

//         </span>

//       </div>

//       <div class="text-center" role="button"
//         onclick="ClickCommentsBtn(${post.id})">
//           <span class="comments me-1">
//             ${HandleTotal(post.countComments)}
//           </span>

//           <span class="comment">
//             <i class="fa-regular fa-comment-dots"></i>
//           </span>
//       </div>

//       <div class="text-end">
//         <span class="likes me-1"
//         onclick="ClickLikesBtn(${post.id})" role="button">
//           ${HandleTotal(post.countLikes)}
//         </span>

//         <span
//           class="like ${ToggleClassLiked(post.isLiked)}"
//           onclick="window.ClickLikeBtn(event,${post.id})" role="button">

//           <i class="fa-regular fa-thumbs-up"></i>
//         </span>
//       </div>

//     </div>
//   </div>
//     `;
// } else if (type == "Shared") {
//   let originalPost = post.originalPost;

//   postsContainer.innerHTML += `
//     <div class="post bg-white mt-4 p-3 rounded-4" id="${post.id}">
//       <div class="user d-flex gap-3">
//         <div class="image">
//           <img
//           class="w-100 h-100 rounded-circle"
//           src="${GetImage(post.imagePath)}"
//           decoding="async" alt="../imgs/unknown.png"
//           onclick="LoadUserInfo(${post.userId})"
//           role='button'
//         />
//         </div>

//         <div class="info">
//           <h4 class="m-0" onclick="LoadUserInfo(${post.userId})"
//               role="button">${post.userName}</h4>

//           <small class="text-muted"
//             >${HandleDate(post.createdAt)}</small
//           >
//         </div>

//         <div class="dropdown ms-auto ">

//           <button
//               class="btn border-0 p-0"
//               data-bs-toggle="dropdown" data-bs-offset="-1,-3"
//               onclick = "ClickOptionsBtn(event,${post.userId})"
//           >
//             <i class="fa-solid fa-ellipsis"></i>
//           </button>

//           <ul class="dropdown-menu ">

//             <li class="dropdown-item" role='button'>Save</li>

//             <li class="dropdown-item" role='button'
//                 onclick="ClickEditPost(${post.id})">
//               Edit
//             </li>

//             <li class="dropdown-item" role='button'
//                 onclick="ClickDeletePost(${post.id})">
//                   Delete
//             </li>

//           </ul>

//         </div>

//       </div>

//       <p class="text px-2 ${post.text != null ? "mt-3" : ""}"
//       style="white-space: pre-wrap;word-break: break-word;">${
//         post.text != null ? post.text : ""
//       }</p>

//       <div class="shared-post p-3 mb-3 border border-1 rounded-5">

//         <div class="user d-flex gap-3">
//           <div class="image">
//             <img
//               class="w-100 h-100 rounded-circle"
//               src="${GetImage(originalPost.imagePath)}"
//               decoding="async" alt="../imgs/unknown.png"
//               onclick="LoadUserInfo(${originalPost.userId})"
//               role="button"
//             />
//           </div>

//           <div class="info  ">
//             <h5 class="m-0" onclick="LoadUserInfo(${originalPost.userId})"
//               role="button">${originalPost.userName}</h5>

//             <small class="text-muted fs-7"
//               >${HandleDate(originalPost.createdAt)}</small
//             >
//           </div>
//         </div>

//         <p class="text mt-3 mb-0 px-2"
//         style="white-space: pre-wrap;">${originalPost.text}</p>

//       </div>

//     <div class="action-buttons px-2 d-flex justify-content-between gap-3">

//       <div>
//         <span class="shares me-1">
//         ${HandleTotal(post.countShares)}
//         </span>

//         <span class="share"
//             onclick="ClickShareBtn(${originalPost.id})"
//             role="button">

//           <i class="fa-solid fa-share"></i>

//         </span>

//       </div>

//       <div class="text-center" role="button"
//         onclick="ClickCommentsBtn(${post.id})">
//           <span class="comments me-1">
//             ${HandleTotal(post.countComments)}
//           </span>

//           <span class="comment">
//             <i class="fa-regular fa-comment-dots"></i>
//           </span>
//       </div>

//       <div class="text-end">
//         <span class="likes me-1"
//         onclick="ClickLikesBtn(${post.id})" role="button">
//           ${HandleTotal(post.countLikes)}
//         </span>

//         <span
//           class="like ${ToggleClassLiked(post.isLiked)}"
//           onclick="window.ClickLikeBtn(event,${post.id})" role="button">

//           <i class="fa-regular fa-thumbs-up"></i>
//         </span>
//       </div>

//     </div>
//   </div>
//     `;
// } else if (type == "Normal")
//   postsContainer.innerHTML += `
//     <div class="post bg-white mt-4 p-3 rounded-4" id=${post.id}>

//       <div class="user d-flex gap-3">

//         <div class="image">

//           <img
//             class="w-100 h-100 rounded-circle"
//             src="${GetImage(post.imagePath)}"
//             decoding="async" alt="../imgs/unknown.png"
//             onclick="LoadUserInfo(${post.userId})"
//             role='button'
//           />

//         </div>

//         <div class="info">

//           <h4 class="m-0" onclick="LoadUserInfo(${post.userId})"
//           role='button'>${post.userName}</h4>

//           <small class="text-muted">${HandleDate(post.createdAt)}</small>

//         </div>

//         <div class="dropdown ms-auto">

//           <button
//             class="btn border-0 p-0"
//             data-bs-toggle="dropdown" data-bs-offset="-1,-3"
//             onclick = "ClickOptionsBtn(event,${post.userId})"
//           >
//             <i class="fa-solid fa-ellipsis"></i>
//           </button>

//           <ul class="dropdown-menu">

//             <li class="dropdown-item" role='button'>Save</li>

//             <li class="dropdown-item" role='button'
//                 onclick="ClickEditPost(${post.id})">
//               Edit
//             </li>

//             <li class="dropdown-item" role='button'
//                 onclick="ClickDeletePost(${post.id})">
//                   Delete
//             </li>

//           </ul>

//         </div>

//       </div>

//       <p class="text mt-3 px-2" style="white-space: pre-wrap;">${post.text}</p>

//       <div class="action-buttons px-2 d-flex justify-content-between gap-3"  >

//         <div class="" >
//           <span class="shares me-1">${HandleTotal(post.countShares)}</span>
//           <span class="share"
//             onclick="ClickShareBtn(${post.id})" role="button">
//             <i class="fa-solid fa-share"></i>
//           </span>
//         </div>

//         <div class="text-center" role="button"
//           onclick="ClickCommentsBtn(${post.id})">

//           <span class="comments me-1">
//             ${HandleTotal(post.countComments)}
//           </span>

//           <span class="comment">
//             <i class="fa-regular fa-comment-dots"></i>
//           </span>

//         </div>

//         <div class="text-end">

//           <span class="likes me-1"
//           onclick="ClickLikesBtn(${post.id})" role="button">
//             ${HandleTotal(post.countLikes)}
//           </span>

//           <span class="like ${ToggleClassLiked(post.isLiked)}"
//             onclick="window.ClickLikeBtn(event,${post.id})" role="button">
//             <i class="fa-regular fa-thumbs-up"></i>
//           </span>

//         </div>

//       </div>
//   </div>
//     `;

function CreatePost(post) {
  return `
  <div class="post bg-white mt-4 p-3 rounded-4" id=${post.id}>

    <div class="user d-flex gap-3">

      <div class="image">
        
        <img
          class="w-100 h-100 rounded-circle"
          src="${GetImage(post.imagePath)}"
          decoding="async" alt="../imgs/unknown.png"
          onclick="LoadUserInfo(${post.userId})"
          role='button'
        />
        
      </div>
  
      <div class="info">
    
        <h4 class="m-0" onclick="LoadUserInfo(${post.userId})" 
        role='button'>${post.userName}</h4>

        <small class="text-muted">${HandleDate(post.createdAt)}</small>
      
      </div>

      <div class="dropdown ms-auto">

        <button 
          class="btn border-0 p-0"
          data-bs-toggle="dropdown" data-bs-offset="-1,-3"
          onclick = "ClickOptionsPostBtn(event,${post.id})" 
        >
          <i class="fa-solid fa-ellipsis"></i>
        </button>

        <ul class="dropdown-menu">

          <li class="dropdown-item" role='button' 
              onclick="ClickSavePost(${post.id})">
            Save
          </li>

          <li class="dropdown-item" role='button'
              onclick="ClickEditPost(${post.id})">
            Edit
          </li>

          <li class="dropdown-item" role='button'
              onclick="ClickDeletePost(${post.id})">
                Delete
          </li>     

        </ul>

      </div>

    </div>
  
    <p class="text mt-3 px-2" style="white-space: pre-wrap;">${post.text}</p>
  
    <div class="action-buttons px-2 d-flex justify-content-between gap-3"  >
    
      <div class="" >
        <span class="shares me-1">${HandleTotal(post.countShares)}</span>
        <span class="share"
          onclick="ClickShareBtn(${post.id})" role="button">
          <i class="fa-solid fa-share"></i>
        </span>
      </div>
  
      <div class="text-center" role="button"
        onclick="ClickCommentsBtn(${post.id})">
      
        <span class="comments me-1">
          ${HandleTotal(post.countComments)}
        </span>
      
        <span class="comment">
          <i class="fa-regular fa-comment-dots"></i>
        </span>

      </div>
  
      <div class="text-end">
  
        <span class="likes me-1" 
        onclick="ClickLikesBtn(${post.id})" role="button">
          ${HandleTotal(post.countLikes)}
        </span>
  
        <span class="like ${ToggleClassLiked(post.isLiked)}" 
          onclick="window.ClickLikeBtn(event,${post.id})" role="button">
          <i class="fa-regular fa-thumbs-up"></i>
        </span>
  
      </div>
  
    </div>

  </div>
  `;
}

function CreateOriginalSection(post) {
  let isSharedPostDeleted = post.isSharedPostDeleted;

  if (isSharedPostDeleted) {
    return `
    <div class="shared-post p-3 mb-3 border border-1 rounded-5">
      This Post Maybe Deletet
    </div>
    `;
  }

  let originalPost = post.originalPost;

  if (originalPost == null) {
    return "";
  }

  return `
  
  <div class="shared-post p-3 mb-3 border border-1 rounded-5">

    <div class="user d-flex gap-3">

      <div class="image">
        <img
          class="w-100 h-100 rounded-circle"
          src="${GetImage(originalPost.imagePath)}"
          decoding="async" alt="../imgs/unknown.png"
          onclick="LoadUserInfo(${originalPost.userId})"
          role="button"
        />
      </div>

      <div class="info  ">
        <h5 class="m-0" onclick="LoadUserInfo(${originalPost.userId})"
          role="button">${originalPost.userName}</h5>

        <small class="text-muted fs-7"
          >${HandleDate(originalPost.createdAt)}</small
        >
      </div>

    </div>

    <p class="text mt-3 mb-0 px-2" 
    style="white-space: pre-wrap;">${originalPost.text}</p>

  </div>
  `;
}

function CreateSharedPost(post) {
  return `
  <div class="post bg-white mt-4 p-3 rounded-4" id="${post.id}">
    <div class="user d-flex gap-3">
      <div class="image">
        <img
        class="w-100 h-100 rounded-circle"
        src="${GetImage(post.imagePath)}"
        decoding="async" alt="../imgs/unknown.png"
        onclick="LoadUserInfo(${post.userId})"
        role='button'
      />
      </div>

      <div class="info">
        <h4 class="m-0" onclick="LoadUserInfo(${post.userId})"
            role="button">${post.userName}</h4>

        <small class="text-muted"
          >${HandleDate(post.createdAt)}</small
        >
      </div>

      <div class="dropdown ms-auto ">

        <button 
            class="btn border-0 p-0"
            data-bs-toggle="dropdown" data-bs-offset="-1,-3"
            onclick = "ClickOptionsPostBtn(event,${post.id})"
        >
          <i class="fa-solid fa-ellipsis"></i>
        </button>

        <ul class="dropdown-menu ">

          <li class="dropdown-item" role='button' 
              onclick="ClickSavePost(${post.id})">
            Save
          </li>     
          
          <li class="dropdown-item" role='button'
              onclick="ClickEditPost(${post.id})">
            Edit
          </li>
                      
          <li class="dropdown-item" role='button'
              onclick="ClickDeletePost(${post.id})">
                Delete
          </li>     

        </ul>

      </div>

    </div>

    <p class="text px-2 ${post.text != null ? "mt-3" : ""}" 
    style="white-space: pre-wrap;word-break: break-word;">${
      post.text != null ? post.text : ""
    }</p>

    ${CreateOriginalSection(post)}

    <div class="action-buttons px-2 d-flex justify-content-between gap-3">
      
      <div>
        <span class="shares me-1">
        ${HandleTotal(post.countShares)}
        </span>

        <span class="share" 
            onclick="ClickShareBtn(${post.originalPost.id})" 
            role="button">

          <i class="fa-solid fa-share"></i>

        </span>

      </div>

      <div class="text-center" role="button"
        onclick="ClickCommentsBtn(${post.id})">
          <span class="comments me-1"> 
            ${HandleTotal(post.countComments)}
          </span>

          <span class="comment">
            <i class="fa-regular fa-comment-dots"></i>
          </span>
      </div>

      <div class="text-end">
        <span class="likes me-1" 
        onclick="ClickLikesBtn(${post.id})" role="button">
          ${HandleTotal(post.countLikes)}
        </span>

        <span
          class="like ${ToggleClassLiked(post.isLiked)}"
          onclick="window.ClickLikeBtn(event,${post.id})" role="button">

          <i class="fa-regular fa-thumbs-up"></i>
        </span>
      </div>

    </div>
    
  </div>
  `;
}

function CreateOriginalPostDeleted(post) {
  return `     
  <div class="post bg-white mt-4 p-3 rounded-4" id="${post.id}">
    <div class="user d-flex gap-3">
      <div class="image">
        <img
        class="w-100 h-100 rounded-circle"
        src="${GetImage(post.imagePath)}"
        decoding="async" alt="../imgs/unknown.png"
        onclick="LoadUserInfo(${post.userId})"
        role='button'
      />
      </div>

      <div class="info">
        <h4 class="m-0" onclick="LoadUserInfo(${post.userId})"
            role="button">${post.userName}</h4>

        <small class="text-muted"
          >${HandleDate(post.createdAt)}</small
        >
      </div>

      <div class="dropdown ms-auto ">

        <button 
            class="btn border-0 p-0"
            data-bs-toggle="dropdown" data-bs-offset="-1,-3"
            onclick = "ClickOptionsPostBtn(event,${post.id})"
        >
          <i class="fa-solid fa-ellipsis"></i>
        </button>

        <ul class="dropdown-menu ">
          
          <li class="dropdown-item" role='button' 
              onclick="ClickSavePost(${post.id})">
            Save
          </li>
          
          <li class="dropdown-item" role='button'
              onclick="ClickEditPost(${post.id})">
            Edit
          </li>
                      
          <li class="dropdown-item" role='button'
              onclick="ClickDeletePost(${post.id})">
                Delete
          </li>         

        </ul>

      </div>

    </div>

    <p class="text px-2 ${post.text != null ? "mt-3" : ""}" 
    style="white-space: pre-wrap;word-break: break-word;">${
      post.text != null ? post.text : ""
    }</p>

    ${CreateOriginalSection(post)};

    <div class="action-buttons px-2 d-flex justify-content-between gap-3">
      
      <div>
        <span class="shares me-1">
        ${HandleTotal(post.countShares)}
        </span>

        <span class="share">

          <i class="fa-solid fa-share"></i>

        </span>

      </div>

      <div class="text-center" role="button"
        onclick="ClickCommentsBtn(${post.id})">
          <span class="comments me-1"> 
            ${HandleTotal(post.countComments)}
          </span>

          <span class="comment">
            <i class="fa-regular fa-comment-dots"></i>
          </span>
      </div>

      <div class="text-end">
        <span class="likes me-1" 
        onclick="ClickLikesBtn(${post.id})" role="button">
          ${HandleTotal(post.countLikes)}
        </span>

        <span
          class="like ${ToggleClassLiked(post.isLiked)}"
          onclick="window.ClickLikeBtn(event,${post.id})" role="button">

          <i class="fa-regular fa-thumbs-up"></i>
        </span>
      </div>

    </div>

  </div>
    `;
}

function CreateTrash(post) {
  return `
  <div class="post bg-white mt-3 p-3 rounded-4" id="${post.id}">
    <div class="user d-flex gap-3">
      <div class="image">
        <img
          class="w-100 h-100 rounded-circle"
          src="${GetImage(post.imagePath)}"
          decoding="async" alt="../imgs/unknown.png"
          onclick="LoadUserInfo(${post.userId})"
          role="button"
        />
      </div>

      <div class="info">
        <h4 class="m-0" onclick="LoadUserInfo(${post.userId})" 
        role='button'>${post.userName}</h4>


        <small class="text-muted">${HandleDate(post.createdAt)}</small>
      </div>

      <div class="dropdown ms-auto">
        <button
          class="btn border-0 p-0"
          data-bs-toggle="dropdown"
          data-bs-offset="-1,-3"
        >
          <i class="fa-solid fa-ellipsis"></i>
        </button>

        <ul class="dropdown-menu">
          <li class="dropdown-item" role="button" 
              onclick="ClickRestorePost(${post.id})"
              >Restore
          </li>

          <li class="dropdown-item" role="button">Delete</li>
        </ul>
      </div>
    </div>

    <p class="text px-2 ${post.text != null ? "mt-3" : ""}" 
    style="white-space: pre-wrap;word-break: break-word;">${
      post.text != null ? post.text : ""
    }</p>

    ${CreateOriginalSection(post)}

    <div
      class="action-buttons px-2 d-flex justify-content-between gap-3"
    >
      <div>
        <span class="shares me-1">${HandleTotal(post.countShares)}</span>

        <span class="share">
          <i class="fa-solid fa-share"></i>
        </span>
      </div>

      <div class="text-center" role="button"
            onclick="ClickCommentsBtn(${post.id})">
      
      <span class="comments me-1">
        ${HandleTotal(post.countComments)}
        </span>

        <span class="comment">
          <i class="fa-regular fa-comment-dots"></i>
        </span>
      </div>

      <div class="text-end">

        <span class="likes me-1" 
        onclick="ClickLikesBtn(${post.id})" role="button">
          ${HandleTotal(post.countLikes)}
        </span>

        <span class="like ${ToggleClassLiked(post.isLiked)}" >
          <i class="fa-regular fa-thumbs-up"></i>
        </span>
      </div>
    </div>
  </div>
  `;
}

let dropDownSection =
  post.postType != "Trash"
    ? `
  <button 
    class="btn border-0 p-0"
    data-bs-toggle="dropdown" data-bs-offset="-1,-3"
    onclick = "ClickOptionsPostBtn(event,${post.id})" 
  >
    <i class="fa-solid fa-ellipsis"></i>
  </button>

  <ul class="dropdown-menu">

    <li class="dropdown-item" role='button' 
        onclick="ClickSavePost(${post.id})">
      Save
    </li>

    <li class="dropdown-item" role='button'
        onclick="ClickEditPost(${post.id})">
      Edit
    </li>

    <li class="dropdown-item" role='button'
        onclick="ClickDeletePost(${post.id})">
          Delete
    </li>     

  </ul>
  `
    : `       
  <button
      class="btn border-0 p-0"
      data-bs-toggle="dropdown"
      data-bs-offset="-1,-3"
      >
    <i class="fa-solid fa-ellipsis"></i>
  </button>

  <ul class="dropdown-menu">
    <li class="dropdown-item" role="button" 
        onclick="ClickRestorePost(${post.id})"
        >Restore
    </li>

    <li class="dropdown-item" role="button">Delete</li>
  </ul>
`;

<p
  class="text px-2 ${post.text != null ? 'mt-3' : ''}"
  style="white-space: pre-wrap;word-break: break-word;"
>
  ${post.text != null ? post.text : ""}
</p>;

let OriginalSection = post.isSharedPostDeleted
  ? `
  <div class="shared-post p-3 mb-3 border border-1 rounded-5">
    This Post Maybe Deletet
  </div>
`
  : post.originalPost == null
  ? ``
  : `
<div class="shared-post p-3 mb-3 border border-1 rounded-5">

    <div class="user d-flex gap-3">

      <div class="image">
        <img
          class="w-100 h-100 rounded-circle"
          src="${GetImage(originalPost.imagePath)}"
          decoding="async" alt="../imgs/unknown.png"
          onclick="LoadUserInfo(${originalPost.userId})"
          role="button"
        />
      </div>

      <div class="info  ">
        <h5 class="m-0" onclick="LoadUserInfo(${originalPost.userId})"
          role="button">${originalPost.userName}</h5>

        <small class="text-muted fs-7"
          >${HandleDate(originalPost.createdAt)}</small
        >
      </div>

    </div>

    <p class="text mt-3 mb-0 px-2" 
    style="white-space: pre-wrap;">${originalPost.text}</p>

</div>
`;

let likeBtn =
  post.postType == "Trash"
    ? `
  <span class="like ${ToggleClassLiked(post.isLiked)}">
    <i class="fa-regular fa-thumbs-up"></i>
  </span>
`
    : `
  <span class="like ${ToggleClassLiked(post.isLiked)}" 
        onclick="window.ClickLikeBtn(event,${post.id})" role="button">
    <i class="fa-regular fa-thumbs-up"></i>
  </span>
`;
let shareBtn =
  post.postType == "Trash" || post.isSharedPostDeleted
    ? `
  <span class="share">
    <i class="fa-solid fa-share"></i>
  </span>
`
    : `
  <span class="share"
        onclick="ClickShareBtn(${
          post.originalPost == null ? post.id : post.originalPost.id
        })"
        role="button">
    <i class="fa-solid fa-share"></i>
  </span>
`;

showMoreOverlay.addEventListener("click", function () {
  previewContainer.innerHTML = ""; // Clear existing previews

  for (let i = 0; i < totalFiles; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function (e) {
      const url = e.target.result;
      const mediaElement = createMediaElement(file, url);
      previewContainer.appendChild(mediaElement);
    };

    reader.readAsDataURL(file);
  }
});

document
  .getElementById("mediaFiles")
  .addEventListener("change", async function (event) {
    const files = event.target.files;
    const totalFiles = files.length;

    previewContainer.innerHTML = "";

    for (let i = 0; i < Math.min(totalFiles, maxPreviews); i++) {
      const file = files[i];
      try {
        const url = await readFileAsDataURL(file);
        const mediaElement = createMediaElement(file, url);
        previewContainer.appendChild(mediaElement);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }

    if (totalFiles > maxPreviews) {
      const remainingCount = totalFiles - maxPreviews;

      const showMoreOverlay = document.createElement("div");
      showMoreOverlay.classList.add("show-more-overlay");
      showMoreOverlay.textContent = `+${remainingCount}`;

      const lastMediaItem = previewContainer.lastElementChild;
      lastMediaItem.appendChild(showMoreOverlay);
    }
  });

//  files.forEach((file) => {
//   if (!allSelectedFiles.some((existingFile) => existingFile.name === file.name && existingFile.lastModified === file.lastModified)) {
//     allSelectedFiles.push(file);
//   }
// });

///

let previewContainer = null;

function CreatePostSection() {
  document.querySelector(".pop-section2").innerHTML = `
    <div class="create-post">
      <button
        class="d-none close"
        data-bs-toggle="modal"
        data-bs-target="#create-post"
      ></button>

      <div
        class="modal fade"
        id="create-post"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >

        <!-- modal-dialog-scrollable -->
        <div class="modal-dialog modal-dialog-centered">

          <div class="modal-content">

            <div class="modal-header">
              <h4 class="modal-title">Create Post</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">

              <div class="mb-3 d-flex align-items-center">

                <div class="image me-3">
                  <img
                    class="rounded-circle border border-primary"
                    src="${GetImage(
                      currentUser.obj.imagePath
                    )}" decoding="async" alt="../imgs/unknown.png"
                  />
                </div>

                <h5 class="mb-0">${currentUser.obj.name}</h5>
              </div>

              <textarea class="w-100 fs-5 border-0" rows="11"
                    placeholder="Say something about this..."
                    
              ></textarea>

              <div class="previewContainer" role='button'></div>

              <div class="mt-3 upload-media text-center">
                <button class="btn btn-primary">Upload Media</button>
                <input class="d-none" type="file" multiple accept="image/*,video/*" />
              </div>

            </div>

            <div class="modal-footer">
              <button type="button" class="post-btn btn btn-primary w-100 fs-5 disabled"
                      onclick="window.AddPost()"
              >
                Post
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    `;

  let postInput = document.querySelector(".create-post textarea");

  postInput.addEventListener("keyup", EnablePostBtn);

  previewContainer = document.querySelector(".create-post .previewContainer");

  previewContainer.addEventListener("click", CreatePostMediaSection);

  let uploadButton = document.querySelector(
    ".create-post .upload-media button"
  );

  let fileInput = document.querySelector(
    ".create-post .upload-media input[type='file']"
  );

  uploadButton.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", async (e) => await SetMedia(e));

  let clostBtn = document.querySelector(
    ".create-post .modal-header .btn-close"
  );

  console.log(clostBtn);
  clostBtn.addEventListener("click", (_) => {
    document.querySelector(`.pop-section2 .create-post`).remove();
  });
}

function EnablePostBtn() {
  let postInput = document.querySelector(".create-post textarea");
  let postBtn = document.querySelector(".create-post .post-btn");

  let enable = postInput.value.trim() != "" || allSelectedFiles.length != 0;

  enable
    ? postBtn.classList.remove("disabled")
    : postBtn.classList.add("disabled");
}

let allSelectedFiles = [];

async function SetMedia(e) {
  const files = Object.values(e.target.files).filter((f) => {
    return f.type.startsWith("image/") || f.type.startsWith("video/");
  });

  e.target.value = "";

  if (files.length == 0) return;

  ShowLoadingSection();

  allSelectedFiles.push(...files);

  //  files.forEach((file) => {
  //   if (!allSelectedFiles.some((existingFile) => existingFile.name === file.name && existingFile.lastModified === file.lastModified)) {
  //     allSelectedFiles.push(file);
  //   }
  // });

  await RenderMediaPreview();

  EnablePostBtn();

  RemoveLoadingSection();
}

async function RenderMediaPreview() {
  const maxPreviews = 4;

  previewContainer.innerHTML = "";

  const totalFiles = allSelectedFiles.length;

  for (let i = 0; i < Math.min(totalFiles, maxPreviews); i++) {
    const file = allSelectedFiles[i];
    const url = await readFileAsDataURL(file);
    const mediaElement = createMediaElement(file, url);
    mediaElement.classList.add("preview-item");

    previewContainer.appendChild(mediaElement);
  }

  if (totalFiles > maxPreviews) {
    const remainingCount = totalFiles - maxPreviews;

    const showMoreOverlay = document.createElement("div");
    showMoreOverlay.classList.add("item-overlay");
    showMoreOverlay.textContent = `+${remainingCount}`;

    const lastMediaItem = previewContainer.lastElementChild;
    lastMediaItem.appendChild(showMoreOverlay);
  }
}

function createMediaElement(file, url) {
  const mediaItem = document.createElement("div");

  if (file.type.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = url;
    mediaItem.appendChild(img);
  } else if (file.type.startsWith("video/")) {
    const video = document.createElement("video");
    video.src = url;
    // video.controls = true;
    mediaItem.appendChild(video);
  }

  return mediaItem;
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      resolve(e.target.result);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function CreatePostMediaSection() {
  ShowLoadingSection();

  document.querySelector(".pop-section").innerHTML += `
  <div class="post-media position-fixed top-0 w-100 h-100">
    <div class="overlay position-absolute w-100 h-100"></div>

    <div
      class="container position-absolute top-50 start-50 translate-middle border border-3 p-0 bg-white rounded-3"
    >
      <div class="d-flex align-items-center p-2">
        <h4 class="modal-title flex-grow-1 text-center">Photos / Videos</h4>
        <button type="button" class="btn-close"  
                onclick="RemoveSection(event,'.post-media')">
        </button>
      </div>

      <div class="content"></div>
    </div>
  </div>
  `;

  RenderMediaItems();

  RemoveLoadingSection();
}

function RenderMediaItems() {
  const postMediaContent = document.querySelector(".post-media .content");

  postMediaContent.innerHTML = "";

  allSelectedFiles.forEach(async (file, index) => {
    const url = await readFileAsDataURL(file);

    const mediaElement = createMediaElement(file, url);

    mediaElement.classList.add("media-item");

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-media-button", "btn-close");

    mediaElement.appendChild(removeButton);

    postMediaContent.appendChild(mediaElement);

    removeButton.addEventListener("click", () => removeMediaElement(index));
  });
}

function removeMediaElement(index) {
  ShowLoadingSection();

  allSelectedFiles.splice(index, 1);

  RenderMediaItems();

  RenderMediaPreview();

  EnablePostBtn();

  RemoveLoadingSection();
}

async function uploadMedia() {
  const cloudName = "dw91ky7d4";
  const uploadPreset = "n4wm4jwm";
  const folderName = "blog/Media";
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  let uploadedMediaUrls = [];

  for (const file of allSelectedFiles) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", folderName);

    const result = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (result.ok) {
      let data = await result.json();

      // console.log("Image successfully uploaded:", data.secure_url);

      // uploadedMediaUrls.push(data.secure_url);

      uploadedMediaUrls.push({
        path: data.secure_url, // Cloudinary URL
        type: file.type.startsWith("image/") ? "image" : "video",
      });
    } else {
      console.error("Error uploading image:", result.statusText);
    }
  }

  return uploadedMediaUrls;
}

window.AddPost = async function () {
  ShowLoadingSection();

  let postInput = document.querySelector(".create-post textarea");

  let text = postInput.value.trim();

  text = text == "" ? null : text;

  let mediaList = await uploadMedia();

  let postRequest = {
    text: text,
    media: mediaList,
  };

  let response = await Post.AddPost(postRequest);

  if (!response.valid) {
    ShowMessage("Error", response.error);

    RemoveLoadingSection();

    return;
  }

  await LoadPosts();

  let closeBtn = document.querySelector(".create-post button.close");

  closeBtn.click();

  RemoveLoadingSection();
};

//

window.ClickEditPost = async function (postId) {
  ShowLoadingSection();

  await EditPostSection(postId);

  let toggleModelBtn = document.querySelector(".edit-post button");

  toggleModelBtn.click();

  RemoveLoadingSection();
};

async function EditPostSection(postId) {
  // let post = await Post.getPost(postId);+
  // let text = post.obj.text != null ? post.obj.text : "";
  // let originalPostId = post.obj.originalPostId;

  let post = GetPost(postId);

  console.log(post.media);

  let text = post.text != null ? post.text : "";

  document.querySelector(".pop-section").innerHTML = `
    <div class="edit-post">
      <button
        class="d-none close"
        data-bs-toggle="modal"
        data-bs-target="#create-post"
      ></button>

      <div
        class="modal fade"
        id="create-post"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >

        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <div class="modal-header">

              <h4 class="modal-title">Edit Post</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

            </div>

            <div class="modal-body">

              <div class="mb-3 d-flex align-items-center">

                <div class="image me-3">
                  <img
                    class="rounded-circle border border-primary"
                    src="${GetImage(
                      currentUser.obj.imagePath
                    )}" decoding="async" alt="../imgs/unknown.png"
                  />
                </div>

                <h5 class="mb-0">${currentUser.obj.name}</h5>

              </div>

              <textarea
                class="w-100 fs-5 border-0"
                rows="11"
                placeholder="Say something about this..."
              >${text}</textarea>

              <div class="previewContainer" role='button'></div>

              <div class="mt-3 upload-media text-center">
                <button class="btn btn-primary">Upload Media</button>
                <input class="d-none" type="file" multiple accept="image/*,video/*" />
              </div>

            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary w-100 fs-5"
                onclick="window.EditPost(${postId})"
              >
                Post
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    `;

  let postInput = document.querySelector(".edit-post textarea");
  let postBtn = document.querySelector(".edit-post .modal-footer button");

  let uploadButton = document.querySelector(".edit-post .upload-media button");

  let fileInput = document.querySelector(
    ".edit-post .upload-media input[type='file']"
  );

  uploadButton.addEventListener("click", () => {
    fileInput.click();
  });

  // fileInput.addEventListener("change", async (e) => await SetMedia(e));

  // let originalPostId = post.originalPostId;
  // if (originalPostId == null) {
  //   EnablePostBtn(postBtn, postInput.value.trim() != "");

  //   postInput.addEventListener("keyup", (e) => {
  //     InsertText(e, ".edit-post .modal-footer button");
  //   });
  // }
}

window.EditPost = async function (postId) {
  ShowLoadingSection();

  let postInput = document.querySelector(".edit-post textarea");

  let text = postInput.value.trim();

  text = text == "" ? null : text;

  let response = await Post.EditPost(postId, text);

  if (!response.valid) {
    ShowMessage("Error", response.error);

    RemoveLoadingSection();

    return;
  }

  await window.RefreshPosts();

  let closeBtn = document.querySelector(".edit-post button.close");

  closeBtn.click();

  RemoveLoadingSection();
};

//

async function EditPostSection(postId) {
  // let post = await Post.getPost(postId);+
  // let text = post.obj.text != null ? post.obj.text : "";
  // let originalPostId = post.obj.originalPostId;

  let post = GetPost(postId);

  let text = post.text != null ? post.text : "";

  console.log(MediaList);

  MediaList.push(...post.media);

  //
  document.querySelector(".pop-section").innerHTML = `
    <div class="edit-post">
      <button
        class="d-none close"
        data-bs-toggle="modal"
        data-bs-target="#create-post"
      ></button>

      <div
        class="modal fade"
        id="create-post"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >

        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <div class="modal-header">

              <h4 class="modal-title">Edit Post</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

            </div>

            <div class="modal-body">

              <div class="mb-3 d-flex align-items-center">

                <div class="image me-3">
                  <img
                    class="rounded-circle border border-primary"
                    src="${GetImage(
                      currentUser.obj.imagePath
                    )}" decoding="async" alt="../imgs/unknown.png"
                  />
                </div>

                <h5 class="mb-0">${currentUser.obj.name}</h5>

              </div>

              <textarea
                class="w-100 fs-5 border-0"
                rows="11"
                placeholder="Say something about this..."
              >${text}</textarea>

              <div class="previewContainer" role='button'></div>

              <div class="mt-3 upload-media text-center">
                <button class="btn btn-primary">Upload Media</button>
                <input class="d-none" type="file" multiple accept="image/*,video/*" />
              </div>

            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="post-btn btn btn-primary w-100 fs-5"
                onclick="window.EditPost(${postId})"
              >
                Post
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    `;

  let postInput = document.querySelector(".edit-post textarea");

  postInput.addEventListener("keyup", EnableCreatePostBtn);

  previewContainer = document.querySelector(".edit-post .previewContainer");

  previewContainer.addEventListener("click", CreatePostMediaSection2);

  let uploadButton = document.querySelector(".edit-post .upload-media button");

  let fileInput = document.querySelector(
    ".edit-post .upload-media input[type='file']"
  );

  uploadButton.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", async (e) => await SetMedia(e));

  await RenderMediaPreview(); //

  let clostBtn = document.querySelector(".edit-post .modal-header .btn-close");

  clostBtn.addEventListener("click", (_) => {
    document.querySelector(`.pop-section .edit-post`).remove();
    SelectedFiles = [];
    MediaList = [];
  });
}

window.EditPost = async function (postId) {
  ShowLoadingSection();

  let postInput = document.querySelector(".edit-post textarea");

  let text = postInput.value.trim();

  text = text == "" ? null : text;

  await uploadMedia();

  // console.log(MediaList);

  let postRequest = {
    id: postId,
    text: text,
    media: MediaList,
  };

  let response = await Post.EditPost(postRequest);

  if (!response.valid) {
    ShowMessage("Error", response.error);

    RemoveLoadingSection();

    return;
  }

  await window.RefreshPosts();

  let closeBtn = document.querySelector(".edit-post .modal-header .btn-close");

  closeBtn.click();

  RemoveLoadingSection();
};

//

window.CreatePostSection = function () {
  document.querySelector(".pop-section").innerHTML = `
    <div class="create-post">
      <button
        class="d-none close"
        data-bs-toggle="modal"
        data-bs-target="#create-post"
      ></button>

      <div
        class="modal fade"
        id="create-post"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >

        <!-- modal-dialog-scrollable -->
        <div class="modal-dialog modal-dialog-centered">

          <div class="modal-content">

            <div class="modal-header">
              <h4 class="modal-title">Create Post</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">

              <div class="mb-3 d-flex align-items-center">

                <div class="image me-3">
                  <img
                    class="rounded-circle border border-primary"
                    src="${GetImage(
                      currentUser.obj.imagePath
                    )}" decoding="async" alt="../imgs/unknown.png"
                  />
                </div>

                <h5 class="mb-0">${currentUser.obj.name}</h5>
              </div>

              <textarea class="w-100 fs-5 border-0" rows="11"
                    placeholder="Say something about this..."
                    
              ></textarea>

              <div class="previewContainer" role='button'></div>

              <div class="mt-3 upload-media text-center">
                <button class="btn btn-primary">Upload Media</button>
                <input class="d-none" type="file" multiple accept="image/*,video/*" />
              </div>

            </div>

            <div class="modal-footer">
              <button type="button" class="post-btn btn btn-primary w-100 fs-5 disabled"
                      onclick="window.AddPost()"
              >
                Post
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    `;

  let postInput = document.querySelector(".create-post textarea");

  postInput.addEventListener("keyup", EnableCreatePostBtn);

  previewContainer = document.querySelector(".create-post .previewContainer");

  previewContainer.addEventListener("click", CreatePostMediaSection2);

  let uploadButton = document.querySelector(
    ".create-post .upload-media button"
  );

  let fileInput = document.querySelector(
    ".create-post .upload-media input[type='file']"
  );

  uploadButton.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", async (e) => await SetMedia(e));

  let clostBtn = document.querySelector(
    ".create-post .modal-header .btn-close"
  );

  clostBtn.addEventListener("click", (_) => {
    document.querySelector(`.pop-section .create-post`).remove();
    SelectedFiles = [];
    MediaList = [];
  });
};

function EnableCreatePostBtn() {
  let postInput = document.querySelector(".pop-section textarea");
  let postBtn = document.querySelector(".pop-section .post-btn");

  let enable = postInput.value.trim() != "" || MediaList.length != 0;

  enable
    ? postBtn.classList.remove("disabled")
    : postBtn.classList.add("disabled");
}

async function EditPostSection(postId) {
  // let post = await Post.getPost(postId);+
  // let text = post.obj.text != null ? post.obj.text : "";
  // let originalPostId = post.obj.originalPostId;

  let post = GetPost(postId);

  let text = post.text != null ? post.text : "";

  console.log(MediaList);

  MediaList.push(...post.media);

  document.querySelector(".pop-section").innerHTML = `
    <div class="edit-post">
      <button
        class="d-none close"
        data-bs-toggle="modal"
        data-bs-target="#create-post"
      ></button>

      <div
        class="modal fade"
        id="create-post"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >

        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <div class="modal-header">

              <h4 class="modal-title">Edit Post</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

            </div>

            <div class="modal-body">

              <div class="mb-3 d-flex align-items-center">

                <div class="image me-3">
                  <img
                    class="rounded-circle border border-primary"
                    src="${GetImage(
                      currentUser.obj.imagePath
                    )}" decoding="async" alt="../imgs/unknown.png"
                  />
                </div>

                <h5 class="mb-0">${currentUser.obj.name}</h5>

              </div>

              <textarea
                class="w-100 fs-5 border-0"
                rows="11"
                placeholder="Say something about this..."
              >${text}</textarea>

              <div class="previewContainer" role='button'></div>

              <div class="mt-3 upload-media text-center">
                <button class="btn btn-primary">Upload Media</button>
                <input class="d-none" type="file" multiple accept="image/*,video/*" />
              </div>

            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="post-btn btn btn-primary w-100 fs-5"
                onclick="window.EditPost(${postId})"
              >
                Post
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    `;

  let postInput = document.querySelector(".edit-post textarea");

  postInput.addEventListener("keyup", EnableCreatePostBtn);

  previewContainer = document.querySelector(".edit-post .previewContainer");

  previewContainer.addEventListener("click", CreatePostMediaSection2);

  let uploadButton = document.querySelector(".edit-post .upload-media button");

  let fileInput = document.querySelector(
    ".edit-post .upload-media input[type='file']"
  );

  uploadButton.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", async (e) => await SetMedia(e));

  await RenderMediaPreview();

  let clostBtn = document.querySelector(".edit-post .modal-header .btn-close");

  clostBtn.addEventListener("click", (_) => {
    document.querySelector(`.pop-section .edit-post`).remove();
    SelectedFiles = [];
    MediaList = [];
  });
}

//

`
      <div class="edit-user position-fixed top-0 w-100 h-100">

        <div class="overlay position-absolute w-100 h-100"></div>
      
        <div class="container py-4 text-center position-absolute 
              top-50 start-50 translate-middle border border-3 bg-white rounded-3"
        >

          <div class="image">
            <img alt="" class="rounded-5" decoding="async" alt="../imgs/unknown.png" />
          </div>

          <p class="mt-3 mb-2">
            <a
              class="link-danger link-offset-2 link-offset-3-hover 
              link-underline link-underline-opacity-0 
              link-underline-opacity-75-hover"
              href="#"
            >
              Remove Image
            </a>
          </p>

          <div class="my-4 upload-image">
            <button class="btn btn-primary">Upload Image</button>
            <input class="form-control d-none" type="file" accept="image/*" />
          </div>

          <div class="input-group input-group-lg">
            <span class="input-group-text">Name</span>
            <input type="text" class="form-control"required maxlength="17" value="${currentUser.obj.name}" />
          </div>

          <div class="form-floating my-4">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              value=${currentUser.obj.email}
              disabled
            />
            <label for="floatingInput" class="form-label">Email address</label>
          </div>

          <div class="d-flex gap-3">
            <button class="btn btn-primary flex-fill" onclick="RemoveSection(event ,'.edit-user')">Close</button>
            <button class="btn btn-primary flex-fill" onclick="SaveEditProfile('.edit-user')">Save</button>
          </div>

        </div>

      </div>
  `;

//

`
    <div class="change-password position-fixed top-0 w-100 h-100">

      <div class="overlay position-absolute w-100 h-100"></div>

      <div
        class="container p-4 position-absolute top-50 start-50 translate-middle border border-3 bg-white rounded-3"
      >

          <h3 class="text-center text-primary fw-bolder mb-5">
            Change Your Password
          </h3>

          <div>
            <label for="cp" class="form-label fs-5">Current Password :</label>
            
            <input
              oninput="this.value = this.value.trim()"
              id="cp"
              type="password"
              class="form-control"
              aria-describedby="emailHelp"
              maxlength="13"
              />

            <div class="form-text text-danger mt-2 ">At Least 7 Char</div>
            
          </div>

          <div class="my-4">
            <label for="np" class="form-label fs-5">New Password :</label>

            <input
              oninput="this.value = this.value.trim()"
              class="form-control"
              id="np"             
              type="password"
              maxlength="13"
            />

            <div class="form-text text-danger mt-2 ">At Least 7 Char</div>

          </div>

          <div class="d-flex gap-3">

            <button class="close btn btn-primary flex-fill"
              onclick="RemoveSection(event,'.change-password')">
                Close
            </button>

            <button class="change btn btn-primary flex-fill disabled"
              onclick="ChangePassword(event)">
                Change
            </button>
          </div>

      </div>

    </div>
  
  `;

//

this.obj.countLikes += 1;
this.obj.isLiked = true;

this.obj.countLikes -= 1;
this.obj.isLiked = false;

this.obj.countComments -= 1;

this.obj.countComments += 1;

///

export function CreateModal() {
  let modal = `
    <div class="modal message-modal">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Errors</h4>
          <button
            type="button"
            class="btn-close shadow-none"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <div class="modal-body">
          <h4></h4>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
    `;

  document.body.innerHTML += modal;
}

export function ShowMessage(header, message) {
  const modalElement = document.querySelector(".message-modal");

  const modalTitleElement = modalElement.querySelector(".modal-header h4");
  modalTitleElement.textContent = header;

  const modalBodyElement = modalElement.querySelector(".modal-body h4");
  modalBodyElement.textContent = message;

  const myModal = new bootstrap.Modal(modalElement);

  myModal.show();
}

export function sortPostsByLikes(list) {
  list = sortPostsByDate(list);
  return list.sort((a, b) => b.countLikes - a.countLikes);
}

export function sortPostsByDate(list, property = "createdAt") {
  return list.sort((a, b) => new Date(b[property]) - new Date(a[property]));
}

function GetPost(postId) {
  return Post.posts.find(function (post) {
    return post.id == postId;
  });
}