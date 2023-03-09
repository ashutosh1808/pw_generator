let gp=()=>{
	event.preventDefault();
	let s6=document.getElementById("s6");
	let s7=document.getElementById("s7");
	let s8=document.getElementById("s8");
	let s9=document.getElementById("s9");
	let upper=document.getElementById("upper");
	let digit=document.getElementById("digit")
	let msg=document.getElementById("msg");

	let len=0
	if(s6.checked)			len=6
	else if(s7.checked)		len=7
	else if(s8.checked)		len=8
	else						len=9

	let text="abcdefghijklmnopqrstuvwxyz"
	if(upper.checked)		text+=text.toUpperCase()
	if(digit.checked)		text+="0123456789"
	let pw=""
	for(let i=1;i<=len;i++)
	{
		let p=parseInt(Math.random()*text.length)
		pw=pw+text[p]
	}
	msg.innerHTML=pw
}