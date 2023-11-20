let resultado = rankeadas(7,3)
let nivelHeroi

function rankeadas(vitorias, derrotas){
    let somatorio = vitorias - derrotas
    return somatorio
}

if(resultado <= 10){
    nivelHeroi = "ferro"
}
else if(resultado >= 11 && resultado <= 20){
    nivelHeroi = "bronze"
}
else if(resultado >= 21 && resultado <= 50){
    nivelHeroi = "prata"
}
else if(resultado >= 51 && resultado <= 80){
    nivelHeroi = "ouro"
}
else if(resultado >= 81 && resultado <= 90){
    nivelHeroi = "diamante"
}
else if(resultado >= 91 && resultado <= 100){
    nivelHeroi = "lendário"
}
else if(resultado >= 101){
    nivelHeroi = "imortal"
}

console.log(`O Herói tem de saldo de ${resultado} e está no nível de ${nivelHeroi}`)