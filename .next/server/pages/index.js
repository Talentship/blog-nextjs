"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(7518);
// EXTERNAL MODULE: ./components/post-preview.tsx
var post_preview = __webpack_require__(469);
;// CONCATENATED MODULE: ./components/more-stories.tsx


const MoreStories = ({ posts  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight",
                children: "More Stories"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",
                children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(post_preview/* default */.Z, {
                        title: post.title,
                        coverImage: post.coverImage,
                        date: post.date,
                        author: post.author,
                        slug: post.slug,
                        excerpt: post.excerpt
                    }, post.slug))
            })
        ]
    });
};
/* harmony default export */ const more_stories = (MoreStories);

// EXTERNAL MODULE: ./components/avatar.tsx
var avatar = __webpack_require__(8063);
// EXTERNAL MODULE: ./components/date-formatter.tsx
var date_formatter = __webpack_require__(3797);
// EXTERNAL MODULE: ./components/cover-image.tsx
var cover_image = __webpack_require__(9371);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/hero-post.tsx





const HeroPost = ({ title , coverImage , date , excerpt , author , slug  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-8 md:mb-16",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                    title: title,
                    src: coverImage,
                    slug: slug
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "mb-4 text-4xl lg:text-5xl leading-tight",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    as: `/posts/${slug}`,
                                    href: "/posts/[slug]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:underline",
                                        children: title
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-4 md:mb-0 text-lg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(date_formatter/* default */.Z, {
                                    dateString: date
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-lg leading-relaxed mb-4",
                                children: excerpt
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                name: author.name,
                                picture: author.picture
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const hero_post = (HeroPost);

// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(9953);
;// CONCATENATED MODULE: ./components/intro.tsx


const Intro = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",
                children: "Blog."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                className: "text-center md:text-left text-lg mt-5 md:pl-8",
                children: [
                    "A statically generated blog example using",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://nextjs.org/",
                        className: "underline hover:text-blue-600 duration-200 transition-colors",
                        children: "Next.js"
                    }),
                    " ",
                    "and ",
                    constants/* CMS_NAME */.yf,
                    "."
                ]
            })
        ]
    });
};
/* harmony default export */ const intro = (Intro);

// EXTERNAL MODULE: ./components/layout.tsx + 4 modules
var layout = __webpack_require__(3731);
// EXTERNAL MODULE: ./lib/api.ts
var api = __webpack_require__(4390);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/index.tsx









const Index = ({ allPosts  })=>{
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            allPosts: allPosts,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "Next.js Blog Example with ",
                            constants/* CMS_NAME */.yf
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(intro, {}),
                        heroPost && /*#__PURE__*/ jsx_runtime_.jsx(hero_post, {
                            title: heroPost.title,
                            coverImage: heroPost.coverImage,
                            date: heroPost.date,
                            author: heroPost.author,
                            slug: heroPost.slug,
                            excerpt: heroPost.excerpt
                        }),
                        morePosts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(more_stories, {
                            posts: morePosts
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const pages = (Index);
const getStaticProps = async ()=>{
    const allPosts = (0,api/* getAllPosts */.Bd)([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt", 
    ]);
    return {
        props: {
            allPosts
        }
    };
};


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,979], () => (__webpack_exec__(8781)));
module.exports = __webpack_exports__;

})();