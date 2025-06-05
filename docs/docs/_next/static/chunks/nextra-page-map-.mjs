import meta from "../../../pages/_meta.js";
import basics_meta from "../../../pages/basics/_meta.js";
import iCloud_meta from "../../../pages/iCloud/_meta.js";
import pro_meta from "../../../pages/pro/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "basics",
  route: "/basics",
  children: [{
    data: basics_meta
  }, {
    name: "newNote",
    route: "/basics/newNote",
    frontMatter: {
      "sidebarTitle": "Newnote"
    }
  }, {
    name: "quitApp",
    route: "/basics/quitApp",
    frontMatter: {
      "sidebarTitle": "Quitapp"
    }
  }]
}, {
  name: "contact",
  route: "/contact",
  frontMatter: {
    "sidebarTitle": "Contact"
  }
}, {
  name: "iCloud",
  route: "/iCloud",
  children: [{
    data: iCloud_meta
  }, {
    name: "iCloudEnable",
    route: "/iCloud/iCloudEnable",
    frontMatter: {
      "sidebarTitle": "Icloudenable"
    }
  }, {
    name: "iCloudSync",
    route: "/iCloud/iCloudSync",
    frontMatter: {
      "sidebarTitle": "Icloudsync"
    }
  }, {
    name: "iCloudTroubleShooting",
    route: "/iCloud/iCloudTroubleShooting",
    frontMatter: {
      "sidebarTitle": "Icloudtroubleshooting"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "pro",
  route: "/pro",
  children: [{
    data: pro_meta
  }, {
    name: "proExpired",
    route: "/pro/proExpired",
    frontMatter: {
      "sidebarTitle": "Proexpired"
    }
  }, {
    name: "upgradingToPro",
    route: "/pro/upgradingToPro",
    frontMatter: {
      "sidebarTitle": "Upgradingtopro"
    }
  }]
}, {
  name: "shortcuts",
  route: "/shortcuts",
  frontMatter: {
    "sidebarTitle": "Shortcuts"
  }
}];