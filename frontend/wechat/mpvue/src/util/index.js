export default {
    formatNumber(n) {
        n = n.toString();
        return n[1] ? n : '0' + n;
    },
    formatTime(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        // return [year, month, day].map(this.formatNumber).join('/') + ' ' + [hour, minute, second].map(this.formatNumber).join(':');
        return {
            year: year,
            month: month,
            day: this.formatNumber(day),
            hour: this.formatNumber(hour),
            minute: this.formatNumber(minute),
            second: this.formatNumber(second)
        }
    }
};