import {useParams} from "react-router-dom";
import {getcountryinddata} from "../api/postApi";
import { NavLink } from "react-router-dom";
import {Loader} from "../Components/Layout/Loader";
import { useEffect, useState, useTransition } from "react";

export const Getcountryind=()=>{
    const params=useParams();
    const [ispending,startTransition]=useTransition();
    const[country,setCountry]=useState();
        useEffect(()=>{
            startTransition( async ()=>{
            const res = await getcountryinddata(params.id);
            setCountry(res.data[0]);
            })

        },[])
    if(ispending){
        return <Loader/>
    }
    return (
    <section className="card country-details-card container">
        <div className="container-card bg-white-box">
         {country && (
            <div className="country-image grid grid-two-cols">
                  <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="flag"
            />
            <div className="country-details">
            <p className="card-title">{country.name.common}</p>
            <div className="infoContainer">
                <p>
                    <span className="card-description">Native names:</span>
                    {
                        Object.keys(country.name.nativeName).map((curName)=>country.name.nativeName[curName].common).join(", ")
                    }

                </p>

                 <p>
                    <span className="card-description">Population :</span>
                    {
                        country.population.toLocaleString()
                    }

                </p>

                <p>
                    <span className="card-description">Region :</span>
                    {
                        country.region
                    }

                </p>

                <p>
                    <span className="card-description">SubRegion :</span>
                    {
                        country.subregion
                    }

                </p>

                <p>
                    <span className="card-description">Capital :</span>
                    {
                        country.capital[0]
                    }

                </p>

                  <p>
                    <span className="card-description">Top Level Domain :</span>
                    {
                        country.tld[0]
                    }

                </p>

                  <p>
                    <span className="card-description">Currencies :</span>
                   {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}

                </p>

                  <p>
                    <span className="card-description">Languages :</span>
                    {
                        Object.keys(country.languages).map((curlang)=> country.languages[curlang]).join(",")
                    }

                </p>

            </div>
            </div>
            </div>

         )}
         <div>
            <NavLink to="/country" >
                <button >Back</button>
            </NavLink>
         </div>
        </div>
    </section>
    );

}