import { ReactComponent as UserAccount } from "assets/icons/features/user-account.svg";
import { ReactComponent as Arena } from "assets/icons/features/arena.svg";
import { ReactComponent as Alliance } from "assets/icons/features/alliance.svg";
import { ReactComponent as Space } from "assets/icons/features/space.svg";
import { ReactComponent as MarketPlace } from "assets/icons/features/marketplace.svg";
import { ReactComponent as Wallet } from "assets/icons/features/wallet.svg";

export const zeeroZoneBenefits = [
  "Gain an amazing space experience",
  "Reliable and stable with 24/7 uptime",
  "Digital asset ownership is fully secure",
  "The wallet is fully secure by blockchain",
  "The game is fair and transparent",
  "The arena feature allows players to connect and network",
  "Trade NFTs and digital assets easily on the Zeerozone marketplace",
  "Take ownership of assets like spaceships, planets, and artefacts by completing tasks",
  "Ability to exchange digital assets for a valuable utility token, $ZEZO.",
];

const featureHeaderClass = "font-header text-white text-[32px] my-[29px]";
const featureDescriptionClass = "font-zona-regular text-white";
export const getFeature = (icon, header, description) => ({
  icon,
  header: <h1 className={featureHeaderClass}>{header}</h1>,
  description,
});

export const bolden = (text) => <span className="bold">{text}</span>;

export const zeerozoneFeaturesConstants = [
  {
    header: "User Account",
    icon: <UserAccount />,
    description: (
      <p className={featureDescriptionClass}>
        To play the <span className="bold">Zeerozone game</span>, a potential
        player is required to register a user account.
      </p>
    ),
  },
  {
    header: "Arena",
    icon: <Arena />,
    description: (
      <p className={featureDescriptionClass}>
        This is a dedicated place in space for players to connect and network
        with other players. It is one of the features that make the Zeerozone
        game <span className="bold">unique</span>. In the arena, players can
        form an alliance; this alliance will facilitate teamwork towards
        completing tasks in space.
      </p>
    ),
  },
  {
    header: "Alliance",
    icon: <Alliance />,
    description: (
      <p className={featureDescriptionClass}>
        In the Zeerozone game, <span className="bold">‘alliance’</span> is the
        term used for a group of players that have agreed to work together on
        different {bolden("tasks in space")}. Any digital asset gotten by the
        alliance belongs to the alliance as a whole. All members need to decide
        through a vote whether to sell the asset for {bolden("$ZEZO tokens")} or
        keep the asset.
      </p>
    ),
  },
  {
    header: "Space",
    icon: <Space />,
    description: (
      <p className={featureDescriptionClass}>
        This is the most important feature of the {bolden("Zeerozone game.")}{" "}
        Here, players will see the arena where they can network and form an
        alliance with other players. Also, players can explore the space as a
        whole and carry out different tasks. Some of these tasks include
        building spaceships, searching for artefacts and other resources in
        space, competing for planets, and {bolden("exploring the galaxies.")}
      </p>
    ),
  },
  {
    header: "Marketplace",
    icon: <MarketPlace />,
    description: (
      <p className={featureDescriptionClass}>
        On the marketplace, players can buy or sell artefacts, spaceships and
        other digital assets in exchange for {bolden("$ZEZO")} tokens. Assets
        minted into NFTs can also be put up for sale on the marketplace.
      </p>
    ),
  },
  {
    header: "Wallet",
    icon: <Wallet />,
    description: (
      <p className={featureDescriptionClass}>
        Players can deposit {bolden("$ZEZO")} tokens and save digital assets in
        Zeerozone’s secure wallet. They can also send and receive crypto tokens
        via the wallet. Every player in the Zeerozone game has a unique wallet
        ID.
      </p>
    ),
  },
];

export const ZeeroZoneFeatures = zeerozoneFeaturesConstants.map((feature) =>
  getFeature(feature.icon, feature.header, feature.description)
);

export const roadmaps = [
  {
    timeline: "Q2 - Q3 2022",
    header: "Conceptualization",
    paths: [
      { text: "Formation of the Zeerozone team", passed: true },
      { text: "Idea Conceptualization ", passed: true },
      { text: "Creation of project architecture and concept", passed: false },
    ],
  },
  {
    timeline: "Q4 2022 - Q1 2023",
    header: "Launch Version 1.0",
    paths: [
      { text: "Creation of game demo", passed: false },
      { text: <span>{bolden("$ZEZO")} token release</span>, passed: false },
      { text: "Create the first version of the website", passed: false },
      {
        text: (
          <span>Launch the {bolden("mobile app")} version of the game</span>
        ),
        passed: false,
      },
      { text: "Launch of the Zeerozone Marketplace", passed: false },
      {
        text: "Release a better version of the game and launch the community feature",
        passed: false,
      },
    ],
  },
  {
    timeline: "Q2 - Q3 2023",
    header: "Launch Version 2.0",
    paths: [
      {
        text: "Launch an improved version of the game with all features proven and tested",
        passed: false,
      },
    ],
  },
];

export const faqs = [
  {
    question: "What is Zeerozone?",
    answer:
      "Zeerozone is a blockchain-based online game that empowers players to explore space, take ownership of the planets, and navigate the galaxies.",
  },
  {
    question: "What is an alliance?",
    answer:
      "Zeerozone is a blockchain-based online game that empowers players to explore space, take ownership of the planets, and navigate the galaxies.",
  },
  {
    question: "How do I join Zeerozone?",
    answer:
      "Zeerozone is a blockchain-based online game that empowers players to explore space, take ownership of the planets, and navigate the galaxies.",
  },
  {
    question: "On what blockchain network is Zeerozone built?",
    answer:
      "Zeerozone is a blockchain-based online game that empowers players to explore space, take ownership of the planets, and navigate the galaxies.",
  },
  {
    question: "What is the ARENA?",
    answer:
      "Zeerozone is a blockchain-based online game that empowers players to explore space, take ownership of the planets, and navigate the galaxies.",
  },
  {
    question: "What will I gain from the Zeerozone game?",
    answer:
      "Zeerozone is a blockchain-based online game that empowers players to explore space, take ownership of the planets, and navigate the galaxies.",
  },
  {
    question: "What is the $ZEZO token?",
    answer:
      "Zeerozone is a blockchain-based online game that empowers players to explore space, take ownership of the planets, and navigate the galaxies.",
  },
  {
    question: "How do I know more about the Zeerozone project?",
    answer:
      "Zeerozone is a blockchain-based online game that empowers players to explore space, take ownership of the planets, and navigate the galaxies.",
  },
];
