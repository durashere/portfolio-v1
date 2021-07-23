import { PORTFOLIO } from '@/app/constants';
import PortfolioList from '@/modules/portfolio/components/PortfolioList';

const Portfolio = () => {
  return <PortfolioList portfolioList={PORTFOLIO} />;
};

export default Portfolio;
