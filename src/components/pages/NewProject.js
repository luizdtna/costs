

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import { useNavigate } from 'react-router-dom'

const NewProject = () => {

    const navegate = useNavigate()


    //o componente ProjectForm irá utilizar da prop handleSubmit para executar essa função. 
        //Logo esse formulário fará o POST para algula API 
    function createPost(project){

        //initialize cost and services
        project.cost = 0
        project.services = []

        //Estou mockando o banco de dados, com o pacode json-server, então quando POST for executado com sucesso, o arquivo db.json na raiz do projeto terá o projeto criado
        fetch("http://localhost:5000/project",{
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(project)
        })
        .then(
            resp => resp.json()
        )
        .then(
            (data) => {
                console.log(data)
                navegate("/project", {message: "Projeto criado com sucesso!!"})
            })
        .catch((err) => {console.log(err)})
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnForm="CriarProjeto"></ProjectForm>
        </div>
    )
}

export default NewProject