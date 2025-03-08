import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Tours from "@/components/Tours";
import Events from "@/components/Events";
import Awards from "@/components/Awards";
import Recommendation from "@/components/Recommendation";
import Slider2 from "@/components/Slider2";
import TourDetails from "@/components/TourDetails";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Tours></Tours>
      <Events></Events>
      <TourDetails></TourDetails>
      <Awards></Awards>
      <Reviews></Reviews>
      <Recommendation></Recommendation>
      {/* <Slider2></Slider2> */}
      <Footer></Footer>
    </div>
  );
}
