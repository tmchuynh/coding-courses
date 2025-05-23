import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const ctaContent: Record<
  "default" | "summer-camp" | "trial-class",
  {
    heading: string;
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
    paragraphs: [
      "Introducing programming at a young age gives children a head start in developing essential skills for school, future careers, and life. Whether your child dreams of becoming a game developer, engineer, or entrepreneur, learning to code opens up endless possibilities.",
      "Ready to get started? Explore our curriculum and discover how your child can begin their coding journey today!",
    ],
    buttons: [
      {
        label: "View Curriculum",
        onClick: (router) => router.push("/curriculum/age-groups"),
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
    paragraphs: [
      "Give your child an unforgettable summer experience with hands-on coding projects, teamwork, and fun challenges. Our summer camp is designed for all skill levels and fosters creativity and problem-solving.",
      "Spaces are limited. Secure your spot for this summer's most exciting learning adventure!",
    ],
    buttons: [
      {
        label: "Learn More",
        onClick: (router) => router.push("/summer-camp"),
      },
      {
        label: "Register Now",
        onClick: (router) => router.push("/enroll?camp=summer"),
        variant: "accent",
      },
    ],
  },
  "trial-class": {
    heading: "Try a Free Coding Class!",
    paragraphs: [
      "Not sure if coding is right for your child? Sign up for a free trial class and experience our engaging teaching style firsthand.",
      "No commitment required. Discover the joy of learning to code!",
    ],
    buttons: [
      {
        label: "Book Trial",
        onClick: (router) => router.push("/enroll/trial-class"),
        variant: "accent",
      },
    ],
  },
};
