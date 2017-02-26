//npm安装包时，--g全局安装，但是无法通过require获取
//在require时 引入绝对路径
var prompt=require('D://software//Node.js//node_global//node_modules//prompt//lib//prompt');
prompt.start();

/*1.practice*/
// prompt.get(['username','email','qq'],function(err,result){
//   console.log('result:');
//   console.log('username'+result.username);
//   console.log('email'+result.email);
//   console.log('qq'+result.qq);
// });

prompt.get([{
      name: 'username',
      required: true
    }, {
      name: 'password',
      hidden: true,//其他人看不见输入的密码 只有在最后的console才能看到
      pattern:/^\d+$/,//只能输入数字
      //验证
      conform: function (value) {
        return true;
      //return value===12345
      //只有密码输入为12345才通过
      }
    }], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  password: ' + result.password);
  });
