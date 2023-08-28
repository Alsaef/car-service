// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ChackOut = () => {
    const serviceData = useLoaderData()
    const { _id, service_id, title, price,img } = serviceData;
    console.log(serviceData)
    const {user}=useContext(AuthContext)
    const handelSubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const order=form.order.value;
        const email=form.email.value;
        const phone=form.phone.value;
        const price=form.price.value;
        const date=form.date.value;
        const newOrder={name,email,phone,price,date,order,serviceId:service_id,img}
        console.log(newOrder)
        fetch('http://localhost:3000/bookings',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newOrder)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                form.reset()
               
            }
        })
    }
    return (
       <section className='mb-3'>
        <h2 className='text-center text-3xl pb-3'>Book Service</h2>
         <div className='mx-auto w-11/12 bg-[#F3F3F3] p-24'>
            <form onSubmit={handelSubmit}>
                <div className="form-control ">
                    <div className="input-group lg:flex-row flex justify-center flex-col items-center ">
                      <div className=' p-2'>
                      <input  type="text" defaultValue={user?.displayName} name='name'required placeholder="Your Name" className="input input-bordered" />
                      </div>
                      <div className='p-2'>
                      <input type="text" defaultValue={title} name='order'required placeholder="service" readOnly className="input input-bordered" />
                      </div>
                    </div>
                </div>
                <div className="form-control">
                    <div className="input-group lg:flex-row flex justify-center flex-col items-center">
                       <div className='p-2'>
                       <input type="text" name='phone' required placeholder="Your Phone" className="input input-bordered" />
                       </div>
                        <div className='p-2'>
                        <input readOnly  type="text" defaultValue={user?.email} name='email'required placeholder="Your Email" className="input input-bordered" />
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <div className="input-group lg:flex-row flex justify-center flex-col items-center">
                       <div className='p-2'>
                       <input type="text" readOnly  name='price'required placeholder="Price" defaultValue={"$"+price} className="input input-bordered" />
                       </div>
                        <div className='p-2'>
                        <input  type="date" required name='date' className="input input-bordered" />
                        </div>
                    </div>
                </div>
                <div>
                 <div className=' flex items-center justify-center mt-2'>
                 <input type="submit" value="Order Confirm" className="btn btn-error text-white" />
                 </div>
                </div>
            </form>
        </div>
       </section>
    );
};

export default ChackOut;