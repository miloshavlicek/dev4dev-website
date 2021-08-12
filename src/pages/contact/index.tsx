import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons/faFacebookMessenger";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import Content from "../../components/uni/Content/Content";
import ContentBox from "../../components/uni/Content/ContentBox";
import ContentHeading from "../../components/uni/Content/ContentHeading";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function Home(props: any) {
    const {t} = useTranslation();

    const title = t("pages.contact.title");

    return (
        <Content>
            <Head>
                <title>{title + " | " + t("app.title")}</title>
            </Head>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href={"/"}>
                            <a>{t("pages.home.title")}</a>
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {title}
                    </li>
                </ol>
            </nav>

            <ContentHeading>{title}</ContentHeading>

            <ContentBox className="text-center">
                <a
                    href="tel:+420602699269"
                    className="btn btn-lg btn-secondary m-2">
                    <FontAwesomeIcon icon={faPhone} className="me-2"/>
                    +420 602 699 269
                </a>
                <a
                    href="https://www.facebook.com/Developers-for-Developers-113272867624886/"
                    className="btn btn-lg btn-primary d-inline-block m-2">
                    <FontAwesomeIcon icon={faFacebookMessenger} className="me-2"/>
                    {t('pages.contact.fbMessenger')}
                </a>
            </ContentBox>
        </Content>
    )
}

export const getStaticProps = (async (context: any) => {
    return await StaticProps.default()(context);
});
