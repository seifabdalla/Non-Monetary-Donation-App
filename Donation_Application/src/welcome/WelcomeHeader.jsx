export function WelcomeHeader(){
    return (
        <div className="w-full flex flex-row bg-Mystic-Teal items-center justify-between px-6 pb-6 pt-2 border-b-2 border-Midnight-Pine text-MidnightPine">
            <div>
                <a className="font-normal text-lg hover:text-red-800 transition-colors duration-300 ease-linear" href="#about-us">About Us</a>
            </div>
            <div>
                <h1 className="font-logo text-5xl text-opacity-100">EغATHA</h1>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center font-normal text-lg">
                <button className="hover:text-red-800 transition-colors duration-300 ease-linear">Login</button>
                <button className="border border-Midnight-Pine hover:bg-red-800 hover:text-slate-50 transition-colors duration-300 ease-linear rounded-full px-2 py-1">Register</button>
            </div>
        </div>
    );
}