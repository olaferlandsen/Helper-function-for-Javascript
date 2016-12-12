Helper functions for Javascript
======
- [isString](#hjsisstring)
- [isInt](#hjsisint)
- [isFloat](#hjsisfloat)
- [isNumber](#hjsisnumber)
- [isObject](#hjsisobject)
- [isArray](#hjsisarray)
- [isNull](#hjsisnull)

## Data type evaluation:

### **hjs.isString**
##### API
> hjs.isString( `mixed` value )

##### **Arguments**
- `value` - Is required and accept mixed values to evaluate.

##### **Return**
This function return `true` if value is a `string` or `false` if is not a `string`.
##### **Examples**

    hjs.isString("Hello") // return true



### **hjs.isArray**
##### API
> hjs.isArray( `mixed` value )

##### **Arguments**
- `value` - Is required and accept mixed values to evaluate.

##### **Return**
This function return `true` if value is a `array` or `false` if is not a `array`.
##### **Examples**

    hjs.isArray([1,2,3,4,5,6,7,8,9,0]) // return true
    


### hjs.isInt
##### API
> hjs.isInt( `mixed` value [, strict = false ] )

##### **Arguments**
- `value` - Is required and accept mixed values to evaluate.
- `strict` - Optional. If this argument is `true`, then evaluate data type.

##### **Return**
This function return `true` if value is a `integer` or `false` if is not a `integer`.
> If `strict` is true, then evaluate data type.
##### **Examples**

    hjs.isInt(1)            // return true
    hjs.isInt(1.2)          // return false
    hjs.isInt("1.2")        // return true
    hjs.isInt("1.2", true)  // return false


### hjs.isFloat

##### API
> hjs.isFloat( `mixed` value [, strict = false ] )

##### **Arguments**
- `value` - Is required and accept mixed values to evaluate.
- `strict` - Optional. If this argument is `true`, then evaluate data type.

##### **Return**
This function return `true` if value is a `float` or `false` if is not a `float`.
> If `strict` is true, then evaluate data type.
##### **Examples**

    hjs.isFloat(1)            // return false
    hjs.isFloat(1.2)          // return true
    hjs.isFloat("1.2")        // return true
    hjs.isFloat("1.2", true)  // return false
    
    
    
### hjs.isNumber

##### API
> hjs.isNumber( `mixed` value [, strict = false ] )

##### **Arguments**
- `value` - Is required and accept mixed values to evaluate.
- `strict` - Optional. If this argument is `true`, then evaluate data type.

##### **Return**
This function return `true` if value is a `number` or `false` if is not a `number`.
> If `strict` is true, then evaluate data type.
##### **Examples**

    hjs.isNumber(1)             // return true
    hjs.isNumber(1.2)           // return true
    hjs.isNumber("1.2")         // return true
    hjs.isNumber("1.2", true)   // return false
    hjs.isNumber("1", true)     // return false
    
### hjs.isObject
##### API
> hjs.isObject( `mixed` value )

##### **Arguments**
- `value` - Is required and accept mixed values to evaluate.

##### **Return**
This function return `true` if value is a `object` or `false` if is not a `object`.
##### **Examples**

    hjs.isObject({})            // return true
    hjs.isObject([])            // return false
    hjs.isObject("{}")          // return false
    hjs.isObject(null)          // return true
    hjs.isObject(new Date)      // return true
    
### hjs.isNull
##### API
> hjs.isNull( `mixed` value )

##### **Arguments**
- `value` - Is required and accept mixed values to evaluate.

##### **Return**
This function return `true` if value is a `null object` or `false` if is not a `null object`.
##### **Examples**

    hjs.isNull({})            // return false
    hjs.isNull([])            // return false
    hjs.isNull("{}")          // return false
    hjs.isNull(null)          // return true
    hjs.isNull(new Date)      // return false
    hjs.isNull(undefined)     // return false

