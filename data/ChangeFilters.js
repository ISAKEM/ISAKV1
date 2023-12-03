import utils from './_utils.js'
import data from './configs/Filters.js'

let eConsole = "%c ISAK V1 "
let eCss = "color: #ffffff; background-color: #f77fbe"

let changeFilters = async (node) => {
    let pagename, previous_page
	let isak_bg_elem = document.getElementById("isak-bg")
	let brightness_modifiers = ["rcp-fe-lol-yourshop","rcp-fe-lol-home-main","rcp-fe-lol-champ-select", "rcp-fe-lol-store", "rcp-fe-lol-collections", "rcp-fe-lol-profiles-main",
								"rcp-fe-lol-parties", "rcp-fe-lol-loot", "rcp-fe-lol-clash-full","rcp-fe-lol-postgame","rcp-fe-lol-event-shop","rcp-fe-lol-tft"]

    pagename = node.getAttribute("data-screen-name")
	console.log(eConsole+"%c "+pagename,eCss,"color: #e4c2b3")

    if (pagename == "rcp-fe-lol-home-main") {
		isak_bg_elem.style.filter = data["Homepage"]
	}
	if (pagename == "rcp-fe-lol-uikit-full-page-modal-controller") {
		return
	}
	if (pagename == "rcp-fe-lol-yourshop") {
		isak_bg_elem.style.filter = data["Yourshop"]
	}
	else if (previous_page == "rcp-fe-lol-yourshop" && brightness_modifiers.indexOf(pagename) == -1) {
		isak_bg_elem.style.filter = data["Homepage"]
	}
	if (pagename == "rcp-fe-lol-champ-select") {
		isak_bg_elem.style.filter = data["Champ-select"]
	}
	else if (previous_page == "rcp-fe-lol-champ-select" && brightness_modifiers.indexOf(pagename) == -1) {
		isak_bg_elem.style.filter = data["Homepage"]
	}
	if (pagename == "rcp-fe-lol-clash-full") {
		isak_bg_elem.style.filter = data["Clash"]
	}
	else if (previous_page == "rcp-fe-lol-clash-full" && brightness_modifiers.indexOf(pagename) == -1) {
		isak_bg_elem.style.filter = data["Homepage"]
	}
	if (pagename == "rcp-fe-lol-loot") {
		isak_bg_elem.style.filter = data["Loot"]
	}
	else if (previous_page == "rcp-fe-lol-loot" && brightness_modifiers.indexOf(pagename) == -1) {
		isak_bg_elem.style.filter = data["Homepage"]
	}
	if (pagename == "rcp-fe-lol-store") {
		isak_bg_elem.style.filter = data["Store"]
	}
	else if (previous_page == "rcp-fe-lol-store" && brightness_modifiers.indexOf(pagename) == -1) {
		isak_bg_elem.style.filter = data["Homepage"]
	}
	if (pagename == "rcp-fe-lol-collections") {
		isak_bg_elem.style.filter = data["Collections"]
	}
	else if (previous_page == "rcp-fe-lol-collections" && brightness_modifiers.indexOf(pagename) == -1) {
		isak_bg_elem.style.filter = data["Homepage"]
	}
	if (pagename == "rcp-fe-lol-postgame") {
		isak_bg_elem.style.filter = data["Postgame"]
	}
	else if (previous_page == "rcp-fe-lol-postgame" && brightness_modifiers.indexOf(pagename) == -1) {
		isak_bg_elem.style.filter = data["Homepage"]
	}
	if (pagename == "rcp-fe-lol-profiles-main") {		
		isak_bg_elem.style.filter = data["Profiles"]
	}
	else if (previous_page == "rcp-fe-lol-profiles-main" && brightness_modifiers.indexOf(pagename) == -1) {
		isak_bg_elem.style.filter = data["Homepage"]
	}
	if (pagename == "rcp-fe-lol-parties") {
		isak_bg_elem.style.filter = data["Parties"]
	}
	else if (previous_page == "rcp-fe-lol-parties" && brightness_modifiers.indexOf(pagename) == -1) {
		isak_bg_elem.style.filter = data["Homepage"]
	}
	if (pagename == "rcp-fe-lol-tft") {
		isak_bg_elem.style.filter = data["TFT"]
	}
	else if (previous_page == "rcp-fe-lol-tft" && brightness_modifiers.indexOf(pagename) == -1) {
		isak_bg_elem.style.filter = data["Homepage"]
	}
	if (previous_page != pagename) {previous_page = pagename}
}
//___________________________________________________________________________//



//___________________________________________________________________________//
window.addEventListener('load', ()=> {
    utils.mutationObserverAddCallback(changeFilters, ["screen-root"])
    utils.subscribe_endpoint('/lol-gameflow/v1/gameflow-phase', (message) => {
		let phase = JSON.parse(message["data"])[2]["data"]
		if (phase == "GameStart" || phase == "InProgress") {
			document.getElementById("isak-bg").style.filter = data["Gamestart"]
		}
	})
})
//___________________________________________________________________________//