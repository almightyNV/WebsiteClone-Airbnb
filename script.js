function move() {
    let elem = document.getElementsByClassName("filterright");
    let ele = document.getElementsByClassName("move");

    if (elem[0].style.backgroundColor != "black") {
        elem[0].style.backgroundColor = "black";
        ele[0].style.marginLeft = "18px";
    } else {
        elem[0].style.backgroundColor = "rgb(204, 204, 204)";
        ele[0].style.marginLeft = "2px";
    }
}