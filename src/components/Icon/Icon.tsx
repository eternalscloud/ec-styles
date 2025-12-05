import * as FaIcons from 'react-icons/fa';
import * as LuIcons from 'react-icons/lu';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as GrIcons from 'react-icons/gr';
import * as RiIcons from 'react-icons/ri';
import * as LiaIcons from 'react-icons/lia';
import * as IoIcons from 'react-icons/io';
import * as HiIcons from 'react-icons/hi2';
import * as TbIcons from 'react-icons/tb';
import * as Fa6Icons from 'react-icons/fa6';

import type { IconType } from 'react-icons';
import type { MouseEvent } from 'react';

export type IconLibrary = 'fa' | 'lu' | 'md' | 'bs' | 'ai' | 'cg' | 'gr' | 'ri' | 'lia' | 'io' | 'hi' | 'tb' | 'fa6';

interface IconProps {
  name: string;
  library: IconLibrary;
  className?: string;
  onClick?: (event: MouseEvent<SVGElement>) => void;
}

export default function Icon(icon: IconProps) {
  let IconComponent: IconType | undefined;
  if (icon.library === 'lu') {
    IconComponent = (LuIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'fa') {
    IconComponent = (FaIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'md') {
    IconComponent = (MdIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'bs') {
    IconComponent = (BsIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'ai') {
    IconComponent = (AiIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'cg') {
    IconComponent = (CgIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'gr') {
    IconComponent = (GrIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'ri') {
    IconComponent = (RiIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'lia') {
    IconComponent = (LiaIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'io') {
    IconComponent = (IoIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'hi') {
    IconComponent = (HiIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'tb') {
    IconComponent = (TbIcons as Record<string, IconType>)[icon.name];
  } else if (icon.library === 'fa6') {
    IconComponent = (Fa6Icons as Record<string, IconType>)[icon.name];
  }

  if (!IconComponent) {
    console.warn(`Icon not found: ${icon.library}.${icon.name}`);
    return null;
  }

  return getIcon(icon, IconComponent);
}

function getIcon(icon: IconProps, IconComponent: IconType) {
  return <IconComponent className={icon.className} onClick={icon.onClick} />;
}
