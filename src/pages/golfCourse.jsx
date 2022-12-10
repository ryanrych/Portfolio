import * as React from "react"
import { Link } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "@theme-ui/mdx"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const GolfCourse = () => (
  <Layout>
    <Parallax pages={1}>
      <div>
        <Divider speed={0.2} offset={0} factor={1}>
          <UpDown>
            <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
            <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
            <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
            <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
            <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
            <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
            <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
            <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
          </UpDownWide>
          <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
          <Svg icon="circle" width={6} color="icon_darkest" left="2%" top="20%" />
          <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
          <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
          <Svg icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
          <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
          <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
          <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
          <Svg icon="box" width={6} color="icon_darkest" left="20%" top="13%" />
          <Svg icon="box" width={12} color="icon_darkest" left="40%" top="19%" />
          <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
          <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
          <Inner>
            <Themed.h3>Golf Course Companion App</Themed.h3>
            <Themed.h6>May 2020 | <Link to="https://github.com/ryanrych/Golf-Score-App" target="_blank">GitHub Repo</Link></Themed.h6>
            <br/>
            <Themed.h5>About:</Themed.h5>
            <Themed.p>
            An app written for my senior engineering class in high school. The goal is for golfers to have an easy 
            way to track their progress by giving them as many data points as possible. This is done by giving information 
            such as best score, average score, par rate, green rate, and more for each hole and for the entire course. 
            Along with personal data, it keeps the same data points for all of the golfers on the same course combined to 
            give users a feel for how they stack up to other golfers on the same course. I've also added a leaderboard 
            with several records that anybody can set, this adds a bit of competition for those who want to partake.<br/><br/>
            This was written in Python using the Kivy module for the front end.
            </Themed.p>
            <div style={{display: "flex", flexDirection: "row"}}>
              <img src="../images/catalog1.png" width="330" height="260" />
              <img src="../images/catalog2.png" />
              <img src="../images/catalog3.png" />
            </div>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default GolfCourse

export const Head = () => <Seo title="Golf Course App" />
