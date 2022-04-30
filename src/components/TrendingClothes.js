import '../css/tailwind.min.css';
import TrendingClothesCard from './TrendingClothesCard';

const TrendingClothes = () => {
    return (
        <div>
            <div className="text-4xl md:text-6xl text-center font-bold py-6 mx-24 mt-2 drop-shadow-lg font-cardo border-b-2 border-[#de993f]">Trending Clothes</div>
            <div className="w-full overflow-auto no-scrollbar bg-[#171717] mt-8">
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
