import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";

import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HederLayout";
import { homeRoutes } from "./homeRouter";
import { LoginUserProvider } from "../providers/LoginUserContext";

export const Router = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/home"}>
          <Route
            index={true}
            element={
              <HeaderLayout>
                <Home />
              </HeaderLayout>
            }
          />
          {homeRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<HeaderLayout>{route.element}</HeaderLayout>}
            ></Route>
          ))}
        </Route>
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
