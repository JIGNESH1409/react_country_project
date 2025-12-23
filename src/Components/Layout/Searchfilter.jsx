export const Searchfilter=({search,setSearch,filterregion,setFilterRegion,countryData,setCountryData})=>{
    const handleChangeInput=(e)=>{
        e.preventDefault();
        setSearch(e.target.value);
    };
    const handleSelectChange = (event) => {
    event.preventDefault();
    setFilterRegion(event.target.value);
  };

  const sortCountries=(value)=>{

    const sortcountry=[...countryData].sort((a,b)=>{
        return value ==="Asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    });
    setCountryData(sortcountry);

  }

    return <section className="section-searchFilter container">
        <div >
            <input
            placeholder="search"
            type="text"
            value={search}
            onChange={handleChangeInput}
            className="input-section"
           
            />
        </div>

        <div>
            <button onClick ={()=>sortCountries("Asc")}>Asc</button>
        </div>

        <div>
            <button onClick ={()=>sortCountries("Desc")}>Desc</button>
        </div>
         <div>
        <select
         className="select-section"
          value={filterregion}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

    </section>
}