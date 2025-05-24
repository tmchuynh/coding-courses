import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const ctaContent: Record<
  | "default"
  | "summer-camp"
  | "trial-class"
  | "meet-the-team"
  | "view-programs"
  | "enroll-today",
  {
    heading: string;
    subtitle?: string;
    paragraphs: string[];
    buttons: {
      label: string;
      onClick: (router: AppRouterInstance) => void;
      variant?: string;
    }[];
  }
> = {
  default: {
    heading: "Start Early, Succeed Later",
    subtitle: "Unlock your child's potential with coding.",
    paragraphs: [
      "Introducing programming at a young age gives children a head start in developing essential skills for school, future careers, and life. Coding nurtures logical thinking, creativity, and resilience.",
      "Whether your child dreams of becoming a game developer, engineer, or entrepreneur, learning to code opens up endless possibilities and helps them adapt to a rapidly changing world.",
      "Ready to get started? Explore our curriculum and discover how your child can begin their coding journey today! Our courses are designed to be engaging, age-appropriate, and fun.",
    ],
    buttons: [
      {
        label: "View Curriculum",
        onClick: (router) => router.push("/overview/curriculum"),
        variant: "default",
      },
      {
        label: "Enroll Today",
        onClick: (router) => router.push("/enroll"),
        variant: "accent",
      },
    ],
  },
  "summer-camp": {
    heading: "Join Our Summer Coding Camp!",
    subtitle: "A summer of creativity, teamwork, and tech adventures.",
    paragraphs: [
      "Give your child an unforgettable summer experience with hands-on coding projects, teamwork, and fun challenges. Our summer camp is designed for all skill levels and fosters creativity and problem-solving.",
      "Campers will collaborate on exciting projects, develop new friendships, and build confidence in their abilities. Each session is packed with interactive lessons, games, and real-world applications.",
      "Spaces are limited. Secure your spot for this summer's most exciting learning adventure and let your child discover the joy of coding in a supportive environment!",
    ],
    buttons: [
      {
        label: "Register Now",
        onClick: (router) => router.push("/enroll/summer-camps"),
        variant: "accent",
      },
    ],
  },
  "trial-class": {
    heading: "Try a Free Coding Class!",
    subtitle: "Experience our teaching style—risk free.",
    paragraphs: [
      "Not sure if coding is right for your child? Sign up for a free trial class and experience our engaging teaching style firsthand. Our instructors make learning fun and accessible for everyone. ",
      "During the trial, your child will participate in interactive activities and get a taste of what our regular classes are like. They'll learn the basics of coding while working on a fun project that sparks their creativity.",
      "No commitment required. Discover the joy of learning to code and see how we inspire young minds to think creatively and solve problems.",
    ],
    buttons: [
      {
        label: "Book Trial",
        onClick: (router) => router.push("/enroll/trial-class"),
        variant: "accent",
      },
    ],
  },
  "meet-the-team": {
    heading: "Our Instructors & Staff",
    subtitle: "Meet the passionate educators behind our programs.",
    paragraphs: [
      "Behind every class is a team of people who care—deeply. Our instructors, curriculum designers, and leadership all share a common goal: to equip kids with the tools and mindset to thrive in a digital world.",
      "Our instructors are not just teachers; they are mentors who understand the challenges and opportunities of the tech landscape. They bring real-world experience, passion, and a commitment to fostering a supportive learning environment.",
      "We invest in their growth, ensuring they have the resources and training to inspire the next generation of creators. Get to know the people who make our programs special.",
    ],
    buttons: [
      {
        label: "Meet the Team",
        onClick: (router) => router.push("/about/our-staff"),
        variant: "fancy",
      },
    ],
  },
  "view-programs": {
    heading: "Explore Our Programs",
    subtitle: "Find the perfect course for your child's interests and goals.",
    paragraphs: [
      "Discover a variety of coding courses tailored for different ages and skill levels. From block-based programming for beginners to advanced Python and web development, we have something for everyone.",
      "Our curriculum is designed to be engaging and hands-on, helping students build real-world skills while having fun.",
      "Browse our programs to see how we can help your child develop confidence, creativity, and a lifelong love of learning.",
    ],
    buttons: [
      {
        label: "View Curriculum",
        onClick: (router) => router.push("/overview/curriculum"),
        variant: "default",
      },
    ],
  },
  "enroll-today": {
    heading: "Ready to Enroll?",
    subtitle: "Take the next step in your child's coding journey.",
    paragraphs: [
      "Secure your child's spot in our next session and start their coding journey today. Our enrollment process is simple and our team is here to help with any questions.",
      "By enrolling, your child will gain access to expert instruction, a supportive community, and a curriculum designed to foster both technical and personal growth.",
      "Don't miss out—spaces fill quickly. Give your child the opportunity to learn, create, and succeed in the digital age.",
    ],
    buttons: [
      {
        label: "Enroll Today",
        onClick: (router) => router.push("/enroll"),
        variant: "accent",
      },
      {
        label: "View Pricing Plans",
        onClick: (router) => router.push("/programs/pricing-plans"),
        variant: "outline",
      },
    ],
  },
};
