window.SITE = {
  "title": "Sunspots seen from Mars",
  "subtitle": "Perseverance Mastcam-Z (right and left cameras) compared with SDO/HMI, 1 December 2022 to 15 December 2022",
  "author": null,
  "repo_url": null,
  "reference": {
    "url": "https://ui.adsabs.harvard.edu/abs/2025AGUFMSH13D2129A/abstract",
    "label": "AGU Fall Meeting 2025, abstract SH13D-2129 (NASA ADS)"
  },
  "contact": {
    "name": "Shea Hess Webber",
    "email": "shessweb@stanford.edu"
  },
  "generated": "2026-11-13 15:39 UTC",
  "campaign": {
    "n_slots": 18,
    "tau": 5.0,
    "f_u": 0.2,
    "eyes": {
      "R": {
        "label": "Right camera (R7, 880 nm)",
        "n_obs": 18,
        "n_pairs": 37,
        "r_umbra": 0.7186112875446464,
        "k_umbra": 0.8760096394348705
      },
      "L": {
        "label": "Left camera (L7, red, green and blue)",
        "n_obs": 14,
        "n_pairs": 46,
        "r_umbra": 0.9968494601064355,
        "k_umbra": 0.6334359415100455
      }
    },
    "start": "2022-12-01",
    "end": "2022-12-15"
  },
  "slots": [
    {
      "key": "obs-20221201-0438",
      "date": "2022-12-01",
      "time": "04:38",
      "utc": "2022-12-01 04:38:21",
      "sol": 633,
      "sep": 3.5589433,
      "hmi": "2022-12-01T04:33:23",
      "geometry": "figures/ZR7_0633_0723140968_473RAD_N0310000ZCAM01002_1100LMA01_geometry.png",
      "eyes": {
        "L": {
          "image": "ZL7_0633_0723140945_456RAD_N0310000ZCAM01002_1100LMA01.IMG",
          "stem": "ZL7_0633_0723140945_456RAD_N0310000ZCAM01002_1100LMA01",
          "label": "Left camera (L7, red, green and blue)",
          "filter": "ZCAM_L7_RGB_ND6",
          "time": "04:38:21",
          "noise": 0.021190265,
          "overview": "figures/ZL7_0633_0723140945_456RAD_N0310000ZCAM01002_1100LMA01_overview.png",
          "summary": "Mastcam-Z left camera (Perseverance, Mars) vs SDO/HMI (Earth): sunspot summary\n==============================================================================\nImage        ZL7_0633_0723140945_456RAD_N0310000ZCAM01002_1100LMA01.IMG\nTime         2022-12-01 04:38:21 UTC    sol 633    LTST 13:24:20\nFilter       ZCAM_L7_RGB_ND6: red, green and blue (630, 544, 480 nm), effective 550 nm\nGeometry     Mars–Earth separation +3.6°    Sun–Mars 1.525 AU    light time 761 s\n             L0/B0 seen from Mars   54.45° / +1.16°\n             L0/B0 seen from Earth  50.85° / +0.89°\nImage        disk radius 45.2 px (1 px = 1.27° at disk centre), PSF sigma 0.75 px, noise 2.12 % per pixel\nHMI          2022-12-01T04:33:23 (offset +28 s removed by differential rotation)\nThreshold    S/N >= 5\n\nAreas are in MSH (millionths of the solar hemisphere), corrected for foreshortening.\n  A_def      measured light deficit: area of a perfectly black spot removing the same light\n  U          Mastcam-Z umbral area  U = 0.63 x A_def\n             (0.63 = f_u / d;  d = 0.316 mean darkening of a typical spot in this band,\n              f_u = 0.20 typical umbral fraction)\n  HMI umbra  area of the HMI pixels darker than 0.55 of the quiet Sun (617 nm)\nPositions: lat = heliographic latitude, lon = Stonyhurst longitude (0 = towards Earth),\nCarr = Carrington longitude, mu = cosine of the angle from disk centre as seen from Mars.\n\n1. MASTCAM-Z DETECTIONS (S/N >= 5): 0\n   Weaker candidates (3 <= S/N < 5), not counted as detections: 14\n\n2. HMI SUNSPOT GROUPS VISIBLE FROM MARS (area >= 10 MSH): 3   (+1 smaller)\n   ID  NOAA         lat     lon   Carr   mu  umbra   total  zone  seen by Mastcam-Z\n   H1  AR 13153   -16.4   -81.1  329.7  0.08     23     532  no    no\n   H2  AR 13152   +28.2   +26.8   77.7  0.82      5      23  yes   no\n   H3  AR 13154   -37.7    -4.8   46.1  0.77      5      22  yes   no\n   zone = inside the evaluation zone (rho <= 0.9 seen from Mars, mu >= 0.2 seen from Earth)\n\n3. UMBRAL AREA, MASTCAM-Z AGAINST HMI (matched spots): 0\n",
          "summary_file": "summaries/ZL7_0633_0723140945_456RAD_N0310000ZCAM01002_1100LMA01.txt",
          "n_det": 0,
          "n_weak": 14,
          "n_groups": 3,
          "n_groups_zone": 2,
          "n_seen": 0,
          "n_pairs": 0,
          "r_umbra": null,
          "k_umbra": 0.6334359415100455
        },
        "R": {
          "image": "ZR7_0633_0723140968_473RAD_N0310000ZCAM01002_1100LMA01.IMG",
          "stem": "ZR7_0633_0723140968_473RAD_N0310000ZCAM01002_1100LMA01",
          "label": "Right camera (R7, 880 nm)",
          "filter": "ZCAM_R7_880NM_ND5",
          "time": "04:38:29",
          "noise": 0.0166944,
          "overview": "figures/ZR7_0633_0723140968_473RAD_N0310000ZCAM01002_1100LMA01_overview.png",
          "summary": "Mastcam-Z right camera (Perseverance, Mars) vs SDO/HMI (Earth): sunspot summary\n==============================================================================\nImage        ZR7_0633_0723140968_473RAD_N0310000ZCAM01002_1100LMA01.IMG\nTime         2022-12-01 04:38:29 UTC    sol 633    LTST 13:24:28\nFilter       ZCAM_R7_880NM_ND5: 880 nm\nGeometry     Mars–Earth separation +3.6°    Sun–Mars 1.525 AU    light time 761 s\n             L0/B0 seen from Mars   54.45° / +1.16°\n             L0/B0 seen from Earth  50.85° / +0.89°\nImage        disk radius 45.2 px (1 px = 1.27° at disk centre), PSF sigma 0.90 px, noise 1.67 % per pixel\nHMI          2022-12-01T04:33:23 (offset +37 s removed by differential rotation)\nThreshold    S/N >= 5\n\nAreas are in MSH (millionths of the solar hemisphere), corrected for foreshortening.\n  A_def      measured light deficit: area of a perfectly black spot removing the same light\n  U          Mastcam-Z umbral area  U = 0.88 x A_def\n             (0.88 = f_u / d;  d = 0.228 mean darkening of a typical spot in this band,\n              f_u = 0.20 typical umbral fraction)\n  HMI umbra  area of the HMI pixels darker than 0.55 of the quiet Sun (617 nm)\nPositions: lat = heliographic latitude, lon = Stonyhurst longitude (0 = towards Earth),\nCarr = Carrington longitude, mu = cosine of the angle from disk centre as seen from Mars.\n\n1. MASTCAM-Z DETECTIONS (S/N >= 5): 0\n   Weaker candidates (3 <= S/N < 5), not counted as detections: 5\n\n2. HMI SUNSPOT GROUPS VISIBLE FROM MARS (area >= 10 MSH): 3   (+1 smaller)\n   ID  NOAA         lat     lon   Carr   mu  umbra   total  zone  seen by Mastcam-Z\n   H1  AR 13153   -16.4   -81.1  329.7  0.08     23     532  no    no\n   H2  AR 13152   +28.2   +26.8   77.7  0.82      5      23  yes   no\n   H3  AR 13154   -37.7    -4.8   46.1  0.77      5      22  yes   no\n   zone = inside the evaluation zone (rho <= 0.9 seen from Mars, mu >= 0.2 seen from Earth)\n\n3. UMBRAL AREA, MASTCAM-Z AGAINST HMI (matched spots): 0\n",
          "summary_file": "summaries/ZR7_0633_0723140968_473RAD_N0310000ZCAM01002_1100LMA01.txt",
          "n_det": 0,
          "n_weak": 5,
          "n_groups": 3,
          "n_groups_zone": 2,
          "n_seen": 0,
          "n_pairs": 0,
          "r_umbra": null,
          "k_umbra": 0.8760096394348705
        }
      }
    }
  ]
};
