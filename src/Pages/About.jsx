import country from "../api/country.json"
export const About=()=>{
    return (
    <section className="section-about container">
        <h1 className="container-title">Here are the intresting facts
            <br></br>
            About the Country
        </h1>

        <div className="gradient-cards">
            { 
           country.map((curElem)=>{
            const {id,population,title,interestingFact,capital,countryName}=curElem;
            return (
             <div className="card" key={id}>
                <div className="container-card bg-green-box">
                    <p className="card-title">{countryName}</p>
                    <p>
                        <span className="card-description">Captial:</span>
                    {capital}
                    </p>
                    <p>
                        <span className="card-description">population</span>
                    {population}
                    </p>
                    <p>
                        <span className="card-description">Intresting facts:</span>
                    {interestingFact}
                    </p>

                </div>
            </div>
            );

           })
        }
        </div>
        


    </section>
    );
}