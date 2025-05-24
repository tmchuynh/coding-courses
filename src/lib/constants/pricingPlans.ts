export const pricingPlans = [
  {
    planType: "Single Course Enrollment",
    description: [
      "Ideal for learners who prefer flexibility or want to focus on a specific skill, our Single Course Enrollment option allows students to join individual 4 to 12-week courses tailored to various coding topics and skill levels. This option is perfect for families who want to try out our programs without a long-term commitment or who want to supplement their child's existing learning with targeted skill development.",
      "Each course is carefully designed to be self-contained and engaging, providing a clear learning path from introduction to mastery of the chosen topic. Courses combine live instruction, practical exercises, and project-based learning to ensure students gain hands-on experience. With a focused timeframe, students can quickly build new skills and apply them immediately. Single Course Enrollment also offers the flexibility to explore diverse areas such as game development, web design, robotics, or specific programming languages like Python or JavaScript. Students can select courses based on their interests, learning goals, or age group, making it easy to customize their learning journey.",
      "This enrollment option includes access to course materials, regular feedback from experienced instructors, and opportunities to interact with peers through collaborative projects and discussion sessions. Whether a beginner or an advanced learner, students will find courses that fit their pace and challenge level.",
      "Single Course Enrollment is an excellent choice for those seeking an accessible, low-commitment way to gain valuable coding skills and ignite a passion for technology.",
    ],

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
    description: [
      "Ideal for families seeking steady progress with the flexibility to adapt to their schedules, our monthly membership plans provide ongoing access to a broad range of live classes, interactive workshops, and exclusive learning resources. Designed to accommodate children of all ages and skill levels, these memberships support consistent skill development while allowing students to explore different areas of coding and technology.",
      "With a monthly membership, students benefit from consistent instruction that builds skills incrementally, fostering deeper understanding and long-term retention. Members also enjoy priority registration for special events, discounted rates on summer camps, and personalized progress tracking to ensure every child stays motivated and on course. Our memberships are designed to be flexible, accommodating busy family schedules while maintaining the quality and engagement that make our coding programs stand out. Whether your child is a beginner or advancing through our curriculum, monthly memberships support sustained growth and a love for learning technology.",
    ],

    tiers: [
      {
        name: "Starter Plan",
        pricePerMonth: 89,
        includes: "1 course (online only)",
      },
      {
        name: "Explorer Plan",
        pricePerMonth: 149,
        includes: "Up to 2 courses, access to metors",
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
    description: [
      "The Full-Year Learning Path offers the best value and is ideal for families dedicated to comprehensive, continuous skill development in coding and computer science. Designed as an immersive program, this path guides students through a carefully structured curriculum that builds foundational knowledge and advances toward mastery over the course of an entire academic year.",
      "By committing to a full year, students experience consistent, progressive learning that fosters deep understanding and practical application. The program incorporates a blend of live instruction, hands-on projects, collaborative activities, and regular assessments to track growth and adjust pacing as needed. This continuity helps students overcome learning plateaus and gain confidence in their abilities.",
      "Families who choose the Full-Year Learning Path also benefit from exclusive perks such as priority access to new courses, one-on-one mentoring opportunities, and invitations to special events like hackathons and tech showcases. This comprehensive approach ensures that learners not only acquire technical skills but also develop critical thinking, problem-solving, and teamwork capabilities essential for future success.",
      "The Full-Year Learning Path is a smart investment for families serious about cultivating their child's potential in the fast-evolving world of technology. It provides stability, structure, and support needed to turn curiosity into expertise and passion into real-world readiness.",
    ],

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
      "Subject specific 3–6 sequential courses",
      "Capstone projects",
      "Portfolio creation (GitHub/LinkedIn prep for teens)",
      "Ongoing mentorship",
    ],
  },
  {
    planType: "Optional Add-Ons",
    description: [
      "Enhance your child’s coding education with personalized support and valuable resources. We understand that every learner is unique, and sometimes extra guidance can make all the difference. Our optional add-ons provide tailored support to help your child overcome challenges, deepen their understanding, and stay motivated. Whether it’s one-on-one tutoring to address specific questions, hands-on hardware kits that bring coding concepts to life, or parent workshops designed to equip you with tools to support your child’s journey, these resources ensure a richer, more comprehensive learning experience. We are committed to offering flexible options that meet the diverse needs of our students and families.",
    ],
    items: [
      {
        name: "1-on-1 Private Tutoring",
        price: "$50/hr or $180 for 4-pack",
        description:
          "Personalized instruction tailored to your child’s unique learning needs. Ideal for targeted skill development, homework help, or accelerated learning. Flexible scheduling with expert tutors ensures focused progress. Sessions can be conducted online or in-person, depending on your preference.",
      },
      {
        name: "Parent Workshop (online)",
        price: "$59/session",
        description:
          "Engage in live online sessions designed to help parents support their child’s coding journey. Learn key concepts, effective encouragement techniques, and how to maximize your child’s learning experience at home. Workshops cover topics like coding languages, project ideas, and resources for continued learning.",
      },
      {
        name: "Hardware Kit (optional for Grades 3+)",
        price: "$79",
        description:
          "A curated kit including essential tools and devices to complement hands-on coding projects. Enables students to build, program, and experiment with physical components, enhancing practical STEM skills. Perfect for robotics, electronics, and IoT projects.",
      },
    ],
  },
  {
    planType: "Special Offers",
    description: [
      "Investing in your child’s future should be straightforward and affordable. We make quality coding education accessible and rewarding through exclusive promotions. That’s why we offer a variety of special offers to lower barriers and reward commitment. New families can try a class for free to experience our engaging teaching approach without risk. Families with multiple children benefit from sibling discounts, easing the financial load of enrolling more than one learner. Additionally, our referral program encourages our community to grow by giving credits for every successful referral. These promotions reflect our dedication to making exceptional coding education accessible and valuable for all.",
    ],
    offers: [
      {
        name: "Free Trial",
        price: "1 class free for all new families",
        description:
          "Experience our teaching style and curriculum risk-free with a complimentary trial class. Get a firsthand look at how we engage and inspire young coders.",
      },
      {
        name: "Sibling Discount",
        price: "10% off per additional child",
        description:
          "Supporting multiple learners? Save 10% on tuition for every additional child enrolled in our programs, making quality education more affordable for families.",
      },
      {
        name: "Referral Bonus",
        price: "$50 credit per referred family",
        description:
          "Refer a friend and earn a $25 credit toward your next payment once they enroll. Share the gift of coding education and benefit as our community grows.",
      },
    ],
  },
];
