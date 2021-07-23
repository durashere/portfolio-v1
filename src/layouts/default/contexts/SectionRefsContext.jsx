import { createContext, useRef } from 'react';
import PropTypes from 'prop-types';

const SectionRefsContext = createContext();

const SectionRefsProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);

  const SECTION_REFS = [
    { section: 'about', ref: aboutRef },
    { section: 'skills', ref: skillsRef },
    { section: 'portfolio', ref: portfolioRef },
  ];

  const value = {
    SECTION_REFS,
    aboutRef,
    skillsRef,
    portfolioRef,
  };

  return <SectionRefsContext.Provider value={value}>{children}</SectionRefsContext.Provider>;
};

SectionRefsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SectionRefsProvider, SectionRefsContext };
