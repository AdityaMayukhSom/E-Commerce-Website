import '../css/tailwind.min.css';
import TestimonialEach from './TestimonialEach';

const Testimonial = () => {
    const writing = `Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.`;
    const name = 'Alper Kamu';

    return (
        <div className="container px-5 pb-16 mx-auto">
            <div className="flex justify-center py-16">
                <span>
                    <h1 className="sm:text-3xl text-2xl md:text-5xl font-medium title-font mb-2 text-gray-900">Why Us?</h1>
                    <div className="h-1 w-full bg-yellow-400 rounded"></div>
                </span>
            </div>
            <div className="flex flex-wrap -m-4">
                <TestimonialEach writing={writing} name={name} />
                <TestimonialEach writing={writing} name={name} />
            </div>
        </div>
    );
};

export default Testimonial;
