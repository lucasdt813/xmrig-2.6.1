function RamboDice() {
	this.apis = {
		roll: '/internal-api/rambo/roll',
		stats: '/internal-api/rambo/stats',
		setcurrency: '/internal-api/rambo/setcurrency',
		setclientseed: '/internal-api/rambo/setclientseed',
		generateseed: '/internal-api/rambo/generateseed',
		resetsessionstats: '/internal-api/rambo/resetsessionstats',
	}

	this.ls = {}
	this.ls.client_seed = "rambo_client_seed";

	this.elems = {}
	this.elems.currency_select_btn = $('.dice-select-currency-btn');
	this.elems.currency_img = $('.dice-currency-img');
	this.elems.currency_name = $('.dice-currency');
	this.elems.select_currency_btns = $('.select-dice-currency');
	this.elems.select_currency_modal_close_btn = $('.dice-currency-modal-close');

	this.elems.total_rolls = $('.dice-total-rolls');
	this.elems.total_wagered = $('.dice-total-wagered');
	this.elems.win_2w = $('.dice-total-win-2w');

	this.elems.stats_totals = $('.dice-stats-totals');

	this.elems.sidebar_stats_tabs = $('#dice-stats-btns .btn');
	this.elems.sidebar_balance = '.dice-sidebar-balance-amount-holder .amount';

	this.elems.bet_amount = $('#dice-bet-amount');
	this.elems.bet_amount_up = $('#dice-bet-amount-up');
	this.elems.bet_amount_down = $('#dice-bet-amount-down');
	this.elems.bet_amount_half = $('#dice-bet-amount-half');
	this.elems.bet_amount_double = $('#dice-bet-amount-double');
	this.elems.bet_amount_max = $('#dice-bet-amount-max');

	this.elems.payout = $('#dice-payout');
	this.elems.payout_up = $('#dice-payout-up');
	this.elems.payout_down = $('#dice-payout-down');

	this.elems.win_profit = $('#dice-profit-on-win');

	this.elems.select_roll_target = $('.dice-select-roll-target');
	this.elems.roll_under_target = $('.dice-roll-under-target');
	this.elems.roll_over_target = $('.dice-roll-over-target');

	this.elems.roll_last_win = $('.dice-roll-result-last-win');
	this.elems.roll_profit = $('.dice-roll-result-profit');
	this.elems.roll_result = $('.dice-roll-result');
	this.elems.roll_result_coloured_elems = $('.dice-top-result-holder, .dice-sidebar-balance-holder, .dice-roll-result');
	this.elems.roll_result_win = $('.dice-roll-result-type.win');
	this.elems.roll_result_lose = $('.dice-roll-result-type.lose');

	this.elems.roll_button = $('#dice-roll');
	this.elems.client_seed = $('#dice-client-seed');
	this.elems.generate_client_seed = $('#dice-generate-client-seed');
	this.elems.seed_nounce = $('.dice-seed-nounce');

	this.elems.roll_result_type_win = $('.dice-roll-result-type-holder-win');
	this.elems.roll_result_type_error = $('.dice-roll-result-type-holder-error');

	this.elems.rambo_stash_first = $('.rambo-stash-first-number');
	this.elems.rambo_stash_first_max = $('.rambo-stash-first-number-max');
	this.elems.rambo_stash_example_roll = $('.rambo-stash-roll-example');

	this.elems.rambo_stash_won_modal = $('#rambo-stash-won-modal');
	this.elems.rambo_stash_won_modal_amount = $('.rambo-stash-won-amount');

	this.elems.server_seed_hash_current = $('.dice-server-seed-hash');
	this.elems.client_nounce = $('.dice-seed-nounce');
	this.elems.server_seed_previous = $('.dice-previous-seed');
	this.elems.server_seed_hash_previous = $('.dice-previous-seed-hash');
	this.elems.client_nounce_previous = $('.dice-previous-nounce');
	this.elems.generate_server_seed = $('.dice-generate-server-seed');
	this.elems.client_seed_current = $('.dice-client-seed');
	this.elems.client_seed_previous = $('.dice-client-seed-previous');

	this.elems.select_content_buttons = $('.dice-select-main-content');
	this.elems.manual_content_holder = $('.dice-manual-content-holder');
	this.elems.auto_content_holder = $('.dice-auto-content-holder');

	this.dice_content_views = new Array();
	this.dice_content_views.push(this.elems.manual_content_holder);
	this.dice_content_views.push(this.elems.auto_content_holder);


	this.elems.auto_running_status = $('.dice-auto-running');
	this.elems.basic_auto_click_btn = $('#dice-auto-click-btn');

	// auto elems
	this.elems.auto_base_bet = $('#dice-auto-base');
	this.elems.auto_base_bet_up = $('#dice-auto-base-up');
	this.elems.auto_base_bet_down = $('#dice-auto-base-down');

	this.elems.auto_limit = $('#dice-auto-limit');
	this.elems.auto_limit_up = $('#dice-auto-limit-up');
	this.elems.auto_limit_down = $('#dice-auto-limit-down');

	this.elems.auto_preset_btn = $('#dice-auto-preset-btn');
	this.elems.auto_preset_btn_title = $('#dice-auto-preset-btn .title');
	this.elems.auto_preset_title = $('#dice-auto-preset-btn .title');
	this.elems.auto_preset_btns = $('.dice-auto-preset-holder li a');

	this.elems.auto_win_action_base = $('#dice-auto-radio-win-base');
	this.elems.auto_win_action_raise = $('#dice-auto-radio-win-raise');
	this.elems.auto_lose_action_base = $('#dice-auto-radio-lose-base');
	this.elems.auto_lose_action_raise = $('#dice-auto-radio-lose-raise');

	this.elems.auto_raise_win = $('#dice-auto-win-raise');
	this.elems.auto_raise_lose = $('#dice-auto-lose-raise');

	this.elems.auto_stop_win = $('#dice-auto-stop-profit');
	this.elems.auto_stop_win_up = $('#dice-auto-stop-profit-up');
	this.elems.auto_stop_win_down = $('#dice-auto-stop-profit-down');
	this.elems.auto_stop_lose = $('#dice-auto-stop-lose');
	this.elems.auto_stop_lose_up = $('#dice-auto-stop-lose-up');
	this.elems.auto_stop_lose_down = $('#dice-auto-stop-lose-down');

	this.elems.auto_speed_buttons = $('.dice-auto-speed-button-group button');
	this.elems.auto_rain_on_win = $('#dice-auto-rain-on-win');
	this.elems.auto_random_hilo = $('#dice-auto-randomise-hilo');
	this.elems.auto_roll_button = $('#dice-auto-roll');

	this.elems.dummy = $('#this-does-not-exist');

	this.logged_in = false;
	this.selected_user_stats_type = 0;
	this.payout_step_amount = 1000;
	this.bet_step_amount = 0.00000001;

	this.payout = 2000.00;
	this.payout_max = rambo_max_payout;
	this.payout_min = 999.01;

	this.bet_amount = 0.00000001;
	this.min_bet = 0.00000001;
	this.max_bets = rambo_max_bets;

	this.input_animate_time = 150;

	this.house_edge_percent = rambo_house_edge;
	this.balances = rambo_balances;
	this.roll_lo = true;
	this.rolling = false;
	this.fair_data = rambo_fair_data;
	this.seed_nounce = this.fair_data.current.client_seed_nounce;
	this.premium_status = rambo_premium_status;
	this.stash_sequence_length = 5;

	this.selected_currency = this.elems.currency_name.first().text() || "BTC";

	this.auto_process_speed = 100;

	this.speed_normal = {};
	this.speed_normal.roll_scrambler = 35;
	this.speed_normal.after_roll_result = 350;
	this.speed_normal.after_roll_enable = 100;
	this.speed_normal.auto_limiter = 17;

	this.speed_fast = {};
	this.speed_fast.roll_scrambler = this.speed_normal.roll_scrambler / 2;
	this.speed_fast.after_roll_result = this.speed_normal.after_roll_result / 2;
	this.speed_fast.after_roll_enable = this.speed_normal.after_roll_enable / 2;
	this.speed_fast.auto_limiter = 7;

	this.speed_fastest = {};
	this.speed_fastest.roll_scrambler = 5;
	this.speed_fastest.after_roll_result = 1;
	this.speed_fastest.after_roll_enable = 1;
	this.speed_fastest.auto_limiter = 3;

	this.anim_speeds = new Array();
	this.anim_speeds.push(this.speed_normal);
	this.anim_speeds.push(this.speed_fast);
	this.anim_speeds.push(this.speed_fastest);

	this.speed = this.anim_speeds[0];
	this.current_content_view = 0;

	this.auto_process_speed_limiter = 0;
	this.auto_roll_counter = 0;
	this.auto_current_bet = 0;

	this.auto_current_profit = 0;

	this.auto_presets = new Array();
	this.auto_presets[0] = {
		on_win_type: 0,
		on_lose_type: 0,
		payout: 2
	};
	this.auto_presets[1] = {
		on_win_type: 0,
		on_lose_type: 1,
		on_lose_raise: 100,
		payout: 2
	};
	this.auto_presets[2] = {
		on_win_type: 1,
		on_lose_type: 0,
		on_win_raise: 100,
		payout: 2
	};
	this.auto_presets[3] = {
		on_win_type: 0,
		on_lose_type: 1,
		on_lose_raise: 200,
		payout: 2
	};

	this.init = function() {
		this.setup_currency_selection();	
		this.setup_sidebar_stats_tabs();	
		this.set_selected_currency();

		window.apimanager.initialise('rambo_stats', this.update_stats.bind(this));

		// blur buttons after click
		$('.dice-root-content .btn').on('click', function() {
			this.blur();
		});

		this.payout_input = new RamboDiceSpinnerInput(this, this.elems.payout, this.elems.payout_up, this.elems.payout_down, this.get_payout_amount_min.bind(this), this.get_payout_amount_max.bind(this), this.payout_step_amount, this.payout, 2);
		this.bet_amount_input = new RamboDiceSpinnerInput(this, this.elems.bet_amount, this.elems.bet_amount_up, this.elems.bet_amount_down, this.get_bet_min.bind(this), this.get_bet_max.bind(this), this.bet_step_amount, this.bet_amount, 8);
		this.win_profit_input = new RamboDiceSpinnerInput(this, this.elems.win_profit, $(), $(), 0.00000001, 0, 0.00000001, 0, 8);
		this.win_profit_input.after_format = this.animate_input;

		this.calculate_win_profit();

		this.elems.bet_amount_half.on('click', this.bet_amount_half.bind(this));
		this.elems.bet_amount_double.on('click', this.bet_amount_double.bind(this));
		this.elems.bet_amount_max.on('click', this.bet_amount_max.bind(this));
		this.elems.select_roll_target.on('click', this.handle_roll_select_target.bind(this));
		this.elems.roll_button.on('click', this.pre_roll_dice.bind(this));
		this.elems.generate_client_seed.on('click', this.generate_client_seed_btn.bind(this));
		this.elems.generate_server_seed.on('click', this.generate_server_seed.bind(this));
		this.elems.client_seed.on('input change', this.sync_client_seed.bind(this));

		this.elems.select_content_buttons.on('click', this.change_active_content_view.bind(this));

		this.initialise_client_seed();

		this.setup_basic_auto_click_bot();
		if (this.elems.auto_base_bet.length) {
			this.setup_auto_bet();
		}

		setTimeout(this.show_select_currency_tip.bind(this), 3000);
	}

	this.setup_auto_bet = function() {
		this.auto_base_bet = new RamboDiceSpinnerInput(this, this.elems.auto_base_bet, this.elems.auto_base_bet_up, this.elems.auto_base_bet_down, this.get_bet_min.bind(this), this.get_bet_max.bind(this), this.bet_step_amount, this.bet_amount, 8);
		this.auto_limit = new RamboDiceSpinnerInput(this, this.elems.auto_limit, this.elems.auto_limit_up, this.elems.auto_limit_down, function() {return 0}, function() { return 999999999}, 1, 0, 0);
		this.auto_raise_win = new RamboDiceSpinnerInput(this, this.elems.auto_raise_win, this.elems.dummy, this.elems.dummy, function() { return 0}, function() {return 999999}, 1, 0, 0);
		this.auto_raise_lose = new RamboDiceSpinnerInput(this, this.elems.auto_raise_lose, this.elems.dummy, this.elems.dummy, function() {return 0}, function() {return 999999}, 1, 0, 0);

		this.auto_stop_win = new RamboDiceSpinnerInput(this, this.elems.auto_stop_win, this.elems.auto_stop_win_up, this.elems.auto_stop_win_down, function() { return 0}, function() { return 999999999}, this.bet_step_amount, 0, 8);
		this.auto_stop_lose = new RamboDiceSpinnerInput(this, this.elems.auto_stop_lose, this.elems.auto_stop_lose_up, this.elems.auto_stop_lose_down, function() { return 0}, function() { return 999999999}, this.bet_step_amount, 0, 8);

		this.auto_rain_on_win = new RamboDiceSpinnerInput(this, this.elems.auto_rain_on_win, this.elems.dummy, this.elems.dummy, function() {return 0}, function() {return 100}, 1, 0, 0);

		this.elems.auto_roll_button.on("click", this.toggle_auto_process.bind(this));

		// setup presets
		this.setup_auto_preset_selector();
		this.setup_auto_speed_selector();

		this.setup_auto_main_process();

		if (!this.premium_status) {
			$.each([this.elems.auto_limit, this.elems.auto_preset_btns, this.elems.auto_preset_btn, this.elems.auto_raise_win, this.elems.auto_raise_lose, this.elems.auto_win_action_base, this.elems.auto_win_action_raise, this.elems.auto_lose_action_base, this.elems.auto_lose_action_raise, this.elems.auto_limit_up, this.elems.auto_limit_down, this.elems.auto_stop_lose, this.elems.auto_stop_lose_up, this.elems.auto_stop_lose_down, this.elems.auto_stop_win, this.elems.auto_stop_win_up, this.elems.auto_stop_win_down, this.elems.auto_speed_buttons, this.elems.auto_rain_on_win, this.elems.auto_random_hilo], function(i, el) {
				el.prop('disabled', true);
			}.bind(this));
		}
	}

	this.toggle_auto_process = function() {
		if (this.auto_running) {
			this.auto_running = false;
			this.set_auto_status(false);
			this.set_auto_button_text("START ROLLING");
		}
		else {
			this.auto_roll_counter = 0;
			this.auto_current_profit = 0;
			this.auto_current_bet = 0;
			this.auto_running = true;
			this.set_auto_status(true);
			this.set_auto_button_text("STOP ROLLING");
			this.reset_session_stats();
			this.remove_roll_result_error();
		}
	}

	this.reset_session_stats = function() {
		doAjax(this.apis.resetsessionstats, "POST", {});
	}

	this.setup_auto_main_process = function() {
		clearInterval(this.auto_process_interval);
		this.auto_process_interval = setInterval(this.auto_process.bind(this), this.auto_process_speed);
	}

	this.auto_process = function() {
		if (this.auto_process_speed_limiter > 0) {
			this.auto_process_speed_limiter--;
			return false;
		}
		else {
			this.auto_process_speed_limiter = this.speed.auto_limiter;
		}

		if (!this.auto_running || this.rolling) {
			return false;
		}

		var skip_roll = false;

		var auto_settings = this.get_current_auto_settings();

		if (this.auto_current_bet == 0) {
			this.auto_current_bet = auto_settings.base_bet;
		}

		// process
		if (!this.last_roll_result) {
			// first run

		}
		else if (!this.last_roll_result.auto_processed) {
			// process last roll

			if (this.last_roll_result.won) {
				if (auto_settings.win_return) {
					this.auto_current_bet = auto_settings.base_bet;
				}
				else {
					this.auto_current_bet = this.raise_by_percent(this.auto_current_bet, auto_settings.win_raise);
				}

				this.auto_process_speed_limiter += this.speed.auto_limiter / 3;
				skip_roll = true;

				if (auto_settings.rain_on_win > 0) {
					var percent_to_rain = parseFloat(this.last_roll_result.winnings) * (parseFloat(auto_settings.rain_on_win) / 100).toFixed(8);
					if (percent_to_rain > 0.00000100) {
						this.do_rain_on_win(toFixedNoRounding(percent_to_rain.toFixed(8), 8));
					}
				}
			}
			else {
				if (auto_settings.lose_return) {
					this.auto_current_bet = auto_settings.base_bet;
				}
				else {
					this.auto_current_bet = this.raise_by_percent(this.auto_current_bet, auto_settings.lose_raise);
				}
			}

			this.auto_current_profit += this.last_roll_result.profit;

			this.last_roll_result.auto_processed = true;
		}

		if (this.auto_current_profit >= auto_settings.stop_profit && auto_settings.stop_profit > 0) {
			this.set_roll_result_error("Auto: reached target profit", 'info');
			this.toggle_auto_process();
			return false;
		}
		if (this.auto_current_profit <= (auto_settings.stop_loss * -1) && auto_settings.stop_loss > 0 && this.auto_current_profit < 0) {
			this.set_roll_result_error("Auto: reached stop loss", 'info');
			this.toggle_auto_process();
			return false;
		}

		if (auto_settings.random_hilo && getRandomInt(1, getRandomInt(1,30)) == 1) {
			this.elems.select_roll_target.not(".active").trigger("click");
		}

		this.bet_amount_input.set(this.auto_current_bet);

		this.validate_values();

		if (this.validation_error_auto || this.validation_error) {
			this.toggle_auto_process();
			this.set_roll_result_error("Auto: input error");

			if (this.validation_error) {
				$('.dice-select-main-content').first().trigger("click");
			}
			if (this.validation_error_auto) {
				$('.dice-select-main-content').last().trigger("click");
			}
			return false;
		}

		if (this.auto_roll_counter >= auto_settings.roll_limit && auto_settings.roll_limit > 0) {
			this.toggle_auto_process();
			this.set_roll_result_error("Auto: reached roll limit of "+auto_settings.roll_limit, 'info');
			return false;
		}

		if (!skip_roll) {
			this.elems.roll_button.trigger('click');
			this.auto_roll_counter++;
		}
	}

	this.do_rain_on_win = function(amount) {
		var rain_command = "/rain "+parseInt(parseFloat(amount) * 100000000)+" 10 "+this.selected_currency;
		var msg_data = { text : rain_command, page: 'rambo', channel: 'eng'};

		doAjax("/internal-api/chatbox/send-message", "POST", msg_data, function(data) {
			if (data.success) {
				console.log(data.result);
			}
			else {
				this.set_roll_result_error("Auto: rain failed");
			}
		});
	}

	this.raise_by_percent = function(amount, percent) {
		percent = percent / 100;
		amount = parseFloat(parseFloat(amount) + (parseFloat(amount) * percent));

		return amount;
	}

	this.get_current_auto_settings = function() {
		var current_settings = {};

		current_settings.base_bet = parseFloat(this.auto_base_bet.value);
		current_settings.roll_limit = parseInt(this.auto_limit.value);
		current_settings.win_raise = parseFloat(this.auto_raise_win.value);
		current_settings.lose_raise = parseFloat(this.auto_raise_lose.value);
		current_settings.stop_profit = parseFloat(this.auto_stop_win.value);
		current_settings.stop_loss = parseFloat(this.auto_stop_lose.value);
		current_settings.random_hilo = (this.elems.auto_random_hilo.prop('checked'));
		current_settings.rain_on_win = parseFloat(this.auto_rain_on_win.value);
		current_settings.win_return = (this.elems.auto_win_action_base.prop('checked'));
		current_settings.lose_return = (this.elems.auto_lose_action_base.prop('checked'));

		return current_settings;
	}

	this.setup_auto_speed_selector = function() {
		this.elems.auto_speed_buttons.on('click', this.handle_auto_speed_button.bind(this));
	}

	this.handle_auto_speed_button = function(e) {
		var selected_speed = parseInt(e.currentTarget.dataset.speed);

		this.clear_auto_speed_active();
		$(e.currentTarget).addClass("active");
		this.set_anim_speed(selected_speed);
	}

	this.clear_auto_speed_active = function() {
		this.elems.auto_speed_buttons.removeClass("active");
	}

	this.set_anim_speed = function(speed) {
		this.speed = this.anim_speeds[speed];
	}

	this.reset_speed = function() {
		this.elems.auto_speed_buttons.first().trigger("click");
	}

	this.setup_auto_preset_selector = function() {
		this.elems.auto_preset_btns.on('click', this.handle_auto_preset_button.bind(this));

		// clear preset text on change of options
		$.each([this.elems.auto_win_action_base, this.elems.auto_win_action_raise, this.elems.auto_lose_action_base, this.elems.auto_lose_action_raise, this.elems.auto_raise_win, this.elems.auto_raise_lose], function(i, el) {
			el.on("input change", this.clear_auto_selected_preset.bind(this));
		}.bind(this));

		this.elems.auto_raise_win.on("input change", function() {
			this.elems.auto_win_action_raise.trigger("click");
		}.bind(this));
		this.elems.auto_raise_lose.on("input change", function() {
			this.elems.auto_lose_action_raise.trigger("click");
		}.bind(this));
	}

	this.handle_auto_preset_button = function(e) {
		var selected_preset = parseInt(e.currentTarget.dataset.preset);

		this.clear_auto_preset_active();
		$(e.currentTarget).parent().addClass("active");

		this.apply_auto_preset(selected_preset);
		this.set_auto_preset_button_text($(e.currentTarget).html());
	}

	this.clear_auto_selected_preset = function() {
		this.clear_auto_preset_active();
		this.set_auto_preset_button_text("None");
	}

	this.clear_auto_preset_active = function() {
		this.elems.auto_preset_btns.parent().removeClass("active");
	}

	this.set_auto_preset_button_text = function(text) {
		this.elems.auto_preset_btn_title.html(text);
	}

	this.apply_auto_preset = function(index) {
		var preset_data = this.get_auto_preset_data(index);

		if (typeof preset_data.on_win_raise != "undefined") {
			this.auto_raise_win.set(preset_data.on_win_raise);
		}
		else {
			this.auto_raise_win.set(0);
		}
		if (typeof preset_data.on_lose_raise != "undefined") {
			this.auto_raise_lose.set(preset_data.on_lose_raise);
		}
		else {
			this.auto_raise_lose.set(0);
		}

		if (typeof preset_data.on_win_type != "undefined") {
			if (preset_data.on_win_type == 0) {
				this.elems.auto_win_action_base.parent().find('label').trigger('click');
			}
			else {
				this.elems.auto_win_action_raise.parent().find('label').trigger('click');
			}
		}
		if (typeof preset_data.on_lose_type != "undefined") {
			if (preset_data.on_lose_type == 0) {
				this.elems.auto_lose_action_base.parent().find('label').trigger('click');
			}
			else {
				this.elems.auto_lose_action_raise.parent().find('label').trigger('click');
			}
		}

		if (typeof preset_data.payout != "undefined") {
			this.payout_input.set(preset_data.payout);
		}
	}

	this.get_auto_preset_data = function(index) {
		return this.auto_presets[parseInt(index)];
	}

	this.show_select_currency_tip = function() {
		if (!localStorage.getItem("seen_currency_select_tip")) {
			var currency_tip_elem = $('.dice-nav-stats .dice-select-currency-btn img');

			currency_tip_elem.popover({
				content: "Click here to change to another currency!",
				placement: "bottom",
				title: "Did you know?",
				trigger: "manual",
			});

			currency_tip_elem.popover('show');

			$('#dice-select-currency-modal').on('show.bs.modal', function() {
				currency_tip_elem.popover('destroy');
				localStorage.setItem("seen_currency_select_tip", true);
			});
		}
	}

	this.setup_basic_auto_click_bot = function() {
		this.elems.basic_auto_click_btn.on('click', this.toggle_basic_auto_clicker.bind(this));

		clearInterval(this.basic_auto_clicker_interval);
		this.basic_auto_clicker_interval = setInterval(this.process_basic_auto_clicker.bind(this), 1000);
	}

	this.process_basic_auto_clicker = function() {
		if (!this.basic_auto_click_running) {
			return false;
		}

		this.elems.roll_button.trigger("click");
	}

	this.toggle_basic_auto_clicker = function() {
		if (this.basic_auto_click_running) {
			this.basic_auto_click_running = false;
			this.set_auto_status(false);
			this.set_auto_button_text("Click to Start");

			this.speed = this.anim_speeds[0];
		}
		else {
			this.basic_auto_click_running = true;
			this.set_auto_status(true);
			this.set_auto_button_text("Click to Stop");

			this.speed = this.anim_speeds[1];
		}
	}

	this.set_auto_button_text = function(text) {
		this.elems.basic_auto_click_btn.html(text);
		this.elems.auto_roll_button.html(text);
	}

	this.set_auto_status = function(state) {
		this.elems.auto_running_status.addClass("hidden");

		if (state == true) {
			this.elems.auto_running_status.removeClass("hidden");
		}
	}

	this.change_active_content_view = function(e) {
		var selected_tab = e.currentTarget.dataset.tab;
		this.current_content_view = selected_tab;

		$('.dice-content-holder').addClass("hidden");
		this.dice_content_views[selected_tab].removeClass("hidden");
	}


	this.generate_server_seed = function() {
		if (this.generating_seed) {
			return false;
		}

		this.generating_seed = true;
		this.elems.generate_server_seed.prop('disabled', true);
		doAjax(this.apis.generateseed, "POST", {}, this.process_generate_seed.bind(this));
	}

	this.process_generate_seed = function(data) {
		if (typeof data.result.current != "undefined") {
			this.fair_data = data.result;
		}
		else {
			toast("Rambo Dice Error", "You can generate a new seed in "+data.result, "error");
		}

		setTimeout(function() {
			this.elems.generate_server_seed.prop('disabled', false);
		}.bind(this), 2000);
		
		this.generating_seed = false;
	}

	this.reset_seed_nounce = function() {
		this.seed_nounce = 0;

		this.sync_seed_nounce();
	}

	this.sync_seed_nounce = function() {
		this.elems.seed_nounce.html(this.fair_data.current.client_seed_nounce);		
	}

	this.increment_seed_nounce = function() {
		this.seed_nounce++;

		this.sync_seed_nounce();
	}

	this.initialise_client_seed = function() {
		this.client_seed = this.get_saved_client_seed();

		if (!this.client_seed) {
			this.generate_client_seed_btn();
		}

		this.sync_client_seed(true);
	}

	this.get_saved_client_seed = function() {
		return localStorage.getItem(this.ls.client_seed);
	}

	this.save_client_seed = function() {
		doAjax(this.apis.setclientseed, "POST", {client_seed: this.client_seed});
		localStorage.setItem(this.ls.client_seed, this.client_seed);
	}

	this.generate_client_seed = function() {
		last_chat_messages = $('#chat-list-holder-eng .chat-body .message').slice(-getRandomInt(5, 10));
		var seed_text = "be responsible when playing rambo v2";

		if (last_chat_messages.length) {
			seed_text = $(last_chat_messages[getRandomInt(0, last_chat_messages.length - 1)]).text();
		}

		return Sha1.hash(seed_text+get_unix_timestamp()+getRandomInt(1,976883847582)).substring(0, getRandomInt(12,24));
	}

	this.generate_client_seed_btn = function() {
		this.client_seed = this.generate_client_seed();

		this.sync_client_seed(true);
	}

	this.sync_client_seed = function(to_input) {
		if (to_input == true) {
			this.elems.client_seed.val(this.client_seed);
		}
		else {
			this.client_seed = this.elems.client_seed.val();
		}

		clearTimeout(this.save_client_seed_timeout);
		this.save_client_seed_timeout = setTimeout(this.save_client_seed.bind(this), 500);
	}

	this.pre_roll_dice = function(e) {
		if (!this.auto_running) {
			this.reset_speed();
		}

		this.validate_values();
		this.remove_roll_result_error();

		if (this.validation_error || this.rolling) {
			return false;
		}

		this.set_roll_result_state(2);
        this.set_roll_button_status(false);
        this.set_interface_state(false);

		this.dice_roll();
	}

	this.set_interface_state = function(state) {
		var elems_to_set = new Array();

		elems_to_set.push(this.elems.bet_amount_max);
		elems_to_set.push(this.elems.bet_amount_double);
		elems_to_set.push(this.elems.bet_amount_half);
		elems_to_set.push(this.elems.bet_amount_up);
		elems_to_set.push(this.elems.bet_amount_down);
		elems_to_set.push(this.elems.bet_amount);
		elems_to_set.push(this.elems.payout);
		elems_to_set.push(this.elems.payout_up);
		elems_to_set.push(this.elems.payout_down);
		elems_to_set.push(this.elems.client_seed);
		elems_to_set.push(this.elems.generate_client_seed);

		if (!state) {
			$.each(elems_to_set, function() {
				$(this).prop('disabled', true);
			});
		}
		else {
			$.each(elems_to_set, function() {
				$(this).prop('disabled', false);
			});
		}
	}

	this.dice_roll = function() {
		this.rolling = true;

		this.start_roll_scrambler();
		this.elems.rambo_stash_won_modal.modal("hide");

        $.ajax({
    		url: this.apis.roll,
    		type: "POST",
    		data: {bet: this.bet_amount_input.value, payout: this.payout_input.value, lo: this.roll_lo, client_seed: this.client_seed, currency: this.selected_currency, auto: (this.basic_auto_click_running || this.auto_running)},
    		dataType: "json",
    		timeout: 30000,
    		success: this.process_dice_roll_result.bind(this),
    		error: this.dice_roll_result_error.bind(this),
    	});
	}

	this.start_roll_scrambler = function() {
		this.roll_scramble_interval = setInterval(this._scramble_roll.bind(this), this.speed.roll_scrambler);

		this.elems.roll_result.addClass("rolling");
	}

	this._scramble_roll = function() {
		this.set_roll_result_instant(this.get_random_roll_result());

		if (!this.rolling) {
			this.stop_roll_scrambler();
		}
	}

	this.stop_roll_scrambler = function() {
		clearInterval(this.roll_scramble_interval);
		this.elems.roll_result.removeClass("rolling");
	}

	this.set_roll_result_instant = function(result) {
		this.elems.roll_result.html(result);
	}

	this.get_random_roll_result = function() {
		var random_roll = (getRandomInt(1,9999)/100).toFixed(2);

		if (random_roll < 10) {
			random_roll = "0"+random_roll;
		}

		return random_roll;
	}

	this.dice_roll_result_error = function(error) {
		this.rolling = false;
    	this.set_roll_result_instant("00.00");
		this.stop_roll_scrambler();
        this.set_roll_button_status(true);
        this.set_interface_state(true);

		if (typeof error != "undefined") {
    		this.set_roll_result_error("Server connection failed")
    	}
	}

	this.set_roll_result_error = function(error, type) {
		this.elems.roll_result_type_win.addClass("hidden");
		this.elems.roll_result_type_error.removeClass("hidden");
		this.elems.roll_result_type_error.find('.dice-roll-result-error').html(error);

		var label_class = "label-danger";
		var label_text = "ERROR";

		if (type == "info") {
			label_class = "label-info";
			label_text = "INFO";
		}

		this.elems.roll_result_type_error.find('.label').removeClass().addClass("label "+label_class).html(label_text);
	}

	this.remove_roll_result_error = function() {
		this.elems.roll_result_type_win.removeClass("hidden");
		this.elems.roll_result_type_error.addClass("hidden");
	}

	this.process_dice_roll_result = function(data) {
    	if (!data.success) {
    		this.set_roll_result_state(2);

    		if (!data.message) {
    			data.message = "Server did not respond";
    		}
    		
    		this.set_roll_result_error(data.message)
    		
    		this.dice_roll_result_error();
    		
    		return false;
    	}
    	
    	this.pre_process_dice_roll(data);
	}

	this.pre_process_dice_roll = function(data) {
		this.last_roll_result = data.result;
		setTimeout(this.process_dice_roll.bind(this), this.speed.after_roll_result);

		var stats_only = JSON.parse(JSON.stringify(data));;
		stats_only.result = stats_only.result.stats;
		window.apimanager.set('rambo_stats', stats_only);
		this.update_stats();
	}

	this.process_dice_roll = function() {
		this.stop_roll_scrambler();
		this.set_roll_result_instant(this.last_roll_result.roll);

		this.rolling = false;

    	this.set_roll_result_state(this.last_roll_result.won);

    	if (this.last_roll_result.won) {
    		this.set_roll_last_win(this.last_roll_result.winnings);
    	}
    	this.set_roll_profit(this.last_roll_result.profit);

    	setTimeout(function() {
    		if (this.last_roll_result.stats.stash.won) {
				this.won_rambo_stash();
    		}
        	this.set_roll_button_status(true);
        	this.set_interface_state(true);
        	this.update_stats();
    	}.bind(this), this.speed.after_roll_enable);
	}

	this.won_rambo_stash = function() {
		this.elems.rambo_stash_won_modal_amount.html(this.stats.jackpot.toFixed(8));
		this.elems.rambo_stash_won_modal.modal("show");
	}

	this.set_roll_result_state = function(state) {
		this.elems.roll_result_lose.removeClass("active");
		this.elems.roll_result_win.removeClass("active");
		this.elems.roll_result_coloured_elems.removeClass("win").removeClass("lose");

		if (state == 0) {
			this.elems.roll_result_lose.addClass("active");
			this.elems.roll_result_coloured_elems.addClass("lose");
		}
		else if (state == 1) {
			this.elems.roll_result_win.addClass("active");
			this.elems.roll_result_coloured_elems.addClass("win");
		}
		else if (state == 2) {
			this.set_roll_profit(0);
		}
	}

	this.set_roll_profit = function(val) {
		val = parseFloat(val);
		var profit_type = "win";

		if (val < 0) {
			val = val * -1;
			profit_type = "lose";
		}
		else if (val == 0) {
			profit_type = "";
		}

		this.elems.roll_profit.find('.amount').html(parseFloat(val).toFixed(8));	
		this.elems.roll_profit.removeClass('win lose').addClass(profit_type);	
	}

	this.set_roll_last_win = function(val) {
		this.elems.roll_last_win.find('.amount').html(parseFloat(val).toFixed(8));	
	}

	this.set_roll_button_status = function(status) {
		this.elems.roll_button.prop('disabled', !status);
	}

	this.set_auto_roll_button_status = function(status) {
		this.elems.auto_roll_button.prop('disabled', !status);
	}

	this.set_roll_under = function(val) {
		this.recount(".dice-roll-under-target", parseFloat(val).toFixed(2), false, 2, null, false, true);
	}
	this.set_roll_over = function(val) {
		this.recount(".dice-roll-over-target", parseFloat(val).toFixed(2), false, 2, null, false, true);
	}

	this.calculate_roll_targets = function() {
		if (this.payout_input.value < this.payout_min || this.payout_input.value > this.payout_max) {
			return false;
		}

    	var roll_under_target = ((1/(this.payout_input.value/100)*((100-this.house_edge_percent)/100))*100)/100;
    	roll_under_target = toFixedNoRounding(roll_under_target, 2);

    	roll_over_target = (100 - roll_under_target) - (this.house_edge_percent / 100);

    	this.set_roll_under(roll_under_target);
    	this.set_roll_over(roll_over_target);
	}

	this.handle_roll_select_target = function(e) {
		e.preventDefault();
		if (this.rolling) {
			return false;
		}
		var el = $(e.currentTarget);

		this.roll_lo = (el.data('type') == 0) ? 0 : 1;
		this.clear_selected_roll_target();

		el.addClass("active");
	}

	this.clear_selected_roll_target = function() {
		this.elems.select_roll_target.removeClass("active");
	}

	this.animate_input = function() {
		var new_val = this.value;

		if (typeof this.animate_old_val == "undefined") {
			this.animate_old_val = new_val;
		}

		if (new_val != this.animate_old_val) {
    		this.elems.input.addClass('animated')
    		this.elems.input.addClass('dice-animate-input')

			function remove_class() {
				this.elems.input.removeClass('animated')
			}

    		setTimeout(remove_class.bind(this), this.rambo.input_animate_time);
    		this.animate_old_val = new_val;
    	}
	}

	this.bet_amount_half = function() {
		this.bet_amount_input.set((parseFloat(this.bet_amount_input.value) / 2));
	}
	this.bet_amount_double = function() {
		this.bet_amount_input.set((parseFloat(this.bet_amount_input.value) * 2));
	}
	this.bet_amount_max = function() {
		this.bet_amount_input.set(this.get_allowed_max_bet());
	}

	this.get_payout_amount_min = function() {
		var current_bet_amount = this.bet_amount_input.value;
		var starting_payout = this.payout_min;

		if (current_bet_amount <= 0) {
			return 2;
		}

		while(true) {
			var win_profit = (parseFloat(current_bet_amount) * parseFloat(starting_payout)) - parseFloat(current_bet_amount);
			var win_profit_cut = parseFloat(toFixedNoRounding(win_profit, 8));

			if (win_profit_cut == 0) {
				starting_payout += 0.01;
			}
			else {
				break;
			}
		}

		return starting_payout.toFixed(2);
	}
	this.get_payout_amount_max = function() {
		return this.payout_max;
	}
	this.get_bet_min = function() {
		return this.min_bet;
	}
	this.get_bet_max = function() {
		return this.max_bets[this.selected_currency].bet;
	}
	this.get_win_max = function() {
		return this.max_bets[this.selected_currency].win;
	}
	this.get_allowed_max_bet = function() {
		return Math.min(this.get_bet_max(), this.get_balance(this.selected_currency))
	}
	this.validate_values = function() {
		if (this.rolling) {
			return false;
		}

		// payout amount
		var min_payout_amount = this.get_payout_amount_min();
		var max_payout_amount = this.get_payout_amount_max();

		if (parseFloat(this.payout_input.value) < parseFloat(min_payout_amount)) {
			this.payout_input.set_input_error("Payout must be <strong>"+parseFloat(min_payout_amount).toFixed(2)+"x</strong> or higher, or increase bet amount");
		}
		else if (parseFloat(this.payout_input.value) > parseFloat(max_payout_amount)) {
			this.payout_input.set_input_error("Payout must be <strong>"+parseFloat(max_payout_amount).toFixed(2)+"x</strong> or lower");
		}
		else {
			this.payout_input.remove_input_error();
		}

		// bet amount
		var min_bet_amount = this.get_bet_min();
		var max_bet_amount = this.get_bet_max();

		if (parseFloat(this.bet_amount_input.value) < parseFloat(min_bet_amount)) {
			this.bet_amount_input.set_input_error("Bet must be <strong>"+parseFloat(min_bet_amount).toFixed(8)+" "+this.selected_currency+"</strong> or higher");
		}
		else if (parseFloat(this.bet_amount_input.value) > parseFloat(max_bet_amount)) {
			this.bet_amount_input.set_input_error("Bet must be <strong>"+parseFloat(max_bet_amount).toFixed(8)+" "+this.selected_currency+"</strong> or lower");
		}
		else if (parseFloat(this.bet_amount_input.value) > parseFloat(this.get_balance(this.selected_currency))) {
			// this.bet_amount_input.set_input_error("You can't afford to bet this much");
			this.bet_amount_input.error = true;
		}
		else {
			this.bet_amount_input.remove_input_error();
		}

		// profit amount
		this.calculate_win_profit();
		var win_profit_min = 0.00000001;
		var win_profit_max = this.get_win_max();

		if (this.win_profit_input.value < win_profit_min) {
			this.win_profit_input.set_input_error("Profit must be <strong>"+parseFloat(0.00000001).toFixed(8)+" "+this.selected_currency+"</strong> or higher");
		}
		else if (parseFloat(this.win_profit_input.value) > parseFloat(win_profit_max)) {
			this.win_profit_input.set_input_error("Profit must be <strong>"+parseFloat(win_profit_max).toFixed(8)+" "+this.selected_currency+"</strong> or lower");
		}
		else {
			this.win_profit_input.remove_input_error();
		}

		// auto bet
		if (this.elems.auto_base_bet.length) {
			this.validation_error_auto_count = 0;
			$.each([[this.auto_base_bet, "Base bet", 0], [this.auto_limit, "Roll limit", 1], [this.auto_raise_win, "Raise percent", 2], [this.auto_raise_lose, "Raise percent", 2], [this.auto_stop_win, "Amount", 0], [this.auto_stop_lose, "Amount", 0], [this.auto_rain_on_win, "Rain percent", 2]], function(i, o) {
				var decimals = 0;
				var suffix = "";
				if (o[2] == 0) {
					decimals = 8;
					suffix = " "+this.selected_currency;
				}
				else if (o[2] == 1) {
					decimals = 0;
				}
				else if (o[2] == 2) {
					suffix = "%"
				}


				if (o[0].value < o[0].get_min()) {
					o[0].set_input_error(o[1]+" must be <strong>"+parseFloat(o[0].get_min()).toFixed(decimals)+""+suffix+"</strong> or higher");
				}
				else if (o[0].value > o[0].get_max()) {
					o[0].set_input_error(o[1]+" must be <strong>"+parseFloat(o[0].get_max()).toFixed(decimals)+""+suffix+"</strong> or lower");
				}
				else {
					o[0].remove_input_error();
				}

				if (o[0].error) {
					this.validation_error_auto_count += 1;
				}
			}.bind(this));
		}


		this.validation_error = (this.payout_input.error || this.bet_amount_input.error || this.win_profit_input.error);
		this.set_roll_button_status(!this.validation_error);

		this.validation_error_auto = (this.validation_error_auto_count > 0);
		this.set_auto_roll_button_status(!this.validation_error_auto);

		this.calculate_roll_targets();
	}

	this.get_current_win_profit = function() {
		return (parseFloat(this.payout_input.value) * parseFloat(this.bet_amount_input.value)) - parseFloat(this.bet_amount_input.value);
	}

	this.calculate_win_profit = function() {
		this.win_profit_input.set(this.get_current_win_profit(), false, true);
		this.win_profit_input.format_input();
	}


	// this.setup_payout_amount = function() {
	// 	this.elems.payout_up.on('click', this.increase_payout_amount.bind(this));
	// 	this.elems.payout_down.on('click', this.decrease_payout_amount.bind(this));
    //
	// 	this.elems.payout.on('input change', this.sync_payout_amount_input.bind(this));
	// 	this.elems.payout.on('blur', this.format_payout_amount.bind(this));
	// }
    //
	// this.increase_payout_amount = function() {
	// 	this.set_payout_amount_delta(this.payout_step_amount);
	// }
	// this.decrease_payout_amount = function() {
	// 	this.set_payout_amount_delta(-this.payout_step_amount);
	// }
    //
	// this.set_payout_amount_delta = function(delta) {
	// 	this.set_payout_amount(parseFloat(this.payout) + parseFloat(delta));
	// 	this.format_payout_amount();
	// }
    //
	// this.set_payout_amount = function(amount) {
	// 	this.payout = parseFloat(amount).toFixed(2);
    //
	// 	this.sync_payout_amount();
	// 	this.validate_values();
	// }
    //
    //
	// this.remove_payout_amount_error = function() {
	// 	this.elems.payout.tooltip("destroy");
	// 	this.payout_error = false;
	// }
    //
	// this.set_payout_amount_error = function(error) {
	// 	this.elems.payout.tooltip({ html : true, title: error, trigger: "manual" });
	// 	this.elems.payout.tooltip("show");
    //
	// 	this.payout_error = true;
	// }
    //
    //
	// this.sync_payout_amount = function() {
	// 	this.elems.payout.val(parseFloat(this.payout));
	// }
	// this.format_payout_amount = function() {
	// 	this.elems.payout.val(parseFloat(this.payout).toFixed(2));
	// }
    //
	// this.sync_payout_amount_input = function() {
	// 	this.set_payout_amount(this.elems.payout.val());
	// }




	this.setup_sidebar_stats_tabs = function() {
		this.elems.sidebar_stats_tabs.on('click', this.handle_sidebar_stats_change.bind(this));
	}

	this.handle_sidebar_stats_change = function(e) {
		this.selected_user_stats_type = e.target.dataset.statType;

		this.update_stats(100);
	}

	this.setup_currency_selection = function() {
		this.elems.select_currency_btns.on('click', this.handle_currency_select.bind(this));
	}

	this.handle_currency_select = function(e, clicked) {
		this.selected_currency = e.currentTarget.dataset.currency;

		this.set_selected_currency(true);
	}

	this.set_selected_currency = function(update_server) {
		this.elems.currency_img.attr("src", "/assets/img/coins/"+this.selected_currency+".png");
		this.elems.currency_name.html(this.selected_currency);

		$.each(this.elems.select_currency_btns, this.apply_selected_currency_to_button.bind(this));
		$.each(this.elems.stats_totals, this.show_stats_totals.bind(this));

		setTimeout(this.close_currency_select_modal.bind(this), 100);

		if (update_server == true) {
			doAjax(this.apis.setcurrency, "POST", {currency: this.selected_currency}, this.handle_server_set_currency.bind(this));

			this.update_stats(100);
		}
	}

	this.show_stats_totals = function(i, o) {
		var stats_currency = $(o).data('currency');

		if (stats_currency === this.selected_currency) {
			$(o).removeClass("hidden");
		}
		else {
			$(o).addClass("hidden");
		}
	}

	this.handle_server_set_currency = function(data) {
		if (!this.logged_in) {
			return false;
		}

		if (data.success == false) {
			this.selected_currency = data.result;
			this.set_selected_currency();
		}
	}

	this.apply_selected_currency_to_button = function(i, o) {
		var button_currency = $(o).data('currency');
		var button_elem = $(o);

		if (button_currency === this.selected_currency) {
			button_elem.html("Currently Selected");
			button_elem.prop('disabled', true);
		}
		else {
			button_elem.html("Play with "+button_currency);
			button_elem.prop('disabled', false);
		}
	}

	this.close_currency_select_modal = function() {
		this.elems.select_currency_modal_close_btn.trigger('click');
	}

	this.update_stats = function(speed) {
		data = window.apimanager.get('rambo_stats');
		this.process_stats_update(data, speed);

		if (!this.update_stats_interval) {
			this.update_stats_interval = setInterval(this.update_stats.bind(this), 500);
		}
	}

	this.process_stats_update = function(data, instant) {
		this.logged_in = (data.result.logged_in);
		var new_stats = data.result.rambo;

		if (typeof this.stats == "undefined") {
			this.stats = new_stats;
		}


		if (new_stats.dice_rolls_total < this.stats.dice_rolls_total) {
			return false;
		}

		this.stats = data.result.rambo;
		this.max_bets = data.result.max_bets;

		recount('.dice-total-rolls', this.stats.dice_rolls_total.toFixed(0), false, 0)
		recount('.dice-total-wagered-'+this.selected_currency, this.stats.dice_bet[this.selected_currency].toFixed(8), false, 8)
		recount('.dice-total-win-2w-'+this.selected_currency, this.stats.dice_win_2w[this.selected_currency].toFixed(8), false, 8)

		recount_if_changed('.dice-sidebar-jackpot-amount-holder .amount', this.stats.jackpot.toFixed(8), true, 8)

		this.validate_values();

		var stash_sequence_changed = false;
		if (typeof this.stash_data != "undefined") {
			if (this.stash_data.sequence[2] != data.result.stash.sequence[2]) {
				stash_sequence_changed = true;
			}
		}
		else {
			stash_sequence_changed = true;
		}
		this.stash_data = data.result.stash;

		if (this.logged_in && !this.rolling) {
			this.balances = data.result.balances;
			this.user_stats = data.result.mine;
			this.fair_data = data.result.fair;

			this.update_balances(instant);
			this.update_sidebar_user_stats(instant);

			this.sync_fair_data();
		}

		if (!this.rolling) {
			this.update_stash_sequence_progress(stash_sequence_changed);
		}
	}

	this.sync_fair_data = function() {
		this.sync_seed_nounce();

		this.elems.server_seed_hash_current.html(this.fair_data.current.server_seed_hash);
		this.elems.server_seed_hash_previous.html(this.fair_data.previous.server_seed_hash);
		this.elems.server_seed_previous.html(this.fair_data.previous.server_seed);
		this.elems.client_nounce_previous.html(this.fair_data.previous.client_seed_nounce);

		this.elems.client_seed_current.html(this.fair_data.current.client_seed);
		this.elems.client_seed_previous.html(this.fair_data.previous.client_seed);
	}

	this.update_stash_sequence_progress = function(changed) {
		var random_roll_example = new Array();
		$.each(['.rambo-stash-progress-item', '.rambo-stash-number-inner'], function(ii, class_name) {
			$(class_name).each(function(i, o) {
				$(o).removeClass("active");

				if (this.stash_data.current_progress - 1 >= i) {
					$(o).addClass("active");
				}
			}.bind(this));
		}.bind(this));

		if (changed) {
			$('.rambo-stash-sequence-number').each(function(i, o) {
				if (i <= this.stash_data.sequence.length - 1) {
					$(o).html(this.stash_data.sequence[i]);

					random_roll_example[i] = this.get_random_roll_result_for_sequence_number(this.stash_data.sequence[i]);
				}
			}.bind(this));
			
			this.elems.rambo_stash_first.html(this.stash_data.sequence[0]);
			this.elems.rambo_stash_first_max.html((this.stash_data.sequence[0] + 9.99).toFixed(2));

			this.elems.rambo_stash_example_roll.html(random_roll_example.join(", "));
		}
	}

	this.get_random_roll_result_for_sequence_number = function(roll) {
		return (getRandomInt(roll * 100, (roll + 9.99) * 100) / 100).toFixed(2);
	}

	this.update_sidebar_user_stats = function(instant) {
		var user_stats = this.user_stats;

		if (this.selected_user_stats_type == 0) {
			user_stats = user_stats.session;
		}
		else {
			user_stats = user_stats.total;
		}

		this.recount('.dice-sidebar-stats-wagered .amount', user_stats.dice_bet[this.selected_currency].toFixed(8), false, 8, undefined, instant, true)
		this.recount('.dice-sidebar-stats-profit .amount', user_stats.dice_profit[this.selected_currency].toFixed(8), false, 8, this.update_sidebar_profit_colour, instant, true)
		this.recount('.dice-sidebar-stats-wins', user_stats.dice_wins[this.selected_currency].toFixed(0), true, 0, undefined, instant, true)
		this.recount('.dice-sidebar-stats-loses', user_stats.dice_loses[this.selected_currency].toFixed(0), true, 0, undefined, instant, true)

		this.update_sidebar_profit_colour();
	}

	this.update_sidebar_profit_colour = function() {
		$element = $('.dice-sidebar-stats-profit .amount')
		var sidebar_profit = parseFloat($element.data('value'));

		if (sidebar_profit < 0) {
			$element.removeClass("profit").addClass("loss");
		}
		else if (sidebar_profit > 0) {
			$element.removeClass("loss").addClass("profit");
		}
		else {
			$element.removeClass("loss").removeClass("profit");
		}
	}

	this.get_balance = function(currency) {
		return this.balances[currency];
	}

	this.set_balance = function(currency, amount) {
		this.balances[currency] = amount;
	}

	this.update_balances = function(instant) {
		$.each(this.balances, this.process_balance_update.bind(this));

		this.update_sidebar_ui_balance(this.balances[this.selected_currency], instant);
	}

	this.process_balance_update = function(currency, amount) {
		this.update_currency_ui_balance(currency, amount);
	}

	this.update_currency_ui_balance = function(currency, amount) {
		recount_if_changed('.dice-balance-'+currency, amount.toFixed(8), true, 8);
	}

	this.update_sidebar_ui_balance = function(amount, instant) {
		this.recount(this.elems.sidebar_balance, amount.toFixed(8), true, 8, undefined, instant, true);
	}

	this.recount = function(element, amount, animate, decimals, cb, instant, changeonly) {
		if (instant) {
			sethtml(element, amount, animate);
		}
		else {
			if (changeonly) {
				recount_if_changed(element, amount, animate, decimals, cb);
			}
			else {
				recount(element, amount, animate, decimals, cb);
			}
		}
	}

	this.init();
}

function RamboDiceSpinnerInput(rambo, input_el, spinner_up_el, spinner_down_el, get_min_func, get_max_func, step_amount, value, decimals) {
	this.elems = {
		input: input_el,
		up: spinner_up_el,
		down: spinner_down_el
	}

	if (typeof get_min_func != "function") {
		get_min_func = function() {
			return parseFloat(get_min_func);
		}
	}
	if (typeof get_max_func != "function") {
		get_max_func = function() {
			return parseFloat(get_max_func);
		}
	}

	this.rambo = rambo;
	this.get_min = get_min_func;
	this.get_max = get_max_func;
	this.step_amount = step_amount;
	this.value = value;
	this.input_decimals = decimals;

	this.init = function() {
		this.sync_input();
		this.format_input();
		this.setup_input();
	}

	this.setup_input = function() {
		this.elems.up.on('click', this.spinner_up.bind(this));
		this.elems.down.on('click', this.spinner_down.bind(this));

		this.elems.input.on('input', this.sync_from_input.bind(this));
		this.elems.input.on('blur', this.format_input.bind(this));
	}

	this.spinner_up = function() {
		this.set_delta(this.step_amount);
	}
	this.spinner_down = function() {
		this.set_delta(-this.step_amount);
	}

	this.set_delta = function(delta) {
		this.set(parseFloat(this.value) + parseFloat(delta));
		this.format_input();
	}

	this.set = function(amount, no_sync, no_validate) {
		if (this.rambo.rolling) {
			return false;
		}
		this.value = parseFloat(amount).toFixed(this.input_decimals);

		if (!no_sync) {
			this.sync_input();
			this.format_input();
		}
		if (!no_validate) {
			this.rambo.validate_values();
		}

		if (typeof this.after_set != "undefined") {
			this.after_set();
		}
	}


	this.remove_input_error = function() {
		this.elems.input.parent().tooltip("hide");
		this.elems.input.parent().tooltip("destroy");
		this.error = false;
	}

	this.set_input_error = function(error) {
		if (this.error !== error) {
			this.elems.input.parent().tooltip({ html : true, title: error, trigger: "manual" });
			this.elems.input.parent().tooltip("show");
		}
		
		this.elems.input.parent().parent().find('.tooltip-inner').html(error);

		this.error = error;
	}

	this.sync_input = function() {
		this.elems.input.val(parseFloat(this.value)).trigger('change');
	}
	this.format_input = function() {
		if (isNaN(this.value)) {
			this.value = this.get_min();
		}
		this.elems.input.val(parseFloat(this.value).toFixed(this.input_decimals));

		if (typeof this.after_format != "undefined") {
			this.after_format();
		}
	}

	this.sync_from_input = function() {
		if (isNaN(parseFloat(this.elems.input.val()))) {
			this.elems.input.val(this.get_min());
		}
		this.set(this.elems.input.val(), true);
	}

	this.init();
}

$(document).ready(function() {
    window.rambodice = new RamboDice();
});
