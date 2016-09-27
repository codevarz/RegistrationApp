
var execute = function (){
    
};

var wrap = function(execute){
    return (
    function (){
        
        try {
           
            var func = execute();
            return func;
        }
        catch(err){
            return null;
        }
        finally{
            throw new Error("Error occured");
        }
    }()
    
    )
};

