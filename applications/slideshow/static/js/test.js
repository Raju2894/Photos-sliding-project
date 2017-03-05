function horizontal(){
	myobj=document.getElementsByClassName("present")[0];

//	myobj.style.transform="translateX(10px)";
	myobj.setAttribute("hidden","");
	myobj.setAttribute("class","past");
	new_slide=document.createElement("section");
	new_slide.setAttribute("contenteditable","True");
	new_slide.setAttribute("class","present");
	new_slide.setAttribute("style","width:500px;height:500px;transform:node");
//	new_slide.setAttribute("style","display:block;border-color:blue;border-width:2px;border-style:solid;width:500px;height:500px;position:fixed;left:400px;right:200px;top:30px;bottom:300px;");	
	node_head=document.createElement("h1");
	head_text=document.createTextNode("title");
	node_head.appendChild(head_text);
	new_slide.appendChild(node_head);
	p=document.getElementById("slides");
	p.appendChild(new_slide);
}
function left(){
	list=document.getElementsByClassName("past");
	if(list.length!=0){
	present_obj=document.getElementsByClassName("present")[0];
	present_obj.setAttribute("class","future");
//	present_obj.style.transform="translateX(20px)";
	present_obj.setAttribute("hidden","");
	list=document.getElementsByClassName("past");
	myobj=list[list.length -1];
	myobj.setAttribute("class","present");
	myobj.removeAttribute("hidden");
	}
	else{
		alert("reached start of presentation");
	}
}
function right(){
	list=document.getElementsByClassName("future");
	if(list.length!=0){
	present_obj=document.getElementsByClassName("present")[0];
	present_obj.setAttribute("class","past");
	present_obj.setAttribute("hidden","");
	myobj=document.getElementsByClassName("future")[0];
	myobj.setAttribute("class","present");
	myobj.removeAttribute("hidden");
	}
	else{
		alert("end of slides!!");
	}
}
function bold(){
	if(document.getElementsByTagName("body")[0].style.fontWeight=="bold"){
		document.getElementsByTagName("body")[0].style.fontWeight="normal";}
	else{
		document.getElementsByTagName("body")[0].style.fontWeight="bold";}
}
function italic(){
        if(document.getElementsByTagName("body")[0].style.fontStyle=="italic"){
		document.getElementsByTagName("body")[0].style.fontStyle="normal";}
	else{
		document.getElementsByTagName("body")[0].style.fontStyle="italic";}
}
function underline(){
	if(document.getElementsByTagName("body")[0].style.textDecoration="underline"){
		document.getElementsByTagName("body")[0].style.textDecoration="none";}
	else{
		document.getElementsByTagName("body")[0].style.textDecoration="underline";}
}
function	 del(){
	l1=document.getElementsByClassName("past");
	l2=document.getElementsByClassName("future");
	if( (l1.length!=0 && l2.length!=0) || (l1.length==0 && l2.length!=0) ){
	slid=document.getElementById("slides");
	pre=document.getElementsByClassName("present")[0];
	pre.setAttribute("class","past");
	fut=document.getElementsByClassName("future")[0];
	fut.setAttribute("class","present");
	fut.removeAttribute("hidden");
	slid.removeChild(pre);
	}
	else if(l1.length!=0 && l2.length==0){
		slid=document.getElementById("slides");
		pre=document.getElementsByClassName("present")[0];
		pre.setAttribute("class","future");
		pt_list=document.getElementsByClassName("past");
		pt=pt_list[pt_list.length -1];
		pt.setAttribute("class","present");
		pt.removeAttribute("hidden");
		slid.removeChild(pre);
	}
	else{
		alert("no slides to delete");}
}
