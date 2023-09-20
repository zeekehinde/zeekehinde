import "./home.css"
import jollofrice from "../assets/Jollof-rice.jpg"


const Home = () => {
    return ( 
        <section className="home">
            <div className="container flex">
                <div className="left">
                    <div className="img">
                        <img src={jollofrice} alt="Jollof-rice" className="jollofrice" />
                    </div>
                </div>
                <div className="right topmargin">
                    <h1>swift</h1>
                    <p>lorem import gfghdjfhjdcnc
                        dndbnfnfnfnfn
                    </p>
                </div>
            </div>
        </section>
     );
}
 
export default Home;