

define(['js/libs/module2'],function(Module2){
    
    console.log('Module1 initialised');
    console.log('Module2 name is '+ Module2.name);
     
    var Module1 = {
        name: 'Module1'
    };
    
    return Module1;
});