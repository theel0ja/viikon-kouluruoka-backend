import fetch from "node-fetch";

import * as settings from "../settings";

fetch(settings.AROMI_MENUS_JSON_DATA_URL)
  .then((res) => res.json())
  .then((json) => console.log(json));
