var S = Object.defineProperty,
    L = Object.defineProperties;
var G = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty,
    z = Object.prototype.propertyIsEnumerable;
var C = (e, t, n) => t in e ? S(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    h = (e, t) => {
        for (var n in t || (t = {}))
            A.call(t, n) && C(e, n, t[n]);
        if (k)
            for (var n of k(t))
                z.call(t, n) && C(e, n, t[n]);
        return e
    },
    m = (e, t) => L(e, G(t));
import { j as w, r as d, e as j, R as P, a as T } from "./vendor.dc3389bc.js";
const _ = function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        l(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const c of s.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && l(c)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity), o.referrerpolicy && (s.referrerPolicy = o.referrerpolicy), o.crossorigin === "use-credentials" ? s.credentials = "include" : o.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }
    function l(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
};
_();
const r = w.exports.jsx,
    a = w.exports.jsxs,
    R = w.exports.Fragment,
    N = d.exports.createContext({
        theme: "dark",
        toggleTheme: () => {}
    }),
    B = ({children: e}) => {
        const [t, n] = d.exports.useState(D());
        d.exports.useEffect(() => H(t), [t]);
        const l = () => n(t === "dark" ? "light" : "dark");
        return r(N.Provider, {
            value: {
                theme: t,
                toggleTheme: l
            },
            children: e
        })
    };
function W() {
    return d.exports.useContext(N)
}
function D() {
    return localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}
function H(e) {
    localStorage.theme = e,
    e === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
}
var g = (e => (e.MISPLACED = "M", e.WRONG = "W", e.OK = "O", e))(g || {});
function U(e, t) {
    const n = F(t),
        l = Array.from({
            length: t.length
        });
    return e.forEach((o, s) => {
        t[s] === o && (l[s] = "O", n[o]--)
    }), l.map((o, s) => {
        if (o)
            return o;
        const c = e[s];
        return n[c] ? (n[c]--, "M") : "W"
    })
}
function F(e) {
    return e.reduce((t, n) => (n in t ? t[n]++ : t[n] = 1, t), {})
}
function K(e, t) {
    const n = [];
    if (!t.length)
        return n;
    for (let l = 0; l < e; l++) {
        const o = V(0, t.length - 1);
        n.push(t[o])
    }
    return n
}
function V(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
}
const v = 8,
    x = 4,
    b = {
        "1": "#e11d48",
        "2": "#3b82f6",
        "3": "#22c55e",
        "4": "#f97316",
        "5": "#7c3aed",
        "6": "#92400e",
        "7": "#94a3b8",
        "8": "#d946ef",
        "9": "#fbbf24"
    },
    O = d.exports.createContext({
        game: {},
        dispatch: () => null
    }),
    q = ({children: e}) => {
        const [t, n] = j(X, E());
        return r(O.Provider, {
            value: {
                game: t,
                dispatch: n
            },
            children: e
        })
    };
function M() {
    return d.exports.useContext(O)
}
function X(e, t) {
    switch (t.type) {
    case "NEW_GAME":
        return E();
    case "UPDATE_ROW_GUESS":
        {
            const {guessIndex: n, guess: l} = t.payload;
            return e.rows[e.currentRowIndex].guesses[n] = l, e
        }case "CHECK_CURRENT_ROW":
        {
            const n = U(e.rows[e.currentRowIndex].guesses, e.answer);
            return e.rows[e.currentRowIndex].hints = n, e.currentRowIndex++, e
        }
    }
}
function E() {
    return {
        currentRowIndex: 0,
        rows: Z(v, x),
        answer: K(x, Object.keys(b))
    }
}
function Z(e, t) {
    return Array.from({
        length: e
    }, () => ({
        guesses: Array.from({
            length: t
        }, () => null),
        hints: Array.from({
            length: t
        })
    }))
}
function $(e) {
    return r("svg", m(h({
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24"
    }, e), {
        children: r("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79c-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67c.32-.89 1.27-1.5 2.3-1.28c.95.2 1.65 1.13 1.57 2.1c-.1 1.34-1.62 1.63-2.45 2.88c0 .01-.01.01-.01.02c-.01.02-.02.03-.03.05c-.09.15-.18.32-.25.5c-.01.03-.03.05-.04.08c-.01.02-.01.04-.02.07c-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07c.02-.03.03-.06.05-.09c.08-.14.18-.27.28-.39c.01-.01.02-.03.03-.04c.1-.12.21-.23.33-.34c.96-.91 2.26-1.65 1.99-3.56c-.24-1.74-1.61-3.21-3.35-3.47z",
            fill: "currentColor"
        })
    }))
}
function J(e) {
    return r("svg", m(h({
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24"
    }, e), {
        children: r("path", {
            d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z",
            fill: "currentColor"
        })
    }))
}
function Q(e) {
    return r("svg", m(h({
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24"
    }, e), {
        children: r("path", {
            d: "M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z",
            fill: "currentColor"
        })
    }))
}
function Y(e) {
    return r("svg", m(h({
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24"
    }, e), {
        children: r("path", {
            d: "M12 5V2.21c0-.45-.54-.67-.85-.35l-3.8 3.79c-.2.2-.2.51 0 .71l3.79 3.79c.32.31.86.09.86-.36V7c3.73 0 6.68 3.42 5.86 7.29c-.47 2.27-2.31 4.1-4.57 4.57c-3.57.75-6.75-1.7-7.23-5.01a1 1 0 0 0-.98-.85c-.6 0-1.08.53-1 1.13c.62 4.39 4.8 7.64 9.53 6.72c3.12-.61 5.63-3.12 6.24-6.24C20.84 9.48 16.94 5 12 5z",
            fill: "currentColor"
        })
    }))
}
const p = ({title: e, onClick: t, children: n}) => r("button", {
        className: "text-2xl hover:opacity-70",
        title: e,
        onClick: t,
        children: n
    }),
    ee = () => a(R, {
        children: [r("h3", {
            className: "font-medium",
            children: "Objective"
        }), a("p", {
            children: ["A secret combination of ", x, " colors is selected and you have to guess that combination in ", v, " or fewer tries to win."]
        }), r("h3", {
            className: "font-medium mt-2",
            children: "How to play"
        }), r("p", {
            children: "From top to bottom, at each row, click on a circle and pick a color. After filling all circles in a row, you can check your guess."
        }), a("ul", {
            className: "list-disc list-inside my-2",
            children: [r("li", {
                children: "A green circle means the color and the position is correct."
            }), r("li", {
                children: "An orange circle means that the color exists in the combination but the position is not correct."
            }), r("li", {
                children: "An empty circle means that color is not in the combination at all."
            })]
        })]
    });
function te(e) {
    return r("svg", m(h({
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24"
    }, e), {
        children: r("path", {
            d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
            fill: "currentColor"
        })
    }))
}
const re = ({title: e, isOpen: t=!1, onClose: n, children: l}) => t ? a("div", {
        className: "absolute z-50 top-16 max-w-sm bg-white dark:bg-slate-900 rounded-lg shadow-lg py-2 px-4 border-2 dark:border-slate-700",
        children: [a("div", {
            className: "flex justify-between items-center mb-3",
            children: [r("h2", {
                className: "font-bold",
                children: e
            }), r(p, {
                title: "Close",
                onClick: n,
                children: r(te, {})
            })]
        }), l]
    }) : null,
    ne = () => {
        const {dispatch: e} = M(),
            {theme: t, toggleTheme: n} = W(),
            [l, o] = d.exports.useState(!1);
        function s() {
            o(c => !c)
        }
        return a(R, {
            children: [a("header", {
                className: "flex justify-between items-center border-b-2 border-slate-300 dark:border-slate-600 py-3 mb-6 px-2 sm:px-0",
                children: [r("h1", {
                    className: "text-xl font-bold",
                    children: "Mastermind"
                }), a("div", {
                    className: "flex gap-3",
                    children: [r(p, {
                        title: "New Game",
                        onClick: () => e({
                            type: "NEW_GAME"
                        }),
                        children: r(Y, {})
                    }), r(p, {
                        title: "Toggle Theme",
                        onClick: n,
                        children: t === "dark" ? r(Q, {}) : r(J, {})
                    }), r(p, {
                        title: "Game Rules",
                        onClick: s,
                        children: r($, {})
                    })]
                })]
            }), r(re, {
                title: "Game Rules",
                isOpen: l,
                onClose: s,
                children: r(ee, {})
            })]
        })
    },
    oe = Object.keys(b),
    se = ({onClick: e}) => a("div", {
        className: "absolute z-10 w-28 top-full mt-1 left-1/2 -translate-x-1/2 flex flex-wrap bg-slate-800 border-2 border-slate-700 rounded-xl shadow-lg",
        children: [r("div", {
            className: "absolute -top-3 left-1/2 -translate-x-1/2 w-4 overflow-hidden inline-block",
            children: r("div", {
                className: "h-3 w-3 bg-slate-700 rotate-45 transform origin-bottom-left"
            })
        }), oe.map(t => r("div", {
            className: "w-1/3 p-2 flex items-center justify-center",
            children: r("button", {
                style: {
                    backgroundColor: b[t]
                },
                className: "w-5 h-5 border border-slate-600 rounded-full hover:opacity-80",
                onClick: () => e(t)
            })
        }, t))]
    }),
    le = ({guesses: e, isActive: t, onGuessClick: n}) => {
        const [l, o] = d.exports.useState(-1);
        function s(c) {
            o(l === c ? -1 : c)
        }
        return r("div", {
            className: "flex justify-between items-center flex-1",
            children: e.map((c, u) => a("div", {
                className: "relative",
                children: [r("button", {
                    className: `w-9 h-9 rounded-full border-4 border-slate-900 dark:border-slate-700 ${!c && t ? "hover:bg-slate-200 dark:hover:bg-slate-800" : ""}`,
                    style: {
                        backgroundColor: c ? b[c] : ""
                    },
                    onClick: () => s(u),
                    disabled: !t
                }), t && l === u && r(se, {
                    onClick: i => {
                        n(u, i),
                        o(-1)
                    }
                })]
            }, u))
        })
    },
    ce = ({hints: e, showCheck: t, canCheck: n, onCheckClick: l}) => r("div", {
        className: "flex justify-between items-center w-20 sm:w-24",
        children: t ? r("button", {
            disabled: !n,
            className: ["font-bold border-2 border-slate-900 dark:border-slate-600 text-slate-900 dark:text-slate-500 rounded-full py-1 w-full", "hover:bg-slate-900 dark:hover:bg-slate-200 hover:text-white dark:hover:text-slate-700", "disabled:hover:text-slate-900 disabled:hover:bg-transparent disabled:opacity-50 dark:disabled:opacity-40 disabled:cursor-not-allowed", "dark:disabled:hover:text-slate-500 dark:disabled:hover:bg-transparent"].join(" "),
            onClick: l,
            children: "Check"
        }) : e.map((o, s) => r(ae, {
            hint: o
        }, s))
    }),
    ae = ({hint: e}) => r("div", {
        className: "w-4 h-4 rounded-full border-2 border-slate-900 dark:border-slate-700 " + (e === g.OK ? "bg-green-600" : e === g.MISPLACED ? "bg-orange-400" : "")
    }),
    ie = () => {
        var u;
        const {game: e, dispatch: t} = M(),
            n = (i, f) => {
                t({
                    type: "UPDATE_ROW_GUESS",
                    payload: {
                        guessIndex: i,
                        guess: f
                    }
                })
            },
            l = () => {
                t({
                    type: "CHECK_CURRENT_ROW"
                })
            },
            o = (u = e.rows[e.currentRowIndex - 1]) == null ? void 0 : u.hints.every(i => i === g.OK),
            s = e.currentRowIndex > v - 1,
            c = o ? "win" : s ? "loose" : "playing";
        return a("div", {
            className: "px-2 sm:px-0",
            children: [c !== "playing" ? r(de, {
                isWin: c === "win"
            }) : null, e.rows.map((i, f) => {
                const y = c === "playing" && e.currentRowIndex === f,
                    I = i.guesses.every(Boolean) && !i.hints.every(Boolean);
                return a("div", {
                    className: "flex justify-between gap-4 sm:gap-10 py-2",
                    children: [r(le, {
                        isActive: y,
                        guesses: i.guesses,
                        onGuessClick: n
                    }), r(ce, {
                        hints: i.hints,
                        canCheck: I,
                        showCheck: y,
                        onCheckClick: l
                    })]
                }, f)
            })]
        })
    },
    de = ({isWin: e}) => a("div", {
        className: "bg-gray-800 dark:bg-slate-600 text-white mb-4 py-3 rounded-lg w-full h-full flex flex-col justify-center items-center text-center",
        children: [r("p", {
            className: "text-3xl mb-2",
            children: e ? "\u{1F389}" : "\u2639"
        }), r("h3", {
            className: "text-xl font-bold",
            children: e ? "Hoooooray" : "Game Over"
        })]
    });
function ue() {
    return r("main", {
        className: "max-w-sm mx-auto",
        children: r(B, {
            children: a(q, {
                children: [r(ne, {}), r(ie, {})]
            })
        })
    })
}
P.render(r(T.StrictMode, {
    children: r(ue, {})
}), document.getElementById("root"));
