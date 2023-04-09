import {  Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/components/LoginPage";
import { HeroesRouter } from "../heroes/routes/HeroesRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={ <HeroesRouter/>} />
      </Routes>
    </>
  );
};
