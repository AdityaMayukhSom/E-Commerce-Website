import '../css/tailwind.min.css';

const LeadingToProductCard = (props) => {
    return (
        <div className="w-full h-full flex justify-center items-center sm:w-auto px-4 cursor-pointer hover:scale-110 transition">
            <div className="bg-gray-100 p-6 rounded-lg max-w-[350px]">
                <img className="h-72 rounded w-full object-cover object-center mb-6" src={props.imgURL} alt="content" />
                <h2 className="text-2xl text-gray-900 font-medium title-font mb-4">{props.text}</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
        </div>
    );
};
export default LeadingToProductCard;
