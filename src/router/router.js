import consoleRouter from './routerModules/consoleRouter';
import homeRouter from './routerModules/homeRouter';

export default [
  {
    groupTitle: "控制台",
    groupKey:"console",
    children: consoleRouter
  },
  {
    groupTitle: "控制台",
    groupKey:"home",
    children: homeRouter
  }
]