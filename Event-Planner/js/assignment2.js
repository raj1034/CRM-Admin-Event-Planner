/* add code here */


//Set up the event listeners only after the DOM is loaded as per the assignment instructions.


window.addEventListener("load", function() {

    var highlightNodes = document.getElementById("highlight");
    var hideHighlights = document.getElementById("hide");
    hideHighlights.addEventListener("click", function() {removeHighlights()});
    hideHighlights.style.display = "none";
    highlightNodes.style.display = "block";
    var root = document.querySelectorAll("body *");
    var i = 0;
    highlightNodes.addEventListener("click", function() {showHighlights(root[0])});


    function showHighlights(elemRoot){

        highlightNodes.style.display = "none";    
        hideHighlights.style.display = "block";
            if(elemRoot.nodeType == 1){
                var add = document.createElement("span");
                add.className = "hoverNode";
                add.innerText = elemRoot.tagName;
                elemRoot.appendChild(add);
                add.addEventListener("click", function() { alert("Tag:" + elemRoot.tagName + "\nClass:" + elemRoot.className + "\nID:" + elemRoot.id + "\ninnerHTML:" +                                      elemRoot.innerHTML)});
            }
            if (i < (root.length - 1)) {
			showHighlights(root[++ i]);
		}
            i = 0;
            
    }


    function removeHighlights(){
        var rootElem = document.getElementsByTagName("span");
    
        highlightNodes.style.display = "block";
        hideHighlights.style.display = "none";
        
        for(var j = 0 ; j < rootElem.length ; j ++){
            
                if(rootElem[j].className == "hoverNode"){  
                    rootElem[j].style.display = "none";
                }
        }

    }
        



});