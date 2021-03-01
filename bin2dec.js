function bin2dec() {
    let binvalue = window.document.querySelector('input#binvalue');
    let bin = Number(binvalue.value);
    let binary = parseInt(bin, 2);
    var res = window.document.querySelector('div#res');

    if (isNaN(binary) || binary == 2) {
        res.innerHTML = `${binvalue.value} aren't a binary number.`;
    }
    else {
        res.innerHTML = `You number in decimal is ${binary}`;
    }
}