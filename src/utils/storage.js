const cookie = {
    // 读取cookie
    get: key => {
        let cookieName = `${encodeURIComponent(key)}=`;
        let cookieStart = document.cookie.indexOf(cookieName);
        let cookieValue = '';
        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length
            }
            cookieValue = decodeURIComponent(
                document.cookie.substring(
                    `${cookieStart}${cookieName.length}`,
                    cookieEnd
                )
            )
        }
        return cookieValue
    },
    // 创建cookie
    set: (key, value, expires, path, domain, secure) => {
        let cookieText = ''
        expires = expires * 1000 * 60 * 60 * 24
        let expires_date = new Date(new Date().getTime() + expires)
        cookieText = `${cookieText}${encodeURIComponent(key)}=${encodeURIComponent(
            value
        )}`

        if (expires) {
            cookieText = `${cookieText}; expires=${expires_date.toGMTString()}`
        }
        if (path) {
            cookieText = `${cookieText}; path=${path}`
        }
        if (domain) {
            cookieText = `${cookieText}; domain=${domain}`
        }
        if (secure) {
            cookieText = `${cookieText}; secure`
        }
        document.cookie = cookieText
    },
    // 删除cookie
    clear: key => {
        cookie.set(key, '', -1)
    },
    // 检查cookie
    check: key => {
        let value = cookie.get(key)
        if (value == '' || value == null) {
            return false
        } else {
            return true
        }
    }
};
const localStorage = {
    // 读取localStorage
    get: key => {
        try {
            return JSON.parse(window.localStorage.getItem(key))
        } catch (err) {
            return window.localStorage.getItem(key)
        }
    },
    // 创建localStorage
    set: (key, value) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    },
    // 移除指定localStorage
    remove: key => {
        window.localStorage.removeItem(key)
    },
    // 清空所有localStorage
    clear: () => {
        window.localStorage.clear()
    }
};
const sessionStorage = {
    // 读取sessionStorage
    get: key => {
        try {
            return JSON.parse(window.sessionStorage.getItem(key))
        } catch (err) {
            return window.sessionStorage.getItem(key)
        }
    },
    // 创建sessionStorage
    set: (key, value) => {
        window.sessionStorage.setItem(key, JSON.stringify(value))
    },
    // 移除指定sessionStorage
    remove: key => {
        window.sessionStorage.removeItem(key)
    },
    // 清空所有sessionStorage
    clear: () => {
        window.sessionStorage.clear()
    }
};
export default {cookie, localStorage, sessionStorage};