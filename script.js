function length()
{
  let count=String(document.getElementById("text").value);
  let length=count.length;
  document.getElementById("demo").innerHTML= length;
}

function slice()
{
  let count=String(document.getElementById("text slice").value);
  let a=Number(document.getElementById("first-slice").value);
  let b=Number(document.getElementById("last-slice").value);
  let c=count.slice(a,b);
  document.getElementById("demo1").innerHTML= c;
}

function substring()
{
  let count=String(document.getElementById("text-substring").value);
  let a=Number(document.getElementById("first-substring").value);
  let b=Number(document.getElementById("last-substring").value);
  let c=count.slice(a,b);
  document.getElementById("demo2").innerHTML= c;
}

function Replace()
{
  let count=String(document.getElementById("text-replace").value);
  let a=String(document.getElementById("first-replace").value);
  let b=String(document.getElementById("last-replace").value);
  let c=count.replace(a,b);
  document.getElementById("demo3").innerHTML= c;
}

function replaceAll()
{
  let count=String(document.getElementById("textreplaceAll").value);
  let a=String(document.getElementById("current-line").value);
  let b=String(document.getElementById("replace-line").value);
  let c=count.replaceAll(a,b);
  document.getElementById("demo4").innerHTML=c;
}

function textUpperCase()
{
  let count=String(document.getElementById("textuppercase&lowercase").value);
  let textUpperCase=count.toUpperCase();
  document.getElementById("demo5").innerHTML=textUpperCase;
}

function textLowerCase()
{
  let count=String(document.getElementById("textuppercase&lowercase").value);
  let textLowerCase=count.toLowerCase();
  document.getElementById("demo6").innerHTML=textLowerCase;
}

function concat()
{
  let text1=String(document.getElementById("Text1").value);
  let text2=String(document.getElementById("Text2").value);
  let con=text1.concat(" ",text2);
  document.getElementById("demo7").innerHTML=con; 
}

function padStart()
{
  let count=String(document.getElementById("text padding").value);
  let a=Number(document.getElementById("first-pad").value);
  let b=String(document.getElementById("second-pad").value);
  let c=count.padStart(a,b);
  document.getElementById("demo8").innerHTML=c;
}

function padEnd()
{
  let count=String(document.getElementById("text padding").value);
  let a=Number(document.getElementById("first-pad").value);
  let b=String(document.getElementById("second-pad").value);
  let c=count.padEnd(a,b);
  document.getElementById("demo9").innerHTML=c;
}