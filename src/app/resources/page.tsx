import { resourceLinks } from "@/lib/constants/parentInfo";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Explore Our Resources</h1>
      <p>
        Discover helpful guides, inspiring testimonials, and important
        information designed to support our students, parents, and staff.
      </p>
      <div className="gap-6 lg:gap-8 grid md:grid-cols-2">
        {resourceLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="block bg-card shadow-md hover:shadow-lg p-6 border border-border rounded-lg transition-shadow"
          >
            <h2 className="mb-2 font-semibold text-primary text-xl">
              {link.title}
            </h2>
            <p className="text-card-foreground text-sm">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
