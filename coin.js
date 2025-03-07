function calculateCoin(numNickel, numDime, numQuarter, numLoonie, numToonie){
    let nickelValue = numNickel * 0.05;
    let dimeValue = numDime * 0.10;
    let quarterValue = numQuarter * 0.25;
    let loonieValue = numLoonie * 1;
    let toonieValue = numToonie * 2;
    let totalValue = nickelValue + dimeValue + quarterValue + loonieValue + toonieValue;

    return totalValue;
}


export {calculateCoin}