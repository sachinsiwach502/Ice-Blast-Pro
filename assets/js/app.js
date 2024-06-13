// nav bar----------------
let body = document.body;
let menuIcon = document.querySelector(".menuIcon");
let menuList = document.querySelector(".menuBar");
let line_1 = document.querySelector(".first-line")
let line_2 = document.querySelector(".sec-line");
let line_3 = document.querySelector(".third-line");

function cross() {
    line_2.classList.add("d-none");
    // line_1.classList.add("transform-origin-center-center");
    line_1.classList.add("position-relative");
    line_1.style.top = "12px";
    line_1.style.left = "2px";
    line_1.style.transform = "rotate(45deg)"
    line_3.classList.add("position-relative");
    line_3.style.top = "-12px";
    line_3.style.transform = "rotate(-45deg)";
    line_1.classList.add("transition");
    line_3.classList.add("transition");

}
function line() {
    line_2.classList.remove("d-none");
    line_1.classList.remove("position-relative");
    line_1.style.transform = "rotate(0deg)"
    line_3.classList.remove("position-relative");
    line_3.style.transform = "rotate(0deg)";
}


// add show class in nav links--------------
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    if (menuList.classList.contains("show")) {
        cross();
        body.style.overflow = "hidden";
    } else {
        line();
        body.style.overflow = "auto";
    }
});

// still unscure accordian===============================
  

document.querySelectorAll(".acc_itm").forEach((itm) => {
    let pluIcon = itm.querySelector(".plus_icon");
    let minuIcon = itm.querySelector(".minus_icon");
    let hiddenTxt = itm.querySelector(".hidden_txt");
    let accHead = itm.querySelector(".click_part");
    let heading = itm.querySelector(".acc_heading");

    accHead.addEventListener("click", () => {
        document.querySelectorAll(".acc_itm").forEach((otherItm) => {
            if (otherItm !== itm) {
                let otherPluIcon = otherItm.querySelector(".plus_icon");
                let otherMinuIcon = otherItm.querySelector(".minus_icon");
                let otherHiddenTxt = otherItm.querySelector(".hidden_txt");
                let otherheading = otherItm.querySelector(".acc_heading");

                otherMinuIcon.style.display = "none";
                otherPluIcon.style.display = "block";
                otherHiddenTxt.style.display = "none";
                otherItm.style.backgroundColor = "white";
                otherheading.style.color = "black";
            }
        });

        let texDisplay = window.getComputedStyle(hiddenTxt).display;
        if (texDisplay === "none") {
            minuIcon.style.display = "block";
            pluIcon.style.display = "none";
            hiddenTxt.style.display = "block";
            itm.style.backgroundColor = "black";
            hiddenTxt.style.color = "white"
            heading.style.color = "white"
        } else {
            minuIcon.style.display = "none";
            pluIcon.style.display = "block";
            hiddenTxt.style.display = "none";
            itm.style.backgroundColor = "white";
            heading.style.color = "black";
        }
    });
});

