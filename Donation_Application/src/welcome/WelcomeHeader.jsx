export function WelcomeHeader(){
    return (
        <div className="w-full flex flex-row bg-Mystic-Teal items-center justify-between px-6 pb-6 pt-2 border-b-2 border-Midnight-Pine text-MidnightPine">
            <div>
                <span>About Us</span>
            </div>
            <div>
                <h1 className="font-logo text-5xl text-opacity-100">EغATHA</h1>
            </div>
            <div className="flex flex-row gap-3">
                <span>Login</span>
                <span>Register</span>
            </div>
        </div>
    );
}