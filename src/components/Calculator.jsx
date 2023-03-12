import React , { useState } from 'react'
import  axios  from 'axios';

export default function Calculator() {
    const calculate = (e) => {
        e.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://love-calculator.p.rapidapi.com/getPercentage',
            params: {fname: fname, sname: lname},
            headers: {
              'X-RapidAPI-Key': '35bb3b5787msh4357cfbbce9886cp1831e6jsn4e397a2db309',
              'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
          };

          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
          setfname("")
          setlname("")
    }

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [data, setdata] = useState({})

  return (
    <>
    <div className="bg-white flex items-center jusify-center justify-center" style={{ fontFamily: '"Lato", sans-serif' }}>
    <div className="flex md:flex-row flex-col items-center pt-4 px-4">
        <div className="flex flex-col">
            <label htmlFor="fname" className="text-gray-800  text-sm font-bold leading-tight tracking-normal mb-2">
                Your Name
            </label>
            <input value={fname} onChange={(e) => setfname(e.target.value)} id="fname"  className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 bg-white  h-10 flex items-center pl-3 text-sm border-gray-300  rounded border shadow" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col p-4">
            <label htmlFor="lname" className="text-gray-800  text-sm font-bold leading-tight tracking-normal mb-2">
                Your Name
            </label>
            <input id="lname" value={lname} onChange={(e) => setlname(e.target.value)} className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 bg-white  h-10 flex items-center pl-3 text-sm border-gray-300  rounded border shadow" placeholder="Enter your beloved one's name" />
        </div>
    </div>
</div>
<div className='flex justify-center items-center'>
    <button onClick={(e) => calculate(e)} className="mx-2 my-2 bg-pink-700 transition duration-150 ease-in-out hover:bg-pink-600 rounded text-white px-6 py-2 text-sm">Button</button>
    </div>
</>
  )
}
