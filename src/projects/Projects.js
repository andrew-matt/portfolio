import styleContainer from "../common/styles/sass/Container.module.scss";
import style from './Projects.module.scss';
import Project from "./project/Project";
import socialNetwork from '../common/images/Social-network.jpg'
import todoList from '../common/images/Todolist.jpg'
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
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
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
