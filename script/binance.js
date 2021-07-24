function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function binance() {
    let data = fazGet("https://api.binance.com/api/v3/ticker/price");
    let usuarios = JSON.parse(data);
    linha = document.createElement("tr");
    console.log(usuarios)
    for (linha in usuarios) {
        if (usuarios[linha].symbol == 'DOGEBRL'){
            document.write(usuarios[linha].symbol)
            document.write(" = R$")
            document.write(usuarios[linha].price)
        }
    }
}

binance()