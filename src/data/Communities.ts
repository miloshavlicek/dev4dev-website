import { CachedRepository } from "../tools/Repository/CachedRepository";

export interface ICommunity {
    title: string;
    description?: string;
    website?: string;
    facebook?: string;
    facebookGroup?: string;
    twitter?: string;
    slack?: string;
    discord?: string;
}

const data: ICommunity[] = [
    {
        title: "DEV4DEV",
        website: "https://dev4dev.cz/",
        facebook: "https://www.facebook.com/developers4developers/",
        facebookGroup: "https://www.facebook.com/groups/3642352659323878/",
        discord: "https://discord.gg/ED4TXGra"
    },
    {
        title: "péhápkaři",
        website: "https://pehapkari.cz/",
        facebook: "https://www.facebook.com/pehapkari",
        twitter: "https://www.twitter.com/pehapkari",
        slack: "https://join.slack.com/t/pehapkari/shared_invite/zt-m3c6y1ya-XvJ4dXppLmAsT_YH5hZSwQ"
    },
    {
        title: "Frontendisti.cz",
        website: "https://frontendisti.cz/",
        facebook: "https://www.facebook.com/frontendisti",
        facebookGroup: "https://www.facebook.com/groups/frontendisti"
    },
    {
        title: "PHP programátoři",
        facebookGroup: "https://www.facebook.com/groups/276111229221459"
    },
    {
        title: "Programátoři",
        facebookGroup: "https://www.facebook.com/groups/193575630828729"
    }
];


export class CommunitiesRepository extends CachedRepository<ICommunity> {

    protected fetchAll() {
        return data;
    }
}
