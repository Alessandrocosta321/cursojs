function tabuada() {
    var num = document.getElementById('txtn').value
    var tab = document.getElementById('seltab')
    if (num.length == 0) {
        window.alert('Por favor, Digite um numéro!')
    } else {
        var n = Number(num)
        tab.innerHTML = ''
        for (c = 1; c  <= 10 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            // item.value = `tab${c}`
            tab.appendChild(item)
        }
        
        // while (c  <= 10) {
        //     let item = document.createElement('option')
        //     item.text = `${n} x ${c} = ${n*c}`
        //     tab.appendChild(item)
        //     c++
        // }
    }
    
}