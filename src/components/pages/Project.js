import style from "./Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState({});
  const [showProjectForm, setShowProjectForm] = useState(false);

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

  return (
    <>
      {project.name ? (
        <div className={style.project_datails}>
          <Container customClass="column">
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
                <div className={style.projectInfo}>Project form</div>
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
