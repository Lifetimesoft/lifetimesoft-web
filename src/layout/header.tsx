import {CONST} from "../model/const";
import {Lang, t} from "../model/i18n";

export const Header = ({ lang }: { lang: Lang }) => {
    const tr = t(lang)
    return (
        <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 shadow-md mb-0.5">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" x-data="{ open: false }">
                <div className="flex items-center justify-between">
                    <a className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80" href={`/?lang=${lang}`} aria-label="Brand">
                        <span className="inline-flex items-center gap-x-2 text-xl font-semibold">
                            <img src={CONST.STATIC_PATH + "/img/favicon.png"} className="mr-2 w-10" alt="logo"/> Lifetime Soft
                        </span>
                    </a>
                    <div className="sm:hidden">
                        <button type="button"
                                className="relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none"
                                aria-label="Toggle navigation"
                                x-on:click="open = !open">
                            <svg x-show="!open" className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6"/>
                                <line x1="3" x2="21" y1="12" y2="12"/>
                                <line x1="3" x2="21" y1="18" y2="18"/>
                            </svg>
                            <svg x-show="open" className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                            </svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden transition-all duration-300 basis-full grow sm:block"
                     x-bind:class="open ? 'block' : 'hidden sm:block'">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <a className="text-gray-500 hover:text-gray-800 focus:outline-none" href="https://docs.lifetimesoft.com/" target="_blank">
                            {tr.navDocs}
                        </a>
                        <a className="text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600 hover:border-green-700 hover:text-green-700 transition-colors"
                           href={`?lang=${tr.navLangCode}`}>
                            {tr.navLang}
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
