
import Image from 'next/image'
const ItemList = () => {
  return (
    <div>
        <div id="items">
            <div className="item">
                <h1>RO Water Purifier</h1>
                <p>Trusted by Millions, India’s highest selling and most awarded KENT RO Water Purifiers make your water 100% pure. With its revolutionary Mineral ROTM technology and multiple purification process of RO+UV+UF, KENT ensures 100% pure & healthier drinking water.</p>
                <div className='itemImage'><Image src="/images/ro.png" width="250" height="250"/></div>
            </div>

            <div className="item">
                <h1>UV Water Purifier</h1>
                <p>KENT offers innovative UV Water Purifiers that are easy to use and disinfect water without altering its taste and odour. These purifiers are equipped with UV followed by UF membrane to disinfect water, making it free from deadly bacteria, viruses and cysts.</p>
                <div className='itemImage'><Image src="/images/uv.png"  width="250" height="250"/></div>
            </div>

            <div className="item">
                <h1>Water Filter Pitchers</h1>
                <p>Convert your drinking water into alkaline water - KENT’s Water Filter Pitchers provide you and your family with healthy drinking water. Alkaline Water Filter Pitcher converts your drinking water into alkaline water. It increases the pH level of water up to 9.5 that reduces acidity, fortifies your health, and boosts your immunity. Gravity Water Filter Pitcher removes any physical impurities from water and enhances the taste of tap water, making it safe and healthy for drinking.</p>
                <div className='itemImage'><Image src="/images/pitches.png" width="250" height="250"/></div>
            </div>


        </div>  
    </div>
  )
}

export default ItemList