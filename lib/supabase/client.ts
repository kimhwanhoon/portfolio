import { Database } from "@/types/database";
import { createBrowserClient } from "@supabase/ssr";
import { unstable_noStore as noStore } from "next/cache";

interface createClientProps {
  cached?: boolean;
}

// with noStore => not cached
export const createClient = (props?: createClientProps) => {
  if (!props?.cached) {
    noStore();
  }
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  );
};
