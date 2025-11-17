import Image from 'next/image';
import styles from './page.module.css';
import Navication from './components/Navication';
import Footer from './components/Footer';
import HomeBanner from './components/HomeBanner';
import Link from 'next/link';
import MobileMenus from './components/MobileMenus';
import SignupModal from './components/SignupModal';
import LoginModal from './components/LogiModal';

export default function Home() {


  const csteps = [
    { id: 1, subtitel: 'Step 1' , title: 'Sign Up & Invite' , description: 'Create an account and invite your partner with a consented link.'}, 
    { id: 2, subtitel: 'Step 2' , title: 'Track Daily' , description: 'Log moods, symptoms, sleep and meals in under 60 seconds.'},  
    { id: 3, subtitel: 'Step 3' , title: 'Get Insights & Grow' , description: 'Receive Al forecasts, personalized tips, and shared challenges to build momentum together.'},
    
  ]; 

  const pricings = [
    { id: 1, price: 'Free' , title: 'Freemium' , link:'/contact', description: 'New users exploring tracking basics', text:"Get Started" }, 
    { id: 2, price: 'Contact us' , link:'/contact', title: 'Mid' , description: 'Couples starting AI + partner support', text:"Get Started" },  
   
  ];
  
  return (
    <>
      <Navication/>
      <HomeBanner/>
      <main className="float-start w-100 main-body position-relative mt-5 pt-5">
       


        <section className="how-its-works-sections float-start w-100 bg-light">
            <div className="container">
                 <h2 className="main-heading text-center"> Clarity, Connection, and Confidence — in Every Cycle. </h2>
                 <p className="text-center text-sub-paara mt-2"> A simple, science-backed flow that gets your whole household aligned. </p>
                 <div className="row row-cols-1 row-cols-lg-3 mt-4 gy-4">
                  {csteps.map((type) => (
                      <div className='col' key={type.id}>
                          <div className="comonns-works01 d-inline-block text-center">
                            <h5> {type.subtitel} </h5>
                            <h3> {type.title} </h3>
                            <p> {type.description} </p>
                          </div>
                      </div>
                  ))}
                 </div>
            </div>
       </section>

       <section className="pricings-sections float-start w-100 bg-white">
           <div className="container">
               <h2 className="main-heading text-center"> Pricing </h2>
               <p className="text-center text-sub-paara mt-2"> Free tracking for life. Premium removes limits and unlocks partner features,
                   Al forecasts, and full personalization. </p>
               <div className="row row-cols-1 row-cols-lg-4 pricings-tablesd01 justify-content-center gy-4 mt-4">
                   {pricings.map((type) => (
                      <div className='col' key={type.id}>
                          <div className="pricings-tags d-inline-block w-100">
                               <h5> {type.title} </h5>
                              <ul className="ms-0 ps-0">
                                  <li> 
                                    {type.description}
                                  </li>                              
                              </ul>
                              <h2> {type.price} </h2>
                              <Link href={type.link} className="btn btn-subcribe01"> {type.text} </Link>
                          </div>
                      </div>
                  ))}
                    
               </div>
           </div>
        </section>

         <section className="faq-sections float-start w-100">
         <div className="container">
             <h2 className="main-heading text-center"> FAQ </h2>

             <div className="faq-sections015 col-lg-9 mx-auto mt-4">
                  <div className="accordion" id="accordionExample">
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                           <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                             Q1: Is HerCompassAI a medical app?
                           </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
                               <p> No. HerCompassAI provides wellness tools and educational content. It’s not a substitute for professional medical advice. Always consult your doctor. </p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwot" aria-expanded="false" aria-controls="collapseTwo">
                             Q2: How does the partner support work?
                           </button>
                        </h2>
                        <div id="collapseTwot" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
                              <p> Partners can access digest dashboards, empathy lessons in the Men’s Academy, and join couple challenges (with user consent). </p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreer" aria-expanded="false" aria-controls="collapseThree">
                             Q3: Will my health data be private?
                           </button>
                        </h2>
                        <div id="collapseThreer" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
                               <p> Yes. Your logs are encrypted and only shared with your partner if you grant explicit consent. </p>
                           </div>
                        </div>
                     </div>

                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeu" aria-expanded="false" aria-controls="collapseThree">
                             Q4: How does AI personalization work?
                           </button>
                        </h2>
                        <div id="collapseThreeu" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
                               <p> Our system analyzes your logs, lifestyle data, and optional wearable syncs to predict trends (e.g., “Hot flashes likely to decrease next week”). </p>
                           </div>
                        </div>
                     </div>

                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1u" aria-expanded="false" aria-controls="collapseThree">
                             Q5: Is the content science-backed?
                           </button>
                        </h2>
                        <div id="collapseThree1u" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
                               <p> Yes — all nutrition, fitness, and symptom management advice references peer-reviewed research and global health guidelines. </p>
                           </div>
                        </div>
                     </div>

                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2u" aria-expanded="false" aria-controls="collapseThree">
                             Q6: Can men use the app alone?
                           </button>
                        </h2>
                        <div id="collapseThree2u" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
                               <p> Yes. The Men’s Academy is available as a standalone module to help men understand menopause. </p>
                           </div>
                        </div>
                     </div>

                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3u" aria-expanded="false" aria-controls="collapseThree">
                             Q7: What devices are supported?
                           </button>
                        </h2>
                        <div id="collapseThree3u" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
                               <p> HerCompassAI works on mobile and desktop browsers. </p>
                           </div>
                        </div>
                     </div>

                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree4u" aria-expanded="false" aria-controls="collapseThree">
                             Q8: Does it cost money?
                           </button>
                        </h2>
                        <div id="collapseThree4u" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
                               <p> Core features are free. Advanced AI insights and partner tools may require a subscription. </p>
                           </div>
                        </div>
                     </div>


                     



                  </div>
             </div>

         </div>
       </section>

        
      </main>

      <Footer/>
      <MobileMenus/>
      <SignupModal/>
      <LoginModal/>
   
    </>
  )
}
