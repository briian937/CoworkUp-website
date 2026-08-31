const PAGES = {
  "/": homeMarkdown,
  "/spaces/ruzafa": ruzafaMarkdown,
  "/spaces/puerta-del-mar": puertaMarkdown,
  "/meeting-rooms": meetingRoomsMarkdown,
  "/office": officeMarkdown,
  "/virtual-office": virtualOfficeMarkdown,
  "/contact": contactMarkdown,
  "/about": aboutMarkdown,
  "/privacy": privacyMarkdown,
  "/terms": termsMarkdown,
  "/cancel": cancelMarkdown,
};

export default function handler(req, res) {
  const path = req.query.path || "/";
  const normalized = path.startsWith("/") ? path : "/" + path;
  const mdFn = PAGES[normalized];

  if (mdFn) {
    res.setHeader("Content-Type", "text/markdown; charset=utf-8");
    res.setHeader("Vary", "Accept, Accept-Encoding");
    res.status(200).send(mdFn());
  } else {
    res.setHeader("Content-Type", "text/markdown; charset=utf-8");
    res.setHeader("Vary", "Accept, Accept-Encoding");
    res.status(404).send("# 404 — Page Not Found\n\nThis page does not exist. See [sitemap.xml](https://co-workup.com/sitemap.xml) or [llms.txt](https://co-workup.com/llms.txt) for valid pages.\n");
  }
}

function homeMarkdown() {
  return `# Cowork Up — Coworking in València, Spain

Cowork Up is a social and international coworking space in the heart of València, Spain. Two locations — Ruzafa and Puerta del Mar — with flexible plans, meeting rooms, and a vibrant community of founders, freelancers, and remote workers from around the world.

## Locations

### Cowork Up Ruzafa
- **Address:** C/ Carlos Cervera 14, 46006 València
- **Phone:** +34 627 65 31 41
- **Hours:** Monday–Friday 08:00–20:30
- **Size:** 500 m² · 2 meeting rooms · 5 phone booths
- **Features:** Pet-friendly, specialty coffee, fully equipped kitchen, bike storage

### Cowork Up Puerta del Mar
- **Address:** C/ Cronista Carreres 10, 46003 València
- **Phone:** +34 670 75 86 98
- **Hours:** Monday–Friday 07:30–20:00
- **Size:** 700 m² · 5 meeting rooms · 6 phone booths · event hall
- **Features:** Classical restored building (1898), fully equipped kitchen, bike storage

## Plans and Pricing

All prices + IVA (21%). Plans are per-location.

| Plan | Price | Details |
|------|-------|---------|
| Half-Day Pass | €15/day | Morning or afternoon session |
| Day Pass | €22/day | Full-day unlimited access |
| Weekly Pass | €80–85/week | 5 days of unlimited access |
| 10h Flex | €75/month | 10 h/week, afternoons |
| Unlimited Afternoons | €100/month | Unlimited from 14:00 |
| 20h Flex | €130/month | 20 h/week |
| Hot Desk | €175/month | Unlimited access, any desk |
| Fix Desk | €205/month | Dedicated desk |
| Meeting Room | From €20/hour | 2–10 people |
| Virtual Office | €60/3 months | Fiscal address + mail handling |

## What's Included

- 1 Gbps Wi-Fi
- Free specialty coffee, tea, and fruit
- Printing and scanning
- Phone booths
- Fully equipped kitchen
- Bike storage
- International community events (Beer Day, Pizza Friday, networking)

## Services

- [Spaces — Ruzafa](/spaces/ruzafa)
- [Spaces — Puerta del Mar](/spaces/puerta-del-mar)
- [Meeting Rooms](/meeting-rooms)
- [Office as a Service](/office)
- [Virtual Office](/virtual-office)
- [Contact](/contact)
- [About](/about)

## Contact

- **Email:** info@co-workup.com
- **Ruzafa:** +34 627 65 31 41
- **Puerta del Mar:** +34 670 75 86 98
- **Instagram:** https://www.instagram.com/cowork.up/
- **LinkedIn:** https://www.linkedin.com/company/co-work-up/
`;
}

function ruzafaMarkdown() {
  return `# Cowork Up Ruzafa — Coworking in Ruzafa, València

A 500 m² coworking space in the heart of Ruzafa, València's creative neighbourhood. Members are designers, indie devs, small studios, and freelancers.

## Location

- **Address:** C/ Carlos Cervera 14, 46006 València, Spain
- **Phone:** +34 627 65 31 41
- **Hours:** Monday–Friday 08:00–20:30
- **Metro:** Xàtiva (lines 3, 5, 7, 9)

## Facilities

- 500 m² open-plan space
- 2 meeting rooms (Sala Discovery, Sala Thinking)
- 5 phone booths
- Fully equipped kitchen with specialty coffee
- Pet-friendly
- Secure bike storage

## Plans at Ruzafa

All prices + IVA (21%).

| Plan | Price | Details |
|------|-------|---------|
| Half-Day Pass | €15/day | 08:30–14:00 or 15:00–20:30 |
| Day Pass | €22/day | Full-day access |
| Weekly Pass | €85/week | 5 days of access |
| 10h Flex | €75/month | 10 h/week, afternoons |
| Unlimited Afternoons | €100/month | Unlimited from 14:00 |
| 20h Flex | €130/month | 20 h/week |
| Hot Desk | €175/month | Unlimited, any desk |
| Fix Desk | €205/month | Dedicated desk |

## Contact

- **Email:** info@co-workup.com
- **Phone:** +34 627 65 31 41
- **Book a tour:** https://co-workup.com/contact
`;
}

function puertaMarkdown() {
  return `# Cowork Up Puerta del Mar — Coworking in central València

A 700 m² coworking space in a restored 1898 building near the old port of València. Five meeting rooms, six phone booths, an event hall, and a fully equipped kitchen.

## Location

- **Address:** C/ Cronista Carreres 10, 46003 València, Spain
- **Phone:** +34 670 75 86 98
- **Hours:** Monday–Friday 07:30–20:00
- **Metro:** Colón (lines 3, 5, 7, 9)

## Facilities

- 700 m² in a classical restored building
- 5 meeting rooms (Sala Altea, Sala Denia, Sala Calpe, and more)
- 6 phone booths
- Event hall
- Fully equipped kitchen
- Secure bike storage

## Plans at Puerta del Mar

All prices + IVA (21%).

| Plan | Price | Details |
|------|-------|---------|
| Half-Day Pass | €15/day | Morning or afternoon session |
| Day Pass | €22/day | Full-day access |
| Weekly Pass | €80/week | 5 days of access |
| 10h Flex | €75/month | 10 h/week, afternoons |
| Unlimited Afternoons | €100/month | Unlimited from 14:00 |
| 20h Flex | €130/month | 20 h/week |
| Hot Desk | €175/month | Unlimited, any desk |
| Fix Desk | €205/month | Dedicated desk |

## Contact

- **Email:** info@co-workup.com
- **Phone:** +34 670 75 86 98
- **Book a tour:** https://co-workup.com/contact
`;
}

function meetingRoomsMarkdown() {
  return `# Meeting Rooms — Cowork Up València

7 meeting rooms across two locations in central València. Book by the hour via WhatsApp. All rooms include whiteboard, screen, Wi-Fi, and coffee.

## Ruzafa Meeting Rooms

### Sala Discovery
- Capacity: 4 people
- Price: €20/hour + IVA

### Sala Thinking
- Capacity: 6 people
- Price: €20/hour + IVA

**Book Ruzafa:** WhatsApp +34 627 65 31 41

## Puerta del Mar Meeting Rooms

### Sala Altea
- Capacity: 6 people
- Price: €20/hour + IVA

### Sala Denia
- Capacity: 8 people
- Price: €20/hour + IVA

### Sala Calpe
- Capacity: 10 people
- Price: €25/hour + IVA

**Book Puerta del Mar:** WhatsApp +34 670 75 86 98

## Contact

- **Email:** info@co-workup.com
`;
}

function officeMarkdown() {
  return `# Office as a Service — Cowork Up València

A turnkey private office in València. We find, design, equip, and manage your workspace so you can focus on your business.

## How It Works

1. **Tell us what you need** — team size, preferred neighbourhood, move-in date
2. **We find and design your space** — proposal within 48 hours
3. **We equip everything** — furniture, IT, connectivity, kitchen
4. **We manage it** — cleaning, maintenance, reception, mail handling

## What's Included

- Fully furnished private office
- 1 Gbps fibre internet
- Cleaning and maintenance
- Reception and mail handling
- Meeting room access
- Community events
- Flexible terms — no long-term lease, no upfront investment

## Who It's For

- Companies with 5–30 employees looking for an office in València
- International companies opening a Spanish office
- Teams that want a private space without setup hassle

## Contact

- **Email:** info@co-workup.com
- **Phone Ruzafa:** +34 627 65 31 41
- **Phone Puerta del Mar:** +34 670 75 86 98
`;
}

function virtualOfficeMarkdown() {
  return `# Virtual Office — Cowork Up València

A professional business address in central València without renting a physical office. Ideal for company registration, tax filings, and client-facing correspondence.

## Pricing

€60 every 3 months + IVA (21%). Available at both Ruzafa and Puerta del Mar.

## What's Included

1. **Fiscal address** — Registered business address for tax purposes and company registration in Spain
2. **Mail handling** — We receive, sort, and store your mail with real-time email notifications
3. **Document scanning** — Same-day scan and email of letters
4. **Weekly digest** — Weekly summary of all correspondence
5. **Member discounts** — Exclusive discounts on monthly coworking plans
6. **Meeting rooms** — Book at member rates
7. **Multilingual team** — Spanish, English, and more
8. **International community** — Network of founders and remote workers

## Contact

- **Email:** info@co-workup.com
- **Get started:** https://co-workup.com/virtual-office
`;
}

function contactMarkdown() {
  return `# Contact — Cowork Up València

## Locations

### Cowork Up Ruzafa
- **Address:** C/ Carlos Cervera 14, 46006 València, Spain
- **Phone:** +34 627 65 31 41
- **Hours:** Monday–Friday 08:00–20:30

### Cowork Up Puerta del Mar
- **Address:** C/ Cronista Carreres 10, 46003 València, Spain
- **Phone:** +34 670 75 86 98
- **Hours:** Monday–Friday 07:30–20:00

## General

- **Email:** info@co-workup.com
- **Instagram:** https://www.instagram.com/cowork.up/
- **LinkedIn:** https://www.linkedin.com/company/co-work-up/

## Book a Tour

Visit https://co-workup.com/contact to book a free tour.
`;
}

function aboutMarkdown() {
  return `# About Cowork Up — Coworking in València since 2020

Cowork Up is a social and international coworking community in the heart of València, Spain. We operate two locations — Ruzafa and Puerta del Mar — offering flexible coworking plans, meeting rooms, virtual office services, and turnkey private offices.

## Our Story

Founded in 2020, Cowork Up was built for people who want more than a desk. Our spaces bring together founders, freelancers, designers, developers, and remote workers from around the world. We believe great work happens in great communities.

## What We Offer

- **Coworking** — Hot desks and fix desks with 1 Gbps Wi-Fi, specialty coffee, and flexible access
- **Meeting Rooms** — 7 rooms across both locations, bookable by the hour
- **Virtual Office** — Registered business address for company formation and tax filings
- **Office as a Service** — Turnkey private offices we find, equip, and manage

## Community

Every week: Beer Day, Pizza Friday, Happy Hour, startup networking, and more. Members come from over 30 countries.

## Locations

- **Ruzafa:** C/ Carlos Cervera 14, 46006 València (500 m², pet-friendly)
- **Puerta del Mar:** C/ Cronista Carreres 10, 46003 València (700 m², event hall)

## Contact

- **Email:** info@co-workup.com
- **Ruzafa:** +34 627 65 31 41
- **Puerta del Mar:** +34 670 75 86 98
`;
}

function privacyMarkdown() {
  return `# Privacy Policy — Cowork Up

Cowork Up is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).

## Data Controller

- **Company:** Cowork Up
- **Email:** info@co-workup.com
- **Address:** C/ Carlos Cervera 14, 46006 València, Spain

## Data We Collect

- **Contact forms:** Name, email, phone number, company name, and message content
- **Subscriptions:** Name, email, phone, and payment information processed via Stripe (we do not store card details)
- **Virtual Office:** Company name, fiscal identification, and correspondence address
- **Analytics:** Anonymous usage data via Google Analytics (GA4)
- **Cookies:** Functional cookies and analytics cookies (Google Analytics)

## How We Use Your Data

- To respond to enquiries and book tours
- To process membership subscriptions and payments
- To provide virtual office and mail handling services
- To improve our website through anonymous analytics

## Your Rights (GDPR)

You have the right to access, rectify, erase, restrict, object to processing, and port your data. To exercise these rights, email info@co-workup.com.

## Data Retention

Contact form submissions: 12 months. Membership data: duration of contract plus legally required period.

## Third Parties

- **Stripe:** Payment processing
- **HubSpot:** Contact form management
- **Google Analytics:** Anonymous site analytics

## Contact

For privacy questions: info@co-workup.com.

Last updated: August 2026.
`;
}

function termsMarkdown() {
  return `# Terms and Conditions — Cowork Up

For the full terms and conditions, visit https://co-workup.com/terms.

## Summary

- Memberships are monthly, cancel any time
- Plans are per-location (Ruzafa or Puerta del Mar)
- All prices + IVA (21%)
- Operating hours: Monday–Friday
- Members must respect shared spaces and facility rules
- Termination after 3 warnings for rule violations

## Contact

- **Email:** info@co-workup.com
`;
}

function cancelMarkdown() {
  return `# Cancel Subscription — Cowork Up

To cancel your membership, complete the form at https://co-workup.com/cancel.

Cancellations are processed within 48 hours. Your membership remains active until the end of the current billing period.

## Contact

For cancellation questions: info@co-workup.com.
`;
}
