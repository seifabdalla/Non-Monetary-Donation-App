import { WelcomeHeader } from "./WelcomeHeader";
import orphanImage from "../assets/images/child-stuck-migration-crisis-while-trying-immigrate.jpg";
import { StatisticsCircle } from "../components/StatisticsCircle";
import {info} from "../model/about-us";
import { Link } from "react-router-dom";

export function WelcomePage() {
    return (
        <div className="w-screen h-screen bg-slate-300 flex flex-col gap-20 items-center justify-start pt-0 overflow-x-hidden">
            <WelcomeHeader />
            <div className="flex-grow w-full h-full flex md:flex-row flex-col gap-5 items-center justify-center px-6 text-center">
                <div className="w-96 flex flex-col gap-8">
                    <p className="text-7xl font-slogan font-bold">
                        HOPE IN EVERY 
                        <a className="text-Mystic-Teal hover:cursor-pointer hover:text-red-800 transition-colors duration-300 ease-linear" href="#about-us"> CLICK</a>
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
            <div id="about-us" className="w-full h-full py-6 bg-Midnight-Pine text-slate-100 mt-20 px-5 flex flex-col gap-4">
                <div className="flex flex-row items-start justify-evenly">
                    {
                        info.map((item) => {
                            return (
                                <StatisticsCircle title={item.title} description={item.description} value={item.value} key={item.title} />
                            );
                        })
                    }
                </div>
                <div className="text-center text-wrap">
                    Join us and <Link to="/register" className="text-Tropical-Lagoon hover:cursor-pointer hover:underline hover:underline-offset-2">make a difference</Link> in the lives of orphans and refugees!
                    Already have an account? <Link to="/login" className="text-Tropical-Lagoon hover:cursor-pointer hover:underline hover:underline-offset-2">Login</Link>
                </div>
            </div>
        </div>
    );
}