import styleContainer from "../common/styles/Container.module.css";
import style from './Projects.module.scss';
import Project from "./project/Project";
import socialNetwork from '../common/images/Social-network.jpg'
import todoList from '../common/images/Todolist.jpg'
import {Title} from "../common/components/title/Title";

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
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project
                        title={"SOCIAL NETWORK"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
                        style={socialNetworkImage}
                    />
                    <Project
                        title={"TODOLIST"}
                        description={"Alias dignissimos dolor eos ex incidunt itaque iusto magnam maiores nostrum numquam possimus quam rerum."}
                        style={todoListImage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
