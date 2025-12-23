import { NavLink } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";
export const HeroSection=()=>{
    return <>
    <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">Explore the world, One Country at a time </h1>
                    <p className="paragraph">Discover the beauty and diversity of our planet with WorldAtlas.
                        From the majestic mountains to the serene beaches, immerse yourself in the wonders of nature and culture.
                    </p>
                    <NavLink to="/country">
                    <button className="btn btn-darken btn-inline bg-white-box"> Start Exploring <FaArrowRightLong/> </button>
                    </NavLink>    

                
                </div>
                <div className="hero-image">
                    <img src="/Images/world.png" alt="world country" className="banner-image"/>
                </div>
            </div>
        </main>
    </>
}