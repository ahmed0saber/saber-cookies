# saber-cookies

saber-cookies is an open-source JavaScript library that can help you handle cookies easier.

## Installation

```
npm i saber-cookies
```

## Usage

```
const SaberCookies = require('saber-cookies')
```

## Built-in methods

- `get()`

A method that gets a cookie by its `name`.

```
const currentTheme = SaberCookies.get("theme")
```

- `set()`

A method that sets a cookie by its `name`, `value` and `expiry time in seconds`.

```
SaberCookies.set("theme", "dark", 3600)
```

- `remove()`

A method that removes a cookie by its `name`.

```
SaberCookies.remove("theme")
```

- `removeAll()`

A method that removes all cookies.

```
SaberCookies.removeAll()
```

## How to publish your own package

I highly recommend reading this simple article:

https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/
