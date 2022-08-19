import {
  ADMIN_ROUTE,
  BOOK_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  ORDER_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
  WISHLIST_ROUTE,
} from "./utils/consts";
import AdminPage from "./pages/AdminPage";
import Auth from "./pages/Auth";
import BookPage from "./pages/BookPage";
import MainPage from "./pages/MainPage";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: ORDER_ROUTE,
    Component: Order,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: BOOK_ROUTE + "/:id",
    Component: BookPage,
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile,
  },
  {
    path: WISHLIST_ROUTE,
    Component: Wishlist,
  },
];
