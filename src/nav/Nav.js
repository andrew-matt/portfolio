import style from './Nav.module.scss';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">MAIN</a>
            <a href="">SKILLS</a>
            <a href="">PROJECTS</a>
            <a href="">CONTACT</a>
        </div>
    );
}
