const year = 2018;
const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const day = [];

// for (let i = 0; i < 100; i++) {
//     year.push(i);
// }

/**
 * 判断月份天数
 * @param {int} month 
 */
function checkMonth(month) {
    var _this = this;
    const small = [4, 6, 9, 11]
    for (let i = 0; i < 12; i++) {
        if (month == small[i]) {
            return 30;
        } else if (month == 2) {
            if (_this.year % 4 == 0 && _this.year != 0) {
                return 29
            }
            return 28;
        } else {
            return 31;
        }
    }
}

/**
 * 获取系统时间
 */
function systemTime() {
    return new Date().getTime();
}

function printDay(month) {
    let arr = [];
    const len = checkMonth(month);
    for (let i = 1; i <= len; i++) {
        arr.push[i];
    }
    return arr;
};

function ajax() {

}

console.log(year % 4);
console.log(checkMonth(2));
console.log(systemTime());
