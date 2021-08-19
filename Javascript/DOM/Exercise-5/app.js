function writeToDiv(){
   let div = document.getElementById("ul__list");
   let childNodesLength = document.getElementById("ul__list").childNodes.length;
   let childNodeValue = document.getElementById("ul__list").childNodes;
   let childrenLength = document.getElementById("ul__list").children.length;
  
   let childNodesArray = []
  
  
   let arr = [childNodesLength, childNodesArray, childrenLength];
    console.log(div)
    console.log(arr[1])



    for(var i in childNodeValue) {
        childNodesArray.push(i.innerHTML)
        console.log(i);
    }


   for (let i = 0; i < div.children.length; i++) {
        div.children.item(i).innerHTML = arr[i];
   }

}