import Link from "next/link";
import Image from "next/image";
 
function FeatureBanner() {
    const menulist = [{ id: 1, title: 'Features' , link: '/features'}, { id: 2, title: 'Community' , link: '/community'},{ id: 3, title: 'How it work' , link: '/howitwork'}, {id:4, title: 'Pricing' , link: '/pricing '} ]; 
    return(
     <>
     <section className="banner-div float-start sub-page-banners w-100 position-relative pb-5">
         <div className="container position-relative">
            <div className="row align-items-start">
               <div className="col-lg-7">
                  <div className="items-text01">
                     <h2 className="main-heading"> Clarity, Connection, and Confidence — in Every Cycle.  </h2>
                     <p className="col-lg-9"> A simple, science-backed flow that gets your whole household aligned. </p>
                  </div>
               </div>
            </div>
         </div>
     </section>
     </>
     )
};
export default FeatureBanner;
   