import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import Content from "../components/uni/Content/Content";
import ContentHeading from "../components/uni/Content/ContentHeading";
import { StaticProps } from "../tools/Helpers/TranslationHelper";

export default function Home(props: any) {
    const {t} = useTranslation();

    const title = t("app.title");

    return (
        <Content>
            <Head>
                <title>{title + " | " + t("app.title")}</title>
            </Head>

            <ContentHeading faIcon={faUsers}>
                {title}
            </ContentHeading>


        </Content>
    )
}

export const getStaticProps = (async (context: any) => {
    return await StaticProps.default()(context);
});
