require('dotenv').config();
var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/aboutus',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/corporate/about.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/corevalue',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/corporate/corevalue.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/location',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/corporate/location.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/socialresponsibility',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/corporate/socialResponsibility.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/vissionmission',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/corporate/vision_mission.txt'));
    // console.log(data);
    res.json(data);
})

app.get('/bigdata',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/solutions/bigdata.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/applicationmiddleware',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/solutions/application_middleware.txt'));
    console.log(data);
    res.json(data);
})
app.get('/businessIntelligence',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/solutions/businessIntelligence.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/datamanagement',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/solutions/dataManagement.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/enterprisedatawarehouse',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/solutions/enterpriseDataWarehouse.txt'));
    // console.log(data);
    res.json(data);
})

app.get('/businessintelligence',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/services/business_intelligence.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/enterprisemobility',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/services/enterprise_mobility.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/mobileapps',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/services/mobileApps.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/testingqa',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/services/testing_QA.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/webapplication',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/services/webApplication.txt'));
    // console.log(data);
    res.json(data);
})

app.get('/financialservices',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/industries/financial_services.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/government',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/industries/government.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/manufacturing',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/industries/manufacturing.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/retail',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/industries/retail.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/telecommunication',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/industries/telecommunication.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/utilities',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/industries/utilities.txt'));
    // console.log(data);
    res.json(data);
})

app.get('/b2bmobilwapps',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/enterpriseMobility/b2b_mobileApps.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/businessprocess',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/enterpriseMobility/business_process.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/enterpriseandroidapp',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/enterpriseMobility/enterprise_androidApp.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/enterpriseapp',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/enterpriseMobility/enterprise_app.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/enterpriseiosapp',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/enterpriseMobility/enterprise_iosApp.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/mobilebusiness',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/enterpriseMobility/mobileBusiness.txt'));
    // console.log(data);
    res.json(data);
})

app.get('/andriodapp',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/mobileApps/androidApp.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/blackberryapp',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/mobileApps/blackberry_app.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/iphoneapp',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/mobileApps/iphone_app.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/windows8app',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/mobileApps/windows8_app.txt'));
    // console.log(data);
    res.json(data);
})

app.get('/automatedtesting',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/testing/automated_testing.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/manualtesting',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/testing/manual_testing.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/qtp',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/testing/qtp.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/selenium',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/testing/selenium.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/testcomplete',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/testing/test_complete.txt'));
    // console.log(data);
    res.json(data);
})

app.get('/contentmanagement',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/webApplication/content_management.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/crmapplication',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/webApplication/crm_application.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/customwebapp',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/webApplication/custom_webApp.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/inventory',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/webApplication/inventory.txt'));
    // console.log(data);
    res.json(data);
})
app.get('/opensource',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/webApplication/open_source.txt'));
    // console.log(data);
    res.json(data);
})

app.listen(process.env.PORT,()=>{console.log("server running on "+process.env.PORT)})