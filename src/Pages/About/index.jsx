import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TiltedCard from '../../Animated/TiltedCard/TiltedCard.jsx';
import collageImage from '../../Assets/Images/college.jpeg';
import schoolImage from '../../Assets/Images/school.webp';
import interImage from '../../Assets/Images/intercollege.jpg';
import './index.css';

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]  // Changed offset to trigger earlier
  });

  // Start animation as soon as section comes into view
  const y = useTransform(scrollYProgress, [0, 0.7], ["50vh", "0vh"]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  
  // Spread cards after they've risen
  const xLeft = useTransform(scrollYProgress, [0.7, 0.9], ["0vw", "-30vw"]);
  const xCenter = useTransform(scrollYProgress, [0.7, 0.9], ["0vw", "0vw"]);
  const xRight = useTransform(scrollYProgress, [0.7, 0.9], ["0vw", "30vw"]);

  return (
    <section ref={sectionRef} className="about-section">
      <div className="about-content">
        <h1 className="about-heading">About Me</h1>
        <div className="cards-container">
          <motion.div 
            className="card education-card"
            style={{ 
              y, 
              x: xLeft,
              opacity,
              zIndex: 3
            }}
          >
            <TiltedCard
            imageSrc={collageImage}
  altText="IIT (ISM) Dhanbad"
  captionText="Btech"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <div className="tilted-card-demo-text">
      <h3 className="card-title">Education</h3>
  <div className="college">
    <h4>IIT (ISM) Dhanbad</h4>
    <p className="year">2022 - 2026</p>
    <p className="degree">B.Tech in Mineral and Metallurgical Engineering</p>
  </div>
    </div>
  }
/>      
          </motion.div>
          <motion.div 
            className="card education-card"
            style={{ 
              y: useTransform(scrollYProgress, [0.1, 0.7], ["60vh", "0vh"]),
              x: xCenter,
              opacity,
              zIndex: 2
            }}
          >
            <TiltedCard
            imageSrc={schoolImage}
  altText="Maharshi Vidhyalaya"
  captionText="School"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <div className="tilted-card-demo-text">
      <h3 className="card-title">Education</h3>
  <div className="college">
    <h4>Mahasrhi Vidhyalya</h4>
    <p className="year">2018 - 2019</p>
    <p className="degree"> Board of Secondary Education</p>
  </div>
    </div>
  }
/>
          </motion.div>
          <motion.div 
            className="card education-card"
            style={{ 
              y: useTransform(scrollYProgress, [0.2, 0.7], ["70vh", "0vh"]),
              x: xRight,
              opacity,
              zIndex: 1
            }}
          >
            <TiltedCard
            imageSrc={interImage}
  altText="Sri Chaitanya"
  captionText="Inter"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <div className="tilted-card-demo-text">
      <h3 className="card-title">Education</h3>
  <div className="college">
    <h4>Sri Chaitanya</h4>
    <p className="year">2020 - 2021</p>
    <p className="degree"> Board of Intermediate Education</p>
  </div>
    </div>
  }
/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;





