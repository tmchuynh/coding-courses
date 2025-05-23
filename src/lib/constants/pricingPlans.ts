export const pricingPlans = [
  {
    planType: "Single Course Enrollment",
    description: "Per 4–12 Week Course",
    pricing: [
      {
        ageGroup: "K–2",
        duration: "4 weeks",
        priceOnline: 149,
        priceInPerson: 179,
      },
      {
        ageGroup: "Grades 3–5",
        duration: "6 weeks",
        priceOnline: 199,
        priceInPerson: 229,
      },
      {
        ageGroup: "Grades 6–8",
        duration: "8 weeks",
        priceOnline: 249,
        priceInPerson: 279,
      },
      {
        ageGroup: "Grades 9–12",
        duration: "12 weeks",
        priceOnline: 349,
        priceInPerson: 399,
      },
    ],
    includes: [
      "Live instruction",
      "Student project access",
      "Progress dashboard",
      "Completion certificate",
    ],
  },
  {
    planType: "Monthly Memberships",
    description: "Perfect for consistent learning and multi-child families",
    tiers: [
      {
        name: "Starter Plan",
        pricePerMonth: 89,
        includes: "1 course track/month (online only)",
      },
      {
        name: "Explorer Plan",
        pricePerMonth: 149,
        includes: "Up to 2 course tracks/month, access to clubs",
      },
      {
        name: "Creator Plan",
        pricePerMonth: 199,
        includes: "Unlimited courses, priority scheduling, 1:1 mentor",
      },
      {
        name: "In-Person Add-On",
        pricePerMonth: 30,
        includes: "Add for hybrid or center-based access",
      },
    ],
    benefits: [
      "Pause or cancel anytime",
      "Access to digital camps and coding competitions",
      "Free trial class per child",
    ],
  },
  {
    planType: "Full-Year Learning Path",
    description:
      "Best Value — For families committed to full skill development",
    plans: [
      {
        name: "Elementary Path (K–5)",
        annualPriceOnline: 799,
        annualPriceInPersonHybrid: 949,
      },
      {
        name: "Middle School Path (6–8)",
        annualPriceOnline: 1099,
        annualPriceInPersonHybrid: 1299,
      },
      {
        name: "High School Path (9–12)",
        annualPriceOnline: 1499,
        annualPriceInPersonHybrid: 1699,
      },
    ],
    includes: [
      "4–6 sequential courses",
      "Capstone project + demo day access",
      "Portfolio creation (GitHub/LinkedIn prep for teens)",
      "Ongoing mentorship",
    ],
  },
  {
    planType: "Optional Add-Ons",
    items: [
      { name: "1-on-1 Private Tutoring", price: "50/hr or $180 for 4-pack" },
      { name: "Parent Workshop (online)", price: "$59/session" },
      { name: "Hardware Kit (optional for Grades 3+)", price: "$79" },
      { name: "Scholar Pack (income-based)", price: "Apply for up to 75% off" },
    ],
  },
  {
    planType: "Special Offers",
    offers: [
      "Free Trial: 1 class free for all new families",
      "Sibling Discount: 10% off per additional child",
      "Referral Bonus: $25 credit per referred family",
    ],
  },
];
