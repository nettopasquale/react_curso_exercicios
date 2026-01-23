export const SecondComponent =()=>{
    const renderizarAlgo = (x)=>{
        if(x){
            return <h1>Rendizando isso!</h1>
        }else{
            return <h1>Renderizando outra coisa...</h1>
        }
    }
    return(
        <div>
            <div>
                {renderizarAlgo(true)}
                {renderizarAlgo(false)}
            </div>
        </div>
    )
}