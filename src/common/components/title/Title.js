import style from './Title.module.scss'

export const Title = (props) => {
    return (
        <h2 className={style.title}>{props.title}</h2>
    )
}