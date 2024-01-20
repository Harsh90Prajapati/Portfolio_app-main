/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'


const About = () => {

  const AboutData = [
    {
      id: 1,
      logo: "FaAward",
      title: "Experience",
      year: "1+ year",
    },
    {
      id: 2,
      logo: "FiUsers",
      title: "Client",
      year: "1+ Client",
    },
    {
      id: 3,
      logo: "VscFolderLibrary",
      title: "Projects",
      year: "10+ completed ",
    },
  ];
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="containor about_containor">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            {AboutData.map((item) => (
              <article className="card">
                <FaAward className="Icon" />
                <h5>{item.title}</h5>
                <small>{item.year}</small>
              </article>
            ))}
          </div>
          <p>
            Hello My name is Harsh Prajapti. I'm a Engineering student and
            Fullstack Developer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About