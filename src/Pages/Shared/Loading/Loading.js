import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'400px'}} className='w-10 d-flex justify-content-center align-items-center'>
            <Spinner animation='border' variant='primary'></Spinner>
        </div>
    );
};

export default Loading;