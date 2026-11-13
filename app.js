window.alert(`Boas vindas ao jogo do número secreto`)
let numeroMaximo = 5000
let numero_secreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numero_secreto)
let chute
let tentativas = 1
//enquanto não for igual ao numero secreto
while (chute != numero_secreto) {
  chute = window.prompt(`Escolha um número de 1 a ${numeroMaximo}`)
  // se o chute for igual ao numero secreto
  if (chute == numero_secreto) {
    break
  } else {
    if (chute > numero_secreto) {
      window.alert(`O número secreto é menor que ${chute}`)
    } else {
      window.alert(`O número secreto é maior que ${chute}`)
    }
    tentativas++
  }
}
let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`
window.alert(
  `Isso aí! Você descobriu o número secreto: ${numero_secreto}, com ${tentativas} ${palavraTentativa}!!!`,
)
/*if (tentativas > 1) {
  window.alert(
    `Isso ai! você descobriu o número secreto: ${numero_secreto}, com ${tentativas} tentativas!!!`,
  )
} else {
  window.alert(
    `Isso ai! você descobriu o número secreto: ${numero_secreto}, com ${tentativas} tentativa!!!`,
  )
} */
// pull
