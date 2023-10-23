

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-black  text-neutral-content">
                <aside>
                    <img className=" w-2/4 " src="/src/assets/image/Logo/logo.jpg" alt="" />
                    <p className="text-4xl font-paragraph text-black">Wedding Planner.</p> <p className="text-xl font-paragraph text-black">Providing reliable tech since 1992</p>
                </aside>
                <nav className=" mt-0 md:mt-36 ">
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a href="facebook.com"><img className="w-10" src="/src/assets/image/Logo/facebook.png" alt="" /></a>
                        <a href="instagram.com"><img className="w-10" src="/src/assets/image/Logo/instagram.png" alt="" /></a>
                        <a href="youtube.com"><img className="w-12" src="/src/assets/image/Logo/youtube.png" alt="" /></a>
                    </div>
                </nav>
            </footer>
            
                <p className="text-2xl font-heading font-bold text-center mb-5">Copyright © 2023 - All right reserved by <span className="font-paragraph">Wedding Planner</span></p>
            
        </div>
    );
};

export default Footer;