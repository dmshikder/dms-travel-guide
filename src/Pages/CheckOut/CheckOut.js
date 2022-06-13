import { useParams } from 'react-router-dom';
const CheckOut = ({service}) => {
    
    const {serviceId} = useParams();
    return (
        <div className="register-form">
        <h2 className='register-title'>Checkout Info </h2>
        <form>
            <input type="text" name="name" id=""  placeholder="Your name" required/>
            <input type="email" name="email" id=""  placeholder="Your email" required/>
       <input type="text" name="address" id="" placeholder='Your address' required/>
       <input type="number" name="phone" id="" placeholder='Enter phone number' required />
            <input type="submit" value="Submit" />
        </form>
     
    </div>
    );
};

export default CheckOut;