// src/data/mockClientData.ts
export interface Client {
  name: string;
  logo: string; // path to logo in /public/images/clients/
  width?: number;
  height?: number;
}

export const mockClients: Client[] = [
  {
    name: "Nepal Stock House Pvt Limited",
    logo: "/images/clients/BN.14.png",
    width: 180,
  },
  {
    name: "RoadShow Securities",
    logo: "/images/clients/BN.92.png",
    width: 140,
  },
  {
    name: "Arun Securities",
    logo: "/images/clients/bn03.jpg",
    width: 140,
  },
  {
    name: "Opal Securities",
    logo: "/images/clients/bn04.jpg",
    width: 140,
  },
  {
    name: "Pragyan Securities",
    logo: "/images/clients/bn10.jpg",
    width: 140,
  },
  {
    name: "Swarnalaxmi Securities",
    logo: "/images/clients/bn37.jpg",
    width: 140,
  },
  {
    name: "Kalika Securities",
    logo: "/images/clients/bn46.jpg",
    width: 140,
  },

  {
    name: "NIMB Stock Markets Ltd",
    logo: "/images/clients/bn75.jpg",
    width: 140,
  },
  {
    name: "Himalayan Brokerage Company Ltd",
    logo: "/images/clients/bn63.jpg",
    width: 160,
  },
  {
    name: "Dynamic Securities",
    logo: "/images/clients/dynamic-logo-glow.png",
    width: 160,
  },

  {
    name: "Kathmandu Finance",
    logo: "/images/clients/nic-asia.png",
    width: 140,
  },
  {
    name: "Everest Securities",
    logo: "/images/clients/everest.png",
    width: 130,
  },
  {
    name: "Secured Securities",
    logo: "/images/clients/SecuredSec.png",
    width: 130,
  },
  {
    name: "Sagarmatha Trading",
    logo: "/images/clients/Sagarmatha.png",
    width: 130,
  },
];
