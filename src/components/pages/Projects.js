import Messege from "../layout/Message"
import { useLocation } from "react-router-dom"

const Projects = () =>{

    const location = useLocation()
    let message = ""
    if(location.state){
        message = location.state.message
    }


    return (
        <div>
            <h1>Meus projetos</h1>
            {message && <Messege message={message} type="success"/>}
           
        </div>
    )
}

export default Projects