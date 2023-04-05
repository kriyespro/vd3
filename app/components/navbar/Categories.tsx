'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Vesu',
    icon: GiCastle,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Adajan',
    icon: GiCastle,
    description: 'This property is has windmills!',
  },
  {
    label: 'VIP Road',
    icon: GiCastle,
    description: 'This property is modern!'
  },
  {
    label: 'Ring Road',
    icon: GiCastle,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Palanpur',
    icon: GiCastle,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Udhana',
    icon: GiCastle,
    description: 'This property is on an island!'
  },
  {
    label: 'Sachin',
    icon: GiCastle,
    description: 'This property is near a lake!'
  },
  {
    label: 'Olpad',
    icon: GiCastle,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Pal',
    icon: GiCastle,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Patiya',
    icon: GiCastle,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'Althan',
    icon: GiCastle,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Jahangirpura',
    icon: GiCastle,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Jahangirbad',
    icon: GiCastle,
    description: 'This property is in the desert!'
  },
  {
    label: 'Piplod',
    icon: GiCastle,
    description: 'This property is in a barn!'
  },
  {
    label: 'Varachha',
    icon: GiCastle,
    description: 'This property is brand new and luxurious!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
          shadow-sm
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;