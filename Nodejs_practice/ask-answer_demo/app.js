/*终端问答系统demo
*by author Ace
*/

var prompt=require('D://software//Node.js//node_global//node_modules//prompt//lib//prompt');
var data=require('./data');
var fs=require('fs');//文件的读取

data.forEach(function(item,index){
  console.log(index+1,item[0]);
});

prompt.start();

//身份验证
function login(){
  prompt.get(['username','password'],function(err,value){
    var username=value.username;
    var password=value.password;
    if(username==='Ace'&&password==='12345'){
      //console.log('Login success'.blue);可以改变颜色 但是要npm install colors
      console.log('Login success');
      manager();
    }else{
      console.log('Login fail.Please try again^');
      login();
    }
  });
}

//添加问题与答案 在管理员的身份下
function writeASK(question,answer){
  data.push([question,answer]);
  save();
}

//将管理者的问题储存到json文件
function save(){
  fs.writeFileSync('./data.json',JSON.stringify(data));
}

//管理员模式
function manager(){
  prompt.get(['add'],function(err,value){
    //如果添加的结果为quit 则进入问答状态
    if(value.add==='quit'){
      ask();
    }
    else{
      //添加的形式为 question,answer
      var res=value.add.split(',');
      var question=res[0];
      var answer=res[1];

      writeASK(question,answer);
      manager();
    }
  });
}
//问答状态
function ask(){
  prompt.get(['num'],function(err,value){
    //如果是管理员则验证登录
    if(value.num==='manager'){
      login();
    }
    else{
      var num=parseInt(value.num);
      var item=data[num-1];
      console.log(item[1]);
    }
  });
}
ask();
