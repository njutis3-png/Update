"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Star,
  CalendarDays,
} from "lucide-react";

const courseData = [
  {
    rank: "01",
    course: "Golf Club of Tennessee",
    location: "Kingston Springs, TN",
    rating: "8.9",
    type: "Private",
    note: "Best overall course I've played — elite conditions and layout.",
    website: "https://www.thegolfcluboftn.com/",
    booking: "https://www.google.com/search?q=Golf+Club+of+Tennessee+tee+times",
    image: "/images/golf-club-of-tennessee.jpg",
  },
  {
    rank: "02",
    course: "Sweetens Cove",
    location: "South Pittsburg, TN",
    rating: "8.7",
    type: "Public",
    note: "Unique layout and one of the most fun rounds I've played.",
    website: "https://sweetenscovegolfclub.com/",
    booking: "https://sweetenscovegolfclub.com/collections/experiences",
    image: "/images/sweetens-cove.jpg",
  },
  {
    rank: "02",
    course: "Governors Club",
    location: "Brentwood, TN",
    rating: "8.7",
    type: "Private",
    note: "Elite conditions and a super complete golf experience.",
    website: "https://www.thegovernorsclub.com/",
    booking: "https://www.thegovernorsclub.com/contact/contact-and-directions",
    image: "/images/governors-club.jpg",
  },
  {
    rank: "04",
    course: "The Grove",
    location: "College Grove, TN",
    rating: "8.6",
    type: "Private",
    note: "High-end course with great conditions and a strong overall experience.",
    website: "https://www.groveliving.com/",
    booking:
      "https://www.google.com/search?q=The+Grove+College+Grove+TN+golf+tee+times",
    image: "/images/the-grove.jpg",
  },
  {
    rank: "05",
    course: "Westhaven Golf Club",
    location: "Franklin, TN",
    rating: "8.4",
    type: "Private",
    note: "Best overall conditions and layout I've played locally.",
    website: "https://www.westhavengolfclub.com/",
    booking:
      "https://www.google.com/search?q=Westhaven+Golf+Club+tee+times",
    image: "/images/westhaven.jpg",
  },
  {
    rank: "06",
    course: "Hermitage",
    location: "Old Hickory, TN",
    rating: "7.9",
    type: "Public",
    note: "Solid public course, but didn't fully live up to the hype for me.",
    website: "https://www.hermitagegolf.com/",
    booking: "https://www.hermitagegolf.com/tee-times/",
    image: "/images/hermitage.jpg",
  },
  {
    rank: "07",
    course: "Greystone Golf Club",
    location: "Dickson, TN",
    rating: "7.8",
    type: "Public",
    note: "Strong public track with good greens and a fun layout.",
    website: "https://www.greystonegc.com/",
    booking: "https://www.greystonegc.com/tee-times/",
    image: "/images/greystone.jpg",
  },
  {
    rank: "08",
    course: "Twelve Stones",
    location: "Goodlettsville, TN",
    rating: "6.9",
    type: "Public",
    note: "Solid local track with a few fun holes.",
    website: "https://www.twelvestonesgolfclub.com/",
    booking:
      "https://www.google.com/search?q=Twelve+Stones+Golf+Club+tee+times",
    image: "/images/twelve-stones.jpg",
  },
  {
    rank: "09",
    course: "Ted Rhodes Golf Course",
    location: "Nashville, TN",
    rating: "6.6",
    type: "Public",
    note: "Municipal track with some fun holes and casual-round value.",
    website:
      "https://www.nashville.gov/departments/parks/golf-courses/ted-rhodes-golf-course",
    booking:
      "https://www.google.com/search?q=Ted+Rhodes+Golf+Course+tee+times",
    image: "/images/ted-rhodes.jpg",
  },
  {
    rank: "10",
    course: "McCabe Golf Course",
    location: "Nashville, TN",
    rating: "6.5",
    type: "Public",
    note: "Easy Nashville muni round, but lower on my list overall.",
    website:
      "https://www.nashville.gov/departments/parks/golf-courses/mccabe-golf-course",
    booking: "https://www.google.com/search?q=McCabe+Golf+Course+tee+times",
    image: "/images/mccabe.jpg",
  },
  {
    rank: "11",
    course: "Montgomery Bell",
    location: "Burns, TN",
    rating: "6.4",
    type: "Public",
    note: "Relaxed round in a good setting, but conditions and layout keep it lower.",
    website: "https://tnstateparks.com/golf/course/montgomery-bell",
    booking:
      "https://www.google.com/search?q=Montgomery+Bell+Golf+Course+tee+times",
    image: "/images/montgomery-bell.jpg",
  },
];

const topThree = courseData.slice(0, 3);
const publicCourses = courseData.filter((course) => course.type === "Public");
const privateCourses = courseData.filter((course) => course.type === "Private");
const valueCourses = [
  courseData.find((course) => course.course === "Sweetens Cove"),
  courseData.find((course) => course.course === "Hermitage"),
  courseData.find((course) => course.course === "Greystone Golf Club"),
  courseData.find((course) => course.course === "Twelve Stones"),
  courseData.find((course) => course.course === "Ted Rhodes Golf Course"),
].filter(Boolean);

interface Course {
  rank: string;
  course: string;
  location: string;
  rating: string;
  type: string;
  note: string;
  website: string;
  booking: string;
  image: string;
}

function CourseButtons({ course }: { course: Course }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={course.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-b border-[#1d2419] pb-1 text-xs font-bold uppercase tracking-[0.2em]"
      >
        View Website <ArrowUpRight size={15} />
      </a>
      <a
        href={course.booking}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-[#1d2419] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-[#1d2419] hover:text-white"
      >
        <CalendarDays size={15} /> Book Tee Time
      </a>
    </div>
  );
}

function RankingCard({
  title,
  subtitle,
  courses,
  showValueTag = false,
}: {
  title: string;
  subtitle: string;
  courses: Course[];
  showValueTag?: boolean;
}) {
  return (
    <div className="rounded-[2rem] border border-[#1d2419]/10 bg-[#f8f3e4] p-6 shadow-sm">
      <h3 className="font-serif text-3xl font-black uppercase leading-none tracking-[-0.04em]">
        {title}
      </h3>
      <p className="mt-4 min-h-14 text-sm leading-relaxed text-[#667057]">
        {subtitle}
      </p>
      <div className="mt-8 divide-y divide-[#1d2419]/10 border-y border-[#1d2419]/10">
        {courses.map((course, index) => (
          <div
            key={`${title}-${course.course}`}
            className="group relative grid grid-cols-[38px_1fr_auto] gap-3 py-4"
          >
            <div className="font-serif text-xl font-black text-[#2f4f3a]/55">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <a
                href={course.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg font-black uppercase leading-tight tracking-[-0.03em] hover:underline"
              >
                {course.course}
              </a>
              <div className="mt-1 text-xs text-[#667057]">
                {showValueTag
                  ? "Best experience for the price"
                  : course.location}
              </div>
              <a
                href={course.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2f4f3a] hover:underline"
              >
                Book Tee Time <ArrowUpRight size={12} />
              </a>
            </div>
            <div className="font-serif text-xl font-black">{course.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AverageGolferPage() {
  return (
    <div className="min-h-screen bg-[#efe9d8] text-[#1d2419]">

      {/* Top intro */}
      <div className="bg-[#e7e0cf] pt-16 pb-6 px-6 text-center">
        <p className="mx-auto max-w-3xl text-[12px] md:text-sm tracking-[0.18em] uppercase text-[#1d2419]/80">
          I’m Noah — an average golfer shooting mid-80s and reviewing courses for regular golfers.
          No fluff, no country club bias — just honest ratings on where I’d actually play again.
        </p>
      </div>
      
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/15 bg-black/15 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="font-serif text-xl tracking-[-0.02em]">
            Average Golfer
          </div>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/75 md:flex">
            <a href="#top" className="hover:text-white">
              Top 3
            </a>
            <a href="#rankings" className="hover:text-white">
              Rankings
            </a>
            <a href="#categories" className="hover:text-white">
              Categories
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </nav>
          <a
            href="#top"
            className="rounded-full border border-white/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
          >
            View List
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-screen overflow-hidden text-white">
        <div className="absolute inset-0">
          <motion.img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/felix-vericel-xYqjbNSJGKs-unsplash-lbwXS29YXanO0ZgfQ09wN0RXhJ3ycH.jpg"
            alt="Golf course with sand bunkers and golfer taking a shot"
            className="h-full w-full object-cover object-[50%_30%]"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
            crossOrigin="anonymous"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[#2f4f3a]/20 mix-blend-multiply" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.36em] text-white/80">
              Tennessee Golf
            </p>

            <h1 className="font-serif text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em] md:text-8xl lg:text-[9rem]">
              Top Courses
              <br />
              in Tennessee
            </h1>

            <p className="mt-6 text-lg text-white/85">
              Public Tracks | Honest Ratings | Real Rounds
            </p>
          </motion.div>
        </div>

        <a
          href="#top"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/35 p-3 text-white/80 transition hover:bg-white hover:text-black"
        >
          <ArrowDown size={20} />
        </a>
      </section>

      {/* Main Content */}
      <main>
        {/* Top 3 Section */}
        <section id="top" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_.75fr] md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#62704b]">
                The Podium
              </p>
              <h2 className="font-serif text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Top 3 Golf Courses in TN
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-[#56604b]">
              A running list built from real rounds, real scores, and the kind
              of details regular golfers actually care about: greens, layout,
              value, and vibe.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {topThree.map((course, index) => (
              <motion.article
                key={course.course}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="group overflow-hidden rounded-[2rem] border border-[#1d2419]/10 bg-[#f8f3e4] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.course}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-[#f8f3e4] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#1d2419]">
                    {course.type}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-8 flex items-start justify-between">
                    <span className="font-serif text-6xl font-black leading-none tracking-[-0.08em] text-[#2f4f3a]">
                      {course.rank}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#2f4f3a] px-3 py-1 text-sm font-bold text-white">
                      <Star size={14} /> {course.rating}
                    </span>
                  </div>
                  <a
                    href={course.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-3xl font-black uppercase leading-none tracking-[-0.04em] hover:underline"
                  >
                    {course.course}
                  </a>
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#667057]">
                    <MapPin size={15} /> {course.location}
                  </div>
                  <p className="mt-6 min-h-20 text-lg leading-relaxed text-[#4c5544]">
                    {course.note}
                  </p>
                  <CourseButtons course={course} />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Full Rankings Section */}
        <section
          id="rankings"
          className="bg-[#1f2d1f] px-5 py-24 text-[#f8f3e4] md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#c1b58c]">
                  Running List
                </p>
                <h2 className="font-serif text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
                  Full Rankings
                </h2>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-white/60">
                Updated every time a new course earns a spot.
              </p>
            </div>

            <div className="divide-y divide-white/12 border-y border-white/12">
              {courseData.map((course) => (
                <div
                  key={course.course}
                  className="group relative grid grid-cols-[54px_1fr_auto] items-center gap-4 py-7 transition hover:px-4 md:grid-cols-[90px_1fr_220px_130px_150px]"
                >
                  <div className="font-serif text-3xl font-black text-white/35">
                    {course.rank}
                  </div>
                  <div>
                    <a
                      href={course.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-2xl font-black uppercase tracking-[-0.03em] hover:underline md:text-4xl"
                    >
                      {course.course}
                    </a>
                    <div className="mt-1 text-sm text-white/45 md:hidden">
                      {course.location} &middot; {course.type}
                    </div>
                  </div>
                  <div className="hidden text-sm uppercase tracking-[0.2em] text-white/40 md:block">
                    {course.location} &middot; {course.type}
                  </div>
                  <div className="text-right font-serif text-3xl font-black">
                    {course.rating}
                  </div>
                  <a
                    href={course.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-full border border-white/25 px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 transition hover:bg-white hover:text-black md:block"
                  >
                    Book Tee Time
                  </a>
                  <img
                    src={course.image}
                    alt={course.course}
                    className="pointer-events-none absolute right-44 top-1/2 hidden h-28 w-44 -translate-y-1/2 rounded-2xl object-cover opacity-0 shadow-2xl transition duration-300 group-hover:opacity-100 lg:block"
                    crossOrigin="anonymous"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section
          id="categories"
          className="mx-auto max-w-7xl px-5 py-24 md:px-8"
        >
          <div className="mb-14">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#62704b]">
              Course Categories
            </p>
            <h2 className="font-serif text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Public, Private & Value
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <RankingCard
              title="Best Public Courses"
              subtitle="Accessible courses I've played and rated firsthand."
              courses={publicCourses}
            />
            <RankingCard
              title="Best Private Courses"
              subtitle="Private clubs ranked strictly from my own rounds."
              courses={privateCourses}
            />
            <RankingCard
              title="Best Bang for Your Buck"
              subtitle="Courses that deliver the best experience for the price."
              courses={valueCourses as Course[]}
              showValueTag
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="mb-16 grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <div className="rounded-[2rem] bg-[#d9ceb3] p-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#62704b]">
                The Standard
              </p>
              <p className="font-serif text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em]">
                Course conditions. Layout. Value. Vibe.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Not a pro. That&apos;s the point.
              </h2>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#56604b]">
                I&apos;m an average golfer shooting mid-80s, ranking courses the
                way regular golfers actually experience them. Every review comes
                from a real round, a real score, and an honest take.
              </p>
            </div>
          </div>

          {/* About Me */}
          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:items-start">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#d9ceb3]">
                <div className="flex h-full items-center justify-center text-[#56604b]">
                  <span className="text-sm uppercase tracking-widest">Photo coming soon</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#2c3325] px-6 py-3">
                <p className="font-serif text-2xl font-black text-[#efe9d8]">11</p>
                <p className="text-xs uppercase tracking-widest text-[#a8b89a]">Handicap</p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-5xl">
                Noah Jutis
              </h3>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#56604b]">
                <p>
                  I started golfing at 16 and played on my high school golf team. Then college happened—I was broke, and golf fell off my radar. For years, I barely touched a club.
                </p>
                <p>
                  I work in construction, and I was blessed with an opportunity that changed everything: building <span className="font-semibold text-[#2c3325]">Bounty Club</span> in Whites Creek, TN for 8AM and Justin Timberlake. Being around a world-class course every day sparked my love for the game all over again.
                </p>
                <p>
                  When I got back into golf, I realized I had no clue which courses in Tennessee were actually worth playing. So I started ranking them—for myself at first, then for anyone else trying to figure out where to play.
                </p>
                <p>
                  This project is a fun way for me to grow the game and grow my love for creating content. Every ranking comes from a real round, a real experience, and an honest opinion.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
