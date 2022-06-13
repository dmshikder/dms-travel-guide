import { Link, useParams } from 'react-router-dom';
const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
           <h2>service detail: {serviceId}</h2>
         
          <div className='text-center '>
          <Link to='/checkout'>
           <button className='btn btn-primary mb-5'>Proceed to Checkout</button>
           </Link>
          </div>
        </div>
    );
};

export default ServiceDetail;