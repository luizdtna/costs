import style from "./Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm"
import Message from '../layout/Message'

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState({});
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  const [indexMsg, setIndexMsg] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 2000);
  }, [id]);

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const editPost = (project) =>{
    if(project.budget < project.cost){
      setMessage("O orçamento não pode ser menor que o custo do projeto")
      setType('error')
      setIndexMsg(indexMsg + 1)
      return false
    }
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(project)
    }).then(resp => resp.json()).then(data => {
      setProject(data)
      setShowProjectForm(false)
      setMessage("Projeto")
      setType('succes')
      setIndexMsg(indexMsg + 1)
    }).catch(err => console.log(err))
  }

  return (
    <>
      {project.name ? (
        <div className={style.project_datails}>
          <Container customClass="column">
            {message && <Message type={type} message={message} indexNewMsg={indexMsg}></Message>}
            <div className={style.datails_container}>
              <h1>{project.name}</h1>
              <button className={style.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar Projeto" : "fechar"}
              </button>
              {!showProjectForm ? (
                <div className={style.projectInfo}>
                  <p>
                    <span>categoria</span>
                    {project.category.name}
                  </p>
                  <p>
                    <span>Total orçamento</span>R${project.budget}
                  </p>
                  <p>
                    <span>Total utilizado</span>R${project.cost}
                  </p>
                </div>
              ) : (
                <div className={style.projectInfo}>
                  <ProjectForm handleSubmit={editPost} btnForm="Concluir Edição" projectData={project}/>
                </div>
                
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}

export default Project;
