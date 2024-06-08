import { Link } from "react-router-dom";
import css from './NotFoundPage.module.css'

export default function NotFoundPage() {
    return (
        <p className={css.text}>
            Sorry, page not found! Please go to <Link to="/" className={css.link}>HOME PAGE</Link>
        </p>
    )
}