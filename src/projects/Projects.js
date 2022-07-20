import style from './Projects.module.scss';
import Project from "./project/Project";
import socialNetwork from '../assets/images/Social-network.jpg'
import todoList from '../assets/images/Todolist.jpg'
import {Title} from "../common/components/title/Title";

export const Projects = () => {

    const socialNetworkImage = {
        backgroundImage: `url(${socialNetwork})`,
    }

    const todoListImage = {
        backgroundImage: `url(${todoList})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title title={'My Projects'}/>
                <div className={style.projectsWrapper}>
                    <Project
                        title={"SOCIAL NETWORK"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
                        style={socialNetworkImage}
                    />
                    <Project
                        title={"TODOLIST"}
                        description={"Alias dignissimos dolor eos ex incidunt itaque iusto magnam maiores nostrum."}
                        style={todoListImage}
                    />
                </div>
            </div>
        </div>
    );
}
