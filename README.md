# AnimateScroll

Simple native scrollTo without dependencies.

## Usage

Include in the .html file
```html
<script src="dist/animescroll.js"></script>
```

```javascript
animeScroll(to, duration, cb);
```

Scroll to `[data-id="2"]` elem.
```javascript
animeScroll.to(document.querySelector(`[data-id="2"]`).offsetTop);
```

## Source
[Source](https://gist.github.com/james2doyle/5694700)
