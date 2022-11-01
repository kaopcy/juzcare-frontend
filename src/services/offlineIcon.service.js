const icons = require('../configs/offlineIcon.config');
const axios = require('axios');
const fs = require('fs');

let preferredIconName = {};

icons.forEach((icon) => {
   const [prefix, iconName] = icon.split(':');
   if (preferredIconName[prefix]) {
      preferredIconName[prefix] = [...preferredIconName[prefix], iconName];
   } else {
      preferredIconName[prefix] = [iconName];
   }
});

const links = Object.entries(preferredIconName).map(
   ([key, value]) => `https://api.iconify.design/${key}.json?icons=${value.join(',')}&pretty=1`
);

(async () => {
   try {
      const res = await axios.all(links.map((endpoint) => axios.get(endpoint)));
      const data = res.map((r) => r.data);

      fs.writeFileSync('src/_iconsbundle.json', JSON.stringify(data));
   } catch (error) {
      console.log(error);
   }
})();
