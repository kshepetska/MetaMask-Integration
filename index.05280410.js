function e(e,t,n,r,a,o,c){try{var s=e[o](c),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,a)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(a,o){var c=t.apply(n,r);function s(t){e(c,a,o,s,l,"next",t)}function l(t){e(c,a,o,s,l,"throw",t)}s(void 0)})}}function n(e,t){var n,r,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}document.addEventListener("DOMContentLoaded",function(){var e,r=document.getElementById("connectButton"),a=document.getElementById("walletInfo"),o=document.getElementById("walletAddress"),c=document.getElementById("ethBalance"),s=document.getElementById("usdtBalance"),l=!1;function u(){return(u=t(function(){var t,r,a,l,u,i,d;return n(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,e.eth.getAccounts()];case 1:return t=n.sent()[0],o.textContent="Wallet Address: ".concat(t),[4,e.eth.getBalance(t)];case 2:return r=n.sent(),a=e.utils.fromWei(r,"ether"),c.textContent="ETH Balance: ".concat(a," ETH"),l="0xdac17f958d2ee523a2206206994597c13d831ec7",u=6,i=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"}],[4,new e.eth.Contract(i,l).methods.balanceOf(t).call()];case 3:return d=n.sent()/Math.pow(10,u),s.textContent="USDT Balance: ".concat(d," USDT"),[3,5];case 4:return console.error("Error updating wallet information:",n.sent().message),[3,5];case 5:return[2]}})})).apply(this,arguments)}a.style.display="none",void 0!==window.ethereum?(e=new Web3(window.ethereum),r.addEventListener("click",t(function(){return n(this,function(e){switch(e.label){case 0:if(e.trys.push([0,4,,5]),l)return[3,2];return[4,window.ethereum.request({method:"eth_requestAccounts"})];case 1:return e.sent(),console.log("MetaMask connected!"),function(){u.apply(this,arguments)}(),a.style.display="block",l=!0,[3,3];case 2:window.location.reload(),e.label=3;case 3:return r.textContent=l?"Exit from MetaMask":"Connect MetaMask",[3,5];case 4:return console.error("Error connecting MetaMask:",e.sent().message),[3,5];case 5:return[2]}})}))):(console.error("MetaMask not detected."),r.innerHTML='Install MetaMask <a href="https://metamask.io/" target="_blank">here</a>')});
//# sourceMappingURL=index.05280410.js.map
