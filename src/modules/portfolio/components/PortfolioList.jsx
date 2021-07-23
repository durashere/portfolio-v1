import PropTypes from 'prop-types';

import PortfolioListItem from '@/modules/portfolio/components/PortfolioListItem';

const PortfolioList = ({ portfolioList }) => {
  return (
    <ul className="grid max-w-sm gap-8 mx-auto sm:max-w-xl lg:max-w-full sm:grid-cols-2 lg:grid-cols-3">
      {portfolioList.map((portfolio) => (
        <PortfolioListItem key={portfolio.heading} portfolio={portfolio} />
      ))}
    </ul>
  );
};

PortfolioList.propTypes = {
  portfolioList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PortfolioList;
