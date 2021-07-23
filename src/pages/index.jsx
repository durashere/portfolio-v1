import { useSectionRefs } from '@/layouts/default/hooks/useSectionRefs';
import About from '@/modules/about';
import Home from '@/modules/home';
import Portfolio from '@/modules/portfolio';
import Section from '@/components/Section';
import Skills from '@/modules/skills';

const DefaultPage = () => {
  const { aboutRef, skillsRef, portfolioRef } = useSectionRefs();

  return (
    <div className="max-w-5xl p-8 mx-auto space-y-32">
      <Home />
      <Section label="something about me" ref={aboutRef}>
        <About />
      </Section>
      <Section label="learned technology" ref={skillsRef}>
        <Skills />
      </Section>
      <Section label="projects created" ref={portfolioRef}>
        <Portfolio />
      </Section>
    </div>
  );
};

export default DefaultPage;
