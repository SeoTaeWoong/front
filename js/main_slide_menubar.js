function showSemiMenu(obj, num) {
    var count = obj.children[1].childElementCount;
    obj.children[1].style.height = (count*29.82)+ "px";
    obj.children[1].classList.toggle('act');
}

function hideSemiMenu(obj, num) {
    obj.children[1].classList.remove('act');
    obj.children[1].style.height = "0px";
    //obj.children[1].style.visibility = "hidden";
}