import React, { useEffect, useState } from 'react'
import '../App.css';
import { useAuth } from '../contexts/AuthContext';
import Modal from './Modal';
import { storage } from '../constants/firebase';
import {ref, uploadBytes, getDownloadURL,
listAll,
list} from 'firebase/storage';
import {URL} from '../constants/data';
import { v4 } from 'uuid';  
 const imagesListRef = ref(storage, "images/");

  const Hero = () => {
  const [imageUpload, setImageUpload] = useState(null);
  

const {currentUser} = useAuth();
const [openModal, setOpenModal] = useState(false);

const [record, setRecord] = useState({
  title:'',
  make:'',
  modal:'',
  price:'',
  description:'',
  image:''
})
const handleChange = (e) =>{
  setRecord({...record, [e.target.name]: e.target.value}) 
}
const uploadImage = (e) =>{
     console.log(e.target.name)
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUpload(reader.result.toString())
    }
   reader.readAsDataURL(file)
}
const {imageUrls, setImageUrls} = useAuth();


const addData= async()=>{
  const { title,make,modal,price,description} = record;

 if(title ==='' || make===''  || modal==='' || price==='' || description===''|| imageUpload==null ){
alert("Kindly fill  fields")
 }
 else {
  fetch(`${URL}`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      car_title: title, 
      car_make: make,
      car_modal:modal, 
      car_price:price ,
      car_description:description,
      car_image:imageUpload,
      user_id: currentUser.uid
    })
})
    .then((response) => response.json())
    .then((responseData) => {
        console.log(
            "POST Response",
            "Response Body -> " + JSON.stringify(responseData) 
            + alert("Congratulations! You registered a Car")
        )
    })
    .catch(error => console.log(error.toString()))
 }
 setRecord({
  title:'',
  make:'',
  modal:'',
  price:'',
  description:'',
  image:''
 })
 setImageUpload(null)
  
  
}



  return (
 <>
 <div class="hero min-h-screen flex py-10 md:flex-row flex-col 
 items-center" >
 
    <div className="flex-1 flex flex-col justify-center h-full pt-20 px-6"
 
 >     <h1 className="md:text-5xl text-2xl font-poppins md:leading-normal leading-10
   text-white
 font-bold">
        Most Trusted And Reviewed Automobiles
          </h1> 
          
          <h1 className=" text-white font-bold font-poppins">
          A vehicle management system is a powerful tool, which can be implemented to improve fleet efficiency, manage drivers’ 
          performance, track vehicle data, and integrate it into a company’s ERP
          </h1>   
          
      </div>

   <div className="flex-1 mt-10 ">
        <div className="md:text-left text-center">
      <div className=' relative'>
      <div class="">
  <div class="min-h-screen flex justify-center items-center">
    <div class="p-5 flex-1 ">
      <div class="w-2/3 lg:w-auto md:w-auto sm:w-auto bg-white rounded-3xl 
      
      mx-auto overflow-hidden shadow-xl">
        <div class="relative h-40 bg-secondary rounded-bl-4xl">
          <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1"
             d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
         
        </div>
        <div class="lg:px-0 xl:px-0 md:px-0 sm:px-0 px-5 bg-white 
        w-auto
        rounded-tr-4xl">
     
          <h1 class="text-2xl font-semibold text-gray-900 font-poppins px-10">Register Car Here</h1>
          <form class="mt-5 w-auto px-10 ">
            <div class="relative">
              <input id="title" name="title" type="text" class="peer h-10 w-full
               border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none
                focus:border-secondary" placeholder="abc" value={record.title}
                onChange={handleChange}
                />
              <label for="email" class="absolute left-0 -top-3.5
               text-gray-600 text-sm transition-all peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5
                 peer-focus:text-gray-600 peer-focus:text-sm">Title</label>
              
            </div>
            <div class="relative mt-5">
              <input id="email" name="make" type="text" class="peer h-10 w-full
               border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none
                focus:border-secondary" placeholder="abc" value={record.make}
                onChange={handleChange}
                />
              <label for="username" class="absolute left-0 -top-3.5
               text-gray-600 text-sm transition-all peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5
                 peer-focus:text-gray-600 peer-focus:text-sm">Make</label>
              
            </div>
            
            
            <div class="mt-5 relative">
              <input id="modal" type="text" name="modal" class="peer h-10 w-full border-b-2
               border-gray-300 text-gray-900 placeholder-transparent focus:outline-none
                focus:border-secondary" placeholder="Modal"  value={record.modal}
                onChange={handleChange}
                />
             
              <label for="password" class="absolute left-0 -top-3.5 
              text-gray-600 text-sm transition-all peer-placeholder-shown:text-base
               peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5
                peer-focus:text-gray-600 peer-focus:text-sm">Modal</label>
            </div>
            <div class="mt-5 relative">
              <input id="password" type="number" name="price" class="peer 
              h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent 
              focus:outline-none focus:border-secondary" placeholder="Price" 
               value={record.price}
               onChange={handleChange}
               />
              <label for="password" class="absolute left-0 -top-3.5
               text-gray-600 text-sm 
              transition-all peer-placeholder-shown:text-base
               peer-placeholder-shown:text-gray-400
               peer-placeholder-shown:top-2 peer-focus:-top-3.5
                peer-focus:text-gray-600 peer-focus:text-sm" >Price</label>
            </div>
            <div class="mt-5 relative">
            <input id="description" type="text" name="description" class="
            peer h-10 w-full py-4 border-b-2 border-gray-300 text-gray-900 
            placeholder-transparent focus:outline-none focus:border-secondary"
             placeholder="Description" value={record.description}
             onChange={handleChange}
             />
              <label for="password" class="absolute left-0 -top-3.5
               text-gray-600 text-sm 
              transition-all peer-placeholder-shown:text-base
               peer-placeholder-shown:text-gray-400
               peer-placeholder-shown:top-2 peer-focus:-top-3.5
                peer-focus:text-gray-600 peer-focus:text-sm">Description</label>
      
            </div>
            <div class="mt-5 relative">
            
            <div class="flex justify-center">
    <div class="max-w-2xl bg-gray-50">
        <div class="m-4">
          {imageUpload != null ? <p className='font-poppins text-sm font-bold text-black'>
            Uploaded Image Successfully!</p> : <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w-full h-32 border-2
                    border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach Image</p>
                    </div>
                    <input type="file" name='image' 
                    onChange={e => uploadImage(e)} 
                    accept=".jpg,.png,.jpeg"
                    class="opacity-0" />
                    
                </label>
            </div>  }
           
        </div>
        
    </div>
</div> 
</div>
<input type="sumbit" onClick={()=>{
            
              currentUser ? addData():  setOpenModal(true)
            }} 
          
           
            value={currentUser? 'Add Car' : 'Join Us'  
          }
          
            
            class="mt-5 px-4 py-2 mb-10 rounded-xl bg-secondary hover:bg-dimYellow text-white 
            font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2
             focus:ring-secondary    focus:ring-opacity-80 cursor-pointer" />
          </form>
          
        </div>
      </div>
    </div>
  </div>
</div>
<div>
    
    <Modal 
    open={openModal} 
    onClose={() => setOpenModal(false)}
    text="Kindly SignIn First"
    
    />
    </div>
      </div>

          </div>
        </div>
     
      </div>

 </>
  )
}

export default Hero
