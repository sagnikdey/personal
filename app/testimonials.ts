export interface Testimonial {
  id: string;
  name: string;
  /** Current role and company of the recommender. */
  title: string;
  /**
   * Optional profile photo URL.
   * LinkedIn photos aren't publicly accessible — add a hosted URL here
   * (e.g. from your Google Drive, Cloudinary, or ask the person directly).
   */
  image?: string;
  /** Wrap phrases in **double asterisks** to render them bold-italic. */
  quote: string;
  /** Lucide icon name rendered in the card badge. */
  icon: string;
}

/**
 * Source: LinkedIn Recommendations — linkedin.com/in/deysagnik/
 * Current designations verified from each recommender's public LinkedIn profile.
 */
export const testimonials: Testimonial[] = [
  {
    id: "daniel-taylor",
    name: "Daniel Taylor",
    title: "Sr Full Stack Developer · Home Run Dugout",
    // image: "https://your-cdn.com/daniel-taylor.jpg",
    quote:
      '"Sagnik always pays **close attention to detail** and goes above and beyond to deliver great cross-platform design while adhering to best practices. He is always approachable, energetic, with a helping hand and **positive attitude** providing solutions to design issues. It was a pleasure working with Sagnik and I know he would be a great addition to any team."',
    icon: "Layers",
  },
  {
    id: "eddy-ruz",
    name: "Eddy Ruz",
    title: "Technical Lead · Bazaarvoice",
    // image: "https://your-cdn.com/eddy-ruz.jpg",
    quote:
      '"I worked on dozens of projects with Sagnik. He would be assigned to the **most difficult, complex designs**—and would **knock them out of the park** every time. Always met deadlines ahead of schedule and we would always have fun doing it."',
    icon: "Zap",
  },
  {
    id: "matt-sartor",
    name: "Matt Sartor",
    title: "Sr. Director, Vacation Rental Partnerships, Americas",
    // image: "https://your-cdn.com/eddy-ruz.jpg",
    quote:
      '"Sagnik was a hard working, well respected member of our design team, eager to help, and always reliable in a pinch. His throughput of work was among the highest on the team, and though he was able to deliver more than most within a given amount of time, he did so without sacrificing quality. Further, he truly cared about his work, along with the people and the company that he worked for and with. I\'d definitely work with him again."',
    icon: "Zap",
  },
  {
    id: "billy-hollis",
    name: "Billy Hollis",
    title: "",
    // image: "https://your-cdn.com/eddy-ruz.jpg",
    quote:
      '"Sagnik is an excellent designer. He builds thoughtful and engaging experiences for all devices. I\'ve seen him tackle massive projects for Fortune 500 Companies like Best Buy, Walmart, HP and countless others. He\'s decisive and intuitive. If you need a project done right and done with perfection, this is your guy. "',
    icon: "Zap",
  },
  {
    id: "tim-thompson",
    name: "Tim Thompson",
    title: "Senior UX/UI Designer | 10+ years in B2B, B2C, SaaS collaborating with global teams",
    // image: "https://your-cdn.com/eddy-ruz.jpg",
    quote:
      '"Sagnik is a rock star designer. His design work is clean and beautiful, and he\'s a master at coming up with novel solutions to problems. He also works super efficiently and can beat deadlines easily. "',
    icon: "Zap",
  },
  {
    id: "patrick-barrett",
    name: "Patrick Barrett",
    title: "Product leader helping marketers elevate their customer experiences at scale with content, data, and AI.",
    // image: "https://your-cdn.com/eddy-ruz.jpg",
    quote:
      '"Sagnik is a rock solid designer who I would gladly hire again. He is a world-class designer; his work integral to the web presence of some of the world\'s highest profile brands. He produces excellent work quickly and reliably and is one of the most pleasant designers I\'ve ever worked with."',
    icon: "Zap",
  },
];
