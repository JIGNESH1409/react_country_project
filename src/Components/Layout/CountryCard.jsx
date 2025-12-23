import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
export const CountryCard=({country})=>{
    const {name,population,region,capital,flags}=country;
    return <li className="country-card card">
        <div className="container-card bg-white-box">
            <img src={flags.svg} alt={flags.alt}/>
           <div>
            <p className="card-title">{name.common.length > 15 ? name.common.slice(0,10) + "..." : name.common}</p>
            <p>
                <span className="card-description">Population: </span>
                {population.toLocaleString()}
            
            </p>
            <p>
                <span className="card-description">Region: </span>
                {region}
            </p>
            <p>
                <span className="card-description">capital: </span>
                {capital[0]}
            </p>
            <NavLink to={ `/country/${name.common}`} >
        <button>Read More <FaArrowRightLong/></button>
        </NavLink>
           </div>

        </div>
      
    </li>
}