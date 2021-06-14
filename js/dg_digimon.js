window.onload = function() {
    const columns = document.querySelectorAll(".column");
    console.log(columns);

    /*카드 메뉴 옵션들*/
    var partner_attr = {
        0: "<h5>진화 단계</h5>" +
            "<ul >" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute1'>" +
                        "<span>유년기</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute2'>" +
                        "<span>성장기</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute3'>" +
                        "<span>성숙기</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute4'>" +
                        "<span>완전체</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute5'>" +
                        "<span>궁극체</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute6'>" +
                        "<span>초궁극체</span>" +
                    "</label>" +
                "</li>" +
                "<hr>"+
            "</ul>",

        1: "<h5>속성</h5>" +
            "<ul >" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column2_attribute1'>" +
                        "<span>백신</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column2_attribute2'>" +
                        "<span>바이러스</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column2_attribute3'>" +
                        "<span>데이터</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column2_attribute4'>" +
                        "<span>불명</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column2_attribute5'>" +
                        "<span>무속성</span>" +
                    "</label>" +
                "</li>" +
                "<hr>"+
            "</ul>",

        2: "<h5>원소</h5>" +
            "<ul >" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute1'>" +
                        "<span>불</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute2'>" +
                        "<span>바람</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute3'>" +
                        "<span>땅</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute4'>" +
                        "<span>전기</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute5'>" +
                        "<span>금속</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute6'>" +
                        "<span>빛</span>" +
                    "</label>" +
                "</li>" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute7'>" +
                        "<span>어둠</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute8'>" +
                        "<span>얼음</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute9'>" +
                        "<span>나무</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute10'>" +
                        "<span>물</span>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute11'>" +
                        "<span>노멀</span>" +
                    "</label>" +
                "</li>" +
                "<hr>"+
            "</ul>",

        3: "<h5>특성</h5>" +
            "<ul class='char'>" +
                "<li>" +
                    "<h6>특수</h6>" +
                    "<ul class='dmg'>" +
                        "<hr>"+
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-1'>" +
                            "<span>더블어택</span>" +
                        "</li>" +
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-2'>" +
                            "<span>리커버리</span>" +
                        "</li>" +
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-3'>" +
                            "<span>일격</span>" +
                        "</li>" +
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-4'>" +
                            "<span>신궁</span>" +
                        "</li>" +
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-5'>" +
                            "<span>증폭</span>" +
                        "</li>" +
                        "<hr>"+
                    "</ul>"+
                "</li>" +
                "<hr>"+
                 "<li>" +
                    "<h6>공격</h6>" +
                    "<ul class='dmg'>" +
                        "<hr>"+
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-4'>" +
                            "<span>질풍</span>" +    
                        "</li>" +
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-4'>" +
                            "<span>투신</span>" +                
                        "</li>" +
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-4'>" +
                            "<span>전신</span>" +       
                        "</li>" +
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-4'>" +
                            "<span>태풍</span>" +
                        "</li>" +
                        "<li>" +
                           "<input type='checkbox' id='column4_attribute1-4'>" +
                            "<span>폭풍</span>" + 
                        "</li>" +
                        "<hr>"+
                        "<li>" +
                           "<input type='checkbox' id='column4_attribute1-4'>" +
                            "<span>폭풍</span>" +
                        "</li>" +
                        "<hr>"+
                    "</ul>"+
                "</li>" +
                "<hr>"+
                 "<li>" +
                    "<h6>방어</h6>" +
                    "<ul class='dmg'>" +
                        "<hr>"+
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-4'>" +
                            "<span>폭풍</span>" +
                        "</li>" +
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-4'>" +
                            "<span>폭풍</span>" +
                        "</li>" +
                        "<li>" +
                            "<input type='checkbox' id='column4_attribute1-4'>" +
                            "<span>폭풍</span>" +
                        "</li>" +
                        "<hr>"+
                    "</ul>"+
                "</li>" +
            "</ul>"
    };

    var enemy_attr = {
        0: "<h5>종류</h5>" +
            "<ul >" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column1_attribute1' checked>" +
            "<span> 전체</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column1_attribute2'>" +
            "<span> 장비</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column1_attribute3'>" +
            "<span> 소모품</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column1_attribute4'>" +
            "<span> 진화카드</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column1_attribute5'>" +
            "<span> 칭호</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column1_attribute6'>" +
            "<span> 기타</span>" +
            "</label>" +
            "</li>" +
            "</ul>",

        1: "<h5>옵션1</h5>" +
            "<ul>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column2_attribute1' checked>" +
            "<span> 전체</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column2_attribute2'>" +
            "<span> 공격력</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column2_attribute3'>" +
            "<span> 방어력</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column2_attribute4'>" +
            "<span> 전투등급</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column2_attribute5'>" +
            "<span> HP</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column2_attribute6'>" +
            "<span> VP</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column2_attribute7'>" +
            "<span> EVP</span>" +
            "</label>" +
            "</li>" +
            "</ul>",

        2: "<h5>옵션2</h5>" +
            "<ul >" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column3_attribute1'>" +
            "<span> 힘</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column3_attribute2'>" +
            "<span> 민첩</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column3_attribute3'>" +
            "<span> 건강</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column3_attribute4'>" +
            "<span> 지능</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column3_attribute5'>" +
            "<span> 일반 특성</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column3_attribute6'>" +
            "<span> 전용 특성</span>" +
            "</label>" +
            "</li>" +
            "</ul>",

        3: "<h5>옵션3</h5>" +
            "<ul >" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column4_attribute1'>" +
            "<span> 경험치</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column4_attribute2'>" +
            "<span> 이동속도</span>" +
            "</label>" +
            "</li>" +
            "<li>" +
            "<label>" +
            "<input type='checkbox' id='column4_attribute3'>" +
            "<span> 기타</span>" +
            "</label>" +
            "</li>" +
            "</ul>"
    }


    for (let i = 0; i < columns.length; i++) {
        columns[i].innerHTML = partner_attr[i];
    }

    const tab_count = document.querySelector(".tab").childElementCount;

    for (let i = 0; i < tab_count; i++) {

        if (i !== 0) {
            document.querySelector(".tab").children[i].classList.add("tab_not_select");
        }

    }


    /*탭(카드/아이템) 클릭 이벤트*/
    const card_target = document.querySelector(".tab").firstElementChild;
    const item_target = document.querySelector(".tab").children[1];



    /** 카드탭 선택 */
    const card_select = function () {
        for (let i = 0; i < tab_count - 1; i++) {
            if (i === 0) {
                document.querySelector(".tab").children[i].classList.remove("tab_not_select");
            } else {
                document.querySelector(".tab").children[i].classList.add("tab_not_select");
            }
        }
        for (let i = 0; i < columns.length; i++) {

            columns[i].innerHTML = "";
            console.log(columns[i]);
            columns[i].innerHTML = partner_attr[i];
        }
    };


    card_target.addEventListener("click", card_select);

    /** 아이템 탭 선택 */
    const item_select = function () {
        for (let i = 0; i < tab_count - 1; i++) {
            if (i === 1) {
                document.querySelector(".tab").children[i].classList.remove("tab_not_select");
            } else {
                document.querySelector(".tab").children[i].classList.add("tab_not_select");
            }
        }
        console.log(columns);
        for (let i = 0; i < columns.length; i++) {
            columns[i].innerHTML = "";
            columns[i].innerHTML = enemy_attr[i];
        }
    };

    item_target.addEventListener("click", item_select);

}