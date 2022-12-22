let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  let {size: {width,height},items: [item1, item2],title = "Menu" } = options;
  
  alert(title);  
  alert(width);  
  alert(height); 
  alert(item1);  
  alert(item2);  