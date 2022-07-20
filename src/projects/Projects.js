import style from './Projects.module.scss';
import Project from "./project/Project";
import socialNetwork from '../assets/images/Social-network.jpg'
import todoList from '../assets/images/Todolist.png'
import {Title} from "../common/components/title/Title";

export const Projects = () => {

    return (
        <div className={style.projectsBlock}>
            <div className={style.container}>
                <Title title={'My Projects'}/>
                <div className={style.projects}>
                    <Project
                        title={"SOCIAL NETWORK"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
                        image={socialNetwork}
                    />
                    <Project
                        title={"TODOLIST"}
                        description={"Alias dignissimos dolor eos ex incidunt itaque iusto magnam maiores nostrum."}
                        image={todoList}
                    />
                </div>
            </div>
        </div>
    );
}
