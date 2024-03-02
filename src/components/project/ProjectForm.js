import { useEffect, useState } from 'react'

import styles from './ProjectFrom.module.css'
import InputForm from '../form/InputForm'
import SelectForm from '../form/SelectForm'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = ({handleSubmit, btnForm, projectData}) => {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
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
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value})
    }

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