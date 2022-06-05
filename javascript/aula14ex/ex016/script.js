function contar() {
    let inicio = document.getElementById('txti')
    let fim =document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.lenght == 0 || passo.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossível Contar'
        //window.alert('[ERRO] Faltam dandos!')  
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(let c = i; c<= f; c += p)
            res.innerHTML += `${c} \u{27A1}`
        } 
        else {
            //Contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27a1}`
            }
        }
        }
}