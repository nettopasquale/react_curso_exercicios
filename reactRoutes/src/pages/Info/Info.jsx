import { useParams } from 'react-router-dom'
import './Info.css'

export const Info = () => {
    const {id} = useParams();
  return (
    <div>
        <h1>Informações do produto ID: {id}</h1>
    </div>
  )
}
