# Gameplay media provenance

Captured 17 September 2026 from the actual Stay Afloat iOS app running in iPhone 17e Simulator (iOS 27). The game was built from the current local project without modifying simulation or rendering. Temporary XCTest navigated ordinary New voyage, selected Floating City / Day Trip, started a new voyage, used the ordinary overview toggle, and dragged the Day Trip camera upward for unobstructed framing. No actors, water, results or scores were injected. The automated voyages were unattended. Temporary UI test source was restored exactly afterwards; both capture tests passed.

Recordings are native-speed real-time gameplay. Videos are cropped, scaled and encoded H.264/yuv420p at 24fps, muted, with faststart; no retiming, fake motion or generated artwork. The clips repeat on the website, so boundaries are simple cuts and not claimed seamless. The raw captures contain navigation, and should not be published wholesale.

- voyage.mp4: daytrip-gameplay.mp4, seconds18–30, crop1400x646 at(450,160). Walking passengers, captain, crew and cleaning robot in laundry/cafe rooms. Poster at clip second1.
- passengers.mp4: daytrip-gameplay.mp4, seconds18–30, crop700x482 at(1490,212), resized640x440. Real bathroom traffic, wheelchair rider and floor robots. Poster at clip second11.
- pipes.mp4: landscape-gameplay.mp4 (Floating City), seconds27–39, crop1000x690 at(700,160), resized640x442. Actual warning glow, disconnected-junction spill and then its ending; retains real simulation chronology. Poster at clip second1.

Inspected first/last sampled frames of all three final clips: stable framing, no navigation/debug overlays or private data, changing actor positions and real water activity. Combined file size approximately686KB before website copies. ship-life.mp4 uses landscape-gameplay.mp4 seconds 1–13, crop 1260×868 at (640,90), scaled to 640×440 at 30fps. Its poster is the first frame. This shows the actual Floating City overview, with no pipe controls. Simulator encoding does not establish physical-device frame pacing.

## Artwork

wordmark.png, ship.png and icon.png are optimized copies of the game’s production wordmark, ship-and-duck Icon Composer layer and light app icon. Only resolution/compression changed. favicon.svg is a small site-specific ship motif. No new AI imagery was generated for this website.

Gameplay source revision: 210e1cf, with website legal-link configuration changes that do not modify rendering or simulation. Raw captures are retained privately; only the selected clips and posters are published here.
