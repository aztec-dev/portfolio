import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Azariah Pundari",
  initials: "AP",
  url: "https://azariah.io",
  location: "Brisbane, QLD",
  locationLink: "https://www.brisbane.qld.gov.au/",
  description:
    "Aspiring Software Developer passionate about developing applications, websites, games and your day-to-day bugs.",
  summary:
    "Results-driven Software Developer with experience in .NET, Blazor, TypeScript, and Vue. Skilled in full-stack development, application optimization, and secure coding. Interned at The Edwards Group and SOPHUS, contributing to business systems and web applications. Strong problem-solver with leadership experience mentoring junior developers. Passionate about cybersecurity and data science, eager to apply technical expertise in a dynamic environment.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "JavaScript",
    "Node.js",
    "SQL",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "azariah.pundari02@gmail.com",
    tel: "+61432524184",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aztec-dev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "TEG Consulting",
      href: "https://edwardsgroup.com.au/",
      badges: [],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/teg.jpg",
      start: "August 2024",
      end: "Present",
      description:
        "",
    },
    {
      company: "Sophus Nutrition",
      badges: [],
      href: "#",
      location: "Cairns, Queensland",
      title: "Software Developer Intern",
      logoUrl: "/sophus_nutrition_logo.jpg",
      start: "November 2023",
      end: "January 2024",
      description:
        "",
    },
    {
      company: "Beloved HomeCare",
      href: "https://www.belovedhomecare.com.au/",
      badges: [],
      location: "Townsville, Queensland",
      title: "Community Support Worker",
      logoUrl: "/Beloved Logo full colour.avif",
      start: "March 2022",
      end: "January 2025",
      description:
        "Fostered a positive, supportive environment for clients, building trust and rapport through active listening, decision making and effective communication.",
    },
  ],
  education: [
    {
      school: "James Cook University",
      href: "https://www.jcu.edu.au/",
      degree: "Bachelors of Information Technology",
      logoUrl: "/jcu.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "The Cathedral School of St Anne & St James",
      href: "https://cathedral.qld.edu.au/",
      degree: "High School Diploma",
      logoUrl: "/tcs-logo.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Task tracker CLI",
      href: "",
      dates: "Feb 2025 - March 2025",
      active: true,
      description:
        "I always tend to lose track of what I&apos;m supposed to be doing and being skilled in Python, I&apos;ve decided to create a task tracker cli.",
      technologies: [
        "Python"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aztec-dev/task_tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/task-cli-demo.mp4",
    },
    {
      title: "Weather Forecast Web App",
      href: "",
      dates: "March 2025 - Present",
      active: true,
      description:
        "This project helps me gain a better understanding of how API's work and how the front-end communicates with the back-end. It also helps me better understand the Flask micro-framework in building web applications.",
      technologies: [
        "Python",
        "Flask",
        "JavaScript",
        "HTML",
        "Jinja",
        "CSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aztec-dev/weather_forecast",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wip.png",
      video:
        "",
    },
  ],
  } as const;
