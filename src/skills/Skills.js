import style from './Skills.module.scss';
import styleContainer from "../common/styles/sass/Container.module.scss";
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5, faJsSquare, faReact} from "@fortawesome/free-brands-svg-icons";

export const Skills = () => {

    const reactDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet hic labore nemo obcaecati quam qui voluptatum!"

    const javascriptDescription = "Mauris pharetra et ultrices neque ornare. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla."

    const htmlDescription = "Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed."

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.title}><Title title={'My Skills'}/></div>
                <div className={style.skillsWrapper}>
                    <Skill
                        title={"React"}
                        description={reactDescription}
                        icon={<FontAwesomeIcon icon={faReact} color={'#ff014f'} size={'3x'}/>}
                    />
                    <Skill
                        title={"JS"}
                        description={javascriptDescription}
                        icon={<FontAwesomeIcon icon={faJsSquare} color={'#ff014f'} size={'3x'}/>}
                    />
                    <Skill
                        title={"HTML & CSS"}
                        description={htmlDescription}
                        icon={<FontAwesomeIcon icon={faHtml5} color={'#ff014f'} size={'3x'}/>}
                    />
                </div>
            </div>
        </div>
    );
}
