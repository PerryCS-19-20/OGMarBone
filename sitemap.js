function buildMap(elementId){
    var theMap=document.getElementById(elementId);
    var list=document.createElement("ul");
    var sublist=document.createElement("ul");
    var classProjects = document.createElement("li");
    classProjects.textContent="Class Projects";
    
    
    list.appendChild(buildList("Home", "index.html"));
    theMap.appendChild(list);
    
    list.appendChild(buildList("About", "about.html"));
    theMap.appendChild(list);
    
    list.appendChild(classProjects);
    theMap.appendChild(list);
    
    sublist.appendChild(buildList("breakout", "breakout.html"));
    theMap.appendChild(sublist);
    
    sublist.appendChild(buildList("JavaScript Events", "events.html"));
    theMap.appendChild(sublist);
    
    sublist.appendChild(buildList("Pop-Up", "popup.html"));
    theMap.appendChild(sublist);
    
    sublist.appendChild(buildList("To Do List", "todolist.html"));
    theMap.appendChild(sublist);
    
    sublist.appendChild(buildList("Chalkboard", "chalkboard.html"));
    theMap.appendChild(sublist);
    
    sublist.appendChild(buildList("Tic-Tac-Toe", "tictactoe.html"));
    theMap.appendChild(sublist);
    
    sublist.appendChild(buildList("Plain Multiplication Table", "multiplytable.html"));
    theMap.appendChild(sublist);
    
    sublist.appendChild(buildList("Multiplication Table 2", "multiplytable2.html"));
    theMap.appendChild(sublist);
    
    sublist.appendChild(buildList("Triangle Calc", "TriangleCalc.html"));
    theMap.appendChild(sublist);
}

function buildList(title, link){
    var element = document.createElement("a");
    var li = document.createElement("li");
    element.href= link;
    element.textContent= title;
    li.appendChild(element);
    return(li);
}