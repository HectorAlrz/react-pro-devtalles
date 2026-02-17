import { lazy, JSX, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
import {
  DynamicForm,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from "../03-forms/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    ),
);
const Lazy2 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2"
    ),
);
const Lazy3 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3"
    ),
);

export const routes: Route[] = [
  {
    to: "/shopping",
    path: "/shopping",
    name: "Shopping Page",
    Component: ShoppingPage,
  },
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    name: "Lazy Layout - Dash",
    Component: LazyLayout,
  },
  {
    to: "/nolazy",
    path: "/nolazy",
    name: "No Lazy Page",
    Component: NoLazy,
  },
  {
    to: "/register",
    path: "/register",
    name: "Register Page",
    Component: RegisterPage,
  },
  {
    to: "/formik-basic",
    path: "/formik-basic",
    name: "Formik Basic Page",
    Component: FormikBasicPage,
  },
  {
    to: "/formik-yup",
    path: "/formik-yup",
    name: "Formik Yup Page",
    Component: FormikYupPage,
  },
  {
    to: "/formik-components",
    path: "/formik-components",
    name: "Formik Components Page",
    Component: FormikComponents,
  },
  {
    to: "/formik-abstractation",
    path: "/formik-abstractation",
    name: "Formik Abstractation Page",
    Component: FormikAbstraction,
  },
  {
    to: "/register-formik",
    path: "/register-formik",
    name: "Register Formik Page",
    Component: RegisterFormikPage,
  },
  {
    to: "/dynamic-form",
    path: "/dynamic-form",
    name: "Dynamic Form Page",
    Component: DynamicForm,
  },
];
