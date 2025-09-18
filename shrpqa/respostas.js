function fase1(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "bem vindo") {
        window.location.href = "II.html";
        return true;
    } else {
        alert("A resposta que você procura não é essa. Tente Novamente.");
        return false;
    }
}

function fase2(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "agora que tudo começou") {
        window.location.href = "III.html";
        return true;
    } else {
        alert("A resposta que você procura não é essa. Tente Novamente.");
        return false;
    }
}

function fase3(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "não há mais volta" || resposta === "NÃO HÁ MAIS VOLTA") {
        window.location.href = "IV.html";
        return true;
    } else {
        alert("A resposta que você procura não é essa. Tente Novamente.");
        return false;
    }
}

function fase4(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "voce foi escolhido" || resposta === "Você foi escolhido" || resposta === "Voce foi escolhido") {
        window.location.href = "V.html";
        return true;
    } else {
        alert("A resposta que você procura não é essa. Tente Novamente.");
        return false;
    }
}
function fase5(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "apenas" || resposta === "APENAS") {
        window.location.href = "VI.html";
        return true;
    } else {
        alert("A resposta que você procura não é essa. Tente Novamente.");
        return false;
    }
}


function fase6(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "o mais forte" || resposta === "O MAIS FORTE" || resposta === "o homem mais forte") {
        window.location.href = "VII.html";
        return true;
    } else {
        alert("A resposta que você procura não é essa. Tente Novamente.");
        return false;
    }
}

function fase7(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "sobrevivera ate o final" || resposta === "SOBREVIVERA ATE O FINAL" || resposta === "Sobreviverá até o final" || resposta === "Sobrevivera ate o final" || resposta === "sobreviverá até o final") {
        window.location.href = "VIII.html";
        return true;
    } else {
        alert("A resposta que você procura não é essa. Tente Novamente.");
        return false;
    }
}

function fase8(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "SE VOCE CONSEGUIU" || resposta === "se voce conseguiu" || resposta === "Se você conseguiu" || resposta === "se você conseguiu" || resposta === "SE VOCÊ CONSEGUIU") {
        window.location.href = "IX.html";
        return true;
    } else {
        alert("A resposta que você procura não é essa. Tente Novamente.");
        return false;
    }
}

function fase9(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "CHEGAR ATÉ AQUI" || resposta === "chegar até aqui" || resposta === "chegaraateaqui" || resposta === "chegar ate aqui") {
        window.location.href = "X.html";
        return true;
    } else {
        alert("A resposta que você procura não é essa. Tente Novamente.");
        return false;
    }
}

function fase10(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "Meus Parabêns!!" || resposta === "Meus Parabens!!" || resposta === "meus parabens" || resposta === "Meus Parabens" || resposta === "meus parabêns!!" || resposta === "Meus Parabens!!") {
        window.location.href = "final.html";
        return true;
    } else {
        alert("A resposta que você procura não é essa. Tente Novamente.");
        return false;
    }
}

function final(event) {
    event.preventDefault(); // impede o submit do form
        window.location.href = "I.html";
        return true;
}