export class Valida_cpf {
    constructor(cpf_enviado) {
        Object.defineProperty(this, 'format_cpf', {
            writable: true,
            enumerable: true,
            configurable: false,
            value: cpf_enviado.replace(/\D+/g, '')
        }) 
    }

    valida() {
        if(typeof this.format_cpf === 'undefined') return false
        if(this.format_cpf.length !== 11) return false
        if(this.isSequencia()) return false

        const cpf_parcial2 = this.format_cpf.slice(0, -2)
        const digito1 = Valida_cpf.cria_digito(cpf_parcial2)
        const digito2 = Valida_cpf.cria_digito(cpf_parcial2 + digito1)

        const novo_cpf = cpf_parcial2 + digito1 + digito2

        console.log(novo_cpf)

        return novo_cpf === this.format_cpf
    }

    static cria_digito(cpf_parcial) {
        const cpf_array = Array.from(cpf_parcial)

        let regresivo = cpf_array.length + 1;
        const total = cpf_array.reduce((ac, val) => {
            ac += (regresivo * Number(val));
            regresivo--;
            return ac;
        }, 0); 

        const digito = 11 - (total % 11);

        return digito > 9 ? '0' : String(digito)
    }

    isSequencia() {
        return this.format_cpf.charAt(0).repeat(11) === this.format_cpf
    }
}


// console.log('aoba')

