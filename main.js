function buttonClick() {
    var nth = document.getElementById('nth').value
    output = document.getElementById('output')

    if (!Number.isInteger(nth)) {
        output.innerText = 'Input must be integer (' + nth + ')'
        return
    }

    output.innerText = 'nth: ' + fibo(nth)
}

function fibo(n) {
    if (n <= 2)
        return 1

    return fibo(n-1) + fibo(n-2)
}