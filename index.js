const inquirer = require('inquirer');
const Prompt = require('./prompt');
const TaxCalculator = require('./taxcalculator');

checkNum = async (input) => {
    if (isNaN(Number(input))) {
       return 'Incorrect answer';          // check if input is number
    }

    return true;
 }
 
const collectInputs = async (inputs = []) => {
    let prompts = []; 
   prompts = [new Prompt("item","Name of the item?","input"),new Prompt("number","Number of the item?","input",checkNum),new Prompt("cost","What's the cost?","input",checkNum),new Prompt("imported","Is it imported?","list",null,["Y","N"]),new Prompt("type","What's the type of the item?","list",null,["food","book","medicine","other items"]),new Prompt("again","Enter another input?","confirm")];  // Instantiate prompt questions 
  
    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs; //Check if we want to enter input again
  };
  
  const main = async () => {
      const individualOutput=[];
    const inputs = await collectInputs();
    inputs.map((e,id)=>{
        helper = new TaxCalculator(e.number,e.cost,e.type,e.imported); // instantiate TaxCalculation
        individualOutput[id]= helper.calculateItemWithTax(e.number,e.cost,e.type,e.imported);
      });
  const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
 let Total = individualOutput.map((e)=>e.costItem).reduce(reducer,0);
 let SalesTotal = individualOutput.map((e)=>e.individualTax).reduce(reducer,0);
 inputs.map((e,id)=>{e.imported === 'Y'?
 console.log(`${e.number} imported ${e.item}: ${individualOutput[id].costItem}`):console.log(`${e.number} ${e.item}: ${individualOutput[id].costItem}`)
 });
 console.log(`Sales Taxes: ${SalesTotal.toFixed(2)}`);
 console.log(`Total: ${Total.toFixed(2)}`);
  };
  
  main();