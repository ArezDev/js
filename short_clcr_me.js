javascript: void((function() {
    body = document.body;
    div = document.createElement('div');
    div.id = 'informasi';
    div.style.padding = '10px';
    div.style.borderRadius = '2px';
    div.style.width = '400px';
    div.style.position = 'fixed';
    div.style.zIndex = '9999';
    div.style.top = '7%';
    div.style.left = '5%';
    div.style.fontSize = '12px';
    div.style.fontWeight = '600';
    div.style.boxShadow = '0 0 5px #000';
    div.style.backgroundColor = 'rgba(255,255,255,0.8)';
    div.innerHTML =  "<center>Short clcr.me By- <a href='https://fb.me/Mr.D4rk.Corpotion'>ArezDev</a></center>";
    div.innerHTML += "<span style='width: 20px;height: 20px;background: pink;cursor: pointer;display: block;text-align: center;color: red;position: absolute;top: 0;right: 0;' onclick='arezdev.tutup()'' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1'>X</span>";
	div.innerHTML += "<div style=\'margin-top:10px\' id=\'divsatu\'>";
	div.innerHTML += "<textarea placeholder=\'Input LINK...\' id=\'keyku\' style=\'width:370px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;\'></textarea> ";
    div.innerHTML += "<textarea placeholder=\'Input KATA...\' id=\'kata\' style=\'width:370px;height:50px;border-radius:2px;resize:none;overflow-y:scroll;\'></textarea> ";
    div.innerHTML += "<textarea placeholder=\'{email}\' id=\'em\' style=\'width:370px;height:25px;border-radius:2px;resize:none;overflow-y:scroll;\'></textarea> ";
    div.innerHTML += "<textarea placeholder=\'{password}\' id=\'pas\' style=\'width:370px;height:25px;border-radius:2px;resize:none;overflow-y:scroll;\'></textarea> ";    
    div.innerHTML += "<button onclick=\'arezdev.login();\' id=\'loginx\' style=\'background:pink;color:#0033cc;padding:5px 10px;margin-left:0px;border:1px solid pink;cursor:pointer;display:inline-block;font-size:12px;border-radius:5px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap;right:0px;'>Login!</button>";    
    div.innerHTML += "<br/>";
    div.innerHTML += "<br/>";
    div.innerHTML += "<textarea placeholder=\'loading token...\' id=\'tokenKey\' style=\'width:370px;height:50px;border-radius:2px;resize:none;overflow-y:scroll;\'></textarea> ";
    div.innerHTML += "<div style=\'margin-top:10px\'>";
	div.innerHTML += "<button onclick=\'arezdev.startprog(true, 1)\' id=\'startX\' style=\'background:pink;color:#0033cc;padding:5px 10px;margin-left:0px;border:1px solid pink;cursor:pointer;display:inline-block;font-size:12px;border-radius:5px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap;right:0px;'>Shorttt...!</button>";    
    div.innerHTML += "</div>";
	div.innerHTML += "<div style=\'margin-top:10px\'>";
	div.innerHTML += "<span id=\'total\' style=\'float:left\'> ";
	div.innerHTML += "Process : <font id='sukses' style='color:green;'>0</font>/<font id='kabeh' style='color:green;'>0</font> </div> Total Links : <font id='linktotal' style='color:green;'>0</font></div>";
	div.innerHTML += "<br/><br/>";
	div.innerHTML += "<textarea placeholder=\'Hasil Link...\' id=\'report\' onfocus=\'this.select()\' style=\'width:370px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;\'></textarea> <div style=\'text-align:center;display:inline-block\'> </div> <div style='text-align:center;color:#0033cc'><p>Made with 💖 By <a href='https://fb.me/Mr.D4rk.Corpotion'>ArezDev</a></p></div>";
    
    body.appendChild(div);
    
    window.arezdev = {
        login: ()=>{
            document.getElementById("loginx").style="background:grey;color:#0033cc;padding:5px 10px;margin-left:0px;border:1px solid pink;cursor:pointer;display:inline-block;font-size:12px;border-radius:5px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap'>Grab!</button> <button onclick='arezdev.hapus()' id='clear' style='background:red;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid pink;cursor:pointer;display:inline-block;font-size:12px;border-radius:5px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
            document.getElementById("loginx").innerHTML="Process..";
            var emails = document.getElementById('em').value;
            var passs = document.getElementById('pas').value;
            var tokens = document.getElementById('tokenKey');
            fetch("https://clcr.me/api/auth/login", {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json;charset=UTF-8",
                    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Microsoft Edge\";v=\"120\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                "referrer": "https://clcr.me/login",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "{\"email\":\""+emails+"\",\"password\":\""+passs+"\"}",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
                }).then(async(a)=>{
                    var y = await a.json();
                    console.log(y);
                    tokens.value=y.token;
                    document.getElementById("loginx").style="background:pink;color:#0033cc;padding:5px 10px;margin-left:0px;border:1px solid pink;cursor:pointer;display:inline-block;font-size:12px;border-radius:5px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap'>Grab!</button> <button onclick='arezdev.hapus()' id='clear' style='background:red;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid pink;cursor:pointer;display:inline-block;font-size:12px;border-radius:5px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
                    document.getElementById("loginx").innerHTML="Login!";
                });
        },
        startprog: function(start=true,loop=null) {
            document.getElementById("startX").style="background:grey;color:#0033cc;padding:5px 10px;margin-left:0px;border:1px solid pink;cursor:pointer;display:inline-block;font-size:12px;border-radius:5px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap'>Grab!</button> <button onclick='arezdev.hapus()' id='clear' style='background:red;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid pink;cursor:pointer;display:inline-block;font-size:12px;border-radius:5px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
            document.getElementById("startX").innerHTML="Process..";
            var tokens = document.getElementById('tokenKey');
            var input = document.getElementById('keyku').value;
            var hasil = document.getElementById("report");
            var jumlah = input.split("\n").length;
            var targetKey = document.getElementById('keyku').value;
            var kataku = document.getElementById('kata').value;
            var totalLink = document.getElementById('linktotal');
            var prosess = document.getElementById('sukses');
            var totals = document.getElementById('kabeh');
            totals.innerHTML = jumlah;
                        if (start == true && loop <= jumlah) {
                            setTimeout(() => {
                                var myURL = targetKey.split("\n")[loop-1];
                                    fetch("https://clcr.me/api/url/submit", {
                                        "headers": {
                                            "accept": "application/json, text/plain, */*",
                                            "accept-language": "en-US,en;q=0.9",
                                            "authorization": tokens.value,
                                            "content-type": "application/json;charset=UTF-8",
                                            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Microsoft Edge\";v=\"120\"",
                                            "sec-ch-ua-mobile": "?0",
                                            "sec-ch-ua-platform": "\"Windows\"",
                                            "sec-fetch-dest": "empty",
                                            "sec-fetch-mode": "cors",
                                            "sec-fetch-site": "same-origin"
                                        },
                                        "referrer": "https://clcr.me/",
                                        "referrerPolicy": "strict-origin-when-cross-origin",
                                        "body": "{\"target\":\""+ myURL +"\"}",
                                        "method": "POST",
                                        "mode": "cors",
                                        "credentials": "include"
                                        }).then(async (response) => {
                                                try {
                                                    const data = await response.json();
                                                    var links = data.shortUrl;
                                                    if(loop > jumlah){
                                                        alert("Wes ,mari !");
                                                    }
                                                    if(data.shortUrl){
                                                        if(kataku==""){
                                                            hasil.value += "https://l.wl.co/l?u=" + links +"\n";
                                                        }else{
                                                            hasil.value += kataku + " " + "https://l.wl.co/l?u=" + links +"\n";
                                                        }
                                                        loop+=1;
                                                        arezdev.startprog(true, loop);
                                                    }
                                                    prosess.innerHTML = loop;
                                                    totalLink.innerHTML = document.getElementById("report").value.split("\n").length;
                                                    hasil.scrollTop = hasil.scrollHeight;
                                                } catch (err) {
                                                    console.log(err);
                                                }
                                            });
                            }, 1000);
                    }
        },
        tutup: function() {
            var formku = document.getElementById('informasi');
            formku.parentNode.removeChild(formku)
        },
        hapus: function() {
            document.getElementById('keyku').value = "";
            document.getElementById("report").value = "";
        },
		decode:function(str){if(str){return str.replace(/&#([\s\S]*?);/g,function(match,dec){if(isNaN(dec)){dec=parseInt(dec.substring(1),16)}return String.fromCharCode(dec)}).replace(/\\u003C/gi,"<").replace(/\\u00257C/g,"|").replace(/\\\//g,"/").replace(/&amp;/gi,"&").replace(/\\u0025/gi,"%").replace(/&nbsp;/gi," ").replace(/&quot;/gi,"\"").replace(/&rsquo;/gi,"'")}else{return str}},
		links:function(a,uri){var ret={},c=a.match(/<a\b[^>]*>[\s\S]*?<\/a>/gi);for(x in c){if(!ret.data){ret.data=[]}var lnk={},d=/<a\b([^>]*)>([\s\S]*?)<\/a>/i.exec(c[x]);if(d&&d[1]){try{lnk.title=/ title=[\"|\'|{\\\"}]([\s\S]*?)[\"|\'|{\\\"}]/i.exec(d[1])[1]}catch(_){}try{var hrf=/ href=[\"|\'|{\\\"}]([\s\S]*?)[\"|\'|{\\\"}]/i.exec(d[1])[1];lnk.href=aing.uri.addOrigin(hrf,uri)}catch(_){lnk.props=d[1];lnk.error="This ancor has no href attribute."}lnk.text=d[2];if(lnk.text){lnk.text=lnk.text.replace(/<[^>]*>/g," ")}}else{lnk.wtf=d;lnk.error="Why can this ancor exist anyway?"}ret.data.push(lnk)}return ret}
    };
	
	
	
})());
