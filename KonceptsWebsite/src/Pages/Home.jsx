import FaqAccordian from "../Components/FAQ/Accordian";
import BackgroundSlider from "../Components/BackgroundSlider/BackgroundSlider";
import PriceDetails from "../Components/PriceDetails/PriceDetails";
import EmailandQuote from "../Components/Contents/EmailandQuote";
import DesignPreviewSlider from "../Components/Projectviewer.jsx/ProjectViewer";
const Home = ()=>{
 
    return(
        <>
        <div>
            <BackgroundSlider/>
            <DesignPreviewSlider/>
            {/* <FaqAccordian/> */}
            <PriceDetails/>
        </div>
        </>

    )
}
export default Home; 