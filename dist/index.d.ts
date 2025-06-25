import React, { ReactNode, JSX, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, ComponentRef } from 'react';

interface TailSafeBase {
    className?: string;
}
type UserAliases = Record<string, string | string[]>;
interface TailSafeConfig {
    aliases?: UserAliases;
    theme?: Record<string, string>;
}
interface TailSafe extends TailSafeBase {
}

interface TailSafeProviderProps {
    children: ReactNode;
    userAliases?: UserAliases;
    debug?: boolean;
}

type TailSafeComponent<T extends keyof JSX.IntrinsicElements> = ForwardRefExoticComponent<PropsWithoutRef<React.ComponentProps<T> & TailSafe> & RefAttributes<ComponentRef<T>>>;
declare const Button: TailSafeComponent<"button">;
declare const Div: TailSafeComponent<"div">;
declare const Span: TailSafeComponent<"span">;
declare const A: TailSafeComponent<"a">;
declare const Abbr: TailSafeComponent<"abbr">;
declare const Address: TailSafeComponent<"address">;
declare const Area: TailSafeComponent<"area">;
declare const Article: TailSafeComponent<"article">;
declare const Aside: TailSafeComponent<"aside">;
declare const Audio: TailSafeComponent<"audio">;
declare const B: TailSafeComponent<"b">;
declare const Base: TailSafeComponent<"base">;
declare const Bdi: TailSafeComponent<"bdi">;
declare const Bdo: TailSafeComponent<"bdo">;
declare const Big: TailSafeComponent<"big">;
declare const Blockquote: TailSafeComponent<"blockquote">;
declare const Body: TailSafeComponent<"body">;
declare const Br: TailSafeComponent<"br">;
declare const Canvas: TailSafeComponent<"canvas">;
declare const Caption: TailSafeComponent<"caption">;
declare const Cite: TailSafeComponent<"cite">;
declare const Code: TailSafeComponent<"code">;
declare const Col: TailSafeComponent<"col">;
declare const Colgroup: TailSafeComponent<"colgroup">;
declare const Data: TailSafeComponent<"data">;
declare const Datalist: TailSafeComponent<"datalist">;
declare const Dd: TailSafeComponent<"dd">;
declare const Del: TailSafeComponent<"del">;
declare const Details: TailSafeComponent<"details">;
declare const Dfn: TailSafeComponent<"dfn">;
declare const Dialog: TailSafeComponent<"dialog">;
declare const Dl: TailSafeComponent<"dl">;
declare const Dt: TailSafeComponent<"dt">;
declare const Em: TailSafeComponent<"em">;
declare const Embed: TailSafeComponent<"embed">;
declare const Fieldset: TailSafeComponent<"fieldset">;
declare const Figcaption: TailSafeComponent<"figcaption">;
declare const Figure: TailSafeComponent<"figure">;
declare const Footer: TailSafeComponent<"footer">;
declare const Form: TailSafeComponent<"form">;
declare const H1: TailSafeComponent<"h1">;
declare const H2: TailSafeComponent<"h2">;
declare const H3: TailSafeComponent<"h3">;
declare const H4: TailSafeComponent<"h4">;
declare const H5: TailSafeComponent<"h5">;
declare const H6: TailSafeComponent<"h6">;
declare const Head: TailSafeComponent<"head">;
declare const Header: TailSafeComponent<"header">;
declare const Hgroup: TailSafeComponent<"hgroup">;
declare const Hr: TailSafeComponent<"hr">;
declare const Html: TailSafeComponent<"html">;
declare const I: TailSafeComponent<"i">;
declare const Iframe: TailSafeComponent<"iframe">;
declare const Img: TailSafeComponent<"img">;
declare const Input: TailSafeComponent<"input">;
declare const Ins: TailSafeComponent<"ins">;
declare const Kbd: TailSafeComponent<"kbd">;
declare const Keygen: TailSafeComponent<"keygen">;
declare const Label: TailSafeComponent<"label">;
declare const Legend: TailSafeComponent<"legend">;
declare const Li: TailSafeComponent<"li">;
declare const Link: TailSafeComponent<"link">;
declare const Main: TailSafeComponent<"main">;
declare const Map: TailSafeComponent<"map">;
declare const Mark: TailSafeComponent<"mark">;
declare const Menu: TailSafeComponent<"menu">;
declare const Menuitem: TailSafeComponent<"menuitem">;
declare const Meta: TailSafeComponent<"meta">;
declare const Meter: TailSafeComponent<"meter">;
declare const Nav: TailSafeComponent<"nav">;
declare const Noscript: TailSafeComponent<"noscript">;
declare const Object$1: TailSafeComponent<"object">;
declare const Ol: TailSafeComponent<"ol">;
declare const Optgroup: TailSafeComponent<"optgroup">;
declare const Option: TailSafeComponent<"option">;
declare const Output: TailSafeComponent<"output">;
declare const P: TailSafeComponent<"p">;
declare const Param: TailSafeComponent<"param">;
declare const Picture: TailSafeComponent<"picture">;
declare const Pre: TailSafeComponent<"pre">;
declare const Progress: TailSafeComponent<"progress">;
declare const Q: TailSafeComponent<"q">;
declare const Rp: TailSafeComponent<"rp">;
declare const Rt: TailSafeComponent<"rt">;
declare const Ruby: TailSafeComponent<"ruby">;
declare const S: TailSafeComponent<"s">;
declare const Samp: TailSafeComponent<"samp">;
declare const Script: TailSafeComponent<"script">;
declare const Section: TailSafeComponent<"section">;
declare const Select: TailSafeComponent<"select">;
declare const Small: TailSafeComponent<"small">;
declare const Source: TailSafeComponent<"source">;
declare const Strong: TailSafeComponent<"strong">;
declare const Style: TailSafeComponent<"style">;
declare const Sub: TailSafeComponent<"sub">;
declare const Summary: TailSafeComponent<"summary">;
declare const Sup: TailSafeComponent<"sup">;
declare const Table: TailSafeComponent<"table">;
declare const Tbody: TailSafeComponent<"tbody">;
declare const Td: TailSafeComponent<"td">;
declare const Textarea: TailSafeComponent<"textarea">;
declare const Tfoot: TailSafeComponent<"tfoot">;
declare const Th: TailSafeComponent<"th">;
declare const Thead: TailSafeComponent<"thead">;
declare const Time: TailSafeComponent<"time">;
declare const Title: TailSafeComponent<"title">;
declare const Tr: TailSafeComponent<"tr">;
declare const Track: TailSafeComponent<"track">;
declare const U: TailSafeComponent<"u">;
declare const Ul: TailSafeComponent<"ul">;
declare const Var: TailSafeComponent<"var">;
declare const Video: TailSafeComponent<"video">;
declare const Wbr: TailSafeComponent<"wbr">;

declare function withTailSafe<P extends object, R = unknown>(Component: React.ComponentType<P>): React.ForwardRefExoticComponent<React.PropsWithoutRef<P & Partial<TailSafe>> & React.RefAttributes<R>>;

declare const AutoTailSafeProvider: React.FC<TailSafeProviderProps>;

export { A, Abbr, Address, Area, Article, Aside, Audio, AutoTailSafeProvider, B, Base, Bdi, Bdo, Big, Blockquote, Body, Br, Button, Canvas, Caption, Cite, Code, Col, Colgroup, Data, Datalist, Dd, Del, Details, Dfn, Dialog, Div, Dl, Dt, Em, Embed, Fieldset, Figcaption, Figure, Footer, Form, H1, H2, H3, H4, H5, H6, Head, Header, Hgroup, Hr, Html, I, Iframe, Img, Input, Ins, Kbd, Keygen, Label, Legend, Li, Link, Main, Map, Mark, Menu, Menuitem, Meta, Meter, Nav, Noscript, Object$1 as Object, Ol, Optgroup, Option, Output, P, Param, Picture, Pre, Progress, Q, Rp, Rt, Ruby, S, Samp, Script, Section, Select, Small, Source, Span, Strong, Style, Sub, Summary, Sup, Table, type TailSafe, type TailSafeConfig, type TailSafeProviderProps, Tbody, Td, Textarea, Tfoot, Th, Thead, Time, Title, Tr, Track, U, Ul, Var, Video, Wbr, withTailSafe };
