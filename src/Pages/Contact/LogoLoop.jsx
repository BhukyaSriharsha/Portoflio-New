import LogoLoop from '../../Animated/LogoLoop/LogoLoop.jsx';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact color="black" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color="black" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript color="black" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss color="black" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function LogoLoopImport() {
  return (
    <div style={{ height: '100px', width:'400px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="linear-gradient(135deg, #232526, #757F9A)"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default LogoLoopImport;