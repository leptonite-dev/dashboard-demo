import { Fragment, useState } from "react";
import notificationIcon from "./assets/Notification.png";
import profileIcon from "./assets/Profile.png";
import dateIcon from "./assets/date.png";
import noteIcon from "./assets/note.png";
import searchIcon from "./assets/search.png";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import collapseIcon from "./assets/collapse.png";

const data = [
  {
    no: 1,
    transactions: "Jual",
    description: "Dari Kas",
    account: "Kas",
    customerName: "Supri",
    out: "USD 1,200",
    in: "-",
    balance: "USD 12,000",
  },
  {
    no: 2,
    transactions: "Jual",
    description: "Dari Kas",
    account: "Kas",
    customerName: "Supri",
    out: "USD 1,200",
    in: "-",
    balance: "USD 12,000",
  },
  {
    no: 3,
    transactions: "Jual",
    description: "Dari Kas",
    account: "Kas",
    customerName: "Supri",
    out: "USD 1,200",
    in: "-",
    balance: "USD 12,000",
  },
  {
    no: 4,
    transactions: "Jual",
    description: "Dari Kas",
    account: "Kas",
    customerName: "Supri",
    out: "USD 1,200",
    in: "-",
    balance: "USD 12,000",
  },
  {
    no: 5,
    transactions: "Jual",
    description: "Dari Kas",
    account: "Kas",
    customerName: "Supri",
    out: "USD 1,200",
    in: "-",
    balance: "USD 12,000",
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full">
      <DesktopNav />
      <MobileNav isOpen={isOpen} handleClose={() => setIsOpen(false)} />

      <div className="flex-1 w-full">
        <header className="flex w-full justify-between px-6 py-4 border-b">
          <button
            onClick={() => setIsOpen(true)}
            className="w-10 h-10 rounded-md flex justify-center items-center lg:hidden"
            style={{ backgroundColor: "#DBA53B" }}
          >
            <img className="rotate-180" src={collapseIcon} alt="" />
          </button>

          <div>
            <h1 className="font-medium text-xl lg:text-3xl">Daily Reports</h1>
            <p className="text-lg" style={{ color: "#CA9937" }}>
              Pretty Cash
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-lg">
              <img src={notificationIcon} alt="" />
            </button>
            <button className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-lg">
              <img src={profileIcon} alt="" />
            </button>
          </div>
        </header>

        <main className="mt-8 p-4 overflow-hidden">
          <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-4">
            <div className="border rounded-xl px-5 py-4 bg-gray-50 flex gap-6 w-full lg:w-auto">
              <img className="w-12 h-12" src={dateIcon} alt="" />
              <div>
                <p className="text-sm text-gray-400">TODAY&apos;S DATE</p>
                <p className="font-bold">4 Desember 2023</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="border rounded-lg flex px-3 py-2 bg-gray-50 items-center gap-4 w-96">
                <img className="w-4 h-4" src={searchIcon} alt="" />
                <input
                  className="focus:outline-none bg-inherit flex-1"
                  type="text"
                  placeholder="Search customer"
                />
              </div>
              <div className="flex gap-4">
                <button className="bg-yellow-200 px-4 py-2 rounded-md text-yellow-900 font-medium text-sm grow">
                  New Data
                </button>
                <button className="bg-blue-200 px-4 py-2 rounded-md text-blue-900 font-medium text-sm grow">
                  Export
                </button>
              </div>
            </div>
          </div>

          <div className="border mt-4 rounded-lg p-5">
            <div className="flex gap-6">
              <img className="w-12 h-12" src={noteIcon} alt="" />
              <div>
                <p className="text-sm text-gray-400">DETAILED INFORMATION</p>
                <p className="font-bold">Large Cash</p>
              </div>
            </div>

            <div className="overflow-auto mt-5">
              <table className="w-full" style={{ minWidth: "50rem" }}>
                <tbody>
                  <tr className="h-16">
                    <th className="w-14 bg-gray-100 rounded-s-lg">No</th>
                    <th className="bg-gray-100 ">Transactions</th>
                    <th className="bg-gray-100 ">Description</th>
                    <th className="bg-gray-100 ">Account</th>
                    <th className="bg-gray-100 ">Customer Name</th>
                    <th className="bg-gray-100 ">Out</th>
                    <th className="bg-gray-100 ">In</th>
                    <th className="bg-gray-100 ">Balance</th>
                    <th className="bg-gray-100 rounded-e-lg">Action</th>
                  </tr>

                  {data.map((item) => (
                    <Fragment key={item.no}>
                      <tr className="h-4"></tr>
                      <tr className="h-16">
                        <td className="text-center bg-yellow-50 rounded-s-lg">
                          {item.no}
                        </td>
                        <td className="bg-yellow-50">{item.transactions}</td>
                        <td className="bg-yellow-50">{item.description}</td>
                        <td className="bg-yellow-50">{item.account}</td>
                        <td className="bg-yellow-50">{item.customerName}</td>
                        <td className="bg-yellow-50">{item.out}</td>
                        <td className="bg-yellow-50">{item.in}</td>
                        <td className="bg-yellow-50">{item.balance}</td>
                        <td className="bg-yellow-50 rounded-e-lg">Action</td>
                      </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
