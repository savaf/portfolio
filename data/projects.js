// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.
import { v4 as uuid } from "uuid";

const projects = [
  {
    id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
    title: "Google Health Platform",
    category: "Web Application",
    img: "/images/projects/web-project-2.jpg",
    publishDate: "Nov 04, 2021",
    tag: "UI / Frontend",
    clientTitle: "About Client",
    objectivesTitle: "Objective",
    objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    techTitle: "Tools & Technologies",
    detailsTitle: "Challenge",
    socialTitle: "Share This",
    projectImages: [
      {
        id: uuid(),
        title: "Uber Project Management UI",
        img: "/images/projects/ui-project-1.jpg",
      },
      {
        id: uuid(),
        title: "Uber Project Management UI",
        img: "/images/projects/web-project-1.jpg",
      },
      {
        id: uuid(),
        title: "Uber Project Management UI",
        img: "/images/projects/web-project-2.jpg",
      },
    ],
    companyInfos: [
      {
        id: uuid(),
        title: "Name",
        details: "Company Ltd",
      },
      {
        id: uuid(),
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: uuid(),
        title: "Website",
        details: "https://company.com",
      },
      {
        id: uuid(),
        title: "Phone",
        details: "555 8888 888",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Nuxt.js", "TailwindCSS", "AdobeXD"],
    projectDetails: [
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
    ],
    socialSharings: [
      {
        id: uuid(),
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/realstoman",
      },
      {
        id: uuid(),
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/in/realstoman",
      },
      {
        id: uuid(),
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com",
      },
      {
        id: uuid(),
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com",
      },
    ],
  },
  {
    id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
    title: "Phoenix Digital Agency",
    category: "Mobile Application",
    img: "/images/projects/mobile-project-2.jpg",
    publishDate: "Nov 04, 2021",
    tag: "UI / Frontend",
    clientTitle: "About Client",
    objectivesTitle: "Objective",
    objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    techTitle: "Tools & Technologies",
    detailsTitle: "Challenge",
    socialTitle: "Share This",
    projectImages: [
      {
        id: uuid(),
        title: "Phoenix Digital Agency",
        img: "/images/projects/mobile-project-1.jpg",
      },
      {
        id: uuid(),
        title: "Phoenix Digital Agency",
        img: "/images/projects/web-project-2.jpg",
      },
      {
        id: uuid(),
        title: "Phoenix Digital Agency",
        img: "/images/projects/mobile-project-2.jpg",
      },
    ],
    companyInfos: [
      {
        id: uuid(),
        title: "Name",
        details: "Company Ltd",
      },
      {
        id: uuid(),
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: uuid(),
        title: "Website",
        details: "https://company.com",
      },
      {
        id: uuid(),
        title: "Phone",
        details: "555 8888 888",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Nuxt.js", "TailwindCSS", "AdobeXD"],
    projectDetails: [
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
    ],
    socialSharings: [
      {
        id: uuid(),
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/realstoman",
      },
      {
        id: uuid(),
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/in/realstoman",
      },
      {
        id: uuid(),
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com",
      },
      {
        id: uuid(),
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com",
      },
    ],
  },
  {
    id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
    title: "Project Management UI",
    category: "UI/UX Design",
    img: "/images/projects/ui-project-1.jpg",
    publishDate: "Nov 04, 2021",
    tag: "UI / Frontend",
    clientTitle: "About Client",
    objectivesTitle: "Objective",
    objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    techTitle: "Tools & Technologies",
    detailsTitle: "Challenge",
    socialTitle: "Share This",
    projectImages: [
      {
        id: uuid(),
        title: "Project Management UI",
        img: "/images/projects/mobile-project-1.jpg",
      },
      {
        id: uuid(),
        title: "Project Management UI",
        img: "/images/projects/web-project-2.jpg",
      },
      {
        id: uuid(),
        title: "Project Management UI",
        img: "/images/projects/mobile-project-2.jpg",
      },
    ],
    companyInfos: [
      {
        id: uuid(),
        title: "Name",
        details: "Company Ltd",
      },
      {
        id: uuid(),
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: uuid(),
        title: "Website",
        details: "https://company.com",
      },
      {
        id: uuid(),
        title: "Phone",
        details: "555 8888 888",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Nuxt.js", "TailwindCSS", "AdobeXD"],
    projectDetails: [
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
    ],
    socialSharings: [
      {
        id: uuid(),
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/realstoman",
      },
      {
        id: uuid(),
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/in/realstoman",
      },
      {
        id: uuid(),
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com",
      },
      {
        id: uuid(),
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com",
      },
    ],
  },
  {
    id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
    title: "Cloud Storage Platform",
    category: "UI/UX Design",
    img: "/images/projects/ui-project-2.jpg",
    publishDate: "Nov 04, 2021",
    tag: "Web / Frontend",
    clientTitle: "About Client",
    objectivesTitle: "Objective",
    objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    techTitle: "Tools & Technologies",
    detailsTitle: "Challenge",
    socialTitle: "Share This",
    projectImages: [
      {
        id: uuid(),
        title: "Cloud Storage Platform",
        img: "/images/projects/web-project-1.jpg",
      },
      {
        id: uuid(),
        title: "Cloud Storage Platform",
        img: "/images/projects/web-project-2.jpg",
      },
      {
        id: uuid(),
        title: "Cloud Storage Platform",
        img: "/images/projects/mobile-project-2.jpg",
      },
    ],
    companyInfos: [
      {
        id: uuid(),
        title: "Name",
        details: "Company Ltd",
      },
      {
        id: uuid(),
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: uuid(),
        title: "Website",
        details: "https://company.com",
      },
      {
        id: uuid(),
        title: "Phone",
        details: "555 8888 888",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Nuxt.js", "TailwindCSS", "AdobeXD"],
    projectDetails: [
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
    ],
    socialSharings: [
      {
        id: uuid(),
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/realstoman",
      },
      {
        id: uuid(),
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/in/realstoman",
      },
      {
        id: uuid(),
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com",
      },
      {
        id: uuid(),
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com",
      },
    ],
  },
  {
    id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
    title: "Uber Social App",
    category: "Mobile Application",
    img: "/images/projects/mobile-project-1.jpg",
    publishDate: "Nov 04, 2021",
    tag: "UI / Mobile",
    clientTitle: "About Client",
    objectivesTitle: "Objective",
    objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    techTitle: "Tools & Technologies",
    detailsTitle: "Challenge",
    socialTitle: "Share This",
    projectImages: [
      {
        id: uuid(),
        title: "Uber Social App",
        img: "/images/projects/web-project-1.jpg",
      },
      {
        id: uuid(),
        title: "Uber Social App",
        img: "/images/projects/web-project-2.jpg",
      },
      {
        id: uuid(),
        title: "Uber Social App",
        img: "/images/projects/mobile-project-2.jpg",
      },
    ],
    companyInfos: [
      {
        id: uuid(),
        title: "Name",
        details: "Company Ltd",
      },
      {
        id: uuid(),
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: uuid(),
        title: "Website",
        details: "https://company.com",
      },
      {
        id: uuid(),
        title: "Phone",
        details: "555 8888 888",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Nuxt.js", "TailwindCSS", "AdobeXD"],
    projectDetails: [
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
    ],
    socialSharings: [
      {
        id: uuid(),
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/realstoman",
      },
      {
        id: uuid(),
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/in/realstoman",
      },
      {
        id: uuid(),
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com",
      },
      {
        id: uuid(),
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com",
      },
    ],
  },
  {
    id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
    title: "Apple Design System",
    category: "Web Application",
    img: "/images/projects/web-project-1.jpg",
    publishDate: "Nov 04, 2021",
    tag: "UI / Mobile",
    clientTitle: "About Client",
    objectivesTitle: "Objective",
    objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    techTitle: "Tools & Technologies",
    detailsTitle: "Challenge",
    socialTitle: "Share This",
    projectImages: [
      {
        id: uuid(),
        title: "Apple Design System",
        img: "/images/projects/web-project-1.jpg",
      },
      {
        id: uuid(),
        title: "Apple Design System",
        img: "/images/projects/web-project-2.jpg",
      },
      {
        id: uuid(),
        title: "Apple Design System",
        img: "/images/projects/mobile-project-2.jpg",
      },
    ],
    companyInfos: [
      {
        id: uuid(),
        title: "Name",
        details: "Company Ltd",
      },
      {
        id: uuid(),
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: uuid(),
        title: "Website",
        details: "https://company.com",
      },
      {
        id: uuid(),
        title: "Phone",
        details: "555 8888 888",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Nuxt.js", "TailwindCSS", "AdobeXD"],
    projectDetails: [
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: uuid(),
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
    ],
    socialSharings: [
      {
        id: uuid(),
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/realstoman",
      },
      {
        id: uuid(),
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/in/realstoman",
      },
      {
        id: uuid(),
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com",
      },
      {
        id: uuid(),
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com",
      },
    ],
  },
];

export default projects;
