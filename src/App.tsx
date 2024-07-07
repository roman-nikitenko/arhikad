import { Header } from './components/Header.tsx';
import { Body } from './components/Body.tsx';
import { Footer } from './components/Footer.tsx';
import { useRef } from 'react';

function App() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <>
      <Header aboutSectionRef={aboutSectionRef} servicesSectionRef={servicesSectionRef} projectsSectionRef={projectsSectionRef} />
      <Body aboutSectionRef={aboutSectionRef} projectsSectionRef={projectsSectionRef} />
      <Footer/>
    </>
  )
}

export default App
