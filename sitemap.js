function buildMap(elementId){
    var theMap=document.getElementById(elementId);
    var list=document.createElement("ul");
    var sublist=document.createElement("ul");
    var classProjects = document.createElement("li");
    classProjects.textContent="Class Projects";
    classProjects.className="MenuTitle";
    
    list.appendChild(buildList("Home", "index.html"));
    theMap.appendChild(list);
    
    list.appendChild(buildList("About", "about.html"));
    theMap.appendChild(list);
    
    list.appendChild(classProjects);
    theMap.appendChild(list);
    
    sublist.appendChild(buildList("Breakout", "breakout.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("JavaScript Events", "events.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Pop-Up", "popup.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("To Do List", "todolist.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Chalkboard", "chalkboard.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Tic-Tac-Toe", "tictactoe.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Plain Multiplication Table", "multiplytable.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Multiplication Table 2", "multiplytable2.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Triangle Calc", "TriangleCalc.html"));
    classProjects.appendChild(sublist);
}

function buildList(title, link){
    var element = document.createElement("a");
    var li = document.createElement("li");
    element.href= link;
    element.textContent= title;
    li.appendChild(element);
    return(li);
}