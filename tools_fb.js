if(window.location.hostname.includes('facebook') === true) {
    void(function() {
        var dc = document;
    	var uid = dc.cookie.match(/c_user=([^;]+)/)[1];
    	var __dyn = '1KQEGiFo525Ujwh8-t0BBBgS5UqxKcwRwAxu3-UcodUbEdEc8uK1lwZxm6Uhwywr83ex65of82iwxw46wk9EdEnw65xO0FE6S1QzU1lo9UhwGwHw4rwk888C0NE2oCwSwaOfwbK1Aw9-2i1qw8W1uwa-7U881soGdw46wbS1bwzwqobU2cwcq';
    	var fb_dtsg = '';

		if(dc.getElementsByName('fb_dtsg')[0]) {
			fb_dtsg = dc.getElementsByName('fb_dtsg')[0].value;
		} else {
			fb_dtsg = require('MRequestConfig').dtsg_ag.token;
		}

		var req_fb_modern = 'av='+uid+'&__user='+uid+'&__a=1&__dyn='+__dyn+'&__csr=&__req=18&__hs=19256.HYP:comet_pkg.2.1.0.2.1&dpr=1&__ccg=GOOD&__rev=1006241491&__s=1eduvv:skfqw6:whdm8u&__hsi=7145838710706918188&__comet_req=15&fb_dtsg='+fb_dtsg+'&jazoest=25170&lsd=FMdPuiwKN9krscRlpoXSev&__spin_r=1006241491&__spin_b=trunk&__spin_t=1663770226&fb_api_caller_class=RelayModern';

    	var tmp = [];

        var dv = dc.createElement('div');
        dv.id = 'ngonoo';
        dv.style = 'padding: 10px; border-radius: 2px; width: 500px; position: fixed; z-index: 9999; top: 10%; right: 10%; font-size: 12px; font-weight: 600; box-shadow: rgb(0, 0, 0) 0px 0px 5px; background-color: rgba(63, 191, 191, 0.8);';
        dv.innerHTML += '<div style="text-align:center;border-radius:2px;padding:3px;background-color:white;font-weight:bold;">Tools Facebook BY KATALIS - Mobile</div>';
        dv.innerHTML += '<div id="div_btn" style="width:30%;float:left;margin-top:3px;padding:3px;background-color:white;">btn</div>';
    	dv.innerHTML += '<div id="div_html" style="width:67%;float:left;margin-top:3px;margin-left:3px;padding:3px;background-color:white;"></div>';
        dc.body.appendChild(dv);

    	var h_btn = '<span><button name="btn_panel" id="btn_panel_adduid" style="width:150px;margin-bottom:3px;text-align:center;border:0px;border-radius:2px;padding:3px;background-color:rgb(88, 214, 141);"><b>Add UID</b></button></span>';
    		h_btn += '<span><button name="btn_panel" id="btn_panel_findfren" style="width:150px;margin-bottom:3px;text-align:center;border:0px;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);"><b>Find Friends</b></button></span>';
			h_btn += '<span><button name="btn_panel" id="btn_panel_confirm" style="width:150px;margin-bottom:3px;text-align:center;border:0px;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);"><b>Confirm Friends</b></button></span>';
    		h_btn += '<span><button name="btn_panel" id="btn_panel_messages" style="width:150px;margin-bottom:3px;text-align:center;border:0px;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);"><b>Messages</b></button></span>';
    		h_btn += '<span><button id="btn_panel_klos" style="width:150px;text-align:center;border:0px;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);"><b style="color:red;">Close</b></div></a>';

    	var h_adduid = '<div id="i_add" style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-bottom:3px;">Add UID</div>';
    		h_adduid += '<textarea id="inp" placeholder="Input UID" style="width:327px;height:150px;font-size:12px;resize:none;"></textarea>';
    		h_adduid += 'Delay : <input type="number" id="delay" value="1" style="width:60px;height:12px;font-size:10px;border-radius:2px;border:1px solid rgb(189,199,216);padding:3px;text-align:center">';
    		h_adduid += '<font style="margin-left:8px;">Confirm: <input type="checkbox" id="cek" checked="" style="vertical-align:middle;width:15px;height:15px;cursor:pointer"></font>';
    		h_adduid += '<button id="adduid" type="button" style="float:right;text-align:center;border:0px;border-radius:2px;padding:3px 10px;background-color:rgb(240, 240, 240);"><b>Go ADD</b></button>';
    		h_adduid += '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;"><button style="width:50%;background-color:rgb(240, 240, 240);border:none;border-radius:2px;text-decoration:none;"><font id="proses">0</font> / <font id="total">0</font></button><button style="width:50%;background-color:rgb(240, 240, 240);border:none;border-radius:2px;text-decoration:none;"><font id="sukses" style="color:green;">0</font><span style="margin-left:10px;"><font id="gagal" style="color:red;">0</font></span></button></div>';
    		h_adduid += '<textarea id="out" readonly style="width:327px;margin-top:3px;height:150px;font-size:12px;resize:none;"></textarea>';

    	var h_confirm = '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-bottom:3px;">Confirm Friends</div>';
    		h_confirm += 'Delay : <input type="number" id="delay" value="0" style="width:40px;height:12px;font-size:10px;border-radius:2px;border:1px solid rgb(189,199,216);padding:3px;text-align:center">';
    		h_confirm += '<button id="confirm" type="button" style="float:right;text-align:center;border:0px;border-radius:2px;padding:3px 10px;background-color:rgb(240, 240, 240);"><b>Confirm</b></button>';
    		h_confirm += '<button id="reject" type="button" style="float:right;margin-right:3px;text-align:center;border:0px;border-radius:2px;padding:3px 10px;background-color:rgb(240, 240, 240);"><b>Reject</b></button>';
    		h_confirm += '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;"><button style="width:50%;background-color:rgb(240, 240, 240);border:none;border-radius:2px;text-decoration:none;">Proccess : <font id="proses">0</font> / <font id="total">0</font></button><button style="width:50%;background-color:rgb(240, 240, 240);border:none;border-radius:2px;text-decoration:none;">Success : <font id="sukses" style="color:green;">0</font><span style="margin-left:10px;">Failed : <font id="gagal" style="color:red;">0</font></span></button></div>';

    	var h_c_messages = '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-bottom:3px;">Messages</div>';
    		h_c_messages += '<button id="create" style="text-align:center;border:0px;border-radius:2px;padding:3px 10px;background-color:rgb(88, 214, 141);"><b>Create</b></button>';
    		h_c_messages += '<button id="repeat" style="margin-left:3px;text-align:center;border:0px;border-radius:2px;padding:3px 10px;background-color:rgb(240, 240, 240);"><b>Repeat</b></button>';
    		h_c_messages += '<button id="getfriends" style="float:right;text-align:center;border:0px;border-radius:2px;padding:3px 10px;background-color:rgb(240, 240, 240);"><b>Get Friends</b></button>';
    		h_c_messages += '<textarea id="inp" placeholder="Input UID" style="width:327px;margin-top:3px;height:150px;font-size:12px;resize:none;"></textarea>';
    		h_c_messages += '<textarea id="inp_text" placeholder="Input Text" style="width:327px;height:80px;font-size:12px;resize:none;"></textarea>';
    		h_c_messages += 'Delay : <input type="number" id="delay" value="0" style="width:40px;height:12px;font-size:10px;border-radius:2px;border:1px solid rgb(189,199,216);padding:3px;text-align:center">';
    		h_c_messages += '<font style="margin-left:5px;">Items : </font><input type="number" id="items" value="1" style="width:40px;height:12px;font-size:10px;border-radius:2px;border:1px solid rgb(189,199,216);padding:3px;;text-align:center">';
    		h_c_messages += '<button id="gomssg" type="button" style="float:right;text-align:center;border:0px;border-radius:2px;padding:3px 10px;background-color:rgb(240, 240, 240);"><b>Go Messages</b></button>';
    		h_c_messages += '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;"><button style="width:50%;background-color:rgb(240, 240, 240);border:none;border-radius:2px;text-decoration:none;"><font id="proses">0</font> / <font id="total">0</font></button><button style="width:50%;background-color:rgb(240, 240, 240);border:none;border-radius:2px;text-decoration:none;"><font id="sukses" style="color:green;">0</font><span style="margin-left:10px;"><font id="gagal" style="color:red;">0</font></span></button></div>';

    	var h_r_messages = '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-bottom:3px;">Messages</div>';
    		h_r_messages += '<button id="create" style="text-align:center;border:0px;border-radius:2px;padding:3px 10px;background-color:rgb(240, 240, 240);"><b>Create</b></button>';
    		h_r_messages += '<button id="repeat" style="margin-left:3px;text-align:center;border:0px;border-radius:2px;padding:3px 10px;background-color:rgb(88, 214, 141);"><b>Repeat</b></button>';
    		h_r_messages += '<textarea id="inp_text" placeholder="Input Text" style="width:327px;margin-top:3px;height:150px;font-size:12px;resize:none;"></textarea>';
    		h_r_messages += 'Delay : <input type="number" id="delay" value="0" style="width:40px;height:12px;font-size:10px;border-radius:2px;border:1px solid rgb(189,199,216);padding:3px;text-align:center">';
    		h_r_messages += '<button id="gomssg" type="button" style="float:right;text-align:center;border:0px;border-radius:2px;padding:3px 10px;background-color:rgb(240, 240, 240);"><b>Go Messages</b></button>';
    		h_r_messages += '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;"><button style="width:50%;background-color:rgb(240, 240, 240);border:none;border-radius:2px;text-decoration:none;"><font id="proses">0</font> / <font id="total">0</font></button><button style="width:50%;background-color:rgb(240, 240, 240);border:none;border-radius:2px;text-decoration:none;"><font id="sukses" style="color:green;">0</font><span style="margin-left:10px;"><font id="gagal" style="color:red;">0</font></span></button></div>';

    	dc.getElementById('div_btn').innerHTML = h_btn;
    	dc.getElementById('div_html').innerHTML = h_adduid;

		dc.getElementById('btn_panel_adduid').addEventListener('click', function() {dan.btn_panel('btn_panel_adduid')});
		dc.getElementById('btn_panel_findfren').addEventListener('click', function() {dan.btn_panel('btn_panel_findfren')});
		dc.getElementById('btn_panel_confirm').addEventListener('click', function() {dan.btn_panel('btn_panel_confirm')});
		dc.getElementById('btn_panel_messages').addEventListener('click', function() {dan.btn_panel('btn_panel_messages')});
		dc.getElementById('btn_panel_klos').addEventListener('click', function() {dan.klos()});

		dc.getElementById('adduid').addEventListener('click', function() {dan.adduid()});

    	window.dan = {
    		btn_panel: function(x) {
    			tmp = [];

    			var btn_name = dc.getElementsByName('btn_panel');
    			for(var i = 0; i < btn_name.length; i++) {
    				if(btn_name[i].getAttribute('id') === x) {
    					dc.getElementsByName('btn_panel')[i].setAttribute('style', 'width:150px;margin-bottom:3px;text-align:center;border:0px;border-radius:2px;padding:3px;background-color:rgb(88, 214, 141);');
    				} else {
    					dc.getElementsByName('btn_panel')[i].setAttribute('style', 'width:150px;margin-bottom:3px;text-align:center;border:0px;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);');
    				}
    			}

    			dc.getElementById('div_html').innerHTML = '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);">Please Wait...</div>';

    			if(x === 'btn_panel_adduid') {
    				dc.getElementById('div_html').innerHTML = h_adduid;
					dc.getElementById('adduid').addEventListener('click', function() {dan.adduid()});
    			} else if(x === 'btn_panel_findfren') {
    				dan.findfren(null);
    			} else if(x === 'btn_panel_confirm') {
					dan.confirm('scrape', null);
				} else if(x === 'btn_panel_messages') {
    				dc.getElementById('div_html').innerHTML = h_c_messages;
					dc.getElementById('create').addEventListener('click', function() {dan.btn_panel('btn_panel_messages')});
					dc.getElementById('repeat').addEventListener('click', function() {dan.btn_messages('repeat')});
					dc.getElementById('getfriends').addEventListener('click', function() {dan.btn_messages('getfriends')});
					dc.getElementById('gomssg').addEventListener('click', function() {dan.gomssg('create')});
    			}

    			dan.clearinter();
    		},
    		adduid: function() {
				var i = 0, sukses = 0, gagal = 0;

    			dan.rp_blank('inp');
				var incek = dc.getElementById('inp').value;
    			var inp = dc.getElementById('inp').value.split('\n');
    			var delay = dc.getElementById('delay').value;
    			if(dc.getElementById('cek').checked) {
    				var cek = '&confirmed=1';
    			} else {
    				var cek = '';
    			}

    			if(incek === '') {alert('Form Required...')} else {
    				dc.getElementById('adduid').setAttribute('disabled', ''); dc.getElementById('adduid').innerHTML = '<b>Running</b>';
    				var Interval = setInterval(function() {
    					if(i < inp.length) {
    						var req_add = 'id='+inp[i]+'&hf=timeline_friends_pagelet&pl=null&fref=&floc=friends_tab&enc=&fb_dtsg='+fb_dtsg+'&jazoest=25164&lsd=&__dyn='+__dyn+'&__csr=&__req=o&__a=&__user='+uid+cek;
    						dan.req_json('POST', '/a/friends/add/', req_add, inp[i], function(q, r) {
								if(q && q.payload && q.payload.actions && q.payload.actions.length < 2) {
    								sukses++;
    								dc.getElementById('sukses').innerHTML = sukses;
    								dc.getElementById('out').value += '\n' + r + ' - Success';
								} else {
    								gagal++;
    								dc.getElementById('gagal').innerHTML = gagal;
    								dc.getElementById('out').value += '\n' + r + ' - Failed';
								}
    							dan.rp_blank('out');
    							var textArea = dc.getElementById('out');
    							textArea.scrollTop = textArea.scrollHeight;
    						});
    						i++;
    						dc.getElementById('proses').innerHTML = i;
    						dc.getElementById('total').innerHTML = inp.length;
    					} else {
    						dan.done('adduid');
    					}
    				}, delay * 1000);
    			}
    		},
    		findfren: function(cursor) {
				dan.req_json('POST', '/api/graphql/', 'av='+uid+'&__user='+uid+'&__a=1&__req=1v&dpr=1&__ccg=EXCELLENT&__dyn=&__csr=&__comet_req=15&fb_dtsg='+fb_dtsg+'&jazoest=25333&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometPYMKPanelPaginationQuery&variables={"count":30,"cursor":"'+cursor+'","location":"FRIENDS_CENTER","scale":1}&server_timestamps=true&doc_id=3364519643627555', '', function(q, r) {
					if(q && q.data && q.data.viewer && q.data.viewer.people_you_may_know && q.data.viewer.people_you_may_know.edges) {
						var a = q.data.viewer.people_you_may_know.edges;
    					for(b in a) {
    						tmp.push(a[b].node.id);
    					}

						dc.getElementById('div_html').innerHTML = '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);">Please Wait... ['+tmp.length+']</div>';

						if(q.data.viewer.people_you_may_know.page_info.has_next_page === true) {
							dan.findfren(q.data.viewer.people_you_may_know.page_info.end_cursor);
						} else {
							dc.getElementById('div_html').innerHTML = h_adduid;
							dc.getElementById('i_add').innerHTML = 'Find Friends';
							dc.getElementById('total').innerHTML = tmp.length;

							dc.getElementById('adduid').addEventListener('click', function() {dan.adduid()});

    						for(var i = 0; i < tmp.length; i++) {
    							if(i == 0) {
    								dc.getElementById('inp').value += tmp[i];
    							} else {
    								dc.getElementById('inp').value += '\n' + tmp[i];
    							}
    						}
						}
					} else {
						dc.getElementById('div_html').innerHTML = '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);color:red;">Failed</div>';
					}
				});
    		},
    		confirm: function(action, cursor) {
    			var i = 0, sukses = 0, gagal = 0;
    			if(action == 'scrape') {
    				var req_scrape = req_fb_modern + '&fb_api_req_friendly_name=FriendingCometFriendRequestsSectionPanelPaginationQuery&variables={"count":250,"cursor":'+cursor+',"scale":1}&server_timestamps=true&doc_id=4843321999100134';
    				dan.req_json('POST', '/api/graphql/', req_scrape, '', function(q, r) {
    					if(q && q.data && q.data.viewer && q.data.viewer.friending_possibilities && q.data.viewer.friending_possibilities.edges) {
    						var a = q.data.viewer.friending_possibilities.edges;
    						for(b in a) {
    							tmp.push(a[b].node.id);
    						}

    						dc.getElementById('div_html').innerHTML = '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);">Please Wait... ['+tmp.length+']</div>';

    						if(q.data.viewer.friending_possibilities.page_info.has_next_page == true) {
    							dan.confirm('scrape', q.data.viewer.friending_possibilities.page_info.end_cursor);
    						} else {
    							dc.getElementById('div_html').innerHTML = h_confirm;
    							dc.getElementById('total').innerHTML = tmp.length;

								dc.getElementById('confirm').addEventListener('click', function() {dan.confirm('goconfirm', null)});
								dc.getElementById('reject').addEventListener('click', function() {dan.confirm('goreject', null)});
    						}
    					} else {
    						dc.getElementById('div_html').innerHTML = '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);color:red;">Failed</div>';
    					}
    				});
    			} else if(action == 'goconfirm') {
    				var delay = dc.getElementById('delay').value;
    				dc.getElementById('confirm').setAttribute('disabled', ''); dc.getElementById('confirm').innerHTML = '<b>Running</b>';
    				var Interval = setInterval(function() {
    					if(i < tmp.length) {
    						var req_confirm = req_fb_modern + '&fb_api_req_friendly_name=FriendingCometFriendRequestConfirmMutation&variables={"input":{"friend_requester_id":"'+tmp[i]+'","source":"friends_tab","actor_id":"'+uid+'","client_mutation_id":"4"},"scale":1,"refresh_num":0}&server_timestamps=true&doc_id=3195789993880298';
    						dan.req_json('POST', '/api/graphql/', req_confirm, tmp[i], function(q, r) {
    							if(q && q.data && q.data.friend_request_accept && q.data.friend_request_accept.friend_requester && q.data.friend_request_accept.friend_requester.friendship_status && q.data.friend_request_accept.friend_requester.friendship_status == 'ARE_FRIENDS') {
    								sukses++;
    								dc.getElementById('sukses').innerHTML = sukses;
    							} else {
    								gagal++;
    								dc.getElementById('gagal').innerHTML = gagal;
    							}
    						});
    						i++;
    						dc.getElementById('proses').innerHTML = i;
    						dc.getElementById('total').innerHTML = tmp.length;
    					} else {
    						dan.done('confirm');
    					}
    				}, delay * 1000);
    			} else if(action == 'goreject') {
    				var delay = dc.getElementById('delay').value;
    				dc.getElementById('reject').setAttribute('disabled', ''); dc.getElementById('reject').innerHTML = '<b>Running</b>';
					var Interval = setInterval(function() {
    					if(i < tmp.length) {
    						var req_confirm = req_fb_modern + '&fb_api_req_friendly_name=FriendingCometFriendRequestDeleteMutation&variables={"input":{"friend_requester_id":"'+tmp[i]+'","source":"friends_tab","actor_id":"'+uid+'","client_mutation_id":"4"},"scale":1,"refresh_num":0}&server_timestamps=true&doc_id=3524604860895009';
    						dan.req_json('POST', '/api/graphql/', req_confirm, tmp[i], function(q, r) {
    							if(q && q.data && q.data.friend_request_delete && q.data.friend_request_delete.friend_requester && q.data.friend_request_delete.friend_requester.friendship_status && q.data.friend_request_delete.friend_requester.friendship_status == 'CAN_REQUEST') {
    								sukses++;
    								dc.getElementById('sukses').innerHTML = sukses;
    							} else {
    								gagal++;
    								dc.getElementById('gagal').innerHTML = gagal;
    							}
    						});
    						i++;
    						dc.getElementById('proses').innerHTML = i;
    						dc.getElementById('total').innerHTML = tmp.length;
    					} else {
    						dan.done('reject');
    					}
    				}, delay * 1000);
    			}
    		},
    		btn_messages: function(x) {
    			dan.clearinter();
    			tmp = [];
				if(x == 'repeat') {
    				dc.getElementById('div_html').innerHTML = '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);">Please Wait...</div>';
    				dan.req_text('POST', '/api/graphqlbatch/', 'batch_name=MessengerGraphQLThreadlistFetcher&__user='+uid+'&__a=1&__dyn='+__dyn+'&fb_dtsg='+fb_dtsg+'&jazoest=22175&queries={"o0":{"doc_id":"2865354216882557","query_params":{"limit":500,"before":null,"tags":["INBOX"],"isWorkUser":false,"includeDeliveryReceipts":true,"includeSeqID":false,"is_work_teamwork_not_putting_muted_in_unreads":false}}}', function(q) {
						if(q.includes('"message_threads":{"nodes":[{"id"')) {
    						var a = JSON.parse(q.split('"message_threads":{"nodes":')[1].split('},"pending_threads":{')[0]);
    						for(b in a) {
    							if(a[b]&&a[b].thread_key&&a[b].thread_key.thread_fbid !== null) {
    								tmp.push({"group":a[b].thread_key.thread_fbid});
    							} else {
    								tmp.push({"person":a[b].thread_key.other_user_id});
    							}
    						}
    						dc.getElementById('div_html').innerHTML = h_r_messages;
    						dc.getElementById('total').innerHTML = tmp.length;

							dc.getElementById('create').addEventListener('click', function() {dan.btn_panel('btn_panel_messages')});
							dc.getElementById('repeat').addEventListener('click', function() {dan.btn_messages('repeat')});
							dc.getElementById('gomssg').addEventListener('click', function() {dan.gomssg('repeat')});
						} else {
							dc.getElementById('div_html').innerHTML = '<div style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);color:red;">Failed</div>';
						}
    				});
				} else if(x == 'getfriends') {
    				dc.getElementById('getfriends').setAttribute('disabled', '');
    				dc.getElementById('inp').value = '';
					dan.req_json('POST', '/api/graphql/', req_fb_modern + '&fb_api_req_friendly_name=useFeedComposerCometMentionsBootloadDataSourceQuery&variables={"include_viewer":false,"options":["FRIENDS_ONLY"],"scale":1,"typeahead_context":"mentions","typeaheadFirstDegreeFilters":["USER"],"useSections":null}&server_timestamps=true&doc_id=5606622172783175', '', function(q, r) {
						if(q && q.data && q.data.comet_composer_typeahead_bootload) {
							for(var a in q.data.comet_composer_typeahead_bootload) {
								tmp.push(q.data.comet_composer_typeahead_bootload[a].node.id);
							}

							dc.getElementById('inp').value = tmp.join('\n');
							dc.getElementById('total').innerHTML = tmp.length;
						}
						dc.getElementById('getfriends').removeAttribute('disabled');
					});
				}
    		},
    		gomssg: function(x) {
    			var i = 0, sukses = 0, gagal = 0, tmp_group = [];
    			if(x == 'create') {
    				dan.rp_blank('inp');
    				var inp = dc.getElementById('inp').value.split('\n');
    				var inp_text = dc.getElementById('inp_text').value;
					var items = dc.getElementById('items').value;
    				var delay = dc.getElementById('delay').value;

					if(inp === '') {alert('Form Required')} else {
						dc.getElementById('gomssg').setAttribute('disabled', ''); dc.getElementById('gomssg').innerHTML = '<b>Running</b>';
						var chunkSize = parseInt(items);
						while(inp.length) {
							tmp_group.push(inp.splice(0, chunkSize));
						}

    					tmp_group.forEach(c_fbid);
    					function c_fbid(item, index) {
    						var t = [];
    						for(key in tmp_group[index]) {
    							t.push({"fbid":tmp_group[index][key]});
    						}
    						tmp_group[index] = t;
    					}

						var Interval = setInterval(function() {
							if(i < tmp_group.length) {
								var req_tread = req_fb_modern + '&fb_api_req_friendly_name=MessengerGroupCreateMutation&variables={"input":{"client_mutation_id":"1","actor_id":"'+uid+'","participants":'+JSON.stringify(tmp_group[i])+',"thread_settings":{"name":null,"joinable_mode":"PRIVATE","thread_image_fbid":null},"entry_point":"chat_sidebar_new_group"}}&doc_id=577041672419534';
								dan.req_json('POST', '/api/graphql/', req_tread, '', function(q, r) {
									if(q&&q.data&&q.data.messenger_group_thread_create&&q.data.messenger_group_thread_create.thread&&q.data.messenger_group_thread_create.thread.thread_key&&q.data.messenger_group_thread_create.thread.thread_key.thread_fbid) {
    									if (inp_text !== '') {
											input_text(q.data.messenger_group_thread_create.thread.thread_key.thread_fbid);
										} else {
											sukses++;
											dc.getElementById('sukses').innerHTML = sukses;
										}
									} else {
										gagal++;
										dc.getElementById('gagal').innerHTML = gagal;
									}
								});
								i++;
								dc.getElementById('proses').innerHTML = i;
								dc.getElementById('total').innerHTML = tmp_group.length;
							} else {
								dan.done('gomssg');
							}
						}, delay * 1000);
					}

    				function input_text(thread_fbid) {
						var req_msgs = 'tids=cid.g.'+thread_fbid+'&wwwupp=C3&platform_xmd=&body='+encodeURIComponent(inp_text)+'&waterfall_source=message&action_time='+Date.now()+'&fb_dtsg='+fb_dtsg+'&jazoest=25482&lsd=IioN42A_OcxSQuUMcMJde-&__dyn='+__dyn+'&__csr=&__req=x&__a=&__user='+uid;
    					dan.req_text('POST', '/messages/send/?icm=1&ifcd=1&eav=&paipv=0', req_msgs, function(q, r) {
							sukses++;
							dc.getElementById('sukses').innerHTML = sukses;
    					});
    				}
    			} else if(x == 'repeat') {
    				var inp_text = dc.getElementById('inp_text').value;
    				var delay = dc.getElementById('delay').value;

    				if(inp_text == '') {alert('Form Required...')} else {
    					dc.getElementById('gomssg').setAttribute('disabled', ''); dc.getElementById('gomssg').innerHTML = '<b>Running</b>';
    					var Interval = setInterval(function() {
    						if(i < tmp.length) {
    							if(tmp[i].person) {
    								var tread_replay = 'tids=cid.c.'+tmp[i].person+':'+uid+'&wwwupp=C3&ids['+tmp[i].person+']='+tmp[i].person+'&platform_xmd=&body='+encodeURIComponent(inp_text)+'&waterfall_source=message&action_time='+Date.now()+'&fb_dtsg='+fb_dtsg+'&jazoest=25346&lsd=&__dyn='+__dyn+'&__csr=&__req=o&__a=&__user='+uid;
    							} else if(tmp[i].group) {
    								var tread_replay = 'tids=cid.g.'+tmp[i].group+'&wwwupp=C3&platform_xmd=&body='+encodeURIComponent(inp_text)+'&waterfall_source=message&action_time='+Date.now()+'&fb_dtsg='+fb_dtsg+'&jazoest=25482&lsd=IioN42A_OcxSQuUMcMJde-&__dyn='+__dyn+'&__csr=&__req=x&__a=&__user='+uid;
    							}

    							dan.req_text('POST', '/messages/send/?icm=1&ifcd=1&eav=&paipv=0', tread_replay, function(q) {
    								sukses++;
    								dc.getElementById('sukses').innerHTML = sukses;
    							});
    							i++;
    							dc.getElementById('proses').innerHTML = i;
    							dc.getElementById('total').innerHTML = tmp.length;
    						} else {
    							dan.done('gomssg');
    						}
    					}, delay * 1000);
    				}
    			}
    		},
    		done: function(x) {
    			dan.clearinter();
    			dc.getElementById(x).innerHTML = '<b>Done</b>';
    		},
    		clearinter: function() {
    			for(var i = 1; i < 99999; i++) {
    				window.clearInterval(i);
    			}
    		},
    		rp_blank: function(x) {
    			var inp = dc.getElementById(x).value.split('\n');
    			var t1 = [];
    			var x1 = 0;
    			for(var i = 0; i < inp.length; i++) {
    				if(inp[i].trim() != '') {
    					t1[x1] = inp[i];
    					x1++;
    				}
    			}
    			t1 = t1.join('\n');
    			dc.getElementById(x).value = t1;
    		},
            req_json: function(m, u, b, a, bck) {
    			var xhr = new XMLHttpRequest();
    			xhr.open(m, u, true);
    			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    			xhr.onload = function() {
					if(xhr.readyState == 4 && xhr.status == 200) {
						var q = xhr.responseText;
						var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
						bck(e, a);
					} else {
						bck({"error":"error"}, a);
					}
    			};
    			xhr.send(b);
            },
            req_text: function(m, u, b, bck) {
    			var xhr = new XMLHttpRequest();
    			xhr.open(m, u, true);
    			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    			xhr.onload = function() {
					if(xhr.readyState == 4 && xhr.status == 200) {
						var q = xhr.responseText;
						bck(q);
					} else {
						bck("error");
					}
    			};
    			xhr.send(b);
            },
            klos: function() {
    			dan.clearinter();
                var element = dc.getElementById('ngonoo');
                element.remove();
            }
    	};
    })();
}
