import Carousel from "../../components/Carousel/Carousel"
import Hero from "../../components/Hero/Hero"
import SocialSection from "../../components/SocialSection/SocialSection"
import React, {Component} from "react"
import TestSearch from "../Test/testbusqueda"

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <SocialSection />
        <TestSearch />
        {/*         <Carousel />
         */}{" "}
      </>
    )
  }
}
