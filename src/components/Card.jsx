import React, {useState} from 'react';
const Card = ({item}) => {
  const [searchTerm, setSearchTerm]= useState('');
  return (
    <>
   <input type="text"
    class="peer h-10 w-auto mt-10
    px-5 
    bg-transparent
    border-b-2 border-secondary placeholder-gray-500 focus:outline-none
     focus:border-secondary"
               placeholder="Search here"
               onChange={ event => setSearchTerm(event.target.value) }
               />
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6
    text-black font-poppins
    '>
    {item.filter((val)=> {
      if(searchTerm=="") {
        return val
      
      }
      else if(val.car_title.toLowerCase().includes(searchTerm.toLowerCase())){
       return val
      }
    }).map((Val)=>{
      return (
      
       <>
        <div className="w-full rounded-md shadow-md border border-dimYellow lg:max-w-sm">
          
            <img
           className="object-fit w-full h-48 p-3"
           src={Val.car_image}
           alt="image"
       />  
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight">
                    {Val.car_title}
                </h4>
                <p className="mb-2 leading-normal">
                   {Val.car_description}
                </p>
                <p className="mb-2 leading-normal">
                   {Val.car_price}
                </p>
            </div>
        </div>
        </>
        
      )
    })}
  
    </div>
    </>
  )
}

export default Card
