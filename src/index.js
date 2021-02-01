module.exports = function toReadable(number) {
    n = number.toString();
    array1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    array2 = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let beforeHundred = function (n) {
        if ((n.length === 1) || (n.length === 2 && n[0] === '1')) {
            return array1[n];
        } else if (n.length === 2 && n[0] !== '1' && n[1] === '0') {
            return array2[n[0] - 2];
        } else if (n.length === 2 && n[0] !== '1' && n[1] !== '0') {
            return array2[n[0] - 2] + ' ' + array1[n[1]];
        }
    }

    if (n.length < 3) {
        return beforeHundred(n);
    } else if (n === '100') {
        return 'one hundred';
    } else if (n[1] === '0') {
        return array1[n[0]] + ' hundred ' + beforeHundred(n.slice(2));
    } else {
        return array1[n[0]] + ' hundred ' + beforeHundred(n.slice(1));
    }

}
