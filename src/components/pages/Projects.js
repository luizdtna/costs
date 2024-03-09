import Messege from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import loading from "../layout/Loading";

import LinkButtonPage from "../layout/LinkButtonPage";
import ProjectCard from "../project/ProjectCard";
import { useEffect, useState } from "react";
import Loading from "../layout/Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, SetProjectMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          console.log(data);
          setRemoveLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  }, []);

  const removeProject = (id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "aaplication/json" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id));
        SetProjectMessage("Projeto removido com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButtonPage to="/newproject" text="Criar Projeto"></LinkButtonPage>
      </div>
      {message && <Messege message={message} type="success" />}
      {projectMessage && <Messege message={projectMessage} type="success" />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            ></ProjectCard>
          ))}

        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados</p>
        )}
      </Container>
    </div>
  );
};

export default Projects;
