(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
  9889: function(e, t, r) {
      Promise.resolve().then(r.t.bind(r, 3262, 23)),
      Promise.resolve().then(r.bind(r, 7163)),
      Promise.resolve().then(r.bind(r, 2130))
  },
  2130: function(e, t, r) {
      "use strict";
      r.r(t),
      r.d(t, {
          default: function() {
              return u
          }
      });
      var n = r(4454)
        , s = r(1441)
        , l = r(6433)
        , a = r(999)
        , o = r(581);
      let c = s.forwardRef( (e, t) => {
          let {className: r, type: s, ...l} = e;
          return (0,
          n.jsx)("input", {
              type: s,
              className: (0,
              o.cn)("flex h-10 w-full bg-background pr-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50", r),
              ref: t,
              ...l
          })
      }
      );
      c.displayName = "Input";
      var i = r(6818)
        , u = e => {
          let {className: t} = e
            , r = (0,
          a.useRouter)()
            , u = (0,
          a.usePathname)()
            , d = (0,
          a.useSearchParams)()
            , f = (0,
          s.useRef)(null)
            , m = (0,
          s.useRef)(null)
            , [h,b] = (0,
          s.useState)(!1)
            , [x,g] = (0,
          s.useState)(d.get("q") || "")
            , [p,v] = (0,
          s.useState)([])
            , w = async e => {
              let t = e.target.value;
              if (g(t),
              b("" !== t.trim()),
              t.trim())
                  try {
                      let e = await i.Z.post("/api/suggest", {
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
          s.useEffect)( () => {
              let e = e => {
                  m.current && !m.current.contains(e.target) && b(!1)
              }
              ;
              return document.addEventListener("mousedown", e),
              () => document.removeEventListener("mousedown", e)
          }
          , []);
          let y = e => {
              g(e),
              v([]),
              r.push("/search.html?q=".concat(encodeURIComponent(e)))
          }
            , j = "/" === u
            , N = h && p.length > 0;
          return (0,
          n.jsxs)("div", {
              className: "relative w-full",
              children: [j && (0,
              n.jsx)("div", {
                  className: "absolute -inset-x-4 -inset-y-6 bg-gradient-to-r from-[#38E5FF80] to-[#38E5FF80] rounded-xl blur-2xl opacity-50"
              }), (0,
              n.jsx)("div", {
                  className: (0,
                  o.cn)("relative flex flex-col justify-center w-full items-center bg-[#121e22] \n          ".concat(N ? "rounded-t-[14px]" : "rounded-[14px]", "\n          p-1 md:w-[552px]"), j ? "border-2 border-[#38E5FF] ".concat(h && "border-b-0", " dark:bg-[#cbf8ffbd]") : "border border-[#27272A] dark:bg-[#d3e8eb]"),
                  children: (0,
                  n.jsx)("div", {
                      className: "flex flex-col justify-center items-center w-full",
                      ref: m,
                      children: (0,
                      n.jsxs)("form", {
                          onSubmit: e => {
                              var t;
                              e.preventDefault();
                              let n = (null === (t = f.current) || void 0 === t ? void 0 : t.value.trim()) || "";
                              n && (b(!1),
                              r.push("/search.html?q=".concat(encodeURIComponent(n))))
                          }
                          ,
                          className: "flex flex-col justify-center items-center w-full",
                          children: [(0,
                          n.jsxs)("div", {
                              className: "flex justify-center items-center w-full relative",
                              children: [(0,
                              n.jsx)(l.default, {
                                  width: 22,
                                  height: 22,
                                  src: "images/icons/search-normal.svg",
                                  alt: "Search Icon",
                                  className: "h-5 w-5 text-gray-500 mr-3 absolute left-3"
                              }), (0,
                              n.jsx)(c, {
                                  ref: f,
                                  value: x,
                                  onChange: w,
                                  type: "search",
                                  placeholder: "What are you looking for?",
                                  className: "text-white dark:text-black text-base mb-8 m-auto bg-transparent focus:outline-none focus:border-none border-none focus:ring-none hover:bg-transparent outline-none pl-10"
                              })]
                          }), N && (0,
                          n.jsx)("div", {
                              className: (0,
                              o.cn)("absolute bg-[#121e22] flex flex-col top-full rounded-b-lg md:w-[552px] w-full z-50 dark:bg-[#cbf8ffbd]", j ? "border-2 -left-[1px] -mt-1 right-1 border-[#38E5FF] border-t-0" : "border border-[#27272aee] -left-[1px] right-0 dark:bg-[#d3e8eb]"),
                              children: (0,
                              n.jsx)("div", {
                                  className: "flex gap-3 px-4 flex-col py-4",
                                  children: p.map( (e, t) => (0,
                                  n.jsxs)("div", {
                                      onClick: () => y(e),
                                      className: "pl-2 py-2 cursor-pointer hover:bg-[#FFFFFF] hover:bg-opacity-10 flex flex-row items-center justify-start rounded-lg",
                                      children: [(0,
                                      n.jsx)(l.default, {
                                          width: 15,
                                          height: 15,
                                          src: "images/icons/search-normal.svg",
                                          alt: "Search Icon",
                                          className: "h-3.5 w-3.5 text-gray-500 mr-3"
                                      }), (0,
                                      n.jsx)("p", {
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
  581: function(e, t, r) {
      "use strict";
      r.d(t, {
          cn: function() {
              return l
          }
      });
      var n = r(4703)
        , s = r(3246);
      function l() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
          return (0,
          s.m6)((0,
          n.W)(t))
      }
  },
  7163: function(e, t, r) {
      "use strict";
      r.r(t),
      t.default = {
          src: "/_next/static/media/logo.596fc16e.svg",
          height: 88,
          width: 88,
          blurWidth: 0,
          blurHeight: 0
      }
  }
}, function(e) {
  e.O(0, [408, 818, 427, 456, 744], function() {
      return e(e.s = 9889)
  }),
  _N_E = e.O()
}
]);
