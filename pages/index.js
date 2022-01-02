import Head from "next/head";
import styled from "styled-components";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useState, useEffect } from "react";

const darkModeAtom = atomWithStorage("theme", "light");

export default function Home() {
  const [theme, setTheme] = useAtom(darkModeAtom);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = (val) => {
    setTheme(val);
  };
  if (!mounted) return null;
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen py-2 ${
        theme === "primary"
          ? "theme-primary"
          : theme === "swiss"
          ? "theme-swiss"
          : "theme-neon"
      }`}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full">
        <h1 className="text-white text-5xl mb-4">
          Next JS with tailwind, scss and darkmode
        </h1>
        <div className="flex">
          <StyledButton onClick={() => handleThemeToggle("primary")}>
            Primary Theme
          </StyledButton>
          <StyledButton onClick={() => handleThemeToggle("swiss")}>
            Swiss Theme
          </StyledButton>
          <StyledButton onClick={() => handleThemeToggle("neon")}>
            Neon Theme
          </StyledButton>
        </div>
        <div className="home_user_name">
          <p className="dom">pink</p>
        </div>
        <div className="home_user_name">
          <p className="dom">pink</p>
        </div>
        <div className="home_user_name">
          <p className="dom">pink</p>
        </div>
      </main>
    </div>
  );
}

const StyledButton = styled.button`
  background: red;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid #000;
  display: inline;
  // margin-right: 10px;
`;
