(function (global){
    var time = {}
    time.start = function ()
    {
        time.stime= Date.now()
    }
    time.end = function () 
    {
        time.etime = Date.now()
        return (time.etime - time.stime)
    }
    time.sleep = function (milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

global.Time=time

})(window)
