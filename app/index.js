//현제 열 위치
let currentRow = 0;
let answer = "";
let answerKor = "";

const keyMap = {
  q: "ㅂ", w: "ㅈ", e: "ㄷ", r: "ㄱ", t: "ㅅ",
  y: "ㅛ", u: "ㅕ", i: "ㅑ", o: "ㅐ", p: "ㅔ",
  a: "ㅁ", s: "ㄴ", d: "ㅇ", f: "ㄹ", g: "ㅎ",
  h: "ㅗ", j: "ㅓ", k: "ㅏ", l: "ㅣ", z: "ㅋ", 
  x: "ㅌ", c: "ㅊ", v: "ㅍ", b: "ㅠ", n: "ㅜ", 
  m: "ㅡ", Q: "ㅃ", W: "ㅉ", E: "ㄸ", R: "ㄲ",
  T: "ㅆ", O: "ㅒ", P: "ㅖ"
};

const words = [
    "rkawk",
    "tkrhk",
    "aksmf",
    "gksmf",
    "Qkffl",
    "rlacl",
    "whddl",
    "rhkwk",
    "Wkwkd",
    "cjstk",
    "qkrtk",
    "tnqkr",
    "tlgja",
    "zheld",
    "tkdwk"
];
const wordsKor = [
    "감자",
    "사과",
    "마늘",
    "하늘",
    "빨리",
    "김치",
    "종이",
    "과자",
    "짜장",
    "천사",
    "박사",
    "수박",
    "시험",
    "코딩",
    "상자"
];

window.onload = () => {
    const randomNum = Math.floor(Math.random() * words.length);
    answer = words[randomNum];
    answerKor = wordsKor[randomNum];
};

function inputText() {
    const input = document.querySelector("input[type='text']");
    const text = input.value.trim();

    if(currentRow >= 6) return false;
    checkText(text);

    input.value = "";
    
    return false;
}

function checkText(text){
    if (text.length !== 5) {
        alert("5글자를 입력하세요");
        return false;
    }
    const transText = translate(text);
    
    const row = document.querySelector("#board").children[currentRow];

    for (let i = 0; i < text.length; i++) {
        setTimeout(()=>{
            if(text[i] === answer[i]){
                row.children[i].classList.add("correct");
            }else if(answer.includes(text[i])){
                row.children[i].classList.add("present");
            }else{
                row.children[i].classList.add("fail");
            }
            row.children[i].classList.add("flip");
            row.children[i].innerText = transText[i];
        },i*200);
    }

    if(text === answer){
        setTimeout(()=>{
            alert("정답!!");
        }, 3000);
    }else if(currentRow >= 5){
        setTimeout(()=>{
            alert("실패 정답은 " + answerKor)
        }, 3000);
    }   
    currentRow++;
}

function translate(text) {
    let result = "";

    for (const tx of text) {
        result += keyMap[tx];
    }

    return result;
}
