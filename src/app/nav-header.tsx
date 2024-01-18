import { PrimaryButton } from "@/components/common/button/primary-button";
import "@/components/template/layout.css";
import { themeList } from "@/constant/theme";
import { useThemeContext } from "@/context/theme-context";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";
import ReactToPrint from "react-to-print";

const Header = () => {
  const { theme, setTheme, myRef } = useThemeContext();
  const pathName = usePathname();
  const router = useRouter();

  // important:  these values for tailwindcss specific as tailwind doesnt support adding dynamic colors, this helps in adding the dynamic color
  const teal = "bg-teal-500";
  const orange = "bg-orange-500";
  const red = "bg-red-500";
  const indigo = "bg-indigo-500";
  const green = "bg-green-500";
  // important

  const changeTheme = (event: MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    const theme = currentTarget.getAttribute("data-theme");
    if (theme) setTheme(theme);
  };

  return (
    <nav
      className={`flex items-center justify-between flex-wrap bg-${theme}-500 p-6 mb-2 b`}
    >
      {pathName === "/preview" ? (
        <>
          <div className="flex justify-between items-center w-full">
            <PrimaryButton
              className="text-white bg-transparent border border-white"
              onClick={() => router.push("/")}
            >
              Go to form !
            </PrimaryButton>
            <div className="flex items-center gap-3">
              <ReactToPrint
                trigger={() => (
                  <PrimaryButton
                    className="text-white bg-transparent border border-white"
                    onClick={() => {}}
                  >
                    Print resume!
                  </PrimaryButton>
                )}
                content={() => myRef?.current}
              />

              <div className="text-sm px-4 py-2 leading-none bg-white rounded-full ml-auto">
                {themeList.map((t, k) => (
                  <button
                    key={k}
                    data-theme={t}
                    className={`theme-button h-5 w-5 rounded-full focus:outline-none bg-${t}-500 ${
                      theme === t ? " is-active" : ""
                    }`}
                    onClick={changeTheme}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center w-full">
          <h1 className="text-xl font-semibold">
            Fill all the information to generate the resume
          </h1>
        </div>
      )}
    </nav>
  );
};

export default Header;
