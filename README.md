Helper functions for Javascript
======
- [hjs.each](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.each)
- [isArray](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.isArray)
- [isDefined](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.isdefined)
- [isEmpty](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.isempty)
- [isFloat](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.isFloat)
- [isFunc](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.isfunc)
- [isInt](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.isint)
- [isNull](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.isnull)
- [isNumber](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.isnumber)
- [isObject](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.isobject)
- [isScalar](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.isscalar)
- [isString](https://github.com/olaferlandsen/Helper-function-for-Javascript/wiki/hjs.isstring)


¿How to use?
====
```html
<html>
    <head>
        <title></title>
        <script src="hjs.min.js"></script>
        <script>
        var a;
        var b = true;
        var c = "hello";
        var d = 1;
        var e = 0.5;
        var f = function () {
        };
        var g = {
            a : 1
        };
        var h = null;
        var i = [];
        
        console.log ('a', hjs.isEmpty(a));
        console.log ('b', hjs.isBoolean(b));
        console.log ('c', hjs.isString(c));
        console.log ('d', hjs.isNumber(d));
        console.log ('e', hjs.isFloat(e));
        console.log ('f', hjs.isFunc(f));
        console.log ('g', hjs.isObject(g));
        console.log ('h', hjs.isObject(h));
        console.log ('i', hjs.isObject(i));
        </script>
    </head>
    <body>
    </body>
    </html>
```
