import React, {useState, useEffect} from 'react'
import { Card } from '../components';
import Button from '../components/Button';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from '../style';
import { getDatabase, ref, onValue} from "firebase/database";
import { carMake ,carModal} from '../constants/data';
import { Bars } from 'react-loading-icons'
const CardSection = () => {
    const [item, setItem] = useState([]);
    const [carRec, setCarRec] = useState([]);
    const [loading,setIsLoading] = useState(false);
    const menuItems =carMake;
    const menuItems2 =carModal;
    const db = getDatabase();
    const filterItem = (curcat) => {
    const newItem = carRec.filter((newVal) => {
      return newVal.car_make.toLowerCase() === curcat.toLowerCase();
    });
    console.log(newItem)
    setItem(newItem)
  };
const starCountRef = ref(db, '/carsDatabase' );

useEffect(()=>{
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
  if(data!=null) {
    Object.values(data).map((car)=>{
     setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setItem((oldArray)=> [...oldArray, car ])
        setCarRec((oldArray)=> [...oldArray, car ])
      }, 3000);
     
    })
    
  }
   
  });
},[])

   const handleChange = (e) =>{
   const newPrice = carRec.filter((val) => {
      return e[0] === parseInt(val.car_price) || e[1] === parseInt(val.car_price)
       || e[0] <= parseInt(val.car_price) 
   })
   setItem(newPrice)
   console.log(e)

   }
   const filterItem3 = (curcat) => {
    console.log(curcat)
    const newItem = carRec.filter((newVal) => {
      return parseInt(newVal.car_modal) === curcat;
    });
    setItem(newItem);
  };

  return (
   <>
   <section id="cars">
   <div className='bg-primary flex flex-col 
   md:flex-row lg:flex-row xl:flex-row px-6 pb-3'>
    <div className=' h-auto'>
    <h3 className="md:text-5xl text-2xl  
         font-poppins md:leading-normal leading-10 text-black
 font-bold ">

          <span className="text-black">Cars</span>
        </h3>
        <h3 className='md:text-2xl text-1xl font-poppins md:leading-normal leading-10
             text-black
 font-bold'>
        Make  
        </h3>
       
      <Button
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
            show={true}
            carRec={carRec}
          />
          <h3 className='md:text-2xl text-1xl font-poppins md:leading-normal leading-10
             text-black mt-5
 font-bold'>
        Modal 
        </h3>
       
      <Button
            filterItem={filterItem3}
            setItem={setItem}
            menuItems={menuItems2}
            show={true}
            carRec={carRec}
          />
         <h3 className='md:text-2xl text-1xl 
           mt-5 font-poppins md:leading-normal px-1 leading-10 text-black
 font-bold'>
        Price 
        </h3>
        <div className='flex w-auto px-6 py-3'>
        <Slider 
        range
        min={100000}
        max={1000000000}
        onChange={handleChange}
        marks={{
          100000:100000,
          500000000: 50000000,
          1000000000:100000000
        }}
         dotStyle={{
          background:'#482D70',
          border:'#482D70'
         }}
        handleStyle={{
          background:'#482D70',
          borderColor:'#482D70'
          
        }}
        trackStyle={{ backgroundColor: '#1B1B42', height: 6}}
        />
       </div>
    </div>
    <div className='w-full'> 
  <div  className={`flex-1 flex-col flex ${styles.flexCenter} md:my-0
   bg-primary `}>
{loading ? 
<div className='grid h-screen place-items-center'>
<Bars  fill='#1B1B42' width="50px" strokeOpacity={0} speed={.75}/>
</div> : 
<Card item={item} /> 
}
   
  </div>
    </div>
   </div>
   </section>
   </>
  )
}

export default CardSection
