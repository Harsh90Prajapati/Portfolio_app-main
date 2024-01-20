import React from 'react'
import './portfolio.css'

function Portfolio(props) {
  
  const CardData = [
    {
      id: 1,
      image: "https://firebasestorage.googleapis.com/v0/b/drive-clone-36716.appspot.com/o/files%2FScreenshot%202022-07-30%20154253.png?alt=media&token=4725f34e-0b33-47a7-9818-d8488330f554",
      text: "Ecommerce_Web_site",
      link1: "https://github.com/Harsh90Prajapati/Ecommerce_site",
      link2:"https://65abe2637f62d8a4aeed7c79--elaborate-banoffee-e85751.netlify.app/"
    },
    {
      id: 2,
      image: "https://firebasestorage.googleapis.com/v0/b/drive-clone-36716.appspot.com/o/files%2FScreenshot%202023-11-19%20233243.png?alt=media&token=9c6dd7c5-7852-4c66-b07c-199b0e08ab6f",
      text: "Detail Form",
      link1: "https://github.com/Harsh90Prajapati/Detail_form",
      link2:"https://heartfelt-khapse-abca77.netlify.app/"
    },
    {
      id: 3,
      image: "https://firebasestorage.googleapis.com/v0/b/drive-clone-36716.appspot.com/o/files%2FScreenshot%202022-08-04%20174756.png?alt=media&token=6663547d-6bf5-4f85-afe8-612528f54f6d",
      text: "My Portfolio",
      link1: "https://github.com/Harsh90Prajapati/Portfolio_app",
      link2:""
    },
    {
      id: 4,
      image: "https://firebasestorage.googleapis.com/v0/b/drive-clone-36716.appspot.com/o/files%2FScreenshot%202022-07-30%20161743.png?alt=media&token=339c1ab8-66c4-41fc-9bd3-7fbda86e8c62",
      text: "Disney_Clone_app",
      link1: "https://github.com/Harsh90Prajapati",
      link2:"https://github.com/Harsh90Prajapati/Disney-web.git"
    },
    {
      id: 5,
      image: "https://firebasestorage.googleapis.com/v0/b/drive-clone-36716.appspot.com/o/files%2FScreenshot%202022-07-30%20220053.png?alt=media&token=307371b1-6c1a-40e9-b570-671298ac6655",
      text: "Movie_Web_site",
      link1: "https://github.com/Harsh90Prajapati",
      link2:"https://github.com/Harsh90Prajapati/movie-site.git"
    }
    
  ];
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="containor port_cont"> 
       {CardData.map((dev) => (
          <article className="port_item"key={dev.id}>
            <>
              <div className="port_item_img" >
               <img src={dev.image} alt={dev.text}/>
              </div>
              <h3>{dev.text}</h3>
              <div className="port_item_cta">
                <a href={dev.link1} className='btn'>Project Code</a>
                 <a href={dev.link2} className="btn btn-primary">Live Project</a>
              </div>
            </>
          </article>
       ))}
      </div>
      </section>
  )
}

export default Portfolio