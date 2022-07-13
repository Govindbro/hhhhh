

const ContactUs = () => {
  return (
    <div>
        <div className="Enquire">
            <div className="form-area">
                <h1>CONTACT US</h1>
                <div className="form">
                    <form>
                        <div className="input"><input type="text" required placeholder="Full Name"/></div>
                        <div className="input"><input type="email" required placeholder="Your Email"/></div>
                        <div className="input"><input type="number" required placeholder="Phone Number"/></div>
                        <div className="input"><textarea required placeholder="Write Your Message Here"></textarea></div>
                        <div className="input">
                            <select id="Maket-segments" name="MAKET">
                                <option value="Market Segments">Market Segments</option>
                                <option value="Industries">Industries</option>
                                <option value="Institutions">Institutions</option>
                                <option value="Home">Home</option>
                                <option value="Communities">Communities</option>
                            </select>
                        </div>
                        <div className="input">
                            <select id="services" name="SERVICES">
                                <option value="SERVICES">Services</option>
                                <option value="Operations & Maintenance">Operations & Maintenance</option>
                                <option value="Audits & Consultancy">Audits & Consultancy</option>
                                <option value="Remote Monitoring System
                                ">Remote Monitoring System</option>
                                <option value="Project & Financing">Project & Financing</option>
                                <option value="Consumables & Spares">Consumables & Spares</option>
                                <option value="Rehabilitation-Modification">Rehabilitation-Modification</option>
                            </select>
                        </div>
                    </form>
                    <div className="last">
                        <div className="button1"><button>SUBMIT</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs