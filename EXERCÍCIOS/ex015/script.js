function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nas = document.querySelector("input#nascimento")
    var res = document.querySelector("div#res")
    //! TESTE DE COMENTARIO
    /* TESTE*/
    if (nas.value.length == 0 || nas > (ano.value)){
        window.alert ("[ERRO] Insera os valores novamente!")
    }else {
        var masculino = document.querySelector("input#masculino")
        var feminino = document.querySelector("input#feminino")
        var idade = (ano - Number(nas.value))
        var genero = ""
        var img = document.createElement("img")
            img.setAttribute("id", "foto")

        if (masculino.checked){
            genero = "Homem"
            if (idade < 14) {
                img.setAttribute ("src", "imagens/bebe-m.png")
            }else if (idade < 18) {
                img.setAttribute ("src", "imagens/jovem-m.png")
            }else if (idade < 50) {
                img.setAttribute ("src", "imagens/adulto-m.png")
            }else {
                img.setAttribute ("src", "imagens/idoso-m.png")
            }
        } else if (feminino.checked){
            genero = "Mulher"
            if (idade < 14) {
                img.setAttribute ("src", "imagens/bebe-f.png")
            }else if (idade < 18) {
                img.setAttribute ("src", "imagens/jovem-f.png")
            }else if (idade < 50) {
                img.setAttribute ("src", "imagens/adulto-f.png")
            }else {
                img.setAttribute ("src", "imagens/idoso-f.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos.`
        res.appendChild (img)
    }

    
}