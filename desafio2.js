const calcularFibonacci = tamanho => {
    let fibonacci = [0]
    let valorAnterior = 0
    let valorAtual = 1
    let auxiliar = 0
    for (let i = 1; i <= tamanho; i++) {
        valorAtual = valorAnterior + valorAtual 
        valorAnterior = auxiliar       
        fibonacci.push(valorAtual)
        auxiliar = valorAtual

    }
    return fibonacci
}

const pertenceFibonacci = numero => {
    let fibonacci = calcularFibonacci(numero)
    if(fibonacci.indexOf(numero) > 0 || numero === 0) return "O número está presente na sequência de Fibonacci"
    return "O número não está presente na sequência de Fibonacci"

}

console.log(pertenceFibonacci(0))

