
var developerAppStyle = document.createElement("style");

developerAppStyle.innerHTML = `
#mydiv {
    position: absolute;
    z-index: 9;
    background-color: #f1f1f1;
    border: 1px solid #d3d3d3;
    text-align: center;
  }
  
  #mydivheader {
    padding: 10px;
    cursor: move;
    z-index: 10;
    background-color: #2196F3;
    color: #fff;
  }`;

document.head.appendChild(developerAppStyle);