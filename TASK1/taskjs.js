function taskinsertion(){
  if(document.getElementById("toDo").value.length == 0)
  alert("Hey!! Enter  a task");
  else{
    var taskbox = document.createElement("div");
    taskbox.className="divclass";
    document.getElementById("Tasks").appendChild(taskbox);
    //display text
    var tasktext = document.createElement("p");
    tasktext.innerHTML = document.getElementById("toDo").value;
    tasktext.className = "textdInput";
    taskbox.appendChild(tasktext);
    var lineThrough = document.getElementsByClassName("textInput");
    for(var i=0;i<lineThrough.length;i++){
      lineThrough[i].onclick=function(){
        var strikeCssBefore= this.parentElement;
        var strikeCss = strikeCssBefore.children[0];
        strikeCss.style.textDecoration="line-through";
      }
    }
    //deleting button
    var deletetask = document.createElement ("button");
    deletetask.innerHTML="x";
    deletetask.className="deleteBtn";
    taskbox.appendChild(deletetask);
    var close= document.getElementsByClassName("deleteBtn");
    for(var i=0;i<close.length;i++){
      close[i].onclick=function(){
        var closeCss=this.parentElement;
        closeCss.style.display="none";
            }
    }
    document.getElementById("toDo").value="";

    }

  }
