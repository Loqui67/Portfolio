import GroupIcon from "@mui/icons-material/Group";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import EventIcon from "@mui/icons-material/Event";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SecurityIcon from "@mui/icons-material/Security";
import SchoolIcon from "@mui/icons-material/School";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import StyleIcon from "@mui/icons-material/Style";
import WebIcon from "@mui/icons-material/Web";
import ComputerIcon from "@mui/icons-material/Computer";
import ExtensionIcon from "@mui/icons-material/Extension";
import StorageIcon from "@mui/icons-material/Storage";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import DataObjectIcon from "@mui/icons-material/DataObject";

import { t } from "@lingui/macro";

import { getRandomColor } from "./colorPalette";

const rawSoftskills = [
  {
    title: () => t`Communication`,
    icon: <GroupIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Travail d'équipe`,
    icon: <GroupIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Créativité`,
    icon: <LightbulbIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Rigueur`,
    icon: <AssignmentTurnedInIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Autonomie`,
    icon: <PersonIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Curiosité`,
    icon: <SearchIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Adaptabilité`,
    icon: <SwapHorizIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Sens de l'organisation`,
    icon: <EventIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Sens de l'initiative`,
    icon: <FlashOnIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Sens de la responsabilité`,
    icon: <SecurityIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Sens de la pédagogie`,
    icon: <SchoolIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Sens de l'analyse`,
    icon: <ShowChartIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Sens de la gestion de projet`,
    icon: <DnsOutlinedIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Sens de la gestion de stress`,
    icon: <FavoriteIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`Sens de la gestion de temps`,
    icon: <ScheduleIcon style={{ color: getRandomColor() }} />,
  },
];

const rawHardskills = [
  {
    title: "HTML",
    icon: <CodeIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "CSS",
    icon: <StyleIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "JavaScript",
    icon: <LanguageIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "TypeScript",
    icon: <CodeIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "React",
    icon: <WebIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "VueJS",
    icon: <WebIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "Angular",
    icon: <WebIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "NodeJS",
    icon: <ComputerIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "Express",
    icon: <ExtensionIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "C#",
    icon: <DeveloperBoardIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "Java",
    icon: <LanguageIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "Python",
    icon: <CodeIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "PHP",
    icon: <WebAssetIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "C++",
    icon: <CodeIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => t`réseau`,
    icon: <SettingsEthernetIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: () => `${t`Système d'informations`} / Active Directory, VPN, GPO`,
    icon: <SettingsApplicationsIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "Big Data / Talend, Hadoop, Hive, Power BI",
    icon: <DataObjectIcon style={{ color: getRandomColor() }} />,
  },
  {
    title: "SQL, NoSQL / MongoDB, MySQL, Postgre, SQL Server",
    icon: <StorageIcon style={{ color: getRandomColor() }} />,
  },
];

export const softskills = rawSoftskills.map((skill, index) => ({
  id: index.toString(),
  ...skill,
}));

export const hardskills = rawHardskills.map((skill, index) => ({
  id: (index + softskills.length).toString(),
  ...skill,
}));

export const isValidId = (id) => {
  return id >= 0 && id < softskills.length + hardskills.length;
};
