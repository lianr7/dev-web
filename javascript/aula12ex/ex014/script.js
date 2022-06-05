function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.innerHTML = img.src = "morning.png"
        document.body.style.background = '#A1B6BD'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE! 
        img.innerHTML = img.src = 'afternoon.png'
        document.body.style.background = '#D48880'
    } else {
        //BOA NOITE
        img.innerHTML = img.src = 'night.png'
        document.body.style.background = '#0D3753'
    }
}