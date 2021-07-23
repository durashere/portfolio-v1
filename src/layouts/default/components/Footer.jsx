import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="p-8 text-center">
      <button type="button" onClick={scrollTop}>
        <Image
          className="animate-bounce"
          loading="eager"
          width={48}
          height={48}
          src="/icons/chevron_top.svg"
          alt="go top"
        />
      </button>
    </div>
  );
};

export default Footer;
