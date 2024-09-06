console.log("hello jii");


document.querySelector(".two > img").addEventListener("mouseover", () => {
    document.querySelector(".two > img").src = "img1.png";
})
document.querySelector(".two > img").addEventListener("mouseout", () => {
    document.querySelector(".two > img").src = "img2.png";
})

document.querySelector(".two1 > img").addEventListener("mouseover", () => {
    document.querySelector(".two1 > img").src = "pizza2-removebg-preview.png";
})
document.querySelector(".two1 > img").addEventListener("mouseout", () => {
    document.querySelector(".two1 > img").src = "pizza1-removebg-preview.png";
})
document.querySelector(".burger").addEventListener("click", () => {

    document.querySelector(".items").style.left = "165px";
    document.querySelector(".items1").style.left = "-200%";
    document.querySelector(".items2").style.left = "-200%";
    document.querySelector(".items3").style.left = "-200%";
    document.querySelector(".items4").style.left = "-200%";
    document.querySelector(".items5").style.left = "-200%";
    document.querySelector(".items6").style.left = "-200%";
   
  })

document.querySelector(".pizz").addEventListener("click", () => {

    document.querySelector(".items1").style.left = "165px";
    document.querySelector(".items").style.left = "-200%";
    document.querySelector(".items2").style.left = "-200%";
    document.querySelector(".items3").style.left = "-200%";
    document.querySelector(".items4").style.left = "-200%";
    document.querySelector(".items5").style.left = "-200%";
    document.querySelector(".items6").style.left = "-200%";
  })


document.querySelector(".pasta").addEventListener("click", () => {

    document.querySelector(".items2").style.left = "165px";
    document.querySelector(".items1").style.left = "-200%";
    document.querySelector(".items").style.left = "-200%";
    document.querySelector(".items3").style.left = "-200%";
    document.querySelector(".items4").style.left = "-200%";
    document.querySelector(".items5").style.left = "-200%";
    document.querySelector(".items6").style.left = "-200%";
 })

 document.querySelector(".fries").addEventListener("click", () => {

    document.querySelector(".items3").style.left = "165px";
    document.querySelector(".items1").style.left = "-200%";
    document.querySelector(".items2").style.left = "-200%";
    document.querySelector(".items").style.left = "-200%";
    document.querySelector(".items4").style.left = "-200%";
    document.querySelector(".items5").style.left = "-200%";
    document.querySelector(".items6").style.left = "-200%";
 })

 document.querySelector(".rolls").addEventListener("click", () => {

    document.querySelector(".items4").style.left = "165px";
    document.querySelector(".items1").style.left = "-200%";
    document.querySelector(".items2").style.left = "-200%";
    document.querySelector(".items3").style.left = "-200%";
    document.querySelector(".items").style.left = "-200%";
    document.querySelector(".items5").style.left = "-200%";
    document.querySelector(".items6").style.left = "-200%";
   
  })

  document.querySelector(".bevrages").addEventListener("click", () => {

    document.querySelector(".items5").style.left = "165px";
    document.querySelector(".items1").style.left = "-200%";
    document.querySelector(".items2").style.left = "-200%";
    document.querySelector(".items3").style.left = "-200%";
    document.querySelector(".items4").style.left = "-200%";
    document.querySelector(".items").style.left = "-200%";
    document.querySelector(".items6").style.left = "-200%";
   
  })

  document.querySelector(".cake").addEventListener("click", () => {

    document.querySelector(".items6").style.left = "165px";
    document.querySelector(".items1").style.left = "-200%";
    document.querySelector(".items2").style.left = "-200%";
    document.querySelector(".items3").style.left = "-200%";
    document.querySelector(".items4").style.left = "-200%";
    document.querySelector(".items5").style.left = "-200%";
    document.querySelector(".items").style.left = "-200%";
   
  })