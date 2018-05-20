/**
 * Root of CGI's Aromi server.
 */
const AROMI_ROOT_URL: string = "https://ruokalistatkoulutjapaivakodit.arkea.fi";
const AROMI_MENU_URL_PREFIX: string = AROMI_ROOT_URL + "/AromiStorage/blob/menu/";

/**
 * Location of AromiMenusJsonData
 */
// const AROMI_JSON_DATA_URL: string = AROMI_ROOT_URL + "/AromiStorage/blob/main/AromiMenusJsonData";

// debug stuff
// tslint:disable-next-line:max-line-length
const AROMI_JSON_DATA_URL: string = "https://rawgit.com/theel0ja/349371c1c563171f2a9c73a640196c17/raw/b9f1d971c6ffd47b4973b60f57acef549ec2640a/aromi-data.json";

export { AROMI_ROOT_URL, AROMI_JSON_DATA_URL, AROMI_MENU_URL_PREFIX };
