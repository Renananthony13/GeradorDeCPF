import { Valida_cpf } from "./Valida_cpf";

export class Gera_cpf {
    constructor() {
        this.validador = this.validador()
    }

    gera_nums (max, min) {
        return Math.floor(Math.random() * (max - min)) + min
    }

    cria_cpf_al(num) {
        let cpf = [];
        for(let i = 0; i < 11; i++) {
            let numero_ale = this.gera_nums(9, 0);
            cpf.push(numero_ale)
        }

        // console.log(cpf)

        cpf = cpf.join('');
        let pnt = cpf.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})/, "$1.$2.$3-$4")
        return pnt
    }

    validador() {
       const cpf = this.cria_cpf_al();
       const validador = new Valida_cpf(cpf)
      

       while(validador.valida() !== true) {
        const cpf = this.cria_cpf_al();
        const validador = new Valida_cpf(cpf)
        validador.valida()


        if(validador.valida() === true) {
            const caixa_resposta = document.querySelector('.caixa_resposta')
            const p = document.querySelector('p')

            p.textContent = cpf
            caixa_resposta.appendChild(p)

          
            console.log(cpf + '|' + validador.valida())


            break
        }

        
       }

       
    }
}

document.querySelector('.button_cpf').addEventListener('click', function() {
    const gera = new Gera_cpf()
})

document.querySelector('.caixa_resposta').addEventListener('click', function() {
    const caixa_resposta = document.querySelector('.caixa_resposta')

    console.log(caixa_resposta.children[0].Selected)
})




// const p1 = new Valida_cpf('44771750866')
// console.log(p1.valida())
