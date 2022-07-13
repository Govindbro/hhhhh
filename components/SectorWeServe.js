
import Image from 'next/dist/client/image'
const SectorWeServe = () => {
  return (
    <div>
        <div id="sectors">
            <h1 className="sectorHeading">SECTORS WE SERVE</h1>
            <div className="sector">
                <Image src="/images/industry.png"  width="100%" height="100"/>
                <h2>Industries</h2>
            </div>
            <div className="sector">
                <Image className="u"src="/images/institute.png" width="100%" height="100"/>
                <h2>Institutions</h2>
            </div>
            <div className="sector">
                <Image src="/images/home.png" width="100%" height="100"/>
                <h2>Home</h2>
            </div>
            <div className="sector">
                <Image src="/images/community.png" width="100%" height="100"/>
                <h2>Community</h2>
            </div>
        </div>
    </div>
  )
}

export default SectorWeServe