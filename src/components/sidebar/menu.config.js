import {
  HomeIcon,
  FilmIcon,
  IdentificationIcon,
  VideoCameraIcon,
  BuildingLibraryIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/solid';

export const MENU_ITEMS = [
  { label: 'Home', to: '/', Icon: HomeIcon, end: true },
  { label: 'Movies', to: '/movies', Icon: FilmIcon },
  { label: 'Actors', to: '/actors', Icon: IdentificationIcon },
  { label: 'Directors', to: '/directors', Icon: VideoCameraIcon },
  { label: 'Studios', to: '/studios', Icon: BuildingLibraryIcon },
];
