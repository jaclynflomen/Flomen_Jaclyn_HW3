window.onload = function(){
  console.log("Hello world");

  var waypoint = new Waypoint({
    element:document.getElementById("Layer_16"),
    handler:function(direction){
        this.element.classList.add("fadeInLeft");
        this.element.classList.add("animated");
        this.element.classList.add("visible");
    },
    offset: "100%"
  })
  
  var waypoint = new Waypoint({
  element:document.getElementById("Layer_17"),
  handler:function(direction){
      this.element.classList.add("fadeInRight");
      this.element.classList.add("animated");
      this.element.classList.add("visible");
  },
  offset: "600px"
})


var waypoint = new Waypoint({
  element:document.getElementById("Layer_18"),
  handler:function(direction){
      this.element.classList.add("fadeInLeft");
      this.element.classList.add("animated");
      this.element.classList.add("visible");
  
  },
  offset: "600px"
})

var waypoint = new Waypoint({
  element:document.getElementById("Layer_19"),
  handler:function(direction){
      this.element.classList.add("fadeInRight");
      this.element.classList.add("animated");
      this.element.classList.add("visible");
  },
  offset: "700px"
})

var waypoint = new Waypoint({
  element:document.getElementById("Layer_20"),
  handler:function(direction){
      this.element.classList.add("fadeInLeft");
      this.element.classList.add("animated");
      this.element.classList.add("visible");
  },
  offset: "600px"
})

var waypoint = new Waypoint({
  element:document.getElementById("Layer_21"),
  handler:function(direction){
      this.element.classList.add("fadeInRight");
      this.element.classList.add("animated");
      this.element.classList.add("visible");
  },
  offset: "600px"
})

var waypoint = new Waypoint({
  element:document.getElementById("Layer_22"),
  handler:function(direction){
      this.element.classList.add("fadeInLeft");
      this.element.classList.add("animated");
      this.element.classList.add("visible");
  },
  offset: "700px"
})

var waypoint = new Waypoint({
  element:document.getElementById("Layer_24"),
  handler:function(direction){
      this.element.classList.add("fadeInRight");
      this.element.classList.add("animated");
      this.element.classList.add("visible");
  },
  offset: "700px"
})


};
