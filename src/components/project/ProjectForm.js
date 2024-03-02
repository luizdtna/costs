import { useEffect, useState } from 'react'

import styles from './ProjectFrom.module.css'
import InputForm from '../form/InputForm'
import SelectForm from '../form/SelectForm'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = ({handleSubmit, btnForm, projectData}) => {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {

        //Está usando o Banco mockado, então é necessário rodar: npm rum backend no terminal para inicial o servidor backend mockado
        fetch("http://localhost:5000/categories", { 
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then((resp) => { return resp.json() })
        .then((data) => setCategories(data))
        .catch((err) => console.log(err) )}, [])


    const submit = (e) => {
        e.preventDefault()//remove o comportamento do DOM de recarregar a página ao enviar o formulário
        handleSubmit(project)//método a set executado para lidar com as repostas do formulário. Vem do componente pai, que pode ser um componente de Edição, Criação...
    }
    
    //Vai adicionar ao objeto project os valores digitados nos campos de input. Repare nos inputs, eles estão invocando esse metodo no onChange
    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    //Vai adicionar ao objeto project o valor selecionado no input de <Select>. Repare, que ele  está invocando esse metodo no onChange
    function handleCategory(e) {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }


    return(
        <form onSubmit={submit} className={styles.form}>
            <InputForm 
                type="text" 
                textLabel="Nome do projeto" 
                name="name" 
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}></InputForm>
            
            <InputForm 
                type="number" 
                textLabel="Orçamento do projeto" 
                name="budget" 
                placeholder="Insira o orçamento do projeto"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}></InputForm>

            <SelectForm 
                textLabel="Selecione a categoria" 
                name="category_id"
                options={categories}
                value={project.category ? project.category.id : '' }
                handleOnChange={handleCategory}></SelectForm>

            <SubmitButton textButton={btnForm}></SubmitButton>

        </form>
    )
}

export default ProjectForm