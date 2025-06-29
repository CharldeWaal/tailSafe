"use client";

import React, { ComponentRef, ForwardRefExoticComponent, JSX, PropsWithoutRef, RefAttributes } from "react";
import { useTailSafe } from "../../hooks";
import { TailSafe } from '../../types';
import { filterDomProps } from "../../utils";

type TailSafeComponent<T extends keyof JSX.IntrinsicElements> = ForwardRefExoticComponent<
  PropsWithoutRef<React.ComponentProps<T> & TailSafe> & RefAttributes<ComponentRef<T>>
>;

const createTailSafeHtmlElement = <T extends keyof JSX.IntrinsicElements>(
  element: T,
): TailSafeComponent<T> => {
  const Component = React.forwardRef<
    ComponentRef<T>,
    React.ComponentProps<T> & TailSafe
  >((props, ref) => {
    const { transformProps, userAliases = {} } = useTailSafe();
    // transformProps returns all original props, plus 'className'
    const { className, ...rest } = transformProps(props);

    // Filter out tailSafe props and user aliases - these should not be passed to the dom
    const domProps = filterDomProps(rest, userAliases);

    const Element = element as React.ElementType;

    return (
      <Element ref={ref} {...domProps} className={className}>
        {props.children}
      </Element>
    );
  });

  Component.displayName = `TailSafe${element.charAt(0).toUpperCase() + element.slice(1)}`;

  return Component;
};

// Pre-built intrinsic elements
export const Button = createTailSafeHtmlElement('button');
export const Div = createTailSafeHtmlElement('div');
export const Span = createTailSafeHtmlElement('span');
export const A = createTailSafeHtmlElement('a');
export const Abbr = createTailSafeHtmlElement('abbr');
export const Address = createTailSafeHtmlElement('address');
export const Area = createTailSafeHtmlElement('area');
export const Article = createTailSafeHtmlElement('article');
export const Aside = createTailSafeHtmlElement('aside');
export const Audio = createTailSafeHtmlElement('audio');
export const B = createTailSafeHtmlElement('b');
export const Base = createTailSafeHtmlElement('base');
export const Bdi = createTailSafeHtmlElement('bdi');
export const Bdo = createTailSafeHtmlElement('bdo');
export const Big = createTailSafeHtmlElement('big');
export const Blockquote = createTailSafeHtmlElement('blockquote');
export const Body = createTailSafeHtmlElement('body');
export const Br = createTailSafeHtmlElement('br');
export const Canvas = createTailSafeHtmlElement('canvas');
export const Caption = createTailSafeHtmlElement('caption');
export const Cite = createTailSafeHtmlElement('cite');
export const Code = createTailSafeHtmlElement('code');
export const Col = createTailSafeHtmlElement('col');
export const Colgroup = createTailSafeHtmlElement('colgroup');
export const Data = createTailSafeHtmlElement('data');
export const Datalist = createTailSafeHtmlElement('datalist');
export const Dd = createTailSafeHtmlElement('dd');
export const Del = createTailSafeHtmlElement('del');
export const Details = createTailSafeHtmlElement('details');
export const Dfn = createTailSafeHtmlElement('dfn');
export const Dialog = createTailSafeHtmlElement('dialog');
export const Dl = createTailSafeHtmlElement('dl');
export const Dt = createTailSafeHtmlElement('dt');
export const Em = createTailSafeHtmlElement('em');
export const Embed = createTailSafeHtmlElement('embed');
export const Fieldset = createTailSafeHtmlElement('fieldset');
export const Figcaption = createTailSafeHtmlElement('figcaption');
export const Figure = createTailSafeHtmlElement('figure');
export const Footer = createTailSafeHtmlElement('footer');
export const Form = createTailSafeHtmlElement('form');
export const H1 = createTailSafeHtmlElement('h1');
export const H2 = createTailSafeHtmlElement('h2');
export const H3 = createTailSafeHtmlElement('h3');
export const H4 = createTailSafeHtmlElement('h4');
export const H5 = createTailSafeHtmlElement('h5');
export const H6 = createTailSafeHtmlElement('h6');
export const Head = createTailSafeHtmlElement('head');
export const Header = createTailSafeHtmlElement('header');
export const Hgroup = createTailSafeHtmlElement('hgroup');
export const Hr = createTailSafeHtmlElement('hr');
export const Html = createTailSafeHtmlElement('html');
export const I = createTailSafeHtmlElement('i');
export const Iframe = createTailSafeHtmlElement('iframe');
export const Img = createTailSafeHtmlElement('img');
export const Input = createTailSafeHtmlElement('input');
export const Ins = createTailSafeHtmlElement('ins');
export const Kbd = createTailSafeHtmlElement('kbd');
export const Keygen = createTailSafeHtmlElement('keygen');
export const Label = createTailSafeHtmlElement('label');
export const Legend = createTailSafeHtmlElement('legend');
export const Li = createTailSafeHtmlElement('li');
export const Link = createTailSafeHtmlElement('link');
export const Main = createTailSafeHtmlElement('main');
export const Map = createTailSafeHtmlElement('map');
export const Mark = createTailSafeHtmlElement('mark');
export const Menu = createTailSafeHtmlElement('menu');
export const Menuitem = createTailSafeHtmlElement('menuitem');
export const Meta = createTailSafeHtmlElement('meta');
export const Meter = createTailSafeHtmlElement('meter');
export const Nav = createTailSafeHtmlElement('nav');
export const Noscript = createTailSafeHtmlElement('noscript');
export const Object = createTailSafeHtmlElement('object');
export const Ol = createTailSafeHtmlElement('ol');
export const Optgroup = createTailSafeHtmlElement('optgroup');
export const Option = createTailSafeHtmlElement('option');
export const Output = createTailSafeHtmlElement('output');
export const P = createTailSafeHtmlElement('p');
export const Param = createTailSafeHtmlElement('param');
export const Picture = createTailSafeHtmlElement('picture');
export const Pre = createTailSafeHtmlElement('pre');
export const Progress = createTailSafeHtmlElement('progress');
export const Q = createTailSafeHtmlElement('q');
export const Rp = createTailSafeHtmlElement('rp');
export const Rt = createTailSafeHtmlElement('rt');
export const Ruby = createTailSafeHtmlElement('ruby');
export const S = createTailSafeHtmlElement('s');
export const Samp = createTailSafeHtmlElement('samp');
export const Script = createTailSafeHtmlElement('script');
export const Section = createTailSafeHtmlElement('section');
export const Select = createTailSafeHtmlElement('select');
export const Small = createTailSafeHtmlElement('small');
export const Source = createTailSafeHtmlElement('source');
export const Strong = createTailSafeHtmlElement('strong');
export const Style = createTailSafeHtmlElement('style');
export const Sub = createTailSafeHtmlElement('sub');
export const Summary = createTailSafeHtmlElement('summary');
export const Sup = createTailSafeHtmlElement('sup');
export const Table = createTailSafeHtmlElement('table');
export const Tbody = createTailSafeHtmlElement('tbody');
export const Td = createTailSafeHtmlElement('td');
export const Textarea = createTailSafeHtmlElement('textarea');
export const Tfoot = createTailSafeHtmlElement('tfoot');
export const Th = createTailSafeHtmlElement('th');
export const Thead = createTailSafeHtmlElement('thead');
export const Time = createTailSafeHtmlElement('time');
export const Title = createTailSafeHtmlElement('title');
export const Tr = createTailSafeHtmlElement('tr');
export const Track = createTailSafeHtmlElement('track');
export const U = createTailSafeHtmlElement('u');
export const Ul = createTailSafeHtmlElement('ul');
export const Var = createTailSafeHtmlElement('var');
export const Video = createTailSafeHtmlElement('video');
export const Wbr = createTailSafeHtmlElement('wbr');

export default createTailSafeHtmlElement;