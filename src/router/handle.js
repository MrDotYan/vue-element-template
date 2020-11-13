import router from './router';

const routes = [];

router.forEach(ele=>{
  ele.children.forEach(item=>{
    routes.push(item);
  })
})


export default routes;