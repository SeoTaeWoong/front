window.onload = function () {

    var index = 1;
    var timerId = 0;
    var total = 0;
    var delay = 10000;
    var slide = slide = document.querySelector(".carousel-slide");
    var target_container = document.querySelector(".carousel-container");
    var target_nextBtn = document.querySelector(".next");
    var target_prevBtn = document.querySelector(".prev");
    var first_clone = slide.lastElementChild.cloneNode(true);
    var last_clone = slide.firstElementChild.cloneNode(true);


    //-------------------------------------------------------------------
    //캐러셀
    var carousel = function () {
        carousel_slide()
        timerId = setTimeout(carousel, delay);
    }

    //캐러셀 리셋
    var slide_reset = function () {
        
        if(index === total-1){
            index = 1;
        }else if (index === 0){
            index = total-2;
        }
        slide.style.transition = "transform 0ms";
        slide.style.transform = "translateX(" + (-100*index) + "%)";
    };

    //캐러셀 슬라이드 자동이동
    var carousel_slide = function () {
        index++;
        slide.style.transition = "transform 300ms";
        slide.style.transform = "translateX(" + (-100 * index) + "%)";
        carousel_obj_move();
        if (index === total-1) {
            setTimeout(slide_reset, 300);
        }
    };


    //-----------------------------------------------------------------
    //캐러셀 오브젝트 생성
    var carousel_obj_add = function() {
        var count = total - 2;
        var obj = document.querySelector(".obj");
        for (i = 0; i < count; i++) {
            var span = document.createElement("span");
            var textNode; 
            if (i === 0) {
                textNode = document.createTextNode("●");
                span.appendChild(textNode);
            } else {
                textNode = document.createTextNode("○");
                span.appendChild(textNode);
            }
            obj.append(span);
                
        }
    }

    //캐러셀 오브젝트 변경? 이동?
    var carousel_obj_move = function() {
        for (i = 0; i < total-2; i++) {
            document.querySelector(".obj").children[i].innerHTML = "○";     
            if (i === index-1) {
                document.querySelector(".obj").children[index-1].innerHTML = "●";
            }
        }
        if (index === total-1) {
            document.querySelector(".obj").firstChild.innerHTML = "●";
        }else if(index === 0){
            
            document.querySelector(".obj").lastChild.innerHTML = "●";
        }
    }
    //-----------------------------------------------------------------

    //first, last 클론 복제
    slide.insertBefore(first_clone, slide.firstElementChild);
    slide.appendChild(last_clone);
    total = slide.childElementCount;

    //캐러셀 오브젝트 생성
    carousel_obj_add();

    //캐러셀 화면전환 시작
    timerId = setTimeout(carousel, delay);

    //캐러셀 마우스 오버 - 화면전환 중지
    target_container.addEventListener("mouseover", function () {    
        clearTimeout(timerId);
    })


    //캐러셀 마우스 아웃 - 화면전환 시작
    target_container.addEventListener("mouseout", function () {
         timerId = setTimeout(carousel, delay);
    })

    //캐러셀 next버튼 클릭 이벤트 - 화면이동
    target_nextBtn.addEventListener("click", function () {
        index++;
        slide.style.transition = "transform 300ms";
        slide.style.transform = "translateX(" + (-100 * index) + "%)";
        if (index === total - 1) {
            setTimeout(slide_reset, 300);
        }
        carousel_obj_move();
    });

    //캐러셀 prev버튼 클릭 이벤트 - 화면이동
    target_prevBtn.addEventListener("click", function () {
        index--;
        slide.style.transition = "transform 300ms";
        slide.style.transform = "translateX(" + (-100 * index) + "%)";
        if (index === 0) {
            setTimeout(slide_reset, 300);
        }
        carousel_obj_move();
    });

    
}
