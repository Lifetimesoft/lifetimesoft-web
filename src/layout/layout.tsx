import {CONST} from "../model/const";
import {Header} from "./header";
import {Footer} from "./footer";
import {Lang, t} from "../model/i18n";

export const Layout = (
    props: {
        title: string
        desc?: string
        url?: string
        banner?: string
        lang?: Lang
        children?: any
    }
) => {
    const lang = props.lang ?? 'en'
    const tr = t(lang)
    const desc = props.desc ?? tr.siteDesc
    const url = props.url ?? "https://www.lifetimesoft.com"
    const banner = props.banner ?? (CONST.STATIC_PATH + "/img/favicon.png")

    return (
        <html lang={lang}>
        <head>
            <title>{props.title}</title>

            <meta charset="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
            <meta name="description" content={desc}/>
            <meta name="google-site-verification" content="cE-1qQu9LP4wdCogIneieuAx9MDrYJxQxCjKNX-2C-8"/>
            <meta name="facebook-domain-verification" content="23xbapwwaxnb8x5ryndn8ml1rmbv80"/>

            {/* Open Graph */}
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={props.title}/>
            <meta property="og:description" content={desc}/>
            <meta property="og:url" content={url}/>
            <meta property="og:image" content={banner}/>

            {/* Canonical */}
            <link rel="canonical" href={url}/>

            <link type="image/x-icon" href={CONST.STATIC_PATH + '/img/favicon.ico'} rel="shortcut icon"/>

            <link rel="stylesheet" href="/css/style.css"/>
            <script defer src="/js/alpine.js"></script>
        </head>
        <body>
        <div className="body min-h-screen">
            <Header lang={lang}/>
            <div>
                {props.children}
            </div>
        </div>
        <Footer lang={lang}/>
        </body>
        </html>
    )
}
