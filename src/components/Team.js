import '../css/tailwind.min.css';
import TeamMember from './TeamMember';
const Team = () => {
    return (
        <section className="bg-[#212121] ">
            <div className="h-[32rem] bg-[#212121] ">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-[#de993f] capitalize lg:text-4xl ">Meet Our Team</h1>

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-[#de993f] rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-[#de993f] rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-[#de993f] rounded-full"></span>
                    </div>
                    <p className="max-w-2xl mx-auto mt-6 text-center text-[#de993f] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.</p>
                </div>
            </div>

            <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-3">
                    <TeamMember imageName="female.avif" name="pamela anderson" position="Lead Developer" />
                    <TeamMember imageName="male.avif" name="arthur melo" position="design director" />
                    <TeamMember imageName="female.avif" name="pamela anderson" position="Lead Developer" />
                </div>
            </div>
        </section>
    );
};

export default Team;
