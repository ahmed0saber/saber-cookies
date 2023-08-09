const SaberCookies = {
    get: function (name) {
        const cookies = document.cookie.split(';')
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim()
            if (cookie.startsWith(`${name}=`)) {
                return cookie.substring(name.length + 1)
            }
        }
        return null
    },

    set: function setCookie(name, value, expiresInSeconds = undefined) {
        let cookie = `${name}=${value}`
        if (expiresInSeconds !== undefined) {
            const date = new Date()
            date.setTime(date.getTime() + (expiresInSeconds * 1000))
            cookie += `; expires=${date.toUTCString()}`
        }
        document.cookie = cookie
    },

    remove: function (name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    },

    removeAll: function () {
        const cookies = document.cookie.split(';')
        for (let i = 0; i < cookies.length; i++) {
            const name = cookies[i].split('=')[0].trim()
            SaberCookies.remove(name)
        }
    }
}

module.exports = SaberCookies
