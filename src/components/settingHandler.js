export function saveSetting(setting) {
	if (typeof window !== "undefined" && window.localStorage) {
		console.log({ setting });
		if (localStorage[setting] != undefined) {
			localStorage[setting] = !JSON.parse(localStorage[setting])
		} else {
			localStorage[setting] = false
		}
		
	} else {
		alert('window or localStorage is not supported by your browser');
	}
}