import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="container mx-auto relative h-[60vh] w-full rounded-2xl shadow-2xl overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/75 to-transparent" />

      {/* Decorative blurred blob */}
      <div
        className="absolute -top-10 -left-10 w-72 h-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #818cf8, #6d28d9)" }}
      />

      {/* Accent stripe */}
      <div
        className="absolute top-0 left-0 h-1 w-2/3 rounded-tr-full"
        style={{ background: "linear-gradient(to right, #a78bfa, #f472b6)" }}
      />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 text-white">

          <h1
            className="text-4xl md:text-6xl font-extrabold mb-4 max-w-2xl leading-tight"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Upgrade Your Skills{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(to right, #a78bfa, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Today 🚀
            </span>
          </h1>

          <p className="text-base md:text-lg mb-8 max-w-md text-gray-300 leading-relaxed">
            Learn from Industry Experts and take your career to the next level
            with hands-on, practical courses.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href={"/"}>
              <Button
                className="font-semibold px-6 py-2 rounded-xl text-white shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #db2777)",
                  border: "none",
                }}
              >
                Get Started Free
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                variant="bordered"
                className="font-semibold px-6 py-2 rounded-xl"
                style={{
                  borderColor: "rgba(167,139,250,0.5)",
                  color: "#e9d5ff",
                  background: "rgba(109,40,217,0.15)",
                }}
              >
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
