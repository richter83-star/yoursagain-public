// Pre-build guard: refuse to build a production site with missing business
// identity. Prospects verify us on this site; placeholders must never ship.
//
// Override for local previews only:  ALLOW_INCOMPLETE_SITE=1 npm run build
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../src/lib/site.ts", import.meta.url), "utf8");
const required = ["legalName", "mailingAddress", "phoneDisplay", "phoneE164", "email", "legalPartner"];

const missing = required.filter((key) => {
  const m = src.match(new RegExp(`\\b${key}:\\s*"([^"]*)"`));
  return !m || m[1].trim() === "";
});

const keyMatch = src.match(/NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY \?\? "([^"]*)"/);
if (!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY && (!keyMatch || !keyMatch[1])) {
  missing.push("Supabase publishable key (LEADS.supabaseKey)");
}

if (missing.length) {
  const msg =
    `\nsrc/lib/site.ts is missing required values:\n  - ${missing.join("\n  - ")}\n` +
    `Fill them in before deploying. (Preview only: ALLOW_INCOMPLETE_SITE=1 npm run build)\n`;
  if (process.env.ALLOW_INCOMPLETE_SITE === "1") {
    console.warn(`WARNING (preview build):${msg}`);
  } else {
    console.error(`BUILD BLOCKED:${msg}`);
    process.exit(1);
  }
} else {
  console.log("site config OK");
}
