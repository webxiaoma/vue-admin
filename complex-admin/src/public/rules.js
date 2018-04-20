
const RulesPhone = (rule, value, callback) => { // 验证手机号
    if (value === '' || typeof value == "undefined") {
      return callback(new Error('手机号不能为空'));
    }
    
    let result =  /^[1][0-9][0-9]{9}$/.test(value); 

    if(!result){
      return callback(new Error('请输入正确手机号'));
    }
    callback();
};

const RulesUserName = (rule, value, callback) => {    // 用户名
    if (value === '' || typeof value == "undefined") {
      return callback(new Error('用户名不能为空'));
    }
  
    callback();
};

const  RulesPassword = (rule, value, callback) => { // 验证密码
    if(value == ''  || typeof value == "undefined"){
        return  callback(new Error('密码不能为空'))
    }
    
    let result = /^[0-9a-zA-Z]{6,18}$/.test(value); 
    if(!result){
        return callback(new Error('密码是由6-18位数字，字母组成'));
    }
    callback();
    
}

const RulesCorde = (rule, value, callback) => {  // 手机验证码

    if(value == '' || typeof value == "undefined"){
        return  callback(new Error('验证码不能为空'))
    }

    let result = /^[0-9]*$/.test(value); 
    if(!result){
        return callback(new Error('验证码输入有误'));
    }
    callback();
    
}

const RulesRequired = (rule, value, callback) => { // 必填
    if(value == '' || typeof value == "undefined"){
        return  callback(new Error('该项为必填项'))
    }
    callback();
}
export {
    RulesPhone,    // 手机号
    RulesUserName, // 用户名
    RulesPassword, // 密码
    RulesCorde,    // 验证码
    RulesRequired  // 必填
}