import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Main = lazy(() =>
  import(/* webpackChunkName: "index" */ "../pages/main")
);
const Page1 = lazy(() =>
  import(/* webpackChunkName: "page1" */ "../pages/page_1")
);
const Page2 = lazy(() =>
  import(/* webpackChunkName:"page2" */ "../pages/page_2")
);

const routes = [
  {
    path: "/page1",
    component: Page1,
    exact: true
  },
  {
    path: "/page2",
    component: Page2,
    exact: true
  },
  {
    path: "/",
    component: Main,
    exact: true
  }
];

export default () => (
  <Suspense fallback={<div>加载中...</div>}>
    <Switch>
      {routes.map(item => (
        <Route key={item.path} {...item} />
      ))}
    </Switch>
  </Suspense>
);
