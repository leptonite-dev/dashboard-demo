import logo from "./assets/logo.png";
import collapseIcon from "./assets/collapse.png";
import activityIcon from "./assets/activity.png";
import categoryIcon from "./assets/category.png";
import folderIcon from "./assets/folder.png";
import walletIcon from "./assets/wallet.png";
import passwordIcon from "./assets/password.png";
import chevronUpIcon from "./assets/chevron-up.svg";
import { useState } from "react";
import clsx from "clsx";

const DesktopNav = () => {
  const [expandDR, setExpandDR] = useState(false);

  return (
    <nav className="hidden lg:flex h-screen border-r bg-white w-80 overflow-hidden p-6">
      <div className="shrink-0 w-full">
        <img src={logo} alt="brand logo" />

        <div className="mt-12 text-xl flex justify-between items-center">
          MENU{" "}
          <button
            className="w-10 h-10 rounded-md flex justify-center items-center"
            style={{ backgroundColor: "#DBA53B" }}
          >
            <img className="w-5 h-5" src={collapseIcon} alt="" />
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-1">
          <div>
            <button className="flex justify-between items-center p-4 w-full">
              <div className="flex gap-2 items-center">
                <img className="w-5 h-5" src={categoryIcon} alt="" /> Dashboard
              </div>
            </button>
          </div>

          <div>
            <button
              className="flex justify-between items-center p-4 bg-orange-300 rounded-lg w-full"
              onClick={() => setExpandDR(!expandDR)}
            >
              <div className="flex gap-2 items-center">
                <img className="w-5 h-5" src={activityIcon} alt="" /> Daily
                Reports
              </div>
              <img src={chevronUpIcon} alt="" />
            </button>
            <div
              className={clsx(
                "flex flex-col pl-8 overflow-hidden",
                expandDR ? "h-auto" : "h-0"
              )}
            >
              <button className="p-2 rounded-lg hover:text-orange-300 text-left">
                Pretty Cash
              </button>
              <button className="p-2 rounded-lg hover:text-orange-300 text-left">
                Data Transfer
              </button>
              <button className="p-2 rounded-lg hover:text-orange-300 text-left">
                Manual MC Transaction
              </button>
              <button className="p-2 rounded-lg hover:text-orange-300 text-left">
                Financial
              </button>
              <button className="p-2 rounded-lg hover:text-orange-300 text-left">
                Final Report
              </button>
            </div>
          </div>

          <div>
            <button className="flex justify-between items-center p-4 w-full">
              <div className="flex gap-2 items-center">
                <img className="w-5 h-5" src={folderIcon} alt="" /> Data Master
              </div>
            </button>
          </div>

          <div>
            <button className="flex justify-between items-center p-4 w-full">
              <div className="flex gap-2 items-center">
                <img className="w-5 h-5" src={walletIcon} alt="" /> Reports
              </div>
            </button>
          </div>

          <div>
            <button className="flex justify-between items-center p-4 w-full">
              <div className="flex gap-2 items-center">
                <img className="w-5 h-5" src={passwordIcon} alt="" /> Utility
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
