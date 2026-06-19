(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5580: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 191));
    },
    191: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return $;
          },
        });
      var a = r(7437),
        s = r(2265),
        n = r(2549),
        l = r(8004),
        o = r(7042),
        i = r(4769);
      function c() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, i.m6)((0, o.W)(t));
      }
      var d = r(8409),
        u = r(6691),
        x = r.n(u),
        f = {
          src: "/_next/static/media/logo.1d803cf4.png",
          height: 660,
          width: 684,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEVMaXHvtFT4xX0wesFedYamusertsCaq7kvQEtZfpldgp19l6xFSF5TeJROdZA1PFqSoLZXc4jfyryskmPyv3pigqP/wWTGxMuRjXaciFuvsbGNjX7GsZPewpRsgZS1wM+bscbM1eHTycnz39bPpmRzKvWCAAAAHnRSTlMA/Zw5QS7+/RBszPvomcV35f72/mQnR/v7+4ONnZvW8PY7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nBXKRRaAIABAwQ9I2d2Cdf8z+pz1gDyUkiOw22U2PbC9QnQJsD7T3WpgsPGqK0CHxobcgT9NzP7jijL18AFwIAMMfGEN1QAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        };
      function m() {
        let [e, t] = (0, s.useState)(!1),
          [r, o] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          let e = () => {
            t(window.scrollY > 50);
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []);
        let i = (e) => {
            let t = document.getElementById(e);
            t && t.scrollIntoView({ behavior: "smooth" }), o(!1);
          },
          u = (e) => ("How to Buy" === e ? "howtobuy" : e.toLowerCase());
        return (0, a.jsxs)("nav", {
          className: c(
            "fixed top-0 z-50 w-full transition-all duration-500",
            e
              ? "bg-[#fff7e8]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(109,74,21,0.14)]"
              : "bg-transparent"
          ),
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute inset-0 pointer-events-none bg-gradient-to-r from-[#ebc28f]/18 via-transparent to-[#d49069]/12",
            }),
            (0, a.jsxs)("div", {
              className:
                "container relative z-10 mx-auto flex h-20 items-center justify-between px-4 md:px-6",
              children: [
                (0, a.jsxs)("div", {
                  className: "group flex cursor-pointer items-center gap-3",
                  onClick: () => i("home"),
                  children: [
                    (0, a.jsxs)("div", {
                      className: "relative floaty",
                      children: [
                        (0, a.jsx)(x(), {
                          src: f,
                          alt: "Asteroid Snail",
                          width: 48,
                          height: 48,
                          className:
                            "rounded-full border-2 border-[#ad6f2e]/40 bg-[#fff4dc] shadow-[0_6px_0_rgba(130,86,24,0.25)] transition-all duration-300 group-hover:-translate-y-1",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "absolute -inset-1 -z-10 rounded-full bg-[#d9a26d]/28 blur-md",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "font-xcompany text-2xl font-bold text-[#473422]",
                          children: "$ASTERGARY",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "text-[10px] font-semibold tracking-[0.22em] text-[#8f6b43]",
                          children: "ASTEROID SNAIL",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "hidden items-center gap-2 rounded-full border-2 border-[#b67f37]/35 bg-[#fff6e8]/85 p-1.5 shadow-[0_6px_0_rgba(130,86,24,0.2)] md:flex",
                  children: [
                    "Home",
                    "About",
                    "Roadmap",
                    "Tokenomics",
                    "How to Buy",
                    "Game",
                  ].map((e) =>
                    (0, a.jsx)(
                      "button",
                      {
                        onClick: () => i(u(e)),
                        className:
                          "punchy-btn relative overflow-hidden rounded-full bg-gradient-to-b from-[#fffdf5] to-[#ffe7b4] px-5 py-2.5 text-sm font-semibold text-[#5a3f22]",
                        children: (0, a.jsx)("span", {
                          className: "relative z-10",
                          children: e,
                        }),
                      },
                      e
                    )
                  ),
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "hidden items-center gap-2 sm:flex",
                      children: [
                        (0, a.jsx)("a", {
                          href: "https://x.com/astergaryoneth",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": "X",
                          className:
                            "punchy-btn flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4] text-[#111111]",
                          children: (0, a.jsx)(d.LCd, { className: "h-4 w-4" }),
                        }),
                        (0, a.jsx)("a", {
                          href: "https://t.me/astergaryoneth",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": "Telegram",
                          className:
                            "punchy-btn flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4] text-[#229ed9]",
                          children: (0, a.jsx)(d.Ww5, { className: "h-4 w-4" }),
                        }),
                        (0, a.jsx)("a", {
                          href: "https://dexscreener.com/ethereum/0xee7e46d9686e0f56edb5b6427ed9b250e0da5392",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": "DexScreener",
                          className:
                            "punchy-btn hidden h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4] lg:flex",
                          children: (0, a.jsx)(x(), {
                            src: "/images/dexscreener.jpg",
                            alt: "DexScreener",
                            width: 20,
                            height: 20,
                            className: "h-5 w-5 rounded-sm object-cover",
                          }),
                        }),
                        (0, a.jsx)("a", {
                          href: "https://www.dextools.io/app/en/ether/pair-explorer/0xee7e46d9686e0f56edb5b6427ed9b250e0da5392",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": "DexTools",
                          className:
                            "punchy-btn hidden h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4] lg:flex",
                          children: (0, a.jsx)(x(), {
                            src: "/images/dextools.png",
                            alt: "DexTools",
                            width: 20,
                            height: 20,
                            className: "h-5 w-5 object-contain",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      className:
                        "punchy-btn flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-[#fffdf5] to-[#ffd98c] text-[#5f4122] md:hidden",
                      onClick: () => o(!r),
                      children: r
                        ? (0, a.jsx)(n.Z, { className: "w-5 h-5" })
                        : (0, a.jsx)(l.Z, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: c(
                "absolute left-0 right-0 top-full border-b-2 border-[#b67f37]/30 bg-[#fff6e8]/95 shadow-[0_12px_24px_rgba(109,74,21,0.15)] backdrop-blur-xl transition-all duration-300 md:hidden",
                r
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              ),
              children: (0, a.jsx)("div", {
                className: "container mx-auto px-4 py-6",
                children: (0, a.jsxs)("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    [
                      "Home",
                      "About",
                      "Tokenomics",
                      "How to Buy",
                      "Roadmap",
                      "Game",
                    ].map((e) =>
                      (0, a.jsx)(
                        "button",
                        {
                          onClick: () => i(u(e)),
                          className:
                            "punchy-btn rounded-full bg-gradient-to-b from-[#fffdf5] to-[#ffe2aa] px-4 py-3 text-left text-sm font-semibold text-[#5f4122]",
                          children: (0, a.jsx)("span", { children: e }),
                        },
                        e
                      )
                    ),
                    (0, a.jsxs)("div", {
                      className:
                        "mt-3 flex flex-wrap items-center gap-3 border-t-2 border-[#b67f37]/20 pt-4",
                      children: [
                        (0, a.jsx)("a", {
                          href: "https://x.com/astergaryoneth",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": "X",
                          className:
                            "punchy-btn flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4] text-[#111111]",
                          children: (0, a.jsx)(d.LCd, { className: "w-5 h-5" }),
                        }),
                        (0, a.jsx)("a", {
                          href: "https://t.me/astergaryoneth",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": "Telegram",
                          className:
                            "punchy-btn flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4] text-[#229ed9]",
                          children: (0, a.jsx)(d.Ww5, { className: "w-5 h-5" }),
                        }),
                        (0, a.jsx)("a", {
                          href: "https://dexscreener.com/ethereum/0xee7e46d9686e0f56edb5b6427ed9b250e0da5392",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": "DexScreener",
                          className:
                            "punchy-btn flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4]",
                          children: (0, a.jsx)(x(), {
                            src: "/images/dexscreener.jpg",
                            alt: "DexScreener",
                            width: 20,
                            height: 20,
                            className: "h-5 w-5 rounded-sm object-cover",
                          }),
                        }),
                        (0, a.jsx)("a", {
                          href: "https://www.dextools.io/app/en/ether/pair-explorer/0xee7e46d9686e0f56edb5b6427ed9b250e0da5392",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": "DexTools",
                          className:
                            "punchy-btn flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4]",
                          children: (0, a.jsx)(x(), {
                            src: "/images/dextools.png",
                            alt: "DexTools",
                            width: 20,
                            height: 20,
                            className: "h-5 w-5 object-contain",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function h() {
        return (0, a.jsxs)("footer", {
          className:
            "relative mt-16 overflow-hidden border-t-2 border-[#bc8743]/28 bg-[#fff2d8]/80 backdrop-blur-sm",
          children: [
            (0, a.jsxs)("div", {
              className: "absolute inset-0 z-0",
              children: [
                (0, a.jsx)(x(), {
                  src: "/images/footer.png",
                  alt: "Footer background",
                  fill: !0,
                  className: "object-cover opacity-12",
                  priority: !1,
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-[#fff8ea]/80 to-[#ffe8c2]/90",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "container relative z-10 mx-auto px-4 py-12",
              children: [
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 gap-8 md:grid-cols-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)(x(), {
                              src: f,
                              alt: "Asteroid Snail",
                              width: 40,
                              height: 40,
                              className:
                                "rounded-full border-2 border-[#ad6f2e]/40 bg-[#fff5df]",
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "font-xcompany text-2xl font-bold text-[#473422]",
                              children: "$ASTERGARY",
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: "text-sm leading-relaxed text-[#6e5638]",
                          children:
                            "Born in zero gravity, Asteroid Snail is a tiny cosmic snail drifting through the void—a soft, glowing symbol of chaos, community, and cosmic luck.",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "font-xcompany mb-4 font-semibold text-[#5c4123]",
                          children: "Navigation",
                        }),
                        (0, a.jsx)("ul", {
                          className: "space-y-2",
                          children: [
                            "Home",
                            "About",
                            "Roadmap",
                            "Tokenomics",
                            "How to Buy",
                            "Game",
                          ].map((e) =>
                            (0, a.jsx)(
                              "li",
                              {
                                children: (0, a.jsx)("a", {
                                  href: "#".concat(
                                    "How to Buy" === e
                                      ? "howtobuy"
                                      : e.toLowerCase()
                                  ),
                                  className:
                                    "text-sm font-semibold text-[#7f633f] transition-colors hover:text-[#ea7f3a]",
                                  children: e,
                                }),
                              },
                              e
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "font-xcompany mb-4 font-semibold text-[#5c4123]",
                          children: "Links",
                        }),
                        (0, a.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "https://dexscreener.com/ethereum/0xee7e46d9686e0f56edb5b6427ed9b250e0da5392",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "text-sm font-semibold text-[#7f633f] transition-colors hover:text-[#ea7f3a]",
                                children: "DexScreener",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "https://app.uniswap.org/#/swap?outputCurrency=0xee7e46d9686e0f56edb5b6427ed9b250e0da5392",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "text-sm font-semibold text-[#7f633f] transition-colors hover:text-[#ea7f3a]",
                                children: "Buy on Uniswap",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "font-xcompany mb-4 font-semibold text-[#5c4123]",
                          children: "Social",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-wrap gap-4",
                          children: [
                            (0, a.jsx)("a", {
                              href: "https://x.com/astergaryoneth",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "punchy-btn flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4] text-[#111111]",
                              "aria-label": "X (Twitter)",
                              children: (0, a.jsx)(d.LCd, {
                                className: "w-5 h-5",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://t.me/astergaryoneth",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "punchy-btn flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4] text-[#229ed9]",
                              "aria-label": "Telegram",
                              children: (0, a.jsx)(d.Ww5, {
                                className: "w-5 h-5",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://dexscreener.com/ethereum/0xee7e46d9686e0f56edb5b6427ed9b250e0da5392",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "punchy-btn flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4]",
                              "aria-label": "DexScreener",
                              children: (0, a.jsx)(x(), {
                                src: "/images/dexscreener.jpg",
                                alt: "DexScreener",
                                width: 20,
                                height: 20,
                                className: "h-5 w-5 rounded-sm object-cover",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://www.dextools.io/app/en/ether/pair-explorer/0xee7e46d9686e0f56edb5b6427ed9b250e0da5392",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "punchy-btn flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf4]",
                              "aria-label": "DexTools",
                              children: (0, a.jsx)(x(), {
                                src: "/images/dextools.png",
                                alt: "DexTools",
                                width: 20,
                                height: 20,
                                className: "h-5 w-5 object-contain",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "mt-12 border-t-2 border-[#bc8743]/25 pt-8 text-center",
                  children: (0, a.jsxs)("p", {
                    className: "text-sm text-[#7f633f]",
                    children: [
                      "\xa9 ",
                      new Date().getFullYear(),
                      " Asteroid Snail. All rights reserved.",
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function p(e) {
        let { children: t } = e;
        return (0, a.jsxs)("div", {
          className:
            "cartoon-bg relative flex min-h-screen flex-col overflow-hidden text-[var(--ink)]",
          children: [
            (0, a.jsx)("div", {
              className: "absolute inset-0 -z-10 cartoon-grid opacity-70",
            }),
            (0, a.jsx)("div", {
              className:
                "soft-blob left-[-5%] top-[8%] h-64 w-64 bg-[#efc28c]/28",
            }),
            (0, a.jsx)("div", {
              className:
                "soft-blob right-[-4%] top-[16%] h-72 w-72 bg-[#dca177]/22",
              style: { animationDelay: "-2.4s" },
            }),
            (0, a.jsx)("div", {
              className:
                "soft-blob bottom-[12%] left-[4%] h-52 w-52 bg-[#d8895e]/18",
              style: { animationDelay: "-3.8s" },
            }),
            (0, a.jsx)("div", {
              className:
                "soft-blob bottom-[6%] right-[8%] h-60 w-60 bg-[#c47d54]/18",
              style: { animationDelay: "-1.2s" },
            }),
            (0, a.jsx)(m, {}),
            (0, a.jsx)("div", { className: "relative z-10", children: t }),
            (0, a.jsx)(h, {}),
          ],
        });
      }
      var b = r(2442),
        g = r(6224);
      let v = "0xee7e46d9686e0f56edb5b6427ed9b250e0da5392";
      function w() {
        let e = (0, s.useRef)(null),
          [t, r] = (0, s.useState)(0),
          [n, l] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let t = () => {
              if (!e.current) return;
              let t = e.current.getBoundingClientRect(),
                a = Math.max(e.current.offsetHeight, 1),
                s = (window.innerHeight - t.top) / (window.innerHeight + a),
                n = Math.max(0, Math.min(1, s));
              r(n);
            };
            return (
              window.addEventListener("scroll", t, { passive: !0 }),
              t(),
              () => window.removeEventListener("scroll", t)
            );
          }, []),
          (0, a.jsx)("section", {
            ref: e,
            className:
              "relative isolate overflow-hidden px-4 pb-20 pt-28 md:pt-36",
            id: "home",
            children: (0, a.jsx)("div", {
              className: "container relative z-10 mx-auto max-w-6xl",
              children: (0, a.jsxs)("div", {
                className:
                  "bubble-card relative overflow-hidden px-6 pb-10 pt-10 md:px-10 md:pb-14 md:pt-12",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute -right-12 top-4 h-40 w-40 rounded-full bg-[#e5b27d]/16 blur-2xl",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "absolute -left-8 bottom-2 h-36 w-36 rounded-full bg-[#d98b62]/12 blur-2xl",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-[#e6c8aa]/24",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "space-y-7",
                        style: {
                          transform: "translateY(".concat((1 - t) * 18, "px)"),
                        },
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "inline-flex items-center rounded-full border-2 border-[#c98d3b]/45 bg-[#fff7df] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#8f6132]",
                            children: "Tiny Snail, Big Orbit",
                          }),
                          (0, a.jsxs)("h1", {
                            className:
                              "font-xcompany text-5xl leading-[0.92] text-[#3d2f1d] md:text-7xl lg:text-8xl",
                            children: [
                              "Asteroid Snail",
                              (0, a.jsx)("br", {}),
                              (0, a.jsx)("span", {
                                className:
                                  "bg-gradient-to-r from-[#a95f3b] via-[#c67c4b] to-[#e1ae74] bg-clip-text text-transparent",
                                children: "ASTERGARY",
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "max-w-xl text-lg leading-relaxed text-[#6f5739] md:text-xl",
                            children:
                              "A tiny cosmic snail floating through space...",
                          }),
                          (0, a.jsxs)("button", {
                            type: "button",
                            onClick: () => {
                              navigator.clipboard.writeText(v),
                                l(!0),
                                window.setTimeout(() => l(!1), 2e3);
                            },
                            className:
                              "bubble-card flex w-full max-w-xl items-start justify-between gap-4 px-5 py-4 text-left transition-transform duration-300 hover:-translate-y-1 sm:items-center",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8f6132]",
                                    children: "Contract Address",
                                  }),
                                  (0, a.jsx)("code", {
                                    className:
                                      "block break-all font-mono text-xs leading-relaxed text-[#5e4630] md:text-base",
                                    children: v,
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ".concat(
                                    n
                                      ? "border-2 border-[#5ab778]/30 bg-[#dff6e7] text-[#3e8e59]"
                                      : "border-2 border-[#cfa27c]/40 bg-[#fff1e2] text-[#8a6443]"
                                  ),
                                children: n
                                  ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)(b.Z, {
                                          className: "h-4 w-4",
                                        }),
                                        "Copied",
                                      ],
                                    })
                                  : (0, a.jsx)(a.Fragment, {
                                      children: (0, a.jsx)(g.Z, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-wrap items-center gap-3 md:gap-4",
                            children: [
                              (0, a.jsx)("a", {
                                href: "https://x.com/astergaryoneth",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "X",
                                className:
                                  "punchy-btn inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#fffaf4] text-[#111111]",
                                children: (0, a.jsx)(d.LCd, {
                                  className: "h-6 w-6",
                                }),
                              }),
                              (0, a.jsx)("a", {
                                href: "https://t.me/astergaryoneth",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "Telegram",
                                className:
                                  "punchy-btn inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#fffaf4] text-[#229ed9]",
                                children: (0, a.jsx)(d.Ww5, {
                                  className: "h-6 w-6",
                                }),
                              }),
                              (0, a.jsx)("a", {
                                href: "https://dexscreener.com/ethereum/0xee7e46d9686e0f56edb5b6427ed9b250e0da5392",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "DexScreener",
                                className:
                                  "punchy-btn inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#fffaf4]",
                                children: (0, a.jsx)(x(), {
                                  src: "/images/dexscreener.jpg",
                                  alt: "DexScreener",
                                  width: 28,
                                  height: 28,
                                  className: "h-7 w-7 rounded-md object-cover",
                                }),
                              }),
                              (0, a.jsx)("a", {
                                href: "https://www.dextools.io/app/en/ether/pair-explorer/0xee7e46d9686e0f56edb5b6427ed9b250e0da5392",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "DexTools",
                                className:
                                  "punchy-btn inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#fffaf4]",
                                children: (0, a.jsx)(x(), {
                                  src: "/images/dextools.png",
                                  alt: "DexTools",
                                  width: 28,
                                  height: 28,
                                  className: "h-7 w-7 object-contain",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "relative mx-auto w-full max-w-md md:max-w-none",
                        children: (0, a.jsxs)("div", {
                          className:
                            "floaty relative mx-auto w-[84%] md:w-[92%]",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "absolute -inset-5 rounded-[40px] bg-[#deb089]/24 blur-xl",
                            }),
                            (0, a.jsx)(x(), {
                              src: "/images/logo.png",
                              alt: "Asteroid Snail",
                              width: 560,
                              height: 560,
                              className:
                                "relative z-10 w-full rounded-[38px] border-[3px] border-[#b67f37]/45 bg-[#fff6e8] p-3 shadow-[0_10px_0_rgba(130,86,24,0.22)]",
                              style: {
                                transform: "translateY(".concat(-14 * t, "px)"),
                              },
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      function y() {
        return (0, a.jsxs)("section", {
          className: "relative overflow-hidden px-4 py-24",
          id: "about",
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute left-[-5%] top-[15%] h-56 w-56 rounded-full bg-[#e7bb8b]/18 blur-3xl",
            }),
            (0, a.jsx)("div", {
              className:
                "absolute bottom-[10%] right-[-4%] h-72 w-72 rounded-full bg-[#d98d64]/14 blur-3xl",
            }),
            (0, a.jsxs)("div", {
              className: "container relative z-10 mx-auto",
              children: [
                (0, a.jsxs)("div", {
                  className: "scroll-reveal mb-16 text-center",
                  children: [
                    (0, a.jsx)("span", {
                      className:
                        "inline-block rounded-full border-2 border-[#c48a3b]/40 bg-[#fff6df] px-4 py-1.5 text-sm font-bold uppercase tracking-[0.18em] text-[#8d6537]",
                      children: "Our Story",
                    }),
                    (0, a.jsx)("h2", {
                      className:
                        "font-xcompany mt-6 text-4xl font-bold text-[#3f301f] md:text-5xl lg:text-6xl",
                      children: "About Asteroid Snail",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "mx-auto mt-5 h-2 w-24 rounded-full bg-gradient-to-r from-[#a95f3b] via-[#c47b4c] to-[#e4b27d]",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14",
                  children: [
                    (0, a.jsx)("div", {
                      className: "scroll-reveal relative order-2 lg:order-1",
                      children: (0, a.jsxs)("div", {
                        className: "relative mx-auto w-full max-w-lg",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "absolute -inset-6 rounded-[36px] bg-[#e4b17f]/16 blur-xl",
                          }),
                          (0, a.jsx)(x(), {
                            src: "/images/about.png",
                            alt: "Asteroid Snail",
                            width: 640,
                            height: 640,
                            className:
                              "relative z-10 h-auto w-full rounded-[36px] border-[3px] border-[#b67f37]/42 bg-[#fff7e8] p-2 shadow-[0_10px_0_rgba(130,86,24,0.22)]",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "absolute inset-0 z-20 rounded-[36px] bg-gradient-to-tr from-[#ffc44d]/10 via-transparent to-transparent",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "scroll-reveal bubble-card order-1 space-y-8 p-7 md:p-9 lg:order-2",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "space-y-6",
                          children: [
                            (0, a.jsx)("h3", {
                              className:
                                "font-xcompany text-2xl font-bold text-[#3f301f] md:text-3xl",
                              children:
                                "A Cosmic Snail Drifting Through the Void",
                            }),
                            (0, a.jsxs)("p", {
                              className:
                                "text-base leading-relaxed text-[#6f5739] md:text-lg",
                              children: [
                                "Born in zero gravity,",
                                " ",
                                (0, a.jsx)("span", {
                                  className: "font-semibold text-[#ea7f3a]",
                                  children: "Asteroid Snail",
                                }),
                                " ",
                                " is Elon’s legendary pet snail, launched into the cosmos and forever drifting through the void—riding asteroids, leaving trails of stardust and memes in his slow but unstoppable wake.",
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-base leading-relaxed text-[#6f5739] md:text-lg",
                              children:
                                "Inspired by Elon’s love for Gary the snail and the SpaceX spirit of exploration, this tiny astronaut blends adorable innocence with pure degen energy. No roadmap, no rush—just a baby snail floating through the galaxy at his own pace, rewarding everyone who joins his orbit.",
                            }),
                            (0, a.jsxs)("p", {
                              className:
                                "text-base leading-relaxed text-[#6f5739] md:text-lg",
                              children: [
                                "It doesn't chase moons…",
                                " ",
                                (0, a.jsx)("span", {
                                  className: "font-semibold text-[#ea7f3a]",
                                  children: "it lives among them",
                                }),
                                ".",
                              ],
                            }),
                            (0, a.jsxs)("p", {
                              className:
                                "text-base font-semibold leading-relaxed text-[#5d462d] md:text-lg",
                              children: [
                                "A soft, glowing symbol of",
                                " ",
                                (0, a.jsx)("span", {
                                  className: "font-bold text-[#3b3025]",
                                  children: " persistence, community, cosmic luck, and the ultimate “slow and steady wins the race” mentality.",
                                }),
                                ".",
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "grid grid-cols-2 gap-4 border-t-2 border-[#d7af77]/45 pt-7",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "rounded-[24px] border-2 border-[#c58b3d]/35 bg-[#fff3dd] p-4 text-center",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "font-xcompany mb-1 text-2xl font-bold text-[#ea7f3a]",
                                  children: "Zero Gravity",
                                }),
                                (0, a.jsx)("div", {
                                  className: "text-sm text-[#7e603d]",
                                  children: "Born in Space",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "rounded-[24px] border-2 border-[#cda17b]/40 bg-[#fff1e1] p-4 text-center",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "font-xcompany mb-1 text-2xl font-bold text-[#b56f4d]",
                                  children: "Cosmic",
                                }),
                                (0, a.jsx)("div", {
                                  className: "text-sm text-[#81644a]",
                                  children: "Degen Energy",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let j = [
        {
          phase: "Phase 1",
          title: "Launch",
          items: [
            "Website and socials go live with full branding",
            "Community kickoff with meme packs and sticker drops",
            "Liquidity launch and awareness campaigns",
          ],
        },
        {
          phase: "Phase 2",
          title: "Community",
          items: [
            "Partnership pushes and creator collaborations",
            "Weekly community raids and AMAs",
            "Milestone celebration events with gated quests",
          ],
        },
        {
          phase: "Phase 3",
          title: "Expansion",
          items: [
            "Cross-platform visibility and exchange growth",
            "Gamified community challenges and leaderboard seasons",
            "Roadmap votes by holders for upcoming features",
          ],
        },
        {
          phase: "Phase 4",
          title: "Ecosystem",
          items: [
            "Character drops, seasonal missions, and collectible rewards",
            "Community-led product experiments",
            "Long-term ecosystem expansion around $ASTERGARY",
          ],
        },
      ];
      function N() {
        return (0, a.jsxs)("section", {
          id: "roadmap",
          className: "relative overflow-hidden px-4 py-24",
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute left-[-5%] top-[10%] h-64 w-64 rounded-full bg-[#e4b681]/16 blur-3xl pointer-events-none",
            }),
            (0, a.jsx)("div", {
              className:
                "absolute bottom-[8%] right-[-4%] h-64 w-64 rounded-full bg-[#d78c61]/12 blur-3xl pointer-events-none",
            }),
            (0, a.jsxs)("div", {
              className: "container relative z-10 mx-auto",
              children: [
                (0, a.jsxs)("div", {
                  className: "scroll-reveal mb-16 text-center",
                  children: [
                    (0, a.jsx)("span", {
                      className:
                        "inline-block rounded-full border-2 border-[#c58b3d]/40 bg-[#fff6df] px-4 py-1.5 text-sm font-bold uppercase tracking-[0.18em] text-[#8d6537]",
                      children: "Roadmap",
                    }),
                    (0, a.jsx)("h2", {
                      className:
                        "font-xcompany mt-6 text-4xl font-bold text-[#3f301f] md:text-5xl lg:text-6xl",
                      children: "The Mission",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "scroll-reveal mx-auto max-w-3xl",
                  children: (0, a.jsxs)("div", {
                    className: "relative pl-8 md:pl-12",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "absolute left-3 md:left-5 top-2 bottom-2 w-0.5 rounded-full bg-gradient-to-b from-[#e2b277] via-[#cb8050] to-[#ad613e]",
                      }),
                      (0, a.jsx)("div", {
                        className: "space-y-10",
                        children: j.map((e, t) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className: "relative",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute -left-[21px] md:-left-[27px] top-5 h-5 w-5 rounded-full border-4 border-[#fca95d] bg-[#fff6df] shadow-[0_0_10px_rgba(252,169,93,0.5)] z-10",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "bubble-card p-6 md:p-8",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#8d6537]",
                                      children: e.phase,
                                    }),
                                    (0, a.jsx)("h3", {
                                      className:
                                        "font-xcompany mb-4 text-2xl text-[#3f301f] md:text-3xl",
                                      children: e.title,
                                    }),
                                    (0, a.jsx)("ul", {
                                      className: "space-y-3",
                                      children: e.items.map((e, t) =>
                                        (0, a.jsxs)(
                                          "li",
                                          {
                                            className:
                                              "flex items-start gap-3 text-[#6f5739]",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className:
                                                  "mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff8a5e]",
                                              }),
                                              (0, a.jsx)("span", {
                                                className:
                                                  "text-base leading-relaxed",
                                                children: e,
                                              }),
                                            ],
                                          },
                                          t
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var k = r(6678),
        A = r(1016),
        C = r(1195),
        M = r(5234);
      let T = [
        {
          title: "Renounced",
          description:
            "Contract ownership has been fully renounced — no one controls it",
          icon: k.Z,
          color: "from-[#8ae09f] to-[#53c271]",
          glow: "bg-[#67cf83]/25",
        },
        {
          title: "Burned LP",
          description:
            "Liquidity pool tokens are permanently burned — locked forever",
          icon: A.Z,
          color: "from-[#f9ad5f] to-[#f47f49]",
          glow: "bg-[#f78f3f]/25",
        },
        {
          title: "0% Tax",
          description:
            "Zero buy tax, zero sell tax — what you see is what you get",
          icon: C.Z,
          color: "from-[#db9d70] to-[#ba734b]",
          glow: "bg-[#d28b61]/18",
        },
        {
          title: "1B Supply",
          description:
            "Total supply: 1,000,000,000 $ASTERGARY — simple and clean",
          icon: M.Z,
          color: "from-[#ffd26d] to-[#f4b443]",
          glow: "bg-[#ffc44d]/25",
        },
      ];
      function _() {
        return (0, a.jsxs)("section", {
          className: "relative overflow-hidden px-4 py-24",
          id: "tokenomics",
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute left-[7%] top-[15%] h-56 w-56 rounded-full bg-[#efc48f]/18 blur-3xl",
            }),
            (0, a.jsx)("div", {
              className:
                "absolute bottom-[8%] right-[5%] h-64 w-64 rounded-full bg-[#d58b60]/14 blur-3xl",
            }),
            (0, a.jsxs)("div", {
              className: "container relative z-10 mx-auto",
              children: [
                (0, a.jsxs)("div", {
                  className: "scroll-reveal mb-16 text-center",
                  children: [
                    (0, a.jsx)("span", {
                      className:
                        "inline-block rounded-full border-2 border-[#c58b3d]/40 bg-[#fff6df] px-4 py-1.5 text-sm font-bold uppercase tracking-[0.18em] text-[#8d6537]",
                      children: "Tokenomics",
                    }),
                    (0, a.jsx)("h2", {
                      className:
                        "font-xcompany mt-6 text-4xl font-bold text-[#3f301f] md:text-5xl lg:text-6xl",
                      children: "Built for the Community",
                    }),
                    (0, a.jsx)("p", {
                      className: "mx-auto max-w-xl text-lg text-[#6f5739]",
                      children:
                        "No hidden fees. No backdoors. Just pure cosmic degen energy.",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4",
                  children: T.map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "bubble-card scroll-reveal group relative p-7 text-center transition-transform duration-500 hover:-translate-y-1",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "absolute inset-0 rounded-[30px] ".concat(
                                e.glow,
                                " -z-10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                              ),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "mb-5 inline-flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br ".concat(
                                e.color,
                                " shadow-[0_6px_0_rgba(130,86,24,0.22)] transition-transform duration-500 group-hover:scale-110"
                              ),
                            children: (0, a.jsx)(e.icon, {
                              className: "h-8 w-8 text-white",
                            }),
                          }),
                          (0, a.jsx)("h3", {
                            className:
                              "font-xcompany mb-3 text-xl font-bold text-[#3e2f1f]",
                            children: e.title,
                          }),
                        ],
                      },
                      e.title
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      }
      var R = r(4822),
        B = r(8417),
        D = r(3505);
      let S = [
        {
          step: 1,
          title: "Get a Wallet",
          description:
            "Download MetaMask or any ERC-20 compatible wallet and set it up with Ethereum",
          icon: R.Z,
          color: "from-[#e0b17a] to-[#c27a4e]",
        },
        {
          step: 2,
          title: "Get ETH",
          description:
            "Buy ETH on an exchange and send it to your wallet, or buy directly in MetaMask",
          icon: B.Z,
          color: "from-[#dba178] to-[#b96e49]",
        },
        {
          step: 3,
          title: "Swap for $ASTERGARY",
          description:
            "Go to Uniswap, paste the contract address from the hero section, connect your wallet and swap",
          icon: D.Z,
          color: "from-amber-500 to-orange-600",
        },
      ];
      function E() {
        return (0, a.jsxs)("section", {
          className: "relative overflow-hidden px-4 py-24",
          id: "howtobuy",
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute right-[8%] top-[12%] h-64 w-64 rounded-full bg-[#e3b47d]/16 blur-3xl",
            }),
            (0, a.jsx)("div", {
              className:
                "absolute bottom-[12%] left-[7%] h-56 w-56 rounded-full bg-[#d98b61]/14 blur-3xl",
            }),
            (0, a.jsxs)("div", {
              className: "container relative z-10 mx-auto",
              children: [
                (0, a.jsxs)("div", {
                  className: "scroll-reveal mb-16 text-center",
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "font-xcompany mb-4 text-3xl font-bold text-[#3f301f] md:text-4xl lg:text-5xl",
                      children: "How to Buy",
                    }),
                    (0, a.jsx)("p", {
                      className: "mx-auto max-w-xl text-lg text-[#6f5739]",
                      children: "Three simple steps to join the cosmic orbit",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3",
                  children: S.map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: "scroll-reveal group relative",
                        children: [
                          e.step < 3 &&
                            (0, a.jsx)("div", {
                              className:
                                "absolute left-[calc(50%+40px)] top-12 z-0 hidden h-[4px] w-[calc(100%-40px)] rounded-full bg-gradient-to-r from-[#e1b176] to-[#b96f49] md:block",
                            }),
                          (0, a.jsxs)("div", {
                            className:
                              "bubble-card relative z-10 p-7 text-center transition-transform duration-500 hover:-translate-y-1",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "absolute -top-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#b67f37]/45 bg-[#fff6e2] text-sm font-bold text-[#7c5934]",
                                children: e.step,
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "mt-2 inline-flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br ".concat(
                                    e.color,
                                    " mb-5 shadow-[0_6px_0_rgba(130,86,24,0.22)] transition-transform duration-500 group-hover:scale-110"
                                  ),
                                children: (0, a.jsx)(e.icon, {
                                  className: "h-8 w-8 text-white",
                                }),
                              }),
                              (0, a.jsx)("h3", {
                                className:
                                  "font-xcompany mb-3 text-xl font-bold text-[#3e2f1f]",
                                children: e.title,
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-sm leading-relaxed text-[#6f5739]",
                                children: e.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      e.step
                    )
                  ),
                }),
                (0, a.jsx)("div", {
                  className: "scroll-reveal mt-12 text-center",
                  children: (0, a.jsxs)("a", {
                    href: "https://app.uniswap.org/#/swap?outputCurrency=0xee7e46d9686e0f56edb5b6427ed9b250e0da5392",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "punchy-btn inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#fca95d] to-[#f07f4a] px-10 py-4 text-lg font-bold text-white",
                    children: [
                      (0, a.jsx)(D.Z, { className: "w-5 h-5" }),
                      "Buy on Uniswap",
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var F = r(1243),
        L = r(4698),
        z = r(9036),
        q = r(2369),
        Z = r(2851);
      let I = Array.from({ length: 56 }, (e, t) => ({
          x: ((137 * t + 11) % 97) + 1.5,
          y: ((79 * t + 23) % 95) + 2,
          radius: t % 4 == 0 ? 1.6 : t % 3 == 0 ? 1.15 : 0.85,
          opacity: 0.22 + (t % 7) * 0.07,
        })),
        P = [
          {
            body: "M49 5 C64 4 82 12 90 28 C97 43 96 61 86 74 C75 88 56 95 39 93 C24 91 11 81 6 66 C1 51 4 34 14 22 C24 10 35 6 49 5 Z",
            cracks: [
              { d: "M22 35 Q34 28 40 39", width: 3 },
              { d: "M60 21 Q72 18 76 28", width: 2.5 },
              { d: "M31 69 Q44 76 56 64", width: 2.5 },
            ],
            craters: [
              { cx: 34, cy: 40, r: 6, o: 0.5 },
              { cx: 70, cy: 28, r: 7, o: 0.42 },
              { cx: 56, cy: 72, r: 8, o: 0.5 },
            ],
          },
          {
            body: "M45 4 C63 6 78 12 89 24 C97 38 96 54 91 67 C85 82 68 94 50 95 C33 97 16 88 8 73 C1 59 2 41 10 26 C18 14 29 5 45 4 Z",
            cracks: [
              { d: "M25 28 Q35 22 43 31", width: 2.5 },
              { d: "M54 48 Q66 43 75 53", width: 2.5 },
              { d: "M29 72 Q39 65 50 72", width: 2 },
            ],
            craters: [
              { cx: 30, cy: 34, r: 5, o: 0.45 },
              { cx: 60, cy: 24, r: 8, o: 0.38 },
              { cx: 71, cy: 60, r: 6, o: 0.44 },
              { cx: 42, cy: 70, r: 7, o: 0.5 },
            ],
          },
          {
            body: "M51 6 C65 4 82 14 90 31 C95 43 93 61 84 75 C75 88 57 95 41 92 C24 90 12 80 8 65 C3 50 6 30 18 18 C26 10 39 6 51 6 Z",
            cracks: [
              { d: "M20 43 Q30 36 38 43", width: 3 },
              { d: "M56 18 Q65 16 73 24", width: 2 },
              { d: "M47 68 Q58 62 68 70", width: 2.5 },
            ],
            craters: [
              { cx: 27, cy: 48, r: 7, o: 0.44 },
              { cx: 62, cy: 28, r: 5, o: 0.35 },
              { cx: 72, cy: 62, r: 8, o: 0.47 },
            ],
          },
          {
            body: "M47 8 C60 4 77 10 88 24 C97 36 98 53 90 69 C82 85 65 94 47 93 C28 93 14 84 7 69 C0 54 3 35 15 21 C24 11 35 7 47 8 Z",
            cracks: [
              { d: "M25 30 Q38 26 45 36", width: 2.5 },
              { d: "M55 55 Q67 50 77 59", width: 2.5 },
              { d: "M32 72 Q45 67 54 75", width: 2 },
            ],
            craters: [
              { cx: 36, cy: 41, r: 5, o: 0.44 },
              { cx: 67, cy: 32, r: 8, o: 0.42 },
              { cx: 58, cy: 71, r: 7, o: 0.48 },
              { cx: 77, cy: 56, r: 4, o: 0.4 },
            ],
          },
        ],
        H = [
          { light: "#d3c0af", mid: "#8a6c59", dark: "#433126" },
          { light: "#cab29d", mid: "#7b6050", dark: "#392920" },
          { light: "#d6c4b5", mid: "#8f705d", dark: "#4c372a" },
          { light: "#c7b19d", mid: "#725848", dark: "#33261d" },
        ],
        G = [
          { bass: 130.81, lead: 261.63, harmony: 392 },
          { bass: 130.81, lead: 311.13, harmony: 392 },
          { bass: 146.83, lead: 293.66, harmony: 440 },
          { bass: 146.83, lead: 329.63, harmony: 440 },
          { bass: 174.61, lead: 349.23, harmony: 523.25 },
          { bass: 146.83, lead: 293.66, harmony: 440 },
          { bass: 130.81, lead: 261.63, harmony: 392 },
          { bass: 98, lead: 246.94, harmony: 369.99 },
        ],
        O = {
          start: "/sounds/start.wav",
          hit: "/sounds/hit.wav",
          shieldBreak: "/sounds/shield-break.wav",
          shield: "/sounds/shield.wav",
          slow: "/sounds/slow.wav",
          levelUp: "/sounds/level-up.wav",
          gameOver: "/sounds/game-over.wav",
          music: "/sounds/music-loop.wav",
        },
        Q = (e) => {
          let {
              uid: t,
              size: r,
              rotation: s,
              variantIndex: n,
              paletteIndex: l,
            } = e,
            o = P[n % P.length],
            i = H[l % H.length];
          return (0, a.jsxs)("svg", {
            viewBox: "0 0 100 100",
            width: r,
            height: r,
            style: {
              transform: "rotate(".concat(s, "deg)"),
              filter:
                "drop-shadow(0 8px 16px rgba(0,0,0,0.72)) drop-shadow(0 0 10px rgba(201,123,67,0.18))",
            },
            children: [
              (0, a.jsx)("defs", {
                children: (0, a.jsxs)("radialGradient", {
                  id: "asteroid-".concat(t),
                  cx: "34%",
                  cy: "28%",
                  r: "72%",
                  children: [
                    (0, a.jsx)("stop", { offset: "0%", stopColor: i.light }),
                    (0, a.jsx)("stop", { offset: "46%", stopColor: i.mid }),
                    (0, a.jsx)("stop", { offset: "100%", stopColor: i.dark }),
                  ],
                }),
              }),
              (0, a.jsx)("path", {
                d: o.body,
                fill: "url(#asteroid-".concat(t, ")"),
                stroke: "#22170f",
                strokeWidth: "1.5",
              }),
              o.cracks.map((e, r) =>
                (0, a.jsx)(
                  "path",
                  {
                    d: e.d,
                    stroke: "#22170f",
                    fill: "none",
                    strokeWidth: e.width,
                    strokeLinecap: "round",
                  },
                  "".concat(t, "-crack-").concat(r)
                )
              ),
              o.craters.map((e, r) =>
                (0, a.jsx)(
                  "circle",
                  { cx: e.cx, cy: e.cy, r: e.r, fill: "#22170f", opacity: e.o },
                  "".concat(t, "-crater-").concat(r)
                )
              ),
              (0, a.jsx)("ellipse", {
                cx: "36",
                cy: "26",
                rx: "14",
                ry: "9",
                fill: "white",
                opacity: "0.1",
              }),
            ],
          });
        },
        W = (e) => {
          let { kind: t, size: r, phase: s } = e;
          return (0, a.jsxs)("svg", {
            viewBox: "0 0 100 100",
            width: r,
            height: r,
            style: {
              transform: "scale(".concat(1 + 0.05 * Math.sin(s), ")"),
              filter: "drop-shadow(0 6px 16px rgba(255,210,150,0.32))",
            },
            children: [
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("radialGradient", {
                  id: "power-".concat(t),
                  cx: "35%",
                  cy: "30%",
                  r: "68%",
                  children:
                    "shield" === t
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("stop", {
                              offset: "0%",
                              stopColor: "#fff9c7",
                            }),
                            (0, a.jsx)("stop", {
                              offset: "55%",
                              stopColor: "#f2c86e",
                            }),
                            (0, a.jsx)("stop", {
                              offset: "100%",
                              stopColor: "#c98b35",
                            }),
                          ],
                        })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("stop", {
                              offset: "0%",
                              stopColor: "#fff4dd",
                            }),
                            (0, a.jsx)("stop", {
                              offset: "55%",
                              stopColor: "#ffb66a",
                            }),
                            (0, a.jsx)("stop", {
                              offset: "100%",
                              stopColor: "#d87238",
                            }),
                          ],
                        }),
                }),
              }),
              (0, a.jsx)("circle", {
                cx: "50",
                cy: "50",
                r: "34",
                fill: "url(#power-".concat(t, ")"),
                stroke: "#6e4936",
                strokeWidth: "4",
              }),
              "shield" === t
                ? (0, a.jsx)("path", {
                    d: "M50 26 L67 33 V48 C67 61 59 70 50 75 C41 70 33 61 33 48 V33 Z",
                    fill: "#fff9ee",
                    stroke: "#6e4936",
                    strokeWidth: "4",
                    strokeLinejoin: "round",
                  })
                : (0, a.jsx)("path", {
                    d: "M53 22 L33 53 H47 L42 78 L67 45 H54 Z",
                    fill: "#fff8ee",
                    stroke: "#6e4936",
                    strokeWidth: "4",
                    strokeLinejoin: "round",
                  }),
              (0, a.jsx)("circle", {
                cx: "24",
                cy: "26",
                r: "6",
                fill: "#fffaf3",
                opacity: "0.55",
              }),
            ],
          });
        },
        V = 0,
        Y = 0;
      function X(e, t) {
        return e + Math.random() * (t - e);
      }
      function U(e) {
        let t = Math.max(32, 62 - 0.8 * e + 18 * Math.random());
        return {
          id: ++V,
          x: Math.random() * (680 - t),
          y: -t - 180 * Math.random(),
          size: t,
          speed:
            2.25 +
            0.48 * Math.min(e - 1, 4) +
            0.18 * Math.max(e - 5, 0) +
            1.15 * Math.random(),
          rotation: 360 * Math.random(),
          rotationSpeed: (Math.random() - 0.5) * 8,
          variant: Math.floor(Math.random() * P.length),
          palette: Math.floor(Math.random() * H.length),
          drift:
            (Math.random() - 0.5) *
            (0.35 + 0.02 * Math.min(e - 1, 4) + 0.01 * Math.max(e - 5, 0)),
        };
      }
      function J() {
        let [e, t] = (0, s.useState)(!1),
          [r, n] = (0, s.useState)(!1),
          [l, o] = (0, s.useState)(!1),
          [i, c] = (0, s.useState)(!0),
          [d, u] = (0, s.useState)(0),
          [f, m] = (0, s.useState)(3),
          [h, p] = (0, s.useState)(1),
          [b, g] = (0, s.useState)(302),
          [v, w] = (0, s.useState)([]),
          [y, j] = (0, s.useState)([]),
          [N, k] = (0, s.useState)(!1),
          [A, C] = (0, s.useState)(!1),
          M = (0, s.useRef)(null),
          T = (0, s.useRef)(0),
          _ = (0, s.useRef)(!1),
          R = (0, s.useRef)(!1),
          B = (0, s.useRef)(!1),
          D = (0, s.useRef)(302),
          S = (0, s.useRef)(0),
          E = (0, s.useRef)(0),
          P = (0, s.useRef)(3),
          H = (0, s.useRef)(1),
          J = (0, s.useRef)([]),
          $ = (0, s.useRef)([]),
          K = (0, s.useRef)(!1),
          ee = (0, s.useRef)(!1),
          et = (0, s.useRef)(76),
          er = (0, s.useRef)(0.9),
          ea = (0, s.useRef)(0),
          es = (0, s.useRef)(0),
          en = (0, s.useRef)(0),
          el = (0, s.useRef)(!1),
          eo = (0, s.useRef)(!1),
          ei = (0, s.useRef)(null),
          ec = (0, s.useRef)(null),
          ed = (0, s.useRef)(null),
          eu = (0, s.useRef)(null),
          ex = (0, s.useRef)(null),
          ef = (0, s.useRef)(null),
          em = (0, s.useRef)(null),
          eh = (0, s.useRef)(0),
          ep = (0, s.useRef)(0),
          eb = (0, s.useRef)(i),
          eg = (0, s.useRef)(0),
          ev = (0, s.useRef)(0),
          ew = (0, s.useRef)(0),
          ey = (0, s.useRef)(0),
          ej = (0, s.useRef)(!1),
          eN = (0, s.useRef)(null),
          ek = (0, s.useRef)({}),
          eA = (0, s.useRef)([]),
          eC = e ? 94 : 76,
          eM = e ? 0.68 : 0.9;
        (0, s.useEffect)(() => {
          let e = window.matchMedia("(max-width: 639px)"),
            r = () => t(e.matches);
          return (
            r(),
            e.addEventListener("change", r),
            () => e.removeEventListener("change", r)
          );
        }, []),
          (0, s.useEffect)(() => {
            (et.current = eC), (er.current = eM);
            let e = 680 - eC,
              t = Math.max(0, Math.min(e, D.current));
            (D.current = t), g(t);
          }, [eM, eC]),
          (0, s.useEffect)(() => {
            eb.current = i;
          }, [i]);
        let eT = (0, s.useCallback)(() => {
            if ("undefined" == typeof Audio) return !1;
            if (ej.current) return !0;
            let e = new Audio(O.music);
            (e.loop = !0),
              (e.preload = "auto"),
              (e.volume = 0.42),
              (eN.current = e);
            let t = {},
              r = Object.keys(O).filter((e) => "music" !== e);
            return (
              r.forEach((e) => {
                let r = new Audio(O[e]);
                (r.preload = "auto"), (t[e] = r);
              }),
              (ek.current = t),
              (ej.current = !0),
              !0
            );
          }, []),
          e_ = (0, s.useCallback)(
            (e, t) => {
              if (!eb.current || !eT()) return !1;
              let r = ek.current[e];
              if (!r) return !1;
              let a = new Audio(r.src);
              (a.volume = t), (a.preload = "auto"), eA.current.push(a);
              let s = () => {
                eA.current = eA.current.filter((e) => e !== a);
              };
              return (
                a.addEventListener("ended", s, { once: !0 }),
                a.addEventListener("error", s, { once: !0 }),
                a.play().catch(() => {
                  s();
                }),
                !0
              );
            },
            [eT]
          );
        (0, s.useEffect)(() => {
          eT();
        }, [eT]);
        let eR = (0, s.useCallback)(() => {
            if (ei.current) return ei.current;
            let e = window.AudioContext || window.webkitAudioContext;
            if (!e) return null;
            let t = new e(),
              r = t.createGain(),
              a = t.createGain(),
              s = t.createGain(),
              n = t.createBiquadFilter();
            return (
              (r.gain.value = 0.68),
              (a.gain.value = 0.15),
              (s.gain.value = 0.2),
              (n.type = "lowpass"),
              (n.frequency.value = 1480),
              (n.Q.value = 0.8),
              a.connect(n),
              n.connect(r),
              s.connect(r),
              r.connect(t.destination),
              (ei.current = t),
              (ec.current = r),
              (ed.current = a),
              (eu.current = s),
              (ex.current = n),
              t
            );
          }, []),
          eB = (0, s.useCallback)(async () => {
            let e = eR();
            if (!e) return null;
            if ("suspended" === e.state)
              try {
                await e.resume();
              } catch (e) {
                return null;
              }
            return e;
          }, [eR]),
          eD = (0, s.useCallback)(function (e) {
            var t, r, a, s, n, l;
            let o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = ei.current,
              c = "music" === o.channel ? ed.current : eu.current;
            if (!i || "running" !== i.state || !c) return;
            let d =
              null !== (t = o.startTime) && void 0 !== t ? t : i.currentTime;
            if (eg.current >= 18) return;
            let u = null !== (r = o.duration) && void 0 !== r ? r : 0.18,
              x = null !== (a = o.volume) && void 0 !== a ? a : 0.08,
              f = null !== (s = o.attack) && void 0 !== s ? s : 0.01,
              m = i.createOscillator(),
              h = i.createGain(),
              p = i.createBiquadFilter();
            (eg.current += 1),
              (m.type = null !== (n = o.type) && void 0 !== n ? n : "triangle"),
              m.frequency.setValueAtTime(e, d),
              o.endFrequency &&
                m.frequency.exponentialRampToValueAtTime(
                  Math.max(o.endFrequency, 1),
                  d + u
                ),
              (p.type = "lowpass"),
              p.frequency.setValueAtTime(
                null !== (l = o.filterFrequency) && void 0 !== l ? l : 1600,
                d
              ),
              h.gain.setValueAtTime(1e-4, d),
              h.gain.linearRampToValueAtTime(x, d + f),
              h.gain.exponentialRampToValueAtTime(1e-4, d + u),
              m.connect(p),
              p.connect(h),
              h.connect(c),
              (m.onended = () => {
                (eg.current = Math.max(0, eg.current - 1)),
                  m.disconnect(),
                  p.disconnect(),
                  h.disconnect();
              }),
              m.start(d),
              m.stop(d + u + 0.05);
          }, []),
          eS = (0, s.useCallback)(() => {
            var e, t;
            if (e_("start", 0.7)) return;
            let r =
              null !==
                (t =
                  null === (e = ei.current) || void 0 === e
                    ? void 0
                    : e.currentTime) && void 0 !== t
                ? t
                : 0;
            eD(261.63, {
              startTime: r,
              duration: 0.12,
              volume: 0.1,
              type: "triangle",
              filterFrequency: 1500,
            }),
              eD(392, {
                startTime: r + 0.08,
                duration: 0.18,
                volume: 0.11,
                type: "triangle",
                filterFrequency: 1800,
              }),
              eD(523.25, {
                startTime: r + 0.17,
                duration: 0.22,
                volume: 0.1,
                type: "triangle",
                filterFrequency: 2200,
              });
          }, [e_, eD]),
          eE = (0, s.useCallback)(() => {
            var e, t;
            let r = performance.now();
            if (r - ev.current < 120 || ((ev.current = r), e_("hit", 0.8)))
              return;
            let a =
              null !==
                (t =
                  null === (e = ei.current) || void 0 === e
                    ? void 0
                    : e.currentTime) && void 0 !== t
                ? t
                : 0;
            eD(180, {
              startTime: a,
              duration: 0.22,
              volume: 0.15,
              type: "sawtooth",
              endFrequency: 72,
              filterFrequency: 900,
            }),
              eD(110, {
                startTime: a + 0.03,
                duration: 0.2,
                volume: 0.11,
                type: "square",
                endFrequency: 52,
                filterFrequency: 680,
              });
          }, [e_, eD]),
          eF = (0, s.useCallback)(() => {
            var e, t;
            if (e_("shieldBreak", 0.72)) return;
            let r =
              null !==
                (t =
                  null === (e = ei.current) || void 0 === e
                    ? void 0
                    : e.currentTime) && void 0 !== t
                ? t
                : 0;
            eD(392, {
              startTime: r,
              duration: 0.12,
              volume: 0.11,
              type: "triangle",
              filterFrequency: 2200,
            }),
              eD(220, {
                startTime: r + 0.05,
                duration: 0.18,
                volume: 0.095,
                type: "sine",
                endFrequency: 146.83,
                filterFrequency: 1800,
              });
          }, [e_, eD]),
          eL = (0, s.useCallback)(
            (e) => {
              var t, r;
              let a = performance.now();
              if (
                a - ew.current < 140 ||
                ((ew.current = a),
                ("shield" === e && e_("shield", 0.72)) ||
                  ("slow" === e && e_("slow", 0.76)))
              )
                return;
              let s =
                null !==
                  (r =
                    null === (t = ei.current) || void 0 === t
                      ? void 0
                      : t.currentTime) && void 0 !== r
                  ? r
                  : 0;
              if ("shield" === e) {
                eD(349.23, {
                  startTime: s,
                  duration: 0.12,
                  volume: 0.105,
                  type: "triangle",
                  filterFrequency: 1900,
                }),
                  eD(523.25, {
                    startTime: s + 0.08,
                    duration: 0.2,
                    volume: 0.11,
                    type: "sine",
                    filterFrequency: 2300,
                  });
                return;
              }
              eD(293.66, {
                startTime: s,
                duration: 0.1,
                volume: 0.11,
                type: "square",
                filterFrequency: 1700,
              }),
                eD(440, {
                  startTime: s + 0.06,
                  duration: 0.16,
                  volume: 0.12,
                  type: "triangle",
                  filterFrequency: 2100,
                });
            },
            [e_, eD]
          ),
          ez = (0, s.useCallback)(() => {
            var e, t;
            let r = performance.now();
            if (r - ey.current < 240 || ((ey.current = r), e_("levelUp", 0.8)))
              return;
            let a =
              null !==
                (t =
                  null === (e = ei.current) || void 0 === e
                    ? void 0
                    : e.currentTime) && void 0 !== t
                ? t
                : 0;
            [329.63, 392, 523.25].forEach((e, t) => {
              eD(e, {
                startTime: a + 0.08 * t,
                duration: 0.18,
                volume: 0.11,
                type: "triangle",
                filterFrequency: 2400,
              });
            });
          }, [e_, eD]),
          eq = (0, s.useCallback)(() => {
            var e, t;
            if (e_("gameOver", 0.82)) return;
            let r =
              null !==
                (t =
                  null === (e = ei.current) || void 0 === e
                    ? void 0
                    : e.currentTime) && void 0 !== t
                ? t
                : 0;
            [220, 164.81, 130.81].forEach((e, t) => {
              eD(e, {
                startTime: r + 0.11 * t,
                duration: 0.28,
                volume: 0.12,
                type: "sawtooth",
                endFrequency: 0.84 * e,
                filterFrequency: 1050,
              });
            });
          }, [e_, eD]),
          eZ = (0, s.useCallback)(() => {
            let e = ei.current,
              t = ex.current;
            if (!e || "running" !== e.state) return;
            let r = eh.current % G.length,
              a = G[r],
              s = Math.max(
                0.24,
                0.34 - Math.min((H.current - 1) * 0.008, 0.08)
              ),
              n = Math.max(
                e.currentTime + 0.02,
                ep.current || e.currentTime + 0.02
              );
            t &&
              t.frequency.setTargetAtTime(
                1380 + Math.min(65 * H.current, 460),
                n,
                0.08
              ),
              eD(a.bass, {
                channel: "music",
                startTime: n,
                duration: 0.92 * s,
                volume: 0.075,
                type: "sine",
                filterFrequency: 620,
              }),
              eD(a.lead, {
                channel: "music",
                startTime: n,
                duration: 0.72 * s,
                volume: 0.05,
                type: r % 2 == 0 ? "triangle" : "sawtooth",
                filterFrequency: 1700,
              }),
              eD(a.harmony, {
                channel: "music",
                startTime: n + 0.02,
                duration: 0.56 * s,
                volume: 0.03,
                type: "triangle",
                filterFrequency: 2e3,
              }),
              (ep.current = n + s),
              (eh.current += 1);
          }, [eD]),
          eI = (0, s.useCallback)(() => {
            null !== ef.current &&
              (window.clearInterval(ef.current), (ef.current = null)),
              eN.current && (eN.current.pause(), (eN.current.currentTime = 0));
          }, []),
          eP = (0, s.useCallback)(() => {
            eT(), eI();
            let e = eN.current;
            if (e && eb.current) {
              (e.volume = 0.46),
                e.play().catch(() => {
                  let e = ei.current;
                  e &&
                    "running" === e.state &&
                    ((ep.current = e.currentTime + 0.03),
                    (ef.current = window.setInterval(() => {
                      eZ();
                    }, 150)));
                });
              return;
            }
            let t = ei.current;
            t &&
              "running" === t.state &&
              ((ep.current = t.currentTime + 0.03),
              (ef.current = window.setInterval(() => {
                eZ();
              }, 150)));
          }, [eT, eZ, eI]),
          eH = (0, s.useCallback)(async () => {
            let e = !i;
            if ((c(e), !e)) {
              eI(),
                ei.current &&
                  "running" === ei.current.state &&
                  ei.current.suspend();
              return;
            }
            await eB(), K.current && !ee.current && eP();
          }, [eB, i, eP, eI]),
          eG = (0, s.useCallback)((e) => {
            let t = M.current;
            if (!t) return;
            let r = et.current,
              a = t.getBoundingClientRect(),
              s = 680 / a.width,
              n = (r / 2) * (a.width / 680),
              l = (e - a.left - n) * s,
              o = Math.max(0, Math.min(680 - r, l));
            (D.current = o), g(o);
          }, []),
          eO = (0, s.useCallback)(() => {
            B.current = !1;
          }, []),
          eQ = (0, s.useCallback)(
            (e) => {
              var t, r;
              K.current &&
                !ee.current &&
                ((B.current = !0),
                eG(e.clientX),
                null === (t = (r = e.currentTarget).setPointerCapture) ||
                  void 0 === t ||
                  t.call(r, e.pointerId));
            },
            [eG]
          ),
          eW = (0, s.useCallback)(
            (e) => {
              B.current && K.current && !ee.current && eG(e.clientX);
            },
            [eG]
          );
        (0, s.useEffect)(() => {
          let e = (e) => {
              K.current &&
                !ee.current &&
                (("ArrowLeft" === e.key || "a" === e.key.toLowerCase()) &&
                  (_.current = !0),
                ("ArrowRight" === e.key || "d" === e.key.toLowerCase()) &&
                  (R.current = !0));
            },
            t = (e) => {
              ("ArrowLeft" === e.key || "a" === e.key.toLowerCase()) &&
                (_.current = !1),
                ("ArrowRight" === e.key || "d" === e.key.toLowerCase()) &&
                  (R.current = !1);
            };
          return (
            window.addEventListener("keydown", e),
            window.addEventListener("keyup", t),
            () => {
              window.removeEventListener("keydown", e),
                window.removeEventListener("keyup", t);
            }
          );
        }, []);
        let eV = (0, s.useCallback)(() => {
            let e = performance.now(),
              t = (r) => {
                var a, s;
                if (!K.current || ee.current) return;
                let n = et.current,
                  l = er.current,
                  i = Math.min(r - e, 50);
                e = r;
                let c = i / 16.667,
                  d = r < ea.current,
                  x = r < es.current;
                d !== el.current && ((el.current = d), k(d)),
                  x !== eo.current && ((eo.current = x), C(x));
                let f = 7.2 * c;
                _.current && (D.current = Math.max(0, D.current - f)),
                  R.current && (D.current = Math.min(680 - n, D.current + f));
                let h = D.current + n / 2,
                  b = 420 - n - 16 + 0.58 * n,
                  v = 0.28 * n,
                  y = x ? 0.66 : 1,
                  N = J.current
                    .map((e) => ({
                      ...e,
                      x: Math.max(
                        -e.size,
                        Math.min(680 + e.size, e.x + e.drift * c)
                      ),
                      y: e.y + e.speed * c * y,
                      rotation: e.rotation + e.rotationSpeed * c,
                    }))
                    .filter((e) => e.y < 510),
                  A = N.findIndex((e) => {
                    let t = e.size * l,
                      r = e.x + t / 2,
                      a = e.y + t / 2;
                    return Math.hypot(h - r, b - a) < v + 0.3 * t;
                  });
                if (-1 !== A) {
                  if (d)
                    (ea.current = 0),
                      (el.current = !1),
                      k(!1),
                      eF(),
                      N.splice(A, 1);
                  else {
                    if ((eE(), (P.current -= 1), P.current <= 0)) {
                      (ee.current = !0),
                        (B.current = !1),
                        eq(),
                        m(0),
                        o(!0),
                        u(S.current);
                      return;
                    }
                    m(P.current), N.splice(A, 1);
                  }
                }
                N = N.filter(
                  (e) =>
                    !(e.y > 444) ||
                    ((E.current += 1),
                    (S.current += 10 + (H.current - 1) * 4),
                    !1)
                );
                let M = $.current
                    .map((e) => ({
                      ...e,
                      y: e.y + e.speed * c,
                      phase: e.phase + 0.08 * c,
                    }))
                    .filter((e) => e.y < 480),
                  F = M.find((e) => {
                    let t = e.x + e.size / 2,
                      r = e.y + e.size / 2;
                    return Math.hypot(h - t, b - r) < 0.28 * n + 0.24 * e.size;
                  });
                F &&
                  ((M = M.filter((e) => e.id !== F.id)),
                  "shield" === F.kind
                    ? ((ea.current = r + 9e3), (el.current = !0), k(!0))
                    : ((es.current = r + 7e3), (eo.current = !0), C(!0)),
                  eL(F.kind)),
                  S.current >= 40 &&
                    r > en.current &&
                    0 === M.length &&
                    (M.push(
                      ((a = Math.random() > 0.5 ? "shield" : "slow"),
                      {
                        id: ++Y,
                        kind: a,
                        x: X(50, 590),
                        y: -80,
                        size: "shield" === a ? 42 : 40,
                        speed: X(1.6, 2.2),
                        phase: Math.random() * Math.PI * 2,
                      })
                    ),
                    (en.current = r + X(10500, 14500)));
                let L = (function (e) {
                  let t = 1;
                  for (
                    ;
                    e >=
                    (function (e) {
                      if (e <= 1) return 0;
                      let t = 0;
                      for (let r = 1; r < e; r += 1) {
                        let e = Math.min(r - 1, 4),
                          a = Math.max(r - 5, 0);
                        t += 7 + 2 * e + 3 * a;
                      }
                      return t;
                    })(t + 1);

                  )
                    t += 1;
                  return t;
                })(E.current);
                L > H.current && ((H.current = L), p(L), ez());
                let z = Math.min(
                  10,
                  2 +
                    Math.floor(0.95 * Math.min((s = H.current) - 1, 4)) +
                    Math.floor(0.45 * Math.max(s - 5, 0))
                );
                for (; N.length < z; ) N.push(U(H.current));
                (J.current = N),
                  ($.current = M),
                  g(D.current),
                  w([...N]),
                  j([...M]),
                  u(S.current),
                  (T.current = requestAnimationFrame(t));
              };
            T.current = requestAnimationFrame(t);
          }, [eE, eq, ez, eL, eF]),
          eY = (0, s.useCallback)(() => {
            cancelAnimationFrame(T.current),
              (V = 0),
              (Y = 0),
              (_.current = !1),
              (R.current = !1),
              (B.current = !1),
              (D.current = (680 - et.current) / 2),
              (S.current = 0),
              (E.current = 0),
              (P.current = 3),
              (H.current = 1),
              (ea.current = 0),
              (es.current = 0),
              (en.current = performance.now() + 9e3),
              (el.current = !1),
              (eo.current = !1),
              (eh.current = 0),
              (ep.current = 0),
              (J.current = [U(1), U(1)]),
              ($.current = []),
              (K.current = !0),
              (ee.current = !1),
              n(!0),
              o(!1),
              u(0),
              m(3),
              p(1),
              k(!1),
              C(!1),
              g(D.current),
              w([...J.current]),
              j([]),
              i &&
                eB().then(() => {
                  eP(), eS();
                }),
              eV();
          }, [eS, eB, eV, i, eP]);
        return (
          (0, s.useEffect)(() => {
            if (!r || l || !i) {
              eI();
              return;
            }
            return (
              eB().then(() => {
                K.current && !ee.current && i && eP();
              }),
              () => {
                eI();
              }
            );
          }, [l, eB, i, eP, r, eI]),
          (0, s.useEffect)(() => {
            if (!r || l || !i) {
              null !== em.current &&
                (window.clearInterval(em.current), (em.current = null));
              return;
            }
            let e = () => {
              let e = eN.current;
              e &&
                eb.current &&
                K.current &&
                !ee.current &&
                e.paused &&
                e.play().catch(() => {});
              let t = ei.current;
              if (t) {
                if ("running" === t.state) {
                  null === ef.current && (!e || e.paused) && eP();
                  return;
                }
                "visible" === document.visibilityState &&
                  eb.current &&
                  eB().then((e) => {
                    e &&
                      "running" === e.state &&
                      K.current &&
                      !ee.current &&
                      eb.current &&
                      eP();
                  });
              }
            };
            return (
              e(),
              (em.current = window.setInterval(e, 2e3)),
              () => {
                null !== em.current &&
                  (window.clearInterval(em.current), (em.current = null));
              }
            );
          }, [l, eB, i, eP, r]),
          (0, s.useEffect)(
            () => () => {
              cancelAnimationFrame(T.current),
                eI(),
                eA.current.forEach((e) => {
                  e.pause(), (e.src = "");
                }),
                (eA.current = []),
                null !== em.current && window.clearInterval(em.current),
                eN.current && (eN.current.pause(), (eN.current.src = "")),
                ei.current && ei.current.close();
            },
            [eI]
          ),
          (0, a.jsxs)("section", {
            id: "game",
            className:
              "relative overflow-hidden px-3 py-24 select-none sm:px-4",
            children: [
              (0, a.jsx)("div", {
                className:
                  "pointer-events-none absolute left-[6%] top-[18%] h-64 w-64 rounded-full bg-[#efc28c]/16 blur-3xl",
              }),
              (0, a.jsx)("div", {
                className:
                  "pointer-events-none absolute bottom-[10%] right-[4%] h-72 w-72 rounded-full bg-[#d98f64]/14 blur-3xl",
              }),
              (0, a.jsxs)("div", {
                className: "container relative z-10 mx-auto",
                children: [
                  (0, a.jsxs)("div", {
                    className: "scroll-reveal mb-12 text-center",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "inline-block rounded-full border-2 border-[#c58b3d]/40 bg-[#fff6df] px-4 py-1.5 text-sm font-bold uppercase tracking-[0.18em] text-[#8d6537]",
                        children: "Mini Game",
                      }),
                      (0, a.jsx)("h2", {
                        className:
                          "font-xcompany mt-6 text-4xl font-bold text-[#3f301f] md:text-5xl lg:text-6xl",
                        children: "Dodge The Asteroids",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "mx-auto mt-4 max-w-2xl text-base text-[#6f5739] md:text-lg",
                        children:
                          "Cleaner collisions, bigger character control, unique asteroids, and power-ups that let you survive deeper runs with reactive music and arcade-style sound.",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "scroll-reveal mx-auto max-w-5xl",
                    children: (0, a.jsxs)("div", {
                      className: "bubble-card p-3 sm:p-4 md:p-6",
                      children: [
                        (0, a.jsx)("div", {
                          className: "mb-3 flex justify-end sm:mb-4",
                          children: (0, a.jsx)("button", {
                            type: "button",
                            onClick: () => {
                              eH();
                            },
                            className:
                              "inline-flex items-center gap-2 rounded-full border border-[#d4b089]/70 bg-[#fff7eb] px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8d6537] transition-transform duration-200 hover:-translate-y-0.5",
                            children: i
                              ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(F.Z, {
                                      className: "h-3.5 w-3.5",
                                    }),
                                    " Sound On",
                                  ],
                                })
                              : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(L.Z, {
                                      className: "h-3.5 w-3.5",
                                    }),
                                    " Sound Off",
                                  ],
                                }),
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "mb-3 grid grid-cols-3 gap-2 sm:mb-4 sm:gap-3 md:gap-4",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "rounded-[20px] border border-[#d4b089]/70 bg-[#fff6ea] px-2.5 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:rounded-[22px] sm:px-3 sm:py-3",
                              children: [
                                (0, a.jsx)("p", {
                                  className:
                                    "text-[10px] font-bold uppercase tracking-[0.22em] text-[#9b7854]",
                                  children: "Score",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "font-xcompany text-xl text-[#412a1d] sm:text-2xl",
                                  children: d,
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "rounded-[20px] border border-[#d4b089]/70 bg-[#fff6ea] px-2.5 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:rounded-[22px] sm:px-3 sm:py-3",
                              children: [
                                (0, a.jsx)("p", {
                                  className:
                                    "text-[10px] font-bold uppercase tracking-[0.22em] text-[#9b7854]",
                                  children: "Lives",
                                }),
                                (0, a.jsx)("div", {
                                  className: "mt-1 flex justify-center gap-1",
                                  children: [0, 1, 2].map((e) =>
                                    (0, a.jsx)(
                                      "span",
                                      {
                                        className:
                                          "inline-block h-4 w-4 rounded-full border-2 ".concat(
                                            e < f
                                              ? "border-[#cf6d43] bg-[#e58c63]"
                                              : "border-[#d9bfa0]/50 bg-[#f5e6d0]"
                                          ),
                                      },
                                      e
                                    )
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "rounded-[20px] border border-[#d4b089]/70 bg-[#fff1df] px-2.5 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:rounded-[22px] sm:px-3 sm:py-3",
                              children: [
                                (0, a.jsx)("p", {
                                  className:
                                    "text-[10px] font-bold uppercase tracking-[0.22em] text-[#9b7854]",
                                  children: "Level",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "font-xcompany text-xl text-[#8e5332] sm:text-2xl",
                                  children: h,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "mb-4 flex min-h-[44px] flex-wrap items-center justify-center gap-2",
                          children: [
                            N &&
                              (0, a.jsxs)("div", {
                                className:
                                  "inline-flex items-center gap-2 rounded-full border border-[#d7b068]/50 bg-[#fff5d7] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#8d6537]",
                                children: [
                                  (0, a.jsx)(z.Z, { className: "h-3.5 w-3.5" }),
                                  " Shield Active",
                                ],
                              }),
                            A &&
                              (0, a.jsxs)("div", {
                                className:
                                  "inline-flex items-center gap-2 rounded-full border border-[#d7b068]/50 bg-[#fff0df] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#9b5a31]",
                                children: [
                                  (0, a.jsx)(q.Z, { className: "h-3.5 w-3.5" }),
                                  " Slow Time",
                                ],
                              }),
                            !N &&
                              !A &&
                              (0, a.jsxs)("div", {
                                className:
                                  "inline-flex items-center gap-2 rounded-full border border-[#dfc6a1]/60 bg-[#fff8ee] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#9b7854]",
                                children: [
                                  (0, a.jsx)(Z.Z, { className: "h-3.5 w-3.5" }),
                                  " Catch falling power-ups to gain an edge",
                                ],
                              }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          ref: M,
                          className:
                            "relative mx-auto aspect-[7/8] w-full overflow-hidden rounded-[24px] border border-[#6e4936] bg-[#1f1713] shadow-[0_22px_40px_rgba(47,26,17,0.34)] sm:aspect-[680/420] sm:rounded-[28px]",
                          style: {
                            background:
                              "radial-gradient(circle at 50% 0%, rgba(212,141,89,0.22) 0%, rgba(50,32,24,0) 42%), linear-gradient(180deg, #241915 0%, #17100d 100%)",
                            touchAction: r && !l ? "none" : "auto",
                          },
                          onPointerDown: eQ,
                          onPointerMove: eW,
                          onPointerUp: eO,
                          onPointerCancel: eO,
                          onPointerLeave: eO,
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#ffffff12] to-transparent",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#ffddb21f] to-transparent",
                            }),
                            (0, a.jsx)("svg", {
                              className: "pointer-events-none absolute inset-0",
                              width: "100%",
                              height: "100%",
                              viewBox: "0 0 100 100",
                              preserveAspectRatio: "none",
                              children: I.map((e, t) =>
                                (0, a.jsx)(
                                  "circle",
                                  {
                                    cx: e.x,
                                    cy: e.y,
                                    r: 0.25 * e.radius,
                                    fill: "white",
                                    opacity: e.opacity,
                                  },
                                  t
                                )
                              ),
                            }),
                            !r &&
                              !l &&
                              (0, a.jsxs)("div", {
                                className:
                                  "absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-[#120d0b]/78 px-6 text-center backdrop-blur-sm sm:gap-5",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "font-xcompany text-3xl font-bold text-[#fff7ef] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-4xl md:text-5xl",
                                    children: "Dodge the Asteroids",
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "max-w-md text-sm text-[#f5d8c2]/82 md:text-base",
                                    children:
                                      "Avoid the rocks, grab shield or slow-time power-ups, and keep the snail alive as the asteroid field gets thicker.",
                                  }),
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    onClick: eY,
                                    className:
                                      "punchy-btn rounded-full bg-gradient-to-b from-[#d99868] to-[#b76a45] px-8 py-3.5 text-base font-bold tracking-[0.12em] text-white shadow-[0_8px_18px_rgba(91,49,28,0.35)] sm:px-10 sm:py-4 sm:text-lg",
                                    children: "PLAY",
                                  }),
                                ],
                              }),
                            l &&
                              (0, a.jsxs)("div", {
                                className:
                                  "absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-[#120d0b]/82 px-6 text-center backdrop-blur-md",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "font-xcompany text-4xl font-bold text-[#e08b61] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-5xl md:text-6xl",
                                    children: "GAME OVER",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "text-xl text-[#fff0e3]",
                                    children: [
                                      "Score: ",
                                      (0, a.jsx)("span", {
                                        className: "font-bold text-white",
                                        children: d,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "text-base text-[#f0cbb2]/75",
                                    children: [
                                      "Level reached:",
                                      " ",
                                      (0, a.jsx)("span", {
                                        className: "font-bold text-[#fff8f1]",
                                        children: h,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    onClick: eY,
                                    className:
                                      "punchy-btn mt-2 rounded-full bg-gradient-to-b from-[#d99868] to-[#b76a45] px-9 py-4 text-base font-bold tracking-[0.12em] text-white",
                                    children: "TRY AGAIN",
                                  }),
                                ],
                              }),
                            (0, a.jsx)("div", {
                              className: "pointer-events-none absolute",
                              style: { bottom: 16, left: 0, width: "100%" },
                              children: (0, a.jsxs)("div", {
                                style: {
                                  position: "absolute",
                                  left: "".concat((b / 680) * 100, "%"),
                                  width: "".concat((eC / 680) * 100, "%"),
                                  bottom: 0,
                                },
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "absolute inset-x-[18%] bottom-[6%] h-3 rounded-full bg-[#f8c27d]/30 blur-md",
                                  }),
                                  (0, a.jsx)(x(), {
                                    src: "/images/logo.png",
                                    alt: "Asteroid Snail",
                                    width: eC,
                                    height: eC,
                                    className:
                                      "relative z-10 h-auto w-full object-contain drop-shadow-[0_10px_18px_rgba(211,148,88,0.35)]",
                                  }),
                                ],
                              }),
                            }),
                            y.map((e) =>
                              (0, a.jsx)(
                                "div",
                                {
                                  className: "pointer-events-none absolute",
                                  style: {
                                    left: "".concat((e.x / 680) * 100, "%"),
                                    top: "".concat((e.y / 420) * 100, "%"),
                                    width: "".concat((e.size / 680) * 100, "%"),
                                  },
                                  children: (0, a.jsx)(W, {
                                    kind: e.kind,
                                    size: e.size,
                                    phase: e.phase,
                                  }),
                                },
                                e.id
                              )
                            ),
                            v.map((e) => {
                              let t = e.size * eM;
                              return (0, a.jsx)(
                                "div",
                                {
                                  className: "pointer-events-none absolute",
                                  style: {
                                    left: "".concat((e.x / 680) * 100, "%"),
                                    top: "".concat((e.y / 420) * 100, "%"),
                                    width: "".concat((t / 680) * 100, "%"),
                                  },
                                  children: (0, a.jsx)(Q, {
                                    uid: e.id,
                                    size: t,
                                    rotation: e.rotation,
                                    variantIndex: e.variant,
                                    paletteIndex: e.palette,
                                  }),
                                },
                                e.id
                              );
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 border-t border-white/8 bg-[#120d0b]/66 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f0cbb2]/55",
                              children: "Drag to move | A / D or Arrow keys",
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "mt-4 text-center text-xs uppercase tracking-[0.22em] text-[#9c7a59] md:text-sm",
                          children:
                            "Collision is now tuned to the visible shapes, and shield or slow-time drops can rescue a run.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function $() {
        return (
          (0, s.useEffect)(() => {
            let e = (e) => {
              let t = (e.clientX / window.innerWidth) * 100,
                r = (e.clientY / window.innerHeight) * 100;
              document.documentElement.style.setProperty(
                "--x",
                "".concat(t, "%")
              ),
                document.documentElement.style.setProperty(
                  "--y",
                  "".concat(r, "%")
                );
            };
            return (
              window.addEventListener("mousemove", e),
              () => window.removeEventListener("mousemove", e)
            );
          }, []),
          (0, s.useEffect)(() => {
            let e = Array.from(document.querySelectorAll(".scroll-reveal"));
            if (!e.length) return;
            let t = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting &&
                    (e.target.classList.add("is-visible"),
                    t.unobserve(e.target));
                });
              },
              { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
            );
            return (
              e.forEach((e) => {
                let r = e.getBoundingClientRect();
                r.top < window.innerHeight && r.bottom > 0
                  ? e.classList.add("is-visible")
                  : t.observe(e);
              }),
              () => t.disconnect()
            );
          }, []),
          (0, a.jsx)(p, {
            children: (0, a.jsxs)("main", {
              className: "relative overflow-x-clip",
              children: [
                (0, a.jsx)(w, {}),
                (0, a.jsx)(y, {}),
                (0, a.jsx)(_, {}),
                (0, a.jsx)(E, {}),
                (0, a.jsx)(N, {}),
                (0, a.jsx)(J, {}),
              ],
            }),
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [240, 661, 971, 864, 744], function () {
      return e((e.s = 5580));
    }),
      (_N_E = e.O());
  },
]);
