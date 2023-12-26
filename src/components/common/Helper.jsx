import { TwitchIcon, DiscordIcon, GoogleIcon, TeamIcon, CompetitionIcon, MegaPhoneIcon, TrophyIcon, SettingIcon, EditProfileIcon, LockIcon, CompeteIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from "./Icons";

// NAVLINK DATA START
export const navLinks = [
    {
        navLink: "compete",
        url: "/",
    },
    {
        navLink: "watch",
        url: "/watch",
    },
    {
        navLink: "news",
        url: "/news",
    },
    {
        navLink: "stats",
        url: "/stats",
    },
];
// NAVLINK DATA END
// LOGIN DATA START
export const loginIconData = [
    {
        icon: <GoogleIcon />,
        url: "https://www.google.com/",
    },
    {
        icon: <DiscordIcon fill="white" />,
        url: "https://discord.com/",
    },
    {
        icon: <TwitchIcon fill="white" />,
        url: "https://www.google.com/",
    },
];
// LOGIN DATA END
// DEPOSIT DATA START
export const depositData = [
    {
        title: "10,00",
        button: "deposit"
    },
    {
        title: "25,00",
        button: "deposit",
        style: "mt-4",
    },
    {
        title: "50,00",
        button: "deposit",
        style: "mt-4",
    },
    {
        title: "75,00",
        button: "deposit",
        style: "mt-4",
    },
    {
        title: "100,00",
        button: "deposit",
        style: "mt-4",
    },
];
// DEPOSIT DATA END
// NOTIFICATION DATA START
export const notificationsData = [
    {
        icon: <TeamIcon fill="#4D545E" />,
        title: <><span className="text-green-yellow">arochinski</span> invited you to join the team.</>,
        time: "2 hour ago",
    },
    {
        icon: <CompetitionIcon />,
        title: <><span className="text-green-yellow">Your tournament</span> starts in 1 hour, stay tuned.</>,
        time: "37 min ago",
    },
    {
        icon: <CompetitionIcon />,
        title: <>The tournament you are participating in has changed its date or time. <span className="text-green-yellow">Check it out now.</span></>,
        time: "37 min ago",
    },
    {
        icon: <MegaPhoneIcon />,
        title: <>New tournaments available. <span className="text-green-yellow"> See now.</span></>,
        time: "37 min ago",
    },
    {
        icon: <TrophyIcon />,
        title: <>Congratulations on your <span className="text-green-yellow">tournament victory.</span> Your prize will be available in the next few hours.</>,
        time: "37 min ago",
    },
];
// NOTIFICATION DATA END
// LOGIN DATA START
export const loginData = [
    {
        icon: <SettingIcon />,
        title: "Settings",
        url: "/settings",
    },
    {
        icon: <EditProfileIcon />,
        title: "Edit Profile",
        url: "/settings",
    },
    {
        icon: <LockIcon />,
        title: "Security",
        url: "/settings",
    },
    {
        icon: <CompeteIcon />,
        title: "My games",
        url: "/settings",
    },
];
// LOGIN DATA END
// LOGIN FORM DATA START
export const loginFormData = [
    {
        icon: <TwitterIcon fill="white" />,
        title: "Twitter",
        style: "md:pe-3",
        description: "accounttwitter",
        placeholder: "Your social username here",
    },
    {
        icon: <TwitchIcon fill="white" />,
        title: "Twitch",
        style: "md:ps-3",
        description: "accounttwitch",
        placeholder: "Your social username here",
    },
    {
        icon: <YoutubeIcon fill="white" />,
        title: "Youtube",
        style: "md:pe-3",
        description: "accountyoutube",
        placeholder: "Your social username here",
    },
    {
        icon: <InstagramIcon fill="white" />,
        title: "Instagram",
        style: "md:ps-3",
        description: "accountinstagram",
        placeholder: "Your social username here",
    },
    {
        icon: <DiscordIcon fill="white" />,
        title: "Discrod",
        style: "md:pe-3",
        description: "accountdiscrod",
        placeholder: "Your social username here",
    },
];
// LOGIN FORM DATA END

