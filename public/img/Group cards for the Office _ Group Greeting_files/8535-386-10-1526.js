
      (function(){
        olark.extend('Sounds');
olark.extend('Feedback');


        var isNewVersion = olark._ && olark._.versions && (olark._.versions.follow || olark._.versions.popout)
        if(isNewVersion) {
          olark._.finish({"system":{"google_analytics_domain":"auto","file_size_error_text":"This file size is too large.","url_handler_target_window":"_top","disable_expand_text_input":false,"show_away_as_header":0,"cookie_path":"/","feedback_survey_question_operator_intelligence_text":"How knowledgeable was the chat agent?","feedback_survey_question_3_text":"Question 3 of 5","file_type_error_text":"This file type is not allowed.","hide_min_max_buttons":0,"left_margin":20,"disable_extra_br":true,"busy_text":"Contact us","offline_header_text":"Contact us!","disable_width":true,"offline_survey_email_label":"Email","disable_get_cookies":false,"feedback_survey_question_operator_speed_text":"How responsive was the chat agent?","show_end_popout":0,"poll":false,"feedback_survey_button_submitting":"Submitting","append_to_body":1,"online_header_text":"Now chatting","check_for_status":"Olark Chat (startup)","feedback_survey_question_operator_intelligence_high":"Extremely knowledgeable","offline_message":"We're not around, but we'd love to chat another time.","prechat_survey_name_label":"Name","feedback_survey_complete_button_text":"Feedback Sent","feedback_survey_question_operator_speed_low":"Not at all responsive","width":260,"show_away":0,"feedback_survey_question_4_text":"Question 4 of 5","branding_panel_link_text":"Try Olark on your site","parse_links":1,"feedback_survey_question_operator_speed_high":"Extremely responsive","send_transcript_title_text":"Send Transcript","expandOnFirstMessageReceived":1,"send_transcript_placeholder":"Email","prechat_email_validation_message":"Please enter a valid email address","prechat_survey_name_placeholder":"Enter your name...","prechat_survey_welcome_message":"Hi! Let\u2019s get some quick info so we can better serve you:\n\nFor immediate answers, view our \u003Ca href=\"https://www.groupgreeting.com/faq.php\"\u003EFrequently Asked Questions\u003C/a\u003E , where 90% of questions can be answered.","feedback_survey_end_message":"Thank you for your feedback :)","branding_panel_cancel_text":"Go back","show_popout":0,"resize_length":25,"rules":[{"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Thanks for checking out our FAQ page. I'm Stephanie, the customer service manager. Please let me know if you have any questions as I would be happy to help!"}}],"kind":"Rule","whenOffline":false,"perPage":false,"clause":{"kind":"AndClause","clauses":[{"left":{"kind":"VariableClause","varname":"visitor.currentPage.url"},"kind":"ContainsClause","right":"https://www.groupgreeting.com/faq"},{"left":{"kind":"VariableClause","varname":"visitor.secondsSpentOnCurrentPage"},"kind":"GreaterThanClause","right":60}]},"whenOnline":true,"id":"15519138470340597846700085237","enabled":true,"perVisit":true,"perVisitor":false,"description":"FAQ Page"},{"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Thanks for checking out our pricing! I'm Stephanie, the customer service manager. Please let me know if I can answer any questions regarding pricing as I'd be happy to help!"}}],"kind":"Rule","whenOffline":false,"perPage":false,"clause":{"kind":"AndClause","clauses":[{"left":{"kind":"VariableClause","varname":"visitor.currentPage.url"},"kind":"ContainsClause","right":"https://www.groupgreeting.com/pricing"},{"left":{"kind":"VariableClause","varname":"visitor.secondsSpentOnCurrentPage"},"kind":"GreaterThanClause","right":20}]},"whenOnline":true,"id":"155191371504407597528952436157","enabled":true,"perVisit":true,"perVisitor":false,"description":"Pricing Plan Page"},{"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Thanks for checking out our service. I'm Stephanie, the customer service manager. Please let me know if  you have any questions as I'd be happy to help!"}}],"kind":"Rule","whenOffline":false,"perPage":false,"clause":{"kind":"AndClause","clauses":[{"left":{"kind":"VariableClause","varname":"visitor.currentPage.url"},"kind":"EqualsClause","right":"https://www.groupgreeting.com/"},{"left":{"kind":"VariableClause","varname":"visitor.referrer"},"kind":"ContainsClause","right":"https://www.google.com"},{"left":{"kind":"VariableClause","varname":"visitor.secondsSpentOnCurrentPage"},"kind":"GreaterThanClause","right":30}]},"whenOnline":true,"id":"155191332815607773865782801976","enabled":true,"perVisit":true,"perVisitor":false,"description":"Referred by Google Ads"},{"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Thanks for starting a card. I'm Stephanie, the customer service manager. Please let me know if I can help answer questions about our cards!"}}],"kind":"Rule","whenOffline":false,"perPage":false,"clause":{"kind":"AndClause","clauses":[{"left":{"kind":"VariableClause","varname":"visitor.secondsSpentOnCurrentPage"},"kind":"GreaterThanClause","right":60},{"left":{"kind":"VariableClause","varname":"visitor.currentPage.url"},"kind":"ContainsClause","right":"https://www.groupgreeting.com/create.php"}]},"whenOnline":true,"id":2314,"enabled":false,"perVisit":true,"perVisitor":false,"description":"Greet when customer is on Create page"},{"actions":[{"kind":"Action","method":"api.chat.sendNotificationToOperator","options":{"body":"A new visitor is on your site, why not reach out to them?"}}],"kind":"Rule","whenOffline":false,"perPage":false,"clause":{"kind":"OrClause","clauses":[{"left":{"kind":"VariableClause","varname":"visitor.visitCount"},"kind":"EqualsClause","right":1}]},"whenOnline":true,"id":2315,"enabled":false,"perVisit":false,"perVisitor":true,"description":"Notify agents when a new visitor lands on the site"},{"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Hi, we're here to answer any questions"}}],"kind":"Rule","whenOffline":false,"perPage":false,"clause":{"kind":"OrClause","clauses":[{"left":{"kind":"VariableClause","varname":"visitor.pageCountForThisVisit"},"kind":"EqualsClause","right":6}]},"whenOnline":true,"id":2316,"enabled":false,"perVisit":true,"perVisitor":false,"description":"Start a chat after a customer has viewed 6 pages, so I can engage without being too intrusive"},{"actions":[{"kind":"Action","method":"api.chat.updateVisitorNickname","options":{"snippet":"Returning Visitor"}}],"kind":"Rule","whenOffline":false,"perPage":false,"clause":{"kind":"AndClause","clauses":[{"left":{"kind":"VariableClause","varname":"visitor.visitCount"},"kind":"GreaterThanClause","right":1}]},"whenOnline":true,"id":2317,"enabled":true,"perVisit":true,"perVisitor":false,"description":"Highlight returning visitors in my buddy list"},{"actions":[{"kind":"Action","method":"api.box.hide","options":{}}],"kind":"Rule","whenOffline":false,"perPage":false,"clause":{"kind":"AndClause","clauses":[{"left":{"kind":"VariableClause","varname":"visitor.countryCode"},"kind":"EqualsClause","right":"ZW"}]},"whenOnline":true,"id":2318,"enabled":false,"perVisit":true,"perVisitor":false,"description":"Hide chat for visitors from Zimbabwe since we cannot ship to them."},{"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Bonjour, Comment allez-vous?"}}],"kind":"Rule","whenOffline":false,"perPage":false,"clause":{"kind":"AndClause","clauses":[{"left":{"kind":"VariableClause","varname":"visitor.countryCode"},"kind":"EqualsClause","right":"FR"}]},"whenOnline":true,"id":"15508605089740","enabled":false,"perVisit":true,"perVisitor":false,"description":"Target my French visitors by sending a custom message in their language"}],"expandOnMessageReceived":0,"resize_input_height":60,"inline_css_url_ie":"static.olark.com/css/0/b/0b5c605cbc1c9745fb33b5e81c6184ad.css","feedback_survey_question_operator_attitude_text":"How friendly was the chat agent?","prechat_required_error_message":"Please complete all required fields","forced_rpc_server":"knrpc.olark.com/nrpc","offline_survey_phone_placeholder":"Enter your phone number...","default_localization":"en-US","offline_survey_email_placeholder":"Enter your email...","feedback_survey_question_5_text":"Question 5 of 5","offline_survey_website_placeholder":"Enter your website...","hide_when_away":0,"feedback_survey_begin_button_text":"Rate Chat","popout_css_url":"static.olark.com/css/9/8/98c23c22d4700f33524c3faf5aa12bd2.css","language":"en","hb_show_button_text":true,"visitor_id_error_text":"File uploading is currently unavailable.","operator_is_typing_text":"is typing...","allow_change_width":true,"feedback_survey_question_operator_attitude_high":"Extremely friendly","default_flash_on_icon":"https://static.olark.com/js/images/orange.ico","require_phone":0,"offline_button_text":"Contact us","right_margin":20,"prechat_survey_phone_label":"Phone","offline_survey_submit_button_text":"Send","habla_offline_sent_text":"Thanks for your message! We'll get back to you shortly.","start_visible":false,"conversation_id_error_text":"File uploading is currently unavailable.","disable_default_visitor_information":0,"online_button_text":"Chat with us","use_theme":"bouncing_buzzard","operator_has_stopped_typing_text":"has stopped typing","habla_name_input_text":"click here and type your Name","right_to_left":false,"require_email":1,"feedback_survey_submission_error_message":"There was an error submitting your answer, please try again.","in_chat_text":"Now chatting","hb_position":"left","offline_survey_phone_label":"Phone","offline_survey_next_button_text":"Next","habla_offline_submit_value":"Send","require_name":2,"processing_file_error_text":"There was a problem processing your file.","pre_chat_submit":"Click here to start chatting","prechat_website_validation_message":"Please enter a valid URL","habla_popout_text":"\u0026gt;","offline_phone_validation_message":"Please enter a valid phone number","line_length":21,"habla_sizebutton_text_expanded":"_","top_margin":0,"feedback_survey_question_additional_feedback_text":"Additional Feedback.","offline_msg_mode":1,"prechat_survey_submit_button_text":"Start chatting","local_user_display_name":"\u0026rarr;","send_transcript_cancel_text":"No Thanks","prechat_survey_phone_placeholder":"Enter your phone number...","dismiss_message_text":"Dismiss","prechat_survey_email_placeholder":"Enter your email...","allowed_domains":"","plugin_path":"https://static.olark.com/js/plugins/","flash_icons":1,"offline_survey_thank_you_message":"Thanks for your message! We will have a member of our team contact you shortly.","habla_offline_email_text":"click here and type your Email","before_chat_text":"Chat with us","input_height":20,"disable_offline_messaging_fallback":true,"feedback_survey_question_chat_text":"How satisfied were you with this chat?","allow_change_colors":true,"send_transcript_begin_button_text":"Send Transcript","busy_message":"All of our representatives are with other customers at this time. We will be with you shortly.","branding_panel_message_text":"10,000+ companies rely on Olark software to chat with customers directly.","prechat_survey":{"is_enabled":true,"pages":[[{"is_required":false,"type":"name"},{"is_required":false,"type":"email"}]]},"show_pre_chat":0,"habla_offline_phone_text":"click here and type your Phone Number","send_transcript_complete_button_text":"Transcript Sent","habla_offline_body_text":"We're not around but we still want to hear from you! Leave us a note:","branding_link_text":"Powered by Olark","hb_theme_override":{"bg_image_size":"135px","expiration_date":"1678984365","enabled":false,"bg_image_url":"https://static.olark.com/a/theme/images/holiday-green.png","primary_color":"#025F5E"},"pre_chat_error_text":"Please enter your name and email in case we get disconnected.","habla_sizebutton_text_compressed":"^","bottom_margin":0,"feedback_survey_question_chat_high":"Extremely satisfied","restart_chat_online_button_text":"Start conversation","feedback_survey_question_chat_low":"Not at all satisfied","hide_not_available":0,"allow_change_height":true,"restart_chat_offline_button_text":"Leave a message","enable_google_analytics":false,"prechat_survey_website_label":"Website","inline_css_url_quirks":"static.olark.com/css/8/4/844fb02b40ed2e8b64b542b43ff5f68e.css","prechat_phone_validation_message":"Please enter a valid phone number","myname":"you","upload_rejected_error_text":"File uploading is currently unavailable.","end_chat_button_text":"End Chat","hb_show_as_tab":true,"is_popup":0,"divid":"habla_window_div","feedback_survey_cancel_text":"Cancel","sending_text":"sending","branding":"powered_by","feedback_survey_button_next":"Next","habla_special_div_show_type":"block","email_body_error_text":"You must complete all fields and specify a valid email address","offline_survey_name_label":"Name","offline_survey_name_placeholder":"Enter your name...","hb_chatbox_size":"md","corner_position":"BR","offline_website_validation_message":"Please enter a valid URL","hbl_cookie_path":"/","feedback_survey_question_operator_attitude_low":"Not at all friendly","offline_survey":{"pages":[[{"is_required":true,"type":"name"},{"is_required":true,"type":"email"},{"label":"Message","is_required":true,"type":"textarea","placeholder_text":""}]]},"feedback_survey_button_finish":"Finish","generic_upload_error_text":"File uploading is currently unavailable.","height":155,"hb_primary_color":"#ff9500","ended_chat_message":"This chat has ended.","habla_end_popout_text":"","require_offline_phone":0,"offline_survey_website_label":"Website","start_expanded":0,"default_flash_off_icon":"https://static.olark.com/js/images/white.ico","close_hides_window":false,"hb_dark_theme":false,"feedback_survey_question_1_text":"Question 1 of 5","prechat_survey_next_button_text":"Next","send_text":"Send","panel_offset":20,"url_handler":"https://static.olark.com/jsclient-latest/follow.html?v=1426711435610","send_transcript_error_text":"Please enter a valid email address","is_inline":0,"start_habla_window_visible":false,"offline_survey_welcome_message":"We're not around, but leave us a note below:\u003Cbr\u003E\u003Cbr\u003E\n\nFor immediate answers for questions like: \u003Cbr\u003E\u003Cbr\u003E\nHow can I fix an overlapping message? \u003Cbr\u003E\nHow can I change the delivery date?\u003Cbr\u003E\nHow do I print the card?\u003Cbr\u003E\u003Cbr\u003E\n\nView our \u003Ca href=\"https://www.groupgreeting.com/faq.php\"\u003EFrequently Asked Questions\u003C/a\u003E, where 90% of questions are answered.","enableLanguageTranslation":false,"disable_set_cookies":false,"say_text":"Type here and hit enter to chat","feedback_survey_question_operator_intelligence_low":"Not at all knowledgeable","hb_enable_uploads":true,"disableGoogleAnalytics":0,"hashchange_events_trigger_page_change":1,"prechat_survey_website_placeholder":"Enter your website...","feedback_survey_question_2_text":"Question 2 of 5","offline_required_error_message":"Please complete all required fields","hb_custom_style":{"general":{"corners":"soft","secondaryColor":null}},"habla_closebutton_text":"x","welcome_msg":"Questions? We'd love to chat. ","start_hidden":0,"pre_chat_message":"Questions? We'd love to chat.","offline_email_validation_message":"Please enter a valid email address","flash_titlebar":1,"inline_css_url":"static.olark.com/css/3/9/3971c742ac2346c431f086113e61d518.css","enable_buttons":1,"rtl":false,"feedback_survey_question_additional_feedback_placeholder":"Type message here","not_available_text":"Contact us!","away_text":"Contact us","hb_disable_mobile":true,"prechat_survey_email_label":"Email","show_in_buddy_list":"all","hkey":"PHNwYW4gc3R5bGU9ImRpc3BsYXk6bm9uZSI+PGEgaWQ9ImhibGluazkiPjwvYT5odHRwOi8vd3d3Lm9sYXJrLmNvbTwvc3Bhbj5Qb3dlcmVkIEJ5IDxhIGhyZWY9Imh0dHA6Ly93d3cub2xhcmsuY29tLz9yaWQ9ODUzNS0zODYtMTAtMTUyNiZhbXA7cG93ZXJlZF9mPTEmYW1wO3V0bV9tZWRpdW09d2lkZ2V0JmFtcDt1dG1fY2FtcGFpZ249cG93ZXJlZF9ieV9mcmVlJmFtcDt1dG1fc291cmNlPTg1MzUtMzg2LTEwLTE1MjYiIGlkPSJoYmxpbms5OSIgdGFyZ2V0PSJfYmxhbmsiPk9sYXJrPC9hPg==","md5":"4684e2efdf39a0e36b581a0c014b2099","site_id":"8535-386-10-1526","template":null,"operators":{"1033970":{"avatar_url":"//static.olark.com/imageservice/25fedf2c744a4dc185c0cd559c89d775.png"}}},"Sounds":{"enabled":true},"Feedback":{"enabled":true}});
        }else{
          olark.configure(function(conf){
            conf.system.site_id="8535-386-10-1526";
          });
          olark._.finish();
        }
      })();
    