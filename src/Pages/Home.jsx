import FaqAccordian from "../Components/FAQ/Accordian";
import BackgroundSlider from "../Components/BackgroundSlider/BackgroundSlider";
import PriceDetails from "../Components/PriceDetails/PriceDetails";
import EmailandQuote from "../Components/Contents/EmailandQuote";
const Home = ()=>{
 
    return(
        <>
        <div>
            <BackgroundSlider/>
            <FaqAccordian/>
            <PriceDetails/>
           
        </div>
        </>

    )
}
export default Home; 