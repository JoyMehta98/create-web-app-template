import { ROUTE_PATH } from "routes";
import sidebar from "locales/sidebar.json";
import {
  DashboardIcon,
  UserCircleIcon,
  ProceduresIcon,
  RoomServiceIcon,
  MenuBookIcon,
  RestaurantMenuIcon,
  BookIcon,
  UserLineIcon,
  UserSettingsIcon,
  AlarmIcon,
  SettingsIcon,
  SpaIcon,
  FlagIcon,
  SearchOutlinedIcon,
  GiftCardIcon
} from "core/icons";

const layoutSidebar = [
  {
    key: "1",
    icon: <DashboardIcon />,
    name: sidebar.dashboard,
    link: ROUTE_PATH.dashboard,
    paths: [ROUTE_PATH.dashboard]
  },
  {
    key: "2",
    icon: <UserCircleIcon />,
    name: sidebar.users,
    link: ROUTE_PATH.users,
    paths: [ROUTE_PATH.users]
  },
  {
    key: "3",
    icon: <ProceduresIcon />,
    name: sidebar.properties,
    link: ROUTE_PATH.properties,
    paths: [
      ROUTE_PATH.properties,
      ROUTE_PATH.addProperties,
      ROUTE_PATH.editProperties,
      ROUTE_PATH.viewStaffMembers
    ]
  },
  {
    key: "4",
    icon: <RoomServiceIcon />,
    name: sidebar.services,
    link: "",
    paths: [
      ROUTE_PATH.menuItem,
      ROUTE_PATH.diningOut,
      ROUTE_PATH.spaService,
      ROUTE_PATH.interestingPoints
    ],
    subMenu: [
      {
        key: sidebar.menuItem.toLowerCase(),
        icon: <MenuBookIcon />,
        link: ROUTE_PATH.menuItem,
        name: sidebar.menuItem,
        paths: [ROUTE_PATH.menuItem]
      },
      {
        key: sidebar.diningOut.toLowerCase(),
        icon: <RestaurantMenuIcon />,
        link: ROUTE_PATH.diningOut,
        name: sidebar.diningOut,
        paths: [
          ROUTE_PATH.diningOut,
          ROUTE_PATH.addRestaurant,
          ROUTE_PATH.editRestaurant
        ]
      },
      {
        key: sidebar.spaService.toLowerCase(),
        icon: <SpaIcon />,
        link: ROUTE_PATH.spaService,
        name: sidebar.spaService,
        paths: [ROUTE_PATH.spaService]
      },
      {
        key: sidebar.interestingPoints.toLowerCase(),
        icon: <FlagIcon />,
        link: ROUTE_PATH.interestingPoints,
        name: sidebar.interestingPoints,
        paths: [ROUTE_PATH.interestingPoints]
      }
    ]
  },

  {
    key: "5",
    icon: <BookIcon />,
    name: sidebar.bookings,
    link: ROUTE_PATH.bookings,
    paths: [ROUTE_PATH.bookings]
  },
  {
    key: "6",
    icon: <UserLineIcon />,
    name: sidebar.adminUsers,
    link: ROUTE_PATH.adminUsers,
    paths: [ROUTE_PATH.adminUsers]
  },
  {
    key: "7",
    icon: <AlarmIcon />,
    name: sidebar.pushNotifications,
    link: ROUTE_PATH.pushNotifications,
    paths: [
      ROUTE_PATH.pushNotifications,
      ROUTE_PATH.addPushNotifications,
      ROUTE_PATH.editPushNotification
    ]
  },
  {
    key: "8",
    icon: <SettingsIcon />,
    name: sidebar.settings,
    link: ROUTE_PATH.settings,
    paths: [ROUTE_PATH.settings]
  },
  {
    key: "9",
    icon: <UserSettingsIcon />,
    name: sidebar.masters,
    link: "",
    paths: [ROUTE_PATH.lookup],
    subMenu: [
      {
        key: sidebar.lookup.toLowerCase(),
        icon: <SearchOutlinedIcon />,
        link: ROUTE_PATH.lookup,
        name: sidebar.lookup,
        paths: [ROUTE_PATH.lookup]
      },
      {
        key: sidebar.amenities.toLowerCase(),
        icon: <GiftCardIcon />,
        link: ROUTE_PATH.amenities,
        name: sidebar.amenities,
        paths: [ROUTE_PATH.amenities]
      }
    ]
  }
];

export default layoutSidebar;
