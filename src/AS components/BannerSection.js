export default function BannerSection() {
    return (
        <>
        
            <section className="header">
                <video className="back-video" autoPlay loop muted fixed>
                    <source src="/video/video.mp4" type="video/mp4"></source>

                </video>
                <img className="nav-main-logo" src="/Logo/FullTransparent.png"></img>
                <h1>Thank you for visiting our website</h1>
                <div>
                    <button className="btn-link">Menu</button>
                </div>
            </section>
        </>
    )
}