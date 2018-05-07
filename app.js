var express = require("express");
// mongodb를 사용하기 위한 모듈
var mongoose = require("mongoose");
// form data 처리를 위한 모듈
var bodyParser = require("body-parser");
// query로 method를 받아서 request의 HTTP method를 바꿔주는 역할
var methodOverride = require("method-override");
var app = express();


// DB setting
// 환경변수에 저장된 값으로 DB접속
mongoose.connect(process.env.MONGO_DB);
// DB 커넥션 정보를 변수에 담기
var db = mongoose.connection;
// 연결
db.once("open", function(){
    console.log("DB connected");
});
// 에러
db.on("error", function(err){
    console.log("DB ERROR : ", err);
});

// Other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
// json data 처리
app.use(bodyParser.json());
// urlencoded data 처리
app.use(bodyParser.urlencoded({extended:true}));
// methodOverride 사용
app.use(methodOverride("_method")); 

// Routes
app.use("/", require("./routes/home"));
app.use("/contacts", require("./routes/contacts"));

// Port setting
app.listen(3000, function(){
    console.log("server on!");
});