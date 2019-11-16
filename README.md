![icon](/assets/icon.jpg)

# Authentication using Node & MySQL (No framework)

A RESTful API implements authentication feature using Node (No external framework & library) and MySQL database server with MVC architecture.

Note : Passwords are not hashed, they directly saved as plain text.

## Table of Contents

* [Signup user](#signup-user)
* [Signin user](#signin-user)

## API Documentation

```Base URL = http://localhost:4000/```

### Signup user

Signup for service

#### Request 

```http://localhost:4000/signup```

``` 
Headers
Content-Type : application/json

HTTP method
POST
```

#### Body
```javascript
{
    "email" : string,
    "password" : string
}
```

#### Response

```javascript
{
    "statusCode" : int,
    "message": string
}
```
### Signin user

Signin user for service

#### Request 

```http://localhost:4000/signin```

``` 
Headers
Content-Type : application/json

HTTP method
POST
```

#### Body
```javascript
{
    "email" : string,
    "password" : string
}
```

#### Response

```javascript
{
    "statusCode" : int,
    "message": string
}
```

## Contributing

All feedback and contributions are welcome!

## License

``` 
The MIT License (MIT)
=====================

Copyright © 2019 Prathamesh More

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE. ```




