import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import Content from "../components/uni/Content/Content";
import ContentBox from "../components/uni/Content/ContentBox";
import LinkExternal from "../components/uni/LinkExternal";
import { StaticProps } from "../tools/Helpers/TranslationHelper";

export default function Home(props: any) {
    const {t} = useTranslation();

    const title = t("app.title");

    const carouselData: {
        imgSrc: string,
        alt?: string,
        title?: string,
        text?: string
    }[] = [];

    carouselData.push({
        imgSrc: "/img/dev4dev_cover.jpg",
        alt: "Developers for developers",
    });

    return (
        <Content>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="notice-line">
                <div className="container fw-bold">
                    👉 {t("pages.home.joinCommunity")}
                </div>
            </div>

            <ContentBox className="text-center">
                <div className="row">
                    <div className="col-md-8 text-start" style={{fontSize: "1.5em"}}>
                        <ul className="m-2" style={{listStyleType: "none"}}>
                            <li>🤙 {t("pages.home.li1")}</li>
                            <li>🤙 {t("pages.home.li2")}</li>
                            <li>🤙 {t("pages.home.li3")}</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <LinkExternal
                            url="https://www.facebook.com/Developers-for-Developers-113272867624886"
                            faIcon={faFacebookF}
                            className="btn btn-dark btn-lg m-1 d-block">
                            {t("pages.home.goToFbPage")}
                        </LinkExternal>

                        <LinkExternal
                            url="https://www.facebook.com/groups/3642352659323878"
                            faIcon={faUsers}
                            className="btn btn-primary btn-lg m-1 d-block">
                            {t("pages.home.goToFbGroup")}
                        </LinkExternal>

                        <LinkExternal
                            url="https://www.facebook.com/Developers-for-Developers-113272867624886"
                            faIcon={faDiscord}
                            className="btn btn-primary btn-lg m-1 d-block">
                            {t("pages.home.goToDiscord")}
                        </LinkExternal>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <Carousel controls={carouselData.length > 1} indicators={carouselData.length > 1}>
                                {
                                    carouselData.map((carouselItem, i) => (
                                        <Carousel.Item key={i}>
                                            <Image
                                                src={carouselItem.imgSrc}
                                                alt={carouselItem.alt}
                                                className="d-block w-100"
                                                layout="responsive"
                                                width={1110}
                                                height={624}
                                            />
                                            <Carousel.Caption>
                                                {
                                                    carouselItem.title &&
                                                    <h3>{carouselItem.title}</h3>
                                                }
                                                {
                                                    carouselItem.text &&
                                                    <p>{carouselItem.text}</p>
                                                }
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    ))
                                }
                            </Carousel>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                            <iframe
                                src="https://discord.com/widget?id=875859287916834828&theme=dark"
                                width="350"
                                height="500"
                                style={{"max-width": "100%"}}
                                allowTransparency={true}
                                frameBorder="0"
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
                        </div>
                    </div>
                </div>

            </ContentBox>
        </Content>
    )
}

export const getStaticProps = (async (context: any) => {
    return await StaticProps.default()(context);
});
