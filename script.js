const list = {
    places: [
        "민규의 서재", "지유의 침실", "정호의 사무실", "사건 현장"
    ],
    items : {
        "민규의 서재": ["블레이저", "카펫", "서적", "스탠드", "목도리", "핸드폰", "골프채"],
        "지유의 침실": ["아버지의 요원증", "가족 사진", "무드등", "베개", "TV", "클립 파일", "빨간 담배", "노란 담배", "갈색 담배", "일기장", "사과", "과도", "칼집", "장갑"],
        "정호의 사무실": ["볼펜꽂이", "클립 파일", "달력", "서적", "액자", "노트북", "금고", "마우스", "마우스패드", "금고 속 무언가"],
        "사건 현장": ["시신의 팔", "시신의 시반", "현장의 바닥", "칼", "서적", "문 손잡이", "졸업증", "열쇠", "핸드폰"]
    },
    methods : [
        "혈흔 감식", "시신 부검", "디지털 포렌식", "지문 분석", "DNA 분석"
    ],
    results : [
        {
            place: "민규의 서재", //*******************************민규의 서재
            item: "블레이저",
            method: "혈흔 감식",
            result: {
                type: "no-code",
                text: "루미놀 용액을 뿌린 결과<br>푸른 빛을 띤다.",
                image: "luminolO.png"
            }
        }, {
            place: "민규의 서재", 
            item: "블레이저",
            method: "지문 분석",
            result: {
                type: "code",
                code: "9163",
                text: "민규와 X의 지문이 발견됐다.",
                image: "AXfinger.png"
            }
        }, {
            place: "민규의 서재", 
            item: "블레이저",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "4103",
                text: "X의 DNA가 발견됐다."
            }
        }, {
            place: "민규의 서재", 
            item: "카펫",
            method: "혈흔 감식",
            result: {
                type: "no-code",
                text: "루미놀 용액을 뿌린 결과<br>아무 반응이 없다.",
                image: "luminolX.png"
            }
        }, {
            place: "민규의 서재", 
            item: "카펫",
            method: "지문 분석",
            result: {
                type: "code",
                code: "7084",
                text: "민규와 X의 지문이 발견됐다.",
                image: "AXfinger.png"
            }
        }, {
            place: "민규의 서재", 
            item: "카펫",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "5791",
                text: "토마토의 DNA가 발견됐다."
            }
        }, {
            place: "민규의 서재", 
            item: "서적",
            method: "지문 분석",
            result: {
                type: "code",
                code: "8231",
                text: "민규의 지문이 발견됐다.",
                image: "Afinger.png"
            }
        }, {
            place: "민규의 서재", 
            item: "스탠드",
            method: "지문 분석",
            result: {
                type: "code",
                code: "0725",
                text: "민규의 지문이 발견됐다.",
                image: "Afinger.png"
            }
        }, {
            place: "민규의 서재", 
            item: "목도리",
            method: "혈흔 감식",
            result: {
                type: "no-code",
                text: "루미놀 용액을 뿌린 결과<br>아무 반응이 없다.",
                image: "luminolX.png"
            }
        }, {
            place: "민규의 서재", 
            item: "목도리",
            method: "지문 분석",
            result: {
                type: "code",
                code: "1384",
                text: "민규의 지문이 발견됐다.",
                image: "Afinger.png"
            }
        }, {
            place: "민규의 서재", 
            item: "목도리",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "5287",
                text: "민규의 DNA가 발견됐다."
            }
        }, {
            place: "민규의 서재", 
            item: "핸드폰",
            method: "디지털 포렌식",
            result: {
                type: "code",
                code: "3910",
                image: "phone1.png"
            }
        }, {
            place: "민규의 서재", 
            item: "핸드폰",
            method: "지문 분석",
            result: {
                type: "code",
                code: "2519",
                text: "민규의 지문이 발견됐다.",
                image: "Afinger.png"
            }
        }, {
            place: "민규의 서재", 
            item: "골프채",
            method: "혈흔 감식",
            result: {
                type: "no-code",
                text: "루미놀 용액을 뿌린 결과<br>푸른 빛을 띤다.",
                image: "luminolO.png"
            }
        }, {
            place: "민규의 서재", 
            item: "골프채",
            method: "지문 분석",
            result: {
                type: "code",
                code: "6128",
                text: "X의 지문이 발견됐다.",
                image: "Xfinger.png"
            }
        }, {
            place: "민규의 서재", 
            item: "골프채",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "4832",
                text: "민규의 DNA가 발견됐다."
            }
        }, {
            place: "지유의 침실", //*******************************지유의 침실
            item: "아버지의 요원증",
            method: "지문 분석",
            result: {
                type: "code",
                code: "9042",
                text: "요원 1의 지문이 발견됐다.",
                image: "1finger.png"
            }
        }, {
            place: "지유의 침실",
            item: "가족 사진",
            method: "지문 분석",
            result: {
                type: "code",
                code: "7145",
                text: "요원 1의 지문이 발견됐다.",
                image: "1finger.png"
            }
        }, {
            place: "지유의 침실",
            item: "무드등",
            method: "지문 분석",
            result: {
                type: "code",
                code: "2976",
                text: "지유의 지문이 발견됐다.",
                image: "Bfinger.png"
            }
        }, {
            place: "지유의 침실",
            item: "베개",
            method: "지문 분석",
            result: {
                type: "code",
                code: "5812",
                text: "지유의 지문이 발견됐다.",
                image: "Bfinger.png"
            }
        }, {
            place: "지유의 침실",
            item: "베개",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "4905",
                text: "지유의 DNA가 발견됐다.",
            }
        }, {
            place: "지유의 침실",
            item: "TV",
            method: "지문 분석",
            result: {
                type: "code",
                code: "1820",
                text: "지유의 지문이 발견됐다.",
                image: "Bfinger.png"
            }
        }, {
            place: "지유의 침실",
            item: "TV",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "8576",
                text: "지유의 DNA가 발견됐다.",
            }
        }, {
            place: "지유의 침실",
            item: "클립 파일",
            method: "지문 분석",
            result: {
                type: "code",
                code: "3714",
                text: "요원 1, 2, 3의 지문이 발견됐다.",
                image: "123finger.png"
            }
        }, {
            place: "지유의 침실",
            item: "빨간 담배",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "6821",
                text: "지유의 DNA가 발견됐다.",
            }
        }, {
            place: "지유의 침실",
            item: "노란 담배",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "2951",
                text: "요원 2의 DNA가 발견됐다.",
            }
        }, {
            place: "지유의 침실",
            item: "갈색 담배",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "5012",
                text: "요원 3의 DNA가 발견됐다.",
            }
        }, {
            place: "지유의 침실",
            item: "사과",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "4718",
                text: "지유의 DNA가 발견됐다.",
            }
        }, {
            place: "지유의 침실",
            item: "사과",
            method: "지문 분석",
            result: {
                type: "code",
                code: "7924",
                text: "지유의 지문이 발견됐다.",
                image: "Bfinger.png"
            }
        }, {
            place: "지유의 침실",
            item: "과도",
            method: "지문 분석",
            result: {
                type: "code",
                code: "1295",
                text: "지유의 지문이 발견됐다.",
                image: "Bfinger.png"
            }
        }, {
            place: "지유의 침실", 
            item: "과도",
            method: "혈흔 감식",
            result: {
                type: "no-code",
                text: "루미놀 용액을 뿌린 결과<br>아무 반응이 없다.",
                image: "luminolX.png"
            }
        }, {
            place: "지유의 침실",
            item: "과도",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "8315",
                text: "사과의 DNA가 발견됐다.",
            }
        }, {
            place: "지유의 침실",
            item: "칼집",
            method: "지문 분석",
            result: {
                type: "code",
                code: "5691",
                text: "지유의 지문이 발견됐다.",
                image: "Bfinger.png"
            }
        }, {
            place: "지유의 침실",
            item: "장갑",
            method: "지문 분석",
            result: {
                type: "code",
                code: "6157",
                text: "지유의 지문이 발견됐다.",
                image: "Bfinger.png"
            }
        }, {
            place: "지유의 침실",
            item: "장갑",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "3481",
                text: "지유의 DNA가 발견됐다."
            }
        }, {
            place: "정호의 사무실", //*******************************정호의 사무실
            item: "볼펜꽂이",
            method: "지문 분석",
            result: {
                type: "code",
                code: "7510",
                text: "정호의 지문이 발견됐다.",
                image: "Cfinger.png"
            }
        }, {
            place: "정호의 사무실",
            item: "볼펜꽂이",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "2645",
                text: "정호의 DNA가 발견됐다."
            }
        }, {
            place: "정호의 사무실",
            item: "클립 파일",
            method: "지문 분석",
            result: {
                type: "code",
                code: "9512",
                text: "정호의 지문이 발견됐다.",
                image: "Cfinger.png"
            }
        }, {
            place: "정호의 사무실",
            item: "클립 파일",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "4035",
                text: "정호의 DNA가 발견됐다."
            }
        }, {
            place: "정호의 사무실",
            item: "달력",
            method: "지문 분석",
            result: {
                type: "code",
                code: "1482",
                text: "정호의 지문이 발견됐다.",
                image: "Cfinger.png"
            }
        }, {
            place: "정호의 사무실",
            item: "달력",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "8016",
                text: "정호의 DNA가 발견됐다."
            }
        }, {
            place: "정호의 사무실",
            item: "책",
            method: "지문 분석",
            result: {
                type: "code",
                code: "6825",
                text: "정호의 지문이 발견됐다.",
                image: "Cfinger.png"
            }
        }, {
            place: "정호의 사무실",
            item: "책",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "3519",
                text: "정호의 DNA가 발견됐다."
            }
        }, {
            place: "정호의 사무실",
            item: "액자",
            method: "지문 분석",
            result: {
                type: "code",
                code: "5138",
                text: "정호의 지문이 발견됐다.",
                image: "Cfinger.png"
            }
        }, {
            place: "정호의 사무실",
            item: "액자",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "1724",
                text: "정호의 DNA가 발견됐다."
            }
        }, {
            place: "정호의 사무실",
            item: "노트북",
            method: "지문 분석",
            result: {
                type: "code",
                code: "4175",
                text: "정호의 지문이 발견됐다.",
                image: "Cfinger.png"
            }
        }, {
            place: "정호의 사무실",
            item: "노트북",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "7290",
                text: "정호의 DNA가 발견됐다."
            }
        }, {
            place: "정호의 사무실",
            item: "금고 속 무언가",
            method: "디지털 포렌식",
            result: {
                type: "code",
                code: "2751",
                text: "고위 간부 정보와<br>X의 위치를 조사한<br>기록이 있다."
            }
        }, {
            place: "정호의 사무실",
            item: "마우스",
            method: "지문 분석",
            result: {
                type: "code",
                code: "5261",
                text: "정호의 지문이 발견됐다.",
                image: "Cfinger.png"
            }
        }, {
            place: "정호의 사무실",
            item: "마우스",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "8792",
                text: "정호의 DNA가 발견됐다."
            }
        }, {
            place: "정호의 사무실",
            item: "마우스패드",
            method: "지문 분석",
            result: {
                type: "code",
                code: "2835",
                text: "정호의 지문이 발견됐다.",
                image: "Cfinger.png"
            }
        }, {
            place: "정호의 사무실",
            item: "마우스패드",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "7240",
                text: "정호의 DNA가 발견됐다."
            }
        }, {
            place: "정호의 사무실",
            item: "금고",
            method: "지문 분석",
            result: {
                type: "code",
                code: "3072",
                text: "정호의 지문이 발견됐다.",
                image: "Cfinger.png"
            }
        }, {
            place: "사건 현장", //*******************************사건 현장
            item: "칼",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "6384",
                text: "X의 DNA가 발견됐다."
            }
        }, {
            place: "사건 현장", 
            item: "칼",
            method: "혈흔 감식",
            result: {
                type: "no-code",
                text: "루미놀 용액을 뿌린 결과<br>푸른 빛을 띤다.",
                image: "luminolO.png"
            }
        }, {
            place: "사건 현장", 
            item: "시신의 손",
            method: "시신 부검",
            result: {
                type: "no-code",
                text: "손톱에 빨간 실이 있다.",
            }
        }, {
            place: "사건 현장", 
            item: "시신의 시반",
            method: "시신 부검",
            result: {
                type: "no-code",
                text: "배쪽에 시반이 나타난다.",
            }
        }, {
            place: "사건 현장", 
            item: "책",
            method: "혈흔 감식",
            result: {
                type: "no-code",
                text: "루미놀 용액을 뿌린 결과<br>푸른 빛을 띤다.",
                image: "luminolO.png"
            }
        }, {
            place: "사건 현장",
            item: "책",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "1603",
                text: "X의 DNA가 발견됐다."
            }
        }, {
            place: "사건 현장",
            item: "현장의 바닥",
            method: "혈흔 감식",
            result: {
                type: "no-code",
                text: "루미놀 용액을 뿌린 결과<br>푸른 빛을 띤다.",
                image: "luminolO.png"
            }
        }, {
            place: "사건 현장",
            item: "현장의 바닥",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "2168",
                text: "X의 DNA가 발견됐다."
            }
        }, {
            place: "사건 현장",
            item: "문 손잡이",
            method: "지문 분석",
            result: {
                type: "code",
                code: "9613",
                text: "방 안쪽 손잡이에서 지유의 지문과<br>방 밖쪽 손잡이에서 민규와 지유의 지문이 발견됐다.",
                image: "BABfinger.png"
            }
        }, {
            place: "사건 현장",
            item: "졸업증",
            method: "지문 분석",
            result: {
                type: "code",
                code: "4865",
                text: "정호와 X의 지문이 발견됐다.",
                image: "XCfinger.png"
            }
        }, {
            place: "사건 현장",
            item: "열쇠",
            method: "지문 분석",
            result: {
                type: "code",
                code: "5168",
                text: "민규와 X의 지문이 발견됐다.",
                image: "AXfinger.png"
            }
        }, {
            place: "사건 현장",
            item: "열쇠",
            method: "DNA 분석",
            result: {
                type: "code",
                code: "7259",
                text: "X의 DNA가 발견됐다."
            }
        }, {
            place: "사건 현장",
            item: "핸드폰",
            method: "지문 분석",
            result: {
                type: "code",
                code: "6819",
                text: "X의 지문이 발견됐다.",
                image: "Xfinger.png"
            }
        }, {
            place: "사건 현장",
            item: "핸드폰",
            method: "디지털 포렌식",
            result: {
                type: "code",
                code: "3152",
                image: "XBXCkakao.png"
            }
        }
    ]
};

let rowIndex = 1;

function populateSelect(selectElement, items) {
    selectElement.innerHTML = ''; // Clear existing options
    items.forEach(value => {
        const option = document.createElement('option');
        option.value = value; // Set the value attribute
        option.textContent = value; // Set the display text
        selectElement.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    const placeSelect = document.getElementById('place');
    const itemSelect = document.getElementById('item');
    const methodSelect = document.getElementById('method');

    // Populate places
    populateSelect(placeSelect, list.places);

    // Populate methods
    populateSelect(methodSelect, list.methods);

    // Update items when place changes
    placeSelect.addEventListener('change', () => {
        const selectedPlace = placeSelect.value;
        const items = list.items[selectedPlace] || [];
        populateSelect(itemSelect, items);
    });

    // Trigger change event to populate items initially
    placeSelect.dispatchEvent(new Event('change'));
});

list.places.forEach(value => {
    const selectElement = document.getElementById('place');
    const option = document.createElement('option');
    option.value = value; // Set the value attribute
    option.textContent = value; // Set the display text
    selectElement.appendChild(option);
});
list.items.forEach(value => {
    const selectElement = document.getElementById('item');
    const option = document.createElement('option');
    option.value = value; // Set the value attribute
    option.textContent = value; // Set the display text
    selectElement.appendChild(option);
});
list.methods.forEach(value => {
    const selectElement = document.getElementById('method');
    const option = document.createElement('option');
    option.value = value; // Set the value attribute
    option.textContent = value; // Set the display text
    selectElement.appendChild(option);
});

function addTable(value) {
    const selectElement = document.getElementById('table-body');
    const tr = document.createElement('tr');
    const td0 = document.createElement('td');
    td0.textContent = rowIndex++; // Set the row index
    const td1 = document.createElement('td');
    td1.value = value.place; // Set the value attribute
    td1.textContent = value.place; // Set the display text
    const td2 = document.createElement('td');
    td2.value = value.item; // Set the value attribute
    td2.textContent = value.item; // Set the display text
    const td3 = document.createElement('td');
    td3.value = value.method; // Set the value attribute
    td3.textContent = value.method; // Set the display text
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // 결과 출력
    const td4 = document.createElement('td');
    if(value.result.type == 'no-code') {
        const resultText = value.result.text;
        const resultImage = value.result.image;
        if (resultImage != null) {
            if(resultImage != null) {
                const img = document.createElement('img');
                img.src = 'images/' + resultImage;
                img.alt = 'Image file';
                td4.appendChild(img);
            }
        }
        if (resultText != null) {
            const textP = document.createElement('p');
            textP.innerHTML = resultText; // Use innerHTML instead of textContent
            td4.appendChild(textP);
        }
    } else if(value.result.type == 'code') {
        const code = value.result.code;
        const codeId = value.place + "/-/" + value.item + "/-/" + value.method;
        const input = document.createElement('input');
        input.type = 'text';
        input.id = codeId;
        td4.appendChild(input);
        const submitButton = document.createElement('button');
        submitButton.textContent = '입력';
        submitButton.id = codeId + '::' + 'button';
        submitButton.onclick = () => {
            const resultText = value.result.text;
            const resultImage = value.result.image;
            if(document.getElementById(codeId).value == code) {
                if(resultImage != null) {
                    const img = document.createElement('img');
                    img.src = 'images/' + resultImage;
                    img.alt = 'Image file';
                    td4.appendChild(img);
                }
                if (resultText != null) {
                    const textP = document.createElement('p');
                    textP.innerHTML = resultText; // Use innerHTML instead of textContent
                    td4.appendChild(textP);
                }
                document.getElementById(codeId).remove();
                document.getElementById(codeId + '::' + 'button').remove();
            } else {
                alert('잘못된 코드입니다.');
            }
        }
        td4.appendChild(submitButton);
    } else {
        const textP = document.createElement('p');
        textP.innerHTML = "단서가 없는 듯하다...";
        td4.appendChild(textP);
    }
    tr.appendChild(td4);

    selectElement.appendChild(tr);
}

function startInvestigation() {
    // 각 셀렉트 요소의 선택된 값 가져오기
    const place = document.getElementById('place').value;
    const item = document.getElementById('item').value;
    const method = document.getElementById('method').value;
    
    // 결과 출력 (콘솔에)
    console.log(`장소: ${place}, 물품: ${item}, 수사방법: ${method}`);

    //결과 가져오기
    let result = null;
    list.results.forEach(value => {
        if(value.place == place && value.item == item && value.method == method)
            result = value.result;
    })
    if(result == null) {
        result = {
            type: "no-result"
        };
    }
        //return;

    addTable({
        place: place,
        item: item,
        method: method,
        result: result
    });

    //alert(`수사가 시작되었습니다! 장소: ${place}, 물품: ${item}, 수사방법: ${method}`);
}
