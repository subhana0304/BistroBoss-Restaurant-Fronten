import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';
import UseMenu from '../Hoocks/UseMenu';
import { Link } from 'react-router-dom';

const PopulerMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')


    return (
        <div className='mb-16 mx-auto flex flex-col items-center'>
            <SectionTitle subHeading='Populer Items' heading='from our menu'></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='my-12 mx-auto'>
            <Link to="/order"><button className="btn btn-outline text-center border-0 border-b-4 border-orange-500">Order Now</button></Link>
            </div>
        </div>
    );
};

export default PopulerMenu;