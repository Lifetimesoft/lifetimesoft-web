import {Layout} from "../layout/layout";
import {CONST} from "../model/const";
import {Lang, t} from "../model/i18n";

export const Index = ({ lang }: { lang: Lang }) => {
    const tr = t(lang)
    return (
        <Layout
            title={tr.siteTitle}
            desc={tr.siteDesc}
            url={"https://www.lifetimesoft.com"}
            banner={CONST.STATIC_PATH + "/img/build-app-desc.png"}
            lang={lang}
        >
            {/* Hero */}
            <div className="relative bg-gradient-to-b from-green-100 to-white py-24">
                <div className={"w-full h-full absolute inset-0 bg-[url('" + CONST.STATIC_PATH + "/img/bg-header.png')] bg-no-repeat bg-center opacity-10"}></div>
                <div className="relative max-w-[85rem] w-full mx-auto px-4">
                    <div className="flex flex-col items-center text-center">
                        <img src={CONST.STATIC_PATH + "/img/favicon.png"} className="rounded mx-auto mb-8 w-28" alt="logo"/>
                        <div x-data="switchWorld()" x-init="changeForYou">
                            <p className="text-3xl font-bold text-green-600 mb-1">{tr.heroWe}</p>
                            <p className="text-3xl font-bold text-gray-900 mb-1 min-h-[2.5rem]" x-text="forYou"></p>
                            <p className="text-3xl font-bold text-green-600 mb-0">{tr.heroForYou}</p>
                        </div>
                        <a href="https://app.lifetimesoft.com/"
                           className="relative mt-8 inline-block px-8 py-3 text-white bg-green-700 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg z-10">
                            {tr.ctaBtn} →
                        </a>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="max-w-[85rem] w-full mx-auto px-4 mt-20">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{tr.featuresTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tr.features.map((f) => (
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">{f.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{f.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* About */}
            <div className="max-w-[85rem] w-full mx-auto px-4 mt-24">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">{tr.aboutTitle}</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">{tr.aboutP1}</p>
                        <p className="text-gray-600 mb-4 leading-relaxed">{tr.aboutP2}</p>
                        <p className="text-gray-600 leading-relaxed">{tr.aboutP3}</p>
                    </div>
                    <div className="flex-1">
                        <img src={CONST.STATIC_PATH + "/img/build-app-desc.png"}
                             className="rounded-2xl shadow-lg w-full max-w-lg mx-auto"
                             alt="app description"/>
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-green-700 mt-24 py-16">
                <div className="max-w-[85rem] w-full mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-3">{tr.ctaTitle}</h2>
                    <p className="text-green-100 mb-8 text-lg">{tr.ctaDesc}</p>
                    <a href="https://app.lifetimesoft.com/"
                       className="inline-block px-8 py-3 bg-white text-green-800 font-semibold rounded-full hover:bg-green-50 transition-colors shadow-md">
                        {tr.ctaBtn} →
                    </a>
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-[85rem] w-full mx-auto px-4 mt-24">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {tr.stats.map((s) => (
                        <div>
                            <div className="text-4xl font-bold text-green-700 mb-2">{s.value}</div>
                            <div className="text-gray-500 text-sm">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Links */}
            <div className="max-w-[85rem] w-full mx-auto px-4 mt-20 mb-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{tr.socialTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <a href="https://www.youtube.com/@LifeTimeSoft" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all group">
                        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                            <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-semibold text-gray-800">YouTube</div>
                            <div className="text-sm text-gray-400">@LifeTimeSoft</div>
                        </div>
                    </a>

                    <a href="https://www.facebook.com/lifetimesoftservice" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-semibold text-gray-800">Facebook</div>
                            <div className="text-sm text-gray-400">lifetimesoftservice</div>
                        </div>
                    </a>

                    <a href="https://www.tiktok.com/@lifetimesoftservice" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-300 transition-all group">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-gray-100 transition-colors">
                            <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-semibold text-gray-800">TikTok</div>
                            <div className="text-sm text-gray-400">@lifetimesoftservice</div>
                        </div>
                    </a>
                </div>
            </div>

            <script dangerouslySetInnerHTML={{
                __html: `
                function switchWorld() {
                    const items = ${JSON.stringify(tr.heroItems)};
                    return {
                        state: 0,
                        forYou: items[0],
                        changeForYou() {
                            this.state++;
                            this.forYou = items[this.state % items.length];
                            setTimeout(() => this.changeForYou(), 2000);
                        }
                    }
                }
                `,
            }}/>
        </Layout>
    )
}
