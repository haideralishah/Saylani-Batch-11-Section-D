


function greet(msg) {
    console.log(msg);
}

function divertUser(url) {
    location = url;
}

const imageURL = "https://feeds.abplive.com/onecms/images/uploaded-images/2021/08/13/7d11889aea6d9c2c770a7db462cbf310_original.jpg?impolicy=abp_cdn&imwidth=720";
const originalImgURL = "https://img.cricketworld.com/images/e-079087/2010-09-22t000000z_1_mt1aci7374492_rtrmadp_3_cricket-england-eng-pak.jpg";
function replaceImage(el) {
    if (el.src === imageURL) return;
    el.src = imageURL;
}

function revertOriginalImage(el) {
    if (el.src === originalImgURL) return;
    el.src = originalImgURL;
}








let cityForm = document.querySelectorAll(".city-name");
let provinceForm = document.querySelectorAll(".province-name");
function fillProvince() {
    let city = cityForm[0].value;
    let province;
    switch (city.toLowerCase()) {
        case "karachi":
            province = "Sindh";
            break;
        case "lahore":
            province = "Punjab";
            break;
        case "quetta":
            province = "Balochistan";
            break;
        case "peshawar":
            province = "KP";
            break;
        case "skardu":
            province = "Gilgit Baltistan";
            break;
        case "":
            province = "";
            break;
        default:
            province = "Capital";
    }
    provinceForm[0].value = province;
}



let helpPara = document.querySelectorAll('.dummy-para');
function showHelp() {
    helpPara[0].innerHTML = 'Enter a capital city name.';
    setTimeout(function () {
        helpPara[0].innerHTML = "";
    }, 3000)
}




























function stylePara(el) {
    let sec = new Date().getSeconds();
    let basicColors = ['blue', 'green'];

    if (sec % 2 === 0) {
        el.style.color = basicColors[0];
    }
    else {
        el.style.color = basicColors[1];
    }
    el.className += " success";
}