"use client";

import { BentoGridSection } from "@/components/BentoGrid";
import DynamicCTA from "@/components/CTAs/DynamicCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { programFeatures } from "@/lib/constants/pages/programInfo";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ParentGuidePage() {
  const [activeFeature, setActiveFeature] = useState(programFeatures[0]);
  const router = useRouter();

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 max-w-7xl w-10/12 md:w-11/12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">
          Parent Resource
        </Badge>
        <h1 className="mb-4 font-bold text-4xl md:text-5xl">Parent Guide</h1>
        <h5 className="mx-auto max-w-3xl text-muted-foreground text-xl">
          Empowering Parents to Support the Next Generation of Coders
        </h5>
      </div>

      {/* Welcome Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome, Parents</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-lg">
            We understand that as a parent, you want the best for your child—an
            education that prepares them for the future, cultivates their
            passions, and develops real-world skills. Our programs are designed
            with those goals in mind. Whether your child is just starting out or
            already diving into complex coding projects, this guide will help
            you understand how our curriculum works, what your child will gain,
            and how you can play a supportive role in their coding journey.
          </p>
        </CardContent>
      </Card>

      {/* Support Section with Tabs */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              How You Can Support Your Child
            </CardTitle>
            <CardDescription>
              You don't need a background in technology to help your child
              succeed in coding. Your involvement makes a big difference.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="encouragement" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
                <TabsTrigger value="encouragement">Encouragement</TabsTrigger>
                <TabsTrigger value="environment">Environment</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
                <TabsTrigger value="involvement">Involvement</TabsTrigger>
              </TabsList>

              <TabsContent value="encouragement" className="mt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full h-16 w-16">
                      <span className="text-3xl">👏</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-lg">
                      Be an Encourager
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      Show interest in your child's projects. Ask them to
                      demonstrate what they've built or explain what they're
                      working on. Your enthusiasm reinforces their confidence
                      and motivation.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          💡 Try asking these questions:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>
                            • "What's the coolest thing you learned today?"
                          </li>
                          <li>• "Can you show me how your code works?"</li>
                          <li>• "What was challenging about this project?"</li>
                          <li>• "What do you want to build next?"</li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          🎯 Encouragement tips:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>• Celebrate the process, not just the outcome</li>
                          <li>
                            • Share their projects with family and friends
                          </li>
                          <li>
                            • Create a "showcase wall" for their coding
                            achievements
                          </li>
                          <li>
                            • Acknowledge their persistence when facing
                            challenges
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="environment" className="mt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full h-16 w-16">
                      <span className="text-3xl">🏠</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-lg">
                      Create a Learning-Friendly Environment
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      Designate a quiet, well-lit space for online classes or
                      coding practice. Eliminate distractions by turning off
                      notifications and ensuring they're comfortable.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          🖥️ Technical setup checklist:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>
                            • Stable internet connection (minimum 25 Mbps
                            recommended)
                          </li>
                          <li>
                            • Working webcam and microphone for interactive
                            sessions
                          </li>
                          <li>
                            • Updated web browser (Chrome, Firefox, or Safari)
                          </li>
                          <li>
                            • Backup device available in case of technical
                            issues
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          🎯 Environment optimization:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>
                            • Good lighting - natural light or a desk lamp
                          </li>
                          <li>• Comfortable seating at appropriate height</li>
                          <li>• Minimal background noise and distractions</li>
                          <li>• Easy access to water and healthy snacks</li>
                          <li>
                            • Notebook and pen for taking notes or sketching
                            ideas
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          📵 Digital wellness:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>
                            • Turn off non-essential notifications during class
                            time
                          </li>
                          <li>
                            • Close unnecessary browser tabs and applications
                          </li>
                          <li>
                            • Use website blockers if your child gets easily
                            distracted
                          </li>
                          <li>
                            • Establish screen time breaks between sessions
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="support" className="mt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full h-16 w-16">
                      <span className="text-3xl">💪</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-lg">
                      Normalize Struggles & Build Resilience
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      Let your child know it's okay to feel frustrated when code
                      doesn't work. Remind them that errors are learning
                      opportunities, not failures. Building resilience is key to
                      coding success.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          🗣️ Helpful phrases to use:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>
                            • "Even professional programmers deal with bugs
                            every day"
                          </li>
                          <li>
                            • "This error is telling you something important"
                          </li>
                          <li>
                            • "Let's figure this out together step by step"
                          </li>
                          <li>
                            • "I'm proud of how you're thinking through this
                            problem"
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          🎯 When your child is frustrated:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>
                            • Suggest taking a short break to clear their mind
                          </li>
                          <li>
                            • Encourage them to explain the problem out loud
                          </li>
                          <li>
                            • Help them break down the problem into smaller
                            parts
                          </li>
                          <li>
                            • Remind them of past coding challenges they've
                            overcome
                          </li>
                          <li>
                            • Share stories of famous programmers who faced
                            similar struggles
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          🌱 Growth mindset activities:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>
                            • Keep a "learning journal" of challenges overcome
                          </li>
                          <li>
                            • Celebrate "productive failures" that led to
                            learning
                          </li>
                          <li>
                            • Discuss how debugging skills transfer to other
                            life problems
                          </li>
                          <li>
                            • Share coding success stories from our community
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="involvement" className="mt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full h-16 w-16">
                      <span className="text-3xl">📝</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-lg">
                      Stay Informed & Connected
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      Read class updates, newsletters, and lesson summaries.
                      Participate in parent-teacher conferences or demo days to
                      stay engaged in your child's progress and be their biggest
                      advocate.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          📧 Communication channels:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>• Weekly progress reports via email</li>
                          <li>• Monthly parent newsletters with coding tips</li>
                          <li>
                            • Quarterly showcase events to see student projects
                          </li>
                          <li>
                            • Parent portal with access to curriculum and
                            resources
                          </li>
                          <li>
                            • Direct messaging with instructors when needed
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          🎯 Ways to stay engaged:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>• Attend virtual "open classroom" sessions</li>
                          <li>
                            • Join our parent community forum for tips and
                            discussions
                          </li>
                          <li>• Participate in family coding challenges</li>
                          <li>
                            • Schedule one-on-one check-ins with instructors
                          </li>
                          <li>
                            • Review and discuss weekly project summaries
                            together
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          📊 Track progress effectively:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>
                            • Monitor skill development through our progress
                            dashboard
                          </li>
                          <li>
                            • Celebrate milestone achievements and certificates
                          </li>
                          <li>
                            • Document your child's coding journey with
                            photos/videos
                          </li>
                          <li>• Connect learning to real-world applications</li>
                          <li>
                            • Plan next steps based on interests and aptitude
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="mb-2 font-medium">
                          🤝 Building connections:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>
                            • Connect with other coding families in your area
                          </li>
                          <li>• Organize study groups or coding playdates</li>
                          <li>
                            • Share resources and experiences with other parents
                          </li>
                          <li>
                            • Attend local tech events suitable for young
                            learners
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Parent Communication Section with Accordion */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              A Note to Parents & Guardians
            </CardTitle>
            <CardDescription>
              We value your support and involvement. Here's how you can help
              your child get the most out of our programs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="involvement">
                <AccordionTrigger className="text-left">
                  <div className="flex gap-3 items-center">
                    <span className="text-2xl">🎒</span>
                    <span className="font-semibold">Stay Involved</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2 items-start">
                      <span className="mt-1 text-primary">•</span>
                      Ask to see their weekly project — students love to share!
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="mt-1 text-primary">•</span>
                      Encourage them to explain what they built and why
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="mt-1 text-primary">•</span>
                      Provide a quiet space and tech setup for remote sessions
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="mt-1 text-primary">•</span>
                      Celebrate effort and improvement, not just final outcomes
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="communication">
                <AccordionTrigger className="text-left">
                  <div className="flex gap-3 items-center">
                    <span className="text-2xl">📩</span>
                    <span className="font-semibold">Parent Communication</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2 items-start">
                      <span className="mt-1 text-primary">•</span>
                      We'll provide weekly recaps with progress updates
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="mt-1 text-primary">•</span>
                      Look out for Showcase invitations and feedback forms
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="mt-1 text-primary">•</span>
                      For questions, contact us at support@[yourcompany].com
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="mt-1 text-primary">•</span>
                      You're also welcome to review session recordings (where
                      applicable)
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="mt-1 text-primary">•</span>
                      Attend virtual class observations by request
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="mt-1 text-primary">•</span>
                      Reach out at any time with questions or concerns—we're
                      here to help
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* Trust Section */}
      <section className="mb-12">
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">You're in Good Hands</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Whether your child is coding their first game or preparing to
              build an AI project, you can trust that every interaction is
              carefully managed with professionalism and care. Our team is
              trained to prioritize both safety and meaningful learning—so your
              child can thrive in a secure, creative space.
            </p>
            <p className="text-muted-foreground">
              We look forward to partnering with you to support your child's
              coding journey. If you have any questions or need assistance,
              please don't hesitate to reach out at support@[yourcompany].com.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="mb-12">
        <DynamicCTA variant="parent-guide" />
      </section>

      {/* Program Features Section */}
      <section className="mb-12">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              What You Can Expect from Our Programs
            </CardTitle>
            <CardDescription>
              Our classes are intentionally structured to offer maximum
              engagement, personalization, and educational value. Here's what
              sets our curriculum apart:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 mt-2">
              {/* Left: Detailed card */}
              <Card className="flex-1 border-2">
                <CardContent className="p-6">
                  <div className="flex gap-3 items-center mb-4">
                    <span className="text-3xl">{activeFeature?.icon}</span>
                    <h3 className="font-semibold text-xl">
                      {activeFeature?.title}
                    </h3>
                  </div>
                  <p className="mb-6 text-muted-foreground">
                    {activeFeature?.description}
                  </p>
                  <div className="gap-4 grid md:grid-cols-2">
                    {activeFeature?.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${activeFeature.id}-${index}-Image`}
                          className="h-48 w-full transition-transform object-cover hover:scale-105"
                          width={300}
                          height={200}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Right: List of features */}
              <div className="flex flex-1 flex-col gap-3">
                {programFeatures.map((feature) => (
                  <Card
                    key={feature.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      activeFeature === feature
                        ? "border-primary shadow-md bg-primary/5"
                        : "hover:border-primary/50 hover:shadow-sm"
                    }`}
                    onClick={() => setActiveFeature(feature)}
                  >
                    <CardContent className="p-4">
                      <div className="flex gap-3 items-center">
                        <span className="text-2xl">{feature.icon}</span>
                        <div>
                          <h4 className="font-semibold">{feature.title}</h4>
                          {activeFeature !== feature && (
                            <p className="text-muted-foreground text-sm line-clamp-2">
                              {feature.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <BentoGridSection />
    </div>
  );
}
