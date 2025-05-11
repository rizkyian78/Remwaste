# 🚛 Waste Skip Selector Redesign — Take-Home Assignment

## 🔍 Overview

This project is a front-end redesign of the "Skip Selector" page from [WeWantWaste](https://wewantwaste.co.uk). The goal was to enhance the visual layout and user experience of the skip selection process while preserving the core functionality and ensuring consistency with the existing design of the previous step.

The specific task was to improve the user interface on both desktop and mobile, particularly focusing on the mobile layout—which was not optimized in the original implementation—while making subtle UX tweaks that respect the overall branding and flow of the site.

## 🎯 Objectives

- Redesign the skip selection page with a focus on **responsiveness**, **maintainability**, and **clean UI/UX**
- Retain the functional integrity of the original page
- developer able to continuing without neccesary changes
- Improve mobile view compatibility
- Maintain visual consistency with the previous step
- Dynamically fetch and render skip data from a provided API

---

## 💡 My Approach

### 1. 📐 Design Philosophy

I took a **pragmatic and user-centered approach** in the redesign.

- I used the existing design as a base, then improved areas that lacked usability or clarity
- This ensures visual continuity and builds user trust
- Sudden UI changes between steps can confuse users, especially on mobile

### 2. 📱 Mobile-first Optimization

- Fully rebuilt the layout using Tailwind’s responsive utilities
- Mobile now renders properly with 1-column layout
- Grid adapts automatically: 1 column on mobile, 2 on tablets, 3 on desktop

### 3. 💳 Sticky Footer for CTA

- Moved pricing and Continue button to a sticky footer
- Footer only appears after a skip is selected
- Clear separation between selection and action increases conversion

### 4. 📸 Warning Message Placement

- Moved the warning message below the image instead of inside it
- Improved legibility and accessibility

---

## 🔧 Tech Stack

- **Framework:** Next.js 13+
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Tooling:** ESLint, Prettier, VSCode

---

## 📂 Project Structure

```
src/
├── app/
│   ├── component/
│   │   ├── CardItem.tsx
│   │   ├── Footer.tsx
│   │   └── Stepper.tsx
│   ├── icon/
│   │   ├── Arrowright.tsx
│   │   ├── Loading.tsx
│   │   └── ...
│   ├── model/
│   │   └── SkipResponse.ts
│   ├── utils/
│   │   └── service.ts
│   └── page.tsx       → Main skip selection page
├── public/
├── global.css
├── next.config.ts
├── package.json
└── README.md
```


---

## 📦 How to Run Locally

### 🛠 Prerequisites

- Node.js >= 18
- Yarn or npm
- Git

### 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/waste-skip-selector.git
cd waste-skip-selector

# Install dependencies
yarn install
```

## 💻 Run Development Server

```
yarn dev
```
Then open your browser at http://localhost:3000

## 🌐 API Integration

Data is fetched from the following endpoint:

```
GET https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

Sample Response

```json
[
    {
        "id": 17933,
        "size": 4,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 278,
        "vat": 20,
        "postcode": "NR32",
        "area": "",
        "forbidden": false,
        "created_at": "2025-04-03T13:51:46.897146",
        "updated_at": "2025-04-07T13:16:52.813",
        "allowed_on_road": true,
        "allows_heavy_waste": true
    },
    {
        "id": 17934,
        "size": 6,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 305,
        "vat": 20,
        "postcode": "NR32",
        "area": "",
        "forbidden": false,
        "created_at": "2025-04-03T13:51:46.897146",
        "updated_at": "2025-04-07T13:16:52.992",
        "allowed_on_road": true,
        "allows_heavy_waste": true
    },
    {
        "id": 17935,
        "size": 8,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 375,
        "vat": 20,
        "postcode": "NR32",
        "area": "",
        "forbidden": false,
        "created_at": "2025-04-03T13:51:46.897146",
        "updated_at": "2025-04-07T13:16:53.171",
        "allowed_on_road": true,
        "allows_heavy_waste": true
    },
    {
        "id": 17936,
        "size": 10,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 400,
        "vat": 20,
        "postcode": "NR32",
        "area": "",
        "forbidden": false,
        "created_at": "2025-04-03T13:51:46.897146",
        "updated_at": "2025-04-07T13:16:53.339",
        "allowed_on_road": false,
        "allows_heavy_waste": false
    },
    {
        "id": 17937,
        "size": 12,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 439,
        "vat": 20,
        "postcode": "NR32",
        "area": "",
        "forbidden": false,
        "created_at": "2025-04-03T13:51:46.897146",
        "updated_at": "2025-04-07T13:16:53.516",
        "allowed_on_road": false,
        "allows_heavy_waste": false
    },
    {
        "id": 17938,
        "size": 14,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 470,
        "vat": 20,
        "postcode": "NR32",
        "area": "",
        "forbidden": false,
        "created_at": "2025-04-03T13:51:46.897146",
        "updated_at": "2025-04-07T13:16:53.69",
        "allowed_on_road": false,
        "allows_heavy_waste": false
    },
    {
        "id": 17939,
        "size": 16,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 496,
        "vat": 20,
        "postcode": "NR32",
        "area": "",
        "forbidden": false,
        "created_at": "2025-04-03T13:51:46.897146",
        "updated_at": "2025-04-07T13:16:53.876",
        "allowed_on_road": false,
        "allows_heavy_waste": false
    },
    {
        "id": 15124,
        "size": 20,
        "hire_period_days": 14,
        "transport_cost": 248,
        "per_tonne_cost": 248,
        "price_before_vat": 992,
        "vat": 20,
        "postcode": "NR32",
        "area": "",
        "forbidden": false,
        "created_at": "2025-04-03T13:51:40.344435",
        "updated_at": "2025-04-07T13:16:52.434",
        "allowed_on_road": false,
        "allows_heavy_waste": true
    },
    {
        "id": 15125,
        "size": 40,
        "hire_period_days": 14,
        "transport_cost": 248,
        "per_tonne_cost": 248,
        "price_before_vat": 992,
        "vat": 20,
        "postcode": "NR32",
        "area": "",
        "forbidden": false,
        "created_at": "2025-04-03T13:51:40.344435",
        "updated_at": "2025-04-07T13:16:52.603",
        "allowed_on_road": false,
        "allows_heavy_waste": false
    }
]
```

Fetched in utils/service.ts, rendered in CardItem.tsx.

## 🧠 Features
✅ Fully responsive (mobile-first)

✅ Grid layout with Tailwind CSS

✅ Sticky footer with dynamic price + continue CTA

✅ Improved warning display

✅ Clean separation of components for reusability


## 📸 Highlights
- Cleaner card layout

- Sticky footer call-to-action

- Warning is now placed for better readability

- Seamless navigation experience across mobile and desktop

## 🧪 Manual Testing
Tested in:

- Chrome, Firefox, Safari

- iPhone SE, iPhone 14 Pro

- iPad Pro

- 1080p / 1440p desktops

## 📈 Future Improvements
- Add animations to selection interaction

- Improve accessibility (ARIA, tab focus)

- Unit tests (Jest + RTL)

- Add Lighthouse audit for performance/accessibility

- Cache API response with SWR or React Query

## 📝 Submission
Date: 2025-05-11