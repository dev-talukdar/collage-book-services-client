 

import img1 from '../assets/grad_pic/1.jpg'
import img2 from '../assets/grad_pic/2.jpg'
import img3 from '../assets/grad_pic/3.jpg'
import img4 from '../assets/grad_pic/4.jpg'
import img5 from '../assets/grad_pic/5.jpg'
import img6 from '../assets/grad_pic/6.jpg'
import img7 from '../assets/grad_pic/7.jpg'
import img8 from '../assets/grad_pic/8.jpg'
import img9 from '../assets/grad_pic/9.jpg'
import img10 from '../assets/grad_pic/10.jpg' 
import img11 from '../assets/grad_pic/11.jpg' 
import img12 from '../assets/grad_pic/12.jpg' 


const GalleryCard = () => {  

    return (
        <div className='container mx-auto'>
            <h3 className='text-center font-bold text-xl mt-6 mb-16'>Our Graduates</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ... hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img1}
            />
            <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img2}
            />
            <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img3}
            />
            <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img4}
            />
            <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img5}
            />
            <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img6}
            />
            <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img7}
            />
            <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img8}
            />
              <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img9}
            />
              <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img10}
            />
            <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img11}
            />
            <img
                className="object-cover w-full border hover:cursor-pointer  scale-100 hover:scale-105 hover:ease-in duration-500 ..."
                src={img12}
            />
               
        </div>
        </div>
    );
};

export default GalleryCard;