javascript:body = document.body;
div = document.createElement('div');
div.id = 'arezdevtools';
div.style.padding = '10px';
div.style.borderRadius = '2px';
div.style.width = '350px';
div.style.position = 'fixed';
div.style.zIndex = '9999';
div.style.top = '7%';
div.style.left = '5%';
div.style.fontSize = '12px';
div.style.fontWeight = '600';
div.style.boxShadow = '0 0 5px #000';
div.style.backgroundColor = 'rgba(255,255,255,0.8)';
div.innerHTML = "<center><span id='sengndue'>̲F̲̲B̲ ̲T̲̲o̲̲o̲̲l̲̲s̲ ̲v̲.̲1̲.̲0̲ -̲B̲̲y̲ ̲Z̲̲D̲̲E̲̲V̲</span></center>";
div.innerHTML += "<span id='tutup_tools' style='width: 20px;height: 20px;background: pink;cursor: pointer;display: block;text-align: center;color: red;position: absolute;top: 0;right: 0;' ' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1'>X</span>";
div.innerHTML += "<br/>";
div.innerHTML += "<div id='tempat_btn'><center><button id='Addfren' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Add uid <button id='Grapfren' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Grab Fren <button id='Grapgrup' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Grab Group <button id='Getnewfren' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Get Teman baru </center>";
div.innerHTML += "<div id='tempat_tools'>";
div.innerHTML += "<div style='text-align:center;color:#0033cc'><p>✌𝓜𝓪𝓭𝓮 𝔀𝓲𝓽𝓱 💖 𝓑𝔂- <a href='https://fb.me/zuck'>𝓩𝓓𝓔𝓥</a></p></div>";
body.appendChild(div);

var uid = require("CurrentUserInitialData").USER_ID, dstge = require("DTSGInitialData").token, lsd = require("LSD").token, hs = require("SiteData").haste_session, jz = "25667" || document.getElementsByName("jazoest")[0].value, hsi = require("SiteData").hsi, spinr = require("SiteData").__spin_r, spint = require("SiteData").__spin_t, spinb = require("SiteData").__spin_b;

var close_btn = document.getElementById('tutup_tools');
    close_btn.onclick=()=>{
        arezdev.tutup();
    };

var show_grabfren = document.getElementById('Grapfren');
show_grabfren.onclick=()=>{
        arezdev.showGrabfren();
        document.getElementById("tempat_btn").style.display="none";
    };

var show_grabgrup = document.getElementById('Grapgrup');
show_grabgrup.onclick=()=>{
        arezdev.showGrabgrup();
        document.getElementById("tempat_btn").style.display="none";
    };

var clix_getNewfren = document.getElementById('Getnewfren');
clix_getNewfren.onclick=()=>{
        arezdev.showgrabNewFren();
        document.getElementById("tempat_btn").style.display="none";
    };

var clix_addfren = document.getElementById('Addfren');
clix_addfren.onclick=()=>{
        arezdev.showaddFren();
        document.getElementById("tempat_btn").style.display="none";
    };

window.arezdev = {

    showaddFren:()=>{
        document.getElementById("sengndue").innerHTML="̷A̳̿͟͞d̳̿͟͞d̳̿͟͞ u̳̿͟͞i̳̿͟͞d̳̿͟͞ f̳̿͟͞r̳̿͟͞i̳̿͟͞e̳̿͟͞n̳̿͟͞d̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        var div_addfren = document.createElement('div');
        div_addfren.id = 'div_addfren';
        div_addfren.innerHTML += "<br/> <br/> ";
        div_addfren.innerHTML += "<textarea placeholder='{uid}' id='uidmaster' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_addfren.innerHTML += "<br/> <br/> ";
        div_addfren.innerHTML += "<button id='addstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Add</button> <button id='addstartv2' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Add V2</button>";
        div_addfren.innerHTML += "<br/> <br/> ";
        div_addfren.innerHTML += "<span id=\'total\' style=\'float:left\'>sukses : <font id='sukses' style='color:green;'>0</font> | gagal : <font id='gagal' style='color:red;'>0</font> | total add : <font id='kabeh' style='color:blue;'>0</font>";
        div_addfren.innerHTML += "<br/> <br/> ";
        div_addfren.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_grabfren = document.getElementById("tempat_tools");
        show_grabfren.appendChild(div_addfren);
        var grab_btn = document.getElementById('addstart');
            grab_btn.onclick=()=>{
            arezdev.addFren(true,1,0,0);
        };
        var clix_v2 = document.getElementById('addstartv2');
            clix_v2.onclick=()=>{
            arezdev.addFrenV2(true,1,0,0);
        };
    },

    showgrabNewFren:()=>{
        document.getElementById("sengndue").innerHTML="̷G̳̿͟͞r̳̿͟͞a̳̿͟͞b̳̿͟͞ T̳̿͟͞e̳̿͟͞m̳̿͟͞a̳̿͟͞n̳̿͟͞ B̳̿͟͞a̳̿͟͞r̳̿͟͞u̳̿͟͞ d̳̿͟͞i̳̿͟͞t̳̿͟͞a̳̿͟͞m̳̿͟͞b̳̿͟͞a̳̿͟͞h̳̿͟͞k̳̿͟͞a̳̿͟͞n̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        var div_grabnewfren = document.createElement('div');
        div_grabnewfren.id = 'div_grabnewfren';
        div_grabnewfren.innerHTML += "<br/> <br/> ";
        div_grabnewfren.innerHTML += "<textarea placeholder='{masteran uid}' id='uidmaster' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_grabnewfren.innerHTML += "<br/> <br/> ";
        div_grabnewfren.innerHTML += "<select id='genderOpt' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'><option value='MALE'>MALE</option><option value='FEMALE'>FEMALE</option><option value='ALL'>ALL</option></select> <button id='grabstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Start Grab</button>";
        div_grabnewfren.innerHTML += "<br/> <br/> ";
        div_grabnewfren.innerHTML += "<input type='hidden' id='cursorZdev' value=''>";
        div_grabnewfren.innerHTML += "<span id=\'total\' style=\'float:left\'>Grab Proses : <font id='sukses' style='color:green;'>0</font>/<font id='kabeh' style='color:green;'>0</font> | Total Grab : <font id='tkabeh' style='color:green;'>0</font>";
        div_grabnewfren.innerHTML += "<br/> <br/> ";
        div_grabnewfren.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_grabfren = document.getElementById("tempat_tools");
        show_grabfren.appendChild(div_grabnewfren);
        var grab_btn = document.getElementById('grabstart');
            grab_btn.onclick=()=>{
            arezdev.getNewFren(true,1);
        };
    },

    showGrabfren:()=>{
        document.getElementById("sengndue").innerHTML="̷G̳̿͟͞r̳̿͟͞a̳̿͟͞b̳̿͟͞ F̳̿͟͞r̳̿͟͞e̳̿͟͞n̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        arezdev.getToken();
        var div_grabFren = document.createElement('div');
        div_grabFren.id = 'div_ngegrabFren';
        div_grabFren.innerHTML += "<br/> <br/> ";
        div_grabFren.innerHTML += "<input placeholder='Loading accessToken...!' id='accesstokens' style='width:343px;height:20px;border-radius:2px;resize:none;'></input>";
        div_grabFren.innerHTML += "<br/> <br/> ";
        div_grabFren.innerHTML += "<textarea placeholder='{masteran uid}' id='uidmaster' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        div_grabFren.innerHTML += "<br/> <br/> ";
        div_grabFren.innerHTML += "<select id='genderOpt' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'><option value='male'>MALE</option><option value='female'>FEMALE</option><option value='all'>ALL</option></select>";
        div_grabFren.innerHTML += "<select id='countrycode' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'><option value='all'>ALL Country</option><option value='AF'>Afghanistan</option><option value='AX'>Aland Islands</option><option value='AL'>Albania</option><option value='DZ'>Algeria</option><option value='AS'>American Samoa</option><option value='AD'>Andorra</option><option value='AO'>Angola</option><option value='AI'>Anguilla</option><option value='AQ'>Antarctica</option><option value='AG'>Antigua And Barbuda</option><option value='AR'>Argentina</option><option value='AM'>Armenia</option><option value='AW'>Aruba</option><option value='AU'>Australia</option><option value='AT'>Austria</option><option value='AZ'>Azerbaijan</option><option value='BS'>Bahamas</option><option value='BH'>Bahrain</option><option value='BD'>Bangladesh</option><option value='BB'>Barbados</option><option value='BY'>Belarus</option><option value='BE'>Belgium</option><option value='BZ'>Belize</option><option value='BJ'>Benin</option><option value='BM'>Bermuda</option><option value='BT'>Bhutan</option><option value='BO'>Bolivia</option><option value='BA'>Bosnia And Herzegovina</option><option value='BW'>Botswana</option><option value='BV'>Bouvet Island</option><option value='BR'>Brazil</option><option value='IO'>British Indian Ocean Territory</option><option value='BN'>Brunei Darussalam</option><option value='BG'>Bulgaria</option><option value='BF'>Burkina Faso</option><option value='BI'>Burundi</option><option value='KH'>Cambodia</option><option value='CM'>Cameroon</option><option value='CA'>Canada</option><option value='CV'>Cape Verde</option><option value='KY'>Cayman Islands</option><option value='CF'>Central African Republic</option><option value='TD'>Chad</option><option value='CL'>Chile</option><option value='CN'>China</option><option value='CX'>Christmas Island</option><option value='CC'>Cocos (Keeling) Islands</option><option value='CO'>Colombia</option><option value='KM'>Comoros</option><option value='CG'>Congo</option><option value='CD'>Congo, Democratic Republic</option><option value='CK'>Cook Islands</option><option value='CR'>Costa Rica</option><option value='CI'>Cote DIvoire</option><option value='HR'>Croatia</option><option value='CU'>Cuba</option><option value='CY'>Cyprus</option><option value='CZ'>Czech Republic</option><option value='DK'>Denmark</option><option value='DJ'>Djibouti</option><option value='DM'>Dominica</option><option value='DO'>Dominican Republic</option><option value='EC'>Ecuador</option><option value='EG'>Egypt</option><option value='SV'>El Salvador</option><option value='GQ'>Equatorial Guinea</option><option value='ER'>Eritrea</option><option value='EE'>Estonia</option><option value='ET'>Ethiopia</option><option value='FK'>Falkland Islands (Malvinas)</option><option value='FO'>Faroe Islands</option><option value='FJ'>Fiji</option><option value='FI'>Finland</option><option value='FR'>France</option><option value='GF'>French Guiana</option><option value='PF'>French Polynesia</option><option value='TF'>French Southern Territories</option><option value='GA'>Gabon</option><option value='GM'>Gambia</option><option value='GE'>Georgia</option><option value='DE'>Germany</option><option value='GH'>Ghana</option><option value='GI'>Gibraltar</option><option value='GR'>Greece</option><option value='GL'>Greenland</option><option value='GD'>Grenada</option><option value='GP'>Guadeloupe</option><option value='GU'>Guam</option><option value='GT'>Guatemala</option><option value='GG'>Guernsey</option><option value='GN'>Guinea</option><option value='GW'>Guinea-Bissau</option><option value='GY'>Guyana</option><option value='HT'>Haiti</option><option value='HM'>Heard Island &amp; Mcdonald Islands</option><option value='VA'>Holy See (Vatican City State)</option><option value='HN'>Honduras</option><option value='HK'>Hong Kong</option><option value='HU'>Hungary</option><option value='IS'>Iceland</option><option value='IN'>India</option><option value='ID'>Indonesia</option><option value='IR'>Iran, Islamic Republic Of</option><option value='IQ'>Iraq</option><option value='IE'>Ireland</option><option value='IM'>Isle Of Man</option><option value='IL'>Israel</option><option value='IT'>Italy</option><option value='JM'>Jamaica</option><option value='JP'>Japan</option><option value='JE'>Jersey</option><option value='JO'>Jordan</option><option value='KZ'>Kazakhstan</option><option value='KE'>Kenya</option><option value='KI'>Kiribati</option><option value='KR'>Korea</option><option value='KW'>Kuwait</option><option value='KG'>Kyrgyzstan</option><option value='LA'>Lao Peoples Democratic Republic</option><option value='LV'>Latvia</option><option value='LB'>Lebanon</option><option value='LS'>Lesotho</option><option value='LR'>Liberia</option><option value='LY'>Libyan Arab Jamahiriya</option><option value='LI'>Liechtenstein</option><option value='LT'>Lithuania</option><option value='LU'>Luxembourg</option><option value='MO'>Macao</option><option value='MK'>Macedonia</option><option value='MG'>Madagascar</option><option value='MW'>Malawi</option><option value='MY'>Malaysia</option><option value='MV'>Maldives</option><option value='ML'>Mali</option><option value='MT'>Malta</option><option value='MH'>Marshall Islands</option><option value='MQ'>Martinique</option><option value='MR'>Mauritania</option><option value='MU'>Mauritius</option><option value='YT'>Mayotte</option><option value='MX'>Mexico</option><option value='FM'>Micronesia, Federated States Of</option><option value='MD'>Moldova</option><option value='MC'>Monaco</option><option value='MN'>Mongolia</option><option value='ME'>Montenegro</option><option value='MS'>Montserrat</option><option value='MA'>Morocco</option><option value='MZ'>Mozambique</option><option value='MM'>Myanmar</option><option value='NA'>Namibia</option><option value='NR'>Nauru</option><option value='NP'>Nepal</option><option value='NL'>Netherlands</option><option value='AN'>Netherlands Antilles</option><option value='NC'>New Caledonia</option><option value='NZ'>New Zealand</option><option value='NI'>Nicaragua</option><option value='NE'>Niger</option><option value='NG'>Nigeria</option><option value='NU'>Niue</option><option value='NF'>Norfolk Island</option><option value='MP'>Northern Mariana Islands</option><option value='NO'>Norway</option><option value='OM'>Oman</option><option value='PK'>Pakistan</option><option value='PW'>Palau</option><option value='PS'>Palestinian Territory, Occupied</option><option value='PA'>Panama</option><option value='PG'>Papua New Guinea</option><option value='PY'>Paraguay</option><option value='PE'>Peru</option><option value='PH'>Philippines</option><option value='PN'>Pitcairn</option><option value='PL'>Poland</option><option value='PT'>Portugal</option><option value='PR'>Puerto Rico</option><option value='QA'>Qatar</option><option value='RE'>Reunion</option><option value='RO'>Romania</option><option value='RU'>Russian Federation</option><option value='RW'>Rwanda</option><option value='BL'>Saint Barthelemy</option><option value='SH'>Saint Helena</option><option value='KN'>Saint Kitts And Nevis</option><option value='LC'>Saint Lucia</option><option value='MF'>Saint Martin</option><option value='PM'>Saint Pierre And Miquelon</option><option value='VC'>Saint Vincent And Grenadines</option><option value='WS'>Samoa</option><option value='SM'>San Marino</option><option value='ST'>Sao Tome And Principe</option><option value='SA'>Saudi Arabia</option><option value='SN'>Senegal</option><option value='RS'>Serbia</option><option value='SC'>Seychelles</option><option value='SL'>Sierra Leone</option><option value='SG'>Singapore</option><option value='SK'>Slovakia</option><option value='SI'>Slovenia</option><option value='SB'>Solomon Islands</option><option value='SO'>Somalia</option><option value='ZA'>South Africa</option><option value='GS'>South Georgia And Sandwich Isl.</option><option value='ES'>Spain</option><option value='LK'>Sri Lanka</option><option value='SD'>Sudan</option><option value='SR'>Suriname</option><option value='SJ'>Svalbard And Jan Mayen</option><option value='SZ'>Swaziland</option><option value='SE'>Sweden</option><option value='CH'>Switzerland</option><option value='SY'>Syrian Arab Republic</option><option value='TW'>Taiwan</option><option value='TJ'>Tajikistan</option><option value='TZ'>Tanzania</option><option value='TH'>Thailand</option><option value='TL'>Timor-Leste</option><option value='TG'>Togo</option><option value='TK'>Tokelau</option><option value='TO'>Tonga</option><option value='TT'>Trinidad And Tobago</option><option value='TN'>Tunisia</option><option value='TR'>Turkey</option><option value='TM'>Turkmenistan</option><option value='TC'>Turks And Caicos Islands</option><option value='TV'>Tuvalu</option><option value='UG'>Uganda</option><option value='UA'>Ukraine</option><option value='AE'>United Arab Emirates</option><option value='GB'>United Kingdom</option><option value='US'>United States</option><option value='UM'>United States Outlying Islands</option><option value='UY'>Uruguay</option><option value='UZ'>Uzbekistan</option><option value='VU'>Vanuatu</option><option value='VE'>Venezuela</option><option value='VN'>Viet Nam</option><option value='VG'>Virgin Islands, British</option><option value='VI'>Virgin Islands, U.S.</option><option value='WF'>Wallis And Futuna</option><option value='EH'>Western Sahara</option><option value='YE'>Yemen</option><option value='ZM'>Zambia</option><option value='ZW'>Zimbabwe</option></select></div>";
        div_grabFren.innerHTML += "<button id='grabstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Start Grab";
        div_grabFren.innerHTML += "<br/> <br/> ";
        div_grabFren.innerHTML += "<span id=\'total\' style=\'float:left\'>Grab Proses : <font id='sukses' style='color:green;'>0</font>/<font id='kabeh' style='color:green;'>0</font> | Total Grab : <font id='tkabeh' style='color:green;'>0</font>";
        div_grabFren.innerHTML += "<br/> <br/> ";
        div_grabFren.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_grabfren = document.getElementById("tempat_tools");
        show_grabfren.appendChild(div_grabFren);
        var grab_btn = document.getElementById('grabstart');
            grab_btn.onclick=()=>{
            arezdev.grabFren(true,1);
        };
    },

    showGrabgrup:()=>{
        document.getElementById("sengndue").innerHTML="̷G̳̿͟͞r̳̿͟͞a̳̿͟͞b̳̿͟͞ m̳̿͟͞e̳̿͟͞m̳̿͟͞b̳̿͟͞e̳̿͟͞r̳̿͟͞ g̳̿͟͞r̳̿͟͞o̳̿͟͞u̳̿͟͞p̳̿͟͞ B̳̿͟͞y̳̿͟͞- Z̳̿͟͞D̳̿͟͞E̳̿͟͞V̳̿͟͞";
        var getgrupUid = document.createElement('div');
        getgrupUid.id = 'getgrupUid';
        getgrupUid.innerHTML += "<br/>	<br/> ";
        getgrupUid.innerHTML += "<textarea placeholder='group uid...' id='groupId' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        getgrupUid.innerHTML += "<br/>	<br/> ";
        getgrupUid.innerHTML += "<button id='grabstart' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1' style='cursor: pointer; background-color: rgb(27, 116, 228); font-weight: 600; color: white; padding: 5px 10px; border: 0px; border-radius: 5px; text-decoration: none; opacity: 1; margin: 2px; font-size: xx-small;'>Start Grab";
        getgrupUid.innerHTML += "<br/>	<br/> ";
        getgrupUid.innerHTML += "<span id='total' style='float:left'>On Proses : <font id='sukses' style='color:green;'>0</font> | total grup : <font id='kabeh' style='color:green;'>0</font></div> | Total Grab : <font id='tkabeh' style='color:green;'>0</font> <span id='total' style='float:left'>";
        getgrupUid.innerHTML += "<br/>	<br/> ";
        getgrupUid.innerHTML += "<div id='infoakun' style='color:red;'>";     
        getgrupUid.innerHTML += "<br/> <br/> ";
        getgrupUid.innerHTML += "Token grab next :";
        getgrupUid.innerHTML += "<span id='total' style='float:left'><input id='dataArezDev' style='width:343px;height:20px;border-radius:2px;resize:none;'></input><br/>	<br/>";
        getgrupUid.innerHTML += "<textarea placeholder='result...' id='report' onfocus='this.select()' style='width:343px;height:100px;border-radius:2px;resize:none;overflow-y:scroll;'></textarea>";
        var show_grabgrup = document.getElementById("tempat_tools");
        show_grabgrup.appendChild(getgrupUid);
        var grab_btn = document.getElementById('grabstart');
            grab_btn.onclick=()=>{
            arezdev.startGrab(true,1);
        };
    },

    grabFren:(start,loop)=>{
            var tokenku = document.getElementById('accesstokens').value;
            var input = document.getElementById('uidmaster').value;
            var jumlah = input.split("\n").length;
            var gen = document.getElementById("genderOpt").value;
            var negoro = document.getElementById("countrycode").value;
			var prosess = document.getElementById('sukses');
			var totals = document.getElementById('kabeh');
			var tkabehs = document.getElementById('tkabeh');
            var hasil = document.getElementById("report");
            var main_uid = input.split("\n");
            totals.innerHTML=jumlah;
            if (start == true && loop <= jumlah) {
                    fetch("https://graph.facebook.com/"+ main_uid[loop-1] +"?fields=friends{id,gender,location{location{country_code}}}&access_token="+tokenku)
                    .then(async (response) =>{
                        try {
                            let a = await response.json();
                            var data = a.friends.data;
                            var uid_Filter = [];
                            var location_filter = [];
                            var uid_ALL = [];
                              for(var i = 0; i < data.length;i++){
                                uid_Filter.push(data[i]);
                                uid_ALL.push(data[i]);
                              }
                                for(var i = 0; i < data.length;i++){
                                    if(uid_Filter[i].location&& uid_Filter[i].gender==gen){
                                        console.log("grab : "+gen);
                                        if(negoro=="all"){ 
                                            hasil.value+=uid_Filter[i].id+"\n";
                                            tkabehs.innerHTML = hasil.value.split("\n").length - 1;
                                            hasil.scrollTop = hasil.scrollHeight;
                                            prosess.innerHTML=loop;
                                            }
                                        if(uid_Filter[i].location.location.country_code==negoro){
                                            location_filter.push(uid_Filter[i].id);
                                            hasil.value+=uid_Filter[i].id+"\n";
                                            tkabehs.innerHTML = hasil.value.split("\n").length - 1;
                                            hasil.scrollTop = hasil.scrollHeight;
                                            prosess.innerHTML=loop;
                                            }
                                    }
                                  }
                                  setTimeout(() => {
                                    if(gen=="all"){
                                        for(var i = 0; i < uid_ALL.length;i++){
                                            hasil.value+=uid_ALL[i].id+"\n";
                                            tkabehs.innerHTML = hasil.value.split("\n").length - 1;
                                            hasil.scrollTop = hasil.scrollHeight;
                                            prosess.innerHTML=loop;
                                        }
                                    }
                                  }, 1);
                                  if(data){
                                    loop+=1;
                                    arezdev.grabFren(true,loop);
                                  }
                        } catch (error) {
                            if(error){
                                loop+=1;
                                arezdev.grabFren(true,loop);
                                prosess.innerHTML=loop;
                            }
                        }
                    });
                } else {
                    alert("Wes mari! :)");
                }
    },
    startGrab:(set,go)=>{
        var startUidGroupFrom = document.getElementById("groupId").value.split("\n");
        var countGroup = document.getElementById("groupId").value.split("\n").length;
        var process_group = document.getElementById('sukses');
        var group_total = document.getElementById('kabeh');
        group_total.innerHTML=countGroup;
        var varJS= JSON.stringify({"count":10,"cursor":document.getElementById("dataArezDev").value,"groupID":startUidGroupFrom[go-1],"recruitingGroupFilterNonCompliant":false,"scale":1,"id":startUidGroupFrom[go-1]}),
            bodyJS = "av=" + uid + "&__aaid=0&__user=" + uid + "&__a=1&__req=q&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=" + spinr + "&__s=vblsvx%3A423pmq%3Aca1r8v&__hsi=" + hsi + "&__dyn=7AzHK4HwkEng5K8G6EjBAg5S3G2O5U4e2C17xt3odE98K360CEboG0x8bo6u3y4o2Gwfi0LVEtwMw6ywMwto886C11wBz83WwgEcEhwGxu782lwv89kbxS1Fwc61awkovwRwlE-U2exi4UaEW2G1jwUBwJK14xm3y11xfxmu3W3y261eBx_wHwfC2-VEbUGdG0HE88cA0z8c84q58jyUaUcojxK2B08-269wkopg6C13whEeE-3WVufxa3mUqwjVqwLwHwea&__csr=gaYaT4iZiOJl9soJreOMzkLSAhhitpiHtl8xaALJlAuyF_riiFbkBuGbFRqGJ6rLsGmBi_WjAluJTWExfQAmqhAjn9Bj-ZzklyEzK5qyp4HWXHGF9pVfgmGmiEyFuayqCmmi4okVSQ-aJpXyrxZeeBAQ6pHBGqryopzUiCzoW5XyWzE9qxyEbEW2u6Eb8lzE9VoCaLxnxW4F8bodagO3KUbEuwOway2O2e1axG6U1fbzU_K1Ox-321lwho2aw4gw8604q8jw30o1HE2Uy6q04YE01jvQ0jl0313m0m20jm056oqw4vw2zE0Vu1-wnU0kKw1oS00BFbwfO15wbm095w1ny&__comet_req=15&fb_dtsg=" + dstge + "&jazoest=" + jz + "&lsd=" + lsd + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spint + "&qpl_active_flow_ids=431626709&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=GroupsCometMembersPageNewMembersSectionRefetchQuery&variables=" + varJS + "&doc_id=28113087944948732",
            hasil_uid = document.getElementById('report');
        if(set == true && go <= countGroup){
            process_group.innerHTML=startUidGroupFrom[go-1];
            fetch("/api/graphql/",{
                headers:{"content-type":"application/x-www-form-urlencoded"},
                method:"POST",
                body:bodyJS
            }).then(async(r)=>{
                const a = await r.text();
                var d = JSON.parse(a.replace("for (;;);", ""));
                if(d.error){
                    document.getElementById("infoakun").innerHTML=d.errorDescription;
                }
                if(d.data.node.new_members.edges.length > 0){
                    for (let x = 0; x < d.data.node.new_members.edges.length; x++) {
                        var  membernya = d.data.node.new_members.edges[x].node.id;
                        hasil_uid.value += membernya + "\n";
                    }
                    document.getElementById('tkabeh').innerHTML = hasil_uid.value.split("\n").length - 1;
                    hasil_uid.scrollTop = hasil_uid.scrollHeight;
                }
                if(d.data.node.new_members.page_info.has_next_page == true){
                    console.log("grup yang ke : " + go);
                    document.getElementById("dataArezDev").value=d.data.node.new_members.page_info.end_cursor;
                    arezdev.startGrab(true,go);
                }
                if(d.data.node.new_members.page_info.has_next_page == false){
                    go+=1;
                    document.getElementById("dataArezDev").value="";
                    arezdev.startGrab(true,go);
                }
            });
        } else {
            alert("Wes mari! :)");
        }
    },
    getNewFren:(set, go)=>{
        var uidgo = document.getElementById("uidmaster").value.split("\n"), uidtotal = document.getElementById("uidmaster").value.split("\n").length, filter = document.getElementById("genderOpt").value, hasil_uid = document.getElementById("report"), prosess = document.getElementById('sukses'), totals = document.getElementById('kabeh'), tkabeh = document.getElementById('tkabeh');;
        totals.innerHTML=uidtotal;
        if(set == true && go <= uidtotal){
            prosess.innerHTML=uidgo[go-1];
            var getId = btoa("app_collection:" + uidgo[go-1] + ":2356318349:1"), vr = JSON.stringify({"count":8,"cursor":document.getElementById("cursorZdev").value,"scale":1,"search":null,"id":getId}),
            b = "av=" + uid + "&__aaid=0&__user=" + uid + "&__a=1&__req=1d&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=1018047512&__s=rr3bc7%3Arz8reg%3A17pa1l&__hsi=" + hsi + "&__dyn=7AzHKfGU5a5Q1ryaxG4Vp41twWwIxu13wFwhUngS3q2ibwNwno" + arezdev.ngawor(81) + "-" + arezdev.ngawor(36) + "-" + arezdev.ngawor(13) + "-" + arezdev.ngawor(11) + "-" + arezdev.ngawor(34) + "-" + arezdev.ngawor(20) + "-" + arezdev.ngawor(20) + "&__csr=&__comet_req=15&fb_dtsg=" + dstge + "&jazoest=25276&lsd=xUphIqEZUkzg0yzkbiil-Y&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spint + "&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionListRendererPaginationQuery&variables=" + vr + "&server_timestamps=true&doc_id=28427596200187526";
            fetch("/api/graphql/",{
               headers:{"content-type":"application/x-www-form-urlencoded"},
               method:"POST",
               body:b
           }).then(async(r)=>{
               const a = await r.json();
               if(a.data.node.pageItems.edges.length > 0){
                if(a.data.node.pageItems.page_info.has_next_page == true ){
                    console.log(a.data.node.pageItems.page_info.end_cursor);
                    document.getElementById("cursorZdev").value=a.data.node.pageItems.page_info.end_cursor;
                    arezdev.getNewFren(true,go);
                    }
                    if(a.data.node.pageItems.page_info.has_next_page == false ){
                        document.getElementById("cursorZdev").value="";
                        go+=1;
                        arezdev.getNewFren(true,go);
                    }
                    if(filter=="ALL"){
                        for (let y = 0; y < a.data.node.pageItems.edges.length; y++) {
                            hasil_uid.value += a.data.node.pageItems.edges[y].node.node.id + "\n";
                        }
                    }
                    if(filter=="FEMALE"){
                        var uid_filter = [];
                        for (let ff = 0; ff < a.data.node.pageItems.edges.length; ff++) {
                            uid_filter.push(a.data.node.pageItems.edges[ff].node.actions_renderer.action.client_handler.profile_action.restrictable_profile_owner);
                        }
                        for (let f = 0; f < uid_filter.length; f++) {
                            if(uid_filter[f].gender=="FEMALE"){
                                var uidku = uid_filter[f].id;
                                hasil_uid.value+=uidku + "\n";
                            }
                        }
                        console.log(uid_filter);
                    }
                    if(filter=="MALE"){
                        var uid_filter = [];
                        for (let ff = 0; ff < a.data.node.pageItems.edges.length; ff++) {
                            uid_filter.push(a.data.node.pageItems.edges[ff].node.actions_renderer.action.client_handler.profile_action.restrictable_profile_owner);
                        }
                        for (let m = 0; m < uid_filter.length; m++) {
                            if(uid_filter[m].id && uid_filter[m].gender=="MALE"){
                                var uidku = uid_filter[m].id;
                                hasil_uid.value+=uidku + "\n";
                            }
                        }
                        console.log(uid_filter);
                    }
                }
                tkabeh.innerHTML = hasil_uid.value.split("\n").length - 1;
                hasil_uid.scrollTop = hasil_uid.scrollHeight;
           });
        } else {
            alert("Wes mari! :)");
        }
        
    },
    getToken: function(){
        fetch("https://www.facebook.com/v1.0/dialog/oauth/confirm", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US,en;q=0.9",
              "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryX6MJ1UsBbRbz6tAz",
              "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.facebook.com",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\'fb_dtsg\'\r\n\r\n"+dstge+"\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"app_id\"\r\n\r\n124024574287414\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"redirect_uri\"\r\n\r\nfbconnect://success\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"display\"\r\n\r\npopup\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"ref\"\r\n\r\nDefault\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"return_format\"\r\n\r\naccess_token\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"sso_device\"\r\n\r\nios\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz\r\nContent-Disposition: form-data; name=\"__CONFIRM__\"\r\n\r\n1\r\n------WebKitFormBoundaryX6MJ1UsBbRbz6tAz--\r\n",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          }).then(async(a)=>{
            var data = await a.text();
            var tokens = data.split(/access_token=/)[1].split(/&data_access_expiration_time=0&expires_in=0/)[0];
            document.getElementById("accesstokens").value=tokens;
        });
    },
    addFren:(set, go, suksesx, gagalx)=>{
        document.getElementById('addstart').innerHTML="Process...!";
        var uidgo = document.getElementById("uidmaster").value.split("\n"), uidtotal = document.getElementById("uidmaster").value.split("\n").length, hasil_uid = document.getElementById("report"), sukses = document.getElementById('sukses'), gagal = document.getElementById('gagal'), totaladd = document.getElementById('kabeh');
        totaladd.innerHTML=uidtotal;
        var suara_sukses = new Audio("https://www.facebook.com/rsrc.php/yf/r/TNPmLer_j2q.ogg");
        var suara_gagal = new Audio("https://www.facebook.com/rsrc.php/y5/r/ouE5maL6ab4.ogg");
        var suara_selesai = new Audio("https://www.facebook.com/rsrc.php/yO/r/kTasEyE42gs.ogg");
        if(set == true && go <= uidtotal){
            var vr = JSON.stringify({"input":{"attribution_id_v2":"ProfileCometCollectionRoot.react,comet.profile.collection.friends_recent,unexpected,1731076446197,517404,,,;ProfileCometCollectionRoot.react,comet.profile.collection.friends,unexpected,1731076444248,38547,,,;ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,via_cold_start,1731076441633,520900,190055527696468,,","friend_requestee_ids":[uidgo[go-1]],"friending_channel":"PROFILE_BUTTON","warn_ack_for_ids":[],"actor_id":uid,"client_mutation_id":"1"},"scale":1}), b ="av=" + uid + "&__aaid=0&__user=" + uid + "&__a=1&__req=1l&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=1018048927&__s=m16ylq%3A33dmit%3Aeyoxhv&__hsi=" + hsi + "&__dyn=7AzHKfGU5a5Q1" + arezdev.ngawor(62) + "-" + arezdev.ngawor(63) + "-" + arezdev.ngawor(44) + "_" + arezdev.ngawor(79) + "-" + arezdev.ngawor(9) + "&__csr=&__comet_req=15&fb_dtsg=" + dstge + "&jazoest=" + jz + "&lsd=" + lsd + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spint + "&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometFriendRequestSendMutation&variables=" + vr + "&server_timestamps=true&doc_id=9012643805460802";
            fetch("/api/graphql/",{
                headers:{"content-type":"application/x-www-form-urlencoded"},
                method:"POST",
                body:b
            }).then(async(r)=>{
                const a = await r.text();
                var d = JSON.parse(a.replace("for (;;);", ''));
                if(d.data.friend_request_send){
                    suksesx+=1;
                    sukses.innerHTML=suksesx;
                    hasil_uid.value += "✅ " + uidgo[go-1] + " : Sukses pakde!" + "\n";
                    suara_sukses.play();
                    go+=1;
                    arezdev.addFren(true, go, suksesx, gagalx);
                }
                if(d.errors[0].summary){
                    gagalx+=1;
                    gagal.innerHTML=gagalx;
                    hasil_uid.value += "❌ " + uidgo[go-1] + " : " + d.errors[0].summary + "\n";
                    suara_gagal.play();
                    go+=1;
                    arezdev.addFren(true, go, suksesx, gagalx);
                }
                hasil_uid.scrollTop = hasil_uid.scrollHeight;
                
            });
        } else {
            suara_selesai.play();
            document.getElementById('addstart').innerHTML="Done...!";
           setTimeout(() => {
             document.getElementById('addstart').innerHTML="Add";
           }, 2000);
        }
    },
    addFrenV2:(set, go, suksesx, gagalx)=>{
        document.getElementById('addstartv2').innerHTML="Process...!";
        var uidgo = document.getElementById("uidmaster").value.split("\n"), uidtotal = document.getElementById("uidmaster").value.split("\n").length, hasil_uid = document.getElementById("report"), sukses = document.getElementById('sukses'), gagal = document.getElementById('gagal'), totaladd = document.getElementById('kabeh');
        totaladd.innerHTML=uidtotal;
        var suara_sukses = new Audio("https://www.facebook.com/rsrc.php/yf/r/TNPmLer_j2q.ogg");
        var suara_gagal = new Audio("https://www.facebook.com/rsrc.php/y5/r/ouE5maL6ab4.ogg");
        var suara_selesai = new Audio("https://www.facebook.com/rsrc.php/yO/r/kTasEyE42gs.ogg");
        if(set == true && go <= uidtotal){
            var b2 = "av=" + uid + "&__user=" + uid + "&__a=1&__dyn=" + "7AzHK4HUHxp2" + arezdev.ngawor(38) + "-" + arezdev.ngawor(89) + "-" + arezdev.ngawor(127) + "&__csr=&__req=7w&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=" + spinr + "&__s=" + nggasak(6) + ":" + nggasak(6) + ":" + nggasak(6) + "&__hsi=" + hsi + "&__comet_req=1&fb_dtsg=" + dstge + "&jazoest=" + jz + "&lsd=" + lsd + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spint + "&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometFriendRequestSendMutation&variables={\"input\":{\"friend_requestee_ids\":[\"" + uidgo[go-1] + "\"],\"people_you_may_know_location\":\"friends_center\",\"refs\":[null],\"source\":\"people_you_may_know\",\"warn_ack_for_ids\":[],\"actor_id\":\"" + uid + "\",\"client_mutation_id\":\"" + go + "\"},\"scale\":1}&server_timestamps=true&doc_id=5029551473725968&fb_api_analytics_tags: [\"qpl_active_flow_ids=30605361\"]";
            var vr = JSON.stringify({"input":{"attribution_id_v2":"ProfileCometCollectionRoot.react,comet.profile.collection.friends_recent,unexpected,1731076446197,517404,,,;ProfileCometCollectionRoot.react,comet.profile.collection.friends,unexpected,1731076444248,38547,,,;ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,via_cold_start,1731076441633,520900,190055527696468,,","friend_requestee_ids":[uidgo[go-1]],"friending_channel":"PROFILE_BUTTON","warn_ack_for_ids":[],"actor_id":uid,"client_mutation_id":"1"},"scale":1}), b ="av=" + uid + "&__aaid=0&__user=" + uid + "&__a=1&__req=1l&__hs=" + hs + "&dpr=1&__ccg=EXCELLENT&__rev=1018048927&__s=m16ylq%3A33dmit%3Aeyoxhv&__hsi=" + hsi + "&__dyn=7AzHKfGU5a5Q1" + arezdev.ngawor(62) + "-" + arezdev.ngawor(63) + "-" + arezdev.ngawor(44) + "_" + arezdev.ngawor(79) + "-" + arezdev.ngawor(9) + "&__csr=&__comet_req=15&fb_dtsg=" + dstge + "&jazoest=" + jz + "&lsd=" + lsd + "&__spin_r=" + spinr + "&__spin_b=" + spinb + "&__spin_t=" + spint + "&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometFriendRequestSendMutation&variables=" + vr + "&server_timestamps=true&doc_id=9012643805460802";
            fetch("/api/graphql/",{
                headers:{"content-type":"application/x-www-form-urlencoded"},
                method:"POST",
                body:b2
            }).then(async(r)=>{
                const a = await r.text();
                var d = JSON.parse(a.replace("for (;;);", ''));
                if(d.data.friend_request_send){
                    suksesx+=1;
                    sukses.innerHTML=suksesx;
                    hasil_uid.value += "✅ " + uidgo[go-1] + " : Sukses pakde!" + "\n";
                    hasil_uid.scrollTop = hasil_uid.scrollHeight;
                    suara_sukses.play();
                    go+=1;
                    arezdev.addFrenV2(true, go, suksesx, gagalx);
                } 
                if(d.errors) {
                    gagalx+=1;
                    gagal.innerHTML=gagalx;
                    hasil_uid.value += "❌ " + uidgo[go-1] + " : " + d.errors[0].description + "\n";
                    hasil_uid.scrollTop = hasil_uid.scrollHeight;
                    suara_gagal.play();
                    go+=1;
                    arezdev.addFrenV2(true, go, suksesx, gagalx);
                }
            });
            function nggasak(length) {
                var str = '';
                var str2 = "abcdefghijklmnopqrstuvwxyz123456789".length;
                for (var i = 0; i < length; i++) {
                    str += "abcdefghijklmnopqrstuvwxyz123456789".charAt(Math.floor(Math.random() * str2));
                }
                return str;
              }
        } else {
            suara_selesai.play();
            document.getElementById('addstartv2').innerHTML="Done...!";
           setTimeout(() => {
             document.getElementById('addstartv2').innerHTML="Add V2";
           }, 2000);
        }
    },
    tutup:()=>{
        var formku = document.getElementById('arezdevtools');
        formku.parentNode.removeChild(formku);
    }, 
    ngawor:(length)=>{
        var result           = '';
        var characters       = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    },

};
