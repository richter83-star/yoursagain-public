# YoursAgain Visual Assets

This site is designed to use Higgsfield-generated images for marketing impact.

## Required assets

1. `public/images/hero-home.jpg`
   - Purpose: homepage hero banner
   - Spec: 4:3 or 16:9, warm and trustworthy, home at golden hour, hopeful mood
   - Suggested skill: `higgsfield-product-photoshoot` mode `hero_banner`
   - Prompt idea: "A welcoming American home at golden hour, warm light, sense
     of safety and recovered equity, cinematic but grounded, website hero banner"

2. `public/images/ad-pack-01.jpg` through `public/images/ad-pack-05.jpg`
   - Purpose: paid social static ad variants
   - Spec: 4:5, vertical, strong headline space, same visual system
   - Suggested skill: `higgsfield-product-photoshoot` mode `ad_creative_pack`
   - Count: 5

3. `public/images/moodboard-pin.jpg`
   - Purpose: Pinterest/organic social awareness
   - Spec: 2:3 vertical, emotional, text-safe area
   - Suggested skill: `higgsfield-product-photoshoot` mode `moodboard_pin`

## Generation commands (run on a machine with `higgsfield` CLI authenticated)

```bash
# Hero banner
higgsfield product-photoshoot create --mode hero_banner   --prompt "A welcoming American home at golden hour, warm light, sense of safety and recovered equity, cinematic but grounded, website hero banner for equity recovery nonprofit"   --count 1 --aspect_ratio 16:9 --resolution 2k

# Ad pack
higgsfield product-photoshoot create --mode ad_creative_pack   --prompt "Paid social ad for home equity recovery service, trustworthy, hopeful, family home, no upfront fees"   --count 5 --aspect_ratio 4:5 --resolution 2k

# Pinterest pin
higgsfield product-photoshoot create --mode moodboard_pin   --prompt "Pinterest pin about recovering surplus home equity after tax foreclosure, emotional, empowering, clean text area"   --count 1 --aspect_ratio 2:3 --resolution 2k
```

After generation, download the result images and place them in `public/images/`,
then update `src/components/Hero.tsx` to use the real `hero-home.jpg`.
