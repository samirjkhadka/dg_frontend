// src/data/mockClientData.ts
export interface Client {
  name: string;
  logo: string; // path to logo in /public/images/clients/
  width?: number;
  height?: number;
}

export const mockClients: Client[] = [
  {
    name: "Nepal Stock Exchange",
    logo: "/images/clients/nepal-stock-exchange.png",
    width: 180,
  },
  {
    name: "Nepal Investment Mega Bank",
    logo: "/images/clients/nimb.png",
    width: 140,
  },
  {
    name: "Himalayan Bank",
    logo: "/images/clients/himalayan-bank.png",
    width: 160,
  },
  { name: "Nabil Bank", logo: "/images/clients/nabil.png", width: 120 },
  {
    name: "Global IME Bank",
    logo: "/images/clients/global-ime.png",
    width: 150,
  },
  { name: "NIC Asia Bank", logo: "/images/clients/nic-asia.png", width: 140 },
  {
    name: "Everest Bank",
    logo: "/images/clients/everest-bank.png",
    width: 130,
  },
  {
    name: "Laxmi Sunrise Bank",
    logo: "/images/clients/laxmi-sunrise.png",
    width: 160,
  },
  {
    name: "Siddhartha Bank",
    logo: "/images/clients/siddhartha.png",
    width: 140,
  },
  { name: "Prabhu Bank", logo: "/images/clients/prabhu.png", width: 130 },
  { name: "Civil Bank", logo: "/images/clients/civil-bank.png", width: 140 },
  {
    name: "Machhapuchhre Bank",
    logo: "/images/clients/machhapuchhre.png",
    width: 150,
  },
  // { name: "Kumari Bank", logo: "/images/clients/kumari.png", width: 130 },
  // { name: "Sanima Bank", logo: "/images/clients/sanima.png", width: 140 },
  // {
  //   name: "Century Commercial Bank",
  //   logo: "/images/clients/century.png",
  //   width: 160,
  // },
  // {
  //   name: "Mega Bank Nepal",
  //   logo: "/images/clients/mega-bank.png",
  //   width: 140,
  // },
  // {
  //   name: "Agricultural Development Bank",
  //   logo: "/images/clients/adbl.png",
  //   width: 170,
  // },
  // { name: "Nepal Bank Limited", logo: "/images/clients/nbl.png", width: 140 },
  // {
  //   name: "Rastriya Banijya Bank",
  //   logo: "/images/clients/rbb.png",
  //   width: 150,
  // },
  // {
  //   name: "Citizens Bank International",
  //   logo: "/images/clients/citizens.png",
  //   width: 160,
  // },
];
