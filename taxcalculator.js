class TaxCalculator {
    constructor(number, cost, typeItem, imported) {
        this.calculateItemWithTax(number, cost, typeItem, imported);
    }

    calculateItemWithTax = (number, cost, typeItem, imported) => {
        let costItem = 0;
        let individualTax = 0;
        let arrayItem = ["book","medicine","food"];
        if (imported === 'Y') {
            if (arrayItem.includes(typeItem)) {
                individualTax = Number((Math.ceil((number * cost * 5 / 100) * 20) / 20).toFixed(2));
                costItem = Number((number * (cost) + individualTax).toFixed(2));
            }
            else {
                individualTax = Number((Math.ceil(number * (cost * 15 / 100) * 20) / 20).toFixed(2));
                costItem = Number((number * (cost) + individualTax).toFixed(2));

            }
        }
        else {
            if (arrayItem.includes(typeItem)) {
                costItem = cost;
                individualTax = 0;
            }
            else {
                individualTax = Number((Math.ceil(number * (cost * 10 / 100) * 20) / 20).toFixed(2));
                costItem = Number((number * (cost) + individualTax).toFixed(2));
            }

        }
        return { costItem, individualTax };
    }



}

module.exports = TaxCalculator;
