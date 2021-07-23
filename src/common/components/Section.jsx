import PropTypes from 'prop-types';
import React from 'react';

const Section = React.forwardRef(({ label, children }, ref) => {
  return (
    <section ref={ref} className="mt-32">
      <h2 className="text-2xl tracking-wider text-center uppercase">{label}</h2>
      <div className="p-8 mt-4 border shadow-lg rounded-2xl backdrop-blur-sm bg-black/10 border-black/5">
        {children}
      </div>
    </section>
  );
});

Section.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
