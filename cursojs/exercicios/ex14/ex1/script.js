function clicar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Esta faltando preencher um campo dos dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0 ) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerText += ` ${c} 👉}`
            }
        }else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerText += ` ${c} \u{1F449}`
            }
        }
    }
    res.innerHTML += `\u{1F3C1}`

}