let num1 = 1
let num2 = 2

num1++
console.log(num1)
                        // indiferente se ++ ou -- esta antes ou depois, porem precedencia tem prioridade
--num1
console.log(num1)

console.log(++num1 === num2--) // ordem -> ++ === --, a comparacao é feita antes de num2--
console.log(num1 === num2)