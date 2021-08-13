import classNames from 'classnames';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import { CONTACT } from '@/app/constants';

const Home = () => {
  const [scrolledDownOnLoad, setScrolledDownOnLoad] = useState(false);

  useEffect(() => {
    if (window.pageYOffset !== 0) {
      setScrolledDownOnLoad(true);
    }

    // function disableScroll() {
    //   window.onscroll = () => window.scrollTo(0, 0);
    // }

    // function enableScroll() {
    //   window.onscroll = () => {};
    // }

    // if (window.pageYOffset === 0) {
    //   disableScroll();
    //   setTimeout(enableScroll, 6000);
    // }
  }, []);

  return (
    <div className="relative flex flex-col items-start justify-center h-screen space-y-8 sm:text-center sm:items-center">
      <h1
        className={classNames('text-5xl', {
          'opacity-0 animate-fade-in-delay-1': !scrolledDownOnLoad,
        })}
      >
        Hi, I&apos;m Krzysztof Durek
      </h1>
      <h2
        className={classNames('text-4xl', {
          'opacity-0 animate-fade-in-delay-3': !scrolledDownOnLoad,
        })}
      >
        I&apos;m a front-end web developer
      </h2>
      <div className="flex space-x-4">
        {CONTACT.map((contact) => (
          <a
            key={contact.link}
            className={classNames(
              'flex items-center justify-center w-16 h-16 rounded-full hover:bg-black/20',
              {
                'opacity-0 animate-slide-in-bottom-delay-5': !scrolledDownOnLoad,
              }
            )}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Image
              loading="eager"
              width={28}
              height={28}
              src={`/contact/${contact.icon}`}
              alt={contact.text}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
