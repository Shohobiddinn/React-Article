import { Link } from 'react-router-dom';
import notfound from '/404-not-found.gif';
import { Button } from '../UI';
const NotFound = () => {
    return (
        <>
            <div className='relative'>
                <img src={notfound} alt="Not-Found" className='w-full h-screen object-cover' />
                <Link to='/' className='absolute top-[70%] left-[50%] translate-x-[-50%] z-10 text-white'>
                    <Button>Home Page</Button>
                </Link>
            </div>


        </>
    )
};

export default NotFound;