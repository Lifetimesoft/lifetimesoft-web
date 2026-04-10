import {Hono} from 'hono'
import {Index} from "./pages";
import {PrivacyPolicy} from "./pages/privacy-policy";
import {getLang} from "./model/i18n";

type Bindings = {
    DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<Index lang={lang}/>)
})

app.get('/privacy-policy', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<PrivacyPolicy lang={lang}/>)
})

app.get('/tiktokB5Y8JNBgcQjfoLd02fYkXvZz3oIiMQyx.txt', (c) => {
    return c.text('tiktok-developers-site-verification=B5Y8JNBgcQjfoLd02fYkXvZz3oIiMQyx')
})

app.get('/robots.txt', (c) => {
    return c.text('User-agent: *\nAllow: /\nSitemap: https://www.lifetimesoft.com/sitemap.xml')
})

app.get('/sitemap.xml', (c) => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.lifetimesoft.com/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.lifetimesoft.com/privacy-policy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>`
    return c.body(xml, 200, {'Content-Type': 'application/xml'})
})

export default app
