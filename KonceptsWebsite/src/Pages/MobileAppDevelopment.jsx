import { Services } from "../Components/Navbar/ResponsiveNavbar";
import { useNavigate } from "react-router-dom";
const MobileAppDevelopment = ()=>{
    const navigate = useNavigate();

    const moveServicePage = (to)=>{
        navigate(to);
    }
    const mobileappdevdata = [
        {
            id: 1,
            title: "iOS App Development Services",
            details: "iOS application development brings Apple’s sleek design and smooth functionality to life, covering all Apple hardware like iPhone, iPad, and iPod Touch. Built with Swift and Objective-C, these apps are deployed seamlessly to the App Store. Known for their exceptional performance, iOS apps are among the best in the market. Koncepts Design and Development stands as one of India’s premier iOS mobile application development companies."
        },
        {
            id: 2,
            title: "Android App Development Services",
            details: "At Koncepts Design and Development, we excel in Android app development, crafting applications that perform beautifully on Android smartphones and tablets. Our development process leverages the Android SDK and languages like Java, giving us flexibility in creating dynamic Android experiences. Our team’s deep understanding of the Android architecture, including components like Application Frameworks and Linux Kernel, ensures highly functional and efficient apps. Reach out to us for your Android app development needs."
        },
        {
            id: 3,
            title: "Flutter App Development Services",
            details: "Flutter has revolutionized app development with its ability to build, test, and deploy applications from a single codebase for any device. Known for exceptional performance across screens and devices, Flutter empowers us to create versatile apps. Koncepts Design and Development is a trusted name in Flutter app development, delivering impactful solutions to meet client needs. If you’re considering Flutter for your app, we’re here to help."
        },
        {
            id: 4,
            title: "React Native App Development Services",
            details: "React Native has rapidly gained popularity as a flexible and efficient framework for mobile app development. Built by Facebook, it allows developers to create powerful apps using JavaScript while sharing code across platforms. Our team at Koncepts Design and Development is experienced in crafting seamless, high-performance React Native applications that offer a native-like experience. Trust us to bring your ideas to life with React Native."
        },
        {
            id: 5,
            title: "Swift App Development Services",
            details: "Swift is a fast, powerful language designed to streamline the development process for iOS, desktop, and server applications. Its simplicity and high performance make it a top choice for developers. Koncepts Design and Development has a dedicated team proficient in Swift, committed to creating efficient and engaging applications. We’re ready to support your Swift app development journey with expertise and precision."
        },
        {
            id: 6,
            title: "Ionic App Development Services",
            details: "Ionic is an excellent choice for creating cross-platform applications with a polished look and feel. Built on Angular and Cordova, Ionic allows for flexibility and ease in development while maintaining high standards for user interface elements. Koncepts Design and Development offers a team experienced in Ionic, delivering cross-platform apps that perform seamlessly on iOS and Android. Connect with us for your Ionic app development needs."
        },
        {
            id: 7,
            title: "Cross Platform Mobile App Development Services",
            details: "Cross-platform mobile app development enables a unified approach, allowing one codebase to work across multiple operating systems like iOS, Android, Windows, and macOS. This approach ensures consistency in design, speeds up deployment, and reduces costs. At Koncepts Design and Development, we specialize in cross-platform app solutions, providing efficient and cost-effective apps tailored to your business goals. Let us help you expand your app’s reach across platforms."
        }
    ];
    
    return(
        <div className="pt-24">
            <div className="container">
            <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/12">
                        <h1 className="font-Heading text-xl">Services</h1>
                        <ul className="pl-0">
                            {Services.map((items) =>(
                                <li className={`${items.id === 2 ? "list-disc text-sm py-1 ml-6":"list-none py-2"} cursor-pointer font-ContentText pt-2 text-[15px] text-slate-600 text-justify`} onClick={()=>moveServicePage(items.to)}>{items.service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">Leading mobile app design and development <br /> company in India.</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mt-4"><span className="text-slate-700 font-semibold">Koncepts Design and Development stands as one of India’s top mobile app design and development companies,</span>focused on making your app stand out in a competitive landscape. As a leading mobile app development agency, we integrate user-friendly features such as push notifications, social media integration, user feedback, secure payment gateways, live maps, and advanced analytics to create a seamless user experience.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify">As a top mobile application development company and premier app design agency in India, Koncepts Design and Development brings expertise and precision to every project. <span className="text-slate-700 font-semibold">Our skilled developers possess in-depth knowledge of the iOS SDK’s tools, technologies, and languages, enabling them to create impactful, high-quality iOS native apps.</span> We are also leaders in building innovative Android native apps tailored to support the Android operating system. Looking to hire mobile app developers from India at competitive rates? Contact us at reach@konceptsdesign.com for a reliable partnership. We have an established reputation, positive client feedback, and provide exceptional services at affordable rates.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify"><span className="text-slate-700 font-semibold">Koncepts Design and Development is a leading Android app development company in India,</span> renowned for creating highly engaging and effective interfaces. <span className="text-slate-700 font-semibold">Our apps are built with a focus on security and stability, ensuring a seamless experience for users.</span> As a top application development company, we specialize in designing and developing mobile and web applications that drive business growth. Leveraging cutting-edge technology, we deliver innovative solutions tailored to meet the needs of businesses and startups alike.</p>
                    </div>
                </div>
                <div className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       {
                        mobileappdevdata.map(({id,title,details}) =>(
                                <div key={id} className="border-l-2 border-darkblue pl-2 md:pl-6 h-fit flex flex-col gap-3">
                                    <div className="">
                                        <h1 className="text-2xl font-Heading pt-2">{title}</h1>
                                    </div>
                                    <div>
                                        <p className="font-ContentText text-[15px] md:text-[17px] text-slate-600 text-justify">{details}</p>
                                    </div>
                                </div>
                        ))
                       } 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MobileAppDevelopment;