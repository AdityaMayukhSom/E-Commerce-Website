import ImageCarousol from './ImageCarousol';
import TrendingClothes from './TrendingClothes';
import Gallary from './Gallary';
import LeadingToProduct from './LeadingToProduct';
import Categories from './Categories';
import ProductDetails from './ProductDetails';

const Home = () => {
    return (
        <div className="bg-[#222222] text-[#de993f]">
            <ImageCarousol />
            <TrendingClothes />
            <Gallary />
            <Categories />
            <LeadingToProduct />
            <ProductDetails />
        </div>
    );
};

export default Home;
