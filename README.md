# flickr-justified-layout

Build of the flickr's [justified-layout](https://github.com/flickr/justified-layout) for sharing it as a global window.JLayout



Check out the [demo](http://codepen.io/linuxenko/pen/NNXOJp)
Real world [example](http://codepen.io/linuxenko/pen/xVpeoX)

Use `dist/layout-justify.min.js` or CDN :

```
https://cdn.rawgit.com/15lyfromsaturn/flickr-justified-layout/master/dist/layout-justify.min.js
```

Usage example :

```
 var layout = JLayout([...geometries], config (optional));
 
 for an instance 
 
var layout = JLayout([0.5, 1, 0.4, 1.5, 0.4, 0.7, 0.9, 1.1, 1.4, 1.2, 0.9, 1.2, 0.3]);

layout is an object with containerHeight property and array of boxes.
```
Check the [justified-layout documentation](https://github.com/flickr/justified-layout) for more information.
