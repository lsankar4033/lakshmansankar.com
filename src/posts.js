import b1 from "./posts/1.js";
import b2 from "./posts/2.js";
import b3 from "./posts/3.js";
import b4 from "./posts/4.js";
import b5 from "./posts/5.js";
import b6 from "./posts/6.js";
import b7 from "./posts/7.js";

export default [
  {
    title: "Here we go again",
    path: "/here-we-go-again",
    body: b1,
    category: "life",
    date: new Date("06/14/20")
  },
  {
    title: "Changing one thing at a time",
    path: "/changing-one-thing-at-a-time",
    body: b2,
    category: "life",
    date: new Date("06/18/20")
  },
  {
    title: "Optimizers, idealists, and adventurers",
    path: "/optimizers-idealists-and-adventurers",
    body: b3,
    category: "life",
    date: new Date("06/26/20")
  },
  {
    title: "Exploring code in space and time",
    path: "/exploring-code-in-space-and-time",
    body: b4,
    category: "life",
    date: new Date("07/08/20")
  },
  {
    title: "Reconnecting with Nietzsche",
    path: "/reconnecting-with-nietzsche",
    body: b5,
    category: "life",
    date: new Date("07/24/20")
  },
  {
    title: "Simplifying Eth 2.0: Shards as data availability layers",
    path: "/shards-as-data-availability-layers",
    body: b6,
    category: "crypto",
    date: new Date("09/04/20")
  },
  {
    title: "Unrolling Rollups; Fast pipes and smart VMs",
    path: "/fast-pipes-smart-vms",
    body: b7,
    category: "crypto",
    date: new Date("09/27/20")
  }
];
