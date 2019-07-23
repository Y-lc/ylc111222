function searchsubmit(){
	var objchannel = document.getElementById("channelid");
	var objsearchword = document.getElementById("searchword");
	var url;
	if(objsearchword.value==""){
		alert("«Î ‰»ÎºÏÀ˜¥ ");
		objsearchword.focus();
		return false;	
	}
		url = "http://www.gqt.org.cn/was40/search?channelid="+objchannel.value+"&searchword="+encodeURIComponent(objsearchword.value);
		window.open(url,"","");
  }