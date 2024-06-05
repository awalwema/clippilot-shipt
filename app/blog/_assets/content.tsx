import type { JSX } from "react";
import Image, { StaticImageData } from "next/image";
import marcImg from "@/app/blog/_assets/images/authors/marc.png";
import andrewImg from "@/app/blog/_assets/images/authors/andrew.jpg";
import introducingSupabaseImg from "@/public/blog/introducing-supabase/header.png";
import introducingClipPilotImg from "@/public/blog/introducing-clippilot/header.png";
import clipPilotUiImg from "@/public/blog/introducing-clippilot/getting-started.webp";
import clipPilotWelcomeImg from "@/public/blog/introducing-clippilot/clippilot-welcomepage.png";
import clipPilotSettingsImg from "@/public/blog/introducing-clippilot/clippilot-settings.png";
import bookmarkFeatureImg from "@/public/blog/introducing-clippilot/bookmark-feature.png";
import quickSearchFeatureImg from "@/public/blog/introducing-clippilot/quick-search-feature.png";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

export type categoryType = {
  slug: string;
  title: string;
  titleShort?: string;
  description: string;
  descriptionShort?: string;
};

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It&apos;s a way to group articles by category.
const categorySlugs: { [key: string]: string } = {
  feature: "feature",
  tutorial: "tutorial",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories: categoryType[] = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.feature,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "New Features",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "Features",
    // The description of the category to display in the category page. Up to 160 characters.
    description:
      "Here are the latest features we&apos;ve added to ClipPilot. I&apos;m constantly improving our product to help you do more",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Latest features added to ClipPilot.",
  },
  {
    slug: categorySlugs.tutorial,
    title: "How Tos & Tutorials",
    titleShort: "Tutorials",
    description:
      "Learn how to use ClipPilot with these step-by-step tutorials. I&apos;ll show you how to ship faster and save time.",
    descriptionShort:
      "Learn how to use ClipPilot with these step-by-step tutorials.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

export type authorType = {
  slug: string;
  name: string;
  job: string;
  description: string;
  avatar: StaticImageData | string;
  socials?: {
    name: string;
    icon: JSX.Element;
    url: string;
  }[];
};

// Social icons used in the author&apos;s bio.
const socialIcons: {
  [key: string]: {
    name: string;
    svg: JSX.Element;
  };
} = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It&apos;s a way to show all articles from an author.
const authorSlugs: {
  [key: string]: string;
} = {
  // marc: "marc",
  andrew: "andrew",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors: authorType[] = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.marc,
    // The name to display in the author&apos;s bio. Up to 60 characters.
    name: "Marc Lou",
    // The job to display in the author&apos;s bio. Up to 60 characters.
    job: "Maker of ByeDispute",
    // The description of the author to display in the author&apos;s bio. Up to 160 characters.
    description:
      "Marc is a developer and an entrepreneur. He&apos;s built 20 startups in the last 3 years. 6 were profitable and 3 were acquired. He&apos;s currently building ByeDispute, the #1 Stripe Chargebacks Protection tool.",
    // The avatar of the author to display in the author&apos;s bio and avatar badge. It&apos;s better to use a local image, but you can also use an external image (https://...)
    avatar: marcImg,
    // A list of social links to display in the author&apos;s bio.
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "https://twitter.com/marc_louvion",
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/in/marclouvion/",
      },
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: "https://github.com/Marc-Lou-Org/ship-fast",
      },
    ],
  },
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.andrew,
    // The name to display in the author&apos;s bio. Up to 60 characters.
    name: "Andrew ",
    // The job to display in the author&apos;s bio. Up to 60 characters.
    job: "Maker of ClipPilot",
    // The description of the author to display in the author&apos;s bio. Up to 160 characters.
    description: "Andrew likes to build, read, and follow his curiousity",
    // The avatar of the author to display in the author&apos;s bio and avatar badge. It&apos;s better to use a local image, but you can also use an external image (https://...)
    avatar: andrewImg,
    // A list of social links to display in the author&apos;s bio.
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "https://twitter.com/gratatouille23",
      },
      // {
      //   name: socialIcons.linkedin.name,
      //   icon: socialIcons.linkedin.svg,
      //   url: "https://www.linkedin.com/in/marclouvion/",
      // },
      // {
      //   name: socialIcons.github.name,
      //   icon: socialIcons.github.svg,
      //   url: "https://github.com/Marc-Lou-Org/ship-fast",
      // },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

export type articleType = {
  slug: string;
  title: string;
  description: string;
  categories: categoryType[];
  author: authorType;
  publishedAt: string;
  image: {
    src?: StaticImageData;
    urlRelative: string;
    alt: string;
  };
  content: JSX.Element;
};

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles: {
  [key: string]: string;
} = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles: articleType[] = [
  //   {
  //     // The unique slug to use in the URL. It&apos;s also used to generate the canonical URL.
  //     slug: "introducing-supabase",
  //     // The title to display in the article page (h1). Less than 60 characters. It&apos;s also used to generate the meta title.
  //     title: "Introducing Supabase to ShipFast",
  //     // The description of the article to display in the article page. Up to 160 characters. It&apos;s also used to generate the meta description.
  //     description:
  //       "Supabase is an open-source Firebase alternative. It&apos;s a great tool for building a backend for your app. It&apos;s now integrated with ShipFast!",
  //     // An array of categories of the article. It&apos;s used to generate the category badges, the category filter, and more.
  //     categories: [
  //       categories.find((category) => category.slug === categorySlugs.feature),
  //     ],
  //     // The author of the article. It&apos;s used to generate a link to the author&apos;s bio page.
  //     author: authors.find((author) => author.slug === authorSlugs.marc),
  //     // The date of the article. It&apos;s used to generate the meta date.
  //     publishedAt: "2023-11-20",
  //     image: {
  //       // The image to display in <CardArticle /> components.
  //       src: introducingSupabaseImg,
  //       // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD. It should be the same image as the src above.
  //       urlRelative: "/blog/introducing-supabase/header.jpg",
  //       alt: "Supabase and ShipFast logo combined",
  //     },
  //     // The actual content of the article that will be shown under the <h1> title in the article page.
  //     content: (
  //       <>
  //         <Image
  //           src={introducingSupabaseImg}
  //           alt="Supabase and ShipFast logo combined"
  //           width={700}
  //           height={500}
  //           priority={true}
  //           className="rounded-box"
  //           placeholder="blur"
  //         />
  //         <section>
  //           <h2 className={styles.h2}>Introduction</h2>
  //           <p className={styles.p}>
  //             Supabase is an open-source Firebase alternative. It&apos;s a great
  //             tool for building a backend for your app. It&apos;s now integrated
  //             with ShipFast!
  //           </p>
  //         </section>

  //         <section>
  //           <h3 className={styles.h3}>1. Create a supabase account</h3>
  //           <p className={styles.p}>
  //             First, go to{" "}
  //             <a href="https://supabase.com/" className="link link-primary">
  //               Supabase
  //             </a>{" "}
  //             and create an account. It&apos;s free for up to 10,000 rows per
  //             table.
  //             <br />
  //             Then create a new project and a new table. You can use the following
  //             SQL schema:
  //           </p>

  //           <pre className={styles.code}>
  //             <code>
  //               {`CREATE TABLE public.users (
  //   id bigint NOT NULL DEFAULT nextval(&apos;users_id_seq&apos;::regclass),
  //   email text NOT NULL,
  //   password text NOT NULL,
  //   created_at timestamp with time zone NOT NULL DEFAULT now(),
  //   updated_at timestamp with time zone NOT NULL DEFAULT now(),
  //   CONSTRAINT users_pkey PRIMARY KEY (id)
  // );`}
  //             </code>
  //           </pre>
  //         </section>

  //         <section>
  //           <h3 className={styles.h3}>2. Add your credentials to ShipFast</h3>
  //           <p className={styles.p}>
  //             Copy the <span className={styles.codeInline}>API URL</span> and{" "}
  //             <span className={styles.codeInline}>API Key</span> from your
  //             Supabase project settings and add them to your ShipFast project
  //             settings. Add these files to your project:
  //           </p>

  //           <ul className={styles.ul}>
  //             <li className={styles.li}>.env.local</li>
  //             <li className={styles.li}>.env.production</li>
  //           </ul>
  //         </section>
  //       </>
  //     ),
  //   },
  {
    // The unique slug to use in the URL. It&apos;s also used to generate the canonical URL.
    slug: "introducing-clippilot",
    // The title to display in the article page (h1). Less than 60 characters. It&apos;s also used to generate the meta title.
    title: "Getting Started with ClipPilot: A Beginner&apos;s Guide",
    // The description of the article to display in the article page. Up to 160 characters. It&apos;s also used to generate the meta description.
    description:
      "Revolutionize your clipboard experience on macOS with ClipPilot, the ultimate tool for managing text, images, and media. This beginner&apos;s guide will walk you through the fundamentals of ClipPilot and show you how to elevate your productivity and data management.",
    // An array of categories of the article. It&apos;s used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
      categories.find((category) => category.slug === categorySlugs.tutorial),
    ],
    // The author of the article. It&apos;s used to generate a link to the author&apos;s bio page.
    author: authors.find((author) => author.slug === authorSlugs.andrew),
    // The date of the article. It&apos;s used to generate the meta date.
    publishedAt: "2024-06-04",
    image: {
      // The image to display in <CardArticle /> components.
      src: introducingClipPilotImg,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD. It should be the same image as the src above.
      urlRelative: "/blog/introducing-clippilot/header.jpg",
      alt: "ClipPilot logo",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={introducingClipPilotImg}
          alt="ClipPilot logo"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Introduction</h2>
          <p className={styles.p}>
            Are you tired of constantly copying and pasting between
            applications, losing track of important information, or struggling
            to find that one screenshot you took days ago?
          </p>
          <p className={styles.p}>
            Say goodbye to these frustrations with ClipPilot, the ultimate
            clipboard management app for macOS.
          </p>
          <br></br>
          <p className={styles.p}>
            ClipPilot is designed to streamline your workflow by keeping all
            your copied data in one easily accessible place. With features like
            favorites, seamless deletion, and the ability to block sensitive
            apps, ClipPilot ensures that your clipboard data is organized,
            secure, and always at your fingertips.
          </p>
          <br></br>
          <p className={styles.p}>
            But ClipPilot isn&apos;t just about managing text – it&apos;s also a
            game-changer for screenshot management. ClipPilot allows you to
            create, tag, and search for screenshots effortlessly. Making it the
            perfect tool for designers, developers, and anyone who frequently
            works with visual content.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Getting Started with ClipPilot</h2>
          <Image
            src={clipPilotUiImg}
            alt="ClipPilot icon in menu bar"
            width={400}
            height={400}
            priority={true}
            className="rounded-box"
            placeholder="blur"
          />
          <br></br>
          <br></br>
          <p className={styles.p}>
            ClipPilot is designed to be intuitive and user-friendly, making it
            easy for you to get started with the app. In this section,
            we&apos;ll cover the basics of accessing and navigating ClipPilot,
            so you can begin optimizing your clipboard management experience.
          </p>
          <br></br>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <strong>Easily Access ClipPilot:</strong> To open the app, simply
              click the ClipPilot icon located in your menu bar. This convenient
              placement allows you to access ClipPilot from anywhere on your Mac
              with just a single click.
            </li>
            <br></br>
            <Image
              src={clipPilotWelcomeImg}
              alt="ClipPilot welcome page"
              width={500}
              height={500}
              priority={true}
              className="rounded-box"
              placeholder="blur"
            />
            <br></br>
            <li className={styles.li}>
              <strong>Welcome Page Overview:</strong> As a new user, ClipPilot
              greets you with a welcome page upon your first launch. This page
              provides a brief introduction to ClipPilot and highlights its
              powerful features. If there are no entries in your clipboard
              history, the welcome page will be displayed by default.
            </li>
            <li className={styles.li}>
              <strong>Navigating the Interface:</strong> At the top of the
              ClipPilot window, you&apos;ll find a search bar. This feature
              allows you to quickly locate specific text items or hyperlinks
              within your clipboard history. Simply type in your search query,
              and ClipPilot will instantly display relevant results.
            </li>
            <li className={styles.li}>
              <strong>Effortless Bookmarking:</strong> To the right of the
              search bar, you&apos;ll notice three icons: a bookmark (star),
              settings (gear), and screenshot (camera). Clicking the bookmark
              icon will display all your favorited clipboard items, making it
              easy to access your most frequently used content.
            </li>
            <br></br>
            <Image
              src={clipPilotSettingsImg}
              alt="ClipPilot settings"
              width={400}
              height={300}
              priority={true}
              className="rounded-box"
              placeholder="blur"
            />
            <br></br>

            <li className={styles.li}>
              <strong>Customized App Monitoring:</strong> ClipPilot gives you
              full control over your privacy through its settings menu. By
              clicking the settings icon, you can specify which applications
              ClipPilot should monitor. This feature allows you to manage
              sensitive data by excluding certain apps from being tracked.
              Additionally, you can choose whether ClipPilot should copy only
              text, only images, or both, depending on your preferences.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Screenshot Management: A Game-Changer</h2>
          <p className={styles.p}>
            Have you ever copied an important piece of information, only to
            accidentally overwrite it moments later when copying something else
            like a security code? Or worse, have you ever lost track of that
            important information altogether? With ClipPilot&apos;s integrated
            clipboard management, these struggles are a thing of the past.
          </p>
          <br></br>
          <p className={styles.p}>
            ClipPilot&apos;s screenshot management is a game-changer for anyone
            who frequently works with visual content. Whether you&apos;re a
            designer, developer, or just someone who takes a lot of screenshots,
            this feature will revolutionize the way you organize and retrieve
            your images.
          </p>
          <br></br>
          <p className={styles.p}>
            The key to ClipPilot&apos;s screenshot management is its tagging
            system. By allowing you to add custom tags to your screenshots,
            ClipPilot makes it incredibly easy to find the right image when you
            need it. No more scrolling through endless folders or trying to
            remember cryptic file names – just search for the relevant tag, and
            voila!
          </p>
          <br></br>
          <video
            src="/blog/introducing-clippilot/screenshot-blog.mp4"
            autoPlay
            muted
            loop
            controls
            width="100%"
            height="auto"
            className="rounded-box"
          >
            Your browser does not support the video tag.
          </video>
          <br></br>
          <p className={styles.p}>
            <strong>Here&apos;s how it works</strong>:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              To capture a screenshot, click the camera icon located to the
              right of the settings button. A popup window will appear, offering
              three options: capture the entire screen, capture a selected
              portion, or cancel.
            </li>
            <li className={styles.li}>
              Once you&apos;ve taken your screenshot, another popup window will
              appear, prompting you to add tags. Simply type in your desired
              tags, separating each one with a comma. You can add as many tags
              as you like, so feel free to be descriptive!
            </li>
            <li className={styles.li}>
              After adding your tags, click `&ldquo;`Save,`&rdquo;` and your
              screenshot will be stored in ClipPilot with its associated tags.
              Now, whenever you need to find that screenshot, simply search for
              any of the tags you assigned to it. ClipPilot will instantly
              retrieve the image, ready for you to copy and paste wherever you
              need it.
            </li>
          </ul>
          <br></br>
          <p className={styles.p}>
            By leveraging ClipPilot&apos;s screenshot management, you&apos;ll
            save time, reduce frustration, and never lose another important
            screenshot again. It&apos;s a true game-changer for anyone looking
            to streamline their visual content workflow. Give it a try and
            experience the difference for yourself!
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Core Features</h2>
          <ul className={styles.ul}>
            <br></br>
            <Image
              src={bookmarkFeatureImg}
              alt="ClipPilot bookmark feature"
              width={700}
              height={500}
              priority={true}
              className="rounded-box"
              placeholder="blur"
            />
            <br></br>
            <li className={styles.li}>
              <strong>Bookmark Your Favorites:</strong> Keep your essential
              clipboard items within easy reach. To favorite an item, simply
              click the star icon on the item&apos;s thumbnail. A filled yellow
              star indicates that the item is now in your favorites. To access
              all your favored items, click on the large star icon located
              beside the search bar.
            </li>
            <li className={styles.li}>
              <strong>Streamline Copy and Paste:</strong> ClipPilot captures
              everything you copy, including text, images, and hyperlinks. Your
              clipboard history is securely stored on your computer and remains
              intact even after a restart.
            </li>
            <li className={styles.li}>
              <strong>Organize with Ease:</strong> To remove items from your
              ClipPilot history, click the trash icon in the top right corner of
              the item&apos;s thumbnail. This helps you maintain an organized
              and clutter-free clipboard.
            </li>
            <br></br>
            <Image
              src={quickSearchFeatureImg}
              alt="ClipPilot quick search feature"
              width={700}
              height={500}
              priority={true}
              className="rounded-box"
              placeholder="blur"
            />
            <br></br>
            <li className={styles.li}>
              <strong>Quick Search in Clipboard:</strong> Use ClipPilot&apos;s
              search bar to swiftly find any text-based item you&apos;ve copied.
              This feature is particularly useful for retrieving specific
              hyperlinks or text snippets from your clipboard history.
            </li>
            <li className={styles.li}>
              <strong>Direct Hyperlink Access:</strong> ClipPilot&apos;s
              &apos;Open Link&apos; button allows you to launch hyperlinks
              directly in your default browser. This seamless integration
              provides immediate access to the web without the need to manually
              copy and paste URLs.
            </li>
            <li className={styles.li}>
              <strong>Enhanced Privacy Control:</strong> ClipPilot offers
              enhanced privacy features to protect your sensitive information.
              By default, the app excludes Keychain from app monitoring,
              ensuring that your most confidential data, such as passwords and
              certificates, remain private. <br></br> You can also exclude other
              privacy-sensitive applications, like third-party password
              managers, from being monitored. To do this, navigate to the
              settings menu, select &apos;Add Application to Ignore,&apos; and
              choose the apps you wish to keep private. Removing apps from the
              ignore list is just as straightforward – simply click the red
              minus button next to the app&apos;s name.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Connect for Support and Suggestions</h2>
          <p className={styles.p}>
            We&apos;re Here to Help and Improve: Your experience with ClipPilot
            is our top priority. If you need assistance or have innovative ideas
            for new features, please don&apos;t hesitate to reach out. You can
            connect with me via email at{" "}
            <a
              href="mailto:gratatouille23@gmail.com"
              className="link link-primary"
            >
              gratatouille23@gmail.com
            </a>{" "}
            or follow and message me on Twitter at{" "}
            <a
              href="https://twitter.com/gratatouille23"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              twitter.com/gratatouille23
            </a>
            . <br></br>
            <br></br>Your feedback is invaluable, and I&apos;m committed to
            continually enhancing ClipPilot based on your suggestions.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Wrapping Up and Looking Forward</h2>
          <p className={styles.p}>
            Throughout this guide, we&apos;ve walked you through the essential
            functionalities of ClipPilot, empowering you to:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              Capture, tag, and easily find screenshots with integrated
              screenshot management
            </li>
            <li className={styles.li}>Search instantly for specific content</li>
            <li className={styles.li}>
              Bookmark important items for quick access
            </li>
            <li className={styles.li}>Seamlessly open hyperlinks</li>
            <li className={styles.li}>
              Ensure your privacy with customizable app blocking
            </li>
          </ul>
          <br></br>
          <p className={styles.p}>
            ClipPilot&apos;s screenshot management is a game-changer for anyone
            who frequently works with visual content. By allowing you to
            capture, tag, and search for screenshots effortlessly, ClipPilot
            revolutionizes the way you organize and retrieve your images.
          </p>
          <br></br>
          <p className={styles.p}>
            Integrating ClipPilot into your daily routine will transform your
            macOS experience, bringing efficiency and organization to your
            fingertips. As you continue to explore ClipPilot, stay tuned for
            more advanced tips and updates that will help you unlock the full
            potential of this powerful tool.
          </p>
          <br></br>
          <br></br>
          <h2 className={styles.h2}>
            Ready to Elevate Your Clipboard Experience?
          </h2>
          <p className={styles.p}>
            Don&apos;t miss out on the opportunity to supercharge your clipboard
            management and skyrocket your productivity.{" "}
            <a
              href="https://apps.apple.com/us/app/clippilot-clipboard/id6476124023?mt=12"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary font-bold"
            >
              Download ClipPilot from the App Store now
            </a>{" "}
            and experience the power of effortless screenshot management,
            seamless bookmark organization, and secure app blocking.<br></br>
            <br></br>
            Take control of your clipboard today and unlock a new level of
            efficiency on your MacBook.
          </p>
        </section>
      </>
    ),
  },
];
