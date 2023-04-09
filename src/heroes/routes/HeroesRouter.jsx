import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage } from "../pages/MarvelPage";
import { DcPage } from "../pages/DcPage";
import { Navbar } from "../pages/Navbar";
import { HeroPage } from "../pages/HeroPage";
import { SearchBar } from "../pages/SearchBar";

export const HeroesRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/marvel"} />} />

        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchBar />} />
        <Route path="hero" element={<HeroPage />} />
      </Routes>
    </>
  );
};
