export const FirstCompontent = ()=>{
    // comentário fora do render
    const handleMeuEvento = ()=>{
        alert("Ativado!")
    }

    return(
        <div>
            {/* comentário dentro do render */}
            <h1>Meu primeiro componente</h1>
            <p>
                {4+4}
            </p>
            <button onClick={handleMeuEvento}>Cique aqui!</button>
            <button onClick={()=> alert("Clicou aqui!")}>Cique aqui também!</button>
            <button onClick={()=> {
                alert("Clicou aqui onde não deveria existir")
            }}>Cique aqui também também!</button>
            
        </div>
    )
}