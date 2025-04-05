const C_NA = '142,140,142';
const C_UNL = '186,230,126';
const C_FAIL = '239,107,115';
const C_UNK = '92,207,230';

function handler() {
    const content = fetch('https://www.netflix.com/title/81280792', {
        headers: {
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.9",
            "Host": "www.netflix.com",
            "Referer": "https://www.netflix.com/",
            "Sec-CH-UA": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
            "Sec-CH-UA-Mobile": "?0",
            "Sec-CH-UA-Platform": "\"Windows\"",
            "Sec-Fetch-Dest": "script",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
        },
        noRedir: false,
        retry: 3,
        timeout: 5000,
    });

    if (!content) {
        return {
            text: 'N/A',
            background: C_NA,
        };
    } else if (content.statusCode == 200 || content.statusCode == 302) {
        const location = ((content.redirects || [])[0] || "").substr(24, 2) || 'us';
        return {
            text: '解锁(' + location.toLocaleUpperCase() + ')',
            background: C_UNL,
        };
    } else if (content.statusCode == 404) {
        return '自制';
    } else if (content.statusCode == 403) {
        return {
            text: '失败',
            background: C_FAIL,
        };
    }

    const content2 = fetch('https://www.netflix.com/title/70143836', {
        headers: {
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.9",
            "Host": "www.netflix.com",
            "Referer": "https://www.netflix.com/",
            "Sec-CH-UA": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
            "Sec-CH-UA-Mobile": "?0",
            "Sec-CH-UA-Platform": "\"Windows\"",
            "Sec-Fetch-Dest": "script",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
        },
        noRedir: false,
        retry: 3,
        timeout: 5000,
    });

    if (!content2) {
        return {
            text: 'N/A',
            background: C_NA,
        };
    } else if (content2.statusCode == 200 || content2.statusCode == 302) {
        const location = ((content2.redirects || [])[0] || "").substr(24, 2) || 'us';
        return {
            text: '解锁(' + location.toLocaleUpperCase() + ')',
            background: C_UNL,
        };
    } else if (content2.statusCode == 404) {
        return '自制';
    } else if (content2.statusCode == 403) {
        return {
            text: '失败',
            background: C_FAIL,
        };
    } else {
        return {
            text: '未知',
            background: C_UNK,
        };
    }
}
