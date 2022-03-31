'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {

  // console.log(req.query);
    
  const initNum = convertHandler.getNum(req.query.input); 
    // console.log("initNum", initNum);
    
  const initUnit = convertHandler.getUnit(req.query.input); 
    // console.log("initUnit", initUnit);

  const actaulInitUnit = convertHandler.spellOutUnit(initUnit);
    // console.log("actaulInitUnit", actaulInitUnit);
    
  const returnNum = convertHandler.convert(initNum, initUnit);
    // console.log("returnNum", returnNum);
    
  const returnUnit = convertHandler.getReturnUnit(initUnit);
    // console.log("returnUnit", returnUnit)

  const actualReturnUnit = convertHandler.spellOutUnit(returnUnit);
    // console.log("actualReturnUnit", actualReturnUnit)
    
  const string = convertHandler.getString(initNum, actaulInitUnit, returnNum, actualReturnUnit);
    // console.log("string", string);

  if(initNum==="invalid number" && (returnUnit ==="invalid unit" || initUnit==="invalid unit")){
    res.send("invalid number and unit")
  }else if(initUnit==="invalid unit" || returnUnit == "invalid unit"){
    res.send("invalid unit")
  }else if(initNum==="invalid number"){
    res.send("invalid number")
  }else{
    res.json({
    initNum: initNum,
    initUnit: initUnit,
    returnNum: returnNum,
    returnUnit: returnUnit,
    string: string
  })
  }
    });
};
