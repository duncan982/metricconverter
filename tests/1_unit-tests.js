const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  //#1.
  test('convertHandler should correctly read a whole number input.', function(){
    const regex = /^\d*$/g
    assert.match(convertHandler.getNum(input='1'), regex)
  });
  //#2 .
  test('convertHandler should correctly read a decimal number input', function(){
    const regex = /^\d*\.?\d+$/g;
    assert.match(convertHandler.getNum(input='1.5'), regex)
  });
//#3 .
  test('convertHandler should correctly read a fractional input', function(){
    const regex = /^\d*(\/)?\d+$/g;
    assert.match(convertHandler.getNum(input='1/2'), regex)
  });
// #4 .
  test('convertHandler should correctly read a fractional input with a decimal', function(){
    const regex = /^\d+(\.|\/)|(\/|\.)\d+$/;
    assert.match(convertHandler.getNum(input='1/2.5'), regex)
  })
// #5 .
  test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', function(){
    const regex = /^\d*(\/)\d*(\/)\d+$/;
    assert.throws(() =>{assert.match(convertHandler.getNum(input='1/2/5'), regex)}, Error)
  });
//# 6
  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function(){
    assert.equal(convertHandler.getNum(input='mi'), 1)
  });
// #7 
  test('convertHandler should correctly read each valid input unit.', function(){
    let validUnits=["gal", "l", "kg", "lbs", "km", "mi"]
    assert.include(validUnits, convertHandler.getUnit(input='1mi'))
  })
// #8 
  test('convertHandler should correctly return an error for an invalid input unit.', function(){
    let validUnits=["gal", "l", "kg", "lbs", "km", "mi"];
    assert.notInclude(validUnits, convertHandler.getUnit(input='1min').toLowerCase())
  });
// #9 
  let validUnits=["gal", "l", "kg", "lbs", "km", "mi"];
  test('convertHandler should return the correct return unit for each valid input unit.', function(){
    assert.include(validUnits, convertHandler.getReturnUnit(initUnit='mi').toLowerCase())
  });
// #10
  test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function(){
    validSpelledOutUnits=["gallons", "liters", "kilograms", "pounds", "kilometers", "miles"];
    assert.include(validSpelledOutUnits, convertHandler.spellOutUnit(unit="mi").toLowerCase())
  });

// #11 
 test('convertHandler should correctly convert gal to L.', function(){
   let galToL = 3.78541;
   let initNum = convertHandler.getNum(input='1gal');
   let initUnit = convertHandler.getUnit(input='1gal');
   let outPut = initNum*galToL
   let roundedOutPut = Number(Math.round(outPut+"e"+5)+"e-"+5)
   assert.equal(convertHandler.convert(initNum, initUnit), roundedOutPut);
 });

// #12 
 test('convertHandler should correctly convert L to gal.', function(){
   let galToL = 3.78541;
   let initNum = convertHandler.getNum(input='1L');
   let initUnit = convertHandler.getUnit(input='1L');
   let outPut = initNum/galToL
   let roundedOutPut = Number(Math.round(outPut+"e"+5)+"e-"+5)
   assert.equal(convertHandler.convert(initNum, initUnit), roundedOutPut);
 });

// # 13 
test('convertHandler should correctly convert mi to km.', function(){
   const miToKm = 1.60934;
   let initNum = convertHandler.getNum(input='1mi');
   let initUnit = convertHandler.getUnit(input='1mi');
   let outPut = initNum*miToKm
   let roundedOutPut = Number(Math.round(outPut+"e"+5)+"e-"+5)
   assert.equal(convertHandler.convert(initNum, initUnit), roundedOutPut);
 });

// # 14 .
test('convertHandler should correctly convert km to mi', function(){
   const miToKm = 1.60934;
   let initNum = convertHandler.getNum(input='1km');
   let initUnit = convertHandler.getUnit(input='1km');
   let outPut = initNum/miToKm
   let roundedOutPut = Number(Math.round(outPut+"e"+5)+"e-"+5)
   assert.equal(convertHandler.convert(initNum, initUnit), roundedOutPut);
 });

// # 
test('15 convertHandler should correctly convert lbs to kg.', function(){
   const lbsToKg = 0.453592;
   let initNum = convertHandler.getNum(input='1lbs');
   let initUnit = convertHandler.getUnit(input='1lbs');
   let outPut = initNum*lbsToKg
   let roundedOutPut = Number(Math.round(outPut+"e"+5)+"e-"+5)
   assert.equal(convertHandler.convert(initNum, initUnit), roundedOutPut);
 });

// # 16 
test('convertHandler should correctly convert kg to lbs.', function(){
   const lbsToKg = 0.453592;
   let initNum = convertHandler.getNum(input='1kg');
   let initUnit = convertHandler.getUnit(input='1kg');
   let outPut = initNum/lbsToKg
   let roundedOutPut = Number(Math.round(outPut+"e"+5)+"e-"+5)
   assert.equal(convertHandler.convert(initNum, initUnit), roundedOutPut);
 });
});
