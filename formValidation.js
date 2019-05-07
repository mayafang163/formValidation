//获得name为username的元素
var txtName=document.getElementsByName("username")[0];
//为textName绑定获得焦点事件
txtName.onfocus=getFocus;
//为textName绑定失去焦点事件
txtName.onblur=function(){ //this->txtName
  //定义正则reg：10个字符以内的字母、数字或_
  reg=/^\w{1,10}$/;
  vali(this,reg);
};
function vali(txt,reg){
  //清除txt的class
  txt.className="";
  //找到txt的父元素的下一个兄弟的第一个子元素，保存在div中
  var div=txt.parentNode
             .nextElementSibling
             .firstElementChild;
  //如果用reg检测txt的内容通过
  if(reg.test(txt.value))
    div.className="vali_success";//为div穿vali_success
  else//否则
    div.className="vali_fail";//为div穿vali_fail
}
function getFocus(txt){  //this->txtName
  //为当前文本框穿txt_focus
  this.className="txt_focus";
  //找到当前文本框的父元素的下一个兄弟的第一个子元素，清除其class
  this.parentNode
      .nextElementSibling
      .firstElementChild
      .className="";
}
//获得name为pwd的元素
var txtPwd=document.getElementsByName("pwd")[0];
//为pwd绑定获得焦点事件
txtPwd.onfocus=getFocus;
//为pwd绑定失去焦点事件
txtPwd.onblur=function(){
  //定义正则reg：6位数字
  reg=/^\d{6}$/;
  vali(this,reg);
};
