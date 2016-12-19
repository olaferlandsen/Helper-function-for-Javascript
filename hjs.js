(function () {
    var hjs = function (obj) {
        if (obj instanceof hjs) return obj;
        if (!(this instanceof hjs)) return new hjs(obj);
    };
    /**
    *
    */
    hjs.isCallback  = hjs.isFunction= function(value){
        return value instanceof Function || typeof value === 'function'
    };
    /**
    *
    */
    hjs.isInt       = hjs.isInteger = function (value, strict) {
        if (strict === true && typeof value !== 'number') return false;
        return Number(value) === value && value % 1 === 0;
    };
    /**
    *
    */
    hjs.isFloat     = hjs.isDouble  = function(value, strict){
        if (strict === true && typeof value !== 'number') return false;
        return Number(value) === value && value % 1 !== 0;
    };
    /**
    *
    */
    hjs.isString  = function(value){
        return typeof value == 'string';
    };
    /**
    *
    */
    hjs.isNumber    = function(value, strict){
        if(strict === true && typeof value != 'number') return false;
        return hjs.isInteger(value) || hjs.isFloat(value)
    };
    /**
    *
    */
    hjs.isBoolean = function(value, strict){
        if(strict === true) return value === true || value === false;
        return (value === true || value === false) || (value === 1 || value === 0);
    };
    /**
    *
    */
    hjs.isArray     = function(value){
        return null != value && toString.call(value) === '[object Array]';
    };
    /**
    *
    */
    hjs.isObject    = function(value){
        return null != value && toString.call(value) === '[object Object]';
    };
    /**
    *
    */
    hjs.isNull      = function(value){
        return null === value;
    };
    /**
    *
    */
    hjs.isUndefined = function(value, strict) {
        if (strict === true && value === undefined) return true;
        return undefined == value;
    }
    /**
    *
    */
    hjs.isEmptyObject = function(value) {
        if (!hjs.isObject(value)) throw new Error('hjs.isEmptyObject: requiere Object');
        return Object.keys(value).length === 0 && value.constructor === Object;
    };
    /**
    *
    */
    hjs.isEmpty     = hjs.isVoid    = function (value) {
        if (hjs.isArray(value) || hjs.isString(value)) return (value.length > 0);
        else if (hjs.isNull(value) || hjs.isUndefined(value, true)) return true;
        else if (typeof value === 'number' && value === 0) return true;
        else if (hjs.isObject(value) && hjs.isEmptyObject(value)) return true;
        else if (value === false) return true;
        return false;
    };
    /**
    *
    */
    hjs.isScalar    = function(value){
        return hjs.isString(value) || hjs.isBoolean(value) || hjs.isNumber(value);
    };
    /**
    *
    */
    hjs.isDefined   = function (varname){
        return window.hasOwnProperty(varname);
    };
    /**
    *
    */
    hjs.isRegexp = function(value) {
        return value instanceof RegExp;
    }
    /**
    *
    */
    hjs.forEach     = function(elements, callback){
        if (!hjs.isFunction(callback)) throw new Error ('hjs.forEach: require a callback function');
        if (hjs.isObject(elements)) {
            var _elements = {};
            for (property in elements) _elements[property] = callback(property, elements[property]);
        }
        else if(hjs.isArray(elements)) {
            var _elements = [];
            for (var index = 0; index < elements.length; index++) _elements[index] = callback(index, elements[index]);
        }
        return _elements;
    };
    /**
    *
    */
    hjs.shuffle = function (value) {
        let counter = value.length;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            let temp = value[counter];
            value[counter] = value[index];
            value[index] = temp;
        }
        return value;
    };
    /**
    *
    */
    window.hjs = hjs;
}.call(window))
