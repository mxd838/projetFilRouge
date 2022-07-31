import Footer from "../../components/footer/Footer"
import Gallery from "../../components/gallery/Gallery"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/NavBar"

const Home = () => {
    return (
        <div>
            <h1>Accueil</h1>
            <Header />
            <Navbar />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Home