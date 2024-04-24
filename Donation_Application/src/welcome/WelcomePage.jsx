import { WelcomeHeader } from "./WelcomeHeader";
import orphanImage from "../assets/images/child-stuck-migration-crisis-while-trying-immigrate.jpg";
import { StatisticsCircle } from "./StatisticsCircle";
import {info} from "../model/about-us";

export function WelcomePage() {
    return (
        <div className="w-screen h-screen bg-slate-300 flex flex-col gap-20 items-center justify-start pt-0 overflow-x-hidden">
            <WelcomeHeader />
            <div className="flex-grow w-full h-full flex md:flex-row flex-col gap-5 items-center justify-center px-6 text-center">
                <div className="w-96 flex flex-col gap-8">
                    <p className="text-7xl font-slogan font-bold">
                        HOPE IN EVERY 
                        <span className="text-Mystic-Teal hover:cursor-pointer hover:text-red-800 transition-colors duration-300 ease-linear"> CLICK</span>
                    </p>
                    <q className="text-xl text-wrap font-mono italic text-slate-800">
                        Uniting Hearts, Uplifting Spirits: Your Compassionate Click
                        is a Promise of Tomorrow for Orphans and Refugees!
                    </q>
                </div>
                <div>
                    <img src={orphanImage} alt="Refugee Orphan" className="w-[36rem] h-auto shadow-lg rounded-md" />
                </div>
            </div>
            <div id="about-us" className="w-full h-full py-6 bg-Midnight-Pine text-slate-100 mt-20 px-5 flex flex-row items-center justify-evenly">
                {
                    info.map((item) => {
                        return (
                            <StatisticsCircle title={item.title} description={item.description} value={item.value} key={item.title} />
                        );
                    })
                }
            </div>
        </div>
    );
}