import Footer from "../Footer/Footer"
import Slide from "../Slide/Slide"
import Card from "./Card"
import CardTwo from "./CardTwo"
import * as React from "react";
interface BlogData {
  id: number;
  titleOne: string;
  titleTwo: string;
  paraOne: string;
  paraTwo: string;
  name: string;
  subTitle: string;
  qrCode: string;
  cover: string;
}

const BlogHome: React.FC = () => {
  const data: BlogData[] = [
    {
      id: 1,
      titleOne: "YOU CAN CHANGE THE WORLD",
      titleTwo: "STRONG STYLE",
      paraOne: "How Women are Redirecting Hollywood",
      paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
      name: "By Jasmin Smith",
      subTitle: "How to Shop Mindfully",
      qrCode: "./images/qrcode.png",
      cover: "./Images/blog5.jpg",
    },
  ]
  return (
    <>
      <section className='home'>
        <div className='left-content'>
          {data.map((value: BlogData) => {
            return (
              <div className='content' key={value.id}>
                <div className='logo'>
                  <h1>BG</h1>
                </div>
                <div className='home-img'>
                  <img src={value.cover} alt=''/>
                </div>
                <div className='text'>
                  <h1>{value.titleOne}</h1>
                  <p>{value.paraOne}</p>
                  <span>{value.name}</span>
                </div>
                <div className='text text2'>
                  <h1>{value.titleTwo}</h1>
                  <p>{value.paraTwo}</p>
                  <span>{value.subTitle}</span>
                </div>

                <div className='qrcode'>
                  <img src={value.qrCode} alt=''/>
                </div>
              </div>
            )
          })}
        </div>
        <div className='right-content'>
          <Slide/>
          <Card/>
          <CardTwo/>
          <Footer/>
        </div>
      </section>
    </>
  )
}

export default BlogHome

