# Temple Website — Asset Placement Guide
# ==========================================
# IMPORTANT: All [PLACEHOLDER] items below must be replaced
# with real assets before Part 2 development begins.

## 🖼️ LOGOS & ICONS
Place in: /public/assets/logos/

- logo-primary.svg or logo-primary.png   → Main temple logo (light background version)
- logo-reverse.svg or logo-reverse.png   → Logo for dark backgrounds (footer, hero)
- logo-icon.svg or logo-icon.png         → Icon-only mark (used in header Om circle)
- deity-icon.svg or deity-icon.png       → Sacred deity icon / yantra

Replace the favicon at: /public/assets/icons/favicon.svg

## 🎬 VIDEOS
Place in: /public/assets/videos/

- temple-hero.mp4     → Main temple vertical/landscape video for hero background
                        Recommended: H.264, max 1080p, < 15MB compressed for web
- temple-hero-poster.jpg → First frame of video as poster image (prevents flash)

The <video> element in HeroSection.jsx is already coded and commented out.
Uncomment it and remove the ImagePlaceholder once the file is in place.

## 📷 IMAGES
Place in: /public/assets/images/

Gallery images:
- gallery-1.jpg  → Temple Exterior
- gallery-2.jpg  → Main Sanctum
- gallery-3.jpg  → Evening Aarti
- gallery-4.jpg  → Festival Celebration
- gallery-5.jpg  → School Activity
- gallery-6.jpg  → Community Gathering

About section:
- about-temple.jpg   → Main temple / deity image (portrait orientation, 3:4)
- about-logo.jpg     → Temple logo or sacred yantra for floating accent

Hero poster:
- hero-poster.jpg    → Static frame from the hero video

School section:
- school-activity.jpg → Children in Vedic class / cultural activity
- community.jpg       → Community gathering / seva activity

Recommended format: WebP or JPEG, max 2MB per image, optimise for web.

## 📝 CONTENT PLACEHOLDERS
These strings in /src/data/mock-data.js need to be updated:

- templeInfo.name               → Official temple name
- templeInfo.nameDevanagari     → Temple name in Devanagari script
- templeInfo.deity              → Name of principal deity
- templeInfo.deityDevanagari    → Deity name in Devanagari
- templeInfo.established        → Year established
- templeInfo.address.*          → Full temple address
- templeInfo.contact.*          → Phone numbers, email
- templeInfo.social.*           → Social media URLs

- darshanTimings.*              → Actual temple timings
- upcomingFestivals.*           → Real festival dates and descriptions
- announcements.*               → Real public notices
