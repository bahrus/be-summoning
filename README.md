# be-summoning

Example 1

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>Director:
    <span itemprop="director">James Cameron</span>
    (born August 16, 1954)</span>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">
    Trailer
  </a>
  <script be-summoning='itemprop'></script>
</div>    

```

is shorthand for:

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>Director:
    <span itemprop="director">James Cameron</span>
    (born August 16, 1954)</span>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">
    Trailer
  </a>
  <script be-summoning='{
    "for": "[itemprop]",
    "as": "itemprops"
    "beVigilant": false,
    "mutationObserverOptions": {
        "childList": true //only applicable if beVigilant is true
    }
  }'>
</div>
```

What this does:

1.  Creates a proxy, which does a querySelectorAll for the value of the attribute.
2.  Location of proxy:  oDiv.beDecorated.summoning.itemprops

so oDiv.beDecorated.summoning.itemprops.director returns:

```html
<span itemprop="director">James Cameron</span>
```

Example 2

```html
<my-paragraph>
  <div itemscope itemtype="http://schema.org/Movie">
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
  <script be-summoning='["slot", "itemprop"]'>
</my-paragraph>
```

Creates two proxies, so:

myParagraphInstance.beDecorated.summoning.itemprops.director continues to return:

```html
<span itemprop="director">James Cameron</span>
```

But also:

myParagraphInstance.beDecorated.summoning.slots.myText returns:

```html
<span slot="my-text">Let's have some different text!</span>
```


