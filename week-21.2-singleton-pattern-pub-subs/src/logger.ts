import { GameManager } from "./store";

export function startLogger() {
  setInterval(() => {
    console.log(GameManager.getInstance().log());
  }, 5000);
}


// ! PUB SUBS CODE NOT WRITTEN HERE,
// ! CHECK ON PROJECTS.100.DEVS.COM