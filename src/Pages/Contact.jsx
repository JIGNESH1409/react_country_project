export const Contact=()=>{
    const handleFormSubmit=(FormData)=>{

        const formInput=Object.fromEntries(FormData.entries());
        console.log(formInput);


    }
    return <>
  <section className="section-contact">
    <h1 className="container-title">Contact Us</h1>
    <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
            <input type="text" name="username" required  className="form-control" placeholder="Enter Your name" autoComplete="offsetFalse" />

            <input type="email" name="email" required  className="form-control" placeholder="Enter Your email" autoComplete="offsetFalse" />

            <textarea type="text" name="message" required  className="form-control" placeholder="Enter Your message" autoComplete="offsetFalse" />

            <button type="Submit" value="send">Send</button>



        </form>

        

    </div>

  </section>
    </>
}