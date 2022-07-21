import style from './Freelance.module.scss'
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

export const Freelance = () => {
    return (
        <div className={style.block}>
            <div className={style.footerContainer}>
                <Title title={'I Am Available For Freelance'}/>
                <div>
                    <Button title={'HIRE ME'}/>
                </div>
            </div>
        </div>
    )
}
