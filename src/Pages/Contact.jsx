import React, { useState } from 'react';
import axios from 'axios';

const ContactDetails = {
    inputs: [
        { id: 1, detail: "Name *", type: "text", name: "name" },
        { id: 2, detail: "Phone Number *", type: "text", name: "PhoneNumber" },
        { id: 3, detail: "E-mail Id *", type: "email", name: "email" },
        { id: 4, detail: "Country *", type: "text", name: "country" },
        { id: 5, detail: "Select Budget *", type: "text", name: "budget" },
    ],
    checkbox: [
        { id: 1, service: "Web Development" },
        { id: 2, service: "Web Application Development" },
        { id: 3, service: "E-Commerce" },
        { id: 4, service: "Mobile App Development" },
        { id: 5, service: "Web Maintenance" },
        { id: 6, service: "SEO/ Digital Marketing" },
        { id: 7, service: "Branding" },
        { id: 8, service: "Others" },
    ]
};

const Contact = () => {
    const [contactData, setContactData] = useState({
        name: '',
        PhoneNumber: '',
        email: '',
        country: '',
        budget: '',
        services: [],
        projectDetails: ''
    });

    const[errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        setContactData(prevState => {
            const services = prevState.services.includes(value)
                ? prevState.services.filter(service => service !== value)
                : [...prevState.services, value];
            return { ...prevState, services };
        });
    };

    const validate = () => {
        const newErrors = {};
        Object.entries(contactData).forEach(([key, value]) => {
            if (key !== 'services' && !value) {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
            }
        });
        if (contactData.services.length === 0) {
            newErrors.services = 'Please select at least one service.';
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
            const response = await axios.post('http://localhost:5000/api/contact', contactData);
            console.log('Success:', response.data);
            console.log(response)
            alert("Mail Received Successfully")
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="py-20">
            <div className="container">
                <div className="flex justify-center">
                    <h1 className="font-light text-6xl font-Heading mx-auto text-gray-700">Let's Talk Business</h1>
                </div>
                <div className="flex justify-center mt-3">
                    <form onSubmit={handleSubmit} className="w-full md:w-3/4 py-3 rounded-2xl px-2">
                        <div className="flex flex-col md:flex-row justify-center gap-5 w-full rounded-2xl">
                            <div className="w-full">
                                {ContactDetails.inputs.map((item) => (
                                    <div key={item.id} className="w-full">
                                        <label htmlFor={item.name} className="sr-only">{item.detail}</label>
                                        <input
                                            name={item.name}
                                            type={item.type}
                                            placeholder={item.detail}
                                            className="text-xl bg-gray-200 placeholder:text-black placeholder:font-Heading font-thin placeholder:text-lg w-full outline-none px-3 py-2 mb-4"
                                            onChange={handleChange}
                                        />
                                        {errors[item.name] && <p className="text-red-500 text-[15px] font-light">{errors[item.name]}</p>}
                                    </div>
                                ))}
                            </div>
                            <div className="w-full">
                                <div className="bg-gray-200 px-3 py-2">
                                    <h2 className="font-light text-2xl font-Heading mx-auto text-gray-700">Required Services *</h2>
                                    <div>
                                        {ContactDetails.checkbox.map((item) => (
                                            <div key={item.id} className="flex items-center py-2">
                                                <input
                                                    type="checkbox"
                                                    value={item.service}
                                                    onChange={handleCheckboxChange}
                                                    className="opacity-50 checked:accent-gray-700 size-4"
                                                />
                                                <h3 className="text-[18px] my-auto text-gray-600 inline ml-3">{item.service}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {errors.services && <p className="text-red-500 text-[15px] font-light">{errors.services}</p>}
                            </div>
                        </div>
                        <div>
                            <textarea
                                name="projectDetails"
                                className="text-xl bg-gray-200 text-black placeholder:text-black placeholder:font-Heading font-thin placeholder:text-lg w-full outline-none px-3 py-2"
                                placeholder="Project details"
                                rows={4}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-darkblue hover:bg-darkblue/80 font-bold text-white text-lg px-4 py-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;