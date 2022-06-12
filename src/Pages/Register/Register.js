import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {

    const handleRegister = event =>{
        event.preventDefault();
    }
    return (
        <div className="register-form">
            <h2 className='register-title'>Please register</h2>
            <form onSubmit={handleRegister }>
                <input type="text" name="name" id=""  placeholder="Your name" required/>
                <input type="email" name="email" id=""  placeholder="Your email" required/>
                <input type="password" name="password" id=""  placeholder="Your  password" required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none ' >Please Login</Link></p>
        </div>
    );
};

export default Register;