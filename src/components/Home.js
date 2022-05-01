// import ImageCarousol from './ImageCarousol';
import Hero from './Hero';
import TrendingClothes from './TrendingClothes';
import Gallary from './Gallary';
import LeadingToProduct from './LeadingToProduct';
import Categories from './Categories';

const Home = () => {
    return (
        <div className="bg-[#222222] text-[#de993f]">
            <Hero />
            <TrendingClothes />
            <Gallary />
            <Categories />
            <LeadingToProduct />
        </div>
    );
};

export default Home;
