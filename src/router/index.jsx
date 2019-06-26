import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

// import Main from "../pages/main";
// import Page1 from "../pages/page_1";
// import Page2 from "../pages/page_2";

const routes = [
  {
    path: "/page1",
    component: Loadable({
      loader: () => import("../pages/page_1"),
      loading: () => <div>加载中...</div>
    }),
    exact: true
  },
  {
    path: "/page2",
    component: Loadable({
      loader: () => import("../pages/page_2"),
      loading: () => <div>加载中...</div>
    }),
    exact: true
  },
  {
    path: "/",
    component: Loadable({
      loader: () => import("../pages/main"),
      loading: () => <div>加载中...</div>
    }),
    exact: true
  }
];

export default () => (
  <Switch>
    {routes.map(item => (
      <Route key={item.path} {...item} />
    ))}
  </Switch>
);
