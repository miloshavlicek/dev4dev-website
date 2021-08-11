import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Content from "../components/uni/Content/Content";
import ContentBox from "../components/uni/Content/ContentBox";
import LinkExternal from "../components/uni/LinkExternal";
import { StaticProps } from "../tools/Helpers/TranslationHelper";

export default function Home(props: any) {
    const {t} = useTranslation();

    const title = t("app.title");

    return (
        <Content>
            <Head>
                <title>{title + " | " + t("app.title")}</title>
            </Head>

            <div className="notice-line">
                <div className="container fw-bold">
                    👉 {t("pages.home.joinCommunity")}
                </div>
            </div>

            <ContentBox className="text-center">
                <div className="row">
                    <div className="col-md-8 text-start" style={{fontSize: "1.5em"}}>
                        <ul className={"m-2"} style={{listStyleType: "none"}}>
                            <li>🤙 Zkušení developeři z Česka a Slovenska</li>
                            <li>🤙 Rady, tipy, triky</li>
                            <li>🤙 Rychlá vzájemná pomoc s řešením problémů</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <LinkExternal
                            url="https://www.facebook.com/groups/3642352659323878"
                            faIcon={faUsers}
                            className="btn btn-primary btn-lg m-1 d-block">
                            {t("pages.home.goToFbGroup")}
                        </LinkExternal>

                        <LinkExternal
                            url="https://www.facebook.com/Developers-for-Developers-113272867624886"
                            faIcon={faFacebookF}
                            className="btn btn-dark btn-lg m-1 d-block">
                            {t("pages.home.goToFbPage")}
                        </LinkExternal>
                    </div>
                </div>
            </ContentBox>

        </Content>
    )
}

export const getStaticProps = (async (context: any) => {
    return await StaticProps.default()(context);
});
