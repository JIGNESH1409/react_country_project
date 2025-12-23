import {getCountryData} from "../api/postApi";
import {Loader} from "../Components/Layout/Loader";
import { useEffect, useState, useTransition } from "react";
import { NavLink } from "react-router-dom";
import "../App.css"
import { CountryCard } from "../Components/Layout/CountryCard";
import { Searchfilter } from "../Components/Layout/Searchfilter";
export const Country=()=>{
    const[isPending,startTransition]=useTransition();
    const[countryData,setCountryData]=useState([]);

    const [search,setSearch]=useState();
    const [filterregion,setFilterRegion]=useState("all");

    const searchCountry=(country)=>{
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;

    }

    const filterCountry=(country)=>{
        if(filterregion==="all" ) return country;
        return country.region===filterregion;
    }

    const filterData=countryData.filter(
        (country)=>searchCountry(country) && filterCountry(country)
        
    )
    
    useEffect(()=>{

        startTransition (async()=>{

        const res=await getCountryData();
        setCountryData(res.data);
        })


    },[])
    if(isPending){
        return <Loader/>
    }
    return(
       <section className="country-section">
        <Searchfilter search={search} setSearch={setSearch} filterregion={filterregion} setFilterRegion={setFilterRegion} countryData={countryData} setCountryData={setCountryData}/> 
        <ul className="grid grid-four-cols">
            {
                filterData.map((curCountry)=>{
                    return <CountryCard country={curCountry} />
                })
            }
            
        </ul>
        
       </section>
    )
}