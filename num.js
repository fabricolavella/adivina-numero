var inter,t;
function interval(){
	var d=new Date();
	h=$('#inicio');
    t=1;
    inter=setInterval(function(){
    t++;
     h.html("hora de inicio: "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
       },1000,"JavaScript");
}
function clear(){
	var d=new Date();
	r=$('#resultado2');
	h=$('#inicio');
	f=$('#finalizacion');
    clearInterval(inter);
    r.html("Duración: "+(t-1)+" segundos");
    document.getElementById("inicio").hidden=false;
    f.html("hora de finalizacion: "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
}
function validar(){
	e1=document.forms["formulario1"].elements[0].value;
	e2=document.forms["formulario1"].elements[1].value;
	e3=document.forms["formulario1"].elements[2].value;
	e4=document.forms["formulario1"].elements[3].value;
	ok=true;
msg="revisar: \n";
   if ((e1<1 || e1>=10) || (e2<1 || e2>=10) || (e3<1 || e3>=10) || (e4<1 || e4>=10)) {
       msg+="que los numeros ingresados esten comprendidos entre el 1 al 9\n";
       ok=false;
   }
   if (e1==e2 || e1==e3 || e1==e4 || e2==e3 || e2==e4 || e3==e4) {
   	  msg+="que no hayan numeros repetidos\n";
   	  ok=false;
   }
   if (e1.length<1 || e2.length<1 || e3.length<1 || e4.length<1) {
   	msg+="que no hayan campos vacios\n";
   	ok=false;
   }
   if (ok==false) {
   	  alert(msg);
   	  return ok;
   }
   	
}
function validar1(){
	e1=document.forms["formulario2"].elements[0].value;
	e2=document.forms["formulario2"].elements[1].value;
	e3=document.forms["formulario2"].elements[2].value;
	e4=document.forms["formulario2"].elements[3].value;
	ok=true;
msg="revisar: \n";
   if ((e1<1 || e1>=10) || (e2<1 || e2>=10) || (e3<1 || e3>=10) || (e4<1 || e4>=10)) {
       msg+="que los numeros ingresados esten comprendidos entre el 1 al 9\n";
       ok=false;
   }
   if (e1==e2 || e1==e3 || e1==e4 || e2==e3 || e2==e4 || e3==e4) {
   	  msg+="que no hayan numeros repetidos\n";
   	  ok=false;
   }
   if (e1.length<1 || e2.length<1 || e3.length<1 || e4.length<1) {
   	msg+="que no hayan campos vacios\n";
   	ok=false;
   }
   if (ok==false) {
   	  alert(msg);
   	  return ok;
   }
   	
}
function validar2(){
	e1=document.forms["formulario3"].elements[0].value;
	e2=document.forms["formulario3"].elements[1].value;
	e3=document.forms["formulario3"].elements[2].value;
	e4=document.forms["formulario3"].elements[3].value;
	ok=true;
msg="revisar: \n";
   if ((e1<1 || e1>=10) || (e2<1 || e2>=10) || (e3<1 || e3>=10) || (e4<1 || e4>=10)) {
       msg+="que los numeros ingresados esten comprendidos entre el 1 al 9\n";
       ok=false;
   }
   if (e1==e2 || e1==e3 || e1==e4 || e2==e3 || e2==e4 || e3==e4) {
   	  msg+="que no hayan numeros repetidos\n";
   	  ok=false;
   }
   if (e1.length<1 || e2.length<1 || e3.length<1 || e4.length<1) {
   	msg+="que no hayan campos vacios\n";
   	ok=false;
   }
   if (ok==false) {
   	  alert(msg);
   	  return ok;
   }
   	
}
function validar3(){
	e1=document.forms["formulario4"].elements[0].value;
	e2=document.forms["formulario4"].elements[1].value;
	e3=document.forms["formulario4"].elements[2].value;
	e4=document.forms["formulario4"].elements[3].value;
	ok=true;
msg="revisar: \n";
   if ((e1<1 || e1>=10) || (e2<1 || e2>=10) || (e3<1 || e3>=10) || (e4<1 || e4>=10)) {
       msg+="que los numeros ingresados esten comprendidos entre el 1 al 9\n";
       ok=false;
   }
   if (e1==e2 || e1==e3 || e1==e4 || e2==e3 || e2==e4 || e3==e4) {
   	  msg+="que no hayan numeros repetidos\n";
   	  ok=false;
   }
   if (e1.length<1 || e2.length<1 || e3.length<1 || e4.length<1) {
   	msg+="que no hayan campos vacios\n";
   	ok=false;
   }
   if (ok==false) {
   	  alert(msg);
   	  return ok;
   }
   	
}
function validar4(){
	e1=document.forms["formulario5"].elements[0].value;
	e2=document.forms["formulario5"].elements[1].value;
	e3=document.forms["formulario5"].elements[2].value;
	e4=document.forms["formulario5"].elements[3].value;
	ok=true;
msg="revisar: \n";
   if ((e1<1 || e1>=10) || (e2<1 || e2>=10) || (e3<1 || e3>=10) || (e4<1 || e4>=10)) {
       msg+="que los numeros ingresados esten comprendidos entre el 1 al 9\n";
       ok=false;
   }
   if (e1==e2 || e1==e3 || e1==e4 || e2==e3 || e2==e4 || e3==e4) {
   	  msg+="que no hayan numeros repetidos\n";
   	  ok=false;
   }
   if (e1.length<1 || e2.length<1 || e3.length<1 || e4.length<1) {
   	msg+="que no hayan campos vacios\n";
   	ok=false;
   }
   if (ok==false) {
   	  alert(msg);
   	  return ok;
   }
   	
}
function validar5(){
	e1=document.forms["formulario6"].elements[0].value;
	e2=document.forms["formulario6"].elements[1].value;
	e3=document.forms["formulario6"].elements[2].value;
	e4=document.forms["formulario6"].elements[3].value;
	ok=true;
msg="revisar: \n";
   if ((e1<1 || e1>=10) || (e2<1 || e2>=10) || (e3<1 || e3>=10) || (e4<1 || e4>=10)) {
       msg+="que los numeros ingresados esten comprendidos entre el 1 al 9\n";
       ok=false;
   }
   if (e1==e2 || e1==e3 || e1==e4 || e2==e3 || e2==e4 || e3==e4) {
   	  msg+="que no hayan numeros repetidos\n";
   	  ok=false;
   }
   if (e1.length<1 || e2.length<1 || e3.length<1 || e4.length<1) {
   	msg+="que no hayan campos vacios\n";
   	ok=false;
   }
   if (ok==false) {
   	  alert(msg);
   	  return ok;
   }
   	
}
function validar6(){
	e1=document.forms["formulario7"].elements[0].value;
	e2=document.forms["formulario7"].elements[1].value;
	e3=document.forms["formulario7"].elements[2].value;
	e4=document.forms["formulario7"].elements[3].value;
	ok=true;
msg="revisar: \n";
   if ((e1<1 || e1>=10) || (e2<1 || e2>=10) || (e3<1 || e3>=10) || (e4<1 || e4>=10)) {
       msg+="que los numeros ingresados esten comprendidos entre el 1 al 9\n";
       ok=false;
   }
   if (e1==e2 || e1==e3 || e1==e4 || e2==e3 || e2==e4 || e3==e4) {
   	  msg+="que no hayan numeros repetidos\n";
   	  ok=false;
   }
   if (e1.length<1 || e2.length<1 || e3.length<1 || e4.length<1) {
   	msg+="que no hayan campos vacios\n";
   	ok=false;
   }
   if (ok==false) {
   	  alert(msg);
   	  return ok;
   }
   	
}
function validar7(){
	e1=document.forms["formulario8"].elements[0].value;
	e2=document.forms["formulario8"].elements[1].value;
	e3=document.forms["formulario8"].elements[2].value;
	e4=document.forms["formulario8"].elements[3].value;
	ok=true;
msg="revisar: \n";
   if ((e1<1 || e1>=10) || (e2<1 || e2>=10) || (e3<1 || e3>=10) || (e4<1 || e4>=10)) {
       msg+="que los numeros ingresados esten comprendidos entre el 1 al 9\n";
       ok=false;
   }
   if (e1==e2 || e1==e3 || e1==e4 || e2==e3 || e2==e4 || e3==e4) {
   	  msg+="que no hayan numeros repetidos\n";
   	  ok=false;
   }
   if (e1.length<1 || e2.length<1 || e3.length<1 || e4.length<1) {
   	msg+="que no hayan campos vacios\n";
   	ok=false;
   }
   if (ok==false) {
   	  alert(msg);
   	  return ok;
   }
   	
}
function minumero(){
  interval();
  ok=true;
  if (typeof validar==='function') {
  	ok=false;
  	validar();
  }
  if (ok==false) {
  	  return ok;
  }else{
      document.getElementById('formulario1').hidden=true;
      document.getElementById('oculto').hidden=false;	  
   	  document.f2[0].disabled=false;
   	  document.f2[1].disabled=false;
   	  document.f2[2].disabled=false;
   	  document.f2[3].disabled=false;   
   	}
}
function azar(){
	interval();
  var numero;
var numero="";
var cifra=[];

for(a=0;a<4;a++){
  cifra[a]=parseInt(Math.random()*10);
  if(a==0 || a==1 || a==2 || a==3){ 
    cifra[a]=parseInt(Math.random()*9)+1;
  }
  for(aa=0;aa<a;aa++){
    if(cifra[a]==cifra[aa]){a-=1;break}

  }
}
for(a=0;a<4;a++){
  numero+=cifra[a];
  numero=parseInt(numero);
    document.f1[0].value=cifra[0];
    document.f1[1].value=cifra[1];
    document.f1[2].value=cifra[2];
    document.f1[3].value=cifra[3];
}
document.getElementById('formulario1').hidden=true;
      document.getElementById('oculto2').hidden=false;	  
   	  document.f2[0].disabled=false;
   	  document.f2[1].disabled=false;
   	  document.f2[2].disabled=false;
   	  document.f2[3].disabled=false;
}
function adivinar1() {
  ok=true;
  if (typeof validar1==='function') {
  	ok=false;
  	validar1();
  }
  if (ok==false) {
  	  return ok;
  }
n1=document.f1[0].value;
n2=document.f1[1].value;
n3=document.f1[2].value;
n4=document.f1[3].value;
p1=document.f2[0].value;
p2=document.f2[1].value;
p3=document.f2[2].value;
p4=document.f2[3].value;
t1=p1;t2=p2;t3=p3;t4=p4;
document.f2[0].disabled=true;document.f2[1].disabled=true;document.f2[2].disabled=true;document.f2[3].disabled=true; document.f3[0].disabled=false;document.f3[1].disabled=false;document.f3[2].disabled=false;document.f3[3].disabled=false; 
valor=$('#valor1');
resul=$('#resultado');
n=$('#nuevo');  
    if ((t1!=n1 || t1!=n2 || t1!=n3 || t1!=n4) && (t2!=n1 || t2!=n2 || t2!=n3 || t2!=n4) && (t3!=n1 || t3!=n2 || t3!=n3 || t3!=n4) && (t4!=n1 || t4!=n2 || t4!=n3 || t4!=n4)) {
    	valor.html(t1+t2+t3+t4+"  N");
      $('.ad1').attr('onclick','');
    }
	if (t1==n1 && t2==n2 && t3==n3 && t4==n4) {
		valor.html(t1+t2+t3+t4+"  <strong style='color:green'>4B</strong>");
		$(document).ready(function(){
         $("#mostrarmodal").modal("show");
         resul.html("<strong style='color:green'>GANASTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton1').disabled=false;
		      document.f2[0].disabled=true;document.f2[1].disabled=true;document.f2[2].disabled=true;document.f2[3].disabled=true;document.f3[0].disabled=true;document.f3[1].disabled=true;document.f3[2].disabled=true;document.f3[3].disabled=true;document.f4[0].disabled=true;document.f4[1].disabled=true;document.f4[2].disabled=true;document.f4[3].disabled=true;document.f5[0].disabled=true;document.f5[1].disabled=true;document.f5[2].disabled=true;document.f5[3].disabled=true;document.f6[0].disabled=true;document.f6[1].disabled=true;document.f6[2].disabled=true;document.f6[3].disabled=true;document.f7[0].disabled=true;document.f7[1].disabled=true;document.f7[2].disabled=true;document.f7[3].disabled=true;document.f8[0].disabled=true;document.f8[1].disabled=true;document.f8[2].disabled=true;document.f8[3].disabled=true;
		      clear();
          $('.ad1').attr('onclick','adivinar1()');
          n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
         });
	}
	if ((t1==n1 && t2==n2 && t3==n3 && t4!=n4) || (t1==n1 && t2==n2 && t3!=n3 && t4==n4) || (t1==n1 && t2!=n2 && t3==n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>3B</strong>");
        $('.ad1').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong>"); 
        $('.ad1').attr('onclick','');
	}
	if ((t1==n1 && t2!=n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3!=n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong>");
        $('.ad1').attr('onclick','');
	}
	if ((t1==n2) || t1==n3 || t1==n4  || t2==n1 || t2==n3 || t2==n4 || t3==n1 || t3==n2 || t3==n4 || t4==n1 || t4==n2 || t4==n3) {
        valor.html(t1+t2+t3+t4+"  1R");
        $('.ad1').attr('onclick','');
    }
	if ((t1==n2 && t2==n1) || (t1==n2 && t3==n1) || (t1==n2 && t4==n1) || (t1==n2 && t2==n3) || (t1==n2 && t4==n3) || (t1==n2 && t2==n4) || (t1==n2 && t3==n4) || (t1==n3 && t3==n2) || (t1==n3 && t4==n2) || (t1==n3 && t2==n4) || (t1==n3 && t3==n4) || (t1==n4 && t2==n3) || (t1==n4 && t4==n3) || (t1==n4 && t3==n2) || (t1==n4 && t2==n1) || (t1==n3 && t2==n1) || (t1==n3 && t3==n1) || (t1==n3 && t4==n1) || (t1==n4 && t2==n1) || (t1==n4 && t3==n1) || (t1==n4 && t4==n1) || (t1==n4 && t3==n2) || (t1==n4 && t4==n2) || (t2==n1 && t3==n2) || (t2==n1 && t3==n4) || (t2==n1 && t4==n2) || (t2==n1 && t4==n3) || (t2==n3 && t3==n1) || (t2==n3 && t4==n1) || (t2==n3 && t3==n2) || (t2==n3 && t4==n2) || (t2==n4 && t3==n1) || (t2==n4 && t4==n1) || (t2==n4 && t3==n2) || (t2==n4 && t4==n2) || (t3==n1 && t4==n2) || (t3==n2 && t4==n1) || (t3==n2 && t4==n3) || (t3==n4 && t4==n1) || (t3==n4 && t4==n2) || (t3==n4 && t4==n3) || (t2==n3 && t3==n4) || (t3==n1 && t4==n3) || (t2==n4 && t4==n3)) {
		valor.html(t1+t2+t3+t4+"  2R");
    $('.ad1').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4) || (t1==n2 && t2==n3 && t3==n1) || (t1==n2 && t2==n3 && t3==n4) || (t1==n2 && t2==n3 && t4==n1) || (t1==n2 && t2==n4 && t3==n1) || (t1==n3 && t2==n1 && t3==n2) || (t1==n3 && t2==n4 && t3==n1) || (t1==n3 && t2==n4 && t3==n2) || (t1==n3 && t2==n1 && t3==n4) || (t1==n4 && t2==n1 && t3==n2) || (t1==n4 && t2==n3 && t3==n2) || (t1==n4 && t2==n3 && t3==n1) || (t1==n4 && t2==n1 && t4==n3) || (t1==n4 && t2==n1 && t4==n2) || (t2==n1 && t3==n2 && t4==n3) || (t2==n1 && t3==n4 && t4==n3) || (t2==n1 && t3==n4 && t4==n2) || (t2==n3 && t3==n2 && t4==n1) || (t2==n3 && t3==n1 && t4==n2) || (t2==n3 && t3==n4 && t4==n1) || (t2==n3 && t3==n4 && t4==n2) || (t2==n4 && t3==n1 && t4==n3) || (t2==n4 && t3==n1 && t4==n2) || (t2==n4 && t3==n2 && t4==n3) || (t2==n4 && t3==n2 && t4==n1) || (t1==n2 && t3==n1 && t4==n3) || (t1==n2 && t3==n4 && t4==n3) || (t1==n2 && t3==n4 && t4==n1) || (t1==n2 && t2==n1 && t4==n3) || (t1==n2 && t2==n4 && t4==n3) || (t1==n2 && t2==n4 && t4==n1) || (t1==n3 && t3==n2 && t4==n1) || (t1==n2 && t2==n4 && t4==n1) || (t1==n4 && t3==n2 && t4==n3) || (t1==n3 && t3==n4 && t4==n1) || (t1==n3 && t2==n4 && t4==n2) || (t1==n4 && t2==n3 && t4==n1) || (t1==n4 && t3==n1 && t4==n3)) {
        valor.html(t1+t2+t3+t4+"  3R");
        $('.ad1').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4 && t4==n3) || (t1==n2 && t2==n3 && t3==n4 && t4==n1) || (t1==n2 && t2==n4 && t3==n1 && t4==n3) || (t1==n3 && t2==n1 && t3==n4 && t4==n2) || (t1==n3 && t2==n4 && t3==n1 && t4==n2) || (t1==n3 && t2==n4 && t3==n2 && t4==n1) || (t1==n4 && t2==n1 && t3==n2 && t4==n3) || (t1==n4 && t2==n3 && t3==n1 && t4==n2) || (t1==n4 && t2==n3 && t3==n2 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  4R");
        $('.ad1').attr('onclick','');
	}
	if ((t1==n1 && t2==n3) || (t1==n1 && t2==n4) || (t1==n1 && t3==n4) || (t1==n1 && t3==n2) || (t1==n1 && t4==n2) || (t1==n1 && t4==n3) || (t1==n3 && t2==n2) || (t1==n4 && t2==n2) || (t3==n4 && t2==n2) || (t3==n1 && t2==n2) || (t4==n1 && t2==n2) || (t4==n3 && t2==n2) || (t2==n1 && t3==n3) || (t2==n4 && t3==n3) || (t1==n2 && t3==n3) || (t3==n3 && t4==n1) || (t1==n4 && t3==n3) || (t4==n2 && t3==n3) || (t4==n4 && t3==n2) || (t3==n1 && t4==n4) || (t2==n1 && t4==n4) || (t2==n3 && t4==n4) || (t1==n2 && t4==n4) || (t1==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 1R");
        $('.ad1').attr('onclick','');
	}
	if ((t1==n1 && t3==n2 && t4==n3) || (t1==n1 && t3==n4 && t4==n2) || (t1==n1 && t2==n3 && t3==n2) || (t1==n1 && t3==n4 && t4==n3) || (t1==n1 && t2==n3 && t3==n4) || (t1==n1 && t2==n3 && t4==n2) || (t1==n1 && t2==n4 && t3==n2) || (t1==n1 && t2==n4 && t4==n2) || (t1==n1 && t2==n4 && t4==n3) || (t2==n2 && t3==n1 && t4==n3) || (t2==n2 && t3==n4 && t4==n1) || (t2==n2 && t3==n1 && t1==n3) || (t2==n2 && t3==n1 && t1==n4) || (t2==n2 && t1==n3 && t4==n1) || (t2==n2 && t1==n4 && t4==n1) || (t2==n2 && t3==n4 && t4==n3) || (t2==n2 && t3==n4 && t1==n3) || (t2==n2 && t3==n4 && t4==n1) || (t3==n3 && t1==n2 && t4==n1) || (t3==n3 && t1==n4 && t4==n1) || (t3==n3 && t1==n4 && t4==n2) || (t3==n3 && t2==n1 && t4==n2) || (t3==n3 && t2==n4 && t4==n2) || (t3==n3 && t1==n2 && t2==n4) || (t3==n3 && t1==n2 && t2==n1) || (t3==n3 && t2==n4 && t4==n1) || (t3==n2 && t2==n1 && t4==n4) || (t3==n1 && t2==n2 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t1==n2 && t2==n1 && t4==n4) || (t1==n3 && t2==n1 && t4==n4) || (t3==n2 && t2==n3 && t4==n4) || (t3==n1 && t2==n3 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n4 && t2==n2 && t4==n3) || (t1==n4 && t2==n1 && t3==n3) || (t1==n2 && t3==n1 && t4==n4) || (t1==n3 && t3==n2 && t4==n4) || (t1==n3 && t3==n1 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 2R");
        $('.ad1').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4) || (t1==n1 && t2==n2 && t4==n3) || (t1==n1 && t2==n4 && t3==n3) || (t1==n1 && t3==n3 && t4==n2) || (t1==n1 && t3==n2 && t4==n4) || (t1==n1 && t2==n3 && t4==n4) || (t3==n3 && t2==n2 && t4==n1) || (t1==n4 && t2==n2 && t3==n3) || (t3==n1 && t2==n2 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t3==n3 && t2==n1 && t4==n4) || (t1==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 1R");
        $('.ad1').attr('onclick','');
	}
	if ((t1==n1 && t2==n3 && t3==n4 && t4==n2) || (t1==n1 && t2==n4 && t3==n2 && t4==n3) || (t1==n3 && t2==n2 && t3==n4 && t4==n1) || (t1==n4 && t2==n2 && t3==n1 && t4==n3) || (t1==n2 && t2==n4 && t3==n3 && t4==n1) || (t1==n4 && t2==n1 && t3==n3 && t4==n2) || (t1==n2 && t2==n3 && t3==n1 && t4==n4) || (t1==n3 && t2==n1 && t3==n2 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 3R");
        $('.ad1').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4 && t4==n3) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n1 && t2==n3 && t3==n2 && t4==n4) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n4 && t2==n4 && t3==n3 && t4==n1) || (t1==n3 && t2==n2 && t3==n1 && t4==n4) || (t1==n2 && t2==n1 && t3==n3 && t4==n4) || (t1==n4 && t2==n2 && t3==n3 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 2R");
        $('.ad1').attr('onclick','');
	}     
         
}
function adivinar2(){
ok=true;
  if (typeof validar2==='function') {
  	ok=false;
  	validar2();
  }
  if (ok==false) {
  	  return ok;
  }	
n1=document.f1[0].value;
n2=document.f1[1].value;
n3=document.f1[2].value;
n4=document.f1[3].value;
p1=document.f3[0].value;
p2=document.f3[1].value;
p3=document.f3[2].value;
p4=document.f3[3].value;
t1=p1;t2=p2;t3=p3;t4=p4;
document.f3[0].disabled=true;document.f3[1].disabled=true;document.f3[2].disabled=true;document.f3[3].disabled=true; document.f4[0].disabled=false;document.f4[1].disabled=false;document.f4[2].disabled=false;document.f4[3].disabled=false;
valor=$('#valor2');
resul=$('#resultado'); 
n=$('#nuevo'); 
    if ((t1!=n1 || t1!=n2 || t1!=n3 || t1!=n4) && (t2!=n1 || t2!=n2 || t2!=n3 || t2!=n4) && (t3!=n1 || t3!=n2 || t3!=n3 || t3!=n4) && (t4!=n1 || t4!=n2 || t4!=n3 || t4!=n4)) {
    	valor.html(t1+t2+t3+t4+"  N");
      $('.ad2').attr('onclick','');
    }
	if (t1==n1 && t2==n2 && t3==n3 && t4==n4) {
		valor.html(t1+t2+t3+t4+"  <strong style='color:green'>4B</strong>");
		$(document).ready(function(){
         $("#mostrarmodal").modal("show");
         resul.html("<strong style='color:green'>GANASTE</strong><br>el numero es:  "+n1+n2+n3+n4);
         document.getElementById('boton2').disabled=false;
		     document.f2[0].disabled=true;document.f2[1].disabled=true;document.f2[2].disabled=true;document.f2[3].disabled=true;document.f3[0].disabled=true;document.f3[1].disabled=true;document.f3[2].disabled=true;document.f3[3].disabled=true;document.f4[0].disabled=true;document.f4[1].disabled=true;document.f4[2].disabled=true;document.f4[3].disabled=true;document.f5[0].disabled=true;document.f5[1].disabled=true;document.f5[2].disabled=true;document.f5[3].disabled=true;document.f6[0].disabled=true;document.f6[1].disabled=true;document.f6[2].disabled=true;document.f6[3].disabled=true;document.f7[0].disabled=true;document.f7[1].disabled=true;document.f7[2].disabled=true;document.f7[3].disabled=true;document.f8[0].disabled=true;document.f8[1].disabled=true;document.f8[2].disabled=true;document.f8[3].disabled=true;
		     clear();
         $('.ad2').attr('onclick','adivinar2()');
		     n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
         });
	}
	if ((t1==n1 && t2==n2 && t3==n3 && t4!=n4) || (t1==n1 && t2==n2 && t3!=n3 && t4==n4) || (t1==n1 && t2!=n2 && t3==n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>3B</strong>");
        $('.ad2').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong>"); 
        $('.ad2').attr('onclick','');
	}
	if ((t1==n1 && t2!=n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3!=n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong>");
        $('.ad2').attr('onclick','');
	}
	if ((t1==n2) || t1==n3 || t1==n4  || t2==n1 || t2==n3 || t2==n4 || t3==n1 || t3==n2 || t3==n4 || t4==n1 || t4==n2 || t4==n3) {
        valor.html(t1+t2+t3+t4+"  1R");
        $('.ad2').attr('onclick','');
    }
	if ((t1==n2 && t2==n1) || (t1==n2 && t3==n1) || (t1==n2 && t4==n1) || (t1==n2 && t2==n3) || (t1==n2 && t4==n3) || (t1==n2 && t2==n4) || (t1==n2 && t3==n4) || (t1==n3 && t3==n2) || (t1==n3 && t4==n2) || (t1==n3 && t2==n4) || (t1==n3 && t3==n4) || (t1==n4 && t2==n3) || (t1==n4 && t4==n3) || (t1==n4 && t3==n2) || (t1==n4 && t2==n1) || (t1==n3 && t2==n1) || (t1==n3 && t3==n1) || (t1==n3 && t4==n1) || (t1==n4 && t2==n1) || (t1==n4 && t3==n1) || (t1==n4 && t4==n1) || (t1==n4 && t3==n2) || (t1==n4 && t4==n2) || (t2==n1 && t3==n2) || (t2==n1 && t3==n4) || (t2==n1 && t4==n2) || (t2==n1 && t4==n3) || (t2==n3 && t3==n1) || (t2==n3 && t4==n1) || (t2==n3 && t3==n2) || (t2==n3 && t4==n2) || (t2==n4 && t3==n1) || (t2==n4 && t4==n1) || (t2==n4 && t3==n2) || (t2==n4 && t4==n2) || (t3==n1 && t4==n2) || (t3==n2 && t4==n1) || (t3==n2 && t4==n3) || (t3==n4 && t4==n1) || (t3==n4 && t4==n2) || (t3==n4 && t4==n3) || (t2==n3 && t3==n4) || (t3==n1 && t4==n3) || (t2==n4 && t4==n3)) {
		valor.html(t1+t2+t3+t4+"  2R");
    $('.ad2').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4) || (t1==n2 && t2==n3 && t3==n1) || (t1==n2 && t2==n3 && t3==n4) || (t1==n2 && t2==n3 && t4==n1) || (t1==n2 && t2==n4 && t3==n1) || (t1==n3 && t2==n1 && t3==n2) || (t1==n3 && t2==n4 && t3==n1) || (t1==n3 && t2==n4 && t3==n2) || (t1==n3 && t2==n1 && t3==n4) || (t1==n4 && t2==n1 && t3==n2) || (t1==n4 && t2==n3 && t3==n2) || (t1==n4 && t2==n3 && t3==n1) || (t1==n4 && t2==n1 && t4==n3) || (t1==n4 && t2==n1 && t4==n2) || (t2==n1 && t3==n2 && t4==n3) || (t2==n1 && t3==n4 && t4==n3) || (t2==n1 && t3==n4 && t4==n2) || (t2==n3 && t3==n2 && t4==n1) || (t2==n3 && t3==n1 && t4==n2) || (t2==n3 && t3==n4 && t4==n1) || (t2==n3 && t3==n4 && t4==n2) || (t2==n4 && t3==n1 && t4==n3) || (t2==n4 && t3==n1 && t4==n2) || (t2==n4 && t3==n2 && t4==n3) || (t2==n4 && t3==n2 && t4==n1) || (t1==n2 && t3==n1 && t4==n3) || (t1==n2 && t3==n4 && t4==n3) || (t1==n2 && t3==n4 && t4==n1) || (t1==n2 && t2==n1 && t4==n3) || (t1==n2 && t2==n4 && t4==n3) || (t1==n2 && t2==n4 && t4==n1) || (t1==n3 && t3==n2 && t4==n1) || (t1==n2 && t2==n4 && t4==n1) || (t1==n4 && t3==n2 && t4==n3) || (t1==n3 && t3==n4 && t4==n1) || (t1==n3 && t2==n4 && t4==n2) || (t1==n4 && t2==n3 && t4==n1) || (t1==n4 && t3==n1 && t4==n3)) {
        valor.html(t1+t2+t3+t4+"  3R");
        $('.ad2').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4 && t4==n3) || (t1==n2 && t2==n3 && t3==n4 && t4==n1) || (t1==n2 && t2==n4 && t3==n1 && t4==n3) || (t1==n3 && t2==n1 && t3==n4 && t4==n2) || (t1==n3 && t2==n4 && t3==n1 && t4==n2) || (t1==n3 && t2==n4 && t3==n2 && t4==n1) || (t1==n4 && t2==n1 && t3==n2 && t4==n3) || (t1==n4 && t2==n3 && t3==n1 && t4==n2) || (t1==n4 && t2==n3 && t3==n2 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  4R");
        $('.ad2').attr('onclick','');
	}
	if ((t1==n1 && t2==n3) || (t1==n1 && t2==n4) || (t1==n1 && t3==n4) || (t1==n1 && t3==n2) || (t1==n1 && t4==n2) || (t1==n1 && t4==n3) || (t1==n3 && t2==n2) || (t1==n4 && t2==n2) || (t3==n4 && t2==n2) || (t3==n1 && t2==n2) || (t4==n1 && t2==n2) || (t4==n3 && t2==n2) || (t2==n1 && t3==n3) || (t2==n4 && t3==n3) || (t1==n2 && t3==n3) || (t3==n3 && t4==n1) || (t1==n4 && t3==n3) || (t4==n2 && t3==n3) || (t4==n4 && t3==n2) || (t3==n1 && t4==n4) || (t2==n1 && t4==n4) || (t2==n3 && t4==n4) || (t1==n2 && t4==n4) || (t1==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 1R");
        $('.ad2').attr('onclick','');
	}
	if ((t1==n1 && t3==n2 && t4==n3) || (t1==n1 && t3==n4 && t4==n2) || (t1==n1 && t2==n3 && t3==n2) || (t1==n1 && t3==n4 && t4==n3) || (t1==n1 && t2==n3 && t3==n4) || (t1==n1 && t2==n3 && t4==n2) || (t1==n1 && t2==n4 && t3==n2) || (t1==n1 && t2==n4 && t4==n2) || (t1==n1 && t2==n4 && t4==n3) || (t2==n2 && t3==n1 && t4==n3) || (t2==n2 && t3==n4 && t4==n1) || (t2==n2 && t3==n1 && t1==n3) || (t2==n2 && t3==n1 && t1==n4) || (t2==n2 && t1==n3 && t4==n1) || (t2==n2 && t1==n4 && t4==n1) || (t2==n2 && t3==n4 && t4==n3) || (t2==n2 && t3==n4 && t1==n3) || (t2==n2 && t3==n4 && t4==n1) || (t3==n3 && t1==n2 && t4==n1) || (t3==n3 && t1==n4 && t4==n1) || (t3==n3 && t1==n4 && t4==n2) || (t3==n3 && t2==n1 && t4==n2) || (t3==n3 && t2==n4 && t4==n2) || (t3==n3 && t1==n2 && t2==n4) || (t3==n3 && t1==n2 && t2==n1) || (t3==n3 && t2==n4 && t4==n1) || (t3==n2 && t2==n1 && t4==n4) || (t3==n1 && t2==n2 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t1==n2 && t2==n1 && t4==n4) || (t1==n3 && t2==n1 && t4==n4) || (t3==n2 && t2==n3 && t4==n4) || (t3==n1 && t2==n3 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n4 && t2==n2 && t4==n3) || (t1==n4 && t2==n1 && t3==n3) || (t1==n2 && t3==n1 && t4==n4) || (t1==n3 && t3==n2 && t4==n4) || (t1==n3 && t3==n1 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 2R");
        $('.ad2').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4) || (t1==n1 && t2==n2 && t4==n3) || (t1==n1 && t2==n4 && t3==n3) || (t1==n1 && t3==n3 && t4==n2) || (t1==n1 && t3==n2 && t4==n4) || (t1==n1 && t2==n3 && t4==n4) || (t3==n3 && t2==n2 && t4==n1) || (t1==n4 && t2==n2 && t3==n3) || (t3==n1 && t2==n2 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t3==n3 && t2==n1 && t4==n4) || (t1==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 1R");
        $('.ad2').attr('onclick','');
	}
	if ((t1==n1 && t2==n3 && t3==n4 && t4==n2) || (t1==n1 && t2==n4 && t3==n2 && t4==n3) || (t1==n3 && t2==n2 && t3==n4 && t4==n1) || (t1==n4 && t2==n2 && t3==n1 && t4==n3) || (t1==n2 && t2==n4 && t3==n3 && t4==n1) || (t1==n4 && t2==n1 && t3==n3 && t4==n2) || (t1==n2 && t2==n3 && t3==n1 && t4==n4) || (t1==n3 && t2==n1 && t3==n2 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 3R");
        $('.ad2').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4 && t4==n3) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n1 && t2==n3 && t3==n2 && t4==n4) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n4 && t2==n4 && t3==n3 && t4==n1) || (t1==n3 && t2==n2 && t3==n1 && t4==n4) || (t1==n2 && t2==n1 && t3==n3 && t4==n4) || (t1==n4 && t2==n2 && t3==n3 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 2R");
        $('.ad2').attr('onclick','');
	}     
}
function adivinar3(){
  ok=true;
  if (typeof validar3==='function') {
  	ok=false;
  	validar3();
  }
  if (ok==false) {
  	  return ok;
  }
n1=document.f1[0].value;
n2=document.f1[1].value;
n3=document.f1[2].value;
n4=document.f1[3].value;
p1=document.f4[0].value;
p2=document.f4[1].value;
p3=document.f4[2].value;
p4=document.f4[3].value;
t1=p1;t2=p2;t3=p3;t4=p4;
document.f4[0].disabled=true;document.f4[1].disabled=true;document.f4[2].disabled=true;document.f4[3].disabled=true; document.f5[0].disabled=false;document.f5[1].disabled=false;document.f5[2].disabled=false;document.f5[3].disabled=false;
valor=$('#valor3');
resul=$('#resultado'); 
n=$('#nuevo'); 
    if ((t1!=n1 || t1!=n2 || t1!=n3 || t1!=n4) && (t2!=n1 || t2!=n2 || t2!=n3 || t2!=n4) && (t3!=n1 || t3!=n2 || t3!=n3 || t3!=n4) && (t4!=n1 || t4!=n2 || t4!=n3 || t4!=n4)) {
    	valor.html(t1+t2+t3+t4+"  N");
      $('.ad3').attr('onclick','');
    }
	if (t1==n1 && t2==n2 && t3==n3 && t4==n4) {
		valor.html(t1+t2+t3+t4+"  <strong style='color:green'>4B</strong>");
		$(document).ready(function(){
         $("#mostrarmodal").modal("show");
         resul.html("<strong style='color:green'>GANASTE</strong><br>el numero es:  "+n1+n2+n3+n4);
         document.getElementById('boton3').disabled=false;
		     document.f2[0].disabled=true;document.f2[1].disabled=true;document.f2[2].disabled=true;document.f2[3].disabled=true;document.f3[0].disabled=true;document.f3[1].disabled=true;document.f3[2].disabled=true;document.f3[3].disabled=true;document.f4[0].disabled=true;document.f4[1].disabled=true;document.f4[2].disabled=true;document.f4[3].disabled=true;document.f5[0].disabled=true;document.f5[1].disabled=true;document.f5[2].disabled=true;document.f5[3].disabled=true;document.f6[0].disabled=true;document.f6[1].disabled=true;document.f6[2].disabled=true;document.f6[3].disabled=true;document.f7[0].disabled=true;document.f7[1].disabled=true;document.f7[2].disabled=true;document.f7[3].disabled=true;document.f8[0].disabled=true;document.f8[1].disabled=true;document.f8[2].disabled=true;document.f8[3].disabled=true;
		     clear();
         $('.ad3').attr('onclick','adivinar3()');
		     n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
         });

	}
	if ((t1==n1 && t2==n2 && t3==n3 && t4!=n4) || (t1==n1 && t2==n2 && t3!=n3 && t4==n4) || (t1==n1 && t2!=n2 && t3==n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>3B</strong>");
        $('.ad3').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong>");
        $('.ad3').attr('onclick',''); 
	}
	if ((t1==n1 && t2!=n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3!=n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong>");
        $('.ad3').attr('onclick','');
	}
	if ((t1==n2) || t1==n3 || t1==n4  || t2==n1 || t2==n3 || t2==n4 || t3==n1 || t3==n2 || t3==n4 || t4==n1 || t4==n2 || t4==n3) {
        valor.html(t1+t2+t3+t4+"  1R");
        $('.ad3').attr('onclick','');
    }
	if ((t1==n2 && t2==n1) || (t1==n2 && t3==n1) || (t1==n2 && t4==n1) || (t1==n2 && t2==n3) || (t1==n2 && t4==n3) || (t1==n2 && t2==n4) || (t1==n2 && t3==n4) || (t1==n3 && t3==n2) || (t1==n3 && t4==n2) || (t1==n3 && t2==n4) || (t1==n3 && t3==n4) || (t1==n4 && t2==n3) || (t1==n4 && t4==n3) || (t1==n4 && t3==n2) || (t1==n4 && t2==n1) || (t1==n3 && t2==n1) || (t1==n3 && t3==n1) || (t1==n3 && t4==n1) || (t1==n4 && t2==n1) || (t1==n4 && t3==n1) || (t1==n4 && t4==n1) || (t1==n4 && t3==n2) || (t1==n4 && t4==n2) || (t2==n1 && t3==n2) || (t2==n1 && t3==n4) || (t2==n1 && t4==n2) || (t2==n1 && t4==n3) || (t2==n3 && t3==n1) || (t2==n3 && t4==n1) || (t2==n3 && t3==n2) || (t2==n3 && t4==n2) || (t2==n4 && t3==n1) || (t2==n4 && t4==n1) || (t2==n4 && t3==n2) || (t2==n4 && t4==n2) || (t3==n1 && t4==n2) || (t3==n2 && t4==n1) || (t3==n2 && t4==n3) || (t3==n4 && t4==n1) || (t3==n4 && t4==n2) || (t3==n4 && t4==n3) || (t2==n3 && t3==n4) || (t3==n1 && t4==n3) || (t2==n4 && t4==n3)) {
		valor.html(t1+t2+t3+t4+"  2R");
    $('.ad3').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4) || (t1==n2 && t2==n3 && t3==n1) || (t1==n2 && t2==n3 && t3==n4) || (t1==n2 && t2==n3 && t4==n1) || (t1==n2 && t2==n4 && t3==n1) || (t1==n3 && t2==n1 && t3==n2) || (t1==n3 && t2==n4 && t3==n1) || (t1==n3 && t2==n4 && t3==n2) || (t1==n3 && t2==n1 && t3==n4) || (t1==n4 && t2==n1 && t3==n2) || (t1==n4 && t2==n3 && t3==n2) || (t1==n4 && t2==n3 && t3==n1) || (t1==n4 && t2==n1 && t4==n3) || (t1==n4 && t2==n1 && t4==n2) || (t2==n1 && t3==n2 && t4==n3) || (t2==n1 && t3==n4 && t4==n3) || (t2==n1 && t3==n4 && t4==n2) || (t2==n3 && t3==n2 && t4==n1) || (t2==n3 && t3==n1 && t4==n2) || (t2==n3 && t3==n4 && t4==n1) || (t2==n3 && t3==n4 && t4==n2) || (t2==n4 && t3==n1 && t4==n3) || (t2==n4 && t3==n1 && t4==n2) || (t2==n4 && t3==n2 && t4==n3) || (t2==n4 && t3==n2 && t4==n1) || (t1==n2 && t3==n1 && t4==n3) || (t1==n2 && t3==n4 && t4==n3) || (t1==n2 && t3==n4 && t4==n1) || (t1==n2 && t2==n1 && t4==n3) || (t1==n2 && t2==n4 && t4==n3) || (t1==n2 && t2==n4 && t4==n1) || (t1==n2 && t2==n4 && t4==n1) || (t1==n4 && t3==n2 && t4==n3) || (t1==n3 && t3==n4 && t4==n1) || (t1==n3 && t2==n4 && t4==n2) || (t1==n4 && t2==n3 && t4==n1) || (t1==n4 && t3==n1 && t4==n3)) {
        valor.html(t1+t2+t3+t4+"  3R");
        $('.ad3').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4 && t4==n3) || (t1==n2 && t2==n3 && t3==n4 && t4==n1) || (t1==n2 && t2==n4 && t3==n1 && t4==n3) || (t1==n3 && t2==n1 && t3==n4 && t4==n2) || (t1==n3 && t2==n4 && t3==n1 && t4==n2) || (t1==n3 && t2==n4 && t3==n2 && t4==n1) || (t1==n4 && t2==n1 && t3==n2 && t4==n3) || (t1==n4 && t2==n3 && t3==n1 && t4==n2) || (t1==n4 && t2==n3 && t3==n2 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  4R");
        $('.ad3').attr('onclick','');
	}
	if ((t1==n1 && t2==n3) || (t1==n1 && t2==n4) || (t1==n1 && t3==n4) || (t1==n1 && t3==n2) || (t1==n1 && t4==n2) || (t1==n1 && t4==n3) || (t1==n3 && t2==n2) || (t1==n4 && t2==n2) || (t3==n4 && t2==n2) || (t3==n1 && t2==n2) || (t4==n1 && t2==n2) || (t4==n3 && t2==n2) || (t2==n1 && t3==n3) || (t2==n4 && t3==n3) || (t1==n2 && t3==n3) || (t3==n3 && t4==n1) || (t1==n4 && t3==n3) || (t4==n2 && t3==n3) || (t4==n4 && t3==n2) || (t3==n1 && t4==n4) || (t2==n1 && t4==n4) || (t2==n3 && t4==n4) || (t1==n2 && t4==n4) || (t1==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 1R");
        $('.ad3').attr('onclick','');
	}
	if ((t1==n1 && t3==n2 && t4==n3) || (t1==n1 && t3==n4 && t4==n2) || (t1==n1 && t2==n3 && t3==n2) || (t1==n1 && t3==n4 && t4==n3) || (t1==n1 && t2==n3 && t3==n4) || (t1==n1 && t2==n3 && t4==n2) || (t1==n1 && t2==n4 && t3==n2) || (t1==n1 && t2==n4 && t4==n2) || (t1==n1 && t2==n4 && t4==n3) || (t2==n2 && t3==n1 && t4==n3) || (t2==n2 && t3==n4 && t4==n1) || (t2==n2 && t3==n1 && t1==n3) || (t2==n2 && t3==n1 && t1==n4) || (t2==n2 && t1==n3 && t4==n1) || (t2==n2 && t1==n4 && t4==n1) || (t2==n2 && t3==n4 && t4==n3) || (t2==n2 && t3==n4 && t1==n3) || (t2==n2 && t3==n4 && t4==n1) || (t3==n3 && t1==n2 && t4==n1) || (t3==n3 && t1==n4 && t4==n1) || (t3==n3 && t1==n4 && t4==n2) || (t3==n3 && t2==n1 && t4==n2) || (t3==n3 && t2==n4 && t4==n2) || (t3==n3 && t1==n2 && t2==n4) || (t3==n3 && t1==n2 && t2==n1) || (t3==n3 && t2==n4 && t4==n1) || (t3==n2 && t2==n1 && t4==n4) || (t3==n1 && t2==n2 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t1==n2 && t2==n1 && t4==n4) || (t1==n3 && t2==n1 && t4==n4) || (t3==n2 && t2==n3 && t4==n4) || (t3==n1 && t2==n3 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n4 && t2==n2 && t4==n3) || (t1==n4 && t2==n1 && t3==n3) || (t1==n2 && t3==n1 && t4==n4) || (t1==n3 && t3==n2 && t4==n4) || (t1==n3 && t3==n1 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 2R");
        $('.ad3').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4) || (t1==n1 && t2==n2 && t4==n3) || (t1==n1 && t2==n4 && t3==n3) || (t1==n1 && t3==n3 && t4==n2) || (t1==n1 && t3==n2 && t4==n4) || (t1==n1 && t2==n3 && t4==n4) || (t3==n3 && t2==n2 && t4==n1) || (t1==n4 && t2==n2 && t3==n3) || (t3==n1 && t2==n2 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t3==n3 && t2==n1 && t4==n4) || (t1==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 1R");
        $('.ad3').attr('onclick','');
	}
	if ((t1==n1 && t2==n3 && t3==n4 && t4==n2) || (t1==n1 && t2==n4 && t3==n2 && t4==n3) || (t1==n3 && t2==n2 && t3==n4 && t4==n1) || (t1==n4 && t2==n2 && t3==n1 && t4==n3) || (t1==n2 && t2==n4 && t3==n3 && t4==n1) || (t1==n4 && t2==n1 && t3==n3 && t4==n2) || (t1==n2 && t2==n3 && t3==n1 && t4==n4) || (t1==n3 && t2==n1 && t3==n2 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 3R");
        $('.ad3').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4 && t4==n3) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n1 && t2==n3 && t3==n2 && t4==n4) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n4 && t2==n4 && t3==n3 && t4==n1) || (t1==n3 && t2==n2 && t3==n1 && t4==n4) || (t1==n2 && t2==n1 && t3==n3 && t4==n4) || (t1==n4 && t2==n2 && t3==n3 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 2R");
        $('.ad3').attr('onclick','');
	}     
}	
function adivinar4(){
ok=true;
  if (typeof validar4==='function') {
  	ok=false;
  	validar4();
  }
  if (ok==false) {
  	  return ok;
  }
n1=document.f1[0].value;
n2=document.f1[1].value;
n3=document.f1[2].value;
n4=document.f1[3].value;
p1=document.f5[0].value;
p2=document.f5[1].value;
p3=document.f5[2].value;
p4=document.f5[3].value;
t1=p1;t2=p2;t3=p3;t4=p4;
document.f5[0].disabled=true;document.f5[1].disabled=true;document.f5[2].disabled=true;document.f5[3].disabled=true; document.f6[0].disabled=false;document.f6[1].disabled=false;document.f6[2].disabled=false;document.f6[3].disabled=false;
valor=$('#valor4');
resul=$('#resultado');  
n=$('#nuevo');
    if ((t1!=n1 || t1!=n2 || t1!=n3 || t1!=n4) && (t2!=n1 || t2!=n2 || t2!=n3 || t2!=n4) && (t3!=n1 || t3!=n2 || t3!=n3 || t3!=n4) && (t4!=n1 || t4!=n2 || t4!=n3 || t4!=n4)) {
    	valor.html(t1+t2+t3+t4+"  N");
      $('.ad4').attr('onclick','');
    }
	if (t1==n1 && t2==n2 && t3==n3 && t4==n4) {
		valor.html(t1+t2+t3+t4+"  <strong style='color:green'>4B</strong>");
		$(document).ready(function(){
         $("#mostrarmodal").modal("show");
         resul.html("<strong style='color:green'>GANASTE</strong><br>el numero es:  "+n1+n2+n3+n4);
         document.getElementById('boton4').disabled=false;
		     document.f2[0].disabled=true;document.f2[1].disabled=true;document.f2[2].disabled=true;document.f2[3].disabled=true;document.f3[0].disabled=true;document.f3[1].disabled=true;document.f3[2].disabled=true;document.f3[3].disabled=true;document.f4[0].disabled=true;document.f4[1].disabled=true;document.f4[2].disabled=true;document.f4[3].disabled=true;document.f5[0].disabled=true;document.f5[1].disabled=true;document.f5[2].disabled=true;document.f5[3].disabled=true;document.f6[0].disabled=true;document.f6[1].disabled=true;document.f6[2].disabled=true;document.f6[3].disabled=true;document.f7[0].disabled=true;document.f7[1].disabled=true;document.f7[2].disabled=true;document.f7[3].disabled=true;document.f8[0].disabled=true;document.f8[1].disabled=true;document.f8[2].disabled=true;document.f8[3].disabled=true;
		     clear();
         $('.ad4').attr('onclick','adivinar4()');
		     n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
         });
	}
	if ((t1==n1 && t2==n2 && t3==n3 && t4!=n4) || (t1==n1 && t2==n2 && t3!=n3 && t4==n4) || (t1==n1 && t2!=n2 && t3==n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>3B</strong>");
        $('.ad4').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong>"); 
        $('.ad4').attr('onclick','');
	}
	if ((t1==n1 && t2!=n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3!=n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong>");
        $('.ad4').attr('onclick','');
	}
	if ((t1==n2) || t1==n3 || t1==n4  || t2==n1 || t2==n3 || t2==n4 || t3==n1 || t3==n2 || t3==n4 || t4==n1 || t4==n2 || t4==n3) {
        valor.html(t1+t2+t3+t4+"  1R");
        $('.ad4').attr('onclick','');
    }
	if ((t1==n2 && t2==n1) || (t1==n2 && t3==n1) || (t1==n2 && t4==n1) || (t1==n2 && t2==n3) || (t1==n2 && t4==n3) || (t1==n2 && t2==n4) || (t1==n2 && t3==n4) || (t1==n3 && t3==n2) || (t1==n3 && t4==n2) || (t1==n3 && t2==n4) || (t1==n3 && t3==n4) || (t1==n4 && t2==n3) || (t1==n4 && t4==n3) || (t1==n4 && t3==n2) || (t1==n4 && t2==n1) || (t1==n3 && t2==n1) || (t1==n3 && t3==n1) || (t1==n3 && t4==n1) || (t1==n4 && t2==n1) || (t1==n4 && t3==n1) || (t1==n4 && t4==n1) || (t1==n4 && t3==n2) || (t1==n4 && t4==n2) || (t2==n1 && t3==n2) || (t2==n1 && t3==n4) || (t2==n1 && t4==n2) || (t2==n1 && t4==n3) || (t2==n3 && t3==n1) || (t2==n3 && t4==n1) || (t2==n3 && t3==n2) || (t2==n3 && t4==n2) || (t2==n4 && t3==n1) || (t2==n4 && t4==n1) || (t2==n4 && t3==n2) || (t2==n4 && t4==n2) || (t3==n1 && t4==n2) || (t3==n2 && t4==n1) || (t3==n2 && t4==n3) || (t3==n4 && t4==n1) || (t3==n4 && t4==n2) || (t3==n4 && t4==n3) || (t2==n3 && t3==n4) || (t3==n1 && t4==n3) || (t2==n4 && t4==n3)) {
		valor.html(t1+t2+t3+t4+"  2R");
    $('.ad4').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4) || (t1==n2 && t2==n3 && t3==n1) || (t1==n2 && t2==n3 && t3==n4) || (t1==n2 && t2==n3 && t4==n1) || (t1==n2 && t2==n4 && t3==n1) || (t1==n3 && t2==n1 && t3==n2) || (t1==n3 && t2==n4 && t3==n1) || (t1==n3 && t2==n4 && t3==n2) || (t1==n3 && t2==n1 && t3==n4) || (t1==n4 && t2==n1 && t3==n2) || (t1==n4 && t2==n3 && t3==n2) || (t1==n4 && t2==n3 && t3==n1) || (t1==n4 && t2==n1 && t4==n3) || (t1==n4 && t2==n1 && t4==n2) || (t2==n1 && t3==n2 && t4==n3) || (t2==n1 && t3==n4 && t4==n3) || (t2==n1 && t3==n4 && t4==n2) || (t2==n3 && t3==n2 && t4==n1) || (t2==n3 && t3==n1 && t4==n2) || (t2==n3 && t3==n4 && t4==n1) || (t2==n3 && t3==n4 && t4==n2) || (t2==n4 && t3==n1 && t4==n3) || (t2==n4 && t3==n1 && t4==n2) || (t2==n4 && t3==n2 && t4==n3) || (t2==n4 && t3==n2 && t4==n1) || (t1==n2 && t3==n1 && t4==n3) || (t1==n2 && t3==n4 && t4==n3) || (t1==n2 && t3==n4 && t4==n1) || (t1==n2 && t2==n1 && t4==n3) || (t1==n2 && t2==n4 && t4==n3) || (t1==n2 && t2==n4 && t4==n1) || (t1==n2 && t2==n4 && t4==n1) || (t1==n4 && t3==n2 && t4==n3) || (t1==n3 && t3==n4 && t4==n1) || (t1==n3 && t2==n4 && t4==n2) || (t1==n4 && t2==n3 && t4==n1) || (t1==n4 && t3==n1 && t4==n3)) {
        valor.html(t1+t2+t3+t4+"  3R");
        $('.ad4').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4 && t4==n3) || (t1==n2 && t2==n3 && t3==n4 && t4==n1) || (t1==n2 && t2==n4 && t3==n1 && t4==n3) || (t1==n3 && t2==n1 && t3==n4 && t4==n2) || (t1==n3 && t2==n4 && t3==n1 && t4==n2) || (t1==n3 && t2==n4 && t3==n2 && t4==n1) || (t1==n4 && t2==n1 && t3==n2 && t4==n3) || (t1==n4 && t2==n3 && t3==n1 && t4==n2) || (t1==n4 && t2==n3 && t3==n2 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  4R");
        $('.ad4').attr('onclick','');
	}
	if ((t1==n1 && t2==n3) || (t1==n1 && t2==n4) || (t1==n1 && t3==n4) || (t1==n1 && t3==n2) || (t1==n1 && t4==n2) || (t1==n1 && t4==n3) || (t1==n3 && t2==n2) || (t1==n4 && t2==n2) || (t3==n4 && t2==n2) || (t3==n1 && t2==n2) || (t4==n1 && t2==n2) || (t4==n3 && t2==n2) || (t2==n1 && t3==n3) || (t2==n4 && t3==n3) || (t1==n2 && t3==n3) || (t3==n3 && t4==n1) || (t1==n4 && t3==n3) || (t4==n2 && t3==n3) || (t4==n4 && t3==n2) || (t3==n1 && t4==n4) || (t2==n1 && t4==n4) || (t2==n3 && t4==n4) || (t1==n2 && t4==n4) || (t1==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 1R");
        $('.ad4').attr('onclick','');
	}
	if ((t1==n1 && t3==n2 && t4==n3) || (t1==n1 && t3==n4 && t4==n2) || (t1==n1 && t2==n3 && t3==n2) || (t1==n1 && t3==n4 && t4==n3) || (t1==n1 && t2==n3 && t3==n4) || (t1==n1 && t2==n3 && t4==n2) || (t1==n1 && t2==n4 && t3==n2) || (t1==n1 && t2==n4 && t4==n2) || (t1==n1 && t2==n4 && t4==n3) || (t2==n2 && t3==n1 && t4==n3) || (t2==n2 && t3==n4 && t4==n1) || (t2==n2 && t3==n1 && t1==n3) || (t2==n2 && t3==n1 && t1==n4) || (t2==n2 && t1==n3 && t4==n1) || (t2==n2 && t1==n4 && t4==n1) || (t2==n2 && t3==n4 && t4==n3) || (t2==n2 && t3==n4 && t1==n3) || (t2==n2 && t3==n4 && t4==n1) || (t3==n3 && t1==n2 && t4==n1) || (t3==n3 && t1==n4 && t4==n1) || (t3==n3 && t1==n4 && t4==n2) || (t3==n3 && t2==n1 && t4==n2) || (t3==n3 && t2==n4 && t4==n2) || (t3==n3 && t1==n2 && t2==n4) || (t3==n3 && t1==n2 && t2==n1) || (t3==n3 && t2==n4 && t4==n1) || (t3==n2 && t2==n1 && t4==n4) || (t3==n1 && t2==n2 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t1==n2 && t2==n1 && t4==n4) || (t1==n3 && t2==n1 && t4==n4) || (t3==n2 && t2==n3 && t4==n4) || (t3==n1 && t2==n3 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n4 && t2==n2 && t4==n3) || (t1==n4 && t2==n1 && t3==n3) || (t1==n2 && t3==n1 && t4==n4) || (t1==n3 && t3==n2 && t4==n4) || (t1==n3 && t3==n1 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 2R");
        $('.ad4').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4) || (t1==n1 && t2==n2 && t4==n3) || (t1==n1 && t2==n4 && t3==n3) || (t1==n1 && t3==n3 && t4==n2) || (t1==n1 && t3==n2 && t4==n4) || (t1==n1 && t2==n3 && t4==n4) || (t3==n3 && t2==n2 && t4==n1) || (t1==n4 && t2==n2 && t3==n3) || (t3==n1 && t2==n2 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t3==n3 && t2==n1 && t4==n4) || (t1==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 1R");
        $('.ad4').attr('onclick','');
	}
	if ((t1==n1 && t2==n3 && t3==n4 && t4==n2) || (t1==n1 && t2==n4 && t3==n2 && t4==n3) || (t1==n3 && t2==n2 && t3==n4 && t4==n1) || (t1==n4 && t2==n2 && t3==n1 && t4==n3) || (t1==n2 && t2==n4 && t3==n3 && t4==n1) || (t1==n4 && t2==n1 && t3==n3 && t4==n2) || (t1==n2 && t2==n3 && t3==n1 && t4==n4) || (t1==n3 && t2==n1 && t3==n2 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 3R");
        $('.ad4').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4 && t4==n3) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n1 && t2==n3 && t3==n2 && t4==n4) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n4 && t2==n4 && t3==n3 && t4==n1) || (t1==n3 && t2==n2 && t3==n1 && t4==n4) || (t1==n2 && t2==n1 && t3==n3 && t4==n4) || (t1==n4 && t2==n2 && t3==n3 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 2R");
        $('.ad4').attr('onclick','');
	}     
}   	    	
function adivinar5(){
ok=true;
  if (typeof validar5==='function') {
  	ok=false;
  	validar5();
  }
  if (ok==false) {
  	  return ok;
  }
n1=document.f1[0].value;
n2=document.f1[1].value;
n3=document.f1[2].value;
n4=document.f1[3].value;
p1=document.f6[0].value;
p2=document.f6[1].value;
p3=document.f6[2].value;
p4=document.f6[3].value;
t1=p1;t2=p2;t3=p3;t4=p4;
document.f6[0].disabled=true;document.f6[1].disabled=true;document.f6[2].disabled=true;document.f6[3].disabled=true; document.f7[0].disabled=false;document.f7[1].disabled=false;document.f7[2].disabled=false;document.f7[3].disabled=false;
valor=$('#valor5');
resul=$('#resultado'); 
n=$('#nuevo'); 
    if ((t1!=n1 || t1!=n2 || t1!=n3 || t1!=n4) && (t2!=n1 || t2!=n2 || t2!=n3 || t2!=n4) && (t3!=n1 || t3!=n2 || t3!=n3 || t3!=n4) && (t4!=n1 || t4!=n2 || t4!=n3 || t4!=n4)) {
    	valor.html(t1+t2+t3+t4+"  N");
      $('.ad5').attr('onclick','');
    }
	if (t1==n1 && t2==n2 && t3==n3 && t4==n4) {
		valor.html(t1+t2+t3+t4+"  <strong style='color:green'>4B</strong>");
		$(document).ready(function(){
         $("#mostrarmodal").modal("show");
         resul.html("<strong style='color:green'>GANASTE</strong><br>el numero es:  "+n1+n2+n3+n4);
         document.getElementById('boton5').disabled=false;
		     document.f2[0].disabled=true;document.f2[1].disabled=true;document.f2[2].disabled=true;document.f2[3].disabled=true;document.f3[0].disabled=true;document.f3[1].disabled=true;document.f3[2].disabled=true;document.f3[3].disabled=true;document.f4[0].disabled=true;document.f4[1].disabled=true;document.f4[2].disabled=true;document.f4[3].disabled=true;document.f5[0].disabled=true;document.f5[1].disabled=true;document.f5[2].disabled=true;document.f5[3].disabled=true;document.f6[0].disabled=true;document.f6[1].disabled=true;document.f6[2].disabled=true;document.f6[3].disabled=true;document.f7[0].disabled=true;document.f7[1].disabled=true;document.f7[2].disabled=true;document.f7[3].disabled=true;document.f8[0].disabled=true;document.f8[1].disabled=true;document.f8[2].disabled=true;document.f8[3].disabled=true;
		     clear();
         $('.ad5').attr('onclick','adivinar5()');
		     n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
         });
	}
	if ((t1==n1 && t2==n2 && t3==n3 && t4!=n4) || (t1==n1 && t2==n2 && t3!=n3 && t4==n4) || (t1==n1 && t2!=n2 && t3==n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>3B</strong>");
        $('.ad5').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong>"); 
        $('.ad5').attr('onclick','');
	}
	if ((t1==n1 && t2!=n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3!=n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong>");
        $('.ad5').attr('onclick','');
	}
	if ((t1==n2) || t1==n3 || t1==n4  || t2==n1 || t2==n3 || t2==n4 || t3==n1 || t3==n2 || t3==n4 || t4==n1 || t4==n2 || t4==n3) {
        valor.html(t1+t2+t3+t4+"  1R");
        $('.ad5').attr('onclick','');
    }
	if ((t1==n2 && t2==n1) || (t1==n2 && t3==n1) || (t1==n2 && t4==n1) || (t1==n2 && t2==n3) || (t1==n2 && t4==n3) || (t1==n2 && t2==n4) || (t1==n2 && t3==n4) || (t1==n3 && t3==n2) || (t1==n3 && t4==n2) || (t1==n3 && t2==n4) || (t1==n3 && t3==n4) || (t1==n4 && t2==n3) || (t1==n4 && t4==n3) || (t1==n4 && t3==n2) || (t1==n4 && t2==n1) || (t1==n3 && t2==n1) || (t1==n3 && t3==n1) || (t1==n3 && t4==n1) || (t1==n4 && t2==n1) || (t1==n4 && t3==n1) || (t1==n4 && t4==n1) || (t1==n4 && t3==n2) || (t1==n4 && t4==n2) || (t2==n1 && t3==n2) || (t2==n1 && t3==n4) || (t2==n1 && t4==n2) || (t2==n1 && t4==n3) || (t2==n3 && t3==n1) || (t2==n3 && t4==n1) || (t2==n3 && t3==n2) || (t2==n3 && t4==n2) || (t2==n4 && t3==n1) || (t2==n4 && t4==n1) || (t2==n4 && t3==n2) || (t2==n4 && t4==n2) || (t3==n1 && t4==n2) || (t3==n2 && t4==n1) || (t3==n2 && t4==n3) || (t3==n4 && t4==n1) || (t3==n4 && t4==n2) || (t3==n4 && t4==n3) || (t2==n3 && t3==n4) || (t3==n1 && t4==n3) || (t2==n4 && t4==n3)) {
		valor.html(t1+t2+t3+t4+"  2R");
    $('.ad5').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4) || (t1==n2 && t2==n3 && t3==n1) || (t1==n2 && t2==n3 && t3==n4) || (t1==n2 && t2==n3 && t4==n1) || (t1==n2 && t2==n4 && t3==n1) || (t1==n3 && t2==n1 && t3==n2) || (t1==n3 && t2==n4 && t3==n1) || (t1==n3 && t2==n4 && t3==n2) || (t1==n3 && t2==n1 && t3==n4) || (t1==n4 && t2==n1 && t3==n2) || (t1==n4 && t2==n3 && t3==n2) || (t1==n4 && t2==n3 && t3==n1) || (t1==n4 && t2==n1 && t4==n3) || (t1==n4 && t2==n1 && t4==n2) || (t2==n1 && t3==n2 && t4==n3) || (t2==n1 && t3==n4 && t4==n3) || (t2==n1 && t3==n4 && t4==n2) || (t2==n3 && t3==n2 && t4==n1) || (t2==n3 && t3==n1 && t4==n2) || (t2==n3 && t3==n4 && t4==n1) || (t2==n3 && t3==n4 && t4==n2) || (t2==n4 && t3==n1 && t4==n3) || (t2==n4 && t3==n1 && t4==n2) || (t2==n4 && t3==n2 && t4==n3) || (t2==n4 && t3==n2 && t4==n1) || (t1==n2 && t3==n1 && t4==n3) || (t1==n2 && t3==n4 && t4==n3) || (t1==n2 && t3==n4 && t4==n1) || (t1==n2 && t2==n1 && t4==n3) || (t1==n2 && t2==n4 && t4==n3) || (t1==n2 && t2==n4 && t4==n1) || (t1==n2 && t2==n4 && t4==n1) || (t1==n4 && t3==n2 && t4==n3) || (t1==n3 && t3==n4 && t4==n1) || (t1==n3 && t2==n4 && t4==n2) || (t1==n4 && t2==n3 && t4==n1) || (t1==n4 && t3==n1 && t4==n3)) {
        valor.html(t1+t2+t3+t4+"  3R");
        $('.ad5').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4 && t4==n3) || (t1==n2 && t2==n3 && t3==n4 && t4==n1) || (t1==n2 && t2==n4 && t3==n1 && t4==n3) || (t1==n3 && t2==n1 && t3==n4 && t4==n2) || (t1==n3 && t2==n4 && t3==n1 && t4==n2) || (t1==n3 && t2==n4 && t3==n2 && t4==n1) || (t1==n4 && t2==n1 && t3==n2 && t4==n3) || (t1==n4 && t2==n3 && t3==n1 && t4==n2) || (t1==n4 && t2==n3 && t3==n2 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  4R");
        $('.ad5').attr('onclick','');
	}
	if ((t1==n1 && t2==n3) || (t1==n1 && t2==n4) || (t1==n1 && t3==n4) || (t1==n1 && t3==n2) || (t1==n1 && t4==n2) || (t1==n1 && t4==n3) || (t1==n3 && t2==n2) || (t1==n4 && t2==n2) || (t3==n4 && t2==n2) || (t3==n1 && t2==n2) || (t4==n1 && t2==n2) || (t4==n3 && t2==n2) || (t2==n1 && t3==n3) || (t2==n4 && t3==n3) || (t1==n2 && t3==n3) || (t3==n3 && t4==n1) || (t1==n4 && t3==n3) || (t4==n2 && t3==n3) || (t4==n4 && t3==n2) || (t3==n1 && t4==n4) || (t2==n1 && t4==n4) || (t2==n3 && t4==n4) || (t1==n2 && t4==n4) || (t1==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 1R");
        $('.ad5').attr('onclick','');
	}
	if ((t1==n1 && t3==n2 && t4==n3) || (t1==n1 && t3==n4 && t4==n2) || (t1==n1 && t2==n3 && t3==n2) || (t1==n1 && t3==n4 && t4==n3) || (t1==n1 && t2==n3 && t3==n4) || (t1==n1 && t2==n3 && t4==n2) || (t1==n1 && t2==n4 && t3==n2) || (t1==n1 && t2==n4 && t4==n2) || (t1==n1 && t2==n4 && t4==n3) || (t2==n2 && t3==n1 && t4==n3) || (t2==n2 && t3==n4 && t4==n1) || (t2==n2 && t3==n1 && t1==n3) || (t2==n2 && t3==n1 && t1==n4) || (t2==n2 && t1==n3 && t4==n1) || (t2==n2 && t1==n4 && t4==n1) || (t2==n2 && t3==n4 && t4==n3) || (t2==n2 && t3==n4 && t1==n3) || (t2==n2 && t3==n4 && t4==n1) || (t3==n3 && t1==n2 && t4==n1) || (t3==n3 && t1==n4 && t4==n1) || (t3==n3 && t1==n4 && t4==n2) || (t3==n3 && t2==n1 && t4==n2) || (t3==n3 && t2==n4 && t4==n2) || (t3==n3 && t1==n2 && t2==n4) || (t3==n3 && t1==n2 && t2==n1) || (t3==n3 && t2==n4 && t4==n1) || (t3==n2 && t2==n1 && t4==n4) || (t3==n1 && t2==n2 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t1==n2 && t2==n1 && t4==n4) || (t1==n3 && t2==n1 && t4==n4) || (t3==n2 && t2==n3 && t4==n4) || (t3==n1 && t2==n3 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n4 && t2==n2 && t4==n3) || (t1==n4 && t2==n1 && t3==n3) || (t1==n2 && t3==n1 && t4==n4) || (t1==n3 && t3==n2 && t4==n4) || (t1==n3 && t3==n1 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 2R");
        $('.ad5').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4) || (t1==n1 && t2==n2 && t4==n3) || (t1==n1 && t2==n4 && t3==n3) || (t1==n1 && t3==n3 && t4==n2) || (t1==n1 && t3==n2 && t4==n4) || (t1==n1 && t2==n3 && t4==n4) || (t3==n3 && t2==n2 && t4==n1) || (t1==n4 && t2==n2 && t3==n3) || (t3==n1 && t2==n2 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t3==n3 && t2==n1 && t4==n4) || (t1==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 1R");
        $('.ad5').attr('onclick','');
	}
	if ((t1==n1 && t2==n3 && t3==n4 && t4==n2) || (t1==n1 && t2==n4 && t3==n2 && t4==n3) || (t1==n3 && t2==n2 && t3==n4 && t4==n1) || (t1==n4 && t2==n2 && t3==n1 && t4==n3) || (t1==n2 && t2==n4 && t3==n3 && t4==n1) || (t1==n4 && t2==n1 && t3==n3 && t4==n2) || (t1==n2 && t2==n3 && t3==n1 && t4==n4) || (t1==n3 && t2==n1 && t3==n2 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 3R");
        $('.ad5').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4 && t4==n3) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n1 && t2==n3 && t3==n2 && t4==n4) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n4 && t2==n4 && t3==n3 && t4==n1) || (t1==n3 && t2==n2 && t3==n1 && t4==n4) || (t1==n2 && t2==n1 && t3==n3 && t4==n4) || (t1==n4 && t2==n2 && t3==n3 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 2R");
        $('.ad5').attr('onclick','');
	}     
}
function adivinar6(){
ok=true;
  if (typeof validar6==='function') {
  	ok=false;
  	validar6();
  }
  if (ok==false) {
  	  return ok;
  }
n1=document.f1[0].value;
n2=document.f1[1].value;
n3=document.f1[2].value;
n4=document.f1[3].value;
p1=document.f7[0].value;
p2=document.f7[1].value;
p3=document.f7[2].value;
p4=document.f7[3].value;
t1=p1;t2=p2;t3=p3;t4=p4;
document.f7[0].disabled=true;document.f7[1].disabled=true;document.f7[2].disabled=true;document.f7[3].disabled=true; document.f8[0].disabled=false;document.f8[1].disabled=false;document.f8[2].disabled=false;document.f8[3].disabled=false;
valor=$('#valor6');
resul=$('#resultado');
n=$('#nuevo');  
    if ((t1!=n1 || t1!=n2 || t1!=n3 || t1!=n4) && (t2!=n1 || t2!=n2 || t2!=n3 || t2!=n4) && (t3!=n1 || t3!=n2 || t3!=n3 || t3!=n4) && (t4!=n1 || t4!=n2 || t4!=n3 || t4!=n4)) {
    	valor.html(t1+t2+t3+t4+"  N");
      $('.ad6').attr('onclick','');
    }
	if (t1==n1 && t2==n2 && t3==n3 && t4==n4) {
		valor.html(t1+t2+t3+t4+"  <strong style='color:green'>4B</strong>");
		$(document).ready(function(){
         $("#mostrarmodal").modal("show");
         resul.html("<strong style='color:green'>GANASTE</strong><br>el numero es:  "+n1+n2+n3+n4);
         document.getElementById('boton6').disabled=false;
		     document.f2[0].disabled=true;document.f2[1].disabled=true;document.f2[2].disabled=true;document.f2[3].disabled=true;document.f3[0].disabled=true;document.f3[1].disabled=true;document.f3[2].disabled=true;document.f3[3].disabled=true;document.f4[0].disabled=true;document.f4[1].disabled=true;document.f4[2].disabled=true;document.f4[3].disabled=true;document.f5[0].disabled=true;document.f5[1].disabled=true;document.f5[2].disabled=true;document.f5[3].disabled=true;document.f6[0].disabled=true;document.f6[1].disabled=true;document.f6[2].disabled=true;document.f6[3].disabled=true;document.f7[0].disabled=true;document.f7[1].disabled=true;document.f7[2].disabled=true;document.f7[3].disabled=true;document.f8[0].disabled=true;document.f8[1].disabled=true;document.f8[2].disabled=true;document.f8[3].disabled=true;
		     clear();
         $('.ad6').attr('onclick','adivinar6()');
		     n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
         });
	}
	if ((t1==n1 && t2==n2 && t3==n3 && t4!=n4) || (t1==n1 && t2==n2 && t3!=n3 && t4==n4) || (t1==n1 && t2!=n2 && t3==n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>3B</strong>");
        $('.ad6').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong>"); 
        $('.ad6').attr('onclick','');
	}
	if ((t1==n1 && t2!=n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3!=n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong>");
        $('.ad6').attr('onclick','');
	}
	if ((t1==n2) || t1==n3 || t1==n4  || t2==n1 || t2==n3 || t2==n4 || t3==n1 || t3==n2 || t3==n4 || t4==n1 || t4==n2 || t4==n3) {
        valor.html(t1+t2+t3+t4+"  1R");
        $('.ad6').attr('onclick','');
    }
	if ((t1==n2 && t2==n1) || (t1==n2 && t3==n1) || (t1==n2 && t4==n1) || (t1==n2 && t2==n3) || (t1==n2 && t4==n3) || (t1==n2 && t2==n4) || (t1==n2 && t3==n4) || (t1==n3 && t3==n2) || (t1==n3 && t4==n2) || (t1==n3 && t2==n4) || (t1==n3 && t3==n4) || (t1==n4 && t2==n3) || (t1==n4 && t4==n3) || (t1==n4 && t3==n2) || (t1==n4 && t2==n1) || (t1==n3 && t2==n1) || (t1==n3 && t3==n1) || (t1==n3 && t4==n1) || (t1==n4 && t2==n1) || (t1==n4 && t3==n1) || (t1==n4 && t4==n1) || (t1==n4 && t3==n2) || (t1==n4 && t4==n2) || (t2==n1 && t3==n2) || (t2==n1 && t3==n4) || (t2==n1 && t4==n2) || (t2==n1 && t4==n3) || (t2==n3 && t3==n1) || (t2==n3 && t4==n1) || (t2==n3 && t3==n2) || (t2==n3 && t4==n2) || (t2==n4 && t3==n1) || (t2==n4 && t4==n1) || (t2==n4 && t3==n2) || (t2==n4 && t4==n2) || (t3==n1 && t4==n2) || (t3==n2 && t4==n1) || (t3==n2 && t4==n3) || (t3==n4 && t4==n1) || (t3==n4 && t4==n2) || (t3==n4 && t4==n3) || (t2==n3 && t3==n4) || (t3==n1 && t4==n3) || (t2==n4 && t4==n3)) {
		valor.html(t1+t2+t3+t4+"  2R");
    $('.ad6').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4) || (t1==n2 && t2==n3 && t3==n1) || (t1==n2 && t2==n3 && t3==n4) || (t1==n2 && t2==n3 && t4==n1) || (t1==n2 && t2==n4 && t3==n1) || (t1==n3 && t2==n1 && t3==n2) || (t1==n3 && t2==n4 && t3==n1) || (t1==n3 && t2==n4 && t3==n2) || (t1==n3 && t2==n1 && t3==n4) || (t1==n4 && t2==n1 && t3==n2) || (t1==n4 && t2==n3 && t3==n2) || (t1==n4 && t2==n3 && t3==n1) || (t1==n4 && t2==n1 && t4==n3) || (t1==n4 && t2==n1 && t4==n2) || (t2==n1 && t3==n2 && t4==n3) || (t2==n1 && t3==n4 && t4==n3) || (t2==n1 && t3==n4 && t4==n2) || (t2==n3 && t3==n2 && t4==n1) || (t2==n3 && t3==n1 && t4==n2) || (t2==n3 && t3==n4 && t4==n1) || (t2==n3 && t3==n4 && t4==n2) || (t2==n4 && t3==n1 && t4==n3) || (t2==n4 && t3==n1 && t4==n2) || (t2==n4 && t3==n2 && t4==n3) || (t2==n4 && t3==n2 && t4==n1) || (t1==n2 && t3==n1 && t4==n3) || (t1==n2 && t3==n4 && t4==n3) || (t1==n2 && t3==n4 && t4==n1) || (t1==n2 && t2==n1 && t4==n3) || (t1==n2 && t2==n4 && t4==n3) || (t1==n2 && t2==n4 && t4==n1) || (t1==n4 && t3==n2 && t4==n3) || (t1==n3 && t3==n4 && t4==n1) || (t1==n3 && t2==n4 && t4==n2) || (t1==n4 && t2==n3 && t4==n1) || (t1==n4 && t3==n1 && t4==n3)) {
        valor.html(t1+t2+t3+t4+"  3R");
        $('.ad6').attr('onclick','');
	}
	if ((t1==n2 && t2==n1 && t3==n4 && t4==n3) || (t1==n2 && t2==n3 && t3==n4 && t4==n1) || (t1==n2 && t2==n4 && t3==n1 && t4==n3) || (t1==n3 && t2==n1 && t3==n4 && t4==n2) || (t1==n3 && t2==n4 && t3==n1 && t4==n2) || (t1==n3 && t2==n4 && t3==n2 && t4==n1) || (t1==n4 && t2==n1 && t3==n2 && t4==n3) || (t1==n4 && t2==n3 && t3==n1 && t4==n2) || (t1==n4 && t2==n3 && t3==n2 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  4R");
        $('.ad6').attr('onclick','');
	}
	if ((t1==n1 && t2==n3) || (t1==n1 && t2==n4) || (t1==n1 && t3==n4) || (t1==n1 && t3==n2) || (t1==n1 && t4==n2) || (t1==n1 && t4==n3) || (t1==n3 && t2==n2) || (t1==n4 && t2==n2) || (t3==n4 && t2==n2) || (t3==n1 && t2==n2) || (t4==n1 && t2==n2) || (t4==n3 && t2==n2) || (t2==n1 && t3==n3) || (t2==n4 && t3==n3) || (t1==n2 && t3==n3) || (t3==n3 && t4==n1) || (t1==n4 && t3==n3) || (t4==n2 && t3==n3) || (t4==n4 && t3==n2) || (t3==n1 && t4==n4) || (t2==n1 && t4==n4) || (t2==n3 && t4==n4) || (t1==n2 && t4==n4) || (t1==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 1R");
        $('.ad6').attr('onclick','');
	}
	if ((t1==n1 && t3==n2 && t4==n3) || (t1==n1 && t3==n4 && t4==n2) || (t1==n1 && t2==n3 && t3==n2) || (t1==n1 && t3==n4 && t4==n3) || (t1==n1 && t2==n3 && t3==n4) || (t1==n1 && t2==n3 && t4==n2) || (t1==n1 && t2==n4 && t3==n2) || (t1==n1 && t2==n4 && t4==n2) || (t1==n1 && t2==n4 && t4==n3) || (t2==n2 && t3==n1 && t4==n3) || (t2==n2 && t3==n4 && t4==n1) || (t2==n2 && t3==n1 && t1==n3) || (t2==n2 && t3==n1 && t1==n4) || (t2==n2 && t1==n3 && t4==n1) || (t2==n2 && t1==n4 && t4==n1) || (t2==n2 && t3==n4 && t4==n3) || (t2==n2 && t3==n4 && t1==n3) || (t2==n2 && t3==n4 && t4==n1) || (t3==n3 && t1==n2 && t4==n1) || (t3==n3 && t1==n4 && t4==n1) || (t3==n3 && t1==n4 && t4==n2) || (t3==n3 && t2==n1 && t4==n2) || (t3==n3 && t2==n4 && t4==n2) || (t3==n3 && t1==n2 && t2==n4) || (t3==n3 && t1==n2 && t2==n1) || (t3==n3 && t2==n4 && t4==n1) || (t3==n2 && t2==n1 && t4==n4) || (t3==n1 && t2==n2 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t1==n2 && t2==n1 && t4==n4) || (t1==n3 && t2==n1 && t4==n4) || (t3==n2 && t2==n3 && t4==n4) || (t3==n1 && t2==n3 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n4 && t2==n2 && t4==n3) || (t1==n4 && t2==n1 && t3==n3) || (t1==n2 && t3==n1 && t4==n4) || (t1==n3 && t3==n2 && t4==n4) || (t1==n3 && t3==n1 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 2R");
        $('.ad6').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4) || (t1==n1 && t2==n2 && t4==n3) || (t1==n1 && t2==n4 && t3==n3) || (t1==n1 && t3==n3 && t4==n2) || (t1==n1 && t3==n2 && t4==n4) || (t1==n1 && t2==n3 && t4==n4) || (t3==n3 && t2==n2 && t4==n1) || (t1==n4 && t2==n2 && t3==n3) || (t3==n1 && t2==n2 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t3==n3 && t2==n1 && t4==n4) || (t1==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 1R");
        $('.ad6').attr('onclick','');
	}
	if ((t1==n1 && t2==n3 && t3==n4 && t4==n2) || (t1==n1 && t2==n4 && t3==n2 && t4==n3) || (t1==n3 && t2==n2 && t3==n4 && t4==n1) || (t1==n4 && t2==n2 && t3==n1 && t4==n3) || (t1==n2 && t2==n4 && t3==n3 && t4==n1) || (t1==n4 && t2==n1 && t3==n3 && t4==n2) || (t1==n2 && t2==n3 && t3==n1 && t4==n4) || (t1==n3 && t2==n1 && t3==n2 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 3R");
        $('.ad6').attr('onclick','');
	}
	if ((t1==n1 && t2==n2 && t3==n4 && t4==n3) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n1 && t2==n3 && t3==n2 && t4==n4) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n4 && t2==n4 && t3==n3 && t4==n1) || (t1==n3 && t2==n2 && t3==n1 && t4==n4) || (t1==n2 && t2==n1 && t3==n3 && t4==n4) || (t1==n4 && t2==n2 && t3==n3 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 2R");
        $('.ad6').attr('onclick','');
	}     
}
function adivinar7(){
ok=true;
  if (typeof validar7==='function') {
  	ok=false;
  	validar7();
  }
  if (ok==false) {
  	  return ok;
  }
n1=document.f1[0].value;
n2=document.f1[1].value;
n3=document.f1[2].value;
n4=document.f1[3].value;
p1=document.f8[0].value;
p2=document.f8[1].value;
p3=document.f8[2].value;
p4=document.f8[3].value;
t1=p1;t2=p2;t3=p3;t4=p4;
document.f8[0].disabled=true;document.f8[1].disabled=true;document.f8[2].disabled=true;document.f8[3].disabled=true;
valor=$('#valor7');
resul=$('#resultado'); 
n=$('#nuevo'); 
    if ((t1!=n1 || t1!=n2 || t1!=n3 || t1!=n4) && (t2!=n1 || t2!=n2 || t2!=n3 || t2!=n4) && (t3!=n1 || t3!=n2 || t3!=n3 || t3!=n4) && (t4!=n1 || t4!=n2 || t4!=n3 || t4!=n4)) {
    	valor.html(t1+t2+t3+t4+"  N");
    	$(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
        });
    }
	if (t1==n1 && t2==n2 && t3==n3 && t4==n4) {
		valor.html(t1+t2+t3+t4+"  <strong style='color:green'>4B</strong>");
		$(document).ready(function(){
         $("#mostrarmodal").modal("show");
         resul.html("<strong style='color:green'>GANASTE</strong><br>el numero es:  "+n1+n2+n3+n4);
         document.getElementById('boton7').disabled=false;
		 document.f2[0].disabled=true;document.f2[1].disabled=true;document.f2[2].disabled=true;document.f2[3].disabled=true;document.f3[0].disabled=true;document.f3[1].disabled=true;document.f3[2].disabled=true;document.f3[3].disabled=true;document.f4[0].disabled=true;document.f4[1].disabled=true;document.f4[2].disabled=true;document.f4[3].disabled=true;document.f5[0].disabled=true;document.f5[1].disabled=true;document.f5[2].disabled=true;document.f5[3].disabled=true;document.f6[0].disabled=true;document.f6[1].disabled=true;document.f6[2].disabled=true;document.f6[3].disabled=true;document.f7[0].disabled=true;document.f7[1].disabled=true;document.f7[2].disabled=true;document.f7[3].disabled=true;document.f8[0].disabled=true;document.f8[1].disabled=true;document.f8[2].disabled=true;document.f8[3].disabled=true;
		 clear();
    	 n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
         });
	}
	if ((t1==n1 && t2==n2 && t3==n3 && t4!=n4) || (t1==n1 && t2==n2 && t3!=n3 && t4==n4) || (t1==n1 && t2!=n2 && t3==n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>3B</strong>");
        $(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
        });
	}
	if ((t1==n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1==n1 && t2!=n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2==n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4==n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong>");
        $(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');

        });
	}
	if ((t1==n1 && t2!=n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2==n2 && t3!=n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3==n3 && t4!=n4) || (t1!=n1 && t2!=n2 && t3!=n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong>");
        $(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
        });
	}
	if ((t1==n2) || t1==n3 || t1==n4  || t2==n1 || t2==n3 || t2==n4 || t3==n1 || t3==n2 || t3==n4 || t4==n1 || t4==n2 || t4==n3) {
        valor.html(t1+t2+t3+t4+"  1R");
        $(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');

        });
    }
	if ((t1==n2 && t2==n1) || (t1==n2 && t3==n1) || (t1==n2 && t4==n1) || (t1==n2 && t2==n3) || (t1==n2 && t4==n3) || (t1==n2 && t2==n4) || (t1==n2 && t3==n4) || (t1==n3 && t3==n2) || (t1==n3 && t4==n2) || (t1==n3 && t2==n4) || (t1==n3 && t3==n4) || (t1==n4 && t2==n3) || (t1==n4 && t4==n3) || (t1==n4 && t3==n2) || (t1==n4 && t2==n1) || (t1==n3 && t2==n1) || (t1==n3 && t3==n1) || (t1==n3 && t4==n1) || (t1==n4 && t2==n1) || (t1==n4 && t3==n1) || (t1==n4 && t4==n1) || (t1==n4 && t3==n2) || (t1==n4 && t4==n2) || (t2==n1 && t3==n2) || (t2==n1 && t3==n4) || (t2==n1 && t4==n2) || (t2==n1 && t4==n3) || (t2==n3 && t3==n1) || (t2==n3 && t4==n1) || (t2==n3 && t3==n2) || (t2==n3 && t4==n2) || (t2==n4 && t3==n1) || (t2==n4 && t4==n1) || (t2==n4 && t3==n2) || (t2==n4 && t4==n2) || (t3==n1 && t4==n2) || (t3==n2 && t4==n1) || (t3==n2 && t4==n3) || (t3==n4 && t4==n1) || (t3==n4 && t4==n2) || (t3==n4 && t4==n3) || (t2==n3 && t3==n4) || (t3==n1 && t4==n3) || (t2==n4 && t4==n3)) {
		valor.html(t1+t2+t3+t4+"  2R");
		$(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
        });
	}
	if ((t1==n2 && t2==n1 && t3==n4) || (t1==n2 && t2==n3 && t3==n1) || (t1==n2 && t2==n3 && t3==n4) || (t1==n2 && t2==n3 && t4==n1) || (t1==n2 && t2==n4 && t3==n1) || (t1==n3 && t2==n1 && t3==n2) || (t1==n3 && t2==n4 && t3==n1) || (t1==n3 && t2==n4 && t3==n2) || (t1==n3 && t2==n1 && t3==n4) || (t1==n4 && t2==n1 && t3==n2) || (t1==n4 && t2==n3 && t3==n2) || (t1==n4 && t2==n3 && t3==n1) || (t1==n4 && t2==n1 && t4==n3) || (t1==n4 && t2==n1 && t4==n2) || (t2==n1 && t3==n2 && t4==n3) || (t2==n1 && t3==n4 && t4==n3) || (t2==n1 && t3==n4 && t4==n2) || (t2==n3 && t3==n2 && t4==n1) || (t2==n3 && t3==n1 && t4==n2) || (t2==n3 && t3==n4 && t4==n1) || (t2==n3 && t3==n4 && t4==n2) || (t2==n4 && t3==n1 && t4==n3) || (t2==n4 && t3==n1 && t4==n2) || (t2==n4 && t3==n2 && t4==n3) || (t2==n4 && t3==n2 && t4==n1) || (t1==n2 && t3==n1 && t4==n3) || (t1==n2 && t3==n4 && t4==n3) || (t1==n2 && t3==n4 && t4==n1) || (t1==n2 && t2==n1 && t4==n3) || (t1==n2 && t2==n4 && t4==n3) || (t1==n2 && t2==n4 && t4==n1) || (t1==n4 && t3==n2 && t4==n3) || (t1==n3 && t3==n4 && t4==n1) || (t1==n3 && t2==n4 && t4==n2) || (t1==n4 && t2==n3 && t4==n1) || (t1==n4 && t3==n1 && t4==n3)) {
        valor.html(t1+t2+t3+t4+"  3R");
        $(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
        });
	}
	if ((t1==n2 && t2==n1 && t3==n4 && t4==n3) || (t1==n2 && t2==n3 && t3==n4 && t4==n1) || (t1==n2 && t2==n4 && t3==n1 && t4==n3) || (t1==n3 && t2==n1 && t3==n4 && t4==n2) || (t1==n3 && t2==n4 && t3==n1 && t4==n2) || (t1==n3 && t2==n4 && t3==n2 && t4==n1) || (t1==n4 && t2==n1 && t3==n2 && t4==n3) || (t1==n4 && t2==n3 && t3==n1 && t4==n2) || (t1==n4 && t2==n3 && t3==n2 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  4R");
        $(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
        });
	}
	if ((t1==n1 && t2==n3) || (t1==n1 && t2==n4) || (t1==n1 && t3==n4) || (t1==n1 && t3==n2) || (t1==n1 && t4==n2) || (t1==n1 && t4==n3) || (t1==n3 && t2==n2) || (t1==n4 && t2==n2) || (t3==n4 && t2==n2) || (t3==n1 && t2==n2) || (t4==n1 && t2==n2) || (t4==n3 && t2==n2) || (t2==n1 && t3==n3) || (t2==n4 && t3==n3) || (t1==n2 && t3==n3) || (t3==n3 && t4==n1) || (t1==n4 && t3==n3) || (t4==n2 && t3==n3) || (t4==n4 && t3==n2) || (t3==n1 && t4==n4) || (t2==n1 && t4==n4) || (t2==n3 && t4==n4) || (t1==n2 && t4==n4) || (t1==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 1R");
        $(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
        });
	}
	if ((t1==n1 && t3==n2 && t4==n3) || (t1==n1 && t3==n4 && t4==n2) || (t1==n1 && t2==n3 && t3==n2) || (t1==n1 && t3==n4 && t4==n3) || (t1==n1 && t2==n3 && t3==n4) || (t1==n1 && t2==n3 && t4==n2) || (t1==n1 && t2==n4 && t3==n2) || (t1==n1 && t2==n4 && t4==n2) || (t1==n1 && t2==n4 && t4==n3) || (t2==n2 && t3==n1 && t4==n3) || (t2==n2 && t3==n4 && t4==n1) || (t2==n2 && t3==n1 && t1==n3) || (t2==n2 && t3==n1 && t1==n4) || (t2==n2 && t1==n3 && t4==n1) || (t2==n2 && t1==n4 && t4==n1) || (t2==n2 && t3==n4 && t4==n3) || (t2==n2 && t3==n4 && t1==n3) || (t2==n2 && t3==n4 && t4==n1) || (t3==n3 && t1==n2 && t4==n1) || (t3==n3 && t1==n4 && t4==n1) || (t3==n3 && t1==n4 && t4==n2) || (t3==n3 && t2==n1 && t4==n2) || (t3==n3 && t2==n4 && t4==n2) || (t3==n3 && t1==n2 && t2==n4) || (t3==n3 && t1==n2 && t2==n1) || (t3==n3 && t2==n4 && t4==n1) || (t3==n2 && t2==n1 && t4==n4) || (t3==n1 && t2==n2 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t1==n2 && t2==n1 && t4==n4) || (t1==n3 && t2==n1 && t4==n4) || (t3==n2 && t2==n3 && t4==n4) || (t3==n1 && t2==n3 && t4==n4) || (t1==n2 && t2==n3 && t4==n4) || (t1==n4 && t2==n2 && t4==n3) || (t1==n4 && t2==n1 && t3==n3) || (t1==n2 && t3==n1 && t4==n4) || (t1==n3 && t3==n2 && t4==n4) || (t1==n3 && t3==n1 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 2R");
        $(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
        });
	}
	if ((t1==n1 && t2==n2 && t3==n4) || (t1==n1 && t2==n2 && t4==n3) || (t1==n1 && t2==n4 && t3==n3) || (t1==n1 && t3==n3 && t4==n2) || (t1==n1 && t3==n2 && t4==n4) || (t1==n1 && t2==n3 && t4==n4) || (t3==n3 && t2==n2 && t4==n1) || (t1==n4 && t2==n2 && t3==n3) || (t3==n1 && t2==n2 && t4==n4) || (t1==n3 && t2==n2 && t4==n4) || (t3==n3 && t2==n1 && t4==n4) || (t1==n2 && t3==n3 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 1R");
        $(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
        });
	}
	if ((t1==n1 && t2==n3 && t3==n4 && t4==n2) || (t1==n1 && t2==n4 && t3==n2 && t4==n3) || (t1==n3 && t2==n2 && t3==n4 && t4==n1) || (t1==n4 && t2==n2 && t3==n1 && t4==n3) || (t1==n2 && t2==n4 && t3==n3 && t4==n1) || (t1==n4 && t2==n1 && t3==n3 && t4==n2) || (t1==n2 && t2==n3 && t3==n1 && t4==n4) || (t1==n3 && t2==n1 && t3==n2 && t4==n4)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>1B</strong> 3R");
        $(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
        });
	}
	if ((t1==n1 && t2==n2 && t3==n4 && t4==n3) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n1 && t2==n3 && t3==n2 && t4==n4) || (t1==n1 && t2==n4 && t3==n3 && t4==n2) || (t1==n4 && t2==n4 && t3==n3 && t4==n1) || (t1==n3 && t2==n2 && t3==n1 && t4==n4) || (t1==n2 && t2==n1 && t3==n3 && t4==n4) || (t1==n4 && t2==n2 && t3==n3 && t4==n1)) {
        valor.html(t1+t2+t3+t4+"  <strong style='color:green'>2B</strong> 2R");
        $(document).ready(function(){
         $("#mostrarmodal").modal("show");
          resul.html("<strong style='color:red'>PERDISTE</strong><br>el numero es:  "+n1+n2+n3+n4);
          document.getElementById('boton7').disabled=false;
    	  clear();
    	  n.html('<a type="submit" href="index.html" class="btn btn-primary bot">Jugar de nuevo</a>');
        });
	}     
      
}
function paso1(){
	pasos=$('#paso1');
	pasos.html("<div style='padding-top:50px'><p>1)ingrese los numeros que la otra persona debe adivinar.<br>2)Si desea jugar solo puede presionar en el boton generar y automaticamente se genera un numero aleatorio de 4 cifras.<br>3)Los numeros ingresados en cada campo deben estar comprendidos entre 1 y 9.<br>4)No puede ingresar numeros repetidos.<br>5)tampoco se permite ingresar el numero 0.</p>"
		       +"<div style='padding-top:20px'><p align='center'><img style='height:150px;width:40%' src='img3.jpeg' align='left'>ejemplo:<br>"
		       +"<u style='color:red'>0</u>  2  3  4 <i class='fas fa-times-circle'></i><br><u style='color:red'>1</u> 2  <u style='color:red'>1</u>  4 <i class='fas fa-times-circle'></i><br>1 9 3 6  <i class='fas fa-check-circle'></i></p></div></div>");
}
function paso2(){
	 pasos=$('#paso1');
	 pasos.html("<div>"+
	 	           "<strong>1R</strong>: un numero existe pero no se encuentra en su posicion<br>"+
	 	           "<strong>2R</strong>: dos numeros existen pero no se encuentran en su posiciones<br>"+
	 	           "<strong>3R</strong>: tres numeros existen pero no se encuentran en su posiciones<br>"+
	 	           "<strong>4R</strong>: cuatro numeros existen pero no se encuentran en su posiciones<br>"+
	 	           "<strong>1B</strong>: un numero existe y se encuentra en su posicion<br>"+
	 	           "<strong>2B</strong>: dos numeros existen y se encuentran en su posiciones<br>"+
	 	           "<strong>3B</strong>: tres numeros existen y se encuentran en su posiciones<br>"+
	 	           
	 	           "<strong>N</strong>: no existe ningun numero<br>"+
	 	        "</div>");
}
function paso3(){
	pasos=$('#paso1');
	pasos.html("<div align='center'>"+
		       "<p><strong>solo tiene 7 intentos</strong></p>"+
		       "<p align='center'>numero: 3 4 5 6</p>"+
		       "<table class='table table-hover' style='width:100%'>"+
		       "<tr>"+
		          "<th>numero ingresado</th>"+
		          "<th>respuesta</th>"+
		       "</tr>"+
		       "<tr>"+
		          "<td>6 2 3 5</td>"+
		          "<td>3R</td>"+
		       "</tr>"+
		       "<tr>"+
		          "<td>6 8 9 3</td>"+
		          "<td>2R</td>"+
		       "</tr>"+
		       "<tr>"+
		          "<td>4 5 6 3</td>"+
		          "<td>4R</td>"+
		       "</tr>"+
		       "<tr>"+
		          "<td>1 4 7 8</td>"+
		          "<td>1B</td>"+
		       "</tr>"+
		       "<tr>"+
		          "<td>7 4 5 3</td>"+
		          "<td>2B 1R</td>"+
		       "</tr>"+
		       "<tr>"+
		          "<td>3 4 8 6</td>"+
		          "<td>3B</td>"+
		       "</tr>"+
		       "<tr>"+
		          "<td>3 4 5 6</td>"+
		          "<td>GANASTE</td>"+
		       "</tr>"+
		       "</table>"+
		       "</div>");
}
function Numeros(string){
    var out = '';
    ok=true;
    var filtro = '1234567890';
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
	     out += string.charAt(i);
         return out;
} 
