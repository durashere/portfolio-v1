import { useSectionRefs } from '@/layouts/default/hooks/useSectionRefs';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
  const { SECTION_REFS } = useSectionRefs();

  const headerRef = useRef(null);

  const [visibleSection, setVisibleSection] = useState();
  const [scrolledDown, setScrolledDown] = useState(false);
  const [scrolledDownOnLoad, setScrolledDownOnLoad] = useState(false);

  const getElementDimensions = (element) => {
    const { height } = element.getBoundingClientRect();
    const { offsetTop } = element;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  const scrollTo = (element) => {
    try {
      const { height: headerHeight } = getElementDimensions(headerRef.current);
      const elementPosition = getElementDimensions(element);
      return window.scrollTo({
        top: elementPosition.offsetTop - headerHeight - 16,
        behavior: 'smooth',
      });
    } catch (error) {
      return null;
    }
  };

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

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getElementDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight * 4;

      setScrolledDown(window.pageYOffset !== 0);

      const selected = SECTION_REFS.find(({ ref }) => {
        try {
          const { offsetBottom, offsetTop } = getElementDimensions(ref.current);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        } catch (error) {
          return null;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      }

      if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection, SECTION_REFS]);

  return (
    <nav
      ref={headerRef}
      className={classNames(
        'fixed top-0 z-10 p-4 my-32 transition-all w-full duration-500 select-none border-b border-transparent',
        {
          'opacity-0 animate-slide-in-top-delay-5': !scrolledDownOnLoad,
          'lg:p-8': !scrolledDown,
          'backdrop-blur-[8px] bg-black/10 border-black/5 my-0': scrolledDown,
        }
      )}
    >
      <ul className="justify-center text-center sm:space-x-8 sm:flex">
        {SECTION_REFS.map(({ section, ref }) => (
          <li key={section}>
            <button
              type="button"
              className={classNames(
                'tracking-widest px-4 uppercase outline-none transition-all duration-500 font-medium hover:text-white/75',
                {
                  'text-white/50': visibleSection !== section,
                  'text-white': visibleSection === section,
                  'sm:text-4xl': !scrolledDown,
                  'sm:text-2xl': scrolledDown,
                }
              )}
              onClick={() => {
                scrollTo(ref.current);
              }}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
