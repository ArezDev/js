if(window.location.hostname.includes('facebook') === true) {
void((function() {
    body = document.body;
    div = document.createElement('div');
    div.id = 'informasi';
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
    div.innerHTML = "<center>Tools FB v.1.6 -By ArezDev</center>";
    div.innerHTML += "<span style='width: 20px;height: 20px;background: #eee;cursor: pointer;display: block;text-align: center;color: red;position: absolute;top: 0;right: 0;' onclick='arezdev.tutup()'' onmouseover='this.style.opacity=0.7;' onmouseout='this.style.opacity=1'>X</span>";
    div.innerHTML += "<br/><br/>";
    div.innerHTML += "<div style=\'margin-top:10px\' id=\'divsatu\'>";
    div.innerHTML += "<textarea placeholder=\'{status,bio,pm}\' id=\'status\' onfocus=\'this.select()\' style=\'width:343px;height:30px;border-radius:2px;resize:none;\'></textarea>";
    div.innerHTML += "<select id='mileh_kota' style='height:30px;'><option value='DE'>Jerman</option><option value='AU'>Australia</option><option value='FR'>France</option><option value='EE'>Estonia</option><option value='CH'>Switzerland</option><option value='IS'>Icelands</option><option value='CA'>Canada</option><option value='IE'>Ireland</option><option value='NL'>Netherlands</option><option value='NO'>Norway</option><option value='NZ'>New Zealand</option><option value='TJ'>Tajikistan</option><option value='IT'>Italy</option><option value='JP'>Jepang</option><option value='TR'>Turkey</option><option value='US'>Amerika</option></select>";
    div.innerHTML += " <button onclick=\'arezdev.settingInpo()\' id=\'settingInpo\' style=\'background:pink;color:white;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap\'>Set inpo + bio!</button>";
    div.innerHTML += " <button onclick=\'arezdev.startPost()\' id=\'startPost\' style=\'background:pink;color:white;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap\'>Gawe Status!</button>";
    div.innerHTML += "</div>";
    div.innerHTML += "<div style=\'margin-top:10px\' id=\'divsatu\'>";
    div.innerHTML += "<textarea placeholder=\'{posplay,links}\' id=\'link\' onfocus=\'this.select()\' style=\'width:343px;height:30px;border-radius:2px;resize:none;\'></textarea>";
    div.innerHTML += "<button onclick=\'arezdev.startPosPlay()\' id=\'startPosPlay\' style=\'background:pink;color:white;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap\'>Gawe Posplay!</button>";
    div.innerHTML += "<button onclick=\'arezdev.getPrenNew()\' id=\'getpren\' style=\'background:pink;color:white;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap;float:right;\'>Get Pren!</button>";
    div.innerHTML += "</div>";
    div.innerHTML += "<div style=\'margin-top:10px\' id=\'divsatu\'>";
    div.innerHTML += "<textarea placeholder=\'{uid gawe add}\' id=\'uid\' onfocus=\'this.select()\' style=\'width:343px;height:100px;border-radius:2px;resize:none;\'></textarea>";
    div.innerHTML += "<textarea placeholder=\'uid gagal add...\' id=\'uid_gagal\' onfocus=\'this.select()\' style=\'width:343px;height:100px;border-radius:2px;resize:none;color:red;\'></textarea>";
    div.innerHTML += "</div>";
    div.innerHTML += "<div style=\'margin-top:10px\'>";
    div.innerHTML += "<center><button onclick=\'arezdev.startAdd(true, 1, 1, 1)\' id=\'startAdd\' style=\'background:pink;color:white;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap\'>Add</button> <button onclick=\'arezdev.startAddV2()\' id=\'startAddV2\' style=\'background:pink;color:white;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap\'>Add V2</button> <button onclick=\'arezdev.startAddV3()\' id=\'startAddV3\' style=\'background:pink;color:white;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap\'>Add V3</button> <button onclick=\'arezdev.pm()\' id=\'pm\' style=\'background:pink;color:white;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap\'>PM !</button></center>";
    div.innerHTML += "</div>";
    div.innerHTML += "<div style=\'margin-top:10px\'>";
    div.innerHTML += "<center>Add: <font id='sukses' style='color:green;'>0</font> / <font id='gagal' style='color:red;'>0</font>  |  Total add: <font id='totaluid' style='color:green;'>0</font> | PM: <font id='suksesPM' style='color:green;'>0</font> / <font id='gagalPM' style='color:red;'>0</font>  |  Total pm: <font id='totalpm' style='color:green;'>0</font></center>";
    div.innerHTML += "</div>";
    div.innerHTML += "<div style=\'margin-top:10px\' id=\'divsatu\'>";
    div.innerHTML += "<center>Delay? <input type='number' class='inputtext' placeholder='Delay' id='delay' value='1' style='background-color: pink;width: 25px;text-align:center;border-radius: 3px;'></center></div>";
    div.innerHTML += "</div>";
    div.innerHTML += "<div style=\'margin-top:10px\'>";
    div.innerHTML += "<span id='InfoAdd'>";
    div.innerHTML += "</div>";
    div.innerHTML += "<br/>";
    div.innerHTML += "<div style=\'margin-top:10px\'>";
    div.innerHTML += "<textarea placeholder=\'result...!\' id=\'report\' onfocus=\'this.select()\' style=\'width:343px;height:85px;border-radius:2px;resize:none;overflow-y:scroll;\'></textarea>";
    div.innerHTML += "<div style=\'text-align:center;color:#0033cc\'><p>Made with 💖 By <a href='https://fb.me/Mr.D4rk.Corpotion'>ArezDev</a></p></div>";
    body.appendChild(div);
    var aku = require("CurrentUserInitialData").USER_ID;
    var token_dtsg = require("DTSGInitialData").token;
    window.arezdev = {
        startPost: function() {
            var katae = document.getElementById('status').value;
            var hasil = document.getElementById('report');
            document.getElementById('startPost').style = "background:grey;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
            document.getElementById('startPost').innerHTML = "proses..";
            var jsVar = JSON.stringify({
                "input": {
                    "composer_entry_point": "inline_composer",
                    "composer_source_surface": "timeline",
                    "idempotence_token": "e88bc66a-5eec-4697-852d-ba6a3705dfe3_FEED",
                    "source": "WWW",
                    "attachments": [],
                    "audience": {
                        "privacy": {
                            "allow": [],
                            "base_state": "EVERYONE",
                            "deny": [],
                            "tag_expansion_state": "UNSPECIFIED"
                        }
                    },
                    "message": {
                        "ranges": [],
                        "text": katae
                    },
                    "with_tags_ids": [],
                    "inline_activities": [],
                    "explicit_place_id": "0",
                    "text_format_preset_id": "0",
                    "logging": {
                        "composer_session_id": "e88bc66a-5eec-4697-852d-ba6a3705dfe3"
                    },
                    "navigation_data": {
                        "attribution_id_v2": "ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,via_cold_start,1686239587489,615670,190055527696468,"
                    },
                    "tracking": [null],
                    "actor_id": document.cookie.match(/c_user=(\d+)/i)[1],
                    "client_mutation_id": "1"
                },
                "displayCommentsFeedbackContext": null,
                "displayCommentsContextEnableComment": null,
                "displayCommentsContextIsAdPreview": null,
                "displayCommentsContextIsAggregatedShare": null,
                "displayCommentsContextIsStorySet": null,
                "feedLocation": "TIMELINE",
                "feedbackSource": 0,
                "focusCommentID": null,
                "gridMediaWidth": 230,
                "groupID": null,
                "scale": 1,
                "privacySelectorRenderLocation": "COMET_STREAM",
                "renderLocation": "timeline",
                "useDefaultActor": false,
                "inviteShortLinkKey": null,
                "isFeed": false,
                "isFundraiser": false,
                "isFunFactPost": false,
                "isGroup": false,
                "isEvent": false,
                "isTimeline": true,
                "isSocialLearning": false,
                "isPageNewsFeed": false,
                "isProfileReviews": false,
                "isWorkSharedDraft": false,
                "UFI2CommentsProvider_commentsKey": "ProfileCometTimelineRoute",
                "hashtag": null,
                "canUserManageOffers": false,
                "__relay_internal__pv__GroupsCometDelayCheckBlockedUsersrelayprovider": false,
                "__relay_internal__pv__IsWorkUserrelayprovider": false,
                "__relay_internal__pv__IsMergQAPollsrelayprovider": false,
                "__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider": false,
                "__relay_internal__pv__StoriesRingrelayprovider": false
            });
            var jsBody = "av=" + document.cookie.match(/c_user=(\d+)/i)[1];
            jsBody = jsBody + "&__user=" + document.cookie.match(/c_user=(\d+)/i)[1];
            jsBody = jsBody + "&__a=1";
            jsBody = jsBody + "&__req=1f";
            jsBody = jsBody + "&__hs=19516.HYP:comet_pkg.2.1..2.1";
            jsBody = jsBody + "&dpr=1";
            jsBody = jsBody + "&__ccg=GOOD";
            jsBody = jsBody + "&__rev=1007644511";
            jsBody = jsBody + "&__s=ekqi2z:b51f6f:q7jtgu";
            jsBody = jsBody + "&__hsi=7242343875773207453";
            jsBody = jsBody + "&__dyn=7AzHJ16UW5Eb8ng5K8G6EjBWobVo66u2i5U4e2C17xt3odEnz8K361twYwJyEiwsobo6u3y4o2Gwfi0LVEtwMw65xO2OU7m2210wEwgolzUO0-E4a3a4oaEnxO0Bo7O2l2Utwwwi831wiEjwZx-3m1mzXw8W58jwGzE8FU5e7oqBwJK2W5olwUwOzEjUlDw-wUwxwjFovUy2a0SEuBwFKq2-azqwqo4i223908O3216xi4UdUcojxK2B0oobo8oC1hxB0qo";
            jsBody = jsBody + "&__csr=h4fMN24hWsoB_klOd9GIGcpW6OjGOklnhaRn4iiID4bAPETtexkGayfuh4FJ9GmAVbBunQh9KRXKGGjFumA_rKXXCuXWmcP29_laVBKFdkZZyKby9pFGCFkBybyVFmm4bHiybmHzevyFpAHjDUOuVV9pKq8KfKAexPhFGCAyFV8yEOnm2K7Eox65VbXAUhG6aADhKegyqmiEhxiWggzUWdDxe4ohyE9UNomxq78_Dwzx26EOi5U8AE-m1cx-EgwHwWzFFpEOUV2EhxCbzVKdwqK4o9U2xwxABx2EvzElxZ28vyU5Si3y6U8UlG3G01ynw18R009vS03D-Uco1BU1bUhgkS0E80Qu08Txa8Dwbu2G1Ywae4U31xi0AU0yK02jCpm0Bk2aagy0IA07YJa4o1-E0Naqi58y04Fo1fE0HK0Aax500UYg1KU3Zg2FwJA83fXV811o0Aa0sB2ovgCb44Cw1jG4A0gq";
            jsBody = jsBody + "&__comet_req=15";
            jsBody = jsBody + "&fb_dtsg=" + token_dtsg;
            jsBody = jsBody + "&jazoest=25334";
            jsBody = jsBody + "&lsd=w6yo9rjNbJk3guEQj6AlGE";
            jsBody = jsBody + "&__spin_r=1007644511";
            jsBody = jsBody + "&__spin_b=trunk";
            jsBody = jsBody + "&__spin_t=1686239586";
            jsBody = jsBody + "&fb_api_caller_class=RelayModern";
            jsBody = jsBody + "&fb_api_req_friendly_name=ComposerStoryCreateMutation";
            jsBody = jsBody + "&variables=" + jsVar;
            jsBody = jsBody + "&server_timestamps=true";
            jsBody = jsBody + "&doc_id=6054793554643570";
            fetch("https://web.facebook.com/api/graphql/", {
                "headers": {
                    "content-type": "application/x-www-form-urlencoded"
                },
                "referrer": "https://web.facebook.com/profile.php",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": jsBody,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(async (response) => {
                try {
                    const d = await response.json();
                    console.log(d);
                    if (d && d.data.story_create.story.url) {
                        hasil.value += d.data.story_create.story.url + "\n";
                        document.getElementById('startPost').style = "background:green;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
                        document.getElementById('startPost').innerHTML = "Done!";
                        setTimeout(() => {
                            document.getElementById('startPost').style = "background:pink;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid white;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
                            document.getElementById('startPost').innerHTML = "Gawe Status!";
                        }, 1000);
                    }
                    console.log(d.data.story_create.story.url);
                } catch (err) {
                    console.log(err);
                }
            });
        },
        startPosPlay: function() {
            var link_iki = document.getElementById('link').value;
            var hasil = document.getElementById('report');
            document.getElementById('startPosPlay').style = "background:grey;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
            document.getElementById('startPosPlay').innerHTML = "proses..";
            var prVar = JSON.stringify({
                "feedLocation": "FEED_COMPOSER",
                "focusCommentID": null,
                "goodwillCampaignId": "",
                "goodwillCampaignMediaIds": [],
                "params": {
                    "url": link_iki
                },
                "privacySelectorRenderLocation": "COMET_COMPOSER",
                "renderLocation": "composer_preview",
                "parentStoryID": null,
                "scale": 1.5,
                "useDefaultActor": false,
                "shouldIncludeStoryAttachment": false
            });
            var params = "av=" + aku + "&__user=" + aku + "&__a=1&__dyn=7AzHJ16U9k9wxxt0BwRyaG5UjBWo2nDwAxu13w8CEK3q2ibwyzEeU5W2Saxa1Az8bo6u3y4o27wyw6QCxS320om78-221Rwwx62W7Uy11xmfz83WwgEcHzoaEaoG0Boy1txm2l2UtG7o4y0Mo4G4UcUC68gwHwxwQzXxG1Pxi4UaEW2G1jxS6FobrwKxm5oe8aUavxeu3W2i0x8SEmy88E&__csr=iahAWIHq9Aay7gO9ApVeJecjdp3IBquUyngOEJail5CAUCkXFNd4zCYyWl4Cp7y-FaAzBpmpf2h6jqAfB6SjXGK9pFpHGnRr2SEOilpuiacJqemgmjF2mSh2WUqrjSE-Wd8iBKyyCNhQuivOFxCCyF7Z5gB4VoNediyHg-59ogz92Gfrmi8FBwxVk426h8S8pUC8-mQHBg_VEoykhybzA8pBSp5KfxjBznByUiai8GUhgsGawF8fDy97BiyrGe-mimpi34idAy-i9wCwBwxGkimEKecl1aV4CZ1tqGmoyyo465Xx240n4hGajU4CHxjx7oCh2K6XyoybNjaV8N3p449Ciswxi2A4FHCl54Ahz6gakfAFBBy2riyCpx68gy8rgHy44k5SEObUmgc8ih2y99EiTyE8i1K5HiO6GBba8syiAK9Dyp4lklCxq8xeE4G5QfwDy8qxW3m3Wi3Lxu4658ky8nDiQi62oPgKdg760youwau23xGezoCNe0FNgaoKuWAxm1lx-U9Q317hVUd8nwFwgUwg4E6m0xEnwoo4S0u60_o6yaAGbzk1BBgaF2Dxim1uwk5gcqU5W2idBrGEjg0Hsg1HwNyE3JwmywNjwgV8Ax2034o4q1hwai71aabU0xK6k4E6OV4CcJ0OwdK06_o4jw6hBjw1Dy09SNYbw&__req=2j&__beoa=0&__pc=EXP2:comet_pkg&dpr=1.5&__ccg=GOOD&__rev=1003183255&__s=9o8wjs:ew6ktx:k0mmxq&__hsi=6917516108459624371-0&__comet_req=1&fb_dtsg=" + token_dtsg + "&jazoest=21786&__spin_r=1003183255&__spin_b=trunk&__spin_t=1610609728&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ComposerLinkAttachmentPreviewQuery&variables=" + prVar + "&server_timestamps=true&doc_id=4003194866382122";
            fetch("https://www.facebook.com/api/graphql/", {
                "headers": {
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/x-www-form-urlencoded",
                    "sec-ch-prefers-color-scheme": "light",
                    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Microsoft Edge\";v=\"114\"",
                    "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.134\", \"Microsoft Edge\";v=\"114.0.1823.58\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-ch-ua-platform-version": "\"10.0.0\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "viewport-width": "705",
                    "x-asbd-id": "129477",
                    "x-fb-friendly-name": "ComposerLinkAttachmentPreviewQuery",
                    "x-fb-lsd": "3RY-G5nhpiOCG7R8NbJddh"
                },
                "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                "referrerPolicy": "origin-when-cross-origin",
                "body": params,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(async (r) => {
                try {
                    const d = await r.json();
                    console.log(d);
                    console.log(d.data.link_preview.share_scrape_data);
                    const data_link_nya = {
                        "link": {
                            "share_scrape_data": d.data.link_preview.share_scrape_data
                        }
                    };
                    var array_data_link = [data_link_nya];
                    console.log(data_link_nya);
                    if (data_link_nya) {
                        var data_link = encodeURIComponent(JSON.stringify(data_link_nya));
                        var prVars = JSON.stringify({
                            "input": {
                                "composer_entry_point": "inline_composer",
                                "composer_source_surface": "timeline",
                                "idempotence_token": "ceebfad1-ddpz-e50p-fqyw-d97975d3bdeb_FEED",
                                "source": "WWW",
                                "attachments": (array_data_link),
                                "audience": {
                                    "privacy": {
                                        "allow": [],
                                        "base_state": "EVERYONE",
                                        "deny": [],
                                        "tag_expansion_state": "UNSPECIFIED"
                                    }
                                },
                                "message": {
                                    "ranges": [],
                                    "text": ""
                                },
                                "with_tags_ids": [aku],
                                "inline_activities": [],
                                "explicit_place_id": "0",
                                "logging": {
                                    "composer_session_id": "ceebfad1-ddpz-e50p-fqyw-d97975d3bdeb"
                                },
                                "tracking": [null],
                                "actor_id": aku,
                                "client_mutation_id": "5"
                            },
                            "displayCommentsFeedbackContext": null,
                            "displayCommentsContextEnableComment": null,
                            "displayCommentsContextIsAdPreview": null,
                            "displayCommentsContextIsAggregatedShare": null,
                            "displayCommentsContextIsStorySet": null,
                            "feedLocation": "TIMELINE",
                            "feedbackSource": 0,
                            "focusCommentID": null,
                            "gridMediaWidth": 230,
                            "scale": 1,
                            "privacySelectorRenderLocation": "COMET_STREAM",
                            "renderLocation": "timeline",
                            "useDefaultActor": false,
                            "isFeed": false,
                            "isFundraiser": false,
                            "isFunFactPost": false,
                            "isGroup": false,
                            "isTimeline": true,
                            "isLivingRoom": false,
                            "isSocialLearning": false,
                            "isPageNewsFeed": false,
                            "UFI2CommentsProvider_commentsKey": "ProfileCometTimelineRoute"
                        });
                        var pr = "av=" + aku + "&__user=" + aku + "&__a=1&__dyn=7AzHJ16U9k9wxxt0BwRyaG5UjBWo2nDwAxu13w8CEK3q2ibwyzEeU5W2Saxa1Az8bo6u3y4o27wyw6QCxS320om78-221Rwwx62W7Uy11xmfz83WwgEcHzoaEaoG0Boy1txm2l2UtG7o4y0Mo4G4UcUC68gwHwxwQzXxG1Pxi4UaEW2G1jxS6FobrwKxm5oe8aUavxeu3W2i0x8SEmy88E&__csr=iahAWIHq9Aay7gO9ApVeJecjdp3IBquUyngOEJail5CAUCkXFNd4zCYyWl4Cp7y-FaAzBpmpf2h6jqAfB6SjXGK9pFpHGnRr2SEOilpuiacJqemgmjF2mSh2WUqrjSE-Wd8iBKyyCNhQuivOFxCCyF7Z5gB4VoNediyHg-59ogz92Gfrmi8FBwxVk426h8S8pUC8-mQHBg_VEoykhybzA8pBSp5KfxjBznByUiai8GUhgsGawF8fDy97BiyrGe-mimpi34idAy-i9wCwBwxGkimEKecl1aV4CZ1tqGmoyyo465Xx240n4hGajU4CHxjx7oCh2K6XyoybNjaV8N3p449Ciswxi2A4FHCl54Ahz6gakfAFBBy2riyCpx68gy8rgHy44k5SEObUmgc8ih2y99EiTyE8i1K5HiO6GBba8syiAK9Dyp4lklCxq8xeE4G5QfwDy8qxW3m3Wi3Lxu4658ky8nDiQi62oPgKdg760youwau23xGezoCNe0FNgaoKuWAxm1lx-U9Q317hVUd8nwFwgUwg4E6m0xEnwoo4S0u60_o6yaAGbzk1BBgaF2Dxim1uwk5gcqU5W2idBrGEjg0Hsg1HwNyE3JwmywNjwgV8Ax2034o4q1hwai71aabU0xK6k4E6OV4CcJ0OwdK06_o4jw6hBjw1Dy09SNYbw&__req=c3&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=GOOD&__rev=1003448492&__s=knvv1x:g2on4v:y4ie7y&__hsi=6939715688371406430-0&__comet_req=1&fb_dtsg=" + token_dtsg + "&jazoest=22067&__spin_r=1003448492&__spin_b=trunk&__spin_t=1615778470&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ComposerStoryCreateMutation&variables=" + prVars + "&server_timestamps=true&doc_id=3750337495047316";
                        fetch("https://www.facebook.com/api/graphql/", {
                            "headers": {
                                "accept": "*/*",
                                "accept-language": "en-US,en;q=0.9",
                                "content-type": "application/x-www-form-urlencoded",
                                "sec-ch-prefers-color-scheme": "light",
                                "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                                "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.199\", \"Google Chrome\";v=\"114.0.5735.199\"",
                                "sec-ch-ua-mobile": "?0",
                                "sec-ch-ua-platform": "\"Windows\"",
                                "sec-ch-ua-platform-version": "\"10.0.0\"",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "viewport-width": "705",
                                "x-asbd-id": "129477",
                                "x-fb-friendly-name": "ComposerStoryCreateMutation",
                                "x-fb-lsd": "3RY-G5nhpiOCG7R8NbJddh"
                            },
                            "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                            "referrerPolicy": "strict-origin-when-cross-origin",
                            "body": pr,
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "include"
                        }).then(async (x) => {
                            try {
                                let a = await x.text();
                                if (a.match("for (;;);{")) {
                                    console.log("FB angkep :v");
                                } else {
                                    console.log(a);
                                    hasil.value += "Done posplay!" + "\n";
                                    document.getElementById('startPosPlay').style = "background:green;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
                                    document.getElementById('startPosPlay').innerHTML = "Done!";
                                    setTimeout(() => {
                                        document.getElementById('startPosPlay').style = "background:pink;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid white;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
                                        document.getElementById('startPosPlay').innerHTML = "Gawe Posplay!";
                                    }, 1000);
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        });
                    }
                } catch (error) {
                    console.log(error);
                }
            });
        },
        startAdd: function(add = true, loop = "", kenek = "", gak = "") {
            var Delays = document.getElementById('delay').value;
            document.getElementById('startAdd').style = "background:grey;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
            document.getElementById('startAdd').innerHTML = "proses..";
            var uids = document.getElementById('uid').value;
            var uid_total = uids.split("\n").length;
            document.getElementById("totaluid").innerHTML = uid_total;
            var uid_go = uids.split("\n");
            var hasil = document.getElementById('report');
            var sukses = document.getElementById('sukses');
            var gagal = document.getElementById('gagal');
            if (add == true && loop < uid_total) {
                setTimeout(() => {
                    var uid_add = uid_go[loop - 1];
                    var Vars = JSON.stringify({
                        "input": {
                            "friend_requestee_ids": [uid_add],
                            "people_you_may_know_location": "friends_center",
                            "refs": [null],
                            "source": "people_you_may_know",
                            "warn_ack_for_ids": [],
                            "actor_id": aku,
                            "client_mutation_id": "1"
                        },
                        "scale": 1
                    });
                    fetch("https://www.facebook.com/api/graphql/", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "en-US,en;q=0.9,id;q=0.8",
                            "content-type": "application/x-www-form-urlencoded",
                            "sec-ch-prefers-color-scheme": "light",
                            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                            "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.199\", \"Google Chrome\";v=\"114.0.5735.199\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "\"Windows\"",
                            "sec-ch-ua-platform-version": "\"10.0.0\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "viewport-width": "586",
                            "x-asbd-id": "129477",
                            "x-fb-friendly-name": "FriendingCometFriendRequestSendMutation",
                            "x-fb-lsd": "BnccajPT53Pn5TGObpnPti"
                        },
                        "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": "av=" + aku + "&__user=" + aku + "&__a=1&__req=2i&__hs=19545.HYP%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=EXCELLENT&__rev=1007803729&__s=u1bc0v%3A8i6pq4%3Amstmz6&__hsi=7253137194207808132&__dyn=7AzHJ16UW5Eb8ng5K8G6EjBWobVo66u2i5U4e2C17xt3odEnz8K361twYwJyE24wJwpUe8hwaG0Z82_CxS320om78bbwto88422y11xmfz83WwgEcEhwGxu782lwv89kbxS2218wc61axe3S7Udo5qfK0zEkxe2GewyDwkUtxGm2SUbElxm3y3aexfxmu3W3y261eBx_y88E3qxWm2CVEbUGdG1FyEeo88cA0z8c84q58jwTwNxe6Uak1xwJwxyo566k1Fw&__csr=goMilb6hsytjgzRED9d5MV5tjlYzd4iHsa9tYhnbFt9Xi8mRTWLp3J4_JWhniQnsxXid8QRXV6KFdABG5ujOXhCl2uHGFGhKSAV6J5humq9-aFajgyqcBuV8yiEOi49pELKRryWAzpoGEGjV8vggDzaDzVVV-azfCyoyqVZDy8kGby8OXzKaz5Xxt3KUgU88C5XyGQ7E-mEqxG8gozEhg89UgAypE98ym2a9CKcwAV8Cu2W1lAx24EiwGy8lyVpE7rCy9U8o2hjwCxeUdoryE4maBwEWxu1wx6m6ES1wzHxW00Bq8C01ZFw0OZw8-2GfwcW0E92k0mq0bJw8i0kN6xF02cUrwTwbx09W3y3m1aw0Fk8Ehw4wg6100FYhFUK04u9Px66E2mw37U2tzC1ew47g0dnA04zE6q0_U0K6hw3eU148Fpxg5i763zw3gU4R0fe&__comet_req=15&fb_dtsg=" + token_dtsg + "&jazoest=25166&lsd=BnccajPT53Pn5TGObpnPti&__spin_r=1007803729&__spin_b=trunk&__spin_t=1688752601&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometFriendRequestSendMutation&variables=" + Vars + "&server_timestamps=true&doc_id=6054774531318203",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(async (r) => {
                        try {
                            const d = await r.json();
                            console.log(d);
                            if (d && d.data.friend_request_send) {
                                kenek += 1;
                                sukses.innerHTML = kenek;
                                document.getElementById("InfoAdd").innerHTML = "❤%EF%B8%8F " + uid_go[loop - 1];
                                document.getElementById("InfoAdd").style = "color:green";
                                hasil.value += uid_go[loop - 1] + " : " + d.data.friend_request_send.friend_requestees[0].friendship_status + "\n";
                                hasil.scrollTop = hasil.scrollHeight;
                            } else if (d.errors) {
                                gak += 1;
                                gagal.innerHTML = gak;
                                document.getElementById("InfoAdd").innerHTML = "💔 " + uid_go[loop - 1];
                                document.getElementById("InfoAdd").style = "color:red";
                                hasil.value += uid_go[loop - 1] + " : " + d.errors[0].summary + "\n";
                                hasil.scrollTop = hasil.scrollHeight;
                            }
                            if (loop < uid_total) {
                                console.log("Lanjut !");
                                loop += 1;
                                arezdev.startAdd(true, loop, kenek, gak);
                            } else {
                                document.getElementById('startAdd').style = "background:pink;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid white;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
                                hasil.value += ">>>>> WES MARI ADD !!" + "\n";
                                hasil.scrollTop = hasil.scrollHeight;
                            }
                        } catch (error) {}
                    });
                }, Delays * 1);
            }
        },
        startAddV2: () => {
            var Delays = document.getElementById('delay').value;
            document.getElementById('startAddV2').style = "background:grey;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
            document.getElementById('startAddV2').innerHTML = "proses..";
            var uids = document.getElementById('uid').value;
            var uid_total = uids.split("\n").length;
            document.getElementById("totaluid").innerHTML = uid_total;
            var uid_go = uids.split("\n");
            var hasil = document.getElementById('report');
            var sukses = document.getElementById('sukses');
            var gagal = document.getElementById('gagal');
            var loop = 0;
            var kenek = 0;
            var gak = 0;
            window.ngeAdd = setInterval(() => {
                if (loop < uid_total) {
                    var uid_add = uid_go[loop];
                    var jsVar = JSON.stringify({
                        "input": {
                            "attribution_id_v2": "ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,via_cold_start,1705175176497,745813,190055527696468,,",
                            "friend_requestee_ids": uid_add,
                            "refs": [null],
                            "source": "profile_button",
                            "warn_ack_for_ids": uid_add,
                            "actor_id": aku,
                            "client_mutation_id": "2"
                        },
                        "scale": 1
                    });
                    var js = "av=" + aku;
                    js = js + "&__user=" + aku;
                    js = js + "&__a=1";
                    js = js + "&__req=1i";
                    js = js + "&__hs=19735.HYP:comet_pkg.2.1..2.1";
                    js = js + "&dpr=1";
                    js = js + "&__ccg=EXCELLENT";
                    js = js + "&__rev=1010816679";
                    js = js + "&__s=isu8jy:xy3wgl:tt7qxp";
                    js = js + "&__hsi=7323671606425372126";
                    js = js + "&__dyn=7AzHK4HwkEng5K8G6EjBAo2nDwAxu13wFwhUngS3q2ibwNwnof8boG0x8bo6u3y4o2Gwfi0LVEtwMw65xO2OU7m221FwgolzUO0-E4a3a4oaEnxO0Bo7O2l2Utwwwi831wiE567Udo5qfK0zEkxe2GewyDwkUtxGm2SUbElxm3y11xfxmu3W3y261eBx_wHwoE7u7FoarCwLyESE6C14wwwOg2cwMwhEkxe3u364UrwFg662S269wkopg6C13whEeE4WVU-4E";
                    js = js + "&__csr=ggMtE5sJhJN2bkyTH25iPHEvRlOOil4lN2SD6d8nkLdtGHXWAWV9O4_AWGh9A9GWFJyHmqpVeL-aqjAKh97BBBHCAzaVF8TOGUKjGXXhqgHGaAqxnGVWhuWwziDF6yomiCUgy8kxqmbBK5ppeUWU9kcWwCgkypoO27zGwHgowTzUqxybwIK3q5GzUbo5a9yUb-2a3u58K1TyaAwCwj8bU7a5HwJwt9K49U6q480j_xu0FE08wU2Zwnob80Sq0aBw0qcE03jye09Kg3GwVw50w6Jg7a7FU0OC0he4o0_i0muqt2FA0We03vu0bJw4iw2io2yBg3qw21k07-E5S03AG1Vo3DwQw";
                    js = js + "&__comet_req=15";
                    js = js + "&fb_dtsg=" + token_dtsg;
                    js = js + "&jazoest=25450";
                    js = js + "&lsd=RD5FWr0aDsQ2rkp0VknYn-";
                    js = js + "&__aaid=0";
                    js = js + "&__spin_r=1010816679";
                    js = js + "&__spin_b=trunk";
                    js = js + "&__spin_t=1705175174";
                    js = js + "&fb_api_caller_class=RelayModern";
                    js = js + "&fb_api_req_friendly_name=FriendingCometFriendRequestSendMutation";
                    js = js + "&variables=" + jsVar;
                    js = js + "&server_timestamps=true";
                    js = js + "&doc_id=7033797416660129";
                    fetch("https://www.facebook.com/api/graphql/", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "en-US,en;q=0.9",
                            "content-type": "application/x-www-form-urlencoded",
                            "dpr": "0.333333",
                            "sec-ch-prefers-color-scheme": "dark",
                            "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
                            "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"119.0.6045.160\", \"Chromium\";v=\"119.0.6045.160\", \"Not?A_Brand\";v=\"24.0.0.0\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-model": "\"\"",
                            "sec-ch-ua-platform": "\"Windows\"",
                            "sec-ch-ua-platform-version": "\"10.0.0\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "viewport-width": "2286",
                            "x-asbd-id": "129477",
                            "x-fb-friendly-name": "FriendingCometFriendRequestSendMutation",
                            "x-fb-lsd": "zcYl07CR5TdxAfMYq6m8d3"
                        },
                        "referrer": "https://www.facebook.com/profile.php?id=" + uid_add,
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": "av=" + aku + "&__user=" + aku + "&__a=1&__dyn=7AzHK4HUHxp2u6aJei9FxqewRyU8EJ4Wodo9ES2Ou2i5U4e2C3-7UW3eECdxiUuKewhEe8OdwJx65898pwFxu1ZxaaxG4o27xu15wbC12wv9Etxy5U7R2o467UC0A8sxe0xEKdxai3Dx-8xLwzxmfz88U2UG1dxi7EWUS2G3i1uzbwKwAwhVE9kbxS4oW18y82pDxq1uwZwgEiK8xi8wHzXxG0y8jwVw9O1iwKwHxa1owyxu16waiaxi0im4EtzUdEGdwzwpo7J0&__csr=gB0Rht8bhcj9dN5vNmJN4QLlvl99ifcCCytp4AF5qRvkKAxdnHqVriAHHtfmABBGjimHaWSOaCGJtK8FuKqmeQUySp9qh9by48iBJrQjKhlh9LLz-mimuuFk8F4V5Uy4EyKrg-umWKmqjFAGGWCCwEx6cLzpETz8Ccy4ueBK8jGA7USeAxaayUR3Ex1qdK5oix67bxhaEZ0KGawHxS5kfzogzoTyK2W2imGxm78co9K6Evzkmm5EpxS9wyzpK15Bx10xx-4Qm78tD-U9ocEogGcU5icyo9ouxXzKezonxW26u1YwhE4DDCwi9otwKy8a80P605Z40mum0iO04283mwg7w4EyUb8e819UC3m03nG0aHw0AV809ewd24oO0Yo1SUaU4K0TU2fw5PxG4Eb8pcEc86i4982Sw22o0lD80v6i2K04wE1Do2Yw1Zu5YE2aw9i0M0AUjgbUbay8&&__req=7w&__hs=19846.BP:DEFAULT.2.0..0.0&dpr=1&__ccg=EXCELLENT&__rev=1013249001&__s=sxg14n:ehh3gc:mmxgxo&__hsi=7364745572724905488&__comet_req=1&fb_dtsg=" + token_dtsg + "&jazoest=21983&lsd=zcYl07CR5TdxAfMYq6m8d3&__spin_r=1013249001&__spin_b=trunk&__spin_t=1636822413&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometFriendRequestSendMutation&variables=" + jsVar + "&server_timestamps=true&doc_id=5029551473725968",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(async (r) => {
                        try {
                            const d = await r.json();
                            console.log(d);
                            if (d && d.data.friend_request_send) {
                                kenek++;
                                sukses.innerHTML = kenek;
                                document.getElementById("InfoAdd").innerHTML = "❤ " + uid_add;
                                document.getElementById("InfoAdd").style = "color:green";
                                hasil.value += uid_add + " : " + d.data.friend_request_send.friend_requestees[0].friendship_status + "\n";
                                hasil.scrollTop = hasil.scrollHeight;
                            }
                            if (d.errors[0].summary) {
                                document.getElementById("uid_gagal").value += uid_add + "\n";
                                document.getElementById("uid_gagal").scrollTop = document.getElementById("uid_gagal").scrollHeight;
                                gak++;
                                gagal.innerHTML = gak;
                                document.getElementById("InfoAdd").innerHTML = "💔 " + uid_add;
                                document.getElementById("InfoAdd").style = "color:red";
                                hasil.value += uid_add + " : " + d.errors[0].summary + "\n";
                                hasil.scrollTop = hasil.scrollHeight;
                            }
                        } catch (error) {}
                    });
                    loop++;
                } else {
                    clearInterval(window.ngeAdd);
                    document.getElementById('startAddV2').style = "background:pink;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid white;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
                    hasil.value += ">>>>> WES MARI ADD !!" + "\n";
                    hasil.scrollTop = hasil.scrollHeight;
                }
            }, Delays * 1000);
        },
        startAddV3: () => {
            document.getElementById('startAddV3').style = "background:grey;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
            document.getElementById('startAddV3').innerHTML = "proses..";
            var Delays = document.getElementById('delay').value;
            Delays * 1000;
            var uids = document.getElementById('uid').value.split("\n");
            var aku = document.cookie.match(/c_user=(\d+)/i)[1];
            var hasil = document.getElementById('report');
            var sukses = document.getElementById('sukses');
            var gagal = document.getElementById('gagal');
            var kenek = 0;
            var gak = 0;
            var Member = 2;
            const MemberAsli = 2;
            var LagiProsess = 0;
            var Totalnya = uids.length;
            var berapaXPerulangan = Totalnya / MemberAsli;
            var TotalLooping = Math.ceil(berapaXPerulangan);
            for (let i = 0; i < TotalLooping; i++) {
                setTimeout(() => {
                    var target_uid = uids.slice(LagiProsess, Member);
                    var Vars = JSON.stringify({
                        "input": {
                            "attribution_id_v2": "ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,unexpected,1688753100315,152320,190055527696468,;SearchCometGlobalSearchDefaultTabRoot.react,comet.search_results.default_tab,tap_search_bar,1688753096756,919375,391724414624676,",
                            "friend_requestee_ids": target_uid,
                            "refs": [null],
                            "source": "profile_button",
                            "warn_ack_for_ids": [],
                            "actor_id": aku,
                            "client_mutation_id": "3"
                        },
                        "scale": 1
                    });
                    fetch("https://www.facebook.com/api/graphql/", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "en-US,en;q=0.9,id;q=0.8",
                            "content-type": "application/x-www-form-urlencoded",
                            "sec-ch-prefers-color-scheme": "light",
                            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                            "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.199\", \"Google Chrome\";v=\"114.0.5735.199\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "\"Windows\"",
                            "sec-ch-ua-platform-version": "\"10.0.0\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "viewport-width": "586",
                            "x-asbd-id": "129477",
                            "x-fb-friendly-name": "FriendingCometFriendRequestSendMutation",
                            "x-fb-lsd": "BnccajPT53Pn5TGObpnPti"
                        },
                        "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": "av=" + aku + "&__user=" + aku + "&__a=1&__req=2i&__hs=19545.HYP%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=EXCELLENT&__rev=1007803729&__s=u1bc0v%3A8i6pq4%3Amstmz6&__hsi=7253137194207808132&__dyn=7AzHJ16UW5Eb8ng5K8G6EjBWobVo66u2i5U4e2C17xt3odEnz8K361twYwJyE24wJwpUe8hwaG0Z82_CxS320om78bbwto88422y11xmfz83WwgEcEhwGxu782lwv89kbxS2218wc61axe3S7Udo5qfK0zEkxe2GewyDwkUtxGm2SUbElxm3y3aexfxmu3W3y261eBx_y88E3qxWm2CVEbUGdG1FyEeo88cA0z8c84q58jwTwNxe6Uak1xwJwxyo566k1Fw&__csr=goMilb6hsytjgzRED9d5MV5tjlYzd4iHsa9tYhnbFt9Xi8mRTWLp3J4_JWhniQnsxXid8QRXV6KFdABG5ujOXhCl2uHGFGhKSAV6J5humq9-aFajgyqcBuV8yiEOi49pELKRryWAzpoGEGjV8vggDzaDzVVV-azfCyoyqVZDy8kGby8OXzKaz5Xxt3KUgU88C5XyGQ7E-mEqxG8gozEhg89UgAypE98ym2a9CKcwAV8Cu2W1lAx24EiwGy8lyVpE7rCy9U8o2hjwCxeUdoryE4maBwEWxu1wx6m6ES1wzHxW00Bq8C01ZFw0OZw8-2GfwcW0E92k0mq0bJw8i0kN6xF02cUrwTwbx09W3y3m1aw0Fk8Ehw4wg6100FYhFUK04u9Px66E2mw37U2tzC1ew47g0dnA04zE6q0_U0K6hw3eU148Fpxg5i763zw3gU4R0fe&__comet_req=15&fb_dtsg=" + token_dtsg + "&jazoest=25166&lsd=BnccajPT53Pn5TGObpnPti&__spin_r=1007803729&__spin_b=trunk&__spin_t=1688752601&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometFriendRequestSendMutation&variables=" + Vars + "&server_timestamps=true&doc_id=6054774531318203",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(async (x) => {
                        try {
                            const xx = await x.json();
                            if (xx && xx.data.friend_request_send) {
                                kenek++;
                                sukses.innerHTML = kenek;
                                document.getElementById("InfoAdd").innerHTML = "❤%EF%B8%8F " + target_uid;
                                document.getElementById("InfoAdd").style = "color:green";
                                hasil.value += target_uid + " : " + xx.data.friend_request_send.friend_requestees[0].friendship_status + "\n";
                                hasil.scrollTop = hasil.scrollHeight;
                            } else if (xx.errors) {
                                gak++;
                                gagal.innerHTML = gak;
                                document.getElementById("InfoAdd").innerHTML = "💔 " + target_uid;
                                document.getElementById("InfoAdd").style = "color:red";
                                hasil.value += target_uid + " : " + d.errors[0].summary + "\n";
                                hasil.scrollTop = hasil.scrollHeight;
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    });
                    LagiProsess = (LagiProsess + 2);
                    Member = (Member + 2);
                }, 3000 * (i + 1));
            }
        },
        getpren: function() {
            document.getElementById('getpren').style = "background:grey;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap;float:right;";
            document.getElementById('getpren').innerHTML = "Getpren..";
            var jsBody = "dpr=1";
            jsBody = jsBody + "&__a=1";
            jsBody = jsBody + "&__af=iw";
            jsBody = jsBody + "&__be=-1";
            jsBody = jsBody + "&__pc=PHASED:DEFAULT";
            jsBody = jsBody + "&__user=" + document.cookie.match(/c_user=(\d+)/i)[1];
            jsBody = jsBody + "&__dyn=7AmajEzUGByA5Q9UoHaEWC5EWq2WiWF3oyeqrWo8popyUW3F6wAxu13wFG2K48jyR88wPGiex2uVWxeUW6UO4EK3ucDwPK6qCzEkxvDxicxnxm1tyoOm8yUgx66EK3Ou49L-6Z1im7U9eiax6ezUgByECcypFt0";
            jsBody = jsBody + "&__req=8";
            jsBody = jsBody + "&__rev=1033590";
            jsBody = jsBody + "&fb_dtsg=" + token_dtsg;
            jsBody = jsBody + "&jazoest=26581";
            jsBody = jsBody + "&__spin_r=3078884";
            jsBody = jsBody + "&__spin_b=trunk";
            jsBody = jsBody + "&__spin_t=1497057008";
            jsBody = jsBody + "&__a=1";
            jsBody = jsBody + "&viewer=" + document.cookie.match(/c_user=(\d+)/i)[1];
            jsBody = jsBody + "&token=0.47325888034381314";
            jsBody = jsBody + "&filter[0]=user";
            jsBody = jsBody + "&options[0]=friends_only";
            fetch("https://web.facebook.com/ajax/typeahead/first_degree.php?" + jsBody).then(async (r) => {
                try {
                    const d = await r.text();
                    const e = JSON.parse(d.split("for (;;);")[1]);
                    if (e.payload.entries) {
                        var total_konco = e.payload.entries.length;
                        for (let i = 1; i < total_konco; i++) {
                            document.getElementById('uid').value += e.payload.entries[i].uid + "\n";
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            })
        },
        getPrenNew: function() {
            document.getElementById("uid").value = "";
            document.getElementById('getpren').style = "background:grey;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap;float:right;";
            document.getElementById('getpren').innerHTML = "Getpren..";
            sessionStorage.kursorPren = "";
            sessionStorage.id_tokenPren = "";
            var sec_token = btoa("app_section:" + aku + ":2356318349");
            var jsVar = JSON.stringify({
                "UFI2CommentsProvider_commentsKey": "ProfileCometCollectionRootQuery",
                "collectionToken": null,
                "displayCommentsContextEnableComment": true,
                "displayCommentsContextIsAdPreview": false,
                "displayCommentsContextIsAggregatedShare": false,
                "displayCommentsContextIsStorySet": false,
                "displayCommentsFeedbackContext": null,
                "feedbackSource": 65,
                "feedLocation": "COMET_MEDIA_VIEWER",
                "scale": 1,
                "sectionToken": sec_token,
                "userID": aku
            });
            var jsBody = "av=" + aku;
            jsBody = jsBody + "&__user=" + aku;
            jsBody = jsBody + "&__a=1";
            jsBody = jsBody + "&__req=o";
            jsBody = jsBody + "&__hs=19526.HYP:comet_pkg.2.1..2.1";
            jsBody = jsBody + "&dpr=1";
            jsBody = jsBody + "&__ccg=GOOD";
            jsBody = jsBody + "&__rev=1007703880";
            jsBody = jsBody + "&__s=zptbsu:0v7wpu:nmm01l";
            jsBody = jsBody + "&__hsi=7246082963950001289";
            jsBody = jsBody + "&__dyn=7AzHJ16UW5Eb8ng5K8G6EjBWobVo66u2i5U4e1Nxt3odEnz8K361twYwJyE24wJwpUe8hwaG0Z82_CxS320om78bbwto88422y11xmfz83WwgEcEhwGxu782lwv89kbxS2218wc61axe3S7Udo5qfK0zEkxe2GewyDwkUtxGm2SUbElxm3y3aexfxmu3W3y261eBx_y88E3qxWm2Sq2-azqwaW223908O3216xi4UdUcojxK2B0oobo8oC1hxB0qo";
            jsBody = jsBody + "&__csr=guMxaIbA6j9Ov8Jil6l2iehFW4niZOZONCIJn9Zf9Atj4WZSWEySZ-FdZiq_RiGFrPqK8HGRKBKJSQXKAHAqAVF49KZeExaChfGbGcCpWh95DiS--dAhRpVvyKfzaCmBChFUgEx8TDDQvhoN5yoWaAG9UhKEgyUy5UnxmaGWxq48WXwyyoCbG48GfyA-ijKiEGleqexO5UgwFUgyedybCV8nBCADwGxDwJByoG4oG6ULzUak7UC8iyE46dwPGm4poO2ydBzqAypEaojxd1-8wywCwFzUjwTK1cx67o6Key8y9DwUwb69xi1fxC2200zq400xn80cGU1mU1c9QaAo2kw2Wbwfa0W40NovwcW0Xo6m3u5U5y2-0P81SE08TVYw11402ri0Bmdg0IR0am0WUbVsM0lpw2gV603LJ07twmU1AfLAw4NwoVBw6Iw5zg2gw5ZycNoCm5pA0b5g3sw4Uw";
            jsBody = jsBody + "&__comet_req=15";
            jsBody = jsBody + "&fb_dtsg=" + token_dtsg;
            jsBody = jsBody + "&jazoest=25517";
            jsBody = jsBody + "&lsd=C6LPQeQFZkmH72PuLnMN34";
            jsBody = jsBody + "&__spin_r=1007703880";
            jsBody = jsBody + "&__spin_b=trunk";
            jsBody = jsBody + "&__spin_t=1687110160";
            jsBody = jsBody + "&fb_api_caller_class=RelayModern";
            jsBody = jsBody + "&fb_api_req_friendly_name=ProfileCometTopAppSectionQuery";
            jsBody = jsBody + "&variables=" + jsVar;
            jsBody = jsBody + "&server_timestamps=true";
            jsBody = jsBody + "&doc_id=6062743083795123";
            fetch("https://www.facebook.com/api/graphql/", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9,id;q=0.8",
                    "content-type": "application/x-www-form-urlencoded",
                    "sec-ch-prefers-color-scheme": "light",
                    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                    "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.199\", \"Google Chrome\";v=\"114.0.5735.199\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-ch-ua-platform-version": "\"10.0.0\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "viewport-width": "586",
                    "x-asbd-id": "129477",
                    "x-fb-friendly-name": "ProfileCometTopAppSectionQuery",
                    "x-fb-lsd": "BnccajPT53Pn5TGObpnPti"
                },
                "referrer": "https://www.facebook.com/profile.php?id=" + aku + "/me?sk=friends_recent",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": jsBody,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(async (r) => {
                try {
                    const d = await r.json();
                    var id_token = d.data.node.all_collections.nodes[0].id;
                    if (id_token) {
                        sessionStorage.id_tokenPren = id_token;
                        scrapPren();
                    }
                } catch (error) {
                    console.log(error);
                }
            });

            function scrapPren() {
                var jsVary = JSON.stringify({
                    "count": 8,
                    "cursor": sessionStorage.kursorPren,
                    "scale": 1,
                    "search": null,
                    "id": sessionStorage.id_tokenPren
                });
                var jsBody = "av=" + aku;
                jsBody = jsBody + "&__user=" + aku;
                jsBody = jsBody + "&__a=1";
                jsBody = jsBody + "&__req=w";
                jsBody = jsBody + "&__hs=19526.HYP:comet_pkg.2.1..2.1";
                jsBody = jsBody + "&dpr=1";
                jsBody = jsBody + "&__ccg=GOOD";
                jsBody = jsBody + "&__rev=1007703880";
                jsBody = jsBody + "&__s=mtx52b:0v7wpu:nmm01l";
                jsBody = jsBody + "&__hsi=7246082963950001289";
                jsBody = jsBody + "&__dyn=7AzHJ16UW5Eb8ng5K8G6EjBWobVo66u2i5U4e1Nxt3odEnz8K361twYwJyE24wJwpUe8hwaG0Z82_CxS320om78bbwto88422y11xmfz83WwgEcEhwGxu782lwv89kbxS2218wc61axe3S7Udo5qfK0zEkxe2GewyDwkUtxGm2SUbElxm3y3aexfxmu3W3y261eBx_y88E3qxWm2Sq2-azqwaW223908O3216xi4UdUcojxK2B0oobo8oC1hxB0qo";
                jsBody = jsBody + "&__csr=guMxaIbA6j9Ov8Jil6gGzAqux5QLsLsIpHblOvjOkTkNeLtKG8yLvGjvkCLZkGGmYSHyaWJrFrHtJeXFaV6Feqh2rL9G8iFAjWyWz9dDF4AmtbrXUSh7lDB-aU-cGpqmp6Dx2y4zuuvhZ5z4m9zEGiEDx6Wx2by8nxu5oGHG5EgzHK2a9yoKEgyEGiajV9eVayFkVEW78nx22Dx28US8KrAxumqiu2G6u2Sm9yEhyEry-fwFgvyoxaawgoS3eFohBz8a8SmdGi9CwFxe4Q7Uy2a2q2Cfxe3uU4O4otwqUW8y8Cu3y0IoC584-6o8802dEg025sw0OHw5rw4MDgGhw9i0bEK0YE3Eg35x-0PE3JwpodUnwm8bU3cw7qw0zvDO044g09J82loR02Pk0Fo3HwLBP01lC093Ao0e-Q0tS1rw6g--i0j61zCm0qO0md0920nS8P5ypolCg0Il0dO0jy";
                jsBody = jsBody + "&__comet_req=15";
                jsBody = jsBody + "&fb_dtsg=" + token_dtsg;
                jsBody = jsBody + "&jazoest=25517";
                jsBody = jsBody + "&lsd=C6LPQeQFZkmH72PuLnMN34";
                jsBody = jsBody + "&__spin_r=1007703880";
                jsBody = jsBody + "&__spin_b=trunk";
                jsBody = jsBody + "&__spin_t=1687110160";
                jsBody = jsBody + "&fb_api_caller_class=RelayModern";
                jsBody = jsBody + "&fb_api_req_friendly_name=ProfileCometAppCollectionListRendererPaginationQuery";
                jsBody = jsBody + "&variables=" + jsVary;
                jsBody = jsBody + "&server_timestamps=true";
                jsBody = jsBody + "&doc_id=6223597517677766";
                fetch("https://www.facebook.com/api/graphql/", {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en-US,en;q=0.9,id;q=0.8",
                        "content-type": "application/x-www-form-urlencoded",
                        "sec-ch-prefers-color-scheme": "light",
                        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                        "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.199\", \"Google Chrome\";v=\"114.0.5735.199\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-ch-ua-platform-version": "\"10.0.0\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "viewport-width": "586",
                        "x-asbd-id": "129477",
                        "x-fb-friendly-name": "ProfileCometAppCollectionListRendererPaginationQuery",
                        "x-fb-lsd": "BnccajPT53Pn5TGObpnPti"
                    },
                    "referrer": "https://www.facebook.com/profile.php?id=" + aku + "/me?sk=friends_recent",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": jsBody,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(async (r) => {
                    try {
                        const d = await r.json();
                        if (d.data.node.pageItems.page_info.has_next_page == false) {
                            console.log("wes");
                            document.getElementById('getpren').style = "background:pink;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap;float:right;";
                            document.getElementById('getpren').innerHTML = "Getpren..";
                        } else if (d.data.node.pageItems.page_info.has_next_page == true) {
                            sessionStorage.kursorPren = d.data.node.pageItems.page_info.end_cursor;
                            scrapPren();
                        }
                        for (let i = 0; i < d.data.node.pageItems.edges.length; i++) {
                            var pren = d.data.node.pageItems.edges[i].node.node.id;
                            document.getElementById('uid').value += pren + "\n";
                        }
                    } catch (error) {
                        console.log(error);
                    }
                });
            }
        },
        pm: function() {
            document.getElementById('pm').style = "background:grey;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
            document.getElementById('pm').innerHTML = "PM..";
            var Delays = document.getElementById('delay').value;
            var uids = document.getElementById('uid').value;
            var get_uid = uids.split("\n");
            var total_uid = uids.split("\n").length;
            var katae = document.getElementById('status');
            var hasil = document.getElementById('report');
            var sukses = document.getElementById('suksesPM');
            var gagal = document.getElementById('gagalPM');
            var runpm = 0;
            var sukses_pm = 0;
            var gagal_pm = 0;
            document.getElementById('totalpm').innerHTML = total_uid - 1;
            window.ngepm = setInterval(() => {
                if (runpm < total_uid) {
                    var uidsengdiadd = get_uid[runpm];
                    var mgs_id = parseInt(Math.random() * 1000000000000000000);
                    var jsBody = 'client=mercury&action_type=ma-type:user-generated-message&body=' + katae.value + '&ephemeral_ttl_mode=0&has_attachment=false&message_id=' + mgs_id + '&offline_threading_id=' + mgs_id + '&other_user_fbid=' + uidsengdiadd + '&source=source:titan:web&specific_to_list[0]=fbid:' + uidsengdiadd + '&specific_to_list[1]=fbid:' + uidsengdiadd + '&timestamp=1498965259122&to_list_md5=null&__user=' + aku + '&__a=1&__dyn=7AzHK4HwBgC265Q2m3mbG2KnFw9uu2i5U4e0yoW3q322aewXwnEbotwp8O2S1DwUx60xU1RVEtwMw65xOfw9q224obEvy8465o-cwfG12wOKdwGwFyE2ly85S5o9kbxSEtwi831wiEjwPyoox22K263ifK6E7e58jwGzEaE5e7oqBwJK2W5olwUwHwF-4VUfE2Fzqxq2K&__csr=&__req=l&__beoa=0&__pc=PHASED:DEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002880104&__s=il2bnp:g63xvg:thiss2&__hsi=6887413087422287113-0&__comet_req=0&cquick=jsc_c_bn&cquick_token=AQ5CW-fSf5914nshTuI&ctarget=https://web.facebook.com/&fb_dtsg=' + token_dtsg + '&jazoest=22079&__spin_r=1002880104&__spin_b=trunk&__spin_t=1603600822';
                    fetch("https://web.facebook.com/messaging/send/", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "en-US,en;q=0.9,id;q=0.8",
                            "content-type": "application/x-www-form-urlencoded",
                            "sec-ch-prefers-color-scheme": "light",
                            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                            "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.199\", \"Google Chrome\";v=\"114.0.5735.199\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "\"Windows\"",
                            "sec-ch-ua-platform-version": "\"10.0.0\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "viewport-width": "586",
                            "x-asbd-id": "129477",
                            "x-fb-friendly-name": "MessengerGroupCreateMutation",
                            "x-fb-lsd": "BnccajPT53Pn5TGObpnPti"
                        },
                        "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": jsBody,
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(async (r) => {
                        try {
                            const d = await r.text();
                            const e = JSON.parse(d.split("for (;;);")[1]);
                            console.log(e);
                            if (e.payload.payload_source) {
                                sukses_pm += 1;
                                sukses.innerHTML = sukses_pm;
                                hasil.value += get_uid[runpm] + " => " + e.payload.payload_source + "\n";
                                hasil.scrollTop = hasil.scrollHeight;
                            }
                            if (e.errorDescription) {
                                gagal_pm += 1;
                                gagal.innerHTML = gagal_pm;
                                hasil.value += get_uid[runpm] + " => " + e.errorDescription + "\n";
                                hasil.scrollTop = hasil.scrollHeight;
                            }
                            if (e.errorSummary) {
                                gagal_pm += 1;
                                gagal.innerHTML = gagal_pm;
                                hasil.value += get_uid[runpm] + " => " + e.errorSummary + "\n";
                                hasil.scrollTop = hasil.scrollHeight;
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    });
                    runpm++;
                } else {
                    clearInterval(window.ngepm);
                    document.getElementById('pm').style = "background:pink;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid white;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
                    hasil.value += "\n" + ">>>>> WES MARI PM !!" + "\n";
                    hasil.scrollTop = hasil.scrollHeight;
                }
            }, Delays * 1000);
        },
        pmGrup: () => {
            document.getElementById('pmGrup').style = "background:grey;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap";
            document.getElementById('pmGrup').innerHTML = "PM..";
            var hasil = document.getElementById('report');
            var delay = document.getElementById('delay').value;
            delay * 1000;
            var uid_gas = document.getElementById("uid").value.split("\n");
            var Member = document.getElementById("member").value;
            Member = parseInt(Member);
            var hitung_member = Member;
            var Grup = document.getElementById("grup").value;
            Grup = parseInt(Grup);
            const Ngab = Member;
            var Totalnya = uid_gas.length;
            var berapaXPerulangan = Totalnya / Ngab;
            var yoi = Math.ceil(berapaXPerulangan);
            console.log(yoi);
            var jazez = parseInt(Math.random() * 1000000000000000000);
            var progress = 0;
            for (let x = 0; x < Grup; x++) {
                setTimeout(() => {
                    var target_Uid = uid_gas.slice(progress, Member);
                    progress += hitung_member;
                    Member += hitung_member;
                    console.log(progress + " " + Member);
                    var go_uid = [];
                    for (y in target_Uid) {
                        go_uid.push({
                            fbid: target_Uid[y]
                        });
                    }
                    console.log(go_uid);
                    console.log(target_Uid);
                    var Jvars = JSON.stringify({
                        "input": {
                            "client_mutation_id": "1",
                            "actor_id": aku,
                            "participants": go_uid,
                            "thread_settings": {
                                "name": null,
                                "joinable_mode": "PRIVATE",
                                "thread_image_fbid": null
                            },
                            "entry_point": "chat_sidebar_new_group"
                        }
                    });
                    var params = "dpr=1&__a=1&__af=iw&__be=-1&__pc=PHASED:DEFAULT&__user=" + aku + "&__dyn=7AmajEzUGByA5Q9UoHaEWC5EWq2WiWF3oyeqrWo8popyUW3F6wAxu13wFG2K48jyR88wPGiex2uVWxeUW6UO4EK3ucDwPK6qCzEkxvDxicxnxm1tyoOm8yUgx66EK3Ou49L-6Z1im7U9eiax6ezUgByECcypFt0&__req=8&__rev=1033590&fb_dtsg=" + token_dtsg + "&jazoest=26581719899" + jazez + "&__spin_r=3078884&__spin_b=trunk&__spin_t=1497057008&doc_id=577041672419534&fb_api_req_friendly_name=MessengerGroupCreateMutation&av=" + aku + "&fb_api_caller_class=RelayModern&variables=" + Jvars;
                    fetch("https://www.facebook.com/api/graphql/", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "en-US,en;q=0.9,id;q=0.8",
                            "content-type": "application/x-www-form-urlencoded",
                            "sec-ch-prefers-color-scheme": "light",
                            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                            "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.199\", \"Google Chrome\";v=\"114.0.5735.199\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "\"Windows\"",
                            "sec-ch-ua-platform-version": "\"10.0.0\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "viewport-width": "586",
                            "x-asbd-id": "129477",
                            "x-fb-friendly-name": "MessengerGroupCreateMutation",
                            "x-fb-lsd": "BnccajPT53Pn5TGObpnPti"
                        },
                        "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": params,
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(async (x) => {
                        try {
                            const xx = await x.json();
                            console.log(xx);
                            if (xx.data.messenger_group_thread_create.thread.thread_key.thread_fbid) {
                                hasil.value += "Grup > " + xx.data.messenger_group_thread_create.thread.thread_key.thread_fbid + " sukses !" + "\n";
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    });
                }, delay * (x + 1));
            }
        },
        AddMemberGrup: () => {
            var delay = document.getElementById('delay').value;
            delay * 1000;
            var uid_gas = document.getElementById("uid").value.split("\n");
            var Member = document.getElementById("member").value;
            Member = parseInt(Member);
            var hitung_member = Member;
            var Grup = document.getElementById("grup").value;
            Grup = parseInt(Grup);
            const Ngab = Member;
            var Totalnya = uid_gas.length;
            var berapaXPerulangan = Totalnya / Ngab;
            var yoi = Math.ceil(berapaXPerulangan);
            console.log(yoi);
            var msgId = parseInt(Math.random() * 1000000000000000000);
            var OffThreadId = parseInt(Math.random() * 1000000000000000000);
            var progress = 0;
            for (let y = 0; y < yoi; y++) {
                setTimeout(() => {
                    var target_Uid = uid_gas.slice(progress, Member);
                    progress += hitung_member;
                    Member += hitung_member;
                    console.log(progress + " " + Member);
                    var gas_add = [];
                    for (b in target_Uid) {
                        var uid_gas_add_member = "&log_message_data[added_participants][";
                        uid_gas_add_member = uid_gas_add_member + b + "]=fbid:" + target_Uid[b] + "&";
                        gas_add.push(uid_gas_add_member);
                    }
                    console.log(gas_add);
                    fetch("https://www.facebook.com/api/graphqlbatch/", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "en-US,en;q=0.9,id;q=0.8",
                            "content-type": "application/x-www-form-urlencoded",
                            "sec-ch-prefers-color-scheme": "light",
                            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                            "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.199\", \"Google Chrome\";v=\"114.0.5735.199\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "\"Windows\"",
                            "sec-ch-ua-platform-version": "\"10.0.0\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "viewport-width": "586",
                            "x-asbd-id": "129477",
                            "x-fb-friendly-name": "MessengerGraphQLThreadlistFetcher",
                            "x-fb-lsd": ""
                        },
                        "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": "batch_name=MessengerGraphQLThreadlistFetcher&__user=" + aku + "&__a=1&__dyn=7AgNeS4amaAxd2u6aJGeFxqeCwKyWzEpF4Wo8oeES2N6wAxu13wFw_x-K9xK5WwIKaxeUW3KawUz8S2SUS4e2q6osz8nxm1ixi4E9ohwj8mwzwywWG3i1VDBg5u16Dx6WxS68nxK2C12wRyUvw9HxGfK79E6aEWu4EhwIXwABUjU8UlzUOmVojwAwAxG1ayUqwgF9poiCDKi8wGxm4UGqfwhUO68pwAwUzFEW5AbxS227Ua8y4EgwtouG2O2WE9EjwtUym2mfxW68lBwcO3y0yU&__csr=&__req=1a&__beoa=0&__pc=PHASED:DEFAULT&dpr=1&__rev=1001888632&__s=8ald82:b801kl:8sp6iu&__hsi=6807758439885375261-0&__comet_req=0&fb_dtsg=" + token_dtsg + "&jazoest=22175&__spin_r=1001888632&__spin_b=trunk&__spin_t=1585054716&queries=" + JSON.stringify({
                            "o0": {
                                "doc_id": "2865354216882557",
                                "query_params": {
                                    "limit": 12,
                                    "tags": ["INBOX"],
                                    "isWorkUser": false,
                                    "includeDeliveryReceipts": true,
                                    "includeSeqID": false,
                                    "is_work_teamwork_not_putting_muted_in_unreads": false
                                }
                            }
                        }),
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(async (x) => {
                        try {
                            const xx = await x.text();
                            var t_groups = xx.match(/"thread_fbid(.*?)(\d+)/g);
                            var e_grop = xx.match(/"updated_time_precise(.*?)(\d+)/g)[11];
                            var threads_grop = [];
                            for (a in t_groups) {
                                threads_grop.push(t_groups[a].split('"thread_fbid":"')[1]);
                            }
                            console.log(threads_grop);
                            var proses_m = 0;
                            if (proses_m < threads_grop.length) {
                                add_member(threads_grop[proses_m], gas_add, delay);
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    });
                }, delay * (y + 1));
            }

            function start(uidx = "", deley = null) {
                fetch("https://www.facebook.com/api/graphqlbatch/", {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en-US,en;q=0.9,id;q=0.8",
                        "content-type": "application/x-www-form-urlencoded",
                        "sec-ch-prefers-color-scheme": "light",
                        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                        "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.199\", \"Google Chrome\";v=\"114.0.5735.199\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-ch-ua-platform-version": "\"10.0.0\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "viewport-width": "586",
                        "x-asbd-id": "129477",
                        "x-fb-friendly-name": "MessengerGraphQLThreadlistFetcher",
                        "x-fb-lsd": ""
                    },
                    "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": "batch_name=MessengerGraphQLThreadlistFetcher&__user=" + aku + "&__a=1&__dyn=7AgNeS4amaAxd2u6aJGeFxqeCwKyWzEpF4Wo8oeES2N6wAxu13wFw_x-K9xK5WwIKaxeUW3KawUz8S2SUS4e2q6osz8nxm1ixi4E9ohwj8mwzwywWG3i1VDBg5u16Dx6WxS68nxK2C12wRyUvw9HxGfK79E6aEWu4EhwIXwABUjU8UlzUOmVojwAwAxG1ayUqwgF9poiCDKi8wGxm4UGqfwhUO68pwAwUzFEW5AbxS227Ua8y4EgwtouG2O2WE9EjwtUym2mfxW68lBwcO3y0yU&__csr=&__req=1a&__beoa=0&__pc=PHASED:DEFAULT&dpr=1&__rev=1001888632&__s=8ald82:b801kl:8sp6iu&__hsi=6807758439885375261-0&__comet_req=0&fb_dtsg=" + token_dtsg + "&jazoest=22175&__spin_r=1001888632&__spin_b=trunk&__spin_t=1585054716&queries=" + JSON.stringify({
                        "o0": {
                            "doc_id": "2865354216882557",
                            "query_params": {
                                "limit": 12,
                                "tags": ["INBOX"],
                                "isWorkUser": false,
                                "includeDeliveryReceipts": true,
                                "includeSeqID": false,
                                "is_work_teamwork_not_putting_muted_in_unreads": false
                            }
                        }
                    }),
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(async (x) => {
                    try {
                        const xx = await x.text();
                        var t_groups = xx.match(/"thread_fbid(.*?)(\d+)/g);
                        var e_grop = xx.match(/"updated_time_precise(.*?)(\d+)/g)[11];
                        var threads_grop = [];
                        for (a in t_groups) {
                            threads_grop.push(t_groups[a].split('"thread_fbid":"')[1]);
                        }
                        console.log(threads_grop);
                        if (threads_grop) {
                            for (let e = 0; e < threads_grop.length; e++) {
                                setTimeout(() => {
                                    add_member(threads_grop[e], uidx, deley);
                                }, 5000 * (e + 1));
                            }
                        }
                    } catch (error) {
                        console.log(error);
                    }
                });
                return true;
            }

            function scrap_fbids(endi = null) {
                var aku = document.cookie.match(/c_user=(\d+)/i)[1];
                fetch("https://www.facebook.com/api/graphqlbatch/", {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en-US,en;q=0.9,id;q=0.8",
                        "content-type": "application/x-www-form-urlencoded",
                        "sec-ch-prefers-color-scheme": "light",
                        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                        "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.199\", \"Google Chrome\";v=\"114.0.5735.199\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-ch-ua-platform-version": "\"10.0.0\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "viewport-width": "586",
                        "x-asbd-id": "129477",
                        "x-fb-friendly-name": "MessengerGraphQLThreadlistFetcher",
                        "x-fb-lsd": ""
                    },
                    "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": "batch_name=MessengerGraphQLThreadlistFetcher&__user=" + aku + "&__a=1&__dyn=7AgNeS4amaAxd2u6aJGeFxqeCwKyWzEpF4Wo8oeES2N6wAxu13wFw_x-K9xK5WwIKaxeUW3KawUz8S2SUS4e2q6osz8nxm1ixi4E9ohwj8mwzwywWG3i1VDBg5u16Dx6WxS68nxK2C12wRyUvw9HxGfK79E6aEWu4EhwIXwABUjU8UlzUOmVojwAwAxG1ayUqwgF9poiCDKi8wGxm4UGqfwhUO68pwAwUzFEW5AbxS227Ua8y4EgwtouG2O2WE9EjwtUym2mfxW68lBwcO3y0yU&__csr=&__req=1a&__beoa=0&__pc=PHASED:DEFAULT&dpr=1&__rev=1001888632&__s=8ald82:b801kl:8sp6iu&__hsi=6807758439885375261-0&__comet_req=0&fb_dtsg=" + token_dtsg + "&jazoest=22175&__spin_r=1001888632&__spin_b=trunk&__spin_t=1585054716&queries=" + JSON.stringify({
                        "o0": {
                            "doc_id": "2865354216882557",
                            "query_params": {
                                "limit": 12,
                                "before": endi,
                                "tags": ["INBOX"],
                                "isWorkUser": false,
                                "includeDeliveryReceipts": true,
                                "includeSeqID": false,
                                "is_work_teamwork_not_putting_muted_in_unreads": false
                            }
                        }
                    }),
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(async (x) => {
                    try {
                        const xx = await x.text();
                        var t_groups = xx.match(/"thread_fbid(.*?)(\d+)/g);
                        var e_grop = xx.match(/"updated_time_precise(.*?)(\d+)/g)[11];
                        var threads_grop = [];
                        for (a in t_groups) {
                            threads_grop.push(t_groups[a].split('"thread_fbid":"')[1]);
                        }
                        console.log(threads_grop);
                        if (threads_grop.length > 12) {
                            for (e in threads_grop) {
                                add_member(threads_grop[e], uid, delay);
                            }
                        } else {
                            scrap_fbids(e_grop);
                        }
                    } catch (error) {
                        console.log(error);
                    }
                });
                return true;
            }

            function add_member(threadx = "", uid = "", deley = null) {
                var aku = document.cookie.match(/c_user=(\d+)/i)[1];
                var pr = "client=mercury";
                pr = pr + "&action_type=ma-type:log-message";
                pr = pr + "&ephemeral_ttl_mode=0";
                pr = pr + "&has_attachment=false";
                pr = pr + "&message_id=" + msgId;
                pr = pr + "&offline_threading_id=" + OffThreadId;
                pr = pr + uid;
                pr = pr + "log_message_type=log:subscribe";
                pr = pr + "&thread_fbid=" + threadx;
                pr = pr + "&source=source:chat:web×tamp=1637809558000";
                pr = pr + "&__user=" + aku;
                pr = pr + "&fb_dtsg=" + token_dtsg;
                pr = pr + "&__a=1";
                pr = pr + "&__dyn=7AgNeS-aFoHG4Q9UoGSEWC5EWq2WbG2yAjFwxxebxGdwIhE98nwgUaqwYx-K9xK5WAwDKaxeUW3KawUz8S2SUS4fg8UpxOcxu5o5a58iyEqx61cxq2e1tG3i1VDCwlU4qu4rG7ooxu6Uao4a3mbx-0CEszXxOq1yGeDxa4obeUry9m4-2e5o-cBKm4U98fUlwQyUqwgF4im4equV8y2G5ojyFE-17z8ox28wAwUzFEW5AbxS227Ua8y4EgwtouG2O2WE9EjwtUym2mfxW68lBwkUjwp8e8e888co5G";
                pr = pr + "&__csr=";
                pr = pr + "&__req=1g";
                pr = pr + "&__beoa=0";
                pr = pr + "&__pc=PHASED:DEFAULT";
                pr = pr + "&dpr=1.5";
                pr = pr + "&__ccg=EXCELLENT";
                pr = pr + "&__rev=1002044637";
                pr = pr + "&__s=ki2w2w:t7rajj:yug43n";
                pr = pr + "&__hsi=6820006698047387738-0";
                pr = pr + "&__comet_req=0";
                pr = pr + "&jazoest=21968";
                pr = pr + "&__spin_r=1002044637";
                pr = pr + "&__spin_b=trunk";
                pr = pr + "&__spin_t=1587905089";
                setTimeout(() => {
                    fetch("https://www.facebook.com/messaging/send/", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "en-US,en;q=0.9,id;q=0.8",
                            "content-type": "application/x-www-form-urlencoded",
                            "sec-ch-prefers-color-scheme": "light",
                            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                            "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.199\", \"Google Chrome\";v=\"114.0.5735.199\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "\"Windows\"",
                            "sec-ch-ua-platform-version": "\"10.0.0\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "viewport-width": "586",
                            "x-asbd-id": "129477",
                            "x-fb-friendly-name": "",
                            "x-fb-lsd": ""
                        },
                        "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": pr,
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(async (x) => {
                        try {
                            const xx = await x.json();
                            console.log(xx);
                        } catch (error) {
                            console.log(error);
                        }
                    });
                }, deley);
                return true;
            }
        },
        settingInpo: () => {
            document.getElementById('settingInpo').style = "background:grey;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap;";
            document.getElementById('settingInpo').innerHTML = "Process..";
            var kota_opsi = document.getElementById("mileh_kota").value;
            var bioku = document.getElementById("status").value;
            var jsBody = "av=" + aku;
            jsBody = jsBody + "&__user=" + aku;
            jsBody = jsBody + "&__a=1";
            jsBody = jsBody + "&__req=1m";
            jsBody = jsBody + "&__hs=19528.HYP:comet_pkg.2.1..2.1";
            jsBody = jsBody + "&dpr=1";
            jsBody = jsBody + "&__ccg=EXCELLENT";
            jsBody = jsBody + "&__rev=1007710268";
            jsBody = jsBody + "&__s=5vqroc:vabf9f:71x9mm";
            jsBody = jsBody + "&__hsi=7246895806497725079";
            jsBody = jsBody + "&__dyn=7AzHJ16UW5Eb8ng5K8G6EjBWobVo66u2i5U4e2C17xt3odEnz8K361twYwJyE24wJwpUe8hwaG0Z82_CxS320om78bbwto88422y11xmfz83WwgEcEhwGxu782lwv89kbxS2218wc61axe3S7Udo5qfK0zEkxe2GewyDwkUtxGm2SUbElxm3y3aexfxmu3W3y261eBx_y88E3qxWm2CVEbUGdG1Fwh888cA0z8c84q58jwTwNxe6Uak1xwJwxyo566k1Fw";
            jsBody = jsBody + "&__csr=ghglh7IiBdsQYCgkPisIYj4vqPuKhHsjTWrb94t9emCHjit99DV7SjiiQWoGDArBJeiFZqKp9ALpK4qyrjCnFurp9upVuHmqXG4dlSicyAq9hGtaqm8yaACykKV-5GQeGayXgyrozxbggyXyHyobrQq4Em-lojG9z8ScVueHCJ2oyC5-2OESfxevzVoOQ5qxu4Ey2u-cxqcCDQi4Udui48S4EO4Elz8dXACx-cG9CwJV8ky9UbEhxC261bzElxK13g8u798lBU8onwJxK7WwSwp89oaU9oO4E02ffxe00x280bVE1AE3tw9eOU0Gy1-we-3q0rB1Ou17xm0yU1lu3y4K1gwpE2Lw0HDyH80ix00E-w92Jw3Z89Ea9-l0zw3cU7-hw69w0Sag0jdw156TBAAo0CS0LE6-2WGIBeaIwaoapE0U-16CwcG";
            jsBody = jsBody + "&__comet_req=15";
            jsBody = jsBody + "&fb_dtsg=" + token_dtsg;
            jsBody = jsBody + "&jazoest=25349";
            jsBody = jsBody + "&lsd=Vp6T13bEXXl8SlALWzINx_";
            jsBody = jsBody + "&__spin_r=1007710268";
            jsBody = jsBody + "&__spin_b=trunk";
            jsBody = jsBody + "&__spin_t=1687299415";
            jsBody = jsBody + "&fb_api_caller_class=RelayModern";
            jsBody = jsBody + "&fb_api_req_friendly_name=ProfileCometSetBioMutation";
            jsBody = jsBody + "&variables=" + JSON.stringify({
                "input": {
                    "attribution_id_v2": "ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,via_cold_start,1687299416496,471688,190055527696468,",
                    "bio": bioku,
                    "publish_bio_feed_story": false,
                    "actor_id": aku,
                    "client_mutation_id": "3"
                },
                "hasProfileTileViewID": true,
                "profileTileViewID": "cHJvZmlsZV90aWxlX3ZpZXc6MTAwMDkzNTY1MzcyMjgzOmludHJvOmludHJvX2JpbzppbnRyb19jYXJkX2Jpbzpwcm9maWxlX3RpbWVsaW5lOjE=",
                "scale": 1,
                "useDefaultActor": false
            });
            jsBody = jsBody + "&server_timestamps=true";
            jsBody = jsBody + "&doc_id=6123158884463798";
            fetch("https://www.facebook.com/api/graphql/", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/x-www-form-urlencoded",
                    "sec-ch-prefers-color-scheme": "light",
                    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Microsoft Edge\";v=\"114\"",
                    "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.201\", \"Microsoft Edge\";v=\"114.0.1823.79\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-ch-ua-platform-version": "\"10.0.0\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-asbd-id": "129477",
                    "x-fb-friendly-name": "ProfileCometSetBioMutation",
                    "x-fb-lsd": "WK_MbVszi0WH2acEQtgRIS"
                },
                "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": jsBody,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(async (x) => {
                try {
                    let a = await x.text();
                    console.log(a);
                    if (a.match("for (;;);{")) {
                        console.log("FB angkep :v");
                    } else {
                        console.log("oke");
                    }
                } catch (error) {
                    console.log(error);
                }
            });
            var pr = "route_urls[0]=" + encodeURIComponent("/profile.php?id=" + aku + "&sk=about_places");
            pr = pr + "&routing_namespace=fb_comet";
            pr = pr + "&__user=" + aku;
            pr = pr + "&__a=1";
            pr = pr + "&__req=1";
            pr = pr + "&__hs=19528.HYP:comet_pkg.2.1..2.1";
            pr = pr + "&dpr=1";
            pr = pr + "&__ccg=EXCELLENT";
            pr = pr + "&__rev=1007710268";
            pr = pr + "&__s=3dht2r:rmixf7:bo7vx3";
            pr = pr + "&__hsi=7246901430172129720";
            pr = pr + "&__dyn=7AzHJ16UW5Eb8ng5K8G6EjBWobVo66u2i5U4e2C17xt3odEnz8K361twYwJyE24wJwpUe8hwaG0Z82_CxS320om78bbwto88422y11xmfz81s8hwGxu782lwv89kbxS2218wc61uwZx-3m1mzXw8W58jwGzE8FU766FobrwKxm5oe8cEW4-5o4q3y261eBx_y88E3qxWm2CVEbUGdG1Fwh888cA0z8c86-3u364UrwFg662S269wr86C";
            pr = pr + "&__csr=hIQciilMx4phd8OkOd9RicPmJJTkQBPHOuijAvObbFqlih3ijy25jJQAWDB9pd9lAFDGDAUCQVVZq-uCiOCUhG9Fy-hu9jhutpuHm8XG4fh64oF6ykqjiCzEyuq9iXyoydHgWEGbAy9GgG4J13yryHyobrQlafxB5m4WxqdzFUWEOay-6ob8gzUjDU-mcJ1yax-8wDLG9x6icCyk68dui48S4E4a3uV89EOECq2TAxi8DwKx66o8o4KGy8lxK13g8u798lBU8onwJxK7WwSwp89oaUcE02fyxe00x280bVE1AE3tw9eOU0Gy1-we-3q0rB1Ou17xm0yU1lu3y4E5a1Cwa-02KuaIw1a402zW0AaS0fQwCwEDVk2e0cPwvV60oC03oF01cS04krumihw2ro2-wrUbGGOkUGO0FwFCw3zU4qq0OE";
            pr = pr + "&__comet_req=15";
            pr = pr + "&fb_dtsg=" + token_dtsg;
            pr = pr + "&jazoest=25295";
            pr = pr + "&lsd=jR85mKMmZiuk8XDabv7ICg";
            pr = pr + "&__spin_r=1007710268";
            pr = pr + "&__spin_b=trunk";
            pr = pr + "&__spin_t=1687300724";
            fetch("https://web.facebook.com/ajax/bulk-route-definitions/", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/x-www-form-urlencoded",
                    "sec-ch-prefers-color-scheme": "light",
                    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Microsoft Edge\";v=\"114\"",
                    "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.201\", \"Microsoft Edge\";v=\"114.0.1823.79\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-ch-ua-platform-version": "\"10.0.0\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-asbd-id": "129477",
                    "x-fb-friendly-name": "ProfileCometSetBioMutation",
                    "x-fb-lsd": "WK_MbVszi0WH2acEQtgRIS"
                },
                "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": pr,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(async (r) => {
                let d = await r.text();
                const e = JSON.parse(d.split("for (;;);")[1]);
                console.log(e);
                if (e) {
                    if (kota_opsi == "AU") {
                        var kota_list = ["110884905606108", "116190411724975", "102146663160831", "108252552529332", "115970731750761", "106224222749402", "104144449621362", "112133385471062"];
                    } else if (kota_opsi == "DE") {
                        var kota_list = ["112089218817486", "106661926035646", "107945412571299", "110526485641433", "110710585624249", "109952035700751", "112084802143084", "106039462768303", "114928278523318", "106493159387489", "110081962354501", "115221125158582", "106073139432990", "114466755232742", "110497988970354", "110863862274686", "106249829412960", "106063482767787", "114768665206881", "110474245642776", "110179422344981", "114739071872288", "101882733186088", "115855695092006", "106544749381682", "115273328486929", "110535155634925", "115079741840912", "110758342277781", "102173193157893", "110313098992271"];
                    } else if (kota_opsi == "US") {
                        var kota_list = ["110148382341970", "107991659233606", "106224666074625", "106566059380422", "114148045261892", "110419212320033", "114586701886732", "108450559178997", "112449675437281", "108260802527498", "107741359248842", "105578279475150", "106300959405546", "115650661782482", "112438218775062", "105988062765295", "112548152092705", "108127182549256", "110843418940484", "105638029469653", "110184922344060", "111762725508574", "109570449061083", "104146999622524", "108591349161413", "104006346303593", "103123839728353", "110444738976181", "108013345886344", "115590505119035", "106003956105810", "101881036520836", "110714572282163", "108303715857333", "114943251851302", "1416205875339580", "111948542155151", "112090445474804", "104081259629164", "105715936129053", "106220079409935", "105540216147364", "114952118516947", "108288992526695"];
                    } else if (kota_opsi == "FR") {
                        var kota_list = ["110078262346217", "102168626491136", "110164865670965", "108150429217683", "110275275667658", "111745475518772", "106263062746008", "102218393153696", "110522035635343", "114470468564233", "114881545191743", "115100621840245", "101896829852427", "111004955593643", "106284559408951", "109868529043019", "115424448472950", "106288792740854", "109370652426488", "112153532137074", "111948095498153", "106495012720392", "115433925136698", "106535786048600", "114697118542689", "108362562528029", "110586438968801"];
                    } else if (kota_opsi == "IT") {
                        var kota_list = ["111665038853258", "110340245656034", "106073859432101", "115247758487174", "108581069173026", "115247758487174", "107933505906257", "106439142725244", "115351801811432", "105782926129203", "111665038853258", "110340245656034"];
                    } else if (kota_opsi == "JP") {
                        var kota_list = ["106514006053250", "121336244603804", "160524820662482", "122171377852522", "102262733182321", "121570741247255", "160300197351040", "100563866688613", "126402090758237", "121336244603804", "114600441890814", "160300197351040", "175126159191854", "108663929165133", "112344735447930", "108027062558523", "159738940740201", "181947795159468", "108256259196005", "108206999203128", "114457658565799", "145640032156391", "180484311986580", "113057665375911", "112359252112966", "108182929214297", "103765749662897", "143791559012117", "103991766304729"];
                    } else if (kota_opsi == "TR") {
                        var kota_list = ["106012156106461", "106478736056198", "107968765903327", "114957048520360", "111806898837603", "110738488953456", "106171282753740", "116043768410018", "114946661855780", "101893426519501"];
                    } else if (kota_opsi == "NO") {
                        var kota_list = ["110429825645017", "113908368625565", "114686248548744", "110360172325286", "110207889000543", "110792528943128", "115539348459464", "115341461813501", "105840952789550", "110848678937314", "111988662160584", "115219175156017", "111729765511272", "111968698823087", "104972849538908", "104972849538908", "115508985129537", "106086986089992", "106429109393071", "108634395827243"];
                    } else if (kota_opsi == "CH") {
                        var kota_list = ["102160693158562", "110868505604715", "108671032497097", "115581378455439", "115456095134627", "106534719384213", "108435399187974", "115030348510185", "108135292553098", "114513118565117", "115581378455439", "116067508403328", "103885232983242", "110727492281760", "114789725205173", "106469126055410", "114981561847979", "108160635884811", "108160635884811", "103397809692460", "115768388433690", "108239849210749", "110378825658184"];
                    } else if (kota_opsi == "TJ") {
                        var kota_list = ["108145622549405", "106048172767116", "113767518633552", "106033062768799", "107894392572609", "106024759428525", "104064299630464", "108191392535978", "113068948708082", "107735132589470"];
                    } else if (kota_opsi == "NZ") {
                        var kota_list = ["112050375487705", "106297619405550", "114912541853133", "109423102416464", "184549531592003", "112665938759219", "106237116081095", "103111063061875", "114779681872881", "111968095486272", "101883149853721", "107777475911489", "109392945746858", "108038255895343", "102016633168755", "115115021833501", "115426435137335", "108900842471370", "110650578949980", "115255421820866"];
                    } else if (kota_opsi == "IE") {
                        var kota_list = ["110769888951990", "108228399212088", "110188509010392", "112027925490588", "106074292766118", "110098579019753", "111490392208660", "115725088437789", "112264738799422", "114852715198382", "108781962476075", "110418832317385", "107459705957724", "106181072746919", "107890282572293", "112543692090343", "109095619110754", "107299519300257", "112363922108196"];
                    } else if (kota_opsi == "NL") {
                        var kota_list = ["111777152182368", "109506742412900", "106024019437151", "115106888501966", "114501048567266", "114690771875816", "108276092536515", "110438868976431", "111247065566297", "102180889824217", "169137873096468", "107669712589778", "108505662508026", "113298878683249", "114501048567266", "112469762098951", "111247065566297", "104924326211355", "106032642762176", "108252292536163", "112516278760403", "108181205880966", "103986579636486", "109441902408943", "109112545774013"];
                    } else if (kota_opsi == "CA") {
                        var kota_list = ["105595416139739", "109692899057899", "106022736104146", "103754659663478", "102667493125203", "107988209229464", "113321348682689", "108647739165916", "109655605726567", "112746445406043", "108199205868986", "113200572024068", "112102308802127", "110584048962146", "104005536301673", "106447066058672", "108319435862871", "108145369212869", "115006338514442", "108346472526227", "108713005820544", "105912046109421"];
                    } else if (kota_opsi == "IS") {
                        var kota_list = ["110398488982884", "108227819209124", "106233239408307", "112458355446289", "106478716055119", "109053519122788", "113053468708790", "104354359604207", "113514465326640", "106532152713926", "106383072726761", "108095289217783", "104067956296028", "109220622429209", "108176182544050"];
                    } else if (kota_opsi == "EE") {
                        var kota_list = ["106039436102339", "109468362412593", "106561152712690", "107067555990940", "114433055239840", "107792565909890", "107818725908179", "112012962148836", "108680275822153", "103790446326820"];
                    }
                    var rand_kota = Math.floor(Math.random() * kota_list.length);
                    var town_ = Math.floor(Math.random() * kota_list.length);
                    var kota_ku = kota_list[rand_kota];
                    var my_town = kota_list[town_];
                    var col_token = btoa("app_collection:" + aku + ":2327158227:201");
                    var sec_token = btoa("app_section:" + aku + ":2327158227");
                    setTimeout(() => {
                        setting_kota_sekarang(col_token, kota_ku, sec_token);
                    }, 1000);
                    setTimeout(() => {
                        setting_kota_asal(col_token, my_town, sec_token);
                    }, 2000);
                }
            });

            function setting_kota_sekarang(col_token = "", kota_ku = "", sec_token = "") {
                var jsBody = "av=" + aku;
                jsBody = jsBody + "&__user=" + aku;
                jsBody = jsBody + "&__a=1";
                jsBody = jsBody + "&__req=1b";
                jsBody = jsBody + "&__hs=19528.HYP:comet_pkg.2.1..2.1";
                jsBody = jsBody + "&dpr=1";
                jsBody = jsBody + "&__ccg=GOOD";
                jsBody = jsBody + "&__rev=1007710268";
                jsBody = jsBody + "&__s=m90oht:rmixf7:3xdcvq";
                jsBody = jsBody + "&__hsi=7246900448908587779";
                jsBody = jsBody + "&__dyn=7AzHJ16UW5Eb8ng5K8G6EjBWobVo66u2i5U4e2C17xt3odEnz8K361twYwJyE24wJwpUe8hwaG0Z82_CxS320om78bbwto88422y11xmfz83WwgEcEhwGxu782lwv89kbxS2218wc61axe3S7Udo5qfK0zEkxe2GewyDwkUtxGm2SUbElxm3y3aexfxmu3W3y261eBx_y88E3qxWm2CVEbUGdG1Fwh888cA0z8c84q58jwTwNxe6Uak1xwJwxyo566k1Fw";
                jsBody = jsBody + "&__csr=g9IhX4TdsQYDlh2d9OTsj4sGPuKhHsjOWmyOhl9emyrjit99VugJAQBleCuGuhyrjAF6RHVACiOCUhG9FAC-BVJJ5VDBWJpLKFUzbSicyAq9hGtaqm8y9VEBbKvxqJ3GyEKQ8CF2EiQ4e9Kmha9wJLhkE-5lplxeECczoPBUWKqQ9KiK5-7UOESfxevzVoOQ5qyEO4Ey2u-EC4p8Oqvh8jwRV8gzoiz8ixmcwTKiq7UOECq2TAxi8DwKx66o8o4KEK5orwgQ27xOi5pu265Uborx-EdE6i2m2K2mcxa00zPUjw08gy02-q0pa0To2jIK0aEwvE3LwSw6VgsDwhUlw8K0lnwUxbwk86q0HU0aVUGO04Eg0afE2gHo0_i2q2yvBg8U0Pe1_Ao1yo0dyA04Po0hhJVp9609JwbW1LwKGH9jyH82C2Cq0efwhFE3aw";
                jsBody = jsBody + "&__comet_req=15";
                jsBody = jsBody + "&fb_dtsg=" + token_dtsg;
                jsBody = jsBody + "&jazoest=25238";
                jsBody = jsBody + "&lsd=MeD4BrSEyju7FQSGzIzyKQ";
                jsBody = jsBody + "&__spin_r=1007710268";
                jsBody = jsBody + "&__spin_b=trunk";
                jsBody = jsBody + "&__spin_t=1687300496";
                jsBody = jsBody + "&fb_api_caller_class=RelayModern";
                jsBody = jsBody + "&fb_api_req_friendly_name=ProfileCometCurrentCityProfileFieldSaveMutation";
                jsBody = jsBody + "&variables=" + JSON.stringify({
                    "collectionToken": col_token,
                    "input": {
                        "current_city_id": kota_ku,
                        "privacy": {
                            "allow": [],
                            "base_state": "EVERYONE",
                            "deny": [],
                            "tag_expansion_state": "UNSPECIFIED"
                        },
                        "actor_id": aku,
                        "client_mutation_id": "2"
                    },
                    "scale": 1,
                    "sectionToken": sec_token,
                    "useDefaultActor": false
                });
                jsBody = jsBody + "&server_timestamps=true";
                jsBody = jsBody + "&doc_id=6469992053095693";
                fetch("https://web.facebook.com/api/graphql/", {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en-US,en;q=0.9",
                        "content-type": "application/x-www-form-urlencoded",
                        "sec-ch-prefers-color-scheme": "light",
                        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Microsoft Edge\";v=\"114\"",
                        "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.201\", \"Microsoft Edge\";v=\"114.0.1823.79\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-ch-ua-platform-version": "\"10.0.0\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "x-asbd-id": "129477",
                        "x-fb-friendly-name": "ProfileCometCurrentCityProfileFieldSaveMutation",
                        "x-fb-lsd": "WK_MbVszi0WH2acEQtgRIS"
                    },
                    "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": jsBody,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(async (r) => {
                    let d = await r.json();
                    console.log(d)
                });
            }

            function setting_kota_asal(col_token = "", my_town = "", sec_token = "") {
                var jsBody = "av=" + aku;
                jsBody = jsBody + "&__user=" + aku;
                jsBody = jsBody + "&__a=1";
                jsBody = jsBody + "&__req=1h";
                jsBody = jsBody + "&__hs=19528.HYP:comet_pkg.2.1..2.1";
                jsBody = jsBody + "&dpr=1";
                jsBody = jsBody + "&__ccg=EXCELLENT";
                jsBody = jsBody + "&__rev=1007710268";
                jsBody = jsBody + "&__s=79c0j6:m1nru1:83nmcf";
                jsBody = jsBody + "&__hsi=7246911319933780320";
                jsBody = jsBody + "&__dyn=7AzHJ16UW5Eb8ng5K8G6EjBWobVo66u2i5U4e2C17xt3odEnz8K361twYwJyE24wJwpUe8hwaG0Z82_CxS320om78bbwto88422y11xmfz83WwgEcEhwGxu782lwv89kbxS2218wc61axe3S7Udo5qfK0zEkxe2GewyDwkUtxGm2SUbElxm3y3aexfxmu3W3y261eBx_y88E3qxWm2CVEbUGdG1Fwh888cA0z8c84q58jwTwNxe6Uak1xwJwxyo566k1Fw";
                jsBody = jsBody + "&__csr=g9IhX4TdsQYDlh2d9OTsj4jHdWWSJNfbFsQAlijBECQQDiiunAbpd9ljlDGDA88JeiArmLCipbarx6EBmirWnCSQnCunGRC-WDycLp8OVAq9hGtaqm8y9VEBbKvy8SJ3GyEKQ8CF2EiQ4e9KmJa9wJLhkE-5lplxeECczoPBUWKqQ9KiK5-7UOESfxevzVoOQ5qyEO4Ey2u-EC4p8Oqvh8jwRV8gzoiwRz8dXAwCzaypEbui58yu2W4opwxwiVoy5orwgQ27xOi5pu265Uborx-EdE6i2m2K2mcxa00zPUjw08gy02-q0pa0To2jIK0aEwvE3LwSw6VgsDwhUlw8K0lnwUxbwk86q0HU0aVUGO04Eg0afE2gHo0_i2q2yvBg8U0Pe1_Ao1yo0dyA04Po0hhJVp9609JwbW1LwKGH9jyH82C2Cq0efwhFE3aw";
                jsBody = jsBody + "&__comet_req=15";
                jsBody = jsBody + "&fb_dtsg=" + token_dtsg;
                jsBody = jsBody + "&jazoest=25132";
                jsBody = jsBody + "&lsd=Zf8sjcp1MulGh6qIoX_Pv2";
                jsBody = jsBody + "&__spin_r=1007710268";
                jsBody = jsBody + "&__spin_b=trunk";
                jsBody = jsBody + "&__spin_t=1687303027";
                jsBody = jsBody + "&fb_api_caller_class=RelayModern";
                jsBody = jsBody + "&fb_api_req_friendly_name=ProfileCometHometownProfileFieldSaveMutation";
                jsBody = jsBody + "&variables=" + JSON.stringify({
                    "collectionToken": col_token,
                    "input": {
                        "hometown_city_id": my_town,
                        "privacy": {
                            "allow": [],
                            "base_state": "EVERYONE",
                            "deny": [],
                            "tag_expansion_state": "UNSPECIFIED"
                        },
                        "actor_id": aku,
                        "client_mutation_id": "1"
                    },
                    "scale": 1,
                    "sectionToken": sec_token,
                    "useDefaultActor": false
                });
                jsBody = jsBody + "&server_timestamps=true";
                jsBody = jsBody + "&doc_id=6434674599925799";
                fetch("https://web.facebook.com/api/graphql/", {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en-US,en;q=0.9",
                        "content-type": "application/x-www-form-urlencoded",
                        "sec-ch-prefers-color-scheme": "light",
                        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Microsoft Edge\";v=\"114\"",
                        "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.201\", \"Microsoft Edge\";v=\"114.0.1823.79\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-ch-ua-platform-version": "\"10.0.0\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "x-asbd-id": "129477",
                        "x-fb-friendly-name": "ProfileCometHometownProfileFieldSaveMutation",
                        "x-fb-lsd": "WK_MbVszi0WH2acEQtgRIS"
                    },
                    "referrer": "https://www.facebook.com/profile.php?id=" + aku,
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": jsBody,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(async (r) => {
                    let d = await r.json();
                    console.log(d);
                    if (d) {
                        document.getElementById('settingInpo').style = "background:green;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap;";
                        document.getElementById('settingInpo').innerHTML = "Done..!";
                        setTimeout(() => {
                            document.getElementById('settingInpo').style = "background:pink;color:#FFF;padding:5px 10px;margin-left:0px;border:1px solid #ced0d4;cursor:pointer;display:inline-block;font-size:12px;border-radius:2px;-webkit-font-smoothing:antialiased;font-weight:bold;line-height:18px;text-align:center;text-decoration:none;text-shadow:none;vertical-align:top;white-space:nowrap;";
                            document.getElementById('settingInpo').innerHTML = "Set inpo + bio!";
                        }, 1000);
                    }
                });
            }
        },
        tutup: function() {
            var formku = document.getElementById('informasi');
            formku.parentNode.removeChild(formku)
        },
    };
})());
}
