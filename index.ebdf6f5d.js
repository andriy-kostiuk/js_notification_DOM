var e=function(e,t,n,i,a){var o=document.createElement("div");o.classList.add("notification"),o.classList.add(a),o.style.top="".concat(e,"px"),o.style.right="".concat(t,"px");var s=document.createElement("h2");s.classList.add("title"),s.textContent=n,o.appendChild(s);var c=document.createElement("p");c.textContent=i,o.appendChild(c),document.querySelector("body").appendChild(o),setTimeout(function(){o.style.display="none"},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.ebdf6f5d.js.map
