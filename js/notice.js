window.onload = function () {
    var sel_menu = document.querySelector(".sub_menu_all");
    sel_menu.firstElementChild.classList.add("select_menu");

    var current_menu = function () {
        document.querySelector(".select_menu").classList.remove("select_menu");
        this.firstElementChild.classList.add("select_menu");
    }

    const sel_menus = document.querySelectorAll(".sub_menu_all, .sub_menu_update, .sub_menu_notice, .sub_menu_event");
    for (const menu of sel_menus) {
        menu.addEventListener("click", current_menu);
    }
}

