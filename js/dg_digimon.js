window.onload = function() {
    const columns = document.querySelectorAll(".column");

    /*카드 메뉴 옵션들*/
    var partner_attr = {
        0: "<span class='filter_title'>" +
                "<h5>진화 단계</h5>" + 
            "</span>" +
            "<ul class='partner_filter'>" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute1'>" +
                        "<p>유 년 기</p>"+
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute2'>" +
                        "<p>성 장 기</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute3'>" +
                        "<p>성 숙 기</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute4'>" +
                        "<p>완 전 체</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute5'>" +
                        "<p>궁 극 체</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column1_attribute6'>" +
                        "<p>초궁극체</p>" +
                    "</label>" +
                "</li>" +
                "<hr>"+
            "</ul>",

        1: "<span class='filter_title'>" +
                "<h5>속성</h5>" + 
            "</span>" +
            "<ul class='partner_filter'>" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column2_attribute1'>" +
                        "<p>백 신</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column2_attribute2'>" +
                        "<p>바이러스</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column2_attribute3'>" +
                        "<p>데 이 터</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column2_attribute4'>" +
                        "<p>불 명</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column2_attribute5'>" +
                        "<p>무 속 성</p>" +
                    "</label>" +
                "</li>" +
                "<hr>"+
            "</ul>",

        2: "<span class='filter_title'>" +
                "<h5>원소</h5>" + 
            "</span>" +
            "<ul class='partner_filter'>" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute1'>" +
                        "<p>불</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute2'>" +
                        "<p>바 람</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute3'>" +
                        "<p>땅</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute4'>" +
                        "<p>전 기</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute5'>" +
                        "<p>금 속</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute6'>" +
                        "<p>빛</p>" +
                    "</label>" +
                "</li>" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute7'>" +
                        "<p>어 둠</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute8'>" +
                        "<p>얼 음</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute9'>" +
                        "<p>나 무</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute10'>" +
                        "<p>물</p>" +
                    "</label>" +
                "</li>" +
                "<li>" +
                    "<label>" +
                        "<input type='checkbox' id='column3_attribute11'>" +
                        "<p>노 멀</p>" +
                    "</label>" +
                "</li>" +
                "<hr>"+
            "</ul>",

        3: "<span class='char_filter_title filter_title'>"+"<h5>특성</h5>"+"</span>" +
            "<ul class='char partner_filter'>" +
                "<li>" +
                    "<h6>특수</h6>" +
                    "<ul class='dmg'>" +
                        "<hr>"+
                        "<li>" +
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-1'>" +
                                "<p>더블어택</p>" +
                            "</label>" +
                        "</li>" +
                        "<li>" +
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-2'>" +
                                "<p>리커버리</p>" +
                            "</label>" +
                        "</li>" +
                        "<li>" +
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-3'>" +
                                "<p>일 격</p>" +
                            "</label>" +
                        "</li>" +
                        "<li>" +
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-4'>" +
                                "<p>신 궁</p>" +
                            "</label>" +    
                        "</li>" +
                        "<li>" +
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-5'>" +
                                "<p>증 폭</p>" +
                            "</label>" +
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
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-4'>" +
                                "<p>질 풍</p>" +    
                            "</label>" +
                        "</li>" +
                        "<li>" +
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-4'>" +
                                "<p>투 신</p>" +                
                            "</label>" +
                        "</li>" +
                        "<li>" +
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-4'>" +
                                "<p>전 신</p>" +       
                            "</label>" +
                        "</li>" +
                        "<li>" +
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-4'>" +
                                "<p>태 풍</p>" +
                            "</label>" +
                        "</li>" +
                        "<li>" +
                            "<label>" +
                               "<input type='checkbox' id='column4_attribute1-4'>" +
                                "<p>폭 풍</p>" + 
                            "</label>" +
                        "</li>" +
                        "<hr>"+
                        "<li>" +
                            "<label>" +
                               "<input type='checkbox' id='column4_attribute1-4'>" +
                                "<p>폭 풍</p>" +
                            "</label>" +
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
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-4'>" +
                                "<p>폭 풍</p>" +
                            "</label>" +
                        "</li>" +
                        "<li>" +
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-4'>" +
                                "<p>폭 풍</p>" +
                            "</label>" +
                        "</li>" +
                        "<li>" +
                            "<label>" +
                                "<input type='checkbox' id='column4_attribute1-4'>" +
                                "<p>폭 풍</p>" +
                            "</label>" +
                        "</li>" +
                        "<hr>"+
                    "</ul>"+
                "</li>" +
            "</ul>"
    };

    var enemy_attr = {
        0: "<span class='filter_title'>" +
                "<h5>등급</h5>" + 
            "</span>" +
            "<ul class='enemy_filter'>" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                        "<select>"+
                            "<option>전체</option>"+
                            "<option>비기너</option>"+
                            "<option>베테랑</option>"+
                            "<option>엘리트</option>"+
                            "<option>레전드</option>"+
                            "<option>은관</option>"+
                            "<option>금관</option>"+
                        "</select>" +
                    "</label>" +
                "</li>" +
                "<hr>"+
            "</ul>",

        1: "<span class='filter_title'>" +
                "<h5>레벨 설정</h5>" + 
            "</span>" +
            "<ul class='enemy_filter'>" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                        "<input type='text' id='column1_attribute1' default='1'>" +
                        "~"+
                        "<input type='text' id='column1_attribute1' default='130'>" +
                    "</label>" +
                "</li>" +
                "<hr>"+
            "</ul>",

        2: "<span class='filter_title'>" +
                "<h5>출현 지역</h5>" + 
            "</span>" +
            "<ul class='enemy_filter'>" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                       "<select>"+
                            "<option>전체</option>"+
                            "<option>디지털행정국</option>"+
                            "<option>놀이공원</option>"+
                            "<option>개굴몬마을</option>"+
                            "<option>시간마을</option>"+
                            "<option>머드프리지몬마을</option>"+
                            "<option>할매몬마을</option>"+
                            "<option>암흑던전</option>"+
                            "<option>하늘던전</option>"+
                        "</select>" +
                "</li>" +
                "<hr>"+
            "</ul>",

        3: "<span class='filter_title'>" +
                "<h5>드랍 아이템</h5>" + 
            "</span>" +
            "<ul class='enemy_filter'>" +
                "<hr>"+
                "<li>" +
                    "<label>" +
                        "<input type='text' id='column1_attribute1' default='1'>" +
                        "~"+
                        "<input type='text' id='column1_attribute1' default='130'>" +
                    "</label>" +
                "</li>" +
                "<hr>"+
            "</ul>"
    }


    for (let i = 0; i < columns.length; i++) {
        columns[i].innerHTML = enemy_attr[i];
    }

    const tab_count = document.querySelector(".tab").childElementCount;

    for (let i = 0; i < tab_count; i++) {

        if (i !== 0) {
            document.querySelector(".tab").children[i].classList.add("tab_not_select");
        }

    }


    /*탭(카드/아이템) 클릭 이벤트*/
    const partner_target = document.querySelector(".tab").firstElementChild;
    const enemy_target = document.querySelector(".tab").children[1];



    /** 카드탭 선택 */
    const partner_select = function () {
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


    partner_target.addEventListener("click", partner_select);

    /** 아이템 탭 선택 */
    const enemy_select = function () {
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

    enemy_target.addEventListener("click", enemy_select);

}