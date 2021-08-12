import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link"
import { NextRouter, useRouter } from "next/router";
import React from "react";
import { MenuItemsRepository } from "../../data/MenuItems";
import LinkExternal from "../uni/LinkExternal";

function onLangChange(lang: string, router: NextRouter) {
    i18n?.changeLanguage(lang);
    router.push(router.pathname, router.pathname, {locale: lang})
}

export default function Header() {
    const {t} = useTranslation();
    const router = useRouter();

    const menuItems = (new MenuItemsRepository()).getAll();

    return (
        <header className="py-3 bg-primary border-bottom text-white">
            <div className="container d-flex flex-wrap justify-content-center">
                <Link href="/">
                    <a className="d-flex align-items-center mb-2 mb-lg-0 me-2 text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUsers} className="me-2"/>

                        <span className="fs-4">{t("app.titleShort")}</span>
                    </a>
                </Link>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    {
                        menuItems.map(menuItem => (
                            <li key={menuItem.title} className="nav-item">
                                <Link href={menuItem.url || "#"}>
                                    <a className="nav-link px-2 text-white">
                                        {t(menuItem.title)}
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                    <li className="nav-item">
                        <LinkExternal
                            className="nav-link px-2 text-white"
                            url="https://www.facebook.com/Developers-for-Developers-113272867624886/jobs/">
                            {t("pages.jobs.title")}
                            <sup><FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1"/></sup>
                        </LinkExternal>
                    </li>
                </ul>
            </div>
        </header>
    )
}
