import { SITE, hasEmail, hasPhone } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";

/** Direct contact options. Renders only the details that are configured. */
export function ContactDetails({ className = "" }: { className?: string }) {
  if (!hasPhone() && !hasEmail() && !SITE.mailingAddress) return null;
  return (
    <ul className={`space-y-2 text-sm text-brand-muted ${className}`}>
      {hasPhone() ? (
        <li className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-brand-navy" aria-hidden />
          <a href={`tel:${SITE.phoneE164}`} className="hover:text-brand-navy">
            {SITE.phoneDisplay}
          </a>
        </li>
      ) : null}
      {hasEmail() ? (
        <li className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-brand-navy" aria-hidden />
          <a href={`mailto:${SITE.email}`} className="hover:text-brand-navy">
            {SITE.email}
          </a>
        </li>
      ) : null}
      {SITE.mailingAddress ? (
        <li className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 text-brand-navy" aria-hidden />
          <span>{SITE.mailingAddress}</span>
        </li>
      ) : null}
    </ul>
  );
}
