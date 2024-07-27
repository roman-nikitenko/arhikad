import { Header } from './components/Header.tsx';
import { Body } from './components/Body.tsx';
import { Footer } from './components/Footer.tsx';
import { useRef } from 'react';
import { CallMe } from './components/CallMe.tsx';

function App() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <>
      <CallMe />
      <Header aboutSectionRef={aboutSectionRef} servicesSectionRef={servicesSectionRef} projectsSectionRef={projectsSectionRef} />
      <Body />
      <Footer/>
    </>
  )
}

export default App
