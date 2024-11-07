import { IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import axios from "axios";
import React, { useState } from 'react';

const carrierdetails = {
    inputs: [
        { id: 1, detail: "First Name", type: "text", name: "FirstName" },
        { id: 2, detail: "Last Name", type: "text", name: "LastName" },
        { id: 3, detail: "E-Mail", type: "email", name: "Email" },
        { id: 4, detail: "Phone No", type: "text", name: "PhoneNumber" },
        { id: 5, detail: "CollegeName", type: "text", name: "CollegeName" },
        { id: 6, detail: "Department", type: "text", name: "Department" },
    ],
    inputradio: [
        { id: "one", detail: "1st year", type: "radio" },
        { id: "two", detail: "2nd year", type: "radio" },
        { id: "three", detail: "3rd year", type: "radio" },
        { id: "four", detail: "4th year", type: "radio" },
    ]
};

const Carrier = () => {
    const [carrierData, setCarrierData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        CollegeName: '',
        datails: [],
        Department: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarrierData({ ...carrierData, [name]: value });
    };

    const handleRadioChange = (e) => {
        const { value } = e.target;
        setCarrierData(prevState => {
            const datails = prevState.datails.includes(value)
                ? prevState.datails.filter(detail => detail !== value)
                : [...prevState.datails, value];
            return { ...prevState, datails };
        });
    };

    const validate = () => {
        const newErrors = {};
        Object.entries(carrierData).forEach(([key, value]) => {
            if (key !== 'datails' && !value) {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
            }
        });
        if (carrierData.datails.length === 0) {
            newErrors.datails = 'Please select at least one year.';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5555/api/carrier', carrierData);
            console.log('Success:', response.data);
            setCarrierData({
                FirstName: '',
                LastName: '',
                Email: '',
                PhoneNumber: '',
                CollegeName: '',
                datails: [],
                Department: ''
            });
            setErrors({});
            alert("successfully submitted")
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="pt-36 pb-20">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="text-center w-full md:w-1/2 px-5 py-4 shadow-xl border-2 border-gray-300 rounded-3xl hover:scale-105 transition-transform duration-500">
                            <h2 className="pb-4 font-Heading">Get In <span className="text-darkblue">Touch</span></h2>
                            <a href="tel:+917845420505" className="no-underline">
                                <h3 className="text-gray-600 font-medium text-lg font-ContentText">Call us for quick support!</h3>
                            </a>
                            <div className="flex items-center justify-center gap-3 pt-5">
                                <IoCall size={35} />
                                <a href="tel:+917845420505" className="no-underline text-black text-xl">+91 78454 20505</a>
                            </div>
                        </div>
                        <div className="text-center w-full md:w-1/2 px-5 py-4 shadow-xl border-2 border-gray-300 rounded-3xl hover:scale-105 transition-transform duration-500">
                            <h2 className="pb-4 font-Heading">Reach out <span className="text-darkblue">Via E-mail</span></h2>
                            <a href="mailto:sridhar@konceptsdandd.com" className="no-underline">
                                <h3 className="text-gray-600 font-medium text-lg font-ContentText">Send us an email for inquiries!</h3>
                            </a>
                            <div className="flex items-center gap-3 justify-center pt-3">
                                <TbMailFilled size={35} />
                                <a href="mailto:sridhar@konceptsdandd.com" className="no-underline text-black text-xl">sridhar@konceptsdandd.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="text-center">
                            <h1>Looking <span className="text-darkblue">For Internship?</span></h1>
                            <h2>Are you a student and looking for internship? We are hiring!</h2>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="bg-white py-5">
                                <div className="w-full md:w-1/2 mx-auto">
                                    {carrierdetails.inputs.map((item) => (
                                        <div key={item.id}>
                                             <div className="flex w-full group items-center mb-2">
                                                <div className="w-[35%] border-b border-darkblue py-3">
                                                    <label htmlFor={item.name} className="text-[15px] md:text-xl">{item.detail}</label>
                                                </div>
                                                <div className="w-[65%] border-b border-darkblue relative after:w-[0] after:absolute after:content-[''] after:bg-darkblue after:h-[2px] after:-bottom-[2px] after:left-0 after:duration-1000 group-hover:after:w-[100%] group-focus-within:after:w-[100%]">
                                                    <input onChange={handleChange} type={item.type} name={item.name} id={item.name} className="outline-none w-full text-[16px] md:text-xl text-darkblue py-3"/>
                                                </div>
                                            </div>
                                            {errors[item.name] && <p className="text-red-500">{errors[item.name]}</p>}
                                        </div>
                                    ))}
                                    <div className="grid grid-cols-2 gap-3 mt-5">
                                        {carrierdetails.inputradio.map((item) => (
                                            <div key={item.id} className="mx-auto">
                                                <input
                                                    onChange={handleRadioChange}
                                                    name="year"
                                                    id={item.id}
                                                    value={item.detail}
                                                    type={item.type}
                                                />
                                                <label htmlFor={item.id} className="pl-3 cursor-pointer">{item.detail}</label>
                                            </div>
                                        ))}
                                        {errors.datails && <p className="text-red-500 text-[15px] font-light">{errors.datails}</p>}
                                    </div>
                                    <h2 className="text-center text-lg md:text-xl mt-4">Share your Resume via E-mail</h2>
                                    <button className="w-full bg-darkblue hover:bg-darkblue/80 font-bold text-white text-lg px-4 py-2 rounded-full mt-3">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carrier;
