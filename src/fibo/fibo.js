function buttonClick() {
    var nth = document.getElementById('nth').value
    output = document.getElementById('output')

    if (isNaN(parseInt(nth)) || nth < 1) {
        output.innerText = 'Input must be positive integer: ' + nth
        return
    }

    output.innerText = nth + 'th: ' + fibo(nth)
}

function fibo(n) {
    if (n <= 2)
        return 1

    return fibo(n - 1) + fibo(n - 2)
}