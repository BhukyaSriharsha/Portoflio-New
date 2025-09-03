import ChromaGrid from '../../Animated/ChromaGrid/ChromaGrid.jsx'
import './index.css'

const Skills = () => {
    const items = [
  {
    title: "Languages",
    subtitle: "C++, Python, JavaScript, TypeScript",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    title: "Frontend",
    subtitle: "React.js, Tailwind CSS, HTML/CSS",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
  },
  {
    title: "Backend",
    subtitle: "FastAPI, Node.js, Express.js",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",

  },
  {
    title: "DevOps",
    subtitle: "Docker, Git, GitHub, GCP, AWS",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
  },
  {
    title: "Databases",
    subtitle: "MySQL, PostgreSQL, MongoDB",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
  }
];
  return (
    <div className="skills-section">
      <h1 className='skills-head'>Skills</h1>
        <div style={{ height: '600px', position: 'relative'}}>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
    className='chroma-grid-container'
  />
</div>
    </div>
  );
}

export default Skills;  