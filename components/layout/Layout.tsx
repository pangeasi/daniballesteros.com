import Header from "./Header";
import Head from "next/head";
import { motion } from "framer-motion";
import { LinkNav } from "../LinkNav";
import { Logo } from "../svgs/Logo";
import { Nest } from "../techs/Nest";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="z-10 bg-white relative">
        <main className="container mx-auto p-4">{children}</main>
      </div>
    </>
  );
};
