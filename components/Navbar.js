
import Image from 'next/image'
import { useRef } from 'react'

const Navbar = () => {
    const ref=useRef();
    // var menuButton=document.getElementById("button");
    // var sideNav=document.getElementById("container");
    // var menu=document.getElementById("menu");
    // sideNav.style.left="-250px";
    const openNAv= ()=>{
        if(ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0')
            // menu.src="/images/close.png";
        }
        else if(!ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full')
            // menu.src="/images/close.png";
        }
    }
  return (
    <div>
        <section className="banner">
            {/* <div><Image class="logo" src={images/main_logo.jpeg} alt="logo" loading="lazy"/></div> */}
            <div><Image className='logo' src="/images/main_logo.jpeg" width="145" height="100"/></div>
        </section>
        <div id="container" ref={ref} className="transform transition-transform translate-x-full" >
            <nav>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#company">COMPANY</a></li>
                    <li><a href="#contact ">CONTACT US</a></li>
                    <li><a href="#product">PRODUCT & SOLUTION</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#market">MARKET SEGMENTS</a></li>
                </ul>
            </nav>
        </div>
        <div id="button" onClick={openNAv}><Image id="menu" src="/images/menu.png" width="20" height="20"/>
        </div>
    </div>
  )
}

export default Navbar