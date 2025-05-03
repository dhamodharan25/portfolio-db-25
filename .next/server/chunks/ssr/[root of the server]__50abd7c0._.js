module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/components/ScrollProgressIndicator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66_18876d0f6d3185b6119dce0b65d14ea1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66_18876d0f6d3185b6119dce0b65d14ea1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ScrollProgressIndicator = ()=>{
    const scrollBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (scrollBarRef.current) {
                const { scrollHeight, clientHeight } = document.documentElement;
                const scrollableHeight = scrollHeight - clientHeight;
                const scrollY = window.scrollY;
                const scrollProgress = scrollY / scrollableHeight * 100;
                scrollBarRef.current.style.transform = `translateY(-${100 - scrollProgress}%)`;
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-[50svh] right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-background-light overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-primary rounded-full h-full",
            ref: scrollBarRef
        }, void 0, false, {
            fileName: "[project]/components/ScrollProgressIndicator.tsx",
            lineNumber: 29,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ScrollProgressIndicator.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = ScrollProgressIndicator;
}}),
"[project]/components/ParticleBackground.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66_18876d0f6d3185b6119dce0b65d14ea1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gsap$2b$react$40$2$2e$1$2e$1$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@gsap+react@2.1.1/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$12$2e$5$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66_18876d0f6d3185b6119dce0b65d14ea1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$12$2e$5$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gsap$2b$react$40$2$2e$1$2e$1$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"]);
const ParticleBackground = ()=>{
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gsap$2b$react$40$2$2e$1$2e$1$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        particlesRef.current.forEach((particle)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$12$2e$5$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(particle, {
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                opacity: Math.random(),
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1)
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$12$2e$5$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(particle, {
                y: window.innerHeight,
                duration: Math.random() * 10 + 10,
                opacity: 0,
                repeat: -1,
                ease: 'none'
            });
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-0 pointer-events-none",
        children: [
            ...Array(100)
        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: (el)=>{
                    particlesRef.current.push(el);
                },
                className: "absolute rounded-full bg-white"
            }, i, false, {
                fileName: "[project]/components/ParticleBackground.tsx",
                lineNumber: 35,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ParticleBackground.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = ParticleBackground;
}}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$4$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@2.5.4/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$4$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/lib/data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GENERAL_INFO": (()=>GENERAL_INFO),
    "MY_EXPERIENCE": (()=>MY_EXPERIENCE),
    "MY_STACK": (()=>MY_STACK),
    "PROJECTS": (()=>PROJECTS),
    "SOCIAL_LINKS": (()=>SOCIAL_LINKS)
});
const GENERAL_INFO = {
    email: 'dhamodharanbalamurugan@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Dhamodharan, I am reaching out to you because...'
};
const SOCIAL_LINKS = [
    {
        name: 'github',
        url: 'https://github.com/dhamodharan25'
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/dhamodharan-b-725646229/'
    }
];
const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png'
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png'
        },
        {
            name: 'React',
            icon: '/logo/react.png'
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png'
        },
        // {
        //     name: 'Redux',
        //     icon: '/logo/redux.png',
        // },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png'
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png'
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png'
        }
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png'
        },
        // {
        //     name: 'Nest.js',
        //     icon: '/logo/nest.svg',
        // },
        {
            name: 'Express.js',
            icon: '/logo/express.png'
        }
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg'
        },
        // {
        //     name: 'PostgreSQL',
        //     icon: '/logo/postgreSQL.png',
        // },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg'
        },
        // {
        //     name: 'Prisma',
        //     icon: '/logo/prisma.png',
        // },
        {
            name: 'FireBase',
            icon: '/logo/firebase.svg'
        }
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png'
        }
    ]
};
const PROJECTS = [
    {
        title: 'MTI Electronics',
        slug: 'mti-electronics',
        liveUrl: 'https://mti-electronics.vercel.app/',
        year: 2025,
        description: `
      A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
        <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
        <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel'
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp'
        ]
    },
    {
        title: 'Epikcart',
        slug: 'epikcart',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration'
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png'
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS'
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png'
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description: 'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion'
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png'
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description: 'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: [
            'HTML',
            'CSS & SCSS',
            'Javascript',
            'Bootstrap'
        ],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png'
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description: 'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: [
            'Next.js',
            'Formik',
            'Drag & Drop',
            'Tailwind CSS'
        ],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png'
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``
    }
];
const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Strativ AB',
        duration: 'Dec 2024 - Present'
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024'
    },
    {
        title: 'FRONTEND ENGINEER',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023'
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022'
    }
];
}}),
"[project]/components/Navbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66_18876d0f6d3185b6119dce0b65d14ea1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66_18876d0f6d3185b6119dce0b65d14ea1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$460$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.460.0_react@19.0.0-rc-66855b96-20241106/node_modules/lucide-react/dist/esm/icons/move-up-right.js [app-ssr] (ecmascript) <export default as MoveUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66_18876d0f6d3185b6119dce0b65d14ea1/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const COLORS = [
    'bg-yellow-500 text-black',
    'bg-blue-500 text-white',
    'bg-teal-500 text-black',
    'bg-indigo-500 text-white'
];
const MENU_LINKS = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About Me',
        url: '/#about-me'
    },
    // {
    //     name: 'Experience',
    //     url: '/#my-experience',
    // },
    {
        name: 'Projects',
        url: '/#selected-projects'
    }
];
const Navbar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-[4]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group size-12 absolute top-5 right-5 md:right-10 z-[2]'),
                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] ', {
                                'rotate-45 -translate-y-1/2': isMenuOpen,
                                'md:group-hover:rotate-12': !isMenuOpen
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] ', {
                                '-rotate-45 -translate-y-1/2': isMenuOpen,
                                'md:group-hover:-rotate-12': !isMenuOpen
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150', {
                    'opacity-0 invisible pointer-events-none': !isMenuOpen
                }),
                onClick: ()=>setIsMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14', 'flex flex-col lg:justify-center py-10', {
                    'translate-x-0': isMenuOpen
                }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]', {
                            'translate-x-0': isMenuOpen
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-10 lg:justify-between max-lg:flex-col w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-lg:order-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground mb-5 md:mb-8",
                                            children: "SOCIAL"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 97,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIAL_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.url,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "text-lg capitalize hover:underline",
                                                        children: link.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 41
                                                    }, this)
                                                }, link.name, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 100,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground mb-5 md:mb-8",
                                            children: "MENU"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: MENU_LINKS.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            router.push(link.url);
                                                            setIsMenuOpen(false);
                                                        },
                                                        className: "group text-xl flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all', COLORS[idx]),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$460$2e$0_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveUpRight$3e$__["MoveUpRight"], {
                                                                    size: 8,
                                                                    className: "scale-0 group-hover:scale-100 transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Navbar.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Navbar.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 45
                                                            }, this),
                                                            link.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 41
                                                    }, this)
                                                }, link.name, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[300px] mx-8 sm:mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-4",
                                children: "GET IN TOUCH"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 150,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GENERAL_INFO"].email}`,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GENERAL_INFO"].email
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 149,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Navbar;
}}),
"[project]/components/CustomCursor.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66_18876d0f6d3185b6119dce0b65d14ea1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gsap$2b$react$40$2$2e$1$2e$1$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@gsap+react@2.1.1/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$12$2e$5$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66_18876d0f6d3185b6119dce0b65d14ea1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$12$2e$5$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gsap$2b$react$40$2$2e$1$2e$1$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"]);
const CustomCursor = ()=>{
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gsap$2b$react$40$2$2e$1$2e$1$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])((context, contextSafe)=>{
        if (window.innerWidth < 768) return;
        const handleMouseMove = contextSafe?.((e)=>{
            if (!svgRef.current) return;
            const { clientX, clientY } = e;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$12$2e$5$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(svgRef.current, {
                x: clientX,
                y: clientY,
                ease: 'power2.out',
                duration: 0.25,
                opacity: 1
            });
        });
        window.addEventListener('mousemove', handleMouseMove);
        return ()=>{
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "27",
        height: "30",
        viewBox: "0 0 27 30",
        className: "hidden md:block fixed top-0 left-0 opacity-0 z-[50] pointer-events-none" // -translate-x-1/2 -translate-y-1/2
        ,
        fill: "none",
        id: "cursor",
        strokeWidth: "2",
        opacity: "0",
        xmlns: "http://www.w3.org/2000/svg",
        ref: svgRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z",
            className: "fill-foreground stroke-background/50"
        }, void 0, false, {
            fileName: "[project]/components/CustomCursor.tsx",
            lineNumber: 48,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CustomCursor.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = CustomCursor;
}}),
"[project]/components/Preloader.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66_18876d0f6d3185b6119dce0b65d14ea1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gsap$2b$react$40$2$2e$1$2e$1$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@gsap+react@2.1.1/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$12$2e$5$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66_18876d0f6d3185b6119dce0b65d14ea1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$12$2e$5$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gsap$2b$react$40$2$2e$1$2e$1$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"]);
const Preloader = ()=>{
    const preloaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gsap$2b$react$40$2$2e$1$2e$1$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (!isMounted) return;
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$12$2e$5$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            defaults: {
                ease: 'power1.inOut'
            }
        });
        tl.to('.name-text span', {
            y: 0,
            stagger: 0.05,
            duration: 0.2
        });
        tl.to('.preloader-item', {
            delay: 1,
            y: '100%',
            duration: 0.5,
            stagger: 0.1
        }).to('.name-text span', {
            autoAlpha: 0
        }, '<0.5').to(preloaderRef.current, {
            autoAlpha: 0
        }, '<1');
    }, {
        scope: preloaderRef,
        dependencies: [
            isMounted
        ]
    });
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[6] flex",
        ref: preloaderRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preloader-item h-full w-[10%] bg-black"
            }, void 0, false, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preloader-item h-full w-[10%] bg-black"
            }, void 0, false, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preloader-item h-full w-[10%] bg-black"
            }, void 0, false, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preloader-item h-full w-[10%] bg-black"
            }, void 0, false, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preloader-item h-full w-[10%] bg-black"
            }, void 0, false, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preloader-item h-full w-[10%] bg-black"
            }, void 0, false, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preloader-item h-full w-[10%] bg-black"
            }, void 0, false, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preloader-item h-full w-[10%] bg-black"
            }, void 0, false, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preloader-item h-full w-[10%] bg-black"
            }, void 0, false, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preloader-item h-full w-[10%] bg-black"
            }, void 0, false, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "name-text flex text-[20vw] lg:text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block translate-y-full",
                        children: "D"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block translate-y-full",
                        children: "H"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block translate-y-full",
                        children: "A"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block translate-y-full",
                        children: "M"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block translate-y-full",
                        children: "O"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block translate-y-full",
                        children: "D"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block translate-y-full",
                        children: "H"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block translate-y-full",
                        children: "A"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block translate-y-full",
                        children: "R"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block translate-y-full",
                        children: "A"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66_18876d0f6d3185b6119dce0b65d14ea1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block translate-y-full",
                        children: "N"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Preloader.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Preloader;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__50abd7c0._.js.map