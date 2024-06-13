javascript:(()=>{
var names = ["Meyer","Müller","Muller","Nagel","Kortig","Naumann","Maur","Schweizer","Beich","Winkel","Fuchs","Krüger","Roth","Zimmer","Fenstermacher","Fuerst","Bach","Ebersbach","Wannemaker","Biermann","Frei","Faber","Weber","Schroeder","Probst","Grunewald","Drechsler","Pabst","Seiler","Hueber","Koertig","Kaufmann","Eichelberger","Schneider","Lehmann","Hoch","Ackermann","Neumann","Meister","Theiss","Beckenbauer","Jaeger","Pfaff","Schroder","Schuhmacher","Klug","Vogler","Weiss","Richter","Wirtz","Jager","Gerste","Krause","Feierabend","Eggers","Eichmann","Reinhard","Junker","Adler","Bürger","Baum","Eberhardt","Goldschmidt","Frueh","Kruger","Mauer","Kappel","Eisenhower","Fassbinder","Lemann","Schulze","Hartmann","Strauss","Duerr","Traugott","Bader","Mayer","Barth","Kastner","Baumgaertner","Vogel","Reinhardt","Schmid","Brauer","Blau","Baecker","Moeller","Ackerman","Reiniger","Durr","Friedmann","Dresdner","Bohm","Frankfurter","Kluge","Fruehauf","Gloeckner","Fried","Freitag","Bumgarner","Bergmann","Lehrer","Lang","Kaestner","Kuhn","Diederich","Gersten","Eiffel","Eisenberg","Fisher","Freud","Theissen","Glockner","Weiß","Kaiser","Kohler","Köhler","Mueller","Kuefer","Maurer","Saenger","Herz","Baier","Kuester","Gottlieb","Abend","Wirth","Ebersbacher","Luft","Friedman","Herrmann","Herzog","Bauer","Scholz","Scherer","Kalb","Walter","Schwartz","Schäfer","Kuster","Hirsch","Nussbaum","Konig","Ostermann","Wechsler","Holzman","Foerster","Pfeffer","Dresner","Amsel","Koehler","Krueger","König","Osterhagen","Klein","Cole","Waechter","Muench","Zweig","Eberhart","Sommer","Wagner","Beyer","Huber","Austerlitz","Moench","Mahler","Fleischer","Zimmermann","Berg","Nacht","Rothschild","Oster","Beike","Wexler","Aachen","Becker","Wulf","Peters","Schmidt","Hertz","Schultz","Schweitzer","Weissmuller","Boehm","Schultheiss","Fink","Werner","Schreiber","Freytag","Faerber","Bieber","Jung","Schröder","Kunze","Schmitz","Fuhrmann","Wolf","Brandt","Himmel","Daecher","Schaefer","Farber","Bachmeier","Gerber","Sankt","Decker","Baer","Eisenhauer","Baumgartner","Gaertner","Schmitt","Shuster","Gruenewald","Hofmann","Drescher","Propst","Schreiner","Koch","Unger","Hertzog","Faust","Bayer","Möller","Dreher","Hahn","Eichel","Fiedler","Thalberg","Pfeifer","Koenig","Finkel","Abt","Abendroth","Hoover","Freeh","Werfel","Holtzmann","Pfeiffer","Schuster","Frey","Grunwald","Sanger","Bosch","Dietrich","Schwab","Zimmerman","Furst","Meier","Ritter","Schiffer","Vogt","Engel","Ehrlichmann","Fischer","Weisz","Nadel","Urner","Lowe","Metzger","Wurfel","Braun","Busch","Keller","Rothstein","Hoffmann","Mehler","Schwarz","Ziegler","Achen","Neustadt","Kohl","Gottschalk","Burger","Gärtner","Egger","Neudorf","Maier","Loewe","Lange","Bar","Baader","Papst","Herman","Schulz","Trommler","Kirsch","Sabine","Yvonne","Janina","Thorsten","Martina","Andrea","Brigitte","Anne","Sophie","Anna","Birgit","Sara","Christina","Simone","Jessica","Daniela","Jennifer","Christine","Mandy","Lena","Monika","Diana","Jessika","Vanessa","Klaudia","Heike","Leah","Kerstin","Sandra","Katrin","Laura","Kristin","Jana","Jonas","Ursula","Anja","Uta","Christin","Stefanie","Franziska","Marie","Claudia","Julia","Antje","Anke","Doreen","Ines","Ulrike","Katja","Susanne","Silke","Annett","Stephanie","Lisa","Nadine","Sabrina","Angelika","Sarah","Gabriele","Nicole","Johanna","Karin","Barbara","Sophia","Juliane","Michelle","Lea","Ute","Ralph","Marina","Karolin","Manuela","Leonie","Martin","Maria","Tanja","Kathrin","Eric","Katharina","Sven","Petra","Melanie","Ralf","Frank","Tom","Matthias","Ulrich","Andreas","Max","Patrick","Klaus","Erik","Leon","Paul","Christian","Marko","Steffen","Markus","Mike","Dirk","Lucas","Benjamin","Jörg","Felix","Alexander","Daniel","Jürgen","David","Dennis","Phillipp","Lukas","Wolfgang","Kristian","Stephan","Marcel","Robert","Michael","Stefan","Niklas","Jens","Florian","Thomas","Mathias","René","Marco","Sebastian","Maik","Dieter","Bernd","Dominik","Luca","Kevin","Swen","Philipp","Mario","Maximilian","Peter","Tim","Uwe","Jan","Tobias","Torsten"];
var a = Math.floor(Math.random() * names.length);
var b = Math.floor(Math.random() * names.length);
var aku=document.cookie.match(/c_user=(\d+)/i)[1];
var jsV = JSON.stringify({"input":{"name":names[a]+" "+names[b],"source":"PROFILE_SWITCHER_UNIFIED_CREATION","user_name":names[a].toLocaleLowerCase()+names[b].toLocaleLowerCase()+"."+ngarang(7),"actor_id":aku,"client_mutation_id":"1"}});
var fb_dtsg = require("DTSGInitialData").token;

fetch("https://www.facebook.com/api/graphql/", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded",
    "dpr": "1",
    "sec-ch-prefers-color-scheme": "dark",
    "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
    "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"123.0.6312.86\", \"Not:A-Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"123.0.6312.86\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-ch-ua-platform-version": "\"10.0.0\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "viewport-width": "1194",
    "x-asbd-id": "129477",
    "x-fb-friendly-name": "AdditionalProfileCreateMutation",
    "x-fb-lsd": "KQpGlQ0v12c2EQcvzzTSzu"
  },
  "referrer": "https://www.facebook.com/profile/create/?hide_value_prop=true&ref_type=profile_switcher_unified_creation&session_id=3432782972",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "av="+aku+"&__aaid=0&__user="+aku+"&__a=1&__req=14&__hs=19811.HYP2%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=EXCELLENT&__rev=1012412383&__s=ptgnhe%3A7dawcb%3A4w9438&__hsi=7351820169453949253&__dyn=7AzHK4HwkEng5K8G6EjBAg2owIxu13wFwnUW3q2ibwNw9G2Sawba1DwUx60GE3Qwb-q7oc81xoswMwto886C11wBz83WwtohwGxu782lwv89kbxS2218wc60D8vwRwlE-U2exi4UaEW2G1NxGm2SUbElxm1Wxfxmu3W3y261eBx_wHwfCm2CVEbUGdwr84i1jg2cwMwrUK2K364UrwFg2fwxyo6O1FwgU4q3G1eKufxa3m7E&__csr=gKwwG9biT9AiP_ZKJtHOOQSPOcQInnkAjt9X9kiGb8x2WJKjiF4biLaABdbuCXBA_FeO4bpplJJ4x6jxbJ17DyRQV-8iDxG4bghxu9gCiU-VlBykAcx6mmcxV3oox5298G9yUGdzpUuKQ6Ey5bwQAwiGxl0hU8ElxqcwAxe225k48kwAw8K1fxifwJwlEfof8Smbx-Unw9u4U2bw8W0Bo7G0P8vw9m0cgw0Evws801hqA04dAeDS0b9w1cy04_o1UU18E0vmw0CJw2RU06oq0j-11ucw6mw&__comet_req=15&fb_dtsg="+fb_dtsg+"&jazoest=25562&lsd=KQpGlQ0v12c2EQcvzzTSzu&__spin_r=1012412383&__spin_b=trunk&__spin_t=1711729022&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=AdditionalProfileCreateMutation&variables="+jsV+"&server_timestamps=true&doc_id=4699419010168408",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(async(r)=>{
    let a = await r.json();
    if(a.data.additional_profile_create.additional_profile.id){
        alert("sukses clone! profile: "+a.data.additional_profile_create.additional_profile.id)
    }
});

function ngarang(length){
    var result           = '';
    var characters       = 'QAZwsxEDCrfvTGByhnUJMikOLp1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9ol0p';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
})();
