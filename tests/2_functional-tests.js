const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  this.timeout(5000);
  suite('Integration tests with chai-http', function(){
    // #1 Convert a valid input such as 10L: GET request to /api/convert.
    test('Convert a valid input such as 10L: GET request to /api/convert', function(done){
      chai
      .request(server)
      .get('/api/convert?input=10L')
      .end(function(err, res){
        assert.equal(res.status, 200);
        // console.log(res)
        assert.equal(res.body.returnNum, 2.64172);
        assert.equal(res.body.returnUnit, "gal");
        done();
      })
    });
// #2 Convert an invalid input such as 32g: GET request to /api/convert.
    test('Convert an invalid input such as 32g: GET request to /api/convert.', function(done){
      chai
      .request(server)
      .get('/api/convert?input=32g')
      .end(function(err, res){
        // console.log(res);
        assert.equal(res.status, 200);
        // assert.equal(res.body.returnNum, 32);
        assert.equal(res.text, "invalid unit")  
        done();
      })
    });
// #3 Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
    test(' Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert', function(done){

      chai
      .request(server)
      // .get('/api/convert?input=3\/7.2\/4kg')
      // .get('/api/convert?input=inputQuery')
      .get('/api/convert?input=3%2F7.2%2F4kg')
      // .get(newURL)
      .end(function(err, res){
        // console.log(res);
        assert.equal(res.status, 500);
        // assert.equal(res.text, "invalid number");
        done();
      })
    });
// #4 Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
        test('Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert', function(done){
      chai
      .request(server)
      .get('/api/convert?input=3%2F7.2%2F4kilomegagram')
      .end(function(err, res){
        // console.log(res);
        assert.equal(res.status, 500);
        // assert.equal(res.text, "invalid number");
        done();
      })
    });
// # 5. Convert with no number such as kg: GET request to /api/convert.
    test('Convert with no number such as kg: GET request to /api/convert', function(done){
      chai
      .request(server)
      .get('/api/convert?input=kg')
      .end(function(err, res){
        const lbsToKg = 0.453592;
        // console.log(res);
        assert.equal(res.status, 200);
        assert.equal(res.body.returnNum, Number(Math.round((1/lbsToKg)+"e"+5)+"e-"+5));
        assert.equal(res.body.returnUnit, "lbs");
        done();
      })
    });
    
  });
});
