window.onload = function(){
  console.log("Hello friends");

  var waypoint = new Waypoint({
    element:document.getElementById("title"),
    handler:function(direction){
        this.element.classList.add("fadeInDown");
        this.element.classList.add("animated");
        this.element.classList.add("visible");
    }
  })

  var waypoint = new Waypoint({
    element:document.getElementById("firstRow"),
    handler:function(direction){
        this.element.classList.add("zoomIn");
        this.element.classList.add("animated");
        this.element.classList.add("visible");
    },
    offset: 400
  })

  var waypoint = new Waypoint({
    element:document.getElementById("secondRow"),
    handler:function(direction){
        this.element.classList.add("zoomIn");
        this.element.classList.add("animated");
        this.element.classList.add("visible");
    },
    offset: 450
  })

  var waypoint = new Waypoint({
    element:document.getElementById("unicef"),
    handler:function(direction){
        this.element.classList.add("flipInX");
        this.element.classList.add("animated");
        this.element.classList.add("visible");
    },
    offset: 470
  })

  
};
