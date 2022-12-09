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

const Spike = () => (
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
            <Themed.h3>International Cardiology Consultants Heart Attack Prevention App</Themed.h3>
            <Themed.h6>July 2022 | <Link to="https://github.com/ryanrych/International-Cardiology-Consultants-Heart-Attack-Screening-App" target="_blank">GitHub Repo</Link></Themed.h6>
            <br/>
            <Themed.h5>About:</Themed.h5>
            <Themed.p>
                This was the second app I made during my time contracting for the International Cardiology Consultants. It 
                was made for the hospitals in the ICC's Mexico program. Patients fill out the form and based on their answers
                a treatment plan is selected.<br/><br/>I made this app using Javascript and React Native. It was deployed to both
                the IOS app store and the Google Play store using Expo deployment, but is now removed as all sites that 
                need it have it.
            </Themed.p>
            <div style={{display: "flex", flexDirection: "row"}}>
              <img src="../images/heartAttack1.png" width="132" height="281" />
              <img src="../images/heartAttack2.png" />
              <img src="../images/heartAttack3.png" />
            </div>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default Spike

export const Head = () => <Seo title="Heart Attack Prevention App" />
