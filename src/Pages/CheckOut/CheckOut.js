import { useParams } from 'react-router-dom';
const CheckOut = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>this is checkout page</h2>
           
            
        </div>
    );
};

export default CheckOut;