import '../css/tailwind.min.css';
import ProductCard from './ProductCard';
// import ProductDetails from './ProductDetails';
const Products = (props) => {
    return (
        <section className={props.colour}>
            <div className="px-4 text-gray-600 grid sm:grid-cols-2 xl:grid-cols-3 py-8 ">
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
                <ProductCard productImage={props.productImage} forPage={props.forPage} productName={props.productName} />
            </div>
        </section>
    );
};

export default Products;
