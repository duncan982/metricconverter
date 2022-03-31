function ConvertHandler() {
  
    this.getNum = function(input) {
      let result;
      let inputNumber;
      // split input into number and letters
      // let inputItem = input.match(/[a-zA-Z]+|[0-9]+/g);
      // console.log('inputItem ', inputItem )
      // console.log('inputItem length', inputItem.length)
      // console.log("input number is", inputItem[0]);

      // test if input item is a valid digits, decimals, and fractions and has or doesnt have units of measurement
      if((/^(?!.*\d+(?:\.\d+){2})\d*\.?\d*\/?\d*\.?\d*[a-zA-Z]*$/g).test(input) || (/^(?!.*\d+(?:\.\d+){2})\d*\.?\d*\/?\d*\.?\d*$/g).test(input)){
        
        if((/^(?!.*\d+(?:\.\d+){2})\d*\.?\d*\/?\d*\.?\d*[a-zA-Z]*$/g).test(input)){
          // input has units of measurement

                // console.log("INPUTNUMBER: input number is valid");
      let inputItem = input.match(/[a-zA-Z]+|[0-9]+/g);
      // console.log('inputItem ', inputItem )
      // console.log('inputItem length', inputItem.length)
      // console.log("input number is", inputItem[0]);

      // test if length of inputItem is greater than 1
      if(inputItem.length > 1){
      // console.log("length of inputItem is greater than 1");
        // test if number has a fraction or a decimal
        if(inputItem.length === 2 && inputItem[0].match(/[0-9]+/g)){
        inputNumber=Number(inputItem[0]);
      }else if(inputItem.length===3  && /^\d+\/|\.\d+[a-zA-Z]+$/.test(input)){
        // console.log("input number is a fraction or a decimal")
        inputNumber=inputItem[0]/inputItem[1]

      // test if number is acombination of a fraction and a decimal but starts with a decimal
      }else if(inputItem.length > 3 && /^\d+\.|\/\d+[a-zA-Z]+$/.test(input)){
        // console.log("number is acombination of a fraction and a decimal");
        // regenerate input number 
        inputNumber=Number(`${inputItem[0]}.${inputItem[1]}`)/inputItem[2]
      // console.log("Decimal then Fraction: regenerated input number is", inputNumber);

  // test if number is acombination of a fraction and a decimal but starts with a fraction
      }else if(inputItem.length > 3 && /^\d+\/|\.\d+[a-zA-Z]+$/.test(input)){
        // console.log("number is acombination of a fraction and a decimal");
        // regenerate input number 
        inputNumber=inputItem[0]/Number(`${inputItem[1]}.${inputItem[2]}`)
      // console.log("Fraction then Decimal: regenerated input number is", inputNumber);
      }
      }else{
        // console.log("length of inputItem is not greater than 1");
      // test if length of inputItem is greater than 1 and test if first item is a number
 if(inputItem.length > 0 && inputItem[0].match(/[0-9]+/g)){
        inputNumber=Number(inputItem[0]);
      } else if(inputItem.length === 1 && inputItem[0].match(/[a-zA-Z]+/g)){
        inputNumber="empty"  
        }
      }
          
        }else if((/^(?!.*\d+(?:\.\d+){2})\d*\.?\d*\/?\d*\.?\d*$/g).test(input)){
          // input has no units of measurement
          let inputItem = input.match(/[0-9]+/g);
          if((/^\d*$/g).test(input)){
            //input is a whole number
            // let inputItem = input.match(/[0-9]+/g);
            inputNumber=inputItem[0]
          }else if((/^\d*\.?\d+$/g).test(input)){
            // input is a decimal number
            // let inputItem = input.match(/[0-9]+/g);
            inputNumber=Number(`${inputItem[0]}.${inputItem[1]}`)
          }else if((/^\d*(\/)?\d+$/g).test(input)){
            // input is a fractional number
            // let inputItem = input.match(/[0-9]+/g); 
            inputNumber=`${inputItem[0]}/${inputItem[1]}`
          }else if((/^\d+\.|\/\d+$/).test(input)){
            // input is acombination of a fraction and a decimal but starts with a decimal
            inputNumber=Number(`${inputItem[0]}.${inputItem[1]}`)/inputItem[2]
          }else if((/^\d+\.|\/\d+$/).test(input)){
            // input is acombination of a fraction and a decimal but starts with a fraction
            inputNumber=inputItem[0]/Number(`${inputItem[1]}.${inputItem[2]}`)
          }
          
        }

      }else{
        // otherwise declare input number is not valid
        // console.log("INPUTNUMBER: input number is not valid");
        inputNumber=null
        // return "invalid number"
      }
          
      // result = input.match(/[a-zA-Z]+|[0-9]+/g)[0]
      switch(inputNumber){
        case null:
          // result = "invalid number";
          result = "invalid number";
          break;
        case "empty":
          result=1;
          break;
          
        default:
          result = inputNumber;
          break;
      }

      // console.log("input number is", result);
      return result;
    };
    
    this.getUnit = function(input) {
      let result;
      // result = input.match(/[a-zA-Z]+|[0-9]+/g)[1]
      let inputUnit;
      // split input into number and letters
      // let inputItem = input.match(/[a-zA-Z]+|[0-9]+/g);
      // console.log('inputItem ', inputItem)
      // console.log('inputItem index 1 is', inputItem[0])
      // console.log('inputItem length', inputItem.length)
       // console.log("input unit is", inputItem[1]);

      // test if input item is a valid digits, decimals, and fractions
      if((/^(?!.*\d+(?:\.\d+){2})\d*\.?\d*\/?\d*\.?\d*[a-zA-Z]*$/g).test(input)){
      // console.log("INPUTUNIT: input has a valid number");
      let inputItem = input.match(/[a-zA-Z]+|[0-9]+/g);
      // console.log('inputItem ', inputItem )
      // console.log('inputItem length', inputItem.length)
      // console.log("input unit is", inputItem[2]);

      // test length of inputItem is greater than 1 and test if second item is a letter
       if(inputItem.length === 1 && inputItem[0].match(/[a-zA-Z]+/g)){
        inputUnit=inputItem[0]
      }else if(inputItem.length === 2 && inputItem[1].match(/[a-zA-Z]+/g)){
        inputUnit=inputItem[1]
      }else if(inputItem.length === 3 && inputItem[2].match(/[a-zA-Z]+/g)){
        // console.log("inputItem index 3 item is", inputItem[2])
        inputUnit=inputItem[2]
      }else if(inputItem.length > 3 && inputItem[3].match(/[a-zA-Z]+/g)){
        // console.log("inputItem index 4 item is", inputItem[3])
        inputUnit=inputItem[3]
      }else{
        inputUnit=null
        // return "invalid unit"
      }
      }else{
        // console.log("input does not have a valid number");
        let inputItem = input.match(/[a-zA-Z]+|[0-9]+/g);
      // console.log("inputItem length is", inputItem.length)
      // console.log('inputItem ', inputItem)
        if(inputItem.length === 3 && inputItem[2].match(/[a-zA-Z]+/g)){
        // console.log("inputItem index 3 item is", inputItem[2])
        inputUnit=inputItem[2]
      }
      }

      switch(inputUnit.toLowerCase()){
        // case null:
        //   result = "invalid unit";
        //   break;

          case "gal":
            result = "gal";
            break;
          case "l":
            result = "L"
            break;
          case "kg":
            result = "kg";
            break;
          case "lbs":
            result = "lbs";
            break;
          case "km":
            result = "km";
            break;
          case "mi":
            result = "mi";
            break;
        default:
          // result = inputUnit;
          result = "invalid unit";
          break;
      }

      // console.log("input unit is", result);
      return result;
    };
    
    this.getReturnUnit = function(initUnit) {
      let result;
      // console.log("initUnit to get return unit is", initUnit);
      let initUnitUppercase = initUnit.toUpperCase();
      switch(initUnitUppercase){
          case "GAL":
            result = "L";
            break;
          case "L":
            result = "gal"
            break;
          case "LBS":
            result = "kg";
            break;
          case "KG":
            result = "lbs";
            break;
          case "MI":
            result = "km";
            break;
          case "KM":
            result = "mi";
            break;
          // case null:
          //   resut =  'invalid unit';
          //   break;
          default:
            result = 'invalid unit';
            break
      }

      // console.log("get return unit is", result);
      return result;
    };
  
    this.spellOutUnit = function(unit) {
      // console.log("unit to spell out is", unit);
      let result;
      let unitUpperCase=unit.toUpperCase()
  
      switch(unitUpperCase){
        case "GAL":
          result = "gallons";
          break;
        case "L":
          result = "liters";
          break;
        case "LBS":
          result = "pounds";
          break;
        case "KG":
          result = "kilograms";
          break;
        case "MI":
          result = "miles";
          break;
        case "KM":
          result = "kilometers";
          break;
        default:
          result='invalid unit'
          break
      }
      return result;
    };
    
    this.convert = function(initNum, initUnit) {
      // console.log("initNum and initUnit to convert is", initNum, initUnit);
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      let result;
  
      // if(initNum==="invalid number" && initUnit==="invalid unit"){
      //   return result="invalid number and unit"
      // }else{
        let initUnitUppercase = initUnit.toUpperCase();
        switch(initUnitUppercase){
        case "GAL":
          result = initNum*galToL;
          break;
        case "L":
          result = initNum/galToL;
          break;
        case "LBS":
          result = initNum*lbsToKg;
          break;
        case "KG":
          result = initNum/lbsToKg;
          break;
        case "MI":
          result = initNum*miToKm;
          break;
        case "KM":
          result = initNum/miToKm;
          break
        // case "invalid unit":
        //   result="invalid unit";
        //   break;
        default:
          // result="invalid number and unit";
          result="invalid unit";
          break;
      }
      // return results rounded to 5 decimal places
      return Number(Math.round(result + "e" + 5) + "e-" + 5);
      // }
    };
    
    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
      // console.log("initNum, initUnit, returnNum, returnUnit to get string is", initNum, initUnit, returnNum, returnUnit)
      let result;
      if(initNum==="invalid number"){
        result="invalid number"
      }else if(initUnit==="invalid unit"){
        result="invalid unit"
      }else if(initNum==="invalid number" && initUnit==="invalid unit"){
        result="invalid number and unit"
      }else{
            result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
      }
      return result;

    };
    
  }
  
  module.exports = ConvertHandler;
  