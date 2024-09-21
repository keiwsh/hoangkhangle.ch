import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "hoang khang 'kei' lê",
  logo: "/logo.png",
  email: "hoang-khang.le@pm.me",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "about",
    url: "/about",
  },
  {
    title: "projects",
    url: "/projects",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "github",
    url: "https://github.com/keiwsh",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "mail",
    url: "mailto:hoang-khang.le@pm.me",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "kei | hoang khang lê",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  role: "it-student",
  description: "hey! i'm kei - student from switzerland.",
  socialLinks: socialLinks,
  links: [
    {
      title: "about me",
      url: "/about",
    },
    {
      title: "my projects",
      url: "/projects",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "about | kei",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "03.02.2001",
  about: {
    description: `
hi, i'm hoang khang lê, but you can call me kei. i'm 23 years old and currently an it student.
<br/><br/>
in my free time, i enjoy collecting perfumes and hitting the gym. <br/><br/>
i'm also a huge fan of music, especially artists like frank ocean and joji.`, // Markdown is supported
    image_l: {
      url: "/yourname.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/frank.avif",
      alt: "Right Picture",
    },
  },
  connect: {
    description: `i'm always interested in learning new things. feel free to connect.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "projects | kei",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "all the projects worth mentioning.",
  projects: [
    {
      title: "No History Tracker",
      description:
        "Extension to disable the tracking of URLs of browser histories for Firefox. ",
      year: "2024",
      url: "https://addons.mozilla.org/en-GB/firefox/addon/no-history-tracker/",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "blog | kei",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
