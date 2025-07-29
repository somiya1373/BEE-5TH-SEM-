
//...............................................................................................................


// accessing dom elements

/*  1) using id
    2) using class 
    3) using tag
    4) using query selector or querySelectorAll */

    // let el1 = document.getElementById("heading");
    // console.log(el1);

    // let el2 = document.getElementsByClassName("item");
    // console.log(el2[0]); // returns first element with class item

    // let el3 = document.getElementsByTagName("p");
    // console.log(el3[0]); // returns first paragraph element 
 

    let el4 = document.querySelector("p");    // id(#), classname (.) , tagname(full tagline) can pass all.  {it will give only first element}
    // let el5 = document.querySelector(".item"); // returns all elements with class item
    let el6 = document.querySelectorAll(".item"); // returns all elements with class item
//     console.log(el4); // returns element with class item
//     console.log(el5); // returns element with class item
//     console.log(el6); // returns all elements with class item
//     let ul = document.querySelector("#container"); 


//     // properties 
//     /*  ALL THREE ARE GETTER SETTERS
//     1) innerText - returns text content of the element, excluding HTML tags
//     2) innerHTML - returns HTML content of the element, including HTML tags
//     3) textContent - returns text content of the element, including HTML tags
//      */

// let data = el4.innerText;  // it is getter
// console.log(data);
// el4.innerText = " change using js"; // it is setter

// let data2 = ul.innerHTML;
// console.log(data2);

// let data3 = ul.innerText;
// console.log(data3);

// let data4 = ul.textContent; 
// console.log(data4);


// // ul.innerHTML = "<li>item 9</li><li>item 8</li><li>item 6</li>"; // it will add li elements to ul. {single line html}
// ul.innerHTML = `<li>item 19</li>
// <li>item 18</li>
// <li>item 16</li>`; // it will add li elements to ul. {multi line html}




/* 
    1) getAttribute() - get the information of the specified attribute
    2) setAttribute() - sets the value of the specified attribute
    3) classList - returns the class list of the element

*/

// console.log(el5);
// console.dir(el5);
let el5 = document.querySelector(".item");
console.dir(el5);
// console.dir(el5.getAttribute("id")); // object format of the element
// console.log(el5.getAttribute("class")); // returns the value of the class attribute
// el5.setAttribute("id", "js"); // sets the value of the id attribute
// console.log(el5.getAttribute("id"));
el5.classList.add("delete");
console.log(el5.classList.contains("delete")); // checks if the class list contains the class item(delete)
console.log(el5.classList)



/* Element.addEventListener("click", function() {
    console.log("element clicked");
}); */

















// //accessig dom element
// //1.using id
// //2.using class
// //3.using tag
// // //4.querySelector/query
// // let e11=document.getElementById("heading");
// // console.log(e11)
// // let e12=document.getElementsByClassName("item");
// // console.log(e12[0])
// // let e13=document.getElementsByTagName("p");
// // console.log(e13)
// let e14=document.querySelector("p");
// let e15=document.querySelector(".item");
// let e16=document.querySelectorAll(".item");
// let ul=document.querySelectorAll("#container");
// console.log(e14);
// console.log(e15);
// console.log(e16);

// //properties
// // inner Text
// // inner html
// // textcontent

// let data=e14.innerText;
// console.log(data)
// e14.innerText="changed using js"
// let data2=ul.innerHTML;
// console.log(data2);


// ul.innerHTML=`       <li class="item">Item 4</li>
//         <li class="item">Item 5</li>
//         <li class="item">Item 6</li>`

//         //
