(function(){"use strict";self.addEventListener("message",e=>{s(e.data)});function s(e){var a=new FileReader;a.readAsDataURL(e),a.onloadend=function(){var n=a.result;self.postMessage(n)}}})();
