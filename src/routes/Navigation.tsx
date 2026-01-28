import { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import { routes } from "./routes";
import logo from "../logo.svg";

function Navigation() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="Logo" className="logo" />
            <ul>
              {routes.map((route) => {
                return (
                  <li key={route.to}>
                    <NavLink
                      to={route.to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {route.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ to, path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default Navigation;
