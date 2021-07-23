import { useContext } from 'react';

import { SectionRefsContext } from '@/layouts/default/contexts/SectionRefsContext';

const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (context === undefined) {
    throw new Error('useSectionRefs must be used within a SectionRefsProvider');
  }
  return context;
};

export { useSectionRefs };
