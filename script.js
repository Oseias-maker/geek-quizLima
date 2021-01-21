// var deck = [
//     {
//         id: 1,
//         imgSrc: "../images/vader.png",
//         alternativa1: "card1 - Alt 1",
//         alternativa2: "card1 - Alt 2",
//         alternativa3: "card1 - Alt 3",
//     },
//     {
//         id: 2,
//         alternativa1: "card2 - Alt 1",
//         alternativa2: "card2 - Alt 2",
//         alternativa3: "card2 - Alt 3",
//     },
//     {
//         id: 3,
//         imgSrc: "",
//         alternativa1: "card3 - Alt 1",
//         alternativa2: "card3 - Alt 2",
//         alternativa3: "card3 - Alt 3",
//     },
// ]


// function salvarRecord() {
//     let campoRecord = document.getElementById("record");
//     campoRecord.textContent = 0;
//     if (localStorage.getItem("record") != null &&
//         localStorage.getItem("record") != undefined) {
//         campoRecord.textContent = localStorage.getItem("record")
//     }




// function iniciaJogo() {
//     let card = document.getElementById("card1")
//     card.innerHTML =

//         ` 
//          Star Wars<br>
//         <img id="img1" src="${deck[0].imgSrc}" alt=""><br>
//         <p>Qual o verdadeiro nome de Darth Vader ?</p>
//         <input type="radio" name="alternativa1" value="a"><label>${deck[0].alternativa1}Luck Walker</label><br>
//         <input type="radio" name="alternativa2" value="b"><label>${deck[0].alternativa2}Anakin Skywalker</label><br>
//         <input type="radio" name="alternativa3" value="c"><label>${deck[0].alternativa3}Ray Skywalker</label><br>
//         `

// salvarRecord()

// }


function verificarPontuação() {
    if (localStorage.getItem("pontuacao") == null) {
        localStorage.setItem("pontuacao", 0)
    }
    let point = parseInt(localStorage.getItem("pontuacao"))
    let totalpoint = 0
    let resposta = new Array(10)
    let scoree = new Array(10)
    if (point == undefined || point == 0 || point == NaN) {
        localStorage.setItem("pontuacao", 0)
    }
    resposta[0] = document.getElementById("quest2").checked
    resposta[1] = document.getElementById("quest4").checked
    resposta[2] = document.getElementById("quest8").checked
    resposta[3] = document.getElementById("quest10").checked
    resposta[4] = document.getElementById("quest13").checked
    resposta[5] = document.getElementById("quest17").checked
    resposta[6] = document.getElementById("quest20").checked
    resposta[7] = document.getElementById("quest23").checked
    resposta[8] = document.getElementById("quest27").checked
    resposta[9] = document.getElementById("quest29").checked

    if (resposta[0] == true) {
        scoree[0] = 30;
        document.getElementById("resposta1").style.color = "green"
        document.getElementById("resposta1").textContent = "Correto!"
    }
    else {
        document.getElementById("resposta1").style.color = "red"
        document.getElementById("resposta1").textContent = "Errou!"
    }

    if (resposta[1] == true) {
        scoree[1] = 30;
        document.getElementById("resposta2").style.color = "green"
        document.getElementById("resposta2").textContent = "Correto!"
    }
    else {
        scoree[1] = 0;
        document.getElementById("resposta2").style.color = "red"
        document.getElementById("resposta2").textContent = "Errou!"
    }

    if (resposta[2] == true) {
        scoree[2] = 30;
        document.getElementById("resposta3").style.color = "green"
        document.getElementById("resposta3").textContent = "Correto!"
    }
    else {
        scoree[2] = 0;
        document.getElementById("resposta3").style.color = "red"
        document.getElementById("resposta3").textContent = "Errou!"
    }

    if (resposta[3] == true) {
        scoree[3] = 30;
        document.getElementById("resposta4").style.color = "green"
        document.getElementById("resposta4").textContent = "Correto!"
    }
    else {
        scoree[3] = 0;
        document.getElementById("resposta4").style.color = "red"
        document.getElementById("resposta4").textContent = "Errou!"
    }

    if (resposta[4] == true) {
        scoree[4] = 30;
        document.getElementById("resposta5").style.color = "green"
        document.getElementById("resposta5").textContent = "Correto!"
    }
    else {
        scoree[4] = 0;
        document.getElementById("resposta5").style.color = "red"
        document.getElementById("resposta5").textContent = "Errou!"
    }

    if (resposta[5] == true) {
        scoree[5] = 30;
        document.getElementById("resposta6").style.color = "green"
        document.getElementById("resposta6").textContent = "Correto!"
    }
    else {
        scoree[5] = 0;
        document.getElementById("resposta6").style.color = "red"
        document.getElementById("resposta6").textContent = "Errou!"
    }

    if (resposta[6] == true) {
        scoree[6] = 30;
        document.getElementById("resposta7").style.color = "green"
        document.getElementById("resposta7").textContent = "Correto!"
    }
    else {
        scoree[6] = 0;
        document.getElementById("resposta7").style.color = "red"
        document.getElementById("resposta7").textContent = "Errou!"
    }

    if (resposta[7] == true) {
        scoree[7] = 30;
        document.getElementById("resposta8").style.color = "green"
        document.getElementById("resposta8").textContent = "Correto!"
    }
    else {
        scoree[7] = 0;
        document.getElementById("resposta8").style.color = "red"
        document.getElementById("resposta8").textContent = "Errou!"
    }

    if (resposta[8] == true) {
        scoree[8] = 30;
        document.getElementById("resposta9").style.color = "green"
        document.getElementById("resposta9").textContent = "Correto!"
    }
    else {
        scoree[8] = 0;
        document.getElementById("resposta9").style.color = "red"
        document.getElementById("resposta9").textContent = "Errou!"
    }

    if (resposta[9] == true) {
        scoree[9] = 30;
        document.getElementById("resposta10").style.color = "green"
        document.getElementById("resposta10").textContent = "Correto!"
    }
    else {
        scoree[9] = 0;
        document.getElementById("resposta10").style.color = "red"
        document.getElementById("resposta10").textContent = "Errou!"
    }


    totalpoint = scoree[0] + scoree[1] + scoree[2] + scoree[3] + scoree[4] + scoree[5] + scoree[6] + scoree[7] + scoree[8] + scoree[9];
    if (totalpoint > point) {
        localStorage.setItem("pontuacao", totalpoint)
    }
    else {
        document.getElementById("scoreExit").textContent = `Pontuação Total: ${totalpoint}`
    }

}
function refresh() {
    window.location.reload();
    window.scrollTo(0, 0)
}

