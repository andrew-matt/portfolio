import style from './Skills.module.css';
import styleContainer from "../common/styles/sass/Container.module.scss";
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill
                        title={"HTML&CSS"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet hic labore nemo obcaecati quam qui voluptatum! Amet animi, consequuntur distinctio exercitationem facere facilis itaque minus quaerat, rerum sunt veritatis voluptatem!"}
                    />
                    <Skill
                        title={"JS"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet hic labore nemo obcaecati quam qui voluptatum! Amet animi, consequuntur distinctio exercitationem facere facilis itaque minus quaerat, rerum sunt veritatis voluptatem!"}
                    />
                    <Skill
                        title={"React"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet hic labore nemo obcaecati quam qui voluptatum! Amet animi, consequuntur distinctio exercitationem facere facilis itaque minus quaerat, rerum sunt veritatis voluptatem!"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;
