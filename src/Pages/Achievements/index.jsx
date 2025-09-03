import ScrollStack, { ScrollStackItem } from "../../Animated/ScrollStack/ScrollStack.jsx";
import './index.css';

const Achievements = () => {
  return (
    <div className="achievements-container">
        <h1 className='achievements-head'>Achievements</h1>
        <ScrollStack>
  <ScrollStackItem>
    <h2>AIR 1306 – JEE Advanced</h2>
    <p>Ranked among the top performers in one of India's most competitive engineering entrance exams.</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>AWS Cloud Developer Certified</h2>
    <p>Earned professional certification for cloud application development on AWS.</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>8x NXTWAVE certs (AI & Web Dev)</h2>
    <p>Completed multiple certifications in artificial intelligence and web development.</p>
  </ScrollStackItem>
</ScrollStack>
    </div>
  );
}

export default Achievements;