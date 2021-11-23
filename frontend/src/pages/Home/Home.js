import Carousel from "../../components/Carousel/Carousel"
import Hero from "../../components/Hero/Hero"
import SocialSection from "../../components/SocialSection/SocialSection"
import React, {Component} from "react"

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <SocialSection />
        <Carousel />
      </>
    )
  }
}
