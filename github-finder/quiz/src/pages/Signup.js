import Illustration from '../components/Illustration';
import Form from '../components/Form';
import classes from '../styles/Signup.module.css'

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <Form className={classes.signup} />
            </div>
        </>
    );
}