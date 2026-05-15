import { Lang, t } from "../model/i18n";

export const Footer = ({ lang }: { lang: Lang }) => {
    const tr = t(lang)
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="bg-green-800 mt-16 pt-16 pb-16 text-white">
                <div className="max-w-[85rem] w-full mx-auto px-4">
                    <div className="text-center mb-6">
                        <p className="text-lg font-bold mb-2">{tr.footerContact}</p>
                        <div>admin@lifetimesoft.com</div>
                    </div>
                    <div className="text-center">Lifetime Soft © {year}</div>
                    <div className="text-center mb-6">{tr.footerMade}</div>
                    <div className="text-center">
                        <ul>
                            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                                <a href={`https://docs.lifetimesoft.com/`} target="_blank">{tr.footerDocs}</a>
                            </li>
                            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                                <a href={`/privacy-policy?lang=${lang}`}>{tr.footerPrivacy}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
