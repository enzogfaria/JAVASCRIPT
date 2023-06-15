function carregar() {
    var msg = document.querySelector("div#msg")
    var img = document.querySelector("img#foto")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 6 && hora < 12) {
        img.src = "imagens/fotomanha.png"
        document.body.style.backgroundColor = "#CDBC90"
    } else if (hora > 12 && hora < 19) {
        img.src = "imagens/fototarde.png"
        document.body.style.backgroundColor = "#976C59"
    } else {
        img.src = "imagens/fotonoite.png"
        document.body.style.backgroundColor = "#48494A"
    }
    
}