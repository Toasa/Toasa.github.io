function buttonClick() {
    var nth = document.getElementById('nth').value

    output = document.getElementById('output')
    output.innerText = 'nth: ' + fibonacci(nth)
}

function fibonacci(n) {
    if (n < 2)
        return 1

    return f(n-1) + f(n-2)
}