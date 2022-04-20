import '../css/tailwind.min.css';
import CategoriesEach from './CategoriesEach';

const Categories = () => {
    return (
        <div className="px-4 py-6 mx-auto flex flex-wrap">
            <div className="w-full mb-10 text-2xl sm:text-3xl md:text-6xl font-bold text-center border-b-2 mx-24 font-cardo drop-shadow-md border-gray-300 pb-6 text-gray-900">Categories To Bag</div>
            <div className="flex justify-evenly w-full flex-wrap md:m-2 m-1">
                <CategoriesEach categoryName="skirts" />
                <CategoriesEach categoryName="trousers" />
                <CategoriesEach categoryName="shirts" />
                <CategoriesEach categoryName="hats" />
                <CategoriesEach categoryName="hoodies" />
                <CategoriesEach categoryName="tshirt" />
            </div>
        </div>
    );
};
export default Categories;
