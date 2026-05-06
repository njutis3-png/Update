"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Star,
  CalendarDays,
  Play,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";

// Custom TikTok icon since Lucide doesn't have one
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

// Custom X (Twitter) icon
function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

// TikTok profile URL (fallback when specific review video is not available)
const TIKTOK_PROFILE = "https://www.tiktok.com/@Ritz_kicks";

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
    tiktokReview: null, // Will link to profile until specific video is available
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
    tiktokReview: null,
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
    tiktokReview: null,
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
    tiktokReview: null,
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
    tiktokReview: null,
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
    tiktokReview: null,
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
    tiktokReview: null,
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
    tiktokReview: null,
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
    tiktokReview: null,
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
    tiktokReview: null,
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
    tiktokReview: null,
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
  tiktokReview: string | null;
}

function CourseButtons({ course }: { course: Course }) {
  const reviewUrl = course.tiktokReview || TIKTOK_PROFILE;
  
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-full bg-[#2f4f3a] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#3d6149] hover:shadow-lg hover:shadow-[#2f4f3a]/25"
      >
        <TikTokIcon size={14} />
        <span>Watch My Review</span>
        <ExternalLink size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
      <a
        href={course.booking}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-[#1d2419]/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#1d2419]/70 transition hover:border-[#1d2419] hover:text-[#1d2419]"
      >
        <CalendarDays size={14} /> Book Tee Time
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


      
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#1a1f1a]/90 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="/" className="font-serif text-xl tracking-[-0.02em] hover:text-[#c1b58c] transition">
            Average Golfer
          </a>
          <nav className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 lg:flex">
            <a href="#top" className="hover:text-white transition">
              Top 3
            </a>
            <a href="#rankings" className="hover:text-white transition">
              Rankings
            </a>
            <a href="/played-map" className="hover:text-white transition">
              Played Map
            </a>
            <a href="/brand" className="hover:text-white transition">
              Brand
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </nav>
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://instagram.com/Ritz_kicks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition hover:text-[#c1b58c]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://tiktok.com/@Ritz_kicks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition hover:text-[#c1b58c]"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition hover:text-[#c1b58c]"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition hover:text-[#c1b58c]"
                aria-label="X"
              >
                <XIcon size={16} />
              </a>
            </div>
            <a
              href="#top"
              className="hidden rounded-full border border-white/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#1a1f1a] sm:block"
            >
              View List
            </a>
          </div>
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
            transition={{ duration: 8 }}
            crossOrigin="anonymous"
          />

          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="absolute inset-0 bg-[#2f4f3a]/15 mix-blend-multiply" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 text-[11px] font-bold uppercase tracking-[0.4em] text-[#c1b58c]"
            >
              Average Golfer Reviews
            </motion.p>

            <h1 className="font-serif text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] md:text-[7rem] lg:text-[10rem]">
              Top Courses
              <br />
              <span className="text-[#c1b58c]/90">in Tennessee</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-auto mt-8 max-w-lg text-[13px] font-medium uppercase tracking-[0.25em] text-white/60"
            >
              Golf reviews, rankings, travel, and content from a 10 handicap trying to get better.
            </motion.p>
          </motion.div>
        </div>

        <motion.a
          href="#latest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 transition hover:text-white"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </motion.a>
      </section>

      {/* Main Content */}
      <main>
        {/* Latest Review Section */}
        <section id="latest" className="bg-[#1f2d1f] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#c1b58c]">
                Latest Review
              </p>
              <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <img
                    src={courseData[0].image}
                    alt={courseData[0].course}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#c1b58c] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1a1f1a]">
                      <Star size={12} /> {courseData[0].rating}
                    </span>
                  </div>
                  {/* Play button overlay - links to TikTok review */}
                  <a
                    href={courseData[0].tiktokReview || TIKTOK_PROFILE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 transition group-hover:opacity-100"
                    aria-label={`Watch TikTok review of ${courseData[0].course}`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition hover:scale-110 hover:bg-white/30">
                      <Play size={24} className="ml-1 text-white" fill="white" />
                    </div>
                  </a>
                </div>
                <div className="text-[#f8f3e4]">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                    #{courseData[0].rank} Overall
                  </span>
                  <h2 className="mt-3 font-serif text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                    {courseData[0].course}
                  </h2>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white/50">
                    <MapPin size={14} />
                    {courseData[0].location}
                    <span className="text-white/30">|</span>
                    <span className="text-[#c1b58c]">{courseData[0].type}</span>
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-white/60">
                    {courseData[0].note}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={courseData[0].tiktokReview || TIKTOK_PROFILE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-[#c1b58c] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#1a1f1a] transition hover:bg-[#d4c9a4] hover:shadow-lg hover:shadow-[#c1b58c]/25"
                    >
                      <TikTokIcon size={14} />
                      <span>Watch My Review</span>
                      <ExternalLink size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                    <a
                      href={courseData[0].booking}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white/80 transition hover:bg-white hover:text-[#1a1f1a]"
                    >
                      <CalendarDays size={14} /> Book Tee Time
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Top 3 Section */}
        <section id="top" className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
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
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[2rem] border border-[#1d2419]/10 bg-[#f8f3e4] shadow-sm transition-shadow duration-300 hover:shadow-2xl"
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
              <div className="aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#d9ceb3] shadow-xl">
                <img
                  src="/images/noah-profile.jpg"
                  alt="Noah on the golf course holding a flag"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#2c3325] px-6 py-3 shadow-lg">
                <p className="font-serif text-2xl font-black text-[#efe9d8]">10</p>
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

      {/* Footer */}
      <footer className="border-t border-[#1d2419]/10 bg-[#1f2d1f] px-5 py-16 text-[#f8f3e4] md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <div className="font-serif text-2xl tracking-[-0.02em]">Average Golfer</div>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Golf reviews, rankings, travel, and content from a 10 handicap trying to get better.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://instagram.com/Ritz_kicks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition hover:text-[#c1b58c]"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://tiktok.com/@Ritz_kicks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition hover:text-[#c1b58c]"
                  aria-label="TikTok"
                >
                  <TikTokIcon size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition hover:text-[#c1b58c]"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition hover:text-[#c1b58c]"
                  aria-label="X"
                >
                  <XIcon size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="/" className="text-sm text-white/70 transition hover:text-[#c1b58c]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#rankings" className="text-sm text-white/70 transition hover:text-[#c1b58c]">
                    Rankings
                  </a>
                </li>
                <li>
                  <a href="/played-map" className="text-sm text-white/70 transition hover:text-[#c1b58c]">
                    Played Map
                  </a>
                </li>
                <li>
                  <a href="/brand" className="text-sm text-white/70 transition hover:text-[#c1b58c]">
                    Brand
                  </a>
                </li>
              </ul>
            </div>

            {/* More */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                More
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#about" className="text-sm text-white/70 transition hover:text-[#c1b58c]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#categories" className="text-sm text-white/70 transition hover:text-[#c1b58c]">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@averagegolfer.com" className="text-sm text-white/70 transition hover:text-[#c1b58c]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                Stay Updated
              </h4>
              <p className="mt-4 text-sm text-white/50">
                Get notified when new reviews drop.
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#c1b58c]/50"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#c1b58c] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1a1f1a] transition hover:bg-[#d4c9a4]"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Average Golfer Reviews. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Built by Noah Jutis
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
