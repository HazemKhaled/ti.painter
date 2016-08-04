# TiPainter: Advanced Painter Widget [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)

An [Alloy](http://appcelerator.com/alloy) [Widget](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Widgets) wrapping [Literally Canvas](http://literallycanvas.com) the most powerful HTML5 customizable photo editor for Appcelerator Titanium.

## See it

![Screenshots](https://github.com/HazemKhaled/ti.painter/blob/docs/screencasts/1.gif?raw=true)

## Get it [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/ti.painter)

Install via [gitTio](http://gitt.io/component/ti.painter):

```
$ gittio install ti.painter
```

Or download a [release](https://github.com/HazemKhaled/ti.painter/releases), extract it to your app's `app/widgets/ti.painter` folder and add the dependency to your `config.json`:

```json
{
  "dependencies": {
    "ti.painter": "*"
  }
}
```

## Use it

### index.xml

```xml
<Alloy>
  <Window fullscreen="true">
    <Widget id="painter" src="ti.painter" onsave="onSave" backgroundImage="https://scontent-frt3-1.xx.fbcdn.net/t31.0-8/210511_279827368797463_1383240834_o.jpg" />
  </Window>
</Alloy>
```

### index.js

```javascript
$.index.open();

function onSave(e) {

  // Blob data come in e.blob

  // Let's try to save it in cache directory
  var outputFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationCacheDirectory, Math.random() + "_paint.png");

  // Write blob data into the cache file
  outputFile.write(e.blob);

  // Cache file path
  console.log(outputFile.nativePath);
}
```

## iOS Only (till now)

Your help is highly appreciated, max 1 hour to help the community.

## License

```
MIT License

Copyright (c) 2016 Hazem Khaled

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
