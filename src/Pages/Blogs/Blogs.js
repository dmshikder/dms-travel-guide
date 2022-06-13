import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs">
           <div className='blog'>
            <h2>1. Difference between authorization and authentication</h2>
            <p>Answer: Authentication is a process to verify user whereas authorization is a process of verifying which resources user can access. </p>
           </div >
           <div className='blog'>
            <h2>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Answer: There are many authentication tools. Such as firebase, Okta etc. I personally love to use firebase because of it reduces development time. Also allow syncing the real-time data across all the devices.</p>
           </div>
           <div className='blog'>
            <h2>3. What other services does firebase provide other than authentication</h2>
            <p>Answer: There are many services firebase provide other than authentication: such as Cloud firestore, Extensions, App check, Cloud Functions, Hosting, Cloud storage, Test lab etc. </p>
           </div>
        </div>
    );
};

export default Blogs;<h3>this is blog</h3>