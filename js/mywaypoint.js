window.onload = function(){
  console.log("Hello world");

  var waypoint = new Waypoint({
      element:document.getElementById("mercury"),
      handler:function(direction){
          this.element.classList.add("fadeInUp");
          this.element.classList.add("animated");
          this.element.classList.add("visible");
      },
      offset: "50%"
  })
};



window.onload = function(){
  console.log("Hello world");

var waypoint = new Waypoint({
  element:document.getElementById("visor_2_"),
  handler:function(direction){
      this.element.classList.add("fadeOut");
      this.element.classList.add("animated");
      this.element.classList.add("hidden");
  },
  offset: "50%"
})
};