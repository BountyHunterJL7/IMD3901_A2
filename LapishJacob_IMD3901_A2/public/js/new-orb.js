AFRAME.registerComponent("new-orb", {
    schema: {
    },
    init: function() {
        const CONTEXT_AF = this;
        CONTEXT_AF.scene = document.querySelector("#scene")
        var xcol = 0;
        var ycol = 0;
        var zcol = 0; 
        
        CONTEXT_AF.el.addEventListener("click", function() {
                 xcol = Math.floor((Math.random() * 255) + 1)
                 ycol = Math.floor((Math.random() * 255) + 1)
                 zcol = Math.floor((Math.random() * 255) + 1)
                 let newOrb = document.createElement("a-sphere")
                 newOrb.setAttribute("color","rgb(" + xcol + "," + ycol + "," + zcol + ")")
                 newOrb.setAttribute("position",{x:0,y:0,z:-4})
                 newOrb.setAttribute("grabbable","")
                 newOrb.setAttribute("dynamic-body","")
                 scene.appendChild(newOrb)
        })
    }
});