import style from './Contacts.module.scss'
import {Title} from '../common/components/title/Title'
import {Button} from '../common/components/button/Button'
import {useFormik} from 'formik'

export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        // validationSchema: Yup.object({
        //     name: Yup.string().required('Name is required'),
        //     email: Yup.string().email('Invalid email address').required('Email is required'),
        //     message: Yup.string().required('Message is required'),
        // }),
        onSubmit: (values, formikHelpers) => {
            // formik.resetForm()
            // axios.post('https://smtp-nodejs-server-39586.herokuapp.com/sendMessage', {values})
        },
    })

    return (
        <div className={style.block}>
            <div className={style.container}>
                <Title title={'Contact With Me'}/>
                <form className={style.form} spellCheck={'false'} onSubmit={formik.handleSubmit}>
                    <div className={style.wrapper}>
                        <span className={style.title}>your name</span>
                        <input type="text" className={style.input} {...formik.getFieldProps('name')}/>
                        <div className={style.error}>
                            {formik.touched.name && formik.errors.name ? formik.errors.name : null}
                        </div>
                    </div>
                    <div className={style.wrapper}>
                        <span className={style.title}>your email</span>
                        <input type="text" className={style.input} {...formik.getFieldProps('email')}/>
                        <div className={style.error}>
                            {formik.touched.email && formik.errors.email ? formik.errors.email : null}
                        </div>
                    </div>
                    <div className={style.wrapper}>
                        <span className={style.title}>your message</span>
                        <textarea cols="30" rows="10"
                                  className={style.textarea} {...formik.getFieldProps('message')}/>
                        <div className={style.error}>
                            {formik.touched.message && formik.errors.message ? formik.errors.message : null}
                        </div>
                    </div>
                    <div>
                        <Button title={'SEND MESSAGE'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
