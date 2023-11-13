//arredonda valor com 2 casas sempre do ultimo digito
function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return 'R$ ' + value 
} 
//função para ajustar a escrita quando tiver mais de 1 pessoa(person/people)
function formatSplit(value) {
    if (value == 1) return value + ' pessoa'
    return value + ' pessoas'
}


function update() {
    let bill = Number(document.getElementById('yourBill').value)//valor da conta
    let tipPercent = document.getElementById('tipInput').value //valor da gorjeta
    let split = document.getElementById('splitInput').value //quantidade de pessoa

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
}