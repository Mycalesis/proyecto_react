import Big from "big.js"

export default function operate (numeroUno, numeroDos, operador) {
    const uno = Big(numeroUno || "0")
    const dos = Big(numeroDos || (operador === "/" || operador === "x" ? "2" : "0"))
    
    if (operador === "+") return uno.plus(dos)
}