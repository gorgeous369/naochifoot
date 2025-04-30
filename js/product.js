// JavaScript Document
$(document).ready(function(){				
  function G(s){
  return document.getElementById(s);
  }

function getStyle(obj, attr){
  if(obj.currentStyle){
  return obj.currentStyle[attr];
  }else{
  return getComputedStyle(obj, false)[attr];
  }
}

// function Animate(obj, json){
// if(obj.timer){
// clearInterval(obj.timer);
// }
// obj.timer = setInterval(function(){
// for(var attr in json){
//   var iCur = parseInt(getStyle(obj, attr));
//   iCur = iCur ? iCur : 0;
//   var iSpeed = (json[attr] - iCur) / 5;
//   iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
//   obj.style[attr] = iCur + iSpeed + 'px';
//   if(iCur == json[attr]){
//     // clearInterval(obj.timer);
//   }
// }
// }, 30);
// }
function Animate(obj, json){
  for(var attr in json){
    var iCur = parseInt(getStyle(obj, attr));
    iCur = iCur ? iCur : 0;
    var iSpeed = (json[attr] - iCur);
    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    obj.style[attr] = iCur + iSpeed + 'px';
    
    if(iCur == json[attr]){
      // clearInterval(obj.timer);
    }
  }
  }

var oPic = G("picBox");
var oList = G("listBox");

var oPrev = G("prev");
var oNext = G("next");
var oPrevTop = G("prevTop");
var oNextTop = G("nextTop");

var oPicLi = oPic.getElementsByTagName("li");
var oListLi = oList.getElementsByTagName("li");
var len1 = oPicLi.length;
var len2 = oListLi.length;

var oPicUl = oPic.getElementsByTagName("ul")[0];
var oListUl = oList.getElementsByTagName("ul")[0];
var w1 = oPicLi[0].offsetWidth;
var w2 = oListLi[0].offsetWidth;

oPicUl.style.width = w1 * len1 + 50 + "px";
oListUl.style.width = w2 * len2 + "px";

var index = 0;

var num = 4;
var num2 = Math.ceil(num / 2);

function Change(){

  Animate(oPicUl, {left: - index * w1});

  // if(index < num2){
  //   Animate(oListUl, {left: 0});
  // }else if(index + num2 <= len2){
  //   Animate(oListUl, {left: - (index - num2 + 1) * w2});
  // }else{
  //   Animate(oListUl, {left: - (len2 - num) * w2});
  // }

  for (var i = 0; i < len2; i++) {
    oListLi[i].className = "";
    if(i == index){
      oListLi[i].className = "on";
    }
  }
}

oNextTop.onclick = oNext.onclick = function(){

  index ++;
  index = index == len2 ? 0 : index;
  Change();
}


// oPrevTop.onmouseover = oNextTop.onmouseover = function(){
// clearInterval(timer);
// }
// oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
// timer=setInterval(autoPlay,4000);
// }

oPrevTop.onclick = oPrev.onclick = function(){

index --;
index = index == -1 ? len2 -1 : index;
Change();
}

// var timer=null;
// timer=setInterval(autoPlay,4000);
function autoPlay(){
  index ++;
index = index == len2 ? 0 : index;
Change();
}



for (var i = 0; i < len2; i++) {
oListLi[i].index = i;
oListLi[i].onclick = function(){
index = this.index;
Change();
}
}

$('.picBox').click(function(){
  $('#myModal').show();
})

$('.lg-close').click(function(){
  $('#myModal').hide();
})

$('.product-use-gallery').click(function(){
  $('#myPicModal').show();
})
$('.lg-pic-close').click(function(){
  $('#myPicModal').hide();
})

let cNum = 1;
$('#lg-zoom-in').click(function(){
  cNum += 0.3
  
  $('.swiper-slide-active img').css('transform', 'scale('+cNum+')');
})
$('#lg-actual-size').click(function(){
  if(cNum >1) {
    cNum -= 0.3
  } else{
    cNum += 0.3
  }
  $('.swiper-slide-active img').css('transform', 'scale('+cNum+')');
})
// $('.lg-fullscreen').click(function(){
//   // $('.swiper-slide-active img').attr("id", "fullscreen-image")
//   document.body.style.overflow = 'hidden';
// })
$('#lg-zoom-out').click(function(){
  console.log(cNum, '-----')
  cNum -= 0.3
  $('.swiper-slide-active img').css('transform', 'scale('+cNum+')');
})

});