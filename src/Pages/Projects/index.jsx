import { useEffect } from "react";
import FoodMunch from '../../Assets/Images/FoodMunchImg.png';
import MyPortfolioImg from '../../Assets/Images/MyPortfolioImg.png';
import NxtTrendsImg from '../../Assets/Images/NxtTrendsImg.png';
import Magnet from '../../Animated/Magnet/Magnet.jsx';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import './index.css';

const Projects = () => {
    useEffect(() => {
    const cards = document.querySelectorAll(".box");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // re-animate on scroll up
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% visible
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className="glowing-border-container">
    <div className="projects-container">
        <h1 className='project-head'>Projects</h1>
      <div className="project-card">
        <Magnet padding={50} disabled={false} magnetStrength={50}>
            <div className="box">
          <div className="glass"></div>
          <div className="content">
            <img src={MyPortfolioImg} alt="My portfolio" className="food-munch-project-image" />
            <h1>My Portfolio</h1>
            <h3>A modern portfolio showcasing projects with animations, performance, and creativity.</h3>
            <div className="card-tags">
        <span className="tag">Html</span>
        <span className="tag">Css</span>
        <span className="tag">JavaScript</span>
      </div>
      <div className="card-actions">
        <a href="https://fdmnch13.ccbp.tech/" className="btn demo"><span> Demo</span><FaLink size={24} className='link-icon' /></a>
        <a href="https://github.com/BhukyaSriharsha/Food-Munch.git" className="btn code"><FaGithub size={40} className='github-icon' /><span> Code</span></a>
      </div>
          </div>
        </div>
        </Magnet>

        <Magnet padding={50} disabled={false} magnetStrength={50}>
            <div className="box">
          <div className="glass"></div>
          <div className="content">
            <img src={FoodMunch} alt="Food Munch" className="food-munch-project-image" />
            <h1>Food Munch</h1>
            <h3>A responsive food ordering platform with dynamic UI, smooth animations, and fast performance.</h3>
            <div className="card-tags">
        <span className="tag">Html</span>
        <span className="tag">Css</span>
        <span className="tag">JavaScript</span>
      </div>
      <div className="card-actions">
        <a href="https://fdmnch13.ccbp.tech/" className="btn demo"><span> Demo</span><FaLink size={24} className='link-icon' /></a>
        <a href="https://github.com/BhukyaSriharsha/Food-Munch.git" className="btn code"><FaGithub size={40} className='github-icon' /><span> Code</span></a>
      </div>
          </div>
        </div>
        </Magnet>

        <Magnet padding={50} disabled={false} magnetStrength={50}>
            <div className="box">
          <div className="glass"></div>
          <div className="content">
            <img src={NxtTrendsImg} alt="Food Munch" className="food-munch-project-image" />
            <h1>NXT Trendz</h1>
            <h3>Built a responsive shopping platform with user authentication, product search, listing, Prime Deals, and error handling.</h3>
            <div className="card-tags">
        <span className="tag">React</span>
        <span className="tag">Css</span>
        
      </div>
      <div className="card-actions">
        <a href="http://localhost:3000/" className="btn demo"><span> Demo</span><FaLink size={24} className='link-icon' /></a>
        <a href="http://localhost:3000/" className="btn code"><FaGithub size={40} className='github-icon' /><span> Code</span></a>
      </div>
          </div>
        </div>
        </Magnet>
      </div>
    </div>
    </div>
  );
}

export default Projects;
