# be-summoning

[![Playwright Tests](https://github.com/bahrus/be-summoning/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/be-summoning/actions/workflows/CI.yml)

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-summoning?style=for-the-badge)](https://bundlephobia.com/result?p=be-summoning)

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-summoning?compression=gzip">

<a href="https://nodei.co/npm/be-summoning/"><img src="https://nodei.co/npm/be-summoning.png"></a>

be-summoning summons all child elements matching an attribute value.

Example 1

```html
<div be-summoning itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>Director:
    <span itemprop="director">James Cameron</span>
    (born August 16, 1954)</span>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">
    Trailer
  </a>
   <span slot="my-text">Let's have some different text!</span>
</div>    

```


What this does:


oDiv.beDecorated.$.itemprops.director returns:

```html
<span itemprop="director">James Cameron</span>
```

oDiv.beDecorated.$.slots.myText returns:

```html
<span slot="my-text">Let's have some different text!</span>
```

oDiv.beDecorated.$.itemprops.['*'] returns array of all elements with attribute itemprop 


