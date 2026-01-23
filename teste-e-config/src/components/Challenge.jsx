export const Challenge = ()=>{

    const soma_numeros =()=>{
        let n1 = 4
        let n2 = 2
        let soma = n1 +n2
        console.log(`Soma de ${n1} e ${n2} é ${soma}`)
    }
    return(
        <div>
            <button onClick={soma_numeros}>Clique aqui para somar</button>
        </div>
    )

}