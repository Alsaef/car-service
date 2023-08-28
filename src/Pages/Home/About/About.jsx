// eslint-disable-next-line no-unused-vars
import React from 'react';
import Person from '../../../assets/images/about_us/person.jpg'
import Pers from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row items-center">
    <div className=' w-1/2 relative'>
    <img src={Person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={Pers} className=" w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
    </div>
    <div className=' w-1/2 ps-3'>
      <h1 className="text-5xl font-bold space-y-6">We are qualified & of experience in this field!</h1>
      <p className="py-6 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="py-6 space-y-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
      <button className="btn btn-warning text-white">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;