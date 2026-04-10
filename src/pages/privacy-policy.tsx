import {Layout} from "../layout/layout";
import {Lang, t} from "../model/i18n";

export const PrivacyPolicy = ({ lang }: { lang: Lang }) => {
    const tr = t(lang)
    return (
        <Layout
            title={`Lifetime Soft - ${tr.privacyTitle}`}
            desc={tr.siteDesc}
            url={"https://www.lifetimesoft.com/privacy-policy"}
            lang={lang}
        >
            <div className="max-w-[85rem] w-full mx-auto px-4 mt-8 mb-16">
                <div className="text-2xl font-bold">{tr.privacyTitle}</div>
                <div className="text-gray-500 mb-6">
                    <span className="font-semibold">{tr.privacyUpdated}:</span> {tr.privacyUpdatedDate}
                </div>
                <p className="text-gray-600 mb-6">{tr.privacyIntro}</p>
                {tr.privacySections.map((s) => (
                    <div className="mt-6">
                        <div className="text-xl font-bold mb-2">{s.title}</div>
                        <p className="text-gray-600 leading-relaxed">{s.body}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
