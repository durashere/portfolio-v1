import Image from 'next/image';
import PropTypes from 'prop-types';

const PortfolioListItem = ({ portfolio }) => {
  return (
    <li className="relative overflow-hidden bg-black/20 rounded-2xl">
      <div className="relative w-full h-48 group">
        <div className="z-20 items-end justify-end h-full p-4 space-x-4 flex relative opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[2px] transition-all duration-500">
          {portfolio.code && (
            <a
              className="flex items-center justify-center w-10 h-10 space-x-4 transition duration-500 rounded-full shadow-lg bg-black/20 backdrop-blur-sm hover:bg-black/30"
              href={portfolio.code}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Image
                loading="eager"
                width={24}
                height={24}
                src="/brands/github.svg"
                alt={portfolio.code}
              />
            </a>
          )}
          {portfolio.demo && (
            <a
              className="flex items-center justify-center w-10 h-10 space-x-4 transition duration-500 rounded-full shadow-lg bg-black/20 backdrop-blur-sm hover:bg-black/30"
              href={portfolio.demo}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Image
                loading="eager"
                width={24}
                height={24}
                src="/icons/demo.svg"
                alt={portfolio.demo}
              />
            </a>
          )}
        </div>
        <Image
          loading="eager"
          src={`/portfolio/${portfolio.image}`}
          alt={portfolio.heading}
          layout="fill"
          objectFit="cover"
          objectPosition={portfolio.imagePosition || 'center'}
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-medium">{portfolio.heading}</h3>
        <p className="mt-2 text-gray-300">{portfolio.description}</p>
      </div>
    </li>
  );
};

PortfolioListItem.propTypes = {
  portfolio: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PortfolioListItem;
