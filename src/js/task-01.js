
let categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);

categories.forEach( item => { 
    console.log("Category: ", item.children[0].textContent)
    console.log("Elements: ", item.lastElementChild.children.length)
});







