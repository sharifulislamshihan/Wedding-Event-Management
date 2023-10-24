

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-black">
                <aside>
                    <img className=" w-2/4 " src="https://i.ibb.co/nkfXH6s/logo.jpg" alt="" />
                    <p className="text-4xl font-paragraph text-black">Wedding Planner.</p> <p className="text-xl font-paragraph text-black">Providing reliable tech since 1992</p>
                </aside>
                <nav className=" mt-0 md:mt-36 ">
                    <header className=" text-3xl font-pacifico text-black font-semibold">SOCIAL</header>
                    <div className="grid grid-flow-col gap-4">
                        <a href="facebook.com"><img className="w-10" src="https://i.ibb.co/D9JQkTt/facebook.png" alt="facebook_logo" /></a>
                        <a href="instagram.com"><img className="w-10" src="https://i.ibb.co/27bjKKx/instagram.png" alt="instagram_logo" /></a>
                        <a href="youtube.com"><img className="w-12" src="https://i.ibb.co/7j70CHJ/youtube.png" alt="youtube_logo" /></a>
                    </div>
                </nav>
            </footer>
            
                <p className="text-2xl font-heading font-bold text-center mb-5">Copyright © 2023 - All right reserved by <span className="font-paragraph">Wedding Planner</span></p>
            
        </div>
    );
};

export default Footer;