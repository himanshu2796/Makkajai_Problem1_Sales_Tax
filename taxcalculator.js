class TaxCalculator {
    importedTax = 5;
    basicSalesTax = 10;
    arrayItem = ["book","medicine","food"];
    constructor(number, cost, typeItem, imported) {
        this.calculateItemWithTax(number, cost, typeItem, imported);
    }

    calculateItemWithTax = (number, cost, typeItem, imported) => {
        let costItem = cost;
        let individualTax = 0;

        let conditional ={imported:this.isImported(imported),exempted:this.isExempted(typeItem)};

        let tax = this.TotalSalesTax(conditional["imported"],conditional["exempted"]);

        individualTax = this.calculateIndividualTax(number,cost,tax);
        costItem = this.calculateCostItem(number,cost,individualTax);
        return { costItem, individualTax };
    }

    calculateIndividualTax = (number,cost,taxvalue)=>{
         return Number((Math.ceil(number*(cost*taxvalue/100)*20)/20).toFixed(2));
    }

    calculateCostItem = (number,cost,individualtax)=>{
        return Number((number * (cost) + individualtax).toFixed(2));
    }

    isImported = (imported)=>{
        if(imported==='Y'){
            return true;
        }
        else{
            return false;
        }
    }

    isExempted = (type)=>{
        if(this.arrayItem.includes(type)){
            return true;
        }
        else{
            return false;
        }

        }
     TotalSalesTax(imported,exempted){
         let tax = 0;
         if(imported)
         tax+=this.importedTax;
         if(!exempted)
         tax+=this.basicSalesTax;

         return tax;
     }
}

module.exports = TaxCalculator;
