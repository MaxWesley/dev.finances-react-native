export const formatNumber = (amount, decimalCount = 2, decimal = ",", thousands = ".") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};

export const formDate = (date = new Date()) => {
    try {
        let day = date.getUTCDate()
        let month = date.getUTCMonth()
        let year = date.getUTCFullYear()

        let normalizeMonth = function () {
            let new_month = month + 1

            if (new_month < 10) return `0${new_month}`
            return month
        }

        let normalizeDay = function() {
            if(day < 10) return `0${day}`
            return day
        }

        return `${normalizeDay()}/${normalizeMonth()}/${year}`
    } catch (e) {
        console.log(e)
    }
}