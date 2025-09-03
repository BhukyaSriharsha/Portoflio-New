import './index.css'
import LightRays from '../../Animated/LightRays/LightRays.jsx'; 
import Dock from '../../Animated/Dock/Dock.jsx';
import { 
    VscHome, 
    VscAccount, 
    VscCode,           // For Projects
    VscTools,          // For Skills
    VscSymbolEvent,      // For Achievements
    VscMail           // For Contact
} from 'react-icons/vsc';
import RotatingText from '../../Assets/RotatingText/RotatingText.jsx';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Achievements from '../Achievements';
import Contact from '../Contact/index.jsx';



const Home = () => {
    const handleNavigation = (label) => {
        const element = document.getElementById(label.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const items = [
        { icon: <VscHome size={18} />, label: 'Home', onClick: () => handleNavigation('Home')},
        { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => handleNavigation('Profile')},
        { icon: <VscCode size={18} />, label: 'Projects', onClick: () => handleNavigation('Projects')},
        { icon: <VscTools size={18} />, label: 'Skills', onClick: () => handleNavigation('Skills')},
        { icon: <VscSymbolEvent size={18} />, label: 'Achievements', onClick: () => handleNavigation('Achievements')},
        { icon: <VscMail size={18} />, label: 'Contact', onClick: () => handleNavigation('Contact')},
    ];

    return (
        <div className='main-container'>
            <div className='home-container' id="home">
                <div className='navbar'>
                    <Dock 
                        items={items}
                        panelHeight={68}
                        baseItemSize={50}
                        magnification={70}
                    />
                </div>
                <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#00ffff"
                        raysSpeed={1.5}
                        lightSpread={0.8}
                        rayLength={1.2}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                        className="custom-rays"
                    />
                    <div className="home-content">
                        <h1 className='home-title'>BHUKYA SRIHARSHA</h1>
                        <div className='home-subtitle'>
                            <p>I am</p>
                            <RotatingText
                                texts={['a FullStack Developer', 'a Designer', 'Creative', 'a Coder', 'a Tech Enthusiast', 'a Learner']}
                                mainClassName="rotating-text"
                                interval={2000}
                                color="#00ffff"
                                fontSize="1.5rem"
                                fontFamily="XtraDex, sans-serif"
                            />
                        </div>
                    </div>
                </div>    
            </div>
            
            <div className='about-container' id="profile">
                <About />
            </div>

            <div className='projects-section' id="projects">
                <Projects />
            </div>

            <div className='skill-section' id="skills">
                <Skills />
            </div>

            <div className='achievements-section' id="achievements">
                <Achievements />
            </div>

            <div className='contact-section' id="contact">
                <Contact />
            </div>
        </div>
    );
}

export default Home;