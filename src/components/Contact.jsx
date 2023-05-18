// import emailjs from 'emailjs-com';
// import React, { useRef, useState } from 'react'
// import { styles } from '../styles'
import { sectionWrapper } from '../hoc/index'
// import { slideIn } from '../utils/motion'
// import {EarthCanvas} from './canvas'
// import { motion } from 'framer-motion';


// p-key
// BuAaQD96VuXvNAlZP

// template_hwqyi28

// email
// service_kxd38xi


// const Contact = () => {
//   const formRef=useRef();
//   const [form, setForm] = useState({
//     name:"",
//     email:"",
//     message:""
//   })
//   const [loading, setLoading] = useState(false)
//   const handleChange=(e)=>{
//     const {name,value}=e.target;
//     setForm({...form,[name]:value})
//   }
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     setLoading(true)
//     emailjs.send(
//       'service_kxd38xi',
//       'template_hwqyi28',
//       {
//         from_name:form.name,
//         to_name:"Atif Raza",
//         from_email:from.email,
//         to_email:"atifrazamadi@gmail.com",
//         message:form.message,

//       },
//       'BuAaQD96VuXvNAlZP'
//       ).then(()=>{
//           setLoading(false)
//           lert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name:"",
//             email:"",
//             message:"",
//           })

//       },(error)=>{
//         setLoading(false)
//         console.log(error)

//         alert('Something went wrong. ')
//       })
//   }

//   return (
//     <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidedn'>
//       <motion.div 
//       variants={slideIn("left","tween",0.2,1)}
//       className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//       >
//         <p className={`${styles.sectionSubText}`}>Get in tuch</p>
//         <h3 className={`${styles.sectionHeadText}`}>Contact</h3>
//       <form
//        ref={formRef}
//        onSubmit={handleSubmit}
//        className='mt-12 flex flex-col gap-8'
//        >

//         <label className='flex flex-col'>
//           <span className='text-white font-medium mb-4'>Your Name</span>
//           <input
//            type="text"
//            name="name"
//            value={form.name}
//            onChange={handleChange}
//            placeholder='What is your name?'
//            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-noe border-none '
//            />
//         </label>
//         <label className='flex flex-col'>
//           <span className='text-white font-medium mb-4'>Your Email</span>
//           <input
//            type="email"
//            name="email"
//            value={form.email}
//            onChange={handleChange}
//            placeholder='What is your email?'
//            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-noe border-none '
//            />
//         </label>
//         <label className='flex flex-col'>
//           <span className='text-white font-medium mb-4'>Your Message</span>
//           <textarea
//           rows="7"
           
//            name="message"
//            value={form.message}
//            onChange={handleChange}
//            placeholder='What do you want to say?'
//            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-noe border-none '
//            />
//         </label>
//         <button
//         type='submit'
//         className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
//         >{loading? 'sending...':'send'}</button>
//        </form>

//       </motion.div>
//       <motion.div 
//       variants={slideIn("right","tween",0.2,1)}
//       className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas/>
//       </motion.div>

//     </div>
//   )
// }

// export default sectionWrapper(Contact,"")


import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef=useRef();
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


// p-key
// BuAaQD96VuXvNAlZP

// template_hwqyi28

// email
// service_kxd38xi

    emailjs
      .send(
        'service_kxd38xi',
        'template_hwqyi28',
        {
          from_name: form.name,
          to_name: "Atif Raza",
          from_email: form.email,
          to_email: "atifrazamadi@gmail.com",
          message: form.message,
        },
        'BuAaQD96VuXvNAlZP'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default sectionWrapper(Contact, "contact");