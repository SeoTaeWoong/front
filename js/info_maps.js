

window.onload = function(){
    const columns = document.querySelectorAll(".column");
    console.log(columns);

    /*카드 메뉴 옵션들*/
    var card_attr = {
        0:  "<h5>리얼 월드</h5>"+
            "<ul >" +
                "<li>"+
                        "<span>디지털행정국</span>"+
                "</li>"+
                "<li>"+
                        "<span>행정국 서쪽</span>"+
                "</li>"+
                "<li>"+
                        "<span>행정국 남쪽</span>"+
                "</li>"+
                "<hr>"+
                "<li>"+
                        "<span>놀이공원</span>"+
                "</li>" +
                "<li>"+
                        "<span>놀이공원 동쪽</span>"+
                "</li>"+
                "<li>"+
                        "<span>놀이공원 남쪽</span>"+
                "</li>"+
                "<li>"+
                        "<span>놀이공원 북쪽</span>"+
                "</li>" +
                "<hr>"+
                "<li>"+
                        "<span>파크타운</span>"+
                "</li>" +
                "<li>"+
                        "<span>수목원 입구</span>"+
                "</li>"+
                "<li>"+
                        "<span>구불구불 숲</span>"+
                "</li>"+
                "<li>"+
                        "<span>휴식의 숲</span>"+
                "</li>"+
                "<li>"+
                        "<span>배움의 숲</span>"+
                "</li>"+
                "<li>"+
                        "<span>평화의 숲</span>"+
                "</li>"+
                "<hr>"+
                "<li>"+
                        "<span>지하통로 1층</span>"+
                "</li>"+
                "<li>"+
                        "<span>지하통로 2층</span>"+
                "</li>"+
                "<hr>"+
            "</ul>",

        1:  "<h5>디지털 월드</h5>"+
            "<ul>"+
                "<li>"+
                     "<span>개굴몬마을</span>"+
                "</li>"+
                "<li>"+
                     "<span>개굴몬마을 서쪽</span>"+
                "</li>"+
                "<li>"+
                      "<span>개굴몬숲</span>"+
                "</li>"+
                "<li>"+
                     "<span>개굴몬숲 동쪽</span>"+
                "</li>"+
                "<li>"+
                    "<span>개굴몬숲 서쪽</span>"+
                "</li>"+
                "<li>"+
                     "<span>개굴몬숲 호수</span>"+
                "</li>"+
                "<hr>"+
                "<li>"+
                     "<span>시간마을</span>"+
                "</li>"+
                "<li>"+
                     "<span>시간마을 서쪽</span>"+
                "</li>"+
                "<li>"+
                     "<span>톱니월드</span>"+
                "</li>"+
                "<li>"+
                     "<span>톱니월드 동쪽</span>"+
                "</li>"+
                "<li>"+
                     "<span>톱니월드 서쪽</span>"+
                "</li>"+
                "<li>"+
                     "<span>톱니월드 남쪽</span>"+
                "</li>"+
                "<hr>"+
                "<li>"+
                     "<span>머드프리지몬마을</span>"+
                "</li>"+
                "<li>"+
                     "<span>스퀘어월드</span>"+
                "</li>"+
                "<li>"+
                     "<span>스퀘어월드 서쪽</span>"+
                "</li>"+
                "<li>"+
                     "<span>스퀘어월드 남쪽</span>"+
                "</li>"+
                "<li>"+
                     "<span>스퀘어월드 북쪽</span>"+
                "</li>"+
                "<hr>"+
                "<li>"+
                     "<span>할매몬마을</span>"+
                "</li>"+
                "<li>"+
                     "<span>바람계곡</span>"+
                "</li>"+
                "<li>"+
                     "<span>바람계곡 서쪽</span>"+
                "</li>"+
                "<li>"+
                     "<span>바람계곡 남쪽</span>"+
                "</li>"+
                "<li>"+
                     "<span>바람계곡 북쪽</span>"+
                "</li>"+
                "<hr>"+
                "<li>" +
                     "<span>디지몬미궁 1층</span>"+
                "</li>"+
                "<li>"+
                     "<span>디지몬미궁 2층</span>"+
                "</li>"+
                "<li>"+
                     "<span>디지몬미궁 3층</span>"+
                "</li>"+
                "<li>" +
                     "<span>암흑던전 1층</span>"+
                "</li>"+
                "<li>"+
                     "<span>암흑던전 2층</span>"+
                "</li>"+
                "<li>"+
                     "<span>암흑던전 3층</span>"+
                "</li>"+
                "<hr>"+
                "<li>" +
                     "<span>하늘던전 1층</span>"+
                "</li>"+
                "<li>"+
                     "<span>하늘던전 2층</span>"+
                "</li>"+
                "<li>"+
                     "<span>하늘던전 3층</span>"+
                "</li>"+
                "<hr>"+
            "</ul>",

        2:  "<h5>인스턴스 던전</h5>"+
            "<ul >"+
                "<li>" +
                     "<span>로얄베이스</span>"+
                "</li>"+
                "<li>"+
                     "<span>미궁HARD</span>"+
                "</li>"+
                "<li>"+
                     "<span>워터스페이스</span>"+
                "</li>"+
                "<li>"+
                     "<span>암흑던전HARD</span>"+
                "</li>"+
                "<hr>"+
                "<li>"+
                     "<span><em>EASY</em> 로얄베이스</span>"+
                "</li>"+
                "<li>" +
                     "<span><em>SOLO</em> 나선의 미궁</span>"+
                "</li>"+
                "<li>"+
                     "<span><em>SOLO</em> 워터스페이스</span>"+
                "</li>"+
                "<hr>"+
            "</ul>",

        3:  "<h5>기타</h5>"+
            "<ul >"+
                "<li>"+
                      "<span>세계지도</span>"+
                "</li>"+
            "</ul>"
    };

    var item_attr={
        0:  "<h5>종류</h5>"+
            "<ul >"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column1_attribute1' checked>"+
                        "<span> 전체</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column1_attribute2'>"+
                        "<span> 장비</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column1_attribute3'>"+
                        "<span> 소모품</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column1_attribute4'>"+
                        "<span> 진화카드</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column1_attribute5'>"+
                        "<span> 칭호</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column1_attribute6'>"+
                        "<span> 기타</span>"+
                    "</label>"+
                "</li>"+
            "</ul>",

        1:  "<h5>옵션1</h5>"+
            "<ul>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column2_attribute1' checked>"+
                        "<span> 전체</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column2_attribute2'>"+
                        "<span> 공격력</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column2_attribute3'>"+
                        "<span> 방어력</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column2_attribute4'>"+
                        "<span> 전투등급</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column2_attribute5'>"+
                        "<span> HP</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column2_attribute6'>"+
                        "<span> VP</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column2_attribute7'>"+
                        "<span> EVP</span>"+
                    "</label>"+
                "</li>"+
            "</ul>",

        2:  "<h5>옵션2</h5>"+
            "<ul >"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute1'>"+
                        "<span> 힘</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute2'>"+
                        "<span> 민첩</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute3'>"+
                        "<span> 건강</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute4'>"+
                        "<span> 지능</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute5'>"+
                        "<span> 일반 특성</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute6'>"+
                        "<span> 전용 특성</span>"+
                    "</label>"+
                "</li>"+
            "</ul>",

        3:  "<h5>옵션3</h5>"+
            "<ul >"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column4_attribute1'>"+
                        "<span> 경험치</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column4_attribute2'>"+
                        "<span> 이동속도</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column4_attribute3'>"+
                        "<span> 기타</span>"+
                    "</label>"+
                "</li>"+
            "</ul>"
    }


    for(let i=0; i<columns.length; i++){
        columns[i].innerHTML = card_attr[i];
    }

    const tab_count = document.querySelector(".tab").childElementCount;

    for(let i=0; i<tab_count; i++){

        if(i!==0){
            document.querySelector(".tab").children[i].classList.add("tab_not_select");
        }

    }


    /*탭(카드/아이템) 클릭 이벤트*/
    const card_target = document.querySelector(".tab").firstElementChild;
    const item_target = document.querySelector(".tab").children[1];

    

    /** 카드탭 선택 */
    const card_select = function(){
        for(let i=0; i<tab_count-1; i++){
            if(i===0){
                document.querySelector(".tab").children[i].classList.remove("tab_not_select");
            }else{
                document.querySelector(".tab").children[i].classList.add("tab_not_select");
            }
        }
        for(let i=0; i<columns.length; i++){
            
            columns[i].innerHTML = "";
            console.log(columns[i]);
            columns[i].innerHTML = card_attr[i];
        }
    };
    
        
    card_target.addEventListener("click",card_select);
    
    /** 아이템 탭 선택 */
    const item_select = function(){
        for(let i=0; i<tab_count-1; i++){
            if(i===1){
                document.querySelector(".tab").children[i].classList.remove("tab_not_select");
            }else{
                document.querySelector(".tab").children[i].classList.add("tab_not_select");
            }
        }
        console.log(columns);
        for(let i=0; i<columns.length; i++){
            columns[i].innerHTML = "";
            columns[i].innerHTML = item_attr[i];
        }
    };
        
    item_target.addEventListener("click",item_select);

}