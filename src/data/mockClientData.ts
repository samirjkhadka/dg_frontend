// src/data/mockClientData.ts
export interface Client {
  name: string;
  logo: string; // path to logo in /public/images/clients/
  width?: number;
  height?: number;
  isNew?: boolean;
}

export const mockClients: Client[] = [
  {
    name: "Nepal Stock House Pvt Limited",
    logo: "/images/clients/BN.14.png",
    width: 180,
    isNew: false,
  },
  {
    name: "RoadShow Securities",
    logo: "/images/clients/BN.92.png",
    width: 140,
    isNew: false,
  },
  {
    name: "Arun Securities",
    logo: "/images/clients/bn03.jpg",
    width: 140,
    isNew: false,
  },
  {
    name: "Opal Securities",
    logo: "/images/clients/bn04.jpg",
    width: 140,
    isNew: false,
  },
  {
    name: "Pragyan Securities",
    logo: "/images/clients/bn10.jpg",
    width: 140,
    isNew: false,
  },
  {
    name: "Swarnalaxmi Securities",
    logo: "/images/clients/bn37.jpg",
    width: 140,
    isNew: false,
  },
  {
    name: "Kalika Securities",
    logo: "/images/clients/bn46.jpg",
    width: 140,
    isNew: false,
  },

  {
    name: "NIMB Stock Markets Ltd",
    logo: "/images/clients/bn75.jpg",
    width: 140,
    isNew: false,
  },
  {
    name: "Himalayan Brokerage Company Ltd",
    logo: "/images/clients/bn63.jpg",
    width: 160,
    isNew: false,
  },
  {
    name: "Dynamic Securities",
    logo: "/images/clients/dynamic-logo-glow.png",
    width: 160,
    isNew: false,
  },

  {
    name: "Secured Securities",
    logo: "/images/clients/SecuredSec.png",
    width: 130,
    isNew: false,
  },
  
];
