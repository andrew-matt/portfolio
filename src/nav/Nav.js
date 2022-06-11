import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="src/nav/Nav">Main</a>
            <a href="src/nav/Nav">Skills</a>
            <a href="src/nav/Nav">Projects</a>
            <a href="src/nav/Nav">Contacts</a>
        </div>
    );
}

export default Nav;
