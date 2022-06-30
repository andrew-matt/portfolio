import styleContainer from "../common/styles/Container.module.css";
import style from './Projects.module.css';
import Project from "./project/Project";
import socialNetwork from '../common/images/social-network.png'
import todoList from '../common/images/todolist.jpg'

function Projects() {

    const socialNetworkImage = {
        backgroundImage: `url(${socialNetwork})`,
    }

    const todoListImage = {
        backgroundImage: `url(${todoList})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <h2>Projects</h2>
                </div>
                <div className={style.projects}>
                    <Project
                        title={"SOCIAL NETWORK"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
                        style={socialNetworkImage}
                    />
                    <Project
                        title={"TODOLIST"}
                        description={"Alias dignissimos dolor eos ex incidunt itaque iusto magnam maiores nostrum numquam possimus quam rerum, sit ut voluptatem. Consequatur cum odit recusandae."}
                        style={todoListImage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
