AFRAME.registerComponent("remove-orb", {
    schema: {
    },
    init: function() {
        const CONTEXT_AF = this;
        CONTEXT_AF.scene = document.querySelector("#scene")
        
        CONTEXT_AF.el.addEventListener("click", function() {
            console.log("i am here")
            var sphere = document.querySelector("a-sphere")
                sphere.parentNode.removeChild(sphere)
        })
    }
});