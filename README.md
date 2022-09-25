# be-summoning

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


oDiv.beDecorated.summoning.for.itemprops.director returns:
oDiv.beDecorated.summoning.for.slots.myText returns:

```html
<span slot="my-text">Let's have some different text!</span>
```


