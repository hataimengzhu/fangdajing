
function getByClass(oParent,sClass){
	var aEle=oParent.getElementsByTagName('*');
	var aTmp=[];
	var i=0;
	for(i=0;i<aEle.length;i++){
		if(aEle[i].className==sClass){
			aTmp.push(aEle[i]);
		}
	}
	return aTmp;

}
var oDiv = document.getElementById('div1');
var oMark = getByClass(oDiv,'mark')[0];
var oFloat=getByClass(oDiv,'float_layer')[0];
var oBg=getByClass(oDiv,'big_pic')[0];
var oSm=getByClass(oDiv,'small_pic')[0];
var oImg=oBg.getElementsByTagName('img')[0];
oMark.onmouseover=function(){
	oFloat.style.display='block';
    oBg.style.display='block';
}
oMark.onmouseout=function(){
	oFloat.style.display='none';
	oBg.style.display='none';
}	
oMark.onmousemove=function(ev){
    var oEvent=ev||event;
    var disX=oEvent.clientX-oDiv.offsetLeft-oSm.offsetLeft-oFloat.offsetWidth/2;
    var disY=oEvent.clientY-oDiv.offsetTop-oSm.offsetTop-oFloat.offsetHeight/2;
    var l=disX, t=disY;
    l<0?l=0:l>(oMark.offsetWidth-oFloat.offsetWidth)?l=oMark.offsetWidth-oFloat.offsetWidth:l=disX;
    t<0?t=0:t>(oMark.offsetWidth-oFloat.offsetHeight)?t=oMark.offsetWidth-oFloat.offsetHeight:t=disY;
    // if(l<0){
    // 	l=0;
    // }else if(l>oMark.offsetWidth-oFloat.offsetWidth){
    // 	l=oMark.offsetWidth-oFloat.offsetWidth;
    // }
    // if(t<0){
    // 	t=0;
    // }else if(t>oMark.offsetWidth-oFloat.offsetHeight){
    // 	t=oMark.offsetWidth-oFloat.offsetHeight;
    // }
    oFloat.style.left=l+'px';
    oFloat.style.top=t+'px';
    var percentX=l/(oMark.offsetWidth-oFloat.offsetWidth);
    var percentY=t/(oMark.offsetHeight-oFloat.offsetHeight);
    oImg.style.left=-(oImg.offsetWidth-oBg.offsetWidth)*percentX +'px';
  	oImg.style.top=-(oImg.offsetHeight-oBg.offsetHeight)*percentY +'px';
}

