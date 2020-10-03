const { Clutter } = imports.gi;
const Main = imports.ui.main;

function init() {}

function enable() {
	const clocksItem = Main.panel.statusArea.dateMenu._clocksItem;

	for (let i = 0; i < clocksItem._locations.length; i++) {
		const location = clocksItem._locations[i].location;

		if (location.get_timezone().get_tzid() !== 'UTC') {
			return;
		}

		if (clocksItem._grid.text_direction === Clutter.TextDirection.RTL) {
			clocksItem._grid.layout_manager.get_child_at(2, i + 1, 1, 1).set_text('UTC')
		} else {
			clocksItem._grid.layout_manager.get_child_at(0, i + 1, 1, 1).set_text('UTC')
		}
	}
}

function disable() {
	const clocksItem = Main.panel.statusArea.dateMenu._clocksItem;

	for (let i = 0; i < clocksItem._locations.length; i++) {
		const location = clocksItem._locations[i].location;

		if (location.get_timezone().get_tzid() !== 'UTC') {
			return;
		}

		const locationName = location.get_city_name() || location.get_name();
		if (clocksItem._grid.text_direction === Clutter.TextDirection.RTL) {
			clocksItem._grid.layout_manager.get_child_at(2, i + 1, 1, 1).set_text(locationName)
		} else {
			clocksItem._grid.layout_manager.get_child_at(0, i + 1, 1, 1).set_text(locationName)
		}
	}
}
