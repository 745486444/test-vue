// filters -> index.js文件

/**
 * 格式化日期
 * @param {string} time 时间戳
 * @param {string} type 分隔符
 */
let formatDate;
formatDate = (time, type) => {
    if (!time) {
        return;
    }
    let date = new Date();
    date.setTime(time);
    let year = date.getFullYear();
    let month =
        date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1) * 1
            : date.getMonth() + 1;
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    if (type == "-") {
        return year + "-" + month + "-" + day;
    } else if (type == "/") {
        return year + "/" + month + "/" + day;
    } else if (type == ".") {
        return year + "." + month + "." + day;
    } else {
        return year + "年" + month + "月" + day + "日";
    }
};