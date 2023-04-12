"use strict";
exports.id = 132;
exports.ids = [132];
exports.modules = {

/***/ 7132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Header.tsx





const Header = ()=>{
    const router = (0,router_.useRouter)();
    const isActive = (pathname)=>router.pathname === pathname;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "jsx-30e84451aa1192d1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-30e84451aa1192d1" + " " + "left",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            "data-active": isActive("/"),
                            className: "jsx-30e84451aa1192d1" + " " + "bold",
                            children: "Blog"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/drafts",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            "data-active": isActive("/drafts"),
                            className: "jsx-30e84451aa1192d1",
                            children: "Drafts"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-30e84451aa1192d1" + " " + "right",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/signup",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            "data-active": isActive("/signup"),
                            className: "jsx-30e84451aa1192d1",
                            children: "Signup"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/create",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            "data-active": isActive("/create"),
                            className: "jsx-30e84451aa1192d1",
                            children: "+ Create draft"
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "30e84451aa1192d1",
                children: 'nav.jsx-30e84451aa1192d1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:2rem;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.bold.jsx-30e84451aa1192d1{font-weight:bold}a.jsx-30e84451aa1192d1{text-decoration:none;color:#000;display:inline-block}.left.jsx-30e84451aa1192d1 a[data-active="true"].jsx-30e84451aa1192d1{color:gray}a.jsx-30e84451aa1192d1+a.jsx-30e84451aa1192d1{margin-left:1rem}.right.jsx-30e84451aa1192d1{margin-left:auto}.right.jsx-30e84451aa1192d1 a.jsx-30e84451aa1192d1{border:1px solid black;padding:.5rem 1rem;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}'
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout.tsx




const Layout = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-14f178979e0e20ba",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-14f178979e0e20ba" + " " + "layout",
                children: props.children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "517f8bdbfae33ea6",
                children: 'html{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*,*:before,*:after{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit}body{margin:0;padding:0;font-size:16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";background:rgba(0,0,0,.05)}input,textarea{font-size:16px}button{cursor:pointer}'
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "bc1ebda289d0929f",
                children: ".layout.jsx-14f178979e0e20ba{padding:0 2rem}"
            })
        ]
    });
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;