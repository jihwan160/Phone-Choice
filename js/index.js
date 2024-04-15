

let colorBtn = document.getElementsByName("carColor");
let carImg  = document.querySelectorAll(".carImg");


colorBtn.forEach(function(radioButton, index) {
    radioButton.addEventListener('change',function(){
        carImg.forEach(function(img,imgindex) {
            if(index === imgindex) {
                img.style.opacity = "1";
                img.style.transition = "all 1s ease"
            }else {
                img.style.opacity = "0";
                img.style.transition = "all 1s ease"
            }
        })
    })
})


    let radioBtns = document.querySelectorAll(".colorInput div input");

    for(let i = 0; i < radioBtns.length; i++) {
        radioBtns[i].addEventListener("change",function(){
            var selectedValue = document.querySelector('input[name="carColor"]:checked').value;
            document.getElementById("changeName").innerText = selectedValue;
        })
    }




    
    // 라디오 버튼 이벤트
    document.querySelectorAll('input[name="qkdqjq"]').forEach(function(qkdqjq) {
        qkdqjq.addEventListener('change',function(){
            if(qkdqjq.checked) {
                qkdqjqLabelText();
                qkdqjqInputValue(qkdqjq.value);
                calculateValue();
                monthCalculateValue();
                totalPay();
            }
        })
    })

    // 처음 로딩시 나타날 텍스트와 value
    window.onload = function() {
        // 약정선택 value
        var initialqkdqjqValue = document.querySelector('input[name="qkdqjq"]:checked').value;
        document.getElementById('qkdqjqValue').value = initialqkdqjqValue;
        

        // 약정선택 text
        var initialqkdqjqLabelText = document.querySelector('input[name="qkdqjq"]:checked + label')
        var LabelText = initialqkdqjqLabelText.textContent
        document.getElementById('qkdqjqText').innerText = LabelText;

        // 할부개월 value
        var initialrlrksValue = document.querySelector('input[name="rlrks"]:checked').value;
        document.getElementById('rlrksValue').value = parseFloat(initialrlrksValue);

        // 사용중인통신사 value
        var initialxhdtlstkingValue = document.querySelector('input[name="xhdtlstking"]:checked').value;
        document.getElementById('xhdtlstkingValue').value = initialxhdtlstkingValue;

        // 사용할통신사 value
        var initialxhdtlstkValue = document.querySelector('input[name="xhdtlstk"]:checked').value;
        document.getElementById('xhdtlstkValue').value = initialxhdtlstkValue;
        
        // 용량 value
        var initialdydfidValue = document.querySelector('input[name="dydfid"]:checked').value;
        document.getElementById('cnfrhrk').value = initialdydfidValue;

        // 용량 text
        var initialdydfidLabelText = document.querySelector('input[name="dydfid"]:checked + label')
        var dydfidLabelText = initialdydfidLabelText.textContent;
        document.getElementById('dydfidText').innerText = dydfidLabelText;

        calculateValue();
        monthCalculateValue();
        totalPay()
    }

    function parseNumberFromString(str) {
        return parseFloat(str.replace(/,/g, ''));
    }

    // 숫자를 쉼표로 구분하여 문자열로 변환하는 함수
    function formatNumberWithCommas(num) {
        return num.toLocaleString();
    }
    
    // 할부 원금 계산
    function calculateValue() {
        var cnfrhrk = document.querySelector('#cnfrhrk').value;
        var gkfdls = document.querySelector('#qkdqjqValue').value;
        var dnjsrma = parseNumberFromString(cnfrhrk) - parseNumberFromString(gkfdls);
        document.getElementById('dnjsrma').value = formatNumberWithCommas(dnjsrma);
    }

    // 약정선택에서 radio버튼 checked된 label의 text를 보여주기
    function qkdqjqLabelText() {
        var radioLabel = document.querySelector('input[name="qkdqjq"]:checked + label');
        if(radioLabel) {
            var radioLabelText = radioLabel.textContent;
            document.getElementById('qkdqjqText').innerText = radioLabelText;
        }
    }

    // 약정선택에서 radio버튼 checked된 value값 보여주기
    function qkdqjqInputValue (value) {
        document.getElementById('qkdqjqValue').value = value;
    }
    

    // 할부개월
    let rlrks = document.querySelectorAll('input[name="rlrks"]').forEach(function(rlrks) {
        rlrks.addEventListener('click',function(){
            if(rlrks.checked) {
                rlrksValue(rlrks.value);
                calculateValue();
                monthCalculateValue();
                totalPay();
            }
        })
    })
    // 할부개월 선택이 보여지는 개월 수
    function rlrksValue(value) {
        document.getElementById('rlrksValue').value = value;
    }

    // 월 할부원금 계산
    function monthCalculateValue() {
        let dnjsrma2 = document.getElementById('dnjsrma').value;
        let dirwjdMonth = document.querySelector('input[name="rlrks"]:checked').value
        let monthPay = Math.floor(parseNumberFromString(dnjsrma2) / parseNumberFromString(dirwjdMonth));
        document.getElementById('SKTmonthPay').innerText = formatNumberWithCommas(monthPay);
        document.getElementById('KTmonthPay').innerText = formatNumberWithCommas(monthPay);
        document.getElementById('LGmonthPay').innerText = formatNumberWithCommas(monthPay);
    }

    // 사용중인 통신사
    let xhdtlstking = document.querySelectorAll('input[name="xhdtlstking"]').forEach(function(xhdtlstking){
        xhdtlstking.addEventListener('change',function(){
            if(xhdtlstking.checked) {
                xhdtlstkingValue(xhdtlstking.value);
            }
        })
    })
    // 사용중인 통신사 선택시 보여지는 통신사
    function xhdtlstkingValue(value) {
        document.getElementById('xhdtlstkingValue').value = value;
    }

    // 사용하실 통신사
    let xhdtlstk = document.querySelectorAll('input[name="xhdtlstk"]').forEach(function(xhdtlstk) {
        xhdtlstk.addEventListener('change',function(){
            if(xhdtlstk.checked) {
                xhdtlstkValue(xhdtlstk.value);
            }
        })
    })

    // 사용하실 통신사 선택시 보여지는 통신사
    function xhdtlstkValue (value) {
        document.getElementById('xhdtlstkValue').value = value;
    }

    // 통신사 선택시 선택한 통신사에따라 요금제 나오기
    let SKTdyrmawp = document.querySelector('.SKTdyrmawp');
    let KTdyrmawp = document.querySelector('.KTdyrmawp');
    let LGdyrmawp = document.querySelector('.LGdyrmawp');

    let SKTxoqemf = document.querySelector('.SKTxoqemf');
    let KTxoqemf = document.querySelector('.KTxoqemf');
    let LGxoqemf = document.querySelector('.LGxoqemf');

    let SKTResult = document.querySelector('.SKTResult');
    let KTResult = document.querySelector('.KTResult');
    let LGResult = document.querySelector('.LGResult');
    

    let xhdtlstkSelect = document.querySelectorAll('input[name="xhdtlstk"]');
    for(var i = 0; i < xhdtlstkSelect.length; i++) {
        xhdtlstkSelect[i].addEventListener('change',function(){
            if(xhdtlstkSelect[0].checked) {
                SKTdyrmawp.style.display = "block";
                KTdyrmawp.style.display = "none";
                LGdyrmawp.style.display = "none";
                SKTxoqemf.style.display = "flex";
                KTxoqemf.style.display = "none";
                LGxoqemf.style.display = "none";
                SKTResult.style.display = "grid";
                KTResult.style.display = "none";
                LGResult.style.display = "none";
            }else if(xhdtlstkSelect[1].checked) {
                SKTdyrmawp.style.display = "none";
                KTdyrmawp.style.display = "block";
                LGdyrmawp.style.display = "none";
                SKTxoqemf.style.display = "none";
                KTxoqemf.style.display = "flex";
                LGxoqemf.style.display = "none";
                SKTResult.style.display = "none";
                KTResult.style.display = "grid";
                LGResult.style.display = "none";
            }else if(xhdtlstkSelect[2].checked) {
                SKTdyrmawp.style.display = "none";
                KTdyrmawp.style.display = "none";
                LGdyrmawp.style.display = "block";
                SKTxoqemf.style.display = "none";
                KTxoqemf.style.display = "none";
                LGxoqemf.style.display = "flex";
                SKTResult.style.display = "none";
                KTResult.style.display = "none";
                LGResult.style.display = "grid";
            }
        })
    }

    // 용량
    let dydfid = document.querySelectorAll('input[name="dydfid"]').forEach(function(dydfid) {
        dydfid.addEventListener('change',function(){
            if(dydfid.checked) {
                dydfidLabelText();
                dydfidValue(dydfid.value);
                calculateValue();
                monthCalculateValue();
                totalPay();
            }
        })
    })
    // 용량 선택시 보여지는 출고가의 값
    function dydfidValue(value) {
        document.getElementById('cnfrhrk').value = value;
    }
    // 용량 선택시 보여지는 용량
    function dydfidLabelText() {
        var dydfidRadioLabelText = document.querySelector('input[name="dydfid"]:checked + label');
        if(dydfidRadioLabelText) {
            var dydfidLabelText = dydfidRadioLabelText.textContent;
            document.getElementById('dydfidText').innerText = dydfidLabelText;
        }
    }

    // SK요금제
    var sktOptionData = {
        'platinum' : { value1 : "125,000", value2 : "음성 문자 무제한", value3 : "데이터 완전무제한", value4 : "5GX플래티넘"},
        'prime' : {value1 : "89,000", value2 : "음성 문자 무제한", value3 : "데이터 완전무제한", value4 : "5GX프라임"},
    }

    
    function SKTgetSelectedOptionData() {
        var selectElement = document.querySelector('#SKTdyrmawpSel');
        var selectedOptionId = selectElement.value;
        return sktOptionData[selectedOptionId];
    }

    function SKTdisplaySelectedOptionData() {
        var selectedData = SKTgetSelectedOptionData();
        var dyrmawpValue = document.getElementById('SKTdyrmawpValue');
        dyrmawpValue.innerText = selectedData.value1;

        var dyrmawpMonth = document.getElementById('SKTdyrmawpMonth');
        dyrmawpMonth.innerText = selectedData.value1;

        var dyrmawpText = document.getElementById('SKTdyrmawpText');
        dyrmawpText.innerText = selectedData.value2 + " / " + selectedData.value3;

        var dyrmawpTextValue = document.getElementById('SKTdyrmawpTextValue');
        dyrmawpTextValue.innerText = selectedData.value4;
    }

    document.getElementById('SKTdyrmawpSel').addEventListener('change',function(){
        SKTdisplaySelectedOptionData();
        totalPay();
    })

    SKTdisplaySelectedOptionData();

    // KT요금제

    var ktOptionData = {
        'premium' : { value1 : "130,000", value2 : "음성 문자 무제한", value3 : "데이터 완전무제한", value4 : "슈퍼플랜 프리미엄 초이스" , value5 : "데이터 로밍 무제한(최대 3Mbps 속도제어)"},
        'special' : {value1 : "110,000", value2 : "음성 문자 무제한", value3 : "데이터 완전무제한", value4 : "슈퍼플랜 스페셜 초이스" , value5:"넷플릭스, 시즌 초이스 무료제공"},
    }

    
    function KTgetSelectedOptionData() {
        var selectElement = document.querySelector('#KTdyrmawpSel');
        var selectedOptionId2 = selectElement.value;
        return ktOptionData[selectedOptionId2];
    }

    function KTdisplaySelectedOptionData() {
        var selectedData = KTgetSelectedOptionData();
        var dyrmawpValue = document.getElementById('KTdyrmawpValue');
        dyrmawpValue.innerText = selectedData.value1;
        
        var dyrmawpMonth = document.getElementById('KTdyrmawpMonth');
        dyrmawpMonth.innerText = selectedData.value1;


        var dyrmawpText = document.getElementById('KTdyrmawpText');
        dyrmawpText.innerText = selectedData.value2 + " / " + selectedData.value3 + " / " + selectedData.value5;

        var dyrmawpTextValue = document.getElementById('KTdyrmawpTextValue');
        dyrmawpTextValue.innerText = selectedData.value4;
    }

    document.getElementById('KTdyrmawpSel').addEventListener('change',function(){
        KTdisplaySelectedOptionData();
        totalPay();
    })

    KTdisplaySelectedOptionData();


    // LG요금제
    var lgOptionData = {
        'premiersuper' : { value1 : "115,000", value2 : "음성 문자 무제한", value3 : "데이터 완전무제한+나눠쓰기100GB", value4 : "5G 프리미어 슈퍼"},
        'premierplus' : {value1 : "105,000", value2 : "음성 문자 무제한", value3 : "데이터 완전무제한+나눠쓰기100GB", value4 : "5G 프리미어 플러스"},
    }

    
    function LGgetSelectedOptionData() {
        var selectElement = document.querySelector('#LGdyrmawpSel');
        var selectedOptionId2 = selectElement.value;
        return lgOptionData[selectedOptionId2];
    }

    function LGdisplaySelectedOptionData() {
        var selectedData = LGgetSelectedOptionData();
        var dyrmawpValue = document.getElementById('LGdyrmawpValue');
        dyrmawpValue.innerText = selectedData.value1;

        var dyrmawpMonth = document.getElementById('LGdyrmawpMonth');
        dyrmawpMonth.innerText = selectedData.value1;


        var dyrmawpText = document.getElementById('LGdyrmawpText');
        dyrmawpText.innerText = selectedData.value2 + " / " + selectedData.value3;

        var dyrmawpTextValue = document.getElementById('LGdyrmawpTextValue');
        dyrmawpTextValue.innerText = selectedData.value4;
    }

    document.getElementById('LGdyrmawpSel').addEventListener('change',function(){
        LGdisplaySelectedOptionData();
        totalPay();
    })

    LGdisplaySelectedOptionData();

    // 전체 금액
    function totalPay() {
        let SKTmonthPay2 = document.getElementById('SKTmonthPay').textContent
        let SKTdyrmawpMonth2 = document.getElementById('SKTdyrmawpMonth').textContent
        let SKTresult = parseNumberFromString(SKTmonthPay2) + parseNumberFromString(SKTdyrmawpMonth2);
        document.getElementById('SKTtotalResult').innerText = formatNumberWithCommas(SKTresult);

        let KTmonthPay2 = document.getElementById('KTmonthPay').textContent
        let KTdyrmawpMonth2 = document.getElementById('KTdyrmawpMonth').textContent
        let KTresult = parseNumberFromString(KTmonthPay2) + parseNumberFromString(KTdyrmawpMonth2);
        document.getElementById('KTtotalResult').innerText = formatNumberWithCommas(KTresult)

        let LGmonthPay2 = document.getElementById('LGmonthPay').textContent
        let LGdyrmawpMonth2 = document.getElementById('LGdyrmawpMonth').textContent
        let LGresult = parseNumberFromString(LGmonthPay2) + parseNumberFromString(LGdyrmawpMonth2);
        document.getElementById('LGtotalResult').innerText = formatNumberWithCommas(LGresult)
    }

    document.querySelector('#btn').addEventListener('click',function(){
        alert('준비중입니다')
    })
