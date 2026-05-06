"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { MapPin, Star, X, ArrowLeft, Filter, ChevronDown } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Tennessee state FIPS code
const TN_FIPS = "47";

interface Course {
  name: string;
  location: string;
  coordinates: [number, number];
  rating: string;
  type: "Public" | "Private";
  state: string;
  note: string;
  status?: "rated" | "played-not-rated";
}

const courses: Course[] = [
  {
    name: "Golf Club of Tennessee",
    location: "Kingston Springs, TN",
    coordinates: [-87.1098, 36.0895],
    rating: "8.9",
    type: "Private",
    state: "Tennessee",
    note: "Best overall course I've played — elite conditions and layout.",
  },
  {
    name: "Sweetens Cove",
    location: "South Pittsburg, TN",
    coordinates: [-85.7043, 35.0073],
    rating: "8.7",
    type: "Public",
    state: "Tennessee",
    note: "Unique layout and one of the most fun rounds I've played.",
  },
  {
    name: "Governors Club",
    location: "Brentwood, TN",
    coordinates: [-86.7828, 35.9867],
    rating: "8.7",
    type: "Private",
    state: "Tennessee",
    note: "Elite conditions and a super complete golf experience.",
  },
  {
    name: "The Grove",
    location: "College Grove, TN",
    coordinates: [-86.6939, 35.7667],
    rating: "8.6",
    type: "Private",
    state: "Tennessee",
    note: "High-end course with great conditions and a strong overall experience.",
  },
  {
    name: "Westhaven Golf Club",
    location: "Franklin, TN",
    coordinates: [-86.8689, 35.9254],
    rating: "8.4",
    type: "Private",
    state: "Tennessee",
    note: "Best overall conditions and layout I've played locally.",
  },
  {
    name: "Hermitage",
    location: "Old Hickory, TN",
    coordinates: [-86.6189, 36.2534],
    rating: "7.9",
    type: "Public",
    state: "Tennessee",
    note: "Solid public course, but didn't fully live up to the hype for me.",
  },
  {
    name: "Greystone Golf Club",
    location: "Dickson, TN",
    coordinates: [-87.3667, 36.0692],
    rating: "7.8",
    type: "Public",
    state: "Tennessee",
    note: "Strong public track with good greens and a fun layout.",
  },
  {
    name: "Twelve Stones",
    location: "Goodlettsville, TN",
    coordinates: [-86.7134, 36.3234],
    rating: "6.9",
    type: "Public",
    state: "Tennessee",
    note: "Solid local track with a few fun holes.",
  },
  {
    name: "Ted Rhodes Golf Course",
    location: "Nashville, TN",
    coordinates: [-86.8067, 36.1834],
    rating: "6.6",
    type: "Public",
    state: "Tennessee",
    note: "Municipal track with some fun holes and casual-round value.",
  },
  {
    name: "McCabe Golf Course",
    location: "Nashville, TN",
    coordinates: [-86.8234, 36.1334],
    rating: "6.5",
    type: "Public",
    state: "Tennessee",
    note: "Easy Nashville muni round, but lower on my list overall.",
  },
  {
    name: "Montgomery Bell",
    location: "Burns, TN",
    coordinates: [-87.3234, 36.1134],
    rating: "6.4",
    type: "Public",
    state: "Tennessee",
    note: "Relaxed round in a good setting, but conditions and layout keep it lower.",
  },
  // Played but not rated courses
  {
    name: "Greywalls at Marquette Golf Club",
    location: "Marquette, MI",
    coordinates: [-87.3954, 46.5436],
    rating: "—",
    type: "Public",
    state: "Michigan",
    note: "Played but not rated.",
    status: "played-not-rated",
  },
  {
    name: "Forest Dunes: The Loop Red",
    location: "Roscommon, MI",
    coordinates: [-84.5917, 44.4989],
    rating: "—",
    type: "Public",
    state: "Michigan",
    note: "Played but not rated.",
    status: "played-not-rated",
  },
  {
    name: "Forest Dunes: The Loop Black",
    location: "Roscommon, MI",
    coordinates: [-84.5917, 44.4989],
    rating: "—",
    type: "Public",
    state: "Michigan",
    note: "Played but not rated.",
    status: "played-not-rated",
  },
  {
    name: "Forest Dunes: Tom Weiskopf Course",
    location: "Roscommon, MI",
    coordinates: [-84.5917, 44.4989],
    rating: "—",
    type: "Public",
    state: "Michigan",
    note: "Played but not rated.",
    status: "played-not-rated",
  },
  {
    name: "Olde Stone",
    location: "Bowling Green, KY",
    coordinates: [-86.4436, 36.9685],
    rating: "—",
    type: "Private",
    state: "Kentucky",
    note: "Played but not rated.",
    status: "played-not-rated",
  },
  {
    name: "Streamsong Black",
    location: "Streamsong, FL",
    coordinates: [-81.5167, 27.6458],
    rating: "—",
    type: "Public",
    state: "Florida",
    note: "Played but not rated.",
    status: "played-not-rated",
  },
  {
    name: "Dutchman's Pipe",
    location: "Florida",
    coordinates: [-81.4500, 27.6500],
    rating: "—",
    type: "Public",
    state: "Florida",
    note: "Played but not rated.",
    status: "played-not-rated",
  },
];

export default function PlayedMapPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [stateFilter, setStateFilter] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [ratingFilter, setRatingFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [showFilters, setShowFilters] = useState(false);

  const states = useMemo(() => {
    const uniqueStates = [...new Set(courses.map((c) => c.state))];
    return ["All", ...uniqueStates.sort()];
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (stateFilter !== "All" && course.state !== stateFilter) return false;
      if (typeFilter !== "All" && course.type !== typeFilter) return false;
      if (statusFilter !== "All") {
        const isNotRated = course.status === "played-not-rated";
        if (statusFilter === "Rated" && isNotRated) return false;
        if (statusFilter === "Played but not rated" && !isNotRated) return false;
      }
      if (ratingFilter !== "All") {
        if (course.status === "played-not-rated") return false;
        const rating = parseFloat(course.rating);
        if (ratingFilter === "8+" && rating < 8) return false;
        if (ratingFilter === "7-8" && (rating < 7 || rating >= 8)) return false;
        if (ratingFilter === "Below 7" && rating >= 7) return false;
      }
      return true;
    });
  }, [stateFilter, typeFilter, ratingFilter, statusFilter]);

  const clearFilters = () => {
    setStateFilter("All");
    setTypeFilter("All");
    setRatingFilter("All");
    setStatusFilter("All");
  };

  const hasActiveFilters =
    stateFilter !== "All" || typeFilter !== "All" || ratingFilter !== "All" || statusFilter !== "All";

  return (
    <div className="min-h-screen bg-[#1a1f1a] text-[#f8f3e4]">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#1a1f1a]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="/"
            className="flex items-center gap-3 text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            <span className="font-serif text-xl tracking-[-0.02em]">
              Average Golfer
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/75 md:flex">
            <a href="/#top" className="hover:text-white transition">
              Rankings
            </a>
            <a
              href="/played-map"
              className="text-white border-b border-[#c1b58c] pb-1"
            >
              Played Map
            </a>
            <a href="/brand" className="hover:text-white transition">
              Brand
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section className="border-b border-white/10 px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#c1b58c]">
              Where I&apos;ve Played
            </p>
            <h1 className="font-serif text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Played Map
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              An interactive map of every course I&apos;ve played and reviewed.
              Click on a pin to see details.
            </p>
          </div>
        </section>

        {/* Map & List Section */}
        <section className="px-5 py-12 md:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Filters */}
            <div className="mb-8">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-white/10"
              >
                <Filter size={14} />
                Filters
                <ChevronDown
                  size={14}
                  className={`transition ${showFilters ? "rotate-180" : ""}`}
                />
                {hasActiveFilters && (
                  <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#c1b58c] text-[10px] font-bold text-[#1a1f1a]">
                    !
                  </span>
                )}
              </button>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                          State
                        </label>
                        <select
                          value={stateFilter}
                          onChange={(e) => setStateFilter(e.target.value)}
                          className="rounded-lg border border-white/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-[#c1b58c]"
                        >
                          {states.map((state) => (
                            <option
                              key={state}
                              value={state}
                              className="bg-[#1a1f1a]"
                            >
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                          Type
                        </label>
                        <select
                          value={typeFilter}
                          onChange={(e) => setTypeFilter(e.target.value)}
                          className="rounded-lg border border-white/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-[#c1b58c]"
                        >
                          <option value="All" className="bg-[#1a1f1a]">
                            All
                          </option>
                          <option value="Public" className="bg-[#1a1f1a]">
                            Public
                          </option>
                          <option value="Private" className="bg-[#1a1f1a]">
                            Private
                          </option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                          Rating
                        </label>
                        <select
                          value={ratingFilter}
                          onChange={(e) => setRatingFilter(e.target.value)}
                          className="rounded-lg border border-white/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-[#c1b58c]"
                        >
                          <option value="All" className="bg-[#1a1f1a]">
                            All
                          </option>
                          <option value="8+" className="bg-[#1a1f1a]">
                            8.0+
                          </option>
                          <option value="7-8" className="bg-[#1a1f1a]">
                            7.0 - 7.9
                          </option>
                          <option value="Below 7" className="bg-[#1a1f1a]">
                            Below 7.0
                          </option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                          Status
                        </label>
                        <select
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="rounded-lg border border-white/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-[#c1b58c]"
                        >
                          <option value="All" className="bg-[#1a1f1a]">
                            All
                          </option>
                          <option value="Rated" className="bg-[#1a1f1a]">
                            Rated
                          </option>
                          <option value="Played but not rated" className="bg-[#1a1f1a]">
                            Played but not rated
                          </option>
                        </select>
                      </div>

                      {hasActiveFilters && (
                        <button
                          onClick={clearFilters}
                          className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#c1b58c] hover:text-white"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
              {/* Map */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#2a302a]">
                <ComposableMap
                  projection="geoAlbersUsa"
                  projectionConfig={{
                    scale: 1200,
                  }}
                  className="h-[500px] w-full md:h-[600px]"
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const isTennessee =
                          geo.id === TN_FIPS || geo.properties?.name === "Tennessee";
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={isTennessee ? "#3d4a3d" : "#252b25"}
                            stroke="#1a1f1a"
                            strokeWidth={0.5}
                            style={{
                              default: { outline: "none" },
                              hover: { outline: "none", fill: isTennessee ? "#4a5a4a" : "#2d332d" },
                              pressed: { outline: "none" },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>

                  {filteredCourses.map((course) => {
                    const isNotRated = course.status === "played-not-rated";
                    const markerColor = isNotRated
                      ? "#6b7280"
                      : course.type === "Private"
                      ? "#c1b58c"
                      : "#f8f3e4";
                    return (
                      <Marker
                        key={course.name}
                        coordinates={course.coordinates}
                        onClick={() => setSelectedCourse(course)}
                      >
                        <g
                          className="cursor-pointer transition-transform hover:scale-125"
                          style={{ transformOrigin: "center" }}
                        >
                          <circle
                            r={8}
                            fill={markerColor}
                            stroke="#1a1f1a"
                            strokeWidth={2}
                          />
                          <circle r={3} fill="#1a1f1a" />
                        </g>
                      </Marker>
                    );
                  })}
                </ComposableMap>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-4 rounded-xl bg-[#1a1f1a]/90 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#f8f3e4]" />
                    <span className="text-xs text-white/70">Public</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#c1b58c]" />
                    <span className="text-xs text-white/70">Private</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#6b7280]" />
                    <span className="text-xs text-white/70">Not Rated</span>
                  </div>
                </div>

                {/* Course count */}
                <div className="absolute right-4 top-4 rounded-xl bg-[#1a1f1a]/90 px-4 py-3 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-black">
                    {filteredCourses.length}
                  </span>
                  <span className="ml-2 text-xs uppercase tracking-widest text-white/70">
                    Courses
                  </span>
                </div>
              </div>

              {/* Course List */}
              <div className="max-h-[600px] overflow-y-auto rounded-[2rem] border border-white/10 bg-[#2a302a] p-6">
                <h3 className="mb-6 font-serif text-2xl font-black uppercase tracking-[-0.03em]">
                  Course List
                </h3>
                <div className="space-y-3">
                  {filteredCourses
                    .sort((a, b) => {
                      // Sort rated courses by rating, then not-rated at the end
                      const aNotRated = a.status === "played-not-rated";
                      const bNotRated = b.status === "played-not-rated";
                      if (aNotRated && !bNotRated) return 1;
                      if (!aNotRated && bNotRated) return -1;
                      if (aNotRated && bNotRated) return a.name.localeCompare(b.name);
                      return parseFloat(b.rating) - parseFloat(a.rating);
                    })
                    .map((course) => (
                      <button
                        key={course.name}
                        onClick={() => setSelectedCourse(course)}
                        className={`w-full rounded-xl border p-4 text-left transition ${
                          selectedCourse?.name === course.name
                            ? "border-[#c1b58c] bg-[#c1b58c]/10"
                            : "border-white/10 hover:border-white/30 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-serif text-lg font-black uppercase leading-tight tracking-[-0.02em]">
                              {course.name}
                            </h4>
                            <p className="mt-1 text-sm text-white/50">
                              {course.location}
                            </p>
                          </div>
                          {course.status === "played-not-rated" ? (
                            <span className="rounded-full bg-[#6b7280]/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#6b7280]">
                              Not Rated
                            </span>
                          ) : (
                            <div className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">
                              <Star size={12} className="text-[#c1b58c]" />
                              <span className="text-sm font-bold">
                                {course.rating}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                              course.type === "Private"
                                ? "bg-[#c1b58c]/20 text-[#c1b58c]"
                                : "bg-white/10 text-white/70"
                            }`}
                          >
                            {course.type}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-white/40">
                            {course.state}
                          </span>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-[#1f2d1f] p-8"
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="mb-6 flex items-start justify-between">
                <div>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      selectedCourse.type === "Private"
                        ? "bg-[#c1b58c]/20 text-[#c1b58c]"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    {selectedCourse.type}
                  </span>
                </div>
{selectedCourse.status === "played-not-rated" ? (
                  <span className="rounded-full bg-[#6b7280]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                    Not Rated
                  </span>
                ) : (
                  <div className="flex items-center gap-2 rounded-full bg-[#c1b58c] px-3 py-1">
                    <Star size={14} className="text-[#1a1f1a]" />
                    <span className="font-bold text-[#1a1f1a]">
                      {selectedCourse.rating}
                    </span>
                  </div>
                )}
              </div>

              <h2 className="font-serif text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em]">
                {selectedCourse.name}
              </h2>

              <div className="mt-4 flex items-center gap-2 text-white/60">
                <MapPin size={16} />
                <span>{selectedCourse.location}</span>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-white/70">
                {selectedCourse.note}
              </p>

              <div className="mt-8 rounded-xl bg-white/5 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  State
                </p>
                <p className="mt-1 font-semibold">{selectedCourse.state}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
