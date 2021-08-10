import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "next-i18next";
import { IExternalLink } from "../../model/IExternalLink";
import LinkExternal from "../uni/LinkExternal";

export default function Footer() {
    const {t} = useTranslation();

    const extLinks: IExternalLink[] = [
        {
            url: "https://github.com/miloshavlicek/dev4dev-website",
            faIcon: faGithub,
            title: "GitHub"
        }
    ]

    return (
        <footer className="bd-footer p-3 p-md-5 mt-5 bg-white shadow-sm text-center text-sm-start">
            <div className="container">
                <ul className="bd-footer-links ps-0 mb-3">
                    <li className="d-inline-block">
                        {
                            extLinks.map((extLink, i) =>
                                <LinkExternal key={i} data={extLink} className="mx-3"/>
                            )
                        }
                    </li>
                </ul>
            </div>
        </footer>
    )
}
