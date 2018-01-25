         /* Javascript */
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
 
    var dynStr=null;
    var row,iDiv;
    var src= document.getElementById(data).src
    row = document.createElement('div');
    for(var i=0;i<10;i++){
        iDiv = document.createElement('div');
        iDiv.className = 'pane'; 
        iDiv.style.backgroundImage = 'url('+src+')';
     //   iDiv.style.backgroundRepeat = 'round';
      	iDiv.style.margin='10';
      //  iDiv.style.position='fixed';
        row.appendChild(iDiv);
    }
    ev.target.appendChild(row);
      
   
}