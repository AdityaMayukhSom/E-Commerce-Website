import '../css/tailwind.min.css';
import TrendingClothesCard from './TrendingClothesCard';

const TrendingClothes = () => {
    return (
        <div>
            <div className="text-4xl md:text-6xl text-center font-bold py-6 mx-24 drop-shadow-lg font-cardo border-b-2 border-gray-300">Trending Clothes</div>
            <div className="w-full overflow-auto no-scrollbar bg-yellow-100 mt-4">
                <div className="px-0 md:px-4 py-8 flex flex-row w-fit overflow-x-scroll items-center no-scrollbar">
                    <TrendingClothesCard></TrendingClothesCard>
                    <TrendingClothesCard></TrendingClothesCard>
                    <TrendingClothesCard></TrendingClothesCard>
                    <TrendingClothesCard></TrendingClothesCard>
                    <TrendingClothesCard></TrendingClothesCard>
                </div>
            </div>
        </div>
    );
};

export default TrendingClothes;
