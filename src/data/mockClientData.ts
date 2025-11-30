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
    logo: "/images/clients/NSE.png",
    width: 180,
  },
  {
    name: "Nepal Investment Mega Bank",
    logo: "/images/clients/NIMB.png",
    width: 140,
  },
  {
    name: "Himalayan Capital",
    logo: "/images/clients/HimCapital.png",
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
