import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast'
import css from './SearchBar.module.css'

export default function SearchBar({onSubmit}) {
    
    const handleSubmit = (values, actions) => {
        if (values.query.trim() ==="") {
            toast.error("Fill the search field")
        }


        onSubmit(values.query.trim())
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={{ query: "" }}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <Field
                    className={css.input}
                    type="text"
                    name="query"
                    autoComplete="off"
                    placeholder="Search movie">   
                </Field>
                <button
                    className={css.btn}
                    type="submit">Search</button>
                <div><Toaster
                        position="top-center"
                        toastOptions={{
                            duration: 5000,
                            style: {
                                marginTop: "160px",
                                background: '#363636',
                                color: '#fff',
                            },
                        }}
                    />
                    </div>
            </Form>
        </Formik>

    )
}