export default function SocialMediaIcons(){
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/aliyu-joel"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin link" src="../assets/linkedin.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.twitter.com/jimmyx__"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="twitter link" src="../assets/twitter.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com/joelali5"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="facebook link" src="../assets/facebook.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/joel_id"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram link" src="../assets/instagram.png" />
            </a>
        </div>
    )
}