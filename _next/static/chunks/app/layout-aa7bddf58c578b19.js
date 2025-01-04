(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
  4081: function(e, t, s) {
      Promise.resolve().then(s.bind(s, 6942)),
      Promise.resolve().then(s.bind(s, 4910)),
      Promise.resolve().then(s.t.bind(s, 6763, 23)),
      Promise.resolve().then(s.bind(s, 654)),
      Promise.resolve().then(s.bind(s, 2076)),
      Promise.resolve().then(s.bind(s, 6931))
  },
  654: function(e, t, s) {
      "use strict";
      s.r(t);
      var r = s(4454);
      s(1441);
      var a = s(8261)
        , l = s(7067);
      let n = new a.S;
      t.default = e => {
          let {children: t} = e;
          return (0,
          r.jsx)("div", {
              children: (0,
              r.jsx)(l.aH, {
                  client: n,
                  children: t
              })
          })
      }
  },
  2076: function(e, t, s) {
      "use strict";
      s.r(t);
      var r = s(4454);
      s(1441);
      var a = s(6433)
        , l = s(999)
        , n = s(6942)
        , i = s(7163)
        , c = s(2574);
      t.default = () => {
          let e = (0,
          l.usePathname)()
            , {theme: t} = (0,
          n.useTheme)();
          return (0,
          r.jsx)("footer", {
              className: "w-full px-9  fixed bottom-0 bg-opacity-70 ".concat("/" !== e && "backdrop-blur-xl bg-[#00111A] dark:bg-[#E5FCFF] max-sm:hidden "),
              children: (0,
              r.jsxs)("div", {
                  className: "flex justify-center sm:justify-between items-center gap-4 border-t border-[#27272A] ".concat("/" !== e ? "py-3" : "py-6", " flex-wrap w-full  "),
                  children: [(0,
                  r.jsxs)("div", {
                      className: " flex",
                      children: [(0,
                      r.jsx)(c.default, {
                          href: "https://x.com/",
                          rel: "noopener noreferrer",
                          children: (0,
                          r.jsx)(a.default, {
                              src: "images/icons/twitter-x.svg",
                              width: 20,
                              height: 20,
                              alt: "twitter",
                              className: "twitterIcon mr-4 w-5 h-5",
                              style: {
                                  filter: "dark" === t ? "brightness(0)" : "brightness(0) invert(1)"
                              }
                          })
                      }), (0,
                      r.jsx)("p", {
                          className: "mx-4 text-sm text-[#FFFFFF33] dark:text-black",
                          children: "|"
                      }), (0,
                      r.jsx)(c.default, {
                          href: "https://t.me/",
                          rel: "noopener noreferrer",
                          children: (0,
                          r.jsx)(a.default, {
                              width: 20,
                              height: 20,
                              src: "images/icons/telegram-out.svg",
                              alt: "telegram",
                              className: "telegramIcon mr-2 w-5 h-5",
                              style: {
                                  filter: "dark" === t ? "brightness(0)" : "brightness(0) invert(1)"
                              }
                          })
                      })]
                  })]
              })
          })
      }
  },
  6931: function(e, t, s) {
      "use strict";
      s.r(t),
      s.d(t, {
          default: function() {
              return u
          }
      });
      var r = s(4454)
        , a = s(1441)
        , l = s(6433)
        , n = s(2130)
        , i = s(999)
        , c = s(6942);
      function o() {
          let {theme: e, setTheme: t} = (0,
          c.useTheme)()
            , [s,n] = (0,
          a.useState)(!1);
          return (0,
          a.useEffect)( () => {
              n(!0)
          }
          , []),
          (0,
          r.jsx)(r.Fragment, {
              children: (0,
              r.jsx)("div", {
                  className: "flex items-center dark:text-white",
                  children: s && (0,
                  r.jsx)("button", {
                      className: "cursor-pointer",
                      onClick: () => "dark" === e ? t("light") : t("dark"),
                      children: (0,
                      r.jsxs)("div", {
                          className: "relative flex items-center border-gray-500 border-2 rounded-full",
                          children: [(0,
                          r.jsxs)("div", {
                              className: "w-16 h-7 bg-transparent rounded-full z-20 flex flex-row justify-between px-1.5 items-center",
                              children: [(0,
                              r.jsx)(l.default, {
                                  src: "images/icons/moon.svg",
                                  width: 16,
                                  height: 16,
                                  alt: "moon",
                                  className: "w-4 h-4",
                                  style: {
                                      filter: "light" === e ? "brightness(0)" : "invert(14%) sepia(7%) saturate(194%) hue-rotate(180deg) brightness(95%) contrast(88%)"
                                  }
                              }), (0,
                              r.jsx)(l.default, {
                                  src: "images/icons/sun.svg",
                                  width: 16,
                                  height: 16,
                                  alt: "sun",
                                  className: "w-4 h-4",
                                  style: {
                                      filter: "light" === e ? "invert(14%) sepia(7%) saturate(194%) hue-rotate(180deg) brightness(95%) contrast(88%)" : "brightness(0)"
                                  }
                              })]
                          }), (0,
                          r.jsx)("div", {
                              className: "z-10 flex justify-center items-center ease-in-out w-7 h-7 absolute rounded-full right-0 transform bg-white  ".concat("light" === e ? "-translate-x-9" : "translate-x-0")
                          })]
                      })
                  })
              })
          })
      }
      let d = [{
          title: "All",
          value: "search",
          src: "images/icons/search-blue.svg"
      }, {
          title: "Images",
          value: "image",
          src: "images/icons/image.svg"
      }, {
          title: "Videos",
          value: "videos",
          src: "images/icons/video.svg"
      }, {
          title: "News",
          value: "news",
          src: "images/icons/news.svg"
      }];
      var m = s(2574)
        , u = () => {
          let e = (0,
          i.usePathname)()
            , t = (0,
          i.useSearchParams)().get("q")
            , [s,c] = (0,
          a.useState)(!1);
          return (0,
          r.jsx)("div", {
              className: "fixed px-5 w-full z-40 ".concat("/" !== e && "backdrop-blur-xl bg-[#00111A] dark:bg-[#E5FCFF]"),
              children: (0,
              r.jsx)("div", {
                  className: "flex w-full md:px-4 pt-6 items-center",
                  children: (0,
                  r.jsx)("div", {
                      className: "w-full items-center path ".concat("/" !== e && "/terms-conditions" !== e && "border-b border-[#27272A]"),
                      children: "/" !== e && "/terms-conditions" !== e ? (0,
                      r.jsxs)(r.Fragment, {
                          children: [(0,
                          r.jsxs)("div", {
                              className: "flex items-center gap-7 justify-between",
                              children: [(0,
                              r.jsx)(m.default, {
                                  href: "/",
                                  rel: "noopener noreferrer",
                                  children: (0,
                                  r.jsx)(l.default, {
                                      width: 30,
                                      height: 30,
                                      src: "/logo.svg",
                                      alt: "Zksearch-Logo",
                                      className: "w-12 aspect-square",
                                      priority: !0
                                  })
                              }), (0,
                              r.jsx)("div", {
                                  className: "hidden sm:block",
                                  children: (0,
                                  r.jsx)(n.default, {})
                              }), (0,
                              r.jsx)("div", {
                                  className: "ml-auto ".concat("/" !== e && "/terms-conditions" !== e && "mt-3.5", " cursor-pointer bg-opacity-90"),
                                  children: (0,
                                  r.jsx)(o, {})
                              })]
                          }), (0,
                          r.jsx)("div", {
                              className: "sm:hidden block mt-4",
                              children: (0,
                              r.jsx)(n.default, {})
                          }), (0,
                          r.jsx)("div", {
                              className: "flex flex-col mt-5 sm:pl-20",
                              onClick: () => {
                                  c(!s)
                              }
                              ,
                              children: (0,
                              r.jsx)("div", {
                                  className: "flex flex-row gap-7 sm:justify-start justify-between",
                                  children: d.map( (s, a) => (0,
                                  r.jsxs)(m.default, {
                                      href: "/".concat(null == s ? void 0 : s.value, ".html/?q=").concat(t),
                                      className: "".concat(e.split("/")[1] === (null == s ? void 0 : s.value) ? "border-b-2 border-[#38E5FF] text-[#38E5FF] dark:text-[#38E5FF]" : "border-b-2 border-transparent text-white dark:text-black", " sm:text-lg gap-2 flex flex-row items-center pb-3"),
                                      children: [(0,
                                      r.jsx)(l.default, {
                                          src: s.src,
                                          width: 20,
                                          height: 20,
                                          className: "h-full w-full z-[-1] ".concat(e.split("/")[1] === s.value ? "none" : "brightness-0 invert dark:brightness-0 dark:invert-0", " w-5 h-5"),
                                          alt: "image",
                                          priority: !0
                                      }), (0,
                                      r.jsx)("span", {
                                          className: "text-base flex font-medium",
                                          children: s.title
                                      })]
                                  }, a))
                              })
                          })]
                      }) : (0,
                      r.jsxs)("div", {
                          className: "flex justify-end ".concat("/" === e && "mt-3.5", " cursor-pointer bg-opacity-90 ").concat("/terms-conditions" === e && "justify-between pb-3 border-b border-[#27272A]"),
                          children: ["/terms-conditions" === e && (0,
                          r.jsx)(m.default, {
                              href: "/",
                              rel: "noopener noreferrer",
                              children: (0,
                              r.jsx)(l.default, {
                                  width: 30,
                                  height: 30,
                                  src: "/logo.svg",
                                  alt: "Zksearch-Logo",
                                  className: "w-12 aspect-square",
                                  priority: !0
                              })
                          }), (0,
                          r.jsx)(o, {})]
                      })
                  })
              })
          })
      }
  },
  2130: function(e, t, s) {
      "use strict";
      s.r(t),
      s.d(t, {
          default: function() {
              return d
          }
      });
      var r = s(4454)
        , a = s(1441)
        , l = s(6433)
        , n = s(999)
        , i = s(581);
      let c = a.forwardRef( (e, t) => {
          let {className: s, type: a, ...l} = e;
          return (0,
          r.jsx)("input", {
              type: a,
              className: (0,
              i.cn)("flex h-10 w-full bg-background pr-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50", s),
              ref: t,
              ...l
          })
      }
      );
      c.displayName = "Input";
      var o = s(6818)
        , d = e => {
          let {className: t} = e
            , s = (0,
          n.useRouter)()
            , d = (0,
          n.usePathname)()
            , m = (0,
          n.useSearchParams)()
            , u = (0,
          a.useRef)(null)
            , h = (0,
          a.useRef)(null)
            , [f,x] = (0,
          a.useState)(!1)
            , [g,b] = (0,
          a.useState)(m.get("q") || "")
            , [p,v] = (0,
          a.useState)([])
            , w = async e => {
              let t = e.target.value;
              if (b(t),
              x("" !== t.trim()),
              t.trim())
                  try {
                      let e = await o.Z.post("/api/suggest", {
                          query: t
                      });
                      v(e.data.data.slice(0, 4))
                  } catch (e) {
                      console.error("Error fetching suggestions:", e)
                  }
              else
                  v([])
          }
          ;
          (0,
          a.useEffect)( () => {
              let e = e => {
                  h.current && !h.current.contains(e.target) && x(!1)
              }
              ;
              return document.addEventListener("mousedown", e),
              () => document.removeEventListener("mousedown", e)
          }
          , []);
          let j = e => {
              b(e),
              v([]),
              s.push("/search.html?q=".concat(encodeURIComponent(e)))
          }
            , N = "/" === d
            , y = f && p.length > 0;
          return (0,
          r.jsxs)("div", {
              className: "relative w-full",
              children: [N && (0,
              r.jsx)("div", {
                  className: "absolute -inset-x-4 -inset-y-6 bg-gradient-to-r from-[#38E5FF80] to-[#38E5FF80] rounded-xl blur-2xl opacity-50"
              }), (0,
              r.jsx)("div", {
                  className: (0,
                  i.cn)("relative flex flex-col justify-center w-full items-center bg-[#121e22] \n          ".concat(y ? "rounded-t-[14px]" : "rounded-[14px]", "\n          p-1 md:w-[552px]"), N ? "border-2 border-[#38E5FF] ".concat(f && "border-b-0", " dark:bg-[#cbf8ffbd]") : "border border-[#27272A] dark:bg-[#d3e8eb]"),
                  children: (0,
                  r.jsx)("div", {
                      className: "flex flex-col justify-center items-center w-full",
                      ref: h,
                      children: (0,
                      r.jsxs)("form", {
                          onSubmit: e => {
                              var t;
                              e.preventDefault();
                              let r = (null === (t = u.current) || void 0 === t ? void 0 : t.value.trim()) || "";
                              r && (x(!1),
                              s.push("/search.html?q=".concat(encodeURIComponent(r))))
                          }
                          ,
                          className: "flex flex-col justify-center items-center w-full",
                          children: [(0,
                          r.jsxs)("div", {
                              className: "flex justify-center items-center w-full relative",
                              children: [(0,
                              r.jsx)(l.default, {
                                  width: 22,
                                  height: 22,
                                  src: "images/icons/search-normal.svg",
                                  alt: "Search Icon",
                                  className: "h-5 w-5 text-gray-500 mr-3 absolute left-3"
                              }), (0,
                              r.jsx)(c, {
                                  ref: u,
                                  value: g,
                                  onChange: w,
                                  type: "search",
                                  placeholder: "What are you looking for?",
                                  className: "text-white dark:text-black text-base mb-8 m-auto bg-transparent focus:outline-none focus:border-none border-none focus:ring-none hover:bg-transparent outline-none pl-10"
                              })]
                          }), y && (0,
                          r.jsx)("div", {
                              className: (0,
                              i.cn)("absolute bg-[#121e22] flex flex-col top-full rounded-b-lg md:w-[552px] w-full z-50 dark:bg-[#cbf8ffbd]", N ? "border-2 -left-[1px] -mt-1 right-1 border-[#38E5FF] border-t-0" : "border border-[#27272aee] -left-[1px] right-0 dark:bg-[#d3e8eb]"),
                              children: (0,
                              r.jsx)("div", {
                                  className: "flex gap-3 px-4 flex-col py-4",
                                  children: p.map( (e, t) => (0,
                                  r.jsxs)("div", {
                                      onClick: () => j(e),
                                      className: "pl-2 py-2 cursor-pointer hover:bg-[#FFFFFF] hover:bg-opacity-10 flex flex-row items-center justify-start rounded-lg",
                                      children: [(0,
                                      r.jsx)(l.default, {
                                          width: 15,
                                          height: 15,
                                          src: "images/icons/search-normal.svg",
                                          alt: "Search Icon",
                                          className: "h-3.5 w-3.5 text-gray-500 mr-3"
                                      }), (0,
                                      r.jsx)("p", {
                                          className: "text-white dark:text-black text-sm font-medium",
                                          children: e
                                      })]
                                  }, t))
                              })
                          })]
                      })
                  })
              })]
          })
      }
  },
  581: function(e, t, s) {
      "use strict";
      s.d(t, {
          cn: function() {
              return l
          }
      });
      var r = s(4703)
        , a = s(3246);
      function l() {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
          return (0,
          a.m6)((0,
          r.W)(t))
      }
  },
  6763: function() {},
  7163: function(e, t, s) {
      "use strict";
      s.r(t),
      t.default = {
          src: "/_next/static/media/logo.596fc16e.svg",
          height: 88,
          width: 88,
          blurWidth: 0,
          blurHeight: 0
      }
  }
}, function(e) {
  e.O(0, [408, 478, 818, 791, 427, 456, 744], function() {
      return e(e.s = 4081)
  }),
  _N_E = e.O()
}
]);
