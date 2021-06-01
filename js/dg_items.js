

window.onload = function(){
    const columns = document.querySelectorAll(".column");
    console.log(columns);

    /*카드 메뉴 옵션들*/
    var card_attr = {
        0:  "<h5>종류</h5>"+
            "<ul >"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column1_attribute1' checked>"+
                        "<span>전체</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column1_attribute2'>"+
                        "<span>공격 카드</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column1_attribute3'>"+
                        "<span>방어 카드</span>"+
                    "</label>"+
                "</li>"+
            "</ul>",

        1:  "<h5>등급</h5>"+
            "<ul>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column2_attribute1' checked>"+
                        "<span>전체</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column2_attribute2'>"+
                        "<span>디알부스트</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column2_attribute3'>"+
                        "<span>노말 카드</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column2_attribute4'>"+
                        "<span>레어 카드</span>"+
                    "</label>"+
                "</li>"+
            "</ul>",

        2:  "<h5>옵션</h5>"+
            "<ul >"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute1' checked>"+
                        "<span>전체</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute2'>"+
                        "<span>데미지 증가</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute3'>"+
                        "<span>데미지 감소</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute4'>"+
                        "<span>전체 공격</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute5'>"+
                        "<span>방어력 증가</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute6'>"+
                        "<span>HP/VP 회복</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column3_attribute7'>"+
                        "<span>기타</span>"+
                    "</label>"+
                "</li>"+
            "</ul>",

        3:  "<h5>획득 방법</h5>"+
            "<ul >"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column4_attribute1' checked>"+
                        "<span>전체</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column4_attribute2'>"+
                        "<span>비트</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column4_attribute3'>"+
                        "<span>캐쉬</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column4_attribute4'>"+
                        "<span>이벤트</span>"+
                    "</label>"+
                "</li>"+
                "<li>"+
                    "<label>"+
                        "<input type='checkbox' id='column4_attribute5'>"+
                        "<span>기타</span>"+
                    "</label>"+

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