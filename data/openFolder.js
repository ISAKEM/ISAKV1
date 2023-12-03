import {getPluginsName} from "../index.js"
export function openConfigs() {window.openPluginsFolder(`${getPluginsName()}/data/configs`)}
export function openAssets() {window.openPluginsFolder(`${getPluginsName()}/data/assets`)}
export function openRenzskin() {window.openPluginsFolder(`${getPluginsName()}/data/assets/R3nzskin`)}
export {getPluginsName}