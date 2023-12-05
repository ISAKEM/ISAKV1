import {getPluginsName} from "./openFolder.js"
let init
if (DataStore.get("Dev-mode")) {
    try  {
		let res = await fetch(`//plugins/Server-Data/data/built-in_plugins/Settings.js`)
		if (res.status == 200) {
			init = (await (() => import(`//plugins/Server-Data/data/built-in_plugins/Settings.js`))()).init
		}
	}
	catch{console.warn(`File doesn't exist, can't load ISAK V1 settings`)}
}
else {
    try  {
		let res = await fetch(`https://unpkg.com/elainav3-isakmfork-data@latest/data/built-in_plugins/Settings.js`)
		if (res.status == 200) {
			init = (await (() => import(`https://unpkg.com/elainav3-isakmfork-data@latest/data/built-in_plugins/Settings.js`))()).init
		}
	}
	catch{console.warn(`File doesn't exist, can't load ISAK V1 settings`)}
}

export {init}