import style from './Title.module.scss'

type TitlePropsType = {
    title: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <h2 className={style.title}>{props.title}</h2>
    )
}