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

const Catalog = () => (
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
          <Svg icon="box" width={6} color="icon_darkest" left="20%" top="17%" />
          <Svg icon="box" width={12} color="icon_darkest" left="40%" top="19%" />
          <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
          <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
          <Inner>
            <Themed.h3>Acurite Product Catalog</Themed.h3>
            <Themed.h6>January 2020 | <Link to="https://github.com/ryanrych/PFOC_PRODUCTS" target="_blank">GitHub Repo</Link></Themed.h6>
            <br/>
            <Themed.h5>About:</Themed.h5>
            <Themed.p>
                This was the first full software development project I have ever completed. The product managers 
                in the Acurite team of Primex, Family of Companies needed a user friendly application that allowed 
                them to search for products by SKU number or by selecting options in multiple categories. There were
                also options for users to add, edit, or delete products from the catalog if they had the admin
                password.<br/><br/>
                I made this desktop app in Java using Java Swing for the front end. Unfortunately a backend couldn't be made
                because the company didn't have server space to spare so the products had to be downloaded locally.
            </Themed.p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
              <img src="../../images/catalog1.png" width="330" height="260" />
              <img src="../../images/catalog2.png" width="330" height="260"/>
              <img src="../../images/catalog3.png" width="310" height="290"/>
            </div>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default Catalog

export const Head = () => <Seo title="MAR Product Catalog" />
