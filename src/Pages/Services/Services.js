import { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(()=>{
    fetch('fakeData.json')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[]);
  return (
    <div className="container">
    <h1 className='my-services'>My services</h1>

    <div className="services-container">
    {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}

    </div>
    
    </div>
  );
};

export default Services;