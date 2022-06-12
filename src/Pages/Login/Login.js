import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle();



    return (
        <div>
            <h1>Please login</h1> <br />
            <button onClick={signInWithGoogle}>Google Sign In </button>
        </div>
    );
};

export default Login;