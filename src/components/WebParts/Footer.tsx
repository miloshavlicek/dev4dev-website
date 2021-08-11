import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "next-i18next";
import LinkExternal from "../uni/LinkExternal";

export default function Footer() {
    const {t} = useTranslation();

    return (
        <footer className="bd-footer p-3 p-md-5 bg-white shadow-sm text-center text-sm-start">
            <div className="container">
                <div className="mb-2 text-center">
                    {t("components.footer.developedBy")}
                </div>

                <div className="mt-2 mb-2 text-center">
                    <LinkExternal
                        url="https://github.com/miloshavlicek/dev4dev-website/issues"
                        className="btn btn-secondary btn-lg me-1">
                        {t("components.footer.reportIssue")}
                    </LinkExternal>
                    <LinkExternal
                        url="https://github.com/miloshavlicek/dev4dev-website"
                        faIcon={faGithub}
                        className="btn btn-dark btn-lg me-1">
                        {t("components.footer.editCode")}
                    </LinkExternal>
                </div>
            </div>
        </footer>
    )
}
