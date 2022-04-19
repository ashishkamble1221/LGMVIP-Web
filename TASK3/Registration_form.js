
  var list1 =[];
  var list2 =[];
  var list3 =[];
  var list4 =[];
  var list5 =[];
  var list6 =[];
  var list7 =[];
  /*var list8 =[];
  var list9 =[];
  var list10 =[];
  var list11=[];
  var list12=[];
  var list13=[];*/
  var n=1;
  var x=0;

  function add(){
     var addrow = document.getElementById("show");
     var newRow = addrow.insertRow(n);
     
     list1[x] =document.getElementById("fname").value;
     list2[x] = document.getElementById("un").value;
     list3[x]= document.getElementById("pass").value;
     list4[x]= document.getElementById("email").value;
     list5[x]= document.getElementById("dob").value;
     list6[x] = document.getElementById("educate").value;
     list7[x] = document.getElementById("address").value;
     /*list8[x] = document.getElementById("male").value;
     list9[x] = document.getElementById("other").value;
     list10[x] = document.getElementById("hindi").value;
     list11[x] = document.getElementById("telugu").value;
     list12[x] = document.getElementById("english").value;
     list13[x] = document.getElementById("others").value;*/

     var cel1 = newRow.insertCell(0);
     var cel2 = newRow.insertCell(1);
     var cel3 = newRow.insertCell(2);
     var cel4 = newRow.insertCell(3);
     var cel5 = newRow.insertCell(4);
     var cel6 = newRow.insertCell(5);
     var cel7 = newRow.insertCell(6);
     /*var cel8 = newRow.insertCell(7);
     var cel9 = newRow.insertCell(8);
     var cel10 = newRow.insertCell(9);
     var cel11= newRow.insertCell(10);
     var cel12= newRow.insertCell(11);
     var cel13= newRow.insertCell(12);*/


     cel1.innerHTML = list1[x];
     cel2.innerHTML = list2[x];
     cel3.innerHTML = list3[x];
     cel4.innerHTML = list4[x];
     cel5.innerHTML = list5[x];
     cel6.innerHTML = list6[x];
     cel7.innerHTML = list7[x];
     /*cel8.innerHTML = list8[x];
     cel9.innerHTML = list9[x];
     cel10.innerHTML = list10[x];
     cel11.innerHTML = list11[x];
     cel12.innerHTML = list12[x];
     cel13.innerHTML = list13[x];*/

     n++;
     x++;
}
