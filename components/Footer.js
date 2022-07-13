import Image from 'next/image'

const Footer = () => {
  return (
        <div> 
            <footer >
                
                <div className="footimg">
                    <Image src="/images/logo_waters.png" width="150" height="150"/>
                </div>
                <address>
                    ADDRESS
                    <br/>
                    Timidlly 
                    <br/>
                    Near Jalalpur, Biharsharif, Bihar, India
                    <br/>
                    (Head Branch)
                </address>
                <div className="icons">
                    <a href="#" className="fab add fa-facebook"></a>
                    <a href="https://www.linkedin.com/company/Timidlly/" target="_blank" rel="noreferrer" className="fab add fa-linkedin"></a>
                    <a href="https://twitter.com/Timidlly" target="_blank" rel="noreferrer"  className="fab add fa-twitter"></a>
                    
                </div>
            </footer> 
            <div id="foot2">
                <p >Copyright © 2022. Timidlly India Pvt Ltd. <br/>All Rights Reserved</p>
                <div className="link"><a href="#">Privacy Policy.</a> <a href="#">Terms of Use</a></div>
                <p>Designed & developed by Govind & Praveen</p>
                <p className="end">(For the best viewing expreience of the website, use lattest version of Chrome/Firefox/Safari/Microsoft Edge)</p>

            </div>
        </div>
    )
}

export default Footer