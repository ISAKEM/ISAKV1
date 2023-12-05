/**
 * @name ISAK V1
 * @author Elaina Da Catto/ISAK.M
 * @description ISAK theme 1st Generation for Pengu Loader
 * @link https://github.com/ISAKEM
 */

let eConsole = "%c ISAK V1 "
let eCss = "color: #ffffff; background-color: #f77fbe"

console.log(eConsole+'%c By %cElaina Da Catto/Modified by ISAK.M',eCss,"", "color: #e4c2b3")

export function getPluginsName() {
	let scriptPath = getScriptPath()
	let regex = /\/([^/]+)\/index\.js$/
	let match = scriptPath.match(regex)
	let pluginsname = match ? match[1]:null
	return pluginsname
}
export * from "./data/ImportSettings.js" 

import "./data/Data.js"
import "./data/built-in_plugins/Custom-Status"
import "./data/built-in_plugins/Old-LL-Settings"
import "./data/ChangeFilters.js"
import "./data/homepage.js"
import "./data/loadCss.js"
import "./data/_utils.js"
import "./data/built-in_plugins/KeyCombines.js"
import "./data/configs/Custom-Status.txt?raw"
import "./data/Manual-Update.js"
import axios from "https://cdn.skypack.dev/axios"

window.setInterval(async ()=> {
	let originWallpaperList = await PluginFS.ls("./data/assets/Backgrounds/Wallpapers")
	let originAudioList = await PluginFS.ls("./data/assets/Backgrounds/Audio")
	let originFontList = await PluginFS.ls("./data/assets/Fonts/Custom")
	  
	const Wallpaperregex = /\.(mp4|webm|mkv|mov|avi|wmv)$/
	const Audioregex = /\.(mp3|flac|ogg|wav|aac)$/
	const Fontregex = /\.(ttf|otf)$/
	
	const WallpaperList = originWallpaperList.filter((file) => Wallpaperregex.test(file))
	const AudioList = originAudioList.filter((file) => Audioregex.test(file))
	const FontList = originFontList.filter((file) => Fontregex.test(file)) 

	DataStore.set("Wallpaper-list", WallpaperList)
	DataStore.set("Audio-list", AudioList)
	DataStore.set("Font-list", FontList)
},1000)

if (DataStore.get("Dev-mode")) {
	let res = await fetch(`//plugins/Server-Data/index.js`)
	if (res.status == 200) {
		(await (() => import(`//plugins/Server-Data/index.js`))()).default
	}
	else {
		console.warn(`Failed to load ISAK V1 data`)
		Toast.error("Failed to load ISAK V1 data")
	}
}
else {
	let res = await fetch("https://unpkg.com/elainav3-isakmfork-data@latest/index.js")
	if (res.status == 200) {
		(await (() => import("https://unpkg.com/elainav3-isakmfork-data@latest/index.js"))()).default
	}
	else {
		console.warn(`Failed to load ISAK V1 data`)
		Toast.error("Failed to load ISAK V1 data")
	}
}