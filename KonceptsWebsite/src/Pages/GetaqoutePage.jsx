import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GetaquotePage = ()=>{

    const MultipleSevices = [
        {id:"TO",value:"Branding", activebg:"bg-red-500"},
        {id:"B",value:"Web design", activebg:"bg-green-500"},
        {id:"C",value:"Campaigns", activebg:"bg-pink-500"},
        {id:"D",value:"Content", activebg:"bg-orange-500"},
        {id:"AND",value:"Impact", activebg:"bg-blue-500"},
        {id:"F",value:"Others", activebg:"bg-gray-500"},
    ]
const Deadline = [
    {id:"TO",value:"1-3 months",activebg:"bg-red-500" },
    {id:"B",value:"3-6 months" ,activebg:"bg-green-500"},
    {id:"C",value:"6-12 months" ,activebg:"bg-pink-500"},
    {id:"D",value:"Ongoing work" ,activebg:"bg-orange-500"},
    ]

const MeetUs = [
{id:"TO",value:"Google",activebg:"bg-red-500"},    
{id:"B",value:"Social Media",activebg:"bg-green-500"},
{id:"C",value:"A friend or colleage",activebg:"bg-pink-500"},
{id:"D",value:"Others",activebg:"bg-orange-500"},
    ]

const Budget = [
    {id:"TO",value:"$5k-$15k" ,activebg:"bg-red-500"},    
    {id:"B",value:"$15K-$50k",activebg:"bg-green-500"},
    {id:"C",value:"$50k-$100k",activebg:"bg-pink-500"},
    {id:"D",value:"Others",activebg:"bg-orange-500"},
    ]
    const [ServiceValues,SetServiceValue] = useState([]);
    const [DeadlineValue,SetDeadlineValue] = useState();
    const [MeetupValue,SetMeetupValue] = useState();
    const [BudgetValue,SetBudgetValue] = useState();
    const [FieldDeadlineDis,setFieldDeadlineDis] = useState(true);
    const [FieldMeetDis,setFieldMeetDis] = useState(true);
    const [FieldBudgetDis,setFieldBudgetDis] = useState(true);
    const [FieldFormDis,setFieldFormDis] = useState(true);
    const [HandleServiceBg,setHandleServiceBg] = useState({});
    const [HandleDeadlineBg,setHandleDeadlineBg] = useState({});
    const [HandleMeetupBg,setHandleMeetupBg] = useState({});
    const [HandleBudgetBg,setHandleBudgetBg] = useState({});
    const handleservice=(id,value)=>{

        setHandleServiceBg((prev)=>({...prev,[id]:!prev[id]}))
        
        SetServiceValue((prev)=>{
            if(prev.includes(value)){
                return prev.filter(V => V !==value)
            }
            else{
                return [...prev,value]
            }
        })
        addEventListener('click',()=>{
            setFieldDeadlineDis(false)
        })
    } 
    const handledeadline = (id, value) => {
        SetDeadlineValue(value);
        setHandleDeadlineBg({ [id]: true });
        setFieldMeetDis(false)
    };
    
    const handlemeetup=(id,value)=>{
        SetMeetupValue(value);
        setHandleMeetupBg({[id]:true});
        setFieldBudgetDis(false);
        
    }
    const handlebudget=(id,value)=>{
        SetBudgetValue(value);
        setHandleBudgetBg({[id]:true});
        setFieldFormDis(false);
        
    }

    const getButtonBgClass = (clicked, defaultColor, activeColor) => {
        return `${clicked ? activeColor : defaultColor}`;
    };
    const [QouteForm,setQouteForm] = useState({
        goal:'',
        company:'',
        firstname:'',
        lastname:'',
        doclink:'',
        email:'',
        phonenumber:'',
    });
    const handleFormchange=(e)=>{
        const {name,value} = e.target;
        setQouteForm({...QouteForm,[name]:value})
    }
    const QuoteData = {
        servicevalue:ServiceValues,
        goal:QouteForm.goal,
        company:QouteForm.company,
        firstname:QouteForm.firstname,
        lastname:QouteForm.lastname,
        doclink:QouteForm.doclink,
        email:QouteForm.email,
        phonenumber:QouteForm.phonenumber,
        deadline:DeadlineValue,
        meetup:MeetupValue,
        budget:BudgetValue,
    }

    console.log(QuoteData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5555/api/getaqoute', QuoteData);
            console.log('Success:', response.data);
            console.log(response)
            alert("successfully submitted")
        } catch (error) {
            console.error('Error:', error);
          
        }
    };
    

    return(
        <>
        <div className="container pt-24">
            <div>
                <div className="flex items-center gap-x-5 md:gap-x-20 lg:gap-x-40">
                    <h3 className="text-[15px] md:text-xl font-normal">Project enquiry form</h3>
                    <Link to={'/contact'} className="text-black"><h5 className="text-sm font-normal">More Contact Details</h5></Link>
                </div>
                <div className="getaquotepagepadding">
                    <fieldset>
                    <h1 className="text-3xl mb-0 md:text-5xl">How can we help?</h1>
                    <p className="text-sm mb-0 md:text-lg py-3">You can select multiple services</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {
                            MultipleSevices.map(({id,value,activebg} ,index)=>{
                                return <button
                                onClick={()=>handleservice(id,value)} 
                                key={index} 
                                className={`${getButtonBgClass(HandleServiceBg[id],'bg-darkblue', activebg)} hover:scale-110 transition-all duration-300 text-white rounded-md p-3 flex flex-col justify-between gap-y-12`}
                                >
                                    <p className="text-center mb-0 rounded-full border border-white w-8 text-[14px] py-1">{id}</p>
                                    <p className="text-left text-xl mb-0">{value}</p>
                                </button>
                            })
                        }
                        </div>
                    </fieldset>
                    <fieldset className={`${FieldDeadlineDis ? "opacity-30" : "opacity-100"} getaquotepagepadding`} disabled={FieldDeadlineDis}>
                    <h1 className="text-3xl mb-0 md:text-5xl py-3">What do deadlines look like?</h1>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {
                                Deadline.map(({id,value,activebg},index)=>{
                                    return <button 
                                    onClick={()=>handledeadline(id,value)}
                                    key={index} 
                                    className={`${getButtonBgClass(HandleDeadlineBg[id], 'bg-darkblue', activebg)} ${FieldDeadlineDis ? "" :"hover:scale-110 transition-all duration-300"} text-white rounded-md p-3 flex flex-col justify-between gap-y-12`}
                                    >
                                    <p className="text-center mb-0 rounded-full border border-white w-8 text-[14px] py-1">{id}</p>
                                    <p className="text-left text-xl mb-0">{value}</p>
                                </button>
                                })
                            }
                        </div>
                    </fieldset>
                    <fieldset className={`${FieldMeetDis ? "opacity-30" : "opacity-100"} getaquotepagepadding`} disabled={FieldMeetDis}>
                    <h1 className="text-3xl mb-0 md:text-5xl py-3">How did you meet us?</h1>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {
                                MeetUs.map(({id,value,activebg},index)=>{
                                    return <button
                                    onClick={()=>handlemeetup(id,value)} 
                                    key={index} 
                                    className={`${getButtonBgClass(HandleMeetupBg[id], 'bg-darkblue', activebg)} ${FieldMeetDis ? "" :"hover:scale-110 transition-all duration-300"} text-white rounded-md p-3 flex flex-col justify-between gap-y-12`}
                                    >
                                    <p className="text-center mb-0 rounded-full border border-white w-8 text-[14px] py-1">{id}</p>
                                    <p className="text-left text-xl mb-0">{value}</p>
                                </button>
                                })
                            }
                        </div>
                    </fieldset>
                    <fieldset className={`${FieldBudgetDis ? "opacity-30" : "opacity-100"} getaquotepagepadding`} disabled={FieldBudgetDis}>
                    <h1 className="text-3xl mb-0 md:text-5xl py-3">What is your budget?</h1>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {
                                Budget.map(({id,value,activebg},index)=>{
                                    return <button
                                    onClick={()=>handlebudget(id,value)} 
                                    key={index} 
                                    className={`${getButtonBgClass(HandleBudgetBg[id], 'bg-darkblue', activebg)} ${FieldBudgetDis ? "" :"hover:scale-110 transition-all duration-300"} text-white rounded-md p-3 flex flex-col justify-between gap-y-12`}
                                    >
                                    <p className="text-center mb-0 rounded-full border border-white w-8 text-[14px] py-1">{id}</p>
                                    <p className="text-left text-xl mb-0">{value}</p>
                                </button>
                                })
                            }
                        </div>
                    </fieldset>
                </div>
                <fieldset disabled={FieldFormDis} className={`${FieldFormDis ? "opacity-30" : "opacity-100"} getaquotepagepadding`}>
                    <h1 className="text-3xl mb-0 md:text-5xl py-4">Tell us about you and your project</h1>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <div className="w-full h-full text-white bg-darkblue px-3 py-10 flex flex-col justify-end rounded-md">
                                    <p className="mb-0">What are your goals with this project?:</p>
                                    <input onChange={handleFormchange} name="goal" type="text" placeholder="Enter your goals" className="bg-transparent focus:outline-none"/>
                                </div>
                            </div>
                            <div>
                                <div className="mb-3">
                                    <div className="w-full h-full text-white bg-darkblue px-3 py-10 flex flex-col justify-end rounded-md">
                                        <p className="mb-0">Company:</p>
                                        <input onChange={handleFormchange} name="company" type="text" placeholder="HOB" className="bg-transparent focus:outline-none"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full h-full text-white bg-darkblue px-3 py-10 flex flex-col justify-end rounded-md">
                                        <p className="mb-0">Link to brief, or other useful documents:</p>
                                        <input onChange={handleFormchange} name="doclink" type="text" placeholder="Enter a URL (One Drive,Google Drive,etc)" className="bg-transparent focus:outline-none"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                <div className="w-full h-full text-white bg-darkblue px-3 py-10 flex flex-col justify-end rounded-md">
                                    <p className="mb-0">First name:</p>
                                    <input required onChange={handleFormchange} name="firstname" type="text" placeholder="Thomas" className="bg-transparent focus:outline-none"/>
                                </div>
                                <div className="w-full h-full text-white bg-darkblue px-3 py-10 flex flex-col justify-end rounded-md">
                                    <p className="mb-0">Last name:</p>
                                    <input required onChange={handleFormchange} name="lastname" type="text" placeholder="Shelby" className="bg-transparent focus:outline-none"/>
                                </div>
                                <div className="w-full h-full text-white bg-darkblue px-3 py-10 flex flex-col justify-end rounded-md">
                                    <p className="mb-0">Email:</p>
                                    <input required onChange={handleFormchange} name="email" type="email" placeholder="thomasshelby@gmail.com" className="bg-transparent focus:outline-none"/>
                                </div>
                                <div className="w-full h-full text-white bg-darkblue px-3 py-10 flex flex-col justify-end rounded-md">
                                    <p className="mb-0">Telephone</p>
                                    <input required onChange={handleFormchange} name="phonenumber" type="text" placeholder="91+1234567890" className="bg-transparent focus:outline-none"/>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="w-full h-full rounded-md bg-black flex items-end p-3 text-white text-5xl">
                                    <button onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </fieldset>
            </div>
        </div>
        </>
    )
}
export default GetaquotePage;