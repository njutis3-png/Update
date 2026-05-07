import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, source = "website" } = await request.json();

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Insert the email into the subscribers table
    const { error } = await supabase
      .from("email_subscribers")
      .insert({ email: email.toLowerCase().trim(), source });

    if (error) {
      // Handle duplicate email
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "You're already subscribed!" },
          { status: 200 }
        );
      }
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
