import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faSlack } from "@fortawesome/free-brands-svg-icons/faSlack";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Content from "../../components/uni/Content/Content";
import ContentBox from "../../components/uni/Content/ContentBox";
import ContentHeading from "../../components/uni/Content/ContentHeading";
import LinkExternal from "../../components/uni/LinkExternal";
import { CommunitiesRepository } from "../../data/Communities";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function Communities(props: any) {
    const {t} = useTranslation();

    const title = t("pages.communities.title");

    const communities = (new CommunitiesRepository()).getAll();

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

            <p>
                {t('pages.communities.p1')}
            </p>

            <div className="row">
                {
                    communities.map(community => (
                        <div className="col-md-4">
                            <ContentBox className="text-center">
                                <h3>{community.title}</h3>
                                {
                                    community.website &&
                                    <LinkExternal
                                        url={community.website}
                                        faIcon={faGlobe}
                                        className="btn btn-primary btn-lg m-1 d-block">
                                        {t("pages.communities.website")}
                                    </LinkExternal>
                                }
                                {
                                    community.facebook &&
                                    <LinkExternal
                                        url={community.facebook}
                                        faIcon={faFacebookF}
                                        className="btn btn-primary btn-lg m-1 d-block">
                                        {t("pages.communities.facebook")}
                                    </LinkExternal>
                                }
                                {
                                    community.facebookGroup &&
                                    <LinkExternal
                                        url={community.facebookGroup}
                                        faIcon={faUsers}
                                        className="btn btn-primary btn-lg m-1 d-block">
                                        {t("pages.communities.facebookGroup")}
                                    </LinkExternal>
                                }
                                {
                                    community.discord &&
                                    <LinkExternal
                                        url={community.discord}
                                        faIcon={faDiscord}
                                        className="btn btn-primary btn-lg m-1 d-block">
                                        {t("pages.communities.discord")}
                                    </LinkExternal>
                                }
                                {
                                    community.slack &&
                                    <LinkExternal
                                        url={community.slack}
                                        faIcon={faSlack}
                                        className="btn btn-primary btn-lg m-1 d-block">
                                        {t("pages.communities.slack")}
                                    </LinkExternal>
                                }
                                {
                                    community.twitter &&
                                    <LinkExternal
                                        url={community.twitter}
                                        faIcon={faTwitter}
                                        className="btn btn-primary btn-lg m-1 d-block">
                                        {t("pages.communities.twitter")}
                                    </LinkExternal>
                                }
                            </ContentBox>
                        </div>
                    ))
                }
            </div>
        </Content>
    )
}

export const getStaticProps = (async (context: any) => {
    return await StaticProps.default()(context);
});
