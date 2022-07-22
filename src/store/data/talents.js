export const specNames = {
  41: "Fire",
  61: "Frost",
  81: "Arcane",
  161: "Arms",
  163: "Protection",
  164: "Fury",
  181: "Combat",
  182: "Assassination",
  183: "Subtlety",
  201: "Discipline",
  202: "Holy",
  203: "Shadow",
  261: "Elemental",
  262: "Restoration",
  263: "Enhancement",
  281: "Feral Combat",
  282: "Restoration",
  283: "Balance",
  301: "Destruction",
  302: "Affliction",
  303: "Demonology",
  361: "Beast Mastery",
  362: "Survival",
  363: "Marksmanship",
  381: "Retribution",
  382: "Holy",
  383: "Protection",
  398: "Blood",
  399: "Frost",
  400: "Unholy",
}

export const talentsBySpecs = {
  "41": {
    "23": {
      "id": 23,
      "row": 2,
      "col": 3,
      "icon": "spell_fire_fire",
      "ranks": [
        11083,
        12351
      ],
      "requires": [],
      "specId": 41
    },
    "24": {
      "id": 24,
      "row": 3,
      "col": 1,
      "icon": "spell_fire_firearmor",
      "ranks": [
        11094,
        13043
      ],
      "requires": [],
      "specId": 41
    },
    "25": {
      "id": 25,
      "row": 3,
      "col": 0,
      "icon": "spell_fire_soulburn",
      "ranks": [
        11095,
        12872,
        12873
      ],
      "requires": [],
      "specId": 41
    },
    "26": {
      "id": 26,
      "row": 0,
      "col": 2,
      "icon": "spell_fire_flamebolt",
      "ranks": [
        11069,
        12338,
        12339,
        12340,
        12341
      ],
      "requires": [],
      "specId": 41
    },
    "27": {
      "id": 27,
      "row": 0,
      "col": 0,
      "icon": "spell_fire_fireball",
      "ranks": [
        11078,
        11080
      ],
      "requires": [],
      "specId": 41
    },
    "28": {
      "id": 28,
      "row": 2,
      "col": 0,
      "icon": "spell_fire_flare",
      "ranks": [
        11100,
        12353
      ],
      "requires": [],
      "specId": 41
    },
    "29": {
      "id": 29,
      "row": 2,
      "col": 2,
      "icon": "spell_fire_fireball02",
      "ranks": [
        11366
      ],
      "requires": [],
      "specId": 41
    },
    "30": {
      "id": 30,
      "row": 2,
      "col": 1,
      "icon": "spell_fire_meteorstorm",
      "ranks": [
        11103,
        12357,
        12358
      ],
      "requires": [],
      "specId": 41
    },
    "31": {
      "id": 31,
      "row": 1,
      "col": 2,
      "icon": "ability_mage_worldinflames",
      "ranks": [
        11108,
        12349,
        12350
      ],
      "requires": [],
      "specId": 41
    },
    "32": {
      "id": 32,
      "row": 4,
      "col": 2,
      "icon": "spell_holy_excorcism_02",
      "ranks": [
        11113
      ],
      "requires": [
        {
          "id": 29,
          "qty": 1
        }
      ],
      "specId": 41
    },
    "33": {
      "id": 33,
      "row": 4,
      "col": 1,
      "icon": "spell_nature_wispheal",
      "ranks": [
        11115,
        11367,
        11368
      ],
      "requires": [],
      "specId": 41
    },
    "34": {
      "id": 34,
      "row": 1,
      "col": 0,
      "icon": "spell_fire_incinerate",
      "ranks": [
        11119,
        11120,
        12846,
        12847,
        12848
      ],
      "requires": [],
      "specId": 41
    },
    "35": {
      "id": 35,
      "row": 5,
      "col": 2,
      "icon": "spell_fire_immolation",
      "ranks": [
        11124,
        12378,
        12398,
        12399,
        12400
      ],
      "requires": [],
      "specId": 41
    },
    "36": {
      "id": 36,
      "row": 6,
      "col": 1,
      "icon": "spell_fire_sealoffire",
      "ranks": [
        11129
      ],
      "requires": [
        {
          "id": 33,
          "qty": 3
        }
      ],
      "specId": 41
    },
    "1141": {
      "id": 1141,
      "row": 0,
      "col": 1,
      "icon": "spell_fire_flameshock",
      "ranks": [
        18459,
        18460,
        54734
      ],
      "requires": [],
      "specId": 41
    },
    "1639": {
      "id": 1639,
      "row": 3,
      "col": 3,
      "icon": "spell_fire_masterofelements",
      "ranks": [
        29074,
        29075,
        29076
      ],
      "requires": [],
      "specId": 41
    },
    "1730": {
      "id": 1730,
      "row": 4,
      "col": 0,
      "icon": "spell_fire_playingwithfire",
      "ranks": [
        31638,
        31639,
        31640
      ],
      "requires": [],
      "specId": 41
    },
    "1731": {
      "id": 1731,
      "row": 5,
      "col": 0,
      "icon": "spell_fire_burningspeed",
      "ranks": [
        31641,
        31642
      ],
      "requires": [],
      "specId": 41
    },
    "1732": {
      "id": 1732,
      "row": 6,
      "col": 2,
      "icon": "spell_fire_moltenblood",
      "ranks": [
        31679,
        31680
      ],
      "requires": [],
      "specId": 41
    },
    "1733": {
      "id": 1733,
      "row": 6,
      "col": 0,
      "icon": "spell_fire_burnout",
      "ranks": [
        34293,
        34295,
        34296
      ],
      "requires": [],
      "specId": 41
    },
    "1734": {
      "id": 1734,
      "row": 7,
      "col": 2,
      "icon": "spell_fire_flamebolt",
      "ranks": [
        31656,
        31657,
        31658
      ],
      "requires": [],
      "specId": 41
    },
    "1735": {
      "id": 1735,
      "row": 8,
      "col": 1,
      "icon": "inv_misc_head_dragon_01",
      "ranks": [
        31661
      ],
      "requires": [
        {
          "id": 36,
          "qty": 1
        }
      ],
      "specId": 41
    },
    "1848": {
      "id": 1848,
      "row": 7,
      "col": 0,
      "icon": "ability_mage_fierypayback",
      "ranks": [
        64353,
        64357
      ],
      "requires": [],
      "specId": 41
    },
    "1849": {
      "id": 1849,
      "row": 8,
      "col": 0,
      "icon": "ability_mage_firestarter",
      "ranks": [
        44442,
        44443
      ],
      "requires": [
        {
          "id": 1735,
          "qty": 1
        }
      ],
      "specId": 41
    },
    "1850": {
      "id": 1850,
      "row": 8,
      "col": 2,
      "icon": "ability_mage_hotstreak",
      "ranks": [
        44445,
        44446,
        44448
      ],
      "requires": [],
      "specId": 41
    },
    "1851": {
      "id": 1851,
      "row": 9,
      "col": 1,
      "icon": "ability_mage_burnout",
      "ranks": [
        44449,
        44469,
        44470,
        44471,
        44472
      ],
      "requires": [],
      "specId": 41
    },
    "1852": {
      "id": 1852,
      "row": 10,
      "col": 1,
      "icon": "ability_mage_livingbomb",
      "ranks": [
        44457
      ],
      "requires": [],
      "specId": 41
    },
    "2212": {
      "id": 2212,
      "row": 1,
      "col": 1,
      "icon": "spell_fire_totemofwrath",
      "ranks": [
        54747,
        54749
      ],
      "requires": [],
      "specId": 41
    }
  },
  "61": {
    "37": {
      "id": 37,
      "row": 0,
      "col": 1,
      "icon": "spell_frost_frostbolt02",
      "ranks": [
        11070,
        12473,
        16763,
        16765,
        16766
      ],
      "requires": [],
      "specId": 61
    },
    "38": {
      "id": 38,
      "row": 0,
      "col": 0,
      "icon": "spell_frost_frostarmor",
      "ranks": [
        11071,
        12496,
        12497
      ],
      "requires": [],
      "specId": 61
    },
    "61": {
      "id": 61,
      "row": 2,
      "col": 0,
      "icon": "spell_frost_frostbolt",
      "ranks": [
        11151,
        12952,
        12953
      ],
      "requires": [],
      "specId": 61
    },
    "62": {
      "id": 62,
      "row": 0,
      "col": 2,
      "icon": "spell_frost_icefloes",
      "ranks": [
        31670,
        31672,
        55094
      ],
      "requires": [],
      "specId": 61
    },
    "63": {
      "id": 63,
      "row": 2,
      "col": 2,
      "icon": "spell_frost_icestorm",
      "ranks": [
        11185,
        12487,
        12488
      ],
      "requires": [],
      "specId": 61
    },
    "64": {
      "id": 64,
      "row": 4,
      "col": 2,
      "icon": "spell_frost_glacier",
      "ranks": [
        11190,
        12489,
        12490
      ],
      "requires": [],
      "specId": 61
    },
    "65": {
      "id": 65,
      "row": 1,
      "col": 3,
      "icon": "spell_frost_wisp",
      "ranks": [
        11175,
        12569,
        12571
      ],
      "requires": [],
      "specId": 61
    },
    "66": {
      "id": 66,
      "row": 3,
      "col": 1,
      "icon": "spell_frost_stun",
      "ranks": [
        11160,
        12518,
        12519
      ],
      "requires": [],
      "specId": 61
    },
    "67": {
      "id": 67,
      "row": 3,
      "col": 2,
      "icon": "spell_frost_frostshock",
      "ranks": [
        11170,
        12982,
        12983
      ],
      "requires": [],
      "specId": 61
    },
    "68": {
      "id": 68,
      "row": 5,
      "col": 2,
      "icon": "spell_frost_chillingblast",
      "ranks": [
        11180,
        28592,
        28593
      ],
      "requires": [],
      "specId": 61
    },
    "69": {
      "id": 69,
      "row": 2,
      "col": 1,
      "icon": "spell_frost_coldhearted",
      "ranks": [
        12472
      ],
      "requires": [],
      "specId": 61
    },
    "70": {
      "id": 70,
      "row": 1,
      "col": 1,
      "icon": "spell_frost_frostward",
      "ranks": [
        11189,
        28332
      ],
      "requires": [],
      "specId": 61
    },
    "71": {
      "id": 71,
      "row": 6,
      "col": 1,
      "icon": "spell_ice_lament",
      "ranks": [
        11426
      ],
      "requires": [
        {
          "id": 72,
          "qty": 1
        }
      ],
      "specId": 61
    },
    "72": {
      "id": 72,
      "row": 4,
      "col": 1,
      "icon": "spell_frost_wizardmark",
      "ranks": [
        11958
      ],
      "requires": [],
      "specId": 61
    },
    "73": {
      "id": 73,
      "row": 1,
      "col": 0,
      "icon": "spell_frost_iceshard",
      "ranks": [
        11207,
        12672,
        15047
      ],
      "requires": [],
      "specId": 61
    },
    "741": {
      "id": 741,
      "row": 3,
      "col": 0,
      "icon": "spell_shadow_darkritual",
      "ranks": [
        16757,
        16758
      ],
      "requires": [],
      "specId": 61
    },
    "1649": {
      "id": 1649,
      "row": 1,
      "col": 2,
      "icon": "spell_ice_magicdamage",
      "ranks": [
        29438,
        29439,
        29440
      ],
      "requires": [],
      "specId": 61
    },
    "1736": {
      "id": 1736,
      "row": 4,
      "col": 3,
      "icon": "spell_frost_frozencore",
      "ranks": [
        31667,
        31668,
        31669
      ],
      "requires": [],
      "specId": 61
    },
    "1737": {
      "id": 1737,
      "row": 5,
      "col": 0,
      "icon": "ability_mage_coldasice",
      "ranks": [
        55091,
        55092
      ],
      "requires": [
        {
          "id": 72,
          "qty": 1
        }
      ],
      "specId": 61
    },
    "1738": {
      "id": 1738,
      "row": 6,
      "col": 2,
      "icon": "spell_frost_arcticwinds",
      "ranks": [
        31674,
        31675,
        31676,
        31677,
        31678
      ],
      "requires": [],
      "specId": 61
    },
    "1740": {
      "id": 1740,
      "row": 7,
      "col": 1,
      "icon": "spell_frost_frostbolt02",
      "ranks": [
        31682,
        31683
      ],
      "requires": [],
      "specId": 61
    },
    "1741": {
      "id": 1741,
      "row": 8,
      "col": 1,
      "icon": "spell_frost_summonwaterelemental_2",
      "ranks": [
        31687
      ],
      "requires": [],
      "specId": 61
    },
    "1853": {
      "id": 1853,
      "row": 7,
      "col": 2,
      "icon": "ability_mage_wintersgrasp",
      "ranks": [
        44543,
        44545
      ],
      "requires": [],
      "specId": 61
    },
    "1854": {
      "id": 1854,
      "row": 8,
      "col": 0,
      "icon": "ability_mage_brainfreeze",
      "ranks": [
        44546,
        44548,
        44549
      ],
      "requires": [],
      "specId": 61
    },
    "1855": {
      "id": 1855,
      "row": 8,
      "col": 2,
      "icon": "spell_frost_summonwaterelemental_2",
      "ranks": [
        44557,
        44560,
        44561
      ],
      "requires": [
        {
          "id": 1741,
          "qty": 1
        }
      ],
      "specId": 61
    },
    "1856": {
      "id": 1856,
      "row": 9,
      "col": 1,
      "icon": "ability_mage_chilledtothebone",
      "ranks": [
        44566,
        44567,
        44568,
        44570,
        44571
      ],
      "requires": [],
      "specId": 61
    },
    "1857": {
      "id": 1857,
      "row": 10,
      "col": 1,
      "icon": "ability_mage_deepfreeze",
      "ranks": [
        44572
      ],
      "requires": [],
      "specId": 61
    },
    "2214": {
      "id": 2214,
      "row": 6,
      "col": 0,
      "icon": "ability_mage_shattershield",
      "ranks": [
        44745,
        54787
      ],
      "requires": [
        {
          "id": 71,
          "qty": 1
        }
      ],
      "specId": 61
    }
  },
  "81": {
    "74": {
      "id": 74,
      "row": 0,
      "col": 0,
      "icon": "spell_holy_dispelmagic",
      "ranks": [
        11210,
        12592
      ],
      "requires": [],
      "specId": 81
    },
    "75": {
      "id": 75,
      "row": 1,
      "col": 2,
      "icon": "spell_shadow_manaburn",
      "ranks": [
        11213,
        12574,
        12575,
        12576,
        12577
      ],
      "requires": [],
      "specId": 81
    },
    "76": {
      "id": 76,
      "row": 0,
      "col": 1,
      "icon": "spell_holy_devotion",
      "ranks": [
        11222,
        12839,
        12840
      ],
      "requires": [],
      "specId": 81
    },
    "77": {
      "id": 77,
      "row": 4,
      "col": 3,
      "icon": "spell_shadow_charm",
      "ranks": [
        11232,
        12500,
        12501,
        12502,
        12503
      ],
      "requires": [],
      "specId": 81
    },
    "80": {
      "id": 80,
      "row": 0,
      "col": 2,
      "icon": "spell_nature_starfall",
      "ranks": [
        11237,
        12463,
        12464,
        16769,
        16770
      ],
      "requires": [],
      "specId": 81
    },
    "81": {
      "id": 81,
      "row": 2,
      "col": 1,
      "icon": "spell_nature_wispsplode",
      "ranks": [
        11242,
        12467,
        12469
      ],
      "requires": [],
      "specId": 81
    },
    "82": {
      "id": 82,
      "row": 2,
      "col": 0,
      "icon": "spell_nature_abolishmagic",
      "ranks": [
        11247,
        12606
      ],
      "requires": [],
      "specId": 81
    },
    "83": {
      "id": 83,
      "row": 3,
      "col": 0,
      "icon": "spell_shadow_detectlesserinvisibility",
      "ranks": [
        11252,
        12605
      ],
      "requires": [],
      "specId": 81
    },
    "85": {
      "id": 85,
      "row": 1,
      "col": 0,
      "icon": "spell_arcane_arcaneresilience",
      "ranks": [
        28574,
        54658,
        54659
      ],
      "requires": [],
      "specId": 81
    },
    "86": {
      "id": 86,
      "row": 4,
      "col": 1,
      "icon": "spell_nature_enchantarmor",
      "ranks": [
        12043
      ],
      "requires": [],
      "specId": 81
    },
    "87": {
      "id": 87,
      "row": 6,
      "col": 1,
      "icon": "spell_nature_lightning",
      "ranks": [
        12042
      ],
      "requires": [
        {
          "id": 421,
          "qty": 3
        }
      ],
      "specId": 81
    },
    "88": {
      "id": 88,
      "row": 3,
      "col": 1,
      "icon": "spell_frost_iceshock",
      "ranks": [
        11255,
        12598
      ],
      "requires": [],
      "specId": 81
    },
    "421": {
      "id": 421,
      "row": 5,
      "col": 1,
      "icon": "spell_shadow_teleport",
      "ranks": [
        15058,
        15059,
        15060
      ],
      "requires": [
        {
          "id": 86,
          "qty": 1
        }
      ],
      "specId": 81
    },
    "1142": {
      "id": 1142,
      "row": 3,
      "col": 2,
      "icon": "spell_shadow_siphonmana",
      "ranks": [
        18462,
        18463,
        18464
      ],
      "requires": [],
      "specId": 81
    },
    "1650": {
      "id": 1650,
      "row": 1,
      "col": 1,
      "icon": "spell_nature_astralrecalgroup",
      "ranks": [
        29441,
        29444
      ],
      "requires": [],
      "specId": 81
    },
    "1724": {
      "id": 1724,
      "row": 4,
      "col": 0,
      "icon": "spell_arcane_blink",
      "ranks": [
        31569,
        31570
      ],
      "requires": [],
      "specId": 81
    },
    "1725": {
      "id": 1725,
      "row": 5,
      "col": 2,
      "icon": "spell_arcane_arcanepotency",
      "ranks": [
        31571,
        31572
      ],
      "requires": [
        {
          "id": 86,
          "qty": 1
        }
      ],
      "specId": 81
    },
    "1726": {
      "id": 1726,
      "row": 5,
      "col": 0,
      "icon": "spell_arcane_prismaticcloak",
      "ranks": [
        31574,
        31575,
        54354
      ],
      "requires": [],
      "specId": 81
    },
    "1727": {
      "id": 1727,
      "row": 6,
      "col": 0,
      "icon": "spell_nature_starfall",
      "ranks": [
        31579,
        31582,
        31583
      ],
      "requires": [],
      "specId": 81
    },
    "1728": {
      "id": 1728,
      "row": 7,
      "col": 2,
      "icon": "spell_arcane_mindmastery",
      "ranks": [
        31584,
        31585,
        31586,
        31587,
        31588
      ],
      "requires": [],
      "specId": 81
    },
    "1729": {
      "id": 1729,
      "row": 8,
      "col": 1,
      "icon": "spell_nature_slow",
      "ranks": [
        31589
      ],
      "requires": [],
      "specId": 81
    },
    "1826": {
      "id": 1826,
      "row": 9,
      "col": 2,
      "icon": "spell_arcane_arcanetorrent",
      "ranks": [
        35578,
        35581
      ],
      "requires": [],
      "specId": 81
    },
    "1843": {
      "id": 1843,
      "row": 7,
      "col": 1,
      "icon": "ability_mage_potentspirit",
      "ranks": [
        44378,
        44379
      ],
      "requires": [
        {
          "id": 87,
          "qty": 1
        }
      ],
      "specId": 81
    },
    "1844": {
      "id": 1844,
      "row": 6,
      "col": 2,
      "icon": "ability_mage_incantersabsorbtion",
      "ranks": [
        44394,
        44395,
        44396
      ],
      "requires": [],
      "specId": 81
    },
    "1845": {
      "id": 1845,
      "row": 2,
      "col": 2,
      "icon": "ability_mage_studentofthemind",
      "ranks": [
        44397,
        44398,
        44399
      ],
      "requires": [],
      "specId": 81
    },
    "1846": {
      "id": 1846,
      "row": 9,
      "col": 1,
      "icon": "ability_mage_netherwindpresence",
      "ranks": [
        44400,
        44402,
        44403
      ],
      "requires": [],
      "specId": 81
    },
    "1847": {
      "id": 1847,
      "row": 10,
      "col": 1,
      "icon": "ability_mage_arcanebarrage",
      "ranks": [
        44425
      ],
      "requires": [],
      "specId": 81
    },
    "2209": {
      "id": 2209,
      "row": 8,
      "col": 2,
      "icon": "ability_mage_missilebarrage",
      "ranks": [
        44404,
        54486,
        54488,
        54489,
        54490
      ],
      "requires": [],
      "specId": 81
    },
    "2211": {
      "id": 2211,
      "row": 2,
      "col": 3,
      "icon": "spell_arcane_studentofmagic",
      "ranks": [
        54646
      ],
      "requires": [],
      "specId": 81
    },
    "2222": {
      "id": 2222,
      "row": 3,
      "col": 3,
      "icon": "ability_mage_tormentoftheweak",
      "ranks": [
        29447,
        55339,
        55340
      ],
      "requires": [],
      "specId": 81
    }
  },
  "161": {
    "121": {
      "id": 121,
      "row": 2,
      "col": 3,
      "icon": "ability_backstab",
      "ranks": [
        12834,
        12849,
        12867
      ],
      "requires": [
        {
          "id": 662,
          "qty": 2
        }
      ],
      "specId": 161
    },
    "123": {
      "id": 123,
      "row": 4,
      "col": 3,
      "icon": "inv_sword_27",
      "ranks": [
        12281,
        12812,
        12813,
        12814,
        12815
      ],
      "requires": [],
      "specId": 161
    },
    "124": {
      "id": 124,
      "row": 0,
      "col": 0,
      "icon": "ability_rogue_ambush",
      "ranks": [
        12282,
        12663,
        12664
      ],
      "requires": [],
      "specId": 161
    },
    "125": {
      "id": 125,
      "row": 4,
      "col": 2,
      "icon": "inv_mace_01",
      "ranks": [
        12284,
        12701,
        12702,
        12703,
        12704
      ],
      "requires": [],
      "specId": 161
    },
    "126": {
      "id": 126,
      "row": 1,
      "col": 0,
      "icon": "ability_warrior_charge",
      "ranks": [
        12285,
        12697
      ],
      "requires": [],
      "specId": 161
    },
    "127": {
      "id": 127,
      "row": 0,
      "col": 2,
      "icon": "ability_gouge",
      "ranks": [
        12286,
        12658
      ],
      "requires": [],
      "specId": 161
    },
    "128": {
      "id": 128,
      "row": 1,
      "col": 2,
      "icon": "spell_nature_enchantarmor",
      "ranks": [
        12295,
        12676,
        12677
      ],
      "requires": [],
      "specId": 161
    },
    "129": {
      "id": 129,
      "row": 5,
      "col": 2,
      "icon": "ability_shockwave",
      "ranks": [
        12289,
        12668,
        23695
      ],
      "requires": [],
      "specId": 161
    },
    "130": {
      "id": 130,
      "row": 0,
      "col": 1,
      "icon": "ability_parry",
      "ranks": [
        16462,
        16463,
        16464,
        16465,
        16466
      ],
      "requires": [],
      "specId": 161
    },
    "131": {
      "id": 131,
      "row": 2,
      "col": 0,
      "icon": "inv_sword_05",
      "ranks": [
        12290,
        12963
      ],
      "requires": [],
      "specId": 161
    },
    "132": {
      "id": 132,
      "row": 4,
      "col": 0,
      "icon": "inv_axe_06",
      "ranks": [
        12700,
        12781,
        12783,
        12784,
        12785
      ],
      "requires": [],
      "specId": 161
    },
    "133": {
      "id": 133,
      "row": 4,
      "col": 1,
      "icon": "ability_rogue_slicedice",
      "ranks": [
        12328
      ],
      "requires": [],
      "specId": 161
    },
    "134": {
      "id": 134,
      "row": 5,
      "col": 0,
      "icon": "ability_warrior_weaponmastery",
      "ranks": [
        20504,
        20505
      ],
      "requires": [],
      "specId": 161
    },
    "135": {
      "id": 135,
      "row": 6,
      "col": 1,
      "icon": "ability_warrior_savageblow",
      "ranks": [
        12294
      ],
      "requires": [
        {
          "id": 133,
          "qty": 1
        }
      ],
      "specId": 161
    },
    "136": {
      "id": 136,
      "row": 3,
      "col": 1,
      "icon": "inv_axe_09",
      "ranks": [
        12163,
        12711,
        12712
      ],
      "requires": [],
      "specId": 161
    },
    "137": {
      "id": 137,
      "row": 2,
      "col": 1,
      "icon": "spell_holy_blessingofstamina",
      "ranks": [
        12296
      ],
      "requires": [],
      "specId": 161
    },
    "641": {
      "id": 641,
      "row": 1,
      "col": 1,
      "icon": "spell_magic_magearmor",
      "ranks": [
        12300,
        12959,
        12960
      ],
      "requires": [],
      "specId": 161
    },
    "662": {
      "id": 662,
      "row": 2,
      "col": 2,
      "icon": "ability_searingarrow",
      "ranks": [
        16493,
        16494
      ],
      "requires": [],
      "specId": 161
    },
    "1661": {
      "id": 1661,
      "row": 8,
      "col": 1,
      "icon": "ability_warrior_endlessrage",
      "ranks": [
        29623
      ],
      "requires": [],
      "specId": 161
    },
    "1662": {
      "id": 1662,
      "row": 8,
      "col": 0,
      "icon": "ability_warrior_improveddisciplines",
      "ranks": [
        29723,
        29725,
        29724
      ],
      "requires": [],
      "specId": 161
    },
    "1663": {
      "id": 1663,
      "row": 6,
      "col": 0,
      "icon": "ability_hunter_harass",
      "ranks": [
        29834,
        29838
      ],
      "requires": [],
      "specId": 161
    },
    "1664": {
      "id": 1664,
      "row": 8,
      "col": 2,
      "icon": "ability_warrior_bloodfrenzy",
      "ranks": [
        29836,
        29859
      ],
      "requires": [],
      "specId": 161
    },
    "1824": {
      "id": 1824,
      "row": 7,
      "col": 1,
      "icon": "ability_warrior_savageblow",
      "ranks": [
        35446,
        35448,
        35449
      ],
      "requires": [
        {
          "id": 135,
          "qty": 1
        }
      ],
      "specId": 161
    },
    "1859": {
      "id": 1859,
      "row": 5,
      "col": 3,
      "icon": "ability_warrior_bloodnova",
      "ranks": [
        46854,
        46855
      ],
      "requires": [],
      "specId": 161
    },
    "1860": {
      "id": 1860,
      "row": 7,
      "col": 2,
      "icon": "ability_warrior_unrelentingassault",
      "ranks": [
        46859,
        46860
      ],
      "requires": [],
      "specId": 161
    },
    "1862": {
      "id": 1862,
      "row": 6,
      "col": 2,
      "icon": "ability_warrior_offensivestance",
      "ranks": [
        46865,
        46866
      ],
      "requires": [],
      "specId": 161
    },
    "1863": {
      "id": 1863,
      "row": 10,
      "col": 1,
      "icon": "ability_warrior_bladestorm",
      "ranks": [
        46924
      ],
      "requires": [],
      "specId": 161
    },
    "2231": {
      "id": 2231,
      "row": 9,
      "col": 1,
      "icon": "ability_warrior_trauma",
      "ranks": [
        46867,
        56611,
        56612,
        56613,
        56614
      ],
      "requires": [],
      "specId": 161
    },
    "2232": {
      "id": 2232,
      "row": 3,
      "col": 2,
      "icon": "ability_rogue_hungerforblood",
      "ranks": [
        56636,
        56637,
        56638
      ],
      "requires": [],
      "specId": 161
    },
    "2233": {
      "id": 2233,
      "row": 6,
      "col": 3,
      "icon": "ability_warrior_decisivestrike",
      "ranks": [
        12862,
        12330
      ],
      "requires": [],
      "specId": 161
    },
    "2283": {
      "id": 2283,
      "row": 7,
      "col": 0,
      "icon": "ability_warrior_bullrush",
      "ranks": [
        64976
      ],
      "requires": [],
      "specId": 161
    }
  },
  "163": {
    "138": {
      "id": 138,
      "row": 1,
      "col": 2,
      "icon": "spell_nature_mirrorimage",
      "ranks": [
        12297,
        12750,
        12751,
        12752,
        12753
      ],
      "requires": [],
      "specId": 163
    },
    "140": {
      "id": 140,
      "row": 2,
      "col": 3,
      "icon": "spell_holy_devotion",
      "ranks": [
        12299,
        12761,
        12762,
        12763,
        12764
      ],
      "requires": [],
      "specId": 163
    },
    "141": {
      "id": 141,
      "row": 0,
      "col": 2,
      "icon": "ability_thunderclap",
      "ranks": [
        12287,
        12665,
        12666
      ],
      "requires": [],
      "specId": 163
    },
    "142": {
      "id": 142,
      "row": 0,
      "col": 0,
      "icon": "ability_racial_bloodrage",
      "ranks": [
        12301,
        12818
      ],
      "requires": [],
      "specId": 163
    },
    "144": {
      "id": 144,
      "row": 1,
      "col": 1,
      "icon": "ability_warrior_incite",
      "ranks": [
        50685,
        50686,
        50687
      ],
      "requires": [],
      "specId": 163
    },
    "146": {
      "id": 146,
      "row": 3,
      "col": 2,
      "icon": "ability_warrior_sunder",
      "ranks": [
        12308,
        12810,
        12811
      ],
      "requires": [],
      "specId": 163
    },
    "147": {
      "id": 147,
      "row": 2,
      "col": 1,
      "icon": "ability_warrior_revenge",
      "ranks": [
        12797,
        12799
      ],
      "requires": [],
      "specId": 163
    },
    "148": {
      "id": 148,
      "row": 6,
      "col": 1,
      "icon": "ability_warrior_vigilance",
      "ranks": [
        50720
      ],
      "requires": [
        {
          "id": 152,
          "qty": 1
        }
      ],
      "specId": 163
    },
    "149": {
      "id": 149,
      "row": 4,
      "col": 2,
      "icon": "ability_warrior_shieldbash",
      "ranks": [
        12311,
        12958
      ],
      "requires": [],
      "specId": 163
    },
    "150": {
      "id": 150,
      "row": 4,
      "col": 0,
      "icon": "ability_warrior_shieldwall",
      "ranks": [
        12312,
        12803
      ],
      "requires": [],
      "specId": 163
    },
    "151": {
      "id": 151,
      "row": 3,
      "col": 1,
      "icon": "ability_warrior_disarm",
      "ranks": [
        12313,
        12804
      ],
      "requires": [],
      "specId": 163
    },
    "152": {
      "id": 152,
      "row": 4,
      "col": 1,
      "icon": "ability_thunderbolt",
      "ranks": [
        12809
      ],
      "requires": [],
      "specId": 163
    },
    "153": {
      "id": 153,
      "row": 2,
      "col": 0,
      "icon": "spell_holy_ashestoashes",
      "ranks": [
        12975
      ],
      "requires": [],
      "specId": 163
    },
    "702": {
      "id": 702,
      "row": 5,
      "col": 2,
      "icon": "inv_sword_20",
      "ranks": [
        16538,
        16539,
        16540,
        16541,
        16542
      ],
      "requires": [],
      "specId": 163
    },
    "1601": {
      "id": 1601,
      "row": 0,
      "col": 1,
      "icon": "inv_shield_06",
      "ranks": [
        12298,
        12724,
        12725,
        12726,
        12727
      ],
      "requires": [],
      "specId": 163
    },
    "1652": {
      "id": 1652,
      "row": 6,
      "col": 0,
      "icon": "ability_warrior_defensivestance",
      "ranks": [
        29593,
        29594
      ],
      "requires": [],
      "specId": 163
    },
    "1653": {
      "id": 1653,
      "row": 7,
      "col": 1,
      "icon": "inv_helmet_21",
      "ranks": [
        29140,
        29143,
        29144
      ],
      "requires": [],
      "specId": 163
    },
    "1654": {
      "id": 1654,
      "row": 2,
      "col": 2,
      "icon": "ability_warrior_shieldmastery",
      "ranks": [
        29598,
        29599
      ],
      "requires": [],
      "specId": 163
    },
    "1660": {
      "id": 1660,
      "row": 6,
      "col": 2,
      "icon": "ability_warrior_focusedrage",
      "ranks": [
        29787,
        29790,
        29792
      ],
      "requires": [],
      "specId": 163
    },
    "1666": {
      "id": 1666,
      "row": 8,
      "col": 1,
      "icon": "inv_sword_11",
      "ranks": [
        20243
      ],
      "requires": [],
      "specId": 163
    },
    "1870": {
      "id": 1870,
      "row": 7,
      "col": 2,
      "icon": "ability_warrior_safeguard",
      "ranks": [
        46945,
        46949
      ],
      "requires": [],
      "specId": 163
    },
    "1871": {
      "id": 1871,
      "row": 9,
      "col": 1,
      "icon": "ability_warrior_swordandboard",
      "ranks": [
        46951,
        46952,
        46953
      ],
      "requires": [
        {
          "id": 1666,
          "qty": 1
        }
      ],
      "specId": 163
    },
    "1872": {
      "id": 1872,
      "row": 10,
      "col": 1,
      "icon": "ability_warrior_shockwave",
      "ranks": [
        46968
      ],
      "requires": [],
      "specId": 163
    },
    "1893": {
      "id": 1893,
      "row": 8,
      "col": 2,
      "icon": "ability_warrior_criticalblock",
      "ranks": [
        47294,
        47295,
        47296
      ],
      "requires": [],
      "specId": 163
    },
    "2236": {
      "id": 2236,
      "row": 8,
      "col": 0,
      "icon": "ability_warrior_warbringer",
      "ranks": [
        57499
      ],
      "requires": [],
      "specId": 163
    },
    "2246": {
      "id": 2246,
      "row": 9,
      "col": 2,
      "icon": "inv_shield_31",
      "ranks": [
        58872,
        58874
      ],
      "requires": [],
      "specId": 163
    },
    "2247": {
      "id": 2247,
      "row": 3,
      "col": 0,
      "icon": "ability_warrior_shieldreflection",
      "ranks": [
        59088,
        59089
      ],
      "requires": [],
      "specId": 163
    }
  },
  "164": {
    "154": {
      "id": 154,
      "row": 2,
      "col": 3,
      "icon": "spell_nature_focusedmind",
      "ranks": [
        12318,
        12857,
        12858,
        12860,
        12861
      ],
      "requires": [],
      "specId": 164
    },
    "155": {
      "id": 155,
      "row": 3,
      "col": 2,
      "icon": "spell_shadow_unholyfrenzy",
      "ranks": [
        12317,
        13045,
        13046,
        13047,
        13048
      ],
      "requires": [],
      "specId": 164
    },
    "156": {
      "id": 156,
      "row": 5,
      "col": 2,
      "icon": "ability_ghoulfrenzy",
      "ranks": [
        12319,
        12971,
        12972,
        12973,
        12974
      ],
      "requires": [],
      "specId": 164
    },
    "157": {
      "id": 157,
      "row": 0,
      "col": 2,
      "icon": "ability_rogue_eviscerate",
      "ranks": [
        12320,
        12852,
        12853,
        12855,
        12856
      ],
      "requires": [],
      "specId": 164
    },
    "158": {
      "id": 158,
      "row": 0,
      "col": 1,
      "icon": "spell_nature_purge",
      "ranks": [
        12321,
        12835
      ],
      "requires": [],
      "specId": 164
    },
    "159": {
      "id": 159,
      "row": 1,
      "col": 2,
      "icon": "spell_nature_stoneclawtotem",
      "ranks": [
        12322,
        12999,
        13000,
        13001,
        13002
      ],
      "requires": [],
      "specId": 164
    },
    "160": {
      "id": 160,
      "row": 2,
      "col": 1,
      "icon": "spell_shadow_deathscream",
      "ranks": [
        12323
      ],
      "requires": [],
      "specId": 164
    },
    "161": {
      "id": 161,
      "row": 1,
      "col": 1,
      "icon": "ability_warrior_warcry",
      "ranks": [
        12324,
        12876,
        12877,
        12878,
        12879
      ],
      "requires": [],
      "specId": 164
    },
    "165": {
      "id": 165,
      "row": 4,
      "col": 1,
      "icon": "spell_shadow_deathpact",
      "ranks": [
        12292
      ],
      "requires": [],
      "specId": 164
    },
    "166": {
      "id": 166,
      "row": 2,
      "col": 0,
      "icon": "ability_warrior_cleave",
      "ranks": [
        12329,
        12950,
        20496
      ],
      "requires": [],
      "specId": 164
    },
    "167": {
      "id": 167,
      "row": 6,
      "col": 1,
      "icon": "spell_nature_bloodlust",
      "ranks": [
        23881
      ],
      "requires": [
        {
          "id": 165,
          "qty": 1
        }
      ],
      "specId": 164
    },
    "661": {
      "id": 661,
      "row": 2,
      "col": 2,
      "icon": "spell_shadow_summonimp",
      "ranks": [
        16487,
        16489,
        16492
      ],
      "requires": [],
      "specId": 164
    },
    "1541": {
      "id": 1541,
      "row": 5,
      "col": 0,
      "icon": "spell_nature_ancestralguardian",
      "ranks": [
        20500,
        20501
      ],
      "requires": [],
      "specId": 164
    },
    "1542": {
      "id": 1542,
      "row": 3,
      "col": 1,
      "icon": "inv_sword_48",
      "ranks": [
        20502,
        20503
      ],
      "requires": [],
      "specId": 164
    },
    "1543": {
      "id": 1543,
      "row": 4,
      "col": 2,
      "icon": "ability_rogue_sprint",
      "ranks": [
        29888,
        29889
      ],
      "requires": [],
      "specId": 164
    },
    "1581": {
      "id": 1581,
      "row": 3,
      "col": 0,
      "icon": "ability_dualwield",
      "ranks": [
        23584,
        23585,
        23586,
        23587,
        23588
      ],
      "requires": [],
      "specId": 164
    },
    "1655": {
      "id": 1655,
      "row": 6,
      "col": 3,
      "icon": "ability_whirlwind",
      "ranks": [
        29721,
        29776
      ],
      "requires": [],
      "specId": 164
    },
    "1657": {
      "id": 1657,
      "row": 4,
      "col": 0,
      "icon": "ability_marksmanship",
      "ranks": [
        29590,
        29591,
        29592
      ],
      "requires": [],
      "specId": 164
    },
    "1658": {
      "id": 1658,
      "row": 7,
      "col": 3,
      "icon": "ability_racial_avatar",
      "ranks": [
        29759,
        29760,
        29761,
        29762,
        29763
      ],
      "requires": [],
      "specId": 164
    },
    "1659": {
      "id": 1659,
      "row": 8,
      "col": 1,
      "icon": "ability_warrior_rampage",
      "ranks": [
        29801
      ],
      "requires": [
        {
          "id": 167,
          "qty": 1
        }
      ],
      "specId": 164
    },
    "1864": {
      "id": 1864,
      "row": 6,
      "col": 0,
      "icon": "ability_warrior_endlessrage",
      "ranks": [
        46908,
        46909,
        56924
      ],
      "requires": [],
      "specId": 164
    },
    "1865": {
      "id": 1865,
      "row": 7,
      "col": 0,
      "icon": "ability_warrior_furiousresolve",
      "ranks": [
        46910,
        46911
      ],
      "requires": [],
      "specId": 164
    },
    "1866": {
      "id": 1866,
      "row": 8,
      "col": 2,
      "icon": "ability_warrior_bloodsurge",
      "ranks": [
        46913,
        46914,
        46915
      ],
      "requires": [
        {
          "id": 167,
          "qty": 1
        }
      ],
      "specId": 164
    },
    "1867": {
      "id": 1867,
      "row": 10,
      "col": 1,
      "icon": "ability_warrior_titansgrip",
      "ranks": [
        46917
      ],
      "requires": [],
      "specId": 164
    },
    "1868": {
      "id": 1868,
      "row": 8,
      "col": 0,
      "icon": "ability_heroicleap",
      "ranks": [
        60970
      ],
      "requires": [],
      "specId": 164
    },
    "2234": {
      "id": 2234,
      "row": 9,
      "col": 1,
      "icon": "ability_warrior_intensifyrage",
      "ranks": [
        56927,
        56929,
        56930,
        56931,
        56932
      ],
      "requires": [],
      "specId": 164
    },
    "2250": {
      "id": 2250,
      "row": 0,
      "col": 0,
      "icon": "inv_shoulder_22",
      "ranks": [
        61216,
        61221,
        61222
      ],
      "requires": [],
      "specId": 164
    }
  },
  "181": {
    "181": {
      "id": 181,
      "row": 1,
      "col": 3,
      "icon": "ability_marksmanship",
      "ranks": [
        13705,
        13832,
        13843,
        13844,
        13845
      ],
      "requires": [],
      "specId": 181
    },
    "182": {
      "id": 182,
      "row": 2,
      "col": 2,
      "icon": "inv_weapon_shortblade_05",
      "ranks": [
        13706,
        13804,
        13805,
        13806,
        13807
      ],
      "requires": [
        {
          "id": 221,
          "qty": 5
        }
      ],
      "specId": 181
    },
    "184": {
      "id": 184,
      "row": 4,
      "col": 0,
      "icon": "inv_mace_01",
      "ranks": [
        13709,
        13800,
        13801,
        13802,
        13803
      ],
      "requires": [],
      "specId": 181
    },
    "186": {
      "id": 186,
      "row": 3,
      "col": 2,
      "icon": "spell_nature_invisibilty",
      "ranks": [
        13712,
        13788,
        13789
      ],
      "requires": [],
      "specId": 181
    },
    "187": {
      "id": 187,
      "row": 1,
      "col": 1,
      "icon": "ability_parry",
      "ranks": [
        13713,
        13853,
        13854
      ],
      "requires": [],
      "specId": 181
    },
    "201": {
      "id": 201,
      "row": 0,
      "col": 1,
      "icon": "spell_shadow_ritualofsacrifice",
      "ranks": [
        13732,
        13863
      ],
      "requires": [],
      "specId": 181
    },
    "203": {
      "id": 203,
      "row": 0,
      "col": 0,
      "icon": "ability_gouge",
      "ranks": [
        13741,
        13793,
        13792
      ],
      "requires": [],
      "specId": 181
    },
    "204": {
      "id": 204,
      "row": 2,
      "col": 0,
      "icon": "spell_shadow_shadowward",
      "ranks": [
        13742,
        13872
      ],
      "requires": [],
      "specId": 181
    },
    "205": {
      "id": 205,
      "row": 6,
      "col": 1,
      "icon": "spell_shadow_shadowworddominate",
      "ranks": [
        13750
      ],
      "requires": [],
      "specId": 181
    },
    "206": {
      "id": 206,
      "row": 3,
      "col": 0,
      "icon": "ability_kick",
      "ranks": [
        13754,
        13867
      ],
      "requires": [],
      "specId": 181
    },
    "221": {
      "id": 221,
      "row": 0,
      "col": 2,
      "icon": "ability_dualwield",
      "ranks": [
        13715,
        13848,
        13849,
        13851,
        13852
      ],
      "requires": [],
      "specId": 181
    },
    "222": {
      "id": 222,
      "row": 3,
      "col": 1,
      "icon": "ability_rogue_sprint",
      "ranks": [
        13743,
        13875
      ],
      "requires": [],
      "specId": 181
    },
    "223": {
      "id": 223,
      "row": 4,
      "col": 1,
      "icon": "ability_warrior_punishingblow",
      "ranks": [
        13877
      ],
      "requires": [],
      "specId": 181
    },
    "242": {
      "id": 242,
      "row": 4,
      "col": 2,
      "icon": "inv_sword_27",
      "ranks": [
        13960,
        13961,
        13962,
        13963,
        13964
      ],
      "requires": [],
      "specId": 181
    },
    "301": {
      "id": 301,
      "row": 2,
      "col": 1,
      "icon": "ability_warrior_challange",
      "ranks": [
        14251
      ],
      "requires": [
        {
          "id": 187,
          "qty": 3
        }
      ],
      "specId": 181
    },
    "1122": {
      "id": 1122,
      "row": 3,
      "col": 3,
      "icon": "ability_racial_avatar",
      "ranks": [
        18427,
        18428,
        18429,
        61330,
        61331
      ],
      "requires": [],
      "specId": 181
    },
    "1703": {
      "id": 1703,
      "row": 5,
      "col": 1,
      "icon": "spell_holy_blessingofstrength",
      "ranks": [
        30919,
        30920
      ],
      "requires": [
        {
          "id": 223,
          "qty": 1
        }
      ],
      "specId": 181
    },
    "1705": {
      "id": 1705,
      "row": 6,
      "col": 0,
      "icon": "ability_warrior_revenge",
      "ranks": [
        31122,
        31123,
        61329
      ],
      "requires": [],
      "specId": 181
    },
    "1706": {
      "id": 1706,
      "row": 5,
      "col": 2,
      "icon": "ability_rogue_bladetwisting",
      "ranks": [
        31124,
        31126
      ],
      "requires": [],
      "specId": 181
    },
    "1707": {
      "id": 1707,
      "row": 6,
      "col": 2,
      "icon": "ability_rogue_nervesofsteel",
      "ranks": [
        31130,
        31131
      ],
      "requires": [],
      "specId": 181
    },
    "1709": {
      "id": 1709,
      "row": 8,
      "col": 1,
      "icon": "ability_rogue_surpriseattack",
      "ranks": [
        32601
      ],
      "requires": [
        {
          "id": 205,
          "qty": 1
        }
      ],
      "specId": 181
    },
    "1825": {
      "id": 1825,
      "row": 7,
      "col": 2,
      "icon": "inv_weapon_shortblade_38",
      "ranks": [
        35541,
        35550,
        35551,
        35552,
        35553
      ],
      "requires": [],
      "specId": 181
    },
    "1827": {
      "id": 1827,
      "row": 1,
      "col": 0,
      "icon": "ability_rogue_slicedice",
      "ranks": [
        14165,
        14166
      ],
      "requires": [],
      "specId": 181
    },
    "2072": {
      "id": 2072,
      "row": 7,
      "col": 0,
      "icon": "ability_rogue_throwingspecialization",
      "ranks": [
        5952,
        51679
      ],
      "requires": [],
      "specId": 181
    },
    "2073": {
      "id": 2073,
      "row": 8,
      "col": 0,
      "icon": "ability_rogue_unfairadvantage",
      "ranks": [
        51672,
        51674
      ],
      "requires": [],
      "specId": 181
    },
    "2074": {
      "id": 2074,
      "row": 8,
      "col": 2,
      "icon": "ability_creature_disease_03",
      "ranks": [
        51682,
        58413
      ],
      "requires": [],
      "specId": 181
    },
    "2075": {
      "id": 2075,
      "row": 9,
      "col": 1,
      "icon": "ability_rogue_preyontheweak",
      "ranks": [
        51685,
        51686,
        51687,
        51688,
        51689
      ],
      "requires": [],
      "specId": 181
    },
    "2076": {
      "id": 2076,
      "row": 10,
      "col": 1,
      "icon": "ability_rogue_murderspree",
      "ranks": [
        51690
      ],
      "requires": [],
      "specId": 181
    }
  },
  "182": {
    "268": {
      "id": 268,
      "row": 3,
      "col": 2,
      "icon": "ability_poisons",
      "ranks": [
        14113,
        14114,
        14115,
        14116,
        14117
      ],
      "requires": [],
      "specId": 182
    },
    "269": {
      "id": 269,
      "row": 2,
      "col": 2,
      "icon": "ability_criticalstrike",
      "ranks": [
        14128,
        14132,
        14135,
        14136,
        14137
      ],
      "requires": [
        {
          "id": 270,
          "qty": 5
        }
      ],
      "specId": 182
    },
    "270": {
      "id": 270,
      "row": 0,
      "col": 2,
      "icon": "ability_racial_bloodrage",
      "ranks": [
        14138,
        14139,
        14140,
        14141,
        14142
      ],
      "requires": [],
      "specId": 182
    },
    "272": {
      "id": 272,
      "row": 0,
      "col": 1,
      "icon": "ability_fiegndead",
      "ranks": [
        14144,
        14148
      ],
      "requires": [],
      "specId": 182
    },
    "273": {
      "id": 273,
      "row": 1,
      "col": 0,
      "icon": "ability_druid_disembowel",
      "ranks": [
        14156,
        14160,
        14161
      ],
      "requires": [],
      "specId": 182
    },
    "274": {
      "id": 274,
      "row": 5,
      "col": 2,
      "icon": "spell_shadow_deathscream",
      "ranks": [
        14158,
        14159
      ],
      "requires": [],
      "specId": 182
    },
    "276": {
      "id": 276,
      "row": 0,
      "col": 0,
      "icon": "ability_rogue_eviscerate",
      "ranks": [
        14162,
        14163,
        14164
      ],
      "requires": [],
      "specId": 182
    },
    "277": {
      "id": 277,
      "row": 1,
      "col": 3,
      "icon": "ability_backstab",
      "ranks": [
        13733,
        13865,
        13866
      ],
      "requires": [],
      "specId": 182
    },
    "278": {
      "id": 278,
      "row": 2,
      "col": 1,
      "icon": "ability_warrior_riposte",
      "ranks": [
        14168,
        14169
      ],
      "requires": [],
      "specId": 182
    },
    "279": {
      "id": 279,
      "row": 4,
      "col": 2,
      "icon": "ability_rogue_kidneyshot",
      "ranks": [
        14174,
        14175,
        14176
      ],
      "requires": [],
      "specId": 182
    },
    "280": {
      "id": 280,
      "row": 4,
      "col": 1,
      "icon": "spell_ice_lament",
      "ranks": [
        14177
      ],
      "requires": [],
      "specId": 182
    },
    "281": {
      "id": 281,
      "row": 6,
      "col": 1,
      "icon": "ability_hunter_rapidkilling",
      "ranks": [
        58426
      ],
      "requires": [],
      "specId": 182
    },
    "283": {
      "id": 283,
      "row": 5,
      "col": 1,
      "icon": "spell_shadow_chilltouch",
      "ranks": [
        14186,
        14190,
        14193,
        14194,
        14195
      ],
      "requires": [
        {
          "id": 280,
          "qty": 1
        }
      ],
      "specId": 182
    },
    "382": {
      "id": 382,
      "row": 2,
      "col": 0,
      "icon": "spell_nature_earthbindtotem",
      "ranks": [
        14983
      ],
      "requires": [],
      "specId": 182
    },
    "682": {
      "id": 682,
      "row": 3,
      "col": 1,
      "icon": "ability_rogue_feigndeath",
      "ranks": [
        16513,
        16514,
        16515
      ],
      "requires": [],
      "specId": 182
    },
    "1715": {
      "id": 1715,
      "row": 8,
      "col": 0,
      "icon": "ability_creature_poison_06",
      "ranks": [
        31226,
        31227,
        58410
      ],
      "requires": [],
      "specId": 182
    },
    "1718": {
      "id": 1718,
      "row": 7,
      "col": 2,
      "icon": "ability_rogue_findweakness",
      "ranks": [
        31234,
        31235,
        31236
      ],
      "requires": [],
      "specId": 182
    },
    "1719": {
      "id": 1719,
      "row": 8,
      "col": 1,
      "icon": "ability_rogue_shadowstrikes",
      "ranks": [
        1329
      ],
      "requires": [
        {
          "id": 281,
          "qty": 1
        }
      ],
      "specId": 182
    },
    "1721": {
      "id": 1721,
      "row": 4,
      "col": 0,
      "icon": "ability_rogue_fleetfooted",
      "ranks": [
        31208,
        31209
      ],
      "requires": [],
      "specId": 182
    },
    "1723": {
      "id": 1723,
      "row": 6,
      "col": 2,
      "icon": "ability_rogue_deadenednerves",
      "ranks": [
        31380,
        31382,
        31383
      ],
      "requires": [],
      "specId": 182
    },
    "1762": {
      "id": 1762,
      "row": 4,
      "col": 3,
      "icon": "ability_rogue_quickrecovery",
      "ranks": [
        31244,
        31245
      ],
      "requires": [],
      "specId": 182
    },
    "2065": {
      "id": 2065,
      "row": 6,
      "col": 0,
      "icon": "ability_rogue_deadlybrew",
      "ranks": [
        51625,
        51626
      ],
      "requires": [],
      "specId": 182
    },
    "2066": {
      "id": 2066,
      "row": 8,
      "col": 2,
      "icon": "ability_rogue_turnthetables",
      "ranks": [
        51627,
        51628,
        51629
      ],
      "requires": [],
      "specId": 182
    },
    "2068": {
      "id": 2068,
      "row": 1,
      "col": 1,
      "icon": "ability_rogue_bloodsplatter",
      "ranks": [
        51632,
        51633
      ],
      "requires": [],
      "specId": 182
    },
    "2069": {
      "id": 2069,
      "row": 7,
      "col": 0,
      "icon": "ability_rogue_focusedattacks",
      "ranks": [
        51634,
        51635,
        51636
      ],
      "requires": [],
      "specId": 182
    },
    "2070": {
      "id": 2070,
      "row": 9,
      "col": 1,
      "icon": "ability_rogue_cuttothechase",
      "ranks": [
        51664,
        51665,
        51667,
        51668,
        51669
      ],
      "requires": [],
      "specId": 182
    },
    "2071": {
      "id": 2071,
      "row": 10,
      "col": 1,
      "icon": "ability_rogue_hungerforblood",
      "ranks": [
        51662
      ],
      "requires": [],
      "specId": 182
    }
  },
  "183": {
    "241": {
      "id": 241,
      "row": 0,
      "col": 1,
      "icon": "spell_shadow_charm",
      "ranks": [
        13958,
        13970,
        13971
      ],
      "requires": [],
      "specId": 183
    },
    "244": {
      "id": 244,
      "row": 1,
      "col": 2,
      "icon": "ability_stealth",
      "ranks": [
        13975,
        14062,
        14063
      ],
      "requires": [],
      "specId": 183
    },
    "245": {
      "id": 245,
      "row": 3,
      "col": 1,
      "icon": "spell_shadow_fumble",
      "ranks": [
        13976,
        13979,
        13980
      ],
      "requires": [],
      "specId": 183
    },
    "246": {
      "id": 246,
      "row": 3,
      "col": 0,
      "icon": "spell_nature_mirrorimage",
      "ranks": [
        13983,
        14070,
        14071
      ],
      "requires": [],
      "specId": 183
    },
    "247": {
      "id": 247,
      "row": 2,
      "col": 0,
      "icon": "spell_magic_lesserinvisibilty",
      "ranks": [
        13981,
        14066
      ],
      "requires": [],
      "specId": 183
    },
    "261": {
      "id": 261,
      "row": 0,
      "col": 2,
      "icon": "ability_warrior_warcry",
      "ranks": [
        14057,
        14072
      ],
      "requires": [],
      "specId": 183
    },
    "262": {
      "id": 262,
      "row": 1,
      "col": 1,
      "icon": "ability_sap",
      "ranks": [
        14076,
        14094
      ],
      "requires": [],
      "specId": 183
    },
    "263": {
      "id": 263,
      "row": 3,
      "col": 2,
      "icon": "ability_rogue_ambush",
      "ranks": [
        14079,
        14080
      ],
      "requires": [],
      "specId": 183
    },
    "265": {
      "id": 265,
      "row": 4,
      "col": 2,
      "icon": "spell_shadow_summonsuccubus",
      "ranks": [
        14082,
        14083
      ],
      "requires": [],
      "specId": 183
    },
    "284": {
      "id": 284,
      "row": 4,
      "col": 1,
      "icon": "spell_shadow_antishadow",
      "ranks": [
        14185
      ],
      "requires": [],
      "specId": 183
    },
    "303": {
      "id": 303,
      "row": 2,
      "col": 1,
      "icon": "spell_shadow_curse",
      "ranks": [
        14278
      ],
      "requires": [],
      "specId": 183
    },
    "381": {
      "id": 381,
      "row": 6,
      "col": 1,
      "icon": "spell_shadow_possession",
      "ranks": [
        14183
      ],
      "requires": [
        {
          "id": 284,
          "qty": 1
        }
      ],
      "specId": 183
    },
    "681": {
      "id": 681,
      "row": 4,
      "col": 3,
      "icon": "spell_shadow_lifedrain",
      "ranks": [
        16511
      ],
      "requires": [
        {
          "id": 1123,
          "qty": 3
        }
      ],
      "specId": 183
    },
    "1123": {
      "id": 1123,
      "row": 2,
      "col": 2,
      "icon": "inv_sword_17",
      "ranks": [
        14171,
        14172,
        14173
      ],
      "requires": [],
      "specId": 183
    },
    "1700": {
      "id": 1700,
      "row": 1,
      "col": 0,
      "icon": "ability_rogue_feint",
      "ranks": [
        30892,
        30893
      ],
      "requires": [],
      "specId": 183
    },
    "1701": {
      "id": 1701,
      "row": 4,
      "col": 0,
      "icon": "ability_ambush",
      "ranks": [
        30894,
        30895
      ],
      "requires": [],
      "specId": 183
    },
    "1702": {
      "id": 1702,
      "row": 5,
      "col": 2,
      "icon": "inv_weapon_crossbow_11",
      "ranks": [
        30902,
        30903,
        30904,
        30905,
        30906
      ],
      "requires": [],
      "specId": 183
    },
    "1711": {
      "id": 1711,
      "row": 6,
      "col": 0,
      "icon": "ability_rogue_envelopingshadows",
      "ranks": [
        31211,
        31212,
        31213
      ],
      "requires": [],
      "specId": 183
    },
    "1712": {
      "id": 1712,
      "row": 7,
      "col": 1,
      "icon": "ability_rogue_sinistercalling",
      "ranks": [
        31216,
        31217,
        31218,
        31219,
        31220
      ],
      "requires": [
        {
          "id": 381,
          "qty": 1
        }
      ],
      "specId": 183
    },
    "1713": {
      "id": 1713,
      "row": 5,
      "col": 0,
      "icon": "ability_rogue_masterofsubtlety",
      "ranks": [
        31221,
        31222,
        31223
      ],
      "requires": [],
      "specId": 183
    },
    "1714": {
      "id": 1714,
      "row": 8,
      "col": 1,
      "icon": "ability_rogue_shadowstep",
      "ranks": [
        36554
      ],
      "requires": [],
      "specId": 183
    },
    "1722": {
      "id": 1722,
      "row": 6,
      "col": 2,
      "icon": "ability_rogue_cheatdeath",
      "ranks": [
        31228,
        31229,
        31230
      ],
      "requires": [],
      "specId": 183
    },
    "2077": {
      "id": 2077,
      "row": 7,
      "col": 2,
      "icon": "ability_rogue_waylay",
      "ranks": [
        51692,
        51696
      ],
      "requires": [],
      "specId": 183
    },
    "2078": {
      "id": 2078,
      "row": 8,
      "col": 0,
      "icon": "ability_rogue_honoramongstthieves",
      "ranks": [
        51698,
        51700,
        51701
      ],
      "requires": [],
      "specId": 183
    },
    "2079": {
      "id": 2079,
      "row": 8,
      "col": 2,
      "icon": "ability_rogue_wrongfullyaccused",
      "ranks": [
        58414,
        58415
      ],
      "requires": [],
      "specId": 183
    },
    "2080": {
      "id": 2080,
      "row": 9,
      "col": 1,
      "icon": "ability_rogue_slaughterfromtheshadows",
      "ranks": [
        51708,
        51709,
        51710,
        51711,
        51712
      ],
      "requires": [],
      "specId": 183
    },
    "2081": {
      "id": 2081,
      "row": 10,
      "col": 1,
      "icon": "ability_rogue_shadowdance",
      "ranks": [
        51713
      ],
      "requires": [],
      "specId": 183
    },
    "2244": {
      "id": 2244,
      "row": 0,
      "col": 0,
      "icon": "ability_warrior_decisivestrike",
      "ranks": [
        14179,
        58422,
        58423,
        58424,
        58425
      ],
      "requires": [],
      "specId": 183
    }
  },
  "201": {
    "321": {
      "id": 321,
      "row": 1,
      "col": 3,
      "icon": "spell_nature_tranquility",
      "ranks": [
        14531,
        14774
      ],
      "requires": [],
      "specId": 201
    },
    "322": {
      "id": 322,
      "row": 6,
      "col": 1,
      "icon": "spell_holy_powerinfusion",
      "ranks": [
        10060
      ],
      "requires": [
        {
          "id": 1201,
          "qty": 5
        }
      ],
      "specId": 201
    },
    "341": {
      "id": 341,
      "row": 3,
      "col": 1,
      "icon": "ability_hibernation",
      "ranks": [
        14520,
        14780,
        14781
      ],
      "requires": [],
      "specId": 201
    },
    "342": {
      "id": 342,
      "row": 0,
      "col": 1,
      "icon": "spell_magic_magearmor",
      "ranks": [
        14522,
        14788,
        14789,
        14790,
        14791
      ],
      "requires": [],
      "specId": 201
    },
    "343": {
      "id": 343,
      "row": 2,
      "col": 2,
      "icon": "spell_holy_powerwordshield",
      "ranks": [
        14748,
        14768,
        14769
      ],
      "requires": [],
      "specId": 201
    },
    "344": {
      "id": 344,
      "row": 1,
      "col": 2,
      "icon": "spell_holy_wordfortitude",
      "ranks": [
        14749,
        14767
      ],
      "requires": [],
      "specId": 201
    },
    "346": {
      "id": 346,
      "row": 1,
      "col": 1,
      "icon": "spell_holy_innerfire",
      "ranks": [
        14747,
        14770,
        14771
      ],
      "requires": [],
      "specId": 201
    },
    "347": {
      "id": 347,
      "row": 2,
      "col": 0,
      "icon": "spell_nature_sleep",
      "ranks": [
        14521,
        14776,
        14777
      ],
      "requires": [],
      "specId": 201
    },
    "348": {
      "id": 348,
      "row": 2,
      "col": 1,
      "icon": "spell_frost_windwalkon",
      "ranks": [
        14751
      ],
      "requires": [],
      "specId": 201
    },
    "350": {
      "id": 350,
      "row": 3,
      "col": 3,
      "icon": "spell_shadow_manaburn",
      "ranks": [
        14750,
        14772
      ],
      "requires": [],
      "specId": 201
    },
    "351": {
      "id": 351,
      "row": 4,
      "col": 2,
      "icon": "spell_holy_pureofheart",
      "ranks": [
        63574
      ],
      "requires": [
        {
          "id": 343,
          "qty": 3
        }
      ],
      "specId": 201
    },
    "352": {
      "id": 352,
      "row": 1,
      "col": 0,
      "icon": "spell_nature_manaregentotem",
      "ranks": [
        14523,
        14784,
        14785
      ],
      "requires": [],
      "specId": 201
    },
    "1201": {
      "id": 1201,
      "row": 4,
      "col": 1,
      "icon": "spell_nature_enchantarmor",
      "ranks": [
        18551,
        18552,
        18553,
        18554,
        18555
      ],
      "requires": [],
      "specId": 201
    },
    "1202": {
      "id": 1202,
      "row": 9,
      "col": 1,
      "icon": "spell_holy_borrowedtime",
      "ranks": [
        52795,
        52797,
        52798,
        52799,
        52800
      ],
      "requires": [],
      "specId": 201
    },
    "1769": {
      "id": 1769,
      "row": 3,
      "col": 0,
      "icon": "spell_holy_absolution",
      "ranks": [
        33167,
        33171,
        33172
      ],
      "requires": [],
      "specId": 201
    },
    "1771": {
      "id": 1771,
      "row": 5,
      "col": 0,
      "icon": "spell_shadow_focusedpower",
      "ranks": [
        33186,
        33190
      ],
      "requires": [],
      "specId": 201
    },
    "1772": {
      "id": 1772,
      "row": 5,
      "col": 2,
      "icon": "spell_arcane_mindmastery",
      "ranks": [
        34908,
        34909,
        34910
      ],
      "requires": [],
      "specId": 201
    },
    "1773": {
      "id": 1773,
      "row": 6,
      "col": 2,
      "icon": "spell_holy_chastise",
      "ranks": [
        63504,
        63505,
        63506
      ],
      "requires": [],
      "specId": 201
    },
    "1774": {
      "id": 1774,
      "row": 8,
      "col": 1,
      "icon": "spell_holy_painsupression",
      "ranks": [
        33206
      ],
      "requires": [],
      "specId": 201
    },
    "1858": {
      "id": 1858,
      "row": 6,
      "col": 0,
      "icon": "spell_arcane_focusedpower",
      "ranks": [
        45234,
        45243,
        45244
      ],
      "requires": [],
      "specId": 201
    },
    "1894": {
      "id": 1894,
      "row": 7,
      "col": 2,
      "icon": "spell_holy_aspiration",
      "ranks": [
        47507,
        47508
      ],
      "requires": [],
      "specId": 201
    },
    "1895": {
      "id": 1895,
      "row": 8,
      "col": 0,
      "icon": "spell_holy_devineaegis",
      "ranks": [
        47509,
        47511,
        47515
      ],
      "requires": [],
      "specId": 201
    },
    "1896": {
      "id": 1896,
      "row": 7,
      "col": 1,
      "icon": "spell_holy_rapture",
      "ranks": [
        47535,
        47536,
        47537
      ],
      "requires": [],
      "specId": 201
    },
    "1897": {
      "id": 1897,
      "row": 10,
      "col": 1,
      "icon": "spell_holy_penance",
      "ranks": [
        47540
      ],
      "requires": [],
      "specId": 201
    },
    "1898": {
      "id": 1898,
      "row": 0,
      "col": 2,
      "icon": "spell_holy_sealofvengeance",
      "ranks": [
        47586,
        47587,
        47588,
        52802,
        52803
      ],
      "requires": [],
      "specId": 201
    },
    "1901": {
      "id": 1901,
      "row": 8,
      "col": 2,
      "icon": "spell_holy_hopeandgrace",
      "ranks": [
        47516,
        47517
      ],
      "requires": [],
      "specId": 201
    },
    "2235": {
      "id": 2235,
      "row": 7,
      "col": 0,
      "icon": "spell_holy_holyprotection",
      "ranks": [
        57470,
        57472
      ],
      "requires": [],
      "specId": 201
    },
    "2268": {
      "id": 2268,
      "row": 4,
      "col": 0,
      "icon": "spell_holy_powerwordshield",
      "ranks": [
        33201,
        33202
      ],
      "requires": [],
      "specId": 201
    }
  },
  "202": {
    "361": {
      "id": 361,
      "row": 2,
      "col": 3,
      "icon": "spell_holy_layonhands",
      "ranks": [
        14892,
        15362,
        15363
      ],
      "requires": [],
      "specId": 202
    },
    "401": {
      "id": 401,
      "row": 0,
      "col": 2,
      "icon": "spell_holy_sealofsalvation",
      "ranks": [
        14889,
        15008,
        15009,
        15010,
        15011
      ],
      "requires": [],
      "specId": 202
    },
    "402": {
      "id": 402,
      "row": 4,
      "col": 2,
      "icon": "spell_holy_spiritualguidence",
      "ranks": [
        14901,
        15028,
        15029,
        15030,
        15031
      ],
      "requires": [],
      "specId": 202
    },
    "403": {
      "id": 403,
      "row": 3,
      "col": 2,
      "icon": "spell_holy_searinglightpriest",
      "ranks": [
        14909,
        15017
      ],
      "requires": [
        {
          "id": 1181,
          "qty": 5
        }
      ],
      "specId": 202
    },
    "404": {
      "id": 404,
      "row": 5,
      "col": 2,
      "icon": "spell_nature_moonglow",
      "ranks": [
        14898,
        15349,
        15354,
        15355,
        15356
      ],
      "requires": [],
      "specId": 202
    },
    "406": {
      "id": 406,
      "row": 0,
      "col": 1,
      "icon": "spell_holy_renew",
      "ranks": [
        14908,
        15020,
        17191
      ],
      "requires": [],
      "specId": 202
    },
    "408": {
      "id": 408,
      "row": 3,
      "col": 1,
      "icon": "spell_holy_heal02",
      "ranks": [
        14912,
        15013,
        15014
      ],
      "requires": [],
      "specId": 202
    },
    "410": {
      "id": 410,
      "row": 0,
      "col": 0,
      "icon": "spell_holy_healingfocus",
      "ranks": [
        14913,
        15012
      ],
      "requires": [],
      "specId": 202
    },
    "411": {
      "id": 411,
      "row": 1,
      "col": 1,
      "icon": "spell_holy_spellwarding",
      "ranks": [
        27900,
        27901,
        27902,
        27903,
        27904
      ],
      "requires": [],
      "specId": 202
    },
    "413": {
      "id": 413,
      "row": 4,
      "col": 0,
      "icon": "spell_holy_prayerofhealing02",
      "ranks": [
        14911,
        15018
      ],
      "requires": [],
      "specId": 202
    },
    "442": {
      "id": 442,
      "row": 2,
      "col": 0,
      "icon": "spell_holy_restoration",
      "ranks": [
        19236
      ],
      "requires": [],
      "specId": 202
    },
    "1181": {
      "id": 1181,
      "row": 1,
      "col": 2,
      "icon": "spell_holy_sealofwrath",
      "ranks": [
        18530,
        18531,
        18533,
        18534,
        18535
      ],
      "requires": [],
      "specId": 202
    },
    "1561": {
      "id": 1561,
      "row": 4,
      "col": 1,
      "icon": "inv_enchant_essenceeternallarge",
      "ranks": [
        20711
      ],
      "requires": [],
      "specId": 202
    },
    "1635": {
      "id": 1635,
      "row": 3,
      "col": 0,
      "icon": "spell_holy_purify",
      "ranks": [
        27789,
        27790
      ],
      "requires": [],
      "specId": 202
    },
    "1636": {
      "id": 1636,
      "row": 2,
      "col": 1,
      "icon": "spell_holy_blessedrecovery",
      "ranks": [
        27811,
        27815,
        27816
      ],
      "requires": [],
      "specId": 202
    },
    "1637": {
      "id": 1637,
      "row": 6,
      "col": 1,
      "icon": "spell_holy_summonlightwell",
      "ranks": [
        724
      ],
      "requires": [
        {
          "id": 1561,
          "qty": 1
        }
      ],
      "specId": 202
    },
    "1765": {
      "id": 1765,
      "row": 6,
      "col": 2,
      "icon": "spell_holy_blessedresillience",
      "ranks": [
        33142,
        33145,
        33146
      ],
      "requires": [],
      "specId": 202
    },
    "1766": {
      "id": 1766,
      "row": 5,
      "col": 0,
      "icon": "spell_holy_surgeoflight",
      "ranks": [
        33150,
        33154
      ],
      "requires": [],
      "specId": 202
    },
    "1767": {
      "id": 1767,
      "row": 7,
      "col": 1,
      "icon": "spell_holy_greaterheal",
      "ranks": [
        33158,
        33159,
        33160,
        33161,
        33162
      ],
      "requires": [],
      "specId": 202
    },
    "1768": {
      "id": 1768,
      "row": 6,
      "col": 0,
      "icon": "spell_holy_fanaticism",
      "ranks": [
        34753,
        34859,
        34860
      ],
      "requires": [],
      "specId": 202
    },
    "1815": {
      "id": 1815,
      "row": 8,
      "col": 1,
      "icon": "spell_holy_circleofrenewal",
      "ranks": [
        34861
      ],
      "requires": [],
      "specId": 202
    },
    "1902": {
      "id": 1902,
      "row": 8,
      "col": 0,
      "icon": "ability_paladin_infusionoflight",
      "ranks": [
        63534,
        63542,
        63543
      ],
      "requires": [],
      "specId": 202
    },
    "1903": {
      "id": 1903,
      "row": 8,
      "col": 2,
      "icon": "spell_holy_testoffaith",
      "ranks": [
        47558,
        47559,
        47560
      ],
      "requires": [],
      "specId": 202
    },
    "1904": {
      "id": 1904,
      "row": 7,
      "col": 2,
      "icon": "spell_holy_serendipity",
      "ranks": [
        63730,
        63733,
        63737
      ],
      "requires": [],
      "specId": 202
    },
    "1905": {
      "id": 1905,
      "row": 9,
      "col": 1,
      "icon": "spell_holy_divineprovidence",
      "ranks": [
        47562,
        47564,
        47565,
        47566,
        47567
      ],
      "requires": [],
      "specId": 202
    },
    "1911": {
      "id": 1911,
      "row": 10,
      "col": 1,
      "icon": "spell_holy_guardianspirit",
      "ranks": [
        47788
      ],
      "requires": [],
      "specId": 202
    },
    "2279": {
      "id": 2279,
      "row": 7,
      "col": 0,
      "icon": "spell_holy_symbolofhope",
      "ranks": [
        64127,
        64129
      ],
      "requires": [],
      "specId": 202
    }
  },
  "203": {
    "461": {
      "id": 461,
      "row": 3,
      "col": 3,
      "icon": "spell_shadow_blackplague",
      "ranks": [
        15257,
        15331,
        15332
      ],
      "requires": [],
      "specId": 203
    },
    "462": {
      "id": 462,
      "row": 0,
      "col": 2,
      "icon": "spell_shadow_twilight",
      "ranks": [
        15259,
        15307,
        15308,
        15309,
        15310
      ],
      "requires": [],
      "specId": 203
    },
    "463": {
      "id": 463,
      "row": 1,
      "col": 2,
      "icon": "spell_shadow_burningspirit",
      "ranks": [
        15260,
        15327,
        15328
      ],
      "requires": [],
      "specId": 203
    },
    "465": {
      "id": 465,
      "row": 0,
      "col": 0,
      "icon": "spell_shadow_requiem",
      "ranks": [
        15270,
        15335,
        15336
      ],
      "requires": [],
      "specId": 203
    },
    "466": {
      "id": 466,
      "row": 1,
      "col": 0,
      "icon": "spell_shadow_shadowward",
      "ranks": [
        15318,
        15272,
        15320
      ],
      "requires": [],
      "specId": 203
    },
    "481": {
      "id": 481,
      "row": 2,
      "col": 1,
      "icon": "spell_shadow_unholyfrenzy",
      "ranks": [
        15273,
        15312,
        15313,
        15314,
        15316
      ],
      "requires": [],
      "specId": 203
    },
    "482": {
      "id": 482,
      "row": 1,
      "col": 1,
      "icon": "spell_shadow_shadowwordpain",
      "ranks": [
        15275,
        15317
      ],
      "requires": [],
      "specId": 203
    },
    "483": {
      "id": 483,
      "row": 3,
      "col": 1,
      "icon": "spell_magic_lesserinvisibilty",
      "ranks": [
        15274,
        15311
      ],
      "requires": [],
      "specId": 203
    },
    "484": {
      "id": 484,
      "row": 4,
      "col": 1,
      "icon": "spell_shadow_unsummonbuilding",
      "ranks": [
        15286
      ],
      "requires": [],
      "specId": 203
    },
    "501": {
      "id": 501,
      "row": 2,
      "col": 2,
      "icon": "spell_shadow_siphonmana",
      "ranks": [
        15407
      ],
      "requires": [],
      "specId": 203
    },
    "521": {
      "id": 521,
      "row": 6,
      "col": 1,
      "icon": "spell_shadow_shadowform",
      "ranks": [
        15473
      ],
      "requires": [
        {
          "id": 484,
          "qty": 1
        }
      ],
      "specId": 203
    },
    "541": {
      "id": 541,
      "row": 4,
      "col": 0,
      "icon": "spell_shadow_impphaseshift",
      "ranks": [
        15487
      ],
      "requires": [
        {
          "id": 542,
          "qty": 2
        }
      ],
      "specId": 203
    },
    "542": {
      "id": 542,
      "row": 2,
      "col": 0,
      "icon": "spell_shadow_psychicscream",
      "ranks": [
        15392,
        15448
      ],
      "requires": [],
      "specId": 203
    },
    "881": {
      "id": 881,
      "row": 3,
      "col": 2,
      "icon": "spell_shadow_chilltouch",
      "ranks": [
        17322,
        17323
      ],
      "requires": [],
      "specId": 203
    },
    "1638": {
      "id": 1638,
      "row": 4,
      "col": 2,
      "icon": "spell_shadow_improvedvampiricembrace",
      "ranks": [
        27839,
        27840
      ],
      "requires": [
        {
          "id": 484,
          "qty": 1
        }
      ],
      "specId": 203
    },
    "1777": {
      "id": 1777,
      "row": 4,
      "col": 3,
      "icon": "spell_nature_focusedmind",
      "ranks": [
        33213,
        33214,
        33215
      ],
      "requires": [],
      "specId": 203
    },
    "1778": {
      "id": 1778,
      "row": 6,
      "col": 2,
      "icon": "spell_shadow_shadowpower",
      "ranks": [
        33221,
        33222,
        33223,
        33224,
        33225
      ],
      "requires": [],
      "specId": 203
    },
    "1779": {
      "id": 1779,
      "row": 8,
      "col": 1,
      "icon": "spell_holy_stoicism",
      "ranks": [
        34914
      ],
      "requires": [
        {
          "id": 521,
          "qty": 1
        }
      ],
      "specId": 203
    },
    "1781": {
      "id": 1781,
      "row": 5,
      "col": 0,
      "icon": "spell_shadow_skull",
      "ranks": [
        14910,
        33371
      ],
      "requires": [],
      "specId": 203
    },
    "1816": {
      "id": 1816,
      "row": 7,
      "col": 2,
      "icon": "spell_shadow_misery",
      "ranks": [
        33191,
        33192,
        33193
      ],
      "requires": [],
      "specId": 203
    },
    "1906": {
      "id": 1906,
      "row": 7,
      "col": 0,
      "icon": "spell_shadow_summonvoidwalker",
      "ranks": [
        47569,
        47570
      ],
      "requires": [
        {
          "id": 521,
          "qty": 1
        }
      ],
      "specId": 203
    },
    "1907": {
      "id": 1907,
      "row": 9,
      "col": 2,
      "icon": "spell_shadow_mindtwisting",
      "ranks": [
        47573,
        47577,
        47578,
        51166,
        51167
      ],
      "requires": [],
      "specId": 203
    },
    "1908": {
      "id": 1908,
      "row": 8,
      "col": 0,
      "icon": "spell_shadow_psychichorrors",
      "ranks": [
        64044
      ],
      "requires": [],
      "specId": 203
    },
    "1909": {
      "id": 1909,
      "row": 8,
      "col": 2,
      "icon": "spell_shadow_painandsuffering",
      "ranks": [
        47580,
        47581,
        47582
      ],
      "requires": [],
      "specId": 203
    },
    "1910": {
      "id": 1910,
      "row": 10,
      "col": 1,
      "icon": "spell_shadow_dispersion",
      "ranks": [
        47585
      ],
      "requires": [
        {
          "id": 1779,
          "qty": 1
        }
      ],
      "specId": 203
    },
    "2027": {
      "id": 2027,
      "row": 0,
      "col": 1,
      "icon": "spell_shadow_requiem",
      "ranks": [
        15337,
        15338
      ],
      "requires": [
        {
          "id": 465,
          "qty": 3
        }
      ],
      "specId": 203
    },
    "2267": {
      "id": 2267,
      "row": 5,
      "col": 2,
      "icon": "spell_shadow_devouringplague",
      "ranks": [
        63625,
        63626,
        63627
      ],
      "requires": [],
      "specId": 203
    }
  },
  "261": {
    "561": {
      "id": 561,
      "row": 1,
      "col": 0,
      "icon": "spell_fire_immolation",
      "ranks": [
        16038,
        16160,
        16161
      ],
      "requires": [],
      "specId": 261
    },
    "562": {
      "id": 562,
      "row": 4,
      "col": 1,
      "icon": "spell_nature_callstorm",
      "ranks": [
        16041
      ],
      "requires": [
        {
          "id": 574,
          "qty": 1
        }
      ],
      "specId": 261
    },
    "563": {
      "id": 563,
      "row": 0,
      "col": 2,
      "icon": "spell_fire_fireball",
      "ranks": [
        16035,
        16105,
        16106,
        16107,
        16108
      ],
      "requires": [],
      "specId": 261
    },
    "564": {
      "id": 564,
      "row": 0,
      "col": 1,
      "icon": "spell_nature_wispsplode",
      "ranks": [
        16039,
        16109,
        16110,
        16111,
        16112
      ],
      "requires": [],
      "specId": 261
    },
    "565": {
      "id": 565,
      "row": 2,
      "col": 2,
      "icon": "spell_fire_volcano",
      "ranks": [
        16089,
        60184,
        60185,
        60187,
        60188
      ],
      "requires": [],
      "specId": 261
    },
    "567": {
      "id": 567,
      "row": 3,
      "col": 0,
      "icon": "spell_fire_sealoffire",
      "ranks": [
        16086,
        16544
      ],
      "requires": [],
      "specId": 261
    },
    "573": {
      "id": 573,
      "row": 6,
      "col": 1,
      "icon": "spell_nature_wispheal",
      "ranks": [
        16166
      ],
      "requires": [
        {
          "id": 562,
          "qty": 1
        }
      ],
      "specId": 261
    },
    "574": {
      "id": 574,
      "row": 2,
      "col": 1,
      "icon": "spell_shadow_manaburn",
      "ranks": [
        16164
      ],
      "requires": [],
      "specId": 261
    },
    "575": {
      "id": 575,
      "row": 2,
      "col": 0,
      "icon": "spell_frost_frostward",
      "ranks": [
        16040,
        16113,
        16114,
        16115,
        16116
      ],
      "requires": [],
      "specId": 261
    },
    "721": {
      "id": 721,
      "row": 5,
      "col": 2,
      "icon": "spell_lightning_lightningbolt01",
      "ranks": [
        16578,
        16579,
        16580,
        16581,
        16582
      ],
      "requires": [
        {
          "id": 565,
          "qty": 5
        }
      ],
      "specId": 261
    },
    "1640": {
      "id": 1640,
      "row": 1,
      "col": 1,
      "icon": "spell_nature_spiritarmor",
      "ranks": [
        28996,
        28997,
        28998
      ],
      "requires": [],
      "specId": 261
    },
    "1641": {
      "id": 1641,
      "row": 4,
      "col": 0,
      "icon": "spell_nature_stormreach",
      "ranks": [
        28999,
        29000
      ],
      "requires": [],
      "specId": 261
    },
    "1642": {
      "id": 1642,
      "row": 3,
      "col": 3,
      "icon": "spell_shadow_soulleech_2",
      "ranks": [
        29062,
        29064,
        29065
      ],
      "requires": [],
      "specId": 261
    },
    "1645": {
      "id": 1645,
      "row": 1,
      "col": 2,
      "icon": "classic_spell_fire_elementaldevastation",
      "ranks": [
        30160,
        29179,
        29180
      ],
      "requires": [],
      "specId": 261
    },
    "1682": {
      "id": 1682,
      "row": 4,
      "col": 3,
      "icon": "spell_nature_unrelentingstorm",
      "ranks": [
        30664,
        30665,
        30666
      ],
      "requires": [],
      "specId": 261
    },
    "1685": {
      "id": 1685,
      "row": 5,
      "col": 0,
      "icon": "spell_nature_elementalprecision_1",
      "ranks": [
        30672,
        30673,
        30674
      ],
      "requires": [],
      "specId": 261
    },
    "1686": {
      "id": 1686,
      "row": 7,
      "col": 2,
      "icon": "spell_nature_lightningoverload",
      "ranks": [
        30675,
        30678,
        30679
      ],
      "requires": [],
      "specId": 261
    },
    "1687": {
      "id": 1687,
      "row": 8,
      "col": 1,
      "icon": "spell_fire_totemofwrath",
      "ranks": [
        30706
      ],
      "requires": [],
      "specId": 261
    },
    "2049": {
      "id": 2049,
      "row": 7,
      "col": 1,
      "icon": "spell_shaman_elementaloath",
      "ranks": [
        51466,
        51470
      ],
      "requires": [
        {
          "id": 573,
          "qty": 1
        }
      ],
      "specId": 261
    },
    "2050": {
      "id": 2050,
      "row": 8,
      "col": 0,
      "icon": "spell_shaman_astralshift",
      "ranks": [
        51474,
        51478,
        51479
      ],
      "requires": [],
      "specId": 261
    },
    "2051": {
      "id": 2051,
      "row": 8,
      "col": 2,
      "icon": "spell_shaman_lavaflow",
      "ranks": [
        51480,
        51481,
        51482
      ],
      "requires": [],
      "specId": 261
    },
    "2052": {
      "id": 2052,
      "row": 6,
      "col": 2,
      "icon": "spell_shaman_stormearthfire",
      "ranks": [
        51483,
        51485,
        51486
      ],
      "requires": [],
      "specId": 261
    },
    "2053": {
      "id": 2053,
      "row": 10,
      "col": 1,
      "icon": "spell_shaman_thunderstorm",
      "ranks": [
        51490
      ],
      "requires": [],
      "specId": 261
    },
    "2252": {
      "id": 2252,
      "row": 9,
      "col": 1,
      "icon": "spell_unused2",
      "ranks": [
        62097,
        62098,
        62099,
        62100,
        62101
      ],
      "requires": [],
      "specId": 261
    },
    "2262": {
      "id": 2262,
      "row": 7,
      "col": 0,
      "icon": "spell_fire_blueflamering",
      "ranks": [
        63370,
        63372
      ],
      "requires": [],
      "specId": 261
    }
  },
  "262": {
    "581": {
      "id": 581,
      "row": 2,
      "col": 3,
      "icon": "spell_nature_undyingstrength",
      "ranks": [
        16176,
        16235,
        16240
      ],
      "requires": [],
      "specId": 262
    },
    "582": {
      "id": 582,
      "row": 2,
      "col": 2,
      "icon": "spell_frost_frostbolt",
      "ranks": [
        55198
      ],
      "requires": [],
      "specId": 262
    },
    "583": {
      "id": 583,
      "row": 2,
      "col": 0,
      "icon": "ability_shaman_watershield",
      "ranks": [
        16180,
        16196,
        16198
      ],
      "requires": [],
      "specId": 262
    },
    "586": {
      "id": 586,
      "row": 0,
      "col": 1,
      "icon": "spell_nature_magicimmunity",
      "ranks": [
        16182,
        16226,
        16227,
        16228,
        16229
      ],
      "requires": [],
      "specId": 262
    },
    "587": {
      "id": 587,
      "row": 2,
      "col": 1,
      "icon": "spell_nature_healingwavelesser",
      "ranks": [
        16181,
        16230,
        16232
      ],
      "requires": [],
      "specId": 262
    },
    "588": {
      "id": 588,
      "row": 3,
      "col": 1,
      "icon": "spell_nature_manaregentotem",
      "ranks": [
        16187,
        16205,
        16206
      ],
      "requires": [],
      "specId": 262
    },
    "589": {
      "id": 589,
      "row": 1,
      "col": 0,
      "icon": "spell_nature_reincarnation",
      "ranks": [
        16184,
        16209
      ],
      "requires": [],
      "specId": 262
    },
    "590": {
      "id": 590,
      "row": 6,
      "col": 1,
      "icon": "spell_frost_summonwaterelemental",
      "ranks": [
        16190
      ],
      "requires": [
        {
          "id": 588,
          "qty": 3
        }
      ],
      "specId": 262
    },
    "591": {
      "id": 591,
      "row": 4,
      "col": 2,
      "icon": "spell_nature_ravenform",
      "ranks": [
        16188
      ],
      "requires": [],
      "specId": 262
    },
    "592": {
      "id": 592,
      "row": 5,
      "col": 2,
      "icon": "spell_frost_wizardmark",
      "ranks": [
        16178,
        16210,
        16211,
        16212,
        16213
      ],
      "requires": [],
      "specId": 262
    },
    "593": {
      "id": 593,
      "row": 1,
      "col": 2,
      "icon": "spell_frost_manarecharge",
      "ranks": [
        16179,
        16214,
        16215,
        16216,
        16217
      ],
      "requires": [],
      "specId": 262
    },
    "594": {
      "id": 594,
      "row": 3,
      "col": 2,
      "icon": "spell_nature_tranquility",
      "ranks": [
        16194,
        16218,
        16219,
        16220,
        16221
      ],
      "requires": [],
      "specId": 262
    },
    "595": {
      "id": 595,
      "row": 0,
      "col": 2,
      "icon": "spell_nature_moonglow",
      "ranks": [
        16173,
        16222,
        16223,
        16224,
        16225
      ],
      "requires": [],
      "specId": 262
    },
    "1646": {
      "id": 1646,
      "row": 1,
      "col": 1,
      "icon": "spell_nature_healingtouch",
      "ranks": [
        29187,
        29189,
        29191
      ],
      "requires": [],
      "specId": 262
    },
    "1648": {
      "id": 1648,
      "row": 4,
      "col": 0,
      "icon": "classic_spell_nature_healingway",
      "ranks": [
        29206,
        29205,
        29202
      ],
      "requires": [],
      "specId": 262
    },
    "1695": {
      "id": 1695,
      "row": 4,
      "col": 3,
      "icon": "spell_nature_focusedmind",
      "ranks": [
        30864,
        30865,
        30866
      ],
      "requires": [],
      "specId": 262
    },
    "1696": {
      "id": 1696,
      "row": 7,
      "col": 2,
      "icon": "spell_nature_natureblessing",
      "ranks": [
        30867,
        30868,
        30869
      ],
      "requires": [],
      "specId": 262
    },
    "1697": {
      "id": 1697,
      "row": 7,
      "col": 1,
      "icon": "spell_nature_healingwavegreater",
      "ranks": [
        30872,
        30873
      ],
      "requires": [],
      "specId": 262
    },
    "1698": {
      "id": 1698,
      "row": 8,
      "col": 1,
      "icon": "spell_nature_skinofearth",
      "ranks": [
        974
      ],
      "requires": [],
      "specId": 262
    },
    "1699": {
      "id": 1699,
      "row": 6,
      "col": 0,
      "icon": "spell_nature_natureguardian",
      "ranks": [
        30881,
        30883,
        30884,
        30885,
        30886
      ],
      "requires": [],
      "specId": 262
    },
    "2059": {
      "id": 2059,
      "row": 8,
      "col": 2,
      "icon": "spell_nature_skinofearth",
      "ranks": [
        51560,
        51561
      ],
      "requires": [
        {
          "id": 1698,
          "qty": 1
        }
      ],
      "specId": 262
    },
    "2060": {
      "id": 2060,
      "row": 7,
      "col": 0,
      "icon": "spell_shaman_blessingofeternals",
      "ranks": [
        51554,
        51555
      ],
      "requires": [],
      "specId": 262
    },
    "2061": {
      "id": 2061,
      "row": 8,
      "col": 0,
      "icon": "spell_shaman_ancestralawakening",
      "ranks": [
        51556,
        51557,
        51558
      ],
      "requires": [],
      "specId": 262
    },
    "2063": {
      "id": 2063,
      "row": 9,
      "col": 1,
      "icon": "spell_shaman_tidalwaves",
      "ranks": [
        51562,
        51563,
        51564,
        51565,
        51566
      ],
      "requires": [],
      "specId": 262
    },
    "2064": {
      "id": 2064,
      "row": 10,
      "col": 1,
      "icon": "spell_nature_riptide",
      "ranks": [
        61295
      ],
      "requires": [],
      "specId": 262
    },
    "2084": {
      "id": 2084,
      "row": 6,
      "col": 2,
      "icon": "ability_shaman_cleansespirit",
      "ranks": [
        51886
      ],
      "requires": [
        {
          "id": 592,
          "qty": 5
        }
      ],
      "specId": 262
    }
  },
  "263": {
    "601": {
      "id": 601,
      "row": 2,
      "col": 3,
      "icon": "spell_nature_mirrorimage",
      "ranks": [
        16254,
        16271,
        16272
      ],
      "requires": [],
      "specId": 263
    },
    "602": {
      "id": 602,
      "row": 3,
      "col": 1,
      "icon": "ability_ghoulfrenzy",
      "ranks": [
        16256,
        16281,
        16282,
        16283,
        16284
      ],
      "requires": [
        {
          "id": 613,
          "qty": 5
        }
      ],
      "specId": 263
    },
    "605": {
      "id": 605,
      "row": 1,
      "col": 2,
      "icon": "spell_nature_spiritwolf",
      "ranks": [
        16262,
        16287
      ],
      "requires": [],
      "specId": 263
    },
    "607": {
      "id": 607,
      "row": 1,
      "col": 3,
      "icon": "spell_nature_lightningshield",
      "ranks": [
        16261,
        16290,
        51881
      ],
      "requires": [],
      "specId": 263
    },
    "609": {
      "id": 609,
      "row": 1,
      "col": 0,
      "icon": "spell_nature_stoneskintotem",
      "ranks": [
        16258,
        16293
      ],
      "requires": [],
      "specId": 263
    },
    "610": {
      "id": 610,
      "row": 0,
      "col": 0,
      "icon": "spell_nature_earthbindtotem",
      "ranks": [
        16259,
        16295,
        52456
      ],
      "requires": [],
      "specId": 263
    },
    "611": {
      "id": 611,
      "row": 2,
      "col": 0,
      "icon": "spell_fire_flametounge",
      "ranks": [
        16266,
        29079,
        29080
      ],
      "requires": [],
      "specId": 263
    },
    "613": {
      "id": 613,
      "row": 1,
      "col": 1,
      "icon": "ability_thunderbolt",
      "ranks": [
        16255,
        16302,
        16303,
        16304,
        16305
      ],
      "requires": [],
      "specId": 263
    },
    "614": {
      "id": 614,
      "row": 0,
      "col": 2,
      "icon": "spell_shadow_grimward",
      "ranks": [
        17485,
        17486,
        17487,
        17488,
        17489
      ],
      "requires": [],
      "specId": 263
    },
    "615": {
      "id": 615,
      "row": 3,
      "col": 2,
      "icon": "spell_holy_devotion",
      "ranks": [
        16252,
        16306,
        16307,
        16308,
        16309
      ],
      "requires": [],
      "specId": 263
    },
    "616": {
      "id": 616,
      "row": 4,
      "col": 1,
      "icon": "ability_parry",
      "ranks": [
        16268
      ],
      "requires": [],
      "specId": 263
    },
    "617": {
      "id": 617,
      "row": 2,
      "col": 2,
      "icon": "spell_nature_elementalabsorption",
      "ranks": [
        43338
      ],
      "requires": [],
      "specId": 263
    },
    "901": {
      "id": 901,
      "row": 6,
      "col": 2,
      "icon": "ability_shaman_stormstrike",
      "ranks": [
        17364
      ],
      "requires": [],
      "specId": 263
    },
    "1643": {
      "id": 1643,
      "row": 5,
      "col": 2,
      "icon": "ability_hunter_swiftstrike",
      "ranks": [
        29082,
        29084,
        29086
      ],
      "requires": [],
      "specId": 263
    },
    "1647": {
      "id": 1647,
      "row": 4,
      "col": 0,
      "icon": "spell_nature_windfury",
      "ranks": [
        29192,
        29193
      ],
      "requires": [],
      "specId": 263
    },
    "1689": {
      "id": 1689,
      "row": 5,
      "col": 0,
      "icon": "spell_nature_unleashedrage",
      "ranks": [
        30802,
        30808,
        30809
      ],
      "requires": [],
      "specId": 263
    },
    "1690": {
      "id": 1690,
      "row": 6,
      "col": 1,
      "icon": "ability_dualwield",
      "ranks": [
        30798
      ],
      "requires": [
        {
          "id": 616,
          "qty": 1
        }
      ],
      "specId": 263
    },
    "1691": {
      "id": 1691,
      "row": 8,
      "col": 0,
      "icon": "spell_nature_mentalquickness",
      "ranks": [
        30812,
        30813,
        30814
      ],
      "requires": [],
      "specId": 263
    },
    "1692": {
      "id": 1692,
      "row": 6,
      "col": 0,
      "icon": "ability_dualwieldspecialization",
      "ranks": [
        30816,
        30818,
        30819
      ],
      "requires": [
        {
          "id": 1690,
          "qty": 1
        }
      ],
      "specId": 263
    },
    "1693": {
      "id": 1693,
      "row": 8,
      "col": 1,
      "icon": "spell_nature_shamanrage",
      "ranks": [
        30823
      ],
      "requires": [],
      "specId": 263
    },
    "2054": {
      "id": 2054,
      "row": 7,
      "col": 2,
      "icon": "spell_shaman_improvedstormstrike",
      "ranks": [
        51521,
        51522
      ],
      "requires": [
        {
          "id": 901,
          "qty": 1
        }
      ],
      "specId": 263
    },
    "2055": {
      "id": 2055,
      "row": 7,
      "col": 0,
      "icon": "spell_shaman_staticshock",
      "ranks": [
        51525,
        51526,
        51527
      ],
      "requires": [],
      "specId": 263
    },
    "2056": {
      "id": 2056,
      "row": 8,
      "col": 2,
      "icon": "spell_nature_earthelemental_totem",
      "ranks": [
        51523,
        51524
      ],
      "requires": [],
      "specId": 263
    },
    "2057": {
      "id": 2057,
      "row": 9,
      "col": 1,
      "icon": "spell_shaman_maelstromweapon",
      "ranks": [
        51528,
        51529,
        51530,
        51531,
        51532
      ],
      "requires": [],
      "specId": 263
    },
    "2058": {
      "id": 2058,
      "row": 10,
      "col": 1,
      "icon": "spell_shaman_feralspirit",
      "ranks": [
        51533
      ],
      "requires": [],
      "specId": 263
    },
    "2083": {
      "id": 2083,
      "row": 4,
      "col": 2,
      "icon": "spell_nature_bloodlust",
      "ranks": [
        51883,
        51884,
        51885
      ],
      "requires": [],
      "specId": 263
    },
    "2101": {
      "id": 2101,
      "row": 0,
      "col": 1,
      "icon": "spell_nature_stoneclawtotem",
      "ranks": [
        16043,
        16130
      ],
      "requires": [],
      "specId": 263
    },
    "2249": {
      "id": 2249,
      "row": 7,
      "col": 1,
      "icon": "ability_shaman_lavalash",
      "ranks": [
        60103
      ],
      "requires": [
        {
          "id": 1690,
          "qty": 1
        }
      ],
      "specId": 263
    },
    "2263": {
      "id": 2263,
      "row": 5,
      "col": 3,
      "icon": "spell_fire_bluecano",
      "ranks": [
        63373,
        63374
      ],
      "requires": [],
      "specId": 263
    }
  },
  "281": {
    "794": {
      "id": 794,
      "row": 1,
      "col": 2,
      "icon": "inv_misc_pelt_bear_03",
      "ranks": [
        16929,
        16930,
        16931
      ],
      "requires": [],
      "specId": 281
    },
    "795": {
      "id": 795,
      "row": 0,
      "col": 2,
      "icon": "classic_ability_druid_demoralizingroar",
      "ranks": [
        16858,
        16859,
        16860,
        16861,
        16862
      ],
      "requires": [],
      "specId": 281
    },
    "796": {
      "id": 796,
      "row": 0,
      "col": 1,
      "icon": "ability_hunter_pet_hyena",
      "ranks": [
        16934,
        16935,
        16936,
        16937,
        16938
      ],
      "requires": [],
      "specId": 281
    },
    "797": {
      "id": 797,
      "row": 4,
      "col": 0,
      "icon": "ability_druid_bash",
      "ranks": [
        16940,
        16941
      ],
      "requires": [],
      "specId": 281
    },
    "798": {
      "id": 798,
      "row": 2,
      "col": 2,
      "icon": "inv_misc_monsterclaw_04",
      "ranks": [
        16942,
        16943,
        16944
      ],
      "requires": [],
      "specId": 281
    },
    "799": {
      "id": 799,
      "row": 1,
      "col": 0,
      "icon": "ability_ambush",
      "ranks": [
        16947,
        16948,
        16949
      ],
      "requires": [],
      "specId": 281
    },
    "801": {
      "id": 801,
      "row": 3,
      "col": 2,
      "icon": "ability_racial_cannibalize",
      "ranks": [
        37116,
        37117
      ],
      "requires": [
        {
          "id": 798,
          "qty": 3
        }
      ],
      "specId": 281
    },
    "802": {
      "id": 802,
      "row": 3,
      "col": 0,
      "icon": "spell_shadow_vampiricaura",
      "ranks": [
        16966,
        16968
      ],
      "requires": [],
      "specId": 281
    },
    "803": {
      "id": 803,
      "row": 3,
      "col": 1,
      "icon": "ability_hunter_pet_cat",
      "ranks": [
        16972,
        16974,
        16975
      ],
      "requires": [],
      "specId": 281
    },
    "804": {
      "id": 804,
      "row": 4,
      "col": 2,
      "icon": "ability_hunter_pet_bear",
      "ranks": [
        49377
      ],
      "requires": [],
      "specId": 281
    },
    "805": {
      "id": 805,
      "row": 1,
      "col": 1,
      "icon": "ability_druid_ravage",
      "ranks": [
        16998,
        16999
      ],
      "requires": [],
      "specId": 281
    },
    "807": {
      "id": 807,
      "row": 2,
      "col": 0,
      "icon": "spell_nature_spiritwolf",
      "ranks": [
        17002,
        24866
      ],
      "requires": [],
      "specId": 281
    },
    "808": {
      "id": 808,
      "row": 5,
      "col": 1,
      "icon": "spell_holy_blessingofagility",
      "ranks": [
        17003,
        17004,
        17005,
        17006,
        24894
      ],
      "requires": [
        {
          "id": 803,
          "qty": 3
        }
      ],
      "specId": 281
    },
    "809": {
      "id": 809,
      "row": 6,
      "col": 1,
      "icon": "spell_nature_unyeildingstamina",
      "ranks": [
        17007
      ],
      "requires": [],
      "specId": 281
    },
    "1162": {
      "id": 1162,
      "row": 2,
      "col": 1,
      "icon": "ability_druid_tigersroar",
      "ranks": [
        61336
      ],
      "requires": [],
      "specId": 281
    },
    "1792": {
      "id": 1792,
      "row": 4,
      "col": 3,
      "icon": "ability_druid_healinginstincts",
      "ranks": [
        33872,
        33873
      ],
      "requires": [],
      "specId": 281
    },
    "1793": {
      "id": 1793,
      "row": 6,
      "col": 3,
      "icon": "ability_druid_primaltenacity",
      "ranks": [
        33851,
        33852,
        33957
      ],
      "requires": [],
      "specId": 281
    },
    "1794": {
      "id": 1794,
      "row": 5,
      "col": 2,
      "icon": "ability_druid_enrage",
      "ranks": [
        33853,
        33855,
        33856
      ],
      "requires": [],
      "specId": 281
    },
    "1795": {
      "id": 1795,
      "row": 7,
      "col": 2,
      "icon": "ability_druid_predatoryinstincts",
      "ranks": [
        33859,
        33866,
        33867
      ],
      "requires": [],
      "specId": 281
    },
    "1796": {
      "id": 1796,
      "row": 8,
      "col": 1,
      "icon": "ability_druid_mangle2",
      "ranks": [
        33917
      ],
      "requires": [
        {
          "id": 809,
          "qty": 1
        }
      ],
      "specId": 281
    },
    "1798": {
      "id": 1798,
      "row": 6,
      "col": 2,
      "icon": "spell_nature_unyeildingstamina",
      "ranks": [
        34297,
        34300
      ],
      "requires": [
        {
          "id": 809,
          "qty": 1
        }
      ],
      "specId": 281
    },
    "1914": {
      "id": 1914,
      "row": 3,
      "col": 3,
      "icon": "ability_druid_primalprecision",
      "ranks": [
        48409,
        48410
      ],
      "requires": [
        {
          "id": 798,
          "qty": 3
        }
      ],
      "specId": 281
    },
    "1918": {
      "id": 1918,
      "row": 9,
      "col": 1,
      "icon": "ability_druid_primalagression",
      "ranks": [
        48432,
        48433,
        48434,
        51268,
        51269
      ],
      "requires": [],
      "specId": 281
    },
    "1919": {
      "id": 1919,
      "row": 7,
      "col": 3,
      "icon": "ability_druid_infectedwound",
      "ranks": [
        48483,
        48484,
        48485
      ],
      "requires": [],
      "specId": 281
    },
    "1920": {
      "id": 1920,
      "row": 8,
      "col": 2,
      "icon": "ability_druid_mangle2",
      "ranks": [
        48532,
        48489,
        48491
      ],
      "requires": [
        {
          "id": 1796,
          "qty": 1
        }
      ],
      "specId": 281
    },
    "1921": {
      "id": 1921,
      "row": 8,
      "col": 0,
      "icon": "ability_druid_kingofthejungle",
      "ranks": [
        48492,
        48494,
        48495
      ],
      "requires": [],
      "specId": 281
    },
    "1927": {
      "id": 1927,
      "row": 10,
      "col": 1,
      "icon": "ability_druid_berserk",
      "ranks": [
        50334
      ],
      "requires": [],
      "specId": 281
    },
    "2241": {
      "id": 2241,
      "row": 7,
      "col": 0,
      "icon": "ability_druid_challangingroar",
      "ranks": [
        57873,
        57876,
        57877
      ],
      "requires": [
        {
          "id": 809,
          "qty": 1
        }
      ],
      "specId": 281
    },
    "2242": {
      "id": 2242,
      "row": 5,
      "col": 0,
      "icon": "ability_bullrush",
      "ranks": [
        57878,
        57880,
        57881
      ],
      "requires": [],
      "specId": 281
    },
    "2266": {
      "id": 2266,
      "row": 9,
      "col": 2,
      "icon": "ability_druid_rake",
      "ranks": [
        63503
      ],
      "requires": [
        {
          "id": 1918,
          "qty": 5
        }
      ],
      "specId": 281
    }
  },
  "282": {
    "821": {
      "id": 821,
      "row": 0,
      "col": 0,
      "icon": "spell_nature_regeneration",
      "ranks": [
        17050,
        17051
      ],
      "requires": [],
      "specId": 282
    },
    "822": {
      "id": 822,
      "row": 0,
      "col": 2,
      "icon": "spell_holy_blessingofstamina",
      "ranks": [
        17056,
        17058,
        17059,
        17060,
        17061
      ],
      "requires": [],
      "specId": 282
    },
    "823": {
      "id": 823,
      "row": 0,
      "col": 1,
      "icon": "spell_nature_healingwavegreater",
      "ranks": [
        17063,
        17065,
        17066
      ],
      "requires": [],
      "specId": 282
    },
    "824": {
      "id": 824,
      "row": 1,
      "col": 0,
      "icon": "spell_nature_healingtouch",
      "ranks": [
        17069,
        17070,
        17071,
        17072,
        17073
      ],
      "requires": [],
      "specId": 282
    },
    "825": {
      "id": 825,
      "row": 5,
      "col": 2,
      "icon": "spell_nature_resistnature",
      "ranks": [
        17074,
        17075,
        17076,
        17077,
        17078
      ],
      "requires": [
        {
          "id": 830,
          "qty": 3
        }
      ],
      "specId": 282
    },
    "826": {
      "id": 826,
      "row": 1,
      "col": 2,
      "icon": "spell_nature_wispsplode",
      "ranks": [
        16833,
        16834,
        16835
      ],
      "requires": [],
      "specId": 282
    },
    "827": {
      "id": 827,
      "row": 2,
      "col": 1,
      "icon": "spell_nature_crystalball",
      "ranks": [
        16864
      ],
      "requires": [],
      "specId": 282
    },
    "828": {
      "id": 828,
      "row": 4,
      "col": 1,
      "icon": "spell_nature_protectionformnature",
      "ranks": [
        17104,
        24943,
        24944,
        24945,
        24946
      ],
      "requires": [],
      "specId": 282
    },
    "829": {
      "id": 829,
      "row": 2,
      "col": 0,
      "icon": "spell_frost_windwalkon",
      "ranks": [
        17106,
        17107,
        17108
      ],
      "requires": [],
      "specId": 282
    },
    "830": {
      "id": 830,
      "row": 3,
      "col": 2,
      "icon": "spell_nature_rejuvenation",
      "ranks": [
        17111,
        17112,
        17113
      ],
      "requires": [],
      "specId": 282
    },
    "831": {
      "id": 831,
      "row": 4,
      "col": 0,
      "icon": "spell_nature_ravenform",
      "ranks": [
        17116
      ],
      "requires": [
        {
          "id": 829,
          "qty": 3
        }
      ],
      "specId": 282
    },
    "841": {
      "id": 841,
      "row": 1,
      "col": 1,
      "icon": "ability_eyeoftheowl",
      "ranks": [
        17118,
        17119,
        17120
      ],
      "requires": [],
      "specId": 282
    },
    "842": {
      "id": 842,
      "row": 4,
      "col": 3,
      "icon": "spell_nature_tranquility",
      "ranks": [
        17123,
        17124
      ],
      "requires": [],
      "specId": 282
    },
    "843": {
      "id": 843,
      "row": 3,
      "col": 1,
      "icon": "spell_holy_elunesgrace",
      "ranks": [
        24968,
        24969,
        24970,
        24971,
        24972
      ],
      "requires": [],
      "specId": 282
    },
    "844": {
      "id": 844,
      "row": 6,
      "col": 1,
      "icon": "inv_relics_idolofrejuvenation",
      "ranks": [
        18562
      ],
      "requires": [
        {
          "id": 828,
          "qty": 5
        }
      ],
      "specId": 282
    },
    "1788": {
      "id": 1788,
      "row": 5,
      "col": 0,
      "icon": "ability_druid_empoweredtouch",
      "ranks": [
        33879,
        33880
      ],
      "requires": [],
      "specId": 282
    },
    "1789": {
      "id": 1789,
      "row": 7,
      "col": 1,
      "icon": "ability_druid_empoweredrejuvination",
      "ranks": [
        33886,
        33887,
        33888,
        33889,
        33890
      ],
      "requires": [],
      "specId": 282
    },
    "1790": {
      "id": 1790,
      "row": 6,
      "col": 2,
      "icon": "ability_druid_naturalperfection",
      "ranks": [
        33881,
        33882,
        33883
      ],
      "requires": [],
      "specId": 282
    },
    "1791": {
      "id": 1791,
      "row": 8,
      "col": 1,
      "icon": "ability_druid_treeoflife",
      "ranks": [
        65139
      ],
      "requires": [
        {
          "id": 1789,
          "qty": 5
        }
      ],
      "specId": 282
    },
    "1797": {
      "id": 1797,
      "row": 6,
      "col": 0,
      "icon": "spell_nature_giftofthewaterspirit",
      "ranks": [
        34151,
        34152,
        34153
      ],
      "requires": [],
      "specId": 282
    },
    "1915": {
      "id": 1915,
      "row": 2,
      "col": 2,
      "icon": "ability_druid_mastershapeshifter",
      "ranks": [
        48411,
        48412
      ],
      "requires": [
        {
          "id": 826,
          "qty": 3
        }
      ],
      "specId": 282
    },
    "1916": {
      "id": 1916,
      "row": 9,
      "col": 2,
      "icon": "ability_druid_manatree",
      "ranks": [
        51179,
        51180,
        51181,
        51182,
        51183
      ],
      "requires": [],
      "specId": 282
    },
    "1917": {
      "id": 1917,
      "row": 10,
      "col": 1,
      "icon": "ability_druid_flourish",
      "ranks": [
        48438
      ],
      "requires": [
        {
          "id": 1791,
          "qty": 1
        }
      ],
      "specId": 282
    },
    "1922": {
      "id": 1922,
      "row": 7,
      "col": 2,
      "icon": "ability_druid_giftoftheearthmother",
      "ranks": [
        48496,
        48499,
        48500
      ],
      "requires": [],
      "specId": 282
    },
    "1929": {
      "id": 1929,
      "row": 8,
      "col": 0,
      "icon": "ability_druid_replenish",
      "ranks": [
        48539,
        48544,
        48545
      ],
      "requires": [],
      "specId": 282
    },
    "1930": {
      "id": 1930,
      "row": 8,
      "col": 2,
      "icon": "ability_druid_improvedtreeform",
      "ranks": [
        48535,
        48536,
        48537
      ],
      "requires": [
        {
          "id": 1791,
          "qty": 1
        }
      ],
      "specId": 282
    },
    "2264": {
      "id": 2264,
      "row": 9,
      "col": 0,
      "icon": "spell_nature_stoneclawtotem",
      "ranks": [
        63410,
        63411
      ],
      "requires": [],
      "specId": 282
    }
  },
  "283": {
    "762": {
      "id": 762,
      "row": 0,
      "col": 1,
      "icon": "spell_nature_abolishmagic",
      "ranks": [
        16814,
        16815,
        16816,
        16817,
        16818
      ],
      "requires": [],
      "specId": 283
    },
    "763": {
      "id": 763,
      "row": 1,
      "col": 3,
      "icon": "spell_nature_starfall",
      "ranks": [
        16821,
        16822
      ],
      "requires": [],
      "specId": 283
    },
    "764": {
      "id": 764,
      "row": 2,
      "col": 3,
      "icon": "spell_nature_naturetouchgrow",
      "ranks": [
        16819,
        16820
      ],
      "requires": [],
      "specId": 283
    },
    "782": {
      "id": 782,
      "row": 2,
      "col": 0,
      "icon": "spell_nature_thorns",
      "ranks": [
        16836,
        16839,
        16840
      ],
      "requires": [],
      "specId": 283
    },
    "783": {
      "id": 783,
      "row": 1,
      "col": 0,
      "icon": "spell_nature_sentinal",
      "ranks": [
        16845,
        16846,
        16847
      ],
      "requires": [],
      "specId": 283
    },
    "784": {
      "id": 784,
      "row": 3,
      "col": 2,
      "icon": "spell_arcane_starfire",
      "ranks": [
        16850,
        16923,
        16924
      ],
      "requires": [],
      "specId": 283
    },
    "788": {
      "id": 788,
      "row": 4,
      "col": 1,
      "icon": "spell_nature_insectswarm",
      "ranks": [
        5570
      ],
      "requires": [],
      "specId": 283
    },
    "789": {
      "id": 789,
      "row": 2,
      "col": 1,
      "icon": "spell_nature_naturesblessing",
      "ranks": [
        16880,
        61345,
        61346
      ],
      "requires": [
        {
          "id": 1822,
          "qty": 2
        }
      ],
      "specId": 283
    },
    "790": {
      "id": 790,
      "row": 5,
      "col": 1,
      "icon": "spell_nature_moonglow",
      "ranks": [
        16896,
        16897,
        16899
      ],
      "requires": [],
      "specId": 283
    },
    "792": {
      "id": 792,
      "row": 3,
      "col": 1,
      "icon": "spell_nature_purge",
      "ranks": [
        16909,
        16910,
        16911,
        16912,
        16913
      ],
      "requires": [],
      "specId": 283
    },
    "793": {
      "id": 793,
      "row": 6,
      "col": 1,
      "icon": "spell_nature_forceofnature",
      "ranks": [
        24858
      ],
      "requires": [],
      "specId": 283
    },
    "1782": {
      "id": 1782,
      "row": 4,
      "col": 0,
      "icon": "ability_druid_lunarguidance",
      "ranks": [
        33589,
        33590,
        33591
      ],
      "requires": [],
      "specId": 283
    },
    "1783": {
      "id": 1783,
      "row": 5,
      "col": 2,
      "icon": "ability_druid_balanceofpower",
      "ranks": [
        33592,
        33596
      ],
      "requires": [],
      "specId": 283
    },
    "1784": {
      "id": 1784,
      "row": 5,
      "col": 0,
      "icon": "ability_druid_dreamstate",
      "ranks": [
        33597,
        33599,
        33956
      ],
      "requires": [],
      "specId": 283
    },
    "1785": {
      "id": 1785,
      "row": 6,
      "col": 3,
      "icon": "spell_nature_faeriefire",
      "ranks": [
        33600,
        33601,
        33602
      ],
      "requires": [],
      "specId": 283
    },
    "1786": {
      "id": 1786,
      "row": 7,
      "col": 2,
      "icon": "ability_druid_twilightswrath",
      "ranks": [
        33603,
        33604,
        33605,
        33606,
        33607
      ],
      "requires": [],
      "specId": 283
    },
    "1787": {
      "id": 1787,
      "row": 8,
      "col": 2,
      "icon": "ability_druid_forceofnature",
      "ranks": [
        33831
      ],
      "requires": [],
      "specId": 283
    },
    "1822": {
      "id": 1822,
      "row": 1,
      "col": 1,
      "icon": "inv_staff_01",
      "ranks": [
        35363,
        35364
      ],
      "requires": [],
      "specId": 283
    },
    "1912": {
      "id": 1912,
      "row": 6,
      "col": 2,
      "icon": "ability_druid_improvedmoonkinform",
      "ranks": [
        48384,
        48395,
        48396
      ],
      "requires": [
        {
          "id": 793,
          "qty": 1
        }
      ],
      "specId": 283
    },
    "1913": {
      "id": 1913,
      "row": 7,
      "col": 0,
      "icon": "ability_druid_owlkinfrenzy",
      "ranks": [
        48389,
        48392,
        48393
      ],
      "requires": [
        {
          "id": 793,
          "qty": 1
        }
      ],
      "specId": 283
    },
    "1923": {
      "id": 1923,
      "row": 8,
      "col": 1,
      "icon": "ability_druid_typhoon",
      "ranks": [
        50516
      ],
      "requires": [
        {
          "id": 793,
          "qty": 1
        }
      ],
      "specId": 283
    },
    "1924": {
      "id": 1924,
      "row": 8,
      "col": 0,
      "icon": "ability_druid_eclipse",
      "ranks": [
        48516,
        48521,
        48525
      ],
      "requires": [],
      "specId": 283
    },
    "1925": {
      "id": 1925,
      "row": 8,
      "col": 3,
      "icon": "ability_druid_galewinds",
      "ranks": [
        48488,
        48514
      ],
      "requires": [],
      "specId": 283
    },
    "1926": {
      "id": 1926,
      "row": 10,
      "col": 1,
      "icon": "ability_druid_starfall",
      "ranks": [
        48505
      ],
      "requires": [],
      "specId": 283
    },
    "1928": {
      "id": 1928,
      "row": 9,
      "col": 1,
      "icon": "ability_druid_earthandsky",
      "ranks": [
        48506,
        48510,
        48511
      ],
      "requires": [],
      "specId": 283
    },
    "2238": {
      "id": 2238,
      "row": 0,
      "col": 2,
      "icon": "spell_arcane_arcane03",
      "ranks": [
        57810,
        57811,
        57812,
        57813,
        57814
      ],
      "requires": [],
      "specId": 283
    },
    "2239": {
      "id": 2239,
      "row": 4,
      "col": 2,
      "icon": "spell_nature_insectswarm",
      "ranks": [
        57849,
        57850,
        57851
      ],
      "requires": [
        {
          "id": 788,
          "qty": 1
        }
      ],
      "specId": 283
    },
    "2240": {
      "id": 2240,
      "row": 2,
      "col": 2,
      "icon": "spell_nature_natureguardian",
      "ranks": [
        57865
      ],
      "requires": [
        {
          "id": 1822,
          "qty": 2
        }
      ],
      "specId": 283
    }
  },
  "301": {
    "941": {
      "id": 941,
      "row": 1,
      "col": 2,
      "icon": "spell_fire_windsofwoe",
      "ranks": [
        17778,
        17779,
        17780
      ],
      "requires": [],
      "specId": 301
    },
    "943": {
      "id": 943,
      "row": 0,
      "col": 2,
      "icon": "spell_shadow_deathpact",
      "ranks": [
        17788,
        17789,
        17790,
        17791,
        17792
      ],
      "requires": [],
      "specId": 301
    },
    "944": {
      "id": 944,
      "row": 0,
      "col": 1,
      "icon": "spell_shadow_shadowbolt",
      "ranks": [
        17793,
        17796,
        17801,
        17802,
        17803
      ],
      "requires": [],
      "specId": 301
    },
    "961": {
      "id": 961,
      "row": 4,
      "col": 1,
      "icon": "spell_fire_immolation",
      "ranks": [
        17815,
        17833,
        17834
      ],
      "requires": [],
      "specId": 301
    },
    "963": {
      "id": 963,
      "row": 2,
      "col": 1,
      "icon": "spell_shadow_scourgebuild",
      "ranks": [
        17877
      ],
      "requires": [],
      "specId": 301
    },
    "964": {
      "id": 964,
      "row": 3,
      "col": 1,
      "icon": "spell_shadow_corpseexplode",
      "ranks": [
        17917,
        17918
      ],
      "requires": [],
      "specId": 301
    },
    "965": {
      "id": 965,
      "row": 3,
      "col": 3,
      "icon": "spell_fire_soulburn",
      "ranks": [
        17927,
        17929,
        17930
      ],
      "requires": [],
      "specId": 301
    },
    "966": {
      "id": 966,
      "row": 5,
      "col": 2,
      "icon": "spell_fire_selfdestruct",
      "ranks": [
        17954,
        17955,
        17956,
        17957,
        17958
      ],
      "requires": [],
      "specId": 301
    },
    "967": {
      "id": 967,
      "row": 2,
      "col": 2,
      "icon": "spell_shadow_shadowwordpain",
      "ranks": [
        17959,
        59738,
        59739,
        59740,
        59741
      ],
      "requires": [],
      "specId": 301
    },
    "968": {
      "id": 968,
      "row": 6,
      "col": 1,
      "icon": "spell_fire_fireball",
      "ranks": [
        17962
      ],
      "requires": [
        {
          "id": 961,
          "qty": 3
        }
      ],
      "specId": 301
    },
    "981": {
      "id": 981,
      "row": 4,
      "col": 2,
      "icon": "spell_fire_flameshock",
      "ranks": [
        18130
      ],
      "requires": [
        {
          "id": 967,
          "qty": 5
        }
      ],
      "specId": 301
    },
    "982": {
      "id": 982,
      "row": 1,
      "col": 0,
      "icon": "spell_fire_fire",
      "ranks": [
        18119,
        18120
      ],
      "requires": [],
      "specId": 301
    },
    "983": {
      "id": 983,
      "row": 2,
      "col": 0,
      "icon": "spell_fire_firebolt",
      "ranks": [
        18126,
        18127
      ],
      "requires": [],
      "specId": 301
    },
    "985": {
      "id": 985,
      "row": 3,
      "col": 0,
      "icon": "spell_fire_lavaspawn",
      "ranks": [
        18135,
        18136
      ],
      "requires": [],
      "specId": 301
    },
    "986": {
      "id": 986,
      "row": 6,
      "col": 3,
      "icon": "spell_fire_volcano",
      "ranks": [
        18096,
        18073,
        63245
      ],
      "requires": [],
      "specId": 301
    },
    "1676": {
      "id": 1676,
      "row": 8,
      "col": 1,
      "icon": "spell_shadow_shadowfury",
      "ranks": [
        30283
      ],
      "requires": [],
      "specId": 301
    },
    "1677": {
      "id": 1677,
      "row": 7,
      "col": 1,
      "icon": "spell_shadow_shadowandflame",
      "ranks": [
        30288,
        30289,
        30290,
        30291,
        30292
      ],
      "requires": [],
      "specId": 301
    },
    "1678": {
      "id": 1678,
      "row": 6,
      "col": 2,
      "icon": "spell_shadow_soulleech_3",
      "ranks": [
        30293,
        30295,
        30296
      ],
      "requires": [],
      "specId": 301
    },
    "1679": {
      "id": 1679,
      "row": 5,
      "col": 0,
      "icon": "spell_shadow_netherprotection",
      "ranks": [
        30299,
        30301,
        30302
      ],
      "requires": [],
      "specId": 301
    },
    "1817": {
      "id": 1817,
      "row": 4,
      "col": 0,
      "icon": "spell_fire_playingwithfire",
      "ranks": [
        34935,
        34938,
        34939
      ],
      "requires": [
        {
          "id": 985,
          "qty": 2
        }
      ],
      "specId": 301
    },
    "1887": {
      "id": 1887,
      "row": 1,
      "col": 1,
      "icon": "ability_mage_moltenarmor",
      "ranks": [
        63349,
        63350,
        63351
      ],
      "requires": [],
      "specId": 301
    },
    "1888": {
      "id": 1888,
      "row": 8,
      "col": 0,
      "icon": "ability_warlock_backdraft",
      "ranks": [
        47258,
        47259,
        47260
      ],
      "requires": [
        {
          "id": 968,
          "qty": 1
        }
      ],
      "specId": 301
    },
    "1889": {
      "id": 1889,
      "row": 7,
      "col": 2,
      "icon": "ability_warlock_improvedsoulleech",
      "ranks": [
        54117,
        54118
      ],
      "requires": [
        {
          "id": 1678,
          "qty": 3
        }
      ],
      "specId": 301
    },
    "1890": {
      "id": 1890,
      "row": 9,
      "col": 1,
      "icon": "ability_warlock_fireandbrimstone",
      "ranks": [
        47266,
        47267,
        47268,
        47269,
        47270
      ],
      "requires": [],
      "specId": 301
    },
    "1891": {
      "id": 1891,
      "row": 10,
      "col": 1,
      "icon": "ability_warlock_chaosbolt",
      "ranks": [
        50796
      ],
      "requires": [],
      "specId": 301
    },
    "2045": {
      "id": 2045,
      "row": 8,
      "col": 2,
      "icon": "ability_warlock_empoweredimp",
      "ranks": [
        47220,
        47221,
        47223
      ],
      "requires": [],
      "specId": 301
    }
  },
  "302": {
    "1001": {
      "id": 1001,
      "row": 2,
      "col": 1,
      "icon": "spell_shadow_fingerofdeath",
      "ranks": [
        17783,
        17784,
        17785
      ],
      "requires": [],
      "specId": 302
    },
    "1002": {
      "id": 1002,
      "row": 3,
      "col": 1,
      "icon": "spell_shadow_twilight",
      "ranks": [
        18094,
        18095
      ],
      "requires": [],
      "specId": 302
    },
    "1003": {
      "id": 1003,
      "row": 0,
      "col": 2,
      "icon": "spell_shadow_abominationexplosion",
      "ranks": [
        17810,
        17811,
        17812,
        17813,
        17814
      ],
      "requires": [],
      "specId": 302
    },
    "1004": {
      "id": 1004,
      "row": 1,
      "col": 3,
      "icon": "spell_shadow_lifedrain02",
      "ranks": [
        17804,
        17805
      ],
      "requires": [],
      "specId": 302
    },
    "1005": {
      "id": 1005,
      "row": 0,
      "col": 1,
      "icon": "spell_shadow_unsummonbuilding",
      "ranks": [
        18174,
        18175,
        18176
      ],
      "requires": [],
      "specId": 302
    },
    "1006": {
      "id": 1006,
      "row": 1,
      "col": 0,
      "icon": "spell_shadow_curseofmannoroth",
      "ranks": [
        18179,
        18180
      ],
      "requires": [],
      "specId": 302
    },
    "1007": {
      "id": 1007,
      "row": 1,
      "col": 2,
      "icon": "spell_shadow_burningspirit",
      "ranks": [
        18182,
        18183
      ],
      "requires": [],
      "specId": 302
    },
    "1021": {
      "id": 1021,
      "row": 3,
      "col": 0,
      "icon": "spell_shadow_callofbone",
      "ranks": [
        18218,
        18219
      ],
      "requires": [],
      "specId": 302
    },
    "1022": {
      "id": 1022,
      "row": 6,
      "col": 2,
      "icon": "spell_shadow_darkritual",
      "ranks": [
        18220
      ],
      "requires": [],
      "specId": 302
    },
    "1041": {
      "id": 1041,
      "row": 4,
      "col": 1,
      "icon": "spell_shadow_requiem",
      "ranks": [
        63108
      ],
      "requires": [],
      "specId": 302
    },
    "1042": {
      "id": 1042,
      "row": 5,
      "col": 1,
      "icon": "spell_shadow_shadetruesight",
      "ranks": [
        18271,
        18272,
        18273,
        18274,
        18275
      ],
      "requires": [
        {
          "id": 1041,
          "qty": 1
        }
      ],
      "specId": 302
    },
    "1061": {
      "id": 1061,
      "row": 2,
      "col": 2,
      "icon": "spell_shadow_contagion",
      "ranks": [
        18288
      ],
      "requires": [],
      "specId": 302
    },
    "1081": {
      "id": 1081,
      "row": 4,
      "col": 2,
      "icon": "spell_shadow_grimward",
      "ranks": [
        18223
      ],
      "requires": [
        {
          "id": 1061,
          "qty": 1
        }
      ],
      "specId": 302
    },
    "1101": {
      "id": 1101,
      "row": 1,
      "col": 1,
      "icon": "spell_shadow_haunting",
      "ranks": [
        18213,
        18372
      ],
      "requires": [],
      "specId": 302
    },
    "1284": {
      "id": 1284,
      "row": 0,
      "col": 0,
      "icon": "spell_shadow_curseofsargeras",
      "ranks": [
        18827,
        18829
      ],
      "requires": [],
      "specId": 302
    },
    "1667": {
      "id": 1667,
      "row": 7,
      "col": 2,
      "icon": "spell_shadow_curseofachimonde",
      "ranks": [
        32477,
        32483,
        32484
      ],
      "requires": [],
      "specId": 302
    },
    "1668": {
      "id": 1668,
      "row": 7,
      "col": 0,
      "icon": "spell_shadow_deathscream",
      "ranks": [
        30054,
        30057
      ],
      "requires": [],
      "specId": 302
    },
    "1669": {
      "id": 1669,
      "row": 6,
      "col": 1,
      "icon": "spell_shadow_painfulafflictions",
      "ranks": [
        30060,
        30061,
        30062,
        30063,
        30064
      ],
      "requires": [],
      "specId": 302
    },
    "1670": {
      "id": 1670,
      "row": 8,
      "col": 1,
      "icon": "spell_shadow_unstableaffliction_3",
      "ranks": [
        30108
      ],
      "requires": [
        {
          "id": 1669,
          "qty": 5
        }
      ],
      "specId": 302
    },
    "1763": {
      "id": 1763,
      "row": 4,
      "col": 0,
      "icon": "spell_shadow_shadowembrace",
      "ranks": [
        32385,
        32387,
        32392,
        32393,
        32394
      ],
      "requires": [],
      "specId": 302
    },
    "1764": {
      "id": 1764,
      "row": 3,
      "col": 3,
      "icon": "spell_shadow_abominationexplosion",
      "ranks": [
        32381,
        32382,
        32383
      ],
      "requires": [],
      "specId": 302
    },
    "1873": {
      "id": 1873,
      "row": 5,
      "col": 0,
      "icon": "spell_shadow_summonfelhunter",
      "ranks": [
        54037,
        54038
      ],
      "requires": [],
      "specId": 302
    },
    "1875": {
      "id": 1875,
      "row": 8,
      "col": 0,
      "icon": "spell_shadow_deathsembrace",
      "ranks": [
        47198,
        47199,
        47200
      ],
      "requires": [],
      "specId": 302
    },
    "1876": {
      "id": 1876,
      "row": 9,
      "col": 1,
      "icon": "ability_warlock_everlastingaffliction",
      "ranks": [
        47201,
        47202,
        47203,
        47204,
        47205
      ],
      "requires": [],
      "specId": 302
    },
    "1878": {
      "id": 1878,
      "row": 6,
      "col": 0,
      "icon": "ability_warlock_eradication",
      "ranks": [
        47195,
        47196,
        47197
      ],
      "requires": [],
      "specId": 302
    },
    "2041": {
      "id": 2041,
      "row": 10,
      "col": 1,
      "icon": "ability_warlock_haunt",
      "ranks": [
        48181
      ],
      "requires": [],
      "specId": 302
    },
    "2205": {
      "id": 2205,
      "row": 2,
      "col": 0,
      "icon": "spell_shadow_possession",
      "ranks": [
        53754,
        53759
      ],
      "requires": [],
      "specId": 302
    },
    "2245": {
      "id": 2245,
      "row": 8,
      "col": 2,
      "icon": "spell_shadow_unstableaffliction_2",
      "ranks": [
        58435
      ],
      "requires": [
        {
          "id": 1670,
          "qty": 1
        }
      ],
      "specId": 302
    }
  },
  "303": {
    "1221": {
      "id": 1221,
      "row": 0,
      "col": 0,
      "icon": "inv_stone_04",
      "ranks": [
        18692,
        18693
      ],
      "requires": [],
      "specId": 303
    },
    "1222": {
      "id": 1222,
      "row": 0,
      "col": 1,
      "icon": "spell_shadow_summonimp",
      "ranks": [
        18694,
        18695,
        18696
      ],
      "requires": [],
      "specId": 303
    },
    "1223": {
      "id": 1223,
      "row": 0,
      "col": 2,
      "icon": "spell_shadow_metamorphosis",
      "ranks": [
        18697,
        18698,
        18699
      ],
      "requires": [],
      "specId": 303
    },
    "1224": {
      "id": 1224,
      "row": 1,
      "col": 0,
      "icon": "spell_shadow_lifedrain",
      "ranks": [
        18703,
        18704
      ],
      "requires": [],
      "specId": 303
    },
    "1225": {
      "id": 1225,
      "row": 1,
      "col": 1,
      "icon": "spell_shadow_summonvoidwalker",
      "ranks": [
        18705,
        18706,
        18707
      ],
      "requires": [],
      "specId": 303
    },
    "1226": {
      "id": 1226,
      "row": 2,
      "col": 2,
      "icon": "spell_nature_removecurse",
      "ranks": [
        18708
      ],
      "requires": [],
      "specId": 303
    },
    "1227": {
      "id": 1227,
      "row": 3,
      "col": 2,
      "icon": "spell_shadow_impphaseshift",
      "ranks": [
        18709,
        18710
      ],
      "requires": [
        {
          "id": 1226,
          "qty": 1
        }
      ],
      "specId": 303
    },
    "1242": {
      "id": 1242,
      "row": 1,
      "col": 2,
      "icon": "spell_holy_magicalsentry",
      "ranks": [
        18731,
        18743,
        18744
      ],
      "requires": [],
      "specId": 303
    },
    "1243": {
      "id": 1243,
      "row": 2,
      "col": 0,
      "icon": "spell_shadow_summonsuccubus",
      "ranks": [
        18754,
        18755,
        18756
      ],
      "requires": [],
      "specId": 303
    },
    "1244": {
      "id": 1244,
      "row": 5,
      "col": 1,
      "icon": "spell_shadow_shadowpact",
      "ranks": [
        23785,
        23822,
        23823,
        23824,
        23825
      ],
      "requires": [
        {
          "id": 1262,
          "qty": 5
        }
      ],
      "specId": 303
    },
    "1261": {
      "id": 1261,
      "row": 4,
      "col": 2,
      "icon": "inv_ammo_firetar",
      "ranks": [
        18767,
        18768
      ],
      "requires": [],
      "specId": 303
    },
    "1262": {
      "id": 1262,
      "row": 3,
      "col": 1,
      "icon": "spell_shadow_shadowworddominate",
      "ranks": [
        18769,
        18770,
        18771,
        18772,
        18773
      ],
      "requires": [
        {
          "id": 1282,
          "qty": 1
        }
      ],
      "specId": 303
    },
    "1263": {
      "id": 1263,
      "row": 6,
      "col": 2,
      "icon": "spell_shadow_improvedvampiricembrace",
      "ranks": [
        35691,
        35692,
        35693
      ],
      "requires": [],
      "specId": 303
    },
    "1281": {
      "id": 1281,
      "row": 4,
      "col": 0,
      "icon": "spell_shadow_manafeed",
      "ranks": [
        30326
      ],
      "requires": [
        {
          "id": 1262,
          "qty": 5
        }
      ],
      "specId": 303
    },
    "1282": {
      "id": 1282,
      "row": 2,
      "col": 1,
      "icon": "spell_shadow_gathershadows",
      "ranks": [
        19028
      ],
      "requires": [],
      "specId": 303
    },
    "1283": {
      "id": 1283,
      "row": 5,
      "col": 2,
      "icon": "ability_warlock_moltencore",
      "ranks": [
        47245,
        47246,
        47247
      ],
      "requires": [],
      "specId": 303
    },
    "1671": {
      "id": 1671,
      "row": 2,
      "col": 3,
      "icon": "spell_shadow_ragingscream",
      "ranks": [
        30143,
        30144,
        30145
      ],
      "requires": [],
      "specId": 303
    },
    "1672": {
      "id": 1672,
      "row": 8,
      "col": 1,
      "icon": "spell_shadow_summonfelguard",
      "ranks": [
        30146
      ],
      "requires": [],
      "specId": 303
    },
    "1673": {
      "id": 1673,
      "row": 7,
      "col": 1,
      "icon": "spell_shadow_demonictactics",
      "ranks": [
        30242,
        30245,
        30246,
        30247,
        30248
      ],
      "requires": [],
      "specId": 303
    },
    "1680": {
      "id": 1680,
      "row": 6,
      "col": 0,
      "icon": "spell_shadow_demonicfortitude",
      "ranks": [
        30319,
        30320,
        30321
      ],
      "requires": [],
      "specId": 303
    },
    "1880": {
      "id": 1880,
      "row": 6,
      "col": 1,
      "icon": "ability_warlock_demonicempowerment",
      "ranks": [
        47193
      ],
      "requires": [
        {
          "id": 1244,
          "qty": 5
        }
      ],
      "specId": 303
    },
    "1882": {
      "id": 1882,
      "row": 8,
      "col": 0,
      "icon": "ability_warlock_improveddemonictactics",
      "ranks": [
        54347,
        54348,
        54349
      ],
      "requires": [
        {
          "id": 1673,
          "qty": 5
        }
      ],
      "specId": 303
    },
    "1883": {
      "id": 1883,
      "row": 0,
      "col": 3,
      "icon": "spell_shadow_felmending",
      "ranks": [
        47230,
        47231
      ],
      "requires": [],
      "specId": 303
    },
    "1884": {
      "id": 1884,
      "row": 8,
      "col": 2,
      "icon": "spell_shadow_demonicempathy",
      "ranks": [
        63117,
        63121,
        63123
      ],
      "requires": [],
      "specId": 303
    },
    "1885": {
      "id": 1885,
      "row": 9,
      "col": 1,
      "icon": "spell_shadow_demonicpact",
      "ranks": [
        47236,
        47237,
        47238,
        47239,
        47240
      ],
      "requires": [],
      "specId": 303
    },
    "1886": {
      "id": 1886,
      "row": 10,
      "col": 1,
      "icon": "spell_shadow_demonform",
      "ranks": [
        59672
      ],
      "requires": [],
      "specId": 303
    },
    "2261": {
      "id": 2261,
      "row": 7,
      "col": 2,
      "icon": "spell_fire_fireball02",
      "ranks": [
        63156,
        63158
      ],
      "requires": [],
      "specId": 303
    }
  },
  "361": {
    "1381": {
      "id": 1381,
      "row": 1,
      "col": 1,
      "icon": "ability_hunter_aspectofthemonkey",
      "ranks": [
        19549,
        19550,
        19551
      ],
      "requires": [],
      "specId": 361
    },
    "1382": {
      "id": 1382,
      "row": 0,
      "col": 1,
      "icon": "spell_nature_ravenform",
      "ranks": [
        19552,
        19553,
        19554,
        19555,
        19556
      ],
      "requires": [],
      "specId": 361
    },
    "1384": {
      "id": 1384,
      "row": 2,
      "col": 0,
      "icon": "ability_mount_jungletiger",
      "ranks": [
        19559,
        19560
      ],
      "requires": [],
      "specId": 361
    },
    "1385": {
      "id": 1385,
      "row": 3,
      "col": 1,
      "icon": "ability_hunter_mendpet",
      "ranks": [
        19572,
        19573
      ],
      "requires": [],
      "specId": 361
    },
    "1386": {
      "id": 1386,
      "row": 6,
      "col": 1,
      "icon": "ability_druid_ferociousbite",
      "ranks": [
        19574
      ],
      "requires": [
        {
          "id": 1387,
          "qty": 1
        }
      ],
      "specId": 361
    },
    "1387": {
      "id": 1387,
      "row": 4,
      "col": 1,
      "icon": "ability_devour",
      "ranks": [
        19577
      ],
      "requires": [],
      "specId": 361
    },
    "1388": {
      "id": 1388,
      "row": 4,
      "col": 0,
      "icon": "classic_ability_druid_demoralizingroar",
      "ranks": [
        19578,
        20895
      ],
      "requires": [],
      "specId": 361
    },
    "1389": {
      "id": 1389,
      "row": 0,
      "col": 2,
      "icon": "spell_nature_reincarnation",
      "ranks": [
        19583,
        19584,
        19585,
        19586,
        19587
      ],
      "requires": [],
      "specId": 361
    },
    "1390": {
      "id": 1390,
      "row": 4,
      "col": 3,
      "icon": "spell_nature_abolishmagic",
      "ranks": [
        19590,
        19592
      ],
      "requires": [],
      "specId": 361
    },
    "1393": {
      "id": 1393,
      "row": 3,
      "col": 2,
      "icon": "inv_misc_monsterclaw_04",
      "ranks": [
        19598,
        19599,
        19600,
        19601,
        19602
      ],
      "requires": [],
      "specId": 361
    },
    "1395": {
      "id": 1395,
      "row": 1,
      "col": 2,
      "icon": "inv_misc_pelt_bear_03",
      "ranks": [
        19609,
        19610,
        19612
      ],
      "requires": [],
      "specId": 361
    },
    "1396": {
      "id": 1396,
      "row": 2,
      "col": 2,
      "icon": "ability_bullrush",
      "ranks": [
        19616,
        19617,
        19618,
        19619,
        19620
      ],
      "requires": [],
      "specId": 361
    },
    "1397": {
      "id": 1397,
      "row": 5,
      "col": 2,
      "icon": "inv_misc_monsterclaw_03",
      "ranks": [
        19621,
        19622,
        19623,
        19624,
        19625
      ],
      "requires": [
        {
          "id": 1393,
          "qty": 5
        }
      ],
      "specId": 361
    },
    "1624": {
      "id": 1624,
      "row": 1,
      "col": 0,
      "icon": "ability_hunter_silenthunter",
      "ranks": [
        35029,
        35030
      ],
      "requires": [],
      "specId": 361
    },
    "1625": {
      "id": 1625,
      "row": 1,
      "col": 3,
      "icon": "ability_hunter_beastsoothe",
      "ranks": [
        24443,
        19575
      ],
      "requires": [],
      "specId": 361
    },
    "1799": {
      "id": 1799,
      "row": 5,
      "col": 0,
      "icon": "ability_hunter_animalhandler",
      "ranks": [
        34453,
        34454
      ],
      "requires": [],
      "specId": 361
    },
    "1800": {
      "id": 1800,
      "row": 6,
      "col": 0,
      "icon": "ability_hunter_ferociousinspiration",
      "ranks": [
        34455,
        34459,
        34460
      ],
      "requires": [],
      "specId": 361
    },
    "1801": {
      "id": 1801,
      "row": 6,
      "col": 2,
      "icon": "ability_hunter_catlikereflexes",
      "ranks": [
        34462,
        34464,
        34465
      ],
      "requires": [],
      "specId": 361
    },
    "1802": {
      "id": 1802,
      "row": 7,
      "col": 2,
      "icon": "ability_hunter_serpentswiftness",
      "ranks": [
        34466,
        34467,
        34468,
        34469,
        34470
      ],
      "requires": [],
      "specId": 361
    },
    "1803": {
      "id": 1803,
      "row": 8,
      "col": 1,
      "icon": "ability_hunter_beastwithin",
      "ranks": [
        34692
      ],
      "requires": [
        {
          "id": 1386,
          "qty": 1
        }
      ],
      "specId": 361
    },
    "2136": {
      "id": 2136,
      "row": 7,
      "col": 0,
      "icon": "ability_hunter_invigeration",
      "ranks": [
        53252,
        53253
      ],
      "requires": [
        {
          "id": 1800,
          "qty": 3
        }
      ],
      "specId": 361
    },
    "2137": {
      "id": 2137,
      "row": 8,
      "col": 2,
      "icon": "ability_hunter_cobrastrikes",
      "ranks": [
        53256,
        53259,
        53260
      ],
      "requires": [
        {
          "id": 1802,
          "qty": 5
        }
      ],
      "specId": 361
    },
    "2138": {
      "id": 2138,
      "row": 2,
      "col": 1,
      "icon": "ability_hunter_aspectmastery",
      "ranks": [
        53265
      ],
      "requires": [],
      "specId": 361
    },
    "2139": {
      "id": 2139,
      "row": 10,
      "col": 1,
      "icon": "ability_hunter_beastmastery",
      "ranks": [
        53270
      ],
      "requires": [],
      "specId": 361
    },
    "2140": {
      "id": 2140,
      "row": 8,
      "col": 0,
      "icon": "ability_hunter_longevity",
      "ranks": [
        53262,
        53263,
        53264
      ],
      "requires": [],
      "specId": 361
    },
    "2227": {
      "id": 2227,
      "row": 9,
      "col": 1,
      "icon": "ability_hunter_separationanxiety",
      "ranks": [
        56314,
        56315,
        56316,
        56317,
        56318
      ],
      "requires": [],
      "specId": 361
    }
  },
  "362": {
    "1303": {
      "id": 1303,
      "row": 5,
      "col": 0,
      "icon": "spell_nature_invisibilty",
      "ranks": [
        19168,
        19180,
        19181,
        24296,
        24297
      ],
      "requires": [],
      "specId": 362
    },
    "1304": {
      "id": 1304,
      "row": 1,
      "col": 1,
      "icon": "spell_nature_stranglevines",
      "ranks": [
        19184,
        19387,
        19388
      ],
      "requires": [],
      "specId": 362
    },
    "1305": {
      "id": 1305,
      "row": 1,
      "col": 2,
      "icon": "ability_ensnare",
      "ranks": [
        19376,
        63457,
        63458
      ],
      "requires": [],
      "specId": 362
    },
    "1306": {
      "id": 1306,
      "row": 3,
      "col": 3,
      "icon": "ability_hunter_lockandload",
      "ranks": [
        56342,
        56343,
        56344
      ],
      "requires": [],
      "specId": 362
    },
    "1309": {
      "id": 1309,
      "row": 2,
      "col": 3,
      "icon": "ability_rogue_feigndeath",
      "ranks": [
        19286,
        19287
      ],
      "requires": [],
      "specId": 362
    },
    "1310": {
      "id": 1310,
      "row": 1,
      "col": 0,
      "icon": "ability_kick",
      "ranks": [
        19290,
        19294,
        24283
      ],
      "requires": [],
      "specId": 362
    },
    "1311": {
      "id": 1311,
      "row": 2,
      "col": 2,
      "icon": "ability_parry",
      "ranks": [
        19295,
        19297,
        19298
      ],
      "requires": [],
      "specId": 362
    },
    "1312": {
      "id": 1312,
      "row": 4,
      "col": 2,
      "icon": "ability_warrior_challange",
      "ranks": [
        19306
      ],
      "requires": [
        {
          "id": 1311,
          "qty": 3
        }
      ],
      "specId": 362
    },
    "1321": {
      "id": 1321,
      "row": 4,
      "col": 1,
      "icon": "spell_holy_blessingofstamina",
      "ranks": [
        19370,
        19371,
        19373
      ],
      "requires": [],
      "specId": 362
    },
    "1322": {
      "id": 1322,
      "row": 8,
      "col": 1,
      "icon": "spell_shadow_painspike",
      "ranks": [
        3674
      ],
      "requires": [],
      "specId": 362
    },
    "1325": {
      "id": 1325,
      "row": 6,
      "col": 1,
      "icon": "inv_spear_02",
      "ranks": [
        19386
      ],
      "requires": [
        {
          "id": 1321,
          "qty": 3
        }
      ],
      "specId": 362
    },
    "1621": {
      "id": 1621,
      "row": 0,
      "col": 2,
      "icon": "ability_racial_bloodrage",
      "ranks": [
        19159,
        19160
      ],
      "requires": [],
      "specId": 362
    },
    "1622": {
      "id": 1622,
      "row": 2,
      "col": 0,
      "icon": "spell_shadow_twilight",
      "ranks": [
        19255,
        19256,
        19257,
        19258,
        19259
      ],
      "requires": [],
      "specId": 362
    },
    "1623": {
      "id": 1623,
      "row": 0,
      "col": 0,
      "icon": "ability_hunter_improvedtracking",
      "ranks": [
        52783,
        52785,
        52786,
        52787,
        52788
      ],
      "requires": [],
      "specId": 362
    },
    "1809": {
      "id": 1809,
      "row": 5,
      "col": 2,
      "icon": "ability_hunter_resourcefulness",
      "ranks": [
        34491,
        34492,
        34493
      ],
      "requires": [],
      "specId": 362
    },
    "1810": {
      "id": 1810,
      "row": 1,
      "col": 3,
      "icon": "ability_hunter_survivalinstincts",
      "ranks": [
        34494,
        34496
      ],
      "requires": [],
      "specId": 362
    },
    "1811": {
      "id": 1811,
      "row": 6,
      "col": 2,
      "icon": "ability_hunter_thrillofthehunt",
      "ranks": [
        34497,
        34498,
        34499
      ],
      "requires": [],
      "specId": 362
    },
    "1812": {
      "id": 1812,
      "row": 6,
      "col": 0,
      "icon": "ability_rogue_findweakness",
      "ranks": [
        34500,
        34502,
        34503
      ],
      "requires": [
        {
          "id": 1303,
          "qty": 5
        }
      ],
      "specId": 362
    },
    "1813": {
      "id": 1813,
      "row": 7,
      "col": 0,
      "icon": "ability_hunter_mastertactitian",
      "ranks": [
        34506,
        34507,
        34508,
        34838,
        34839
      ],
      "requires": [],
      "specId": 362
    },
    "1814": {
      "id": 1814,
      "row": 2,
      "col": 1,
      "icon": "ability_golemstormbolt",
      "ranks": [
        19503
      ],
      "requires": [],
      "specId": 362
    },
    "1820": {
      "id": 1820,
      "row": 0,
      "col": 1,
      "icon": "ability_townwatch",
      "ranks": [
        19498,
        19499,
        19500
      ],
      "requires": [],
      "specId": 362
    },
    "2141": {
      "id": 2141,
      "row": 7,
      "col": 1,
      "icon": "ability_hunter_potentvenom",
      "ranks": [
        53295,
        53296,
        53297
      ],
      "requires": [
        {
          "id": 1325,
          "qty": 1
        }
      ],
      "specId": 362
    },
    "2142": {
      "id": 2142,
      "row": 8,
      "col": 0,
      "icon": "ability_hunter_pointofnoescape",
      "ranks": [
        53298,
        53299
      ],
      "requires": [],
      "specId": 362
    },
    "2143": {
      "id": 2143,
      "row": 8,
      "col": 3,
      "icon": "ability_hunter_longshots",
      "ranks": [
        53302,
        53303,
        53304
      ],
      "requires": [],
      "specId": 362
    },
    "2144": {
      "id": 2144,
      "row": 9,
      "col": 2,
      "icon": "ability_hunter_huntingparty",
      "ranks": [
        53290,
        53291,
        53292
      ],
      "requires": [
        {
          "id": 1811,
          "qty": 3
        }
      ],
      "specId": 362
    },
    "2145": {
      "id": 2145,
      "row": 10,
      "col": 1,
      "icon": "ability_hunter_explosiveshot",
      "ranks": [
        53301
      ],
      "requires": [
        {
          "id": 1322,
          "qty": 1
        }
      ],
      "specId": 362
    },
    "2228": {
      "id": 2228,
      "row": 4,
      "col": 0,
      "icon": "ability_hunter_huntervswild",
      "ranks": [
        56339,
        56340,
        56341
      ],
      "requires": [
        {
          "id": 1622,
          "qty": 5
        }
      ],
      "specId": 362
    },
    "2229": {
      "id": 2229,
      "row": 3,
      "col": 1,
      "icon": "inv_misc_bomb_05",
      "ranks": [
        56333,
        56336,
        56337
      ],
      "requires": [],
      "specId": 362
    }
  },
  "363": {
    "1341": {
      "id": 1341,
      "row": 0,
      "col": 0,
      "icon": "spell_frost_stun",
      "ranks": [
        19407,
        19412
      ],
      "requires": [],
      "specId": 363
    },
    "1342": {
      "id": 1342,
      "row": 3,
      "col": 2,
      "icon": "spell_frost_wizardmark",
      "ranks": [
        19416,
        19417,
        19418,
        19419,
        19420
      ],
      "requires": [],
      "specId": 363
    },
    "1343": {
      "id": 1343,
      "row": 1,
      "col": 1,
      "icon": "ability_hunter_snipershot",
      "ranks": [
        19421,
        19422,
        19423
      ],
      "requires": [],
      "specId": 363
    },
    "1344": {
      "id": 1344,
      "row": 0,
      "col": 2,
      "icon": "ability_searingarrow",
      "ranks": [
        19426,
        19427,
        19429,
        19430,
        19431
      ],
      "requires": [],
      "specId": 363
    },
    "1345": {
      "id": 1345,
      "row": 2,
      "col": 2,
      "icon": "inv_spear_07",
      "ranks": [
        19434
      ],
      "requires": [
        {
          "id": 1349,
          "qty": 5
        }
      ],
      "specId": 363
    },
    "1346": {
      "id": 1346,
      "row": 2,
      "col": 1,
      "icon": "ability_impalingbolt",
      "ranks": [
        19454,
        19455,
        19456
      ],
      "requires": [],
      "specId": 363
    },
    "1347": {
      "id": 1347,
      "row": 4,
      "col": 2,
      "icon": "ability_upgrademoonglaive",
      "ranks": [
        19461,
        19462,
        24691
      ],
      "requires": [],
      "specId": 363
    },
    "1348": {
      "id": 1348,
      "row": 3,
      "col": 1,
      "icon": "ability_hunter_quickshot",
      "ranks": [
        19464,
        19465,
        19466
      ],
      "requires": [],
      "specId": 363
    },
    "1349": {
      "id": 1349,
      "row": 1,
      "col": 2,
      "icon": "ability_piercedamage",
      "ranks": [
        19485,
        19487,
        19488,
        19489,
        19490
      ],
      "requires": [],
      "specId": 363
    },
    "1351": {
      "id": 1351,
      "row": 4,
      "col": 0,
      "icon": "spell_arcane_starfire",
      "ranks": [
        35100,
        35102
      ],
      "requires": [],
      "specId": 363
    },
    "1353": {
      "id": 1353,
      "row": 4,
      "col": 1,
      "icon": "ability_hunter_readiness",
      "ranks": [
        23989
      ],
      "requires": [],
      "specId": 363
    },
    "1361": {
      "id": 1361,
      "row": 6,
      "col": 1,
      "icon": "ability_trueshot",
      "ranks": [
        19506
      ],
      "requires": [
        {
          "id": 1353,
          "qty": 1
        }
      ],
      "specId": 363
    },
    "1362": {
      "id": 1362,
      "row": 5,
      "col": 3,
      "icon": "inv_weapon_rifle_06",
      "ranks": [
        19507,
        19508,
        19509
      ],
      "requires": [],
      "specId": 363
    },
    "1804": {
      "id": 1804,
      "row": 5,
      "col": 0,
      "icon": "ability_hunter_combatexperience",
      "ranks": [
        34475,
        34476
      ],
      "requires": [],
      "specId": 363
    },
    "1806": {
      "id": 1806,
      "row": 1,
      "col": 0,
      "icon": "ability_hunter_zenarchery",
      "ranks": [
        34482,
        34483,
        34484
      ],
      "requires": [],
      "specId": 363
    },
    "1807": {
      "id": 1807,
      "row": 7,
      "col": 1,
      "icon": "ability_hunter_mastermarksman",
      "ranks": [
        34485,
        34486,
        34487,
        34488,
        34489
      ],
      "requires": [],
      "specId": 363
    },
    "1808": {
      "id": 1808,
      "row": 8,
      "col": 1,
      "icon": "ability_theblackarrow",
      "ranks": [
        34490
      ],
      "requires": [
        {
          "id": 1807,
          "qty": 5
        }
      ],
      "specId": 363
    },
    "1818": {
      "id": 1818,
      "row": 2,
      "col": 0,
      "icon": "ability_hunter_goforthethroat",
      "ranks": [
        34950,
        34954
      ],
      "requires": [],
      "specId": 363
    },
    "1819": {
      "id": 1819,
      "row": 2,
      "col": 3,
      "icon": "ability_hunter_rapidkilling",
      "ranks": [
        34948,
        34949
      ],
      "requires": [],
      "specId": 363
    },
    "1821": {
      "id": 1821,
      "row": 6,
      "col": 2,
      "icon": "ability_upgrademoonglaive",
      "ranks": [
        35104,
        35110,
        35111
      ],
      "requires": [
        {
          "id": 1347,
          "qty": 3
        }
      ],
      "specId": 363
    },
    "2130": {
      "id": 2130,
      "row": 6,
      "col": 0,
      "icon": "ability_hunter_piercingshots",
      "ranks": [
        53234,
        53237,
        53238
      ],
      "requires": [],
      "specId": 363
    },
    "2131": {
      "id": 2131,
      "row": 7,
      "col": 2,
      "icon": "ability_hunter_rapidregeneration",
      "ranks": [
        53228,
        53232
      ],
      "requires": [],
      "specId": 363
    },
    "2132": {
      "id": 2132,
      "row": 8,
      "col": 0,
      "icon": "ability_hunter_wildquiver",
      "ranks": [
        53215,
        53216,
        53217
      ],
      "requires": [],
      "specId": 363
    },
    "2133": {
      "id": 2133,
      "row": 8,
      "col": 2,
      "icon": "ability_hunter_improvedsteadyshot",
      "ranks": [
        53221,
        53222,
        53224
      ],
      "requires": [],
      "specId": 363
    },
    "2134": {
      "id": 2134,
      "row": 9,
      "col": 1,
      "icon": "ability_hunter_assassinate",
      "ranks": [
        53241,
        53243,
        53244,
        53245,
        53246
      ],
      "requires": [],
      "specId": 363
    },
    "2135": {
      "id": 2135,
      "row": 10,
      "col": 1,
      "icon": "ability_hunter_chimerashot2",
      "ranks": [
        53209
      ],
      "requires": [],
      "specId": 363
    },
    "2197": {
      "id": 2197,
      "row": 0,
      "col": 1,
      "icon": "ability_hunter_focusedaim",
      "ranks": [
        53620,
        53621,
        53622
      ],
      "requires": [],
      "specId": 363
    }
  },
  "381": {
    "1401": {
      "id": 1401,
      "row": 1,
      "col": 2,
      "icon": "spell_holy_fistofjustice",
      "ranks": [
        20042,
        20045
      ],
      "requires": [],
      "specId": 381
    },
    "1402": {
      "id": 1402,
      "row": 5,
      "col": 1,
      "icon": "ability_racial_avatar",
      "ranks": [
        20049,
        20056,
        20057
      ],
      "requires": [
        {
          "id": 1411,
          "qty": 5
        }
      ],
      "specId": 381
    },
    "1403": {
      "id": 1403,
      "row": 0,
      "col": 1,
      "icon": "ability_parry",
      "ranks": [
        20060,
        20061,
        20062,
        20063,
        20064
      ],
      "requires": [],
      "specId": 381
    },
    "1407": {
      "id": 1407,
      "row": 0,
      "col": 2,
      "icon": "spell_frost_windwalkon",
      "ranks": [
        20101,
        20102,
        20103,
        20104,
        20105
      ],
      "requires": [],
      "specId": 381
    },
    "1410": {
      "id": 1410,
      "row": 4,
      "col": 0,
      "icon": "inv_hammer_04",
      "ranks": [
        20111,
        20112,
        20113
      ],
      "requires": [],
      "specId": 381
    },
    "1411": {
      "id": 1411,
      "row": 2,
      "col": 1,
      "icon": "spell_holy_retributionaura",
      "ranks": [
        20117,
        20118,
        20119,
        20120,
        20121
      ],
      "requires": [],
      "specId": 381
    },
    "1441": {
      "id": 1441,
      "row": 6,
      "col": 1,
      "icon": "spell_holy_prayerofhealing",
      "ranks": [
        20066
      ],
      "requires": [],
      "specId": 381
    },
    "1464": {
      "id": 1464,
      "row": 1,
      "col": 1,
      "icon": "spell_holy_holysmite",
      "ranks": [
        20335,
        20336,
        20337
      ],
      "requires": [],
      "specId": 381
    },
    "1481": {
      "id": 1481,
      "row": 2,
      "col": 2,
      "icon": "ability_warrior_innerrage",
      "ranks": [
        20375
      ],
      "requires": [],
      "specId": 381
    },
    "1631": {
      "id": 1631,
      "row": 1,
      "col": 0,
      "icon": "spell_holy_righteousfury",
      "ranks": [
        25956,
        25957
      ],
      "requires": [],
      "specId": 381
    },
    "1632": {
      "id": 1632,
      "row": 3,
      "col": 0,
      "icon": "spell_holy_eyeforaneye",
      "ranks": [
        9799,
        25988
      ],
      "requires": [],
      "specId": 381
    },
    "1633": {
      "id": 1633,
      "row": 2,
      "col": 0,
      "icon": "spell_holy_vindication",
      "ranks": [
        9452,
        26016
      ],
      "requires": [],
      "specId": 381
    },
    "1634": {
      "id": 1634,
      "row": 2,
      "col": 3,
      "icon": "spell_holy_persuitofjustice",
      "ranks": [
        26022,
        26023
      ],
      "requires": [],
      "specId": 381
    },
    "1755": {
      "id": 1755,
      "row": 3,
      "col": 3,
      "icon": "spell_holy_crusade",
      "ranks": [
        31866,
        31867,
        31868
      ],
      "requires": [],
      "specId": 381
    },
    "1756": {
      "id": 1756,
      "row": 4,
      "col": 2,
      "icon": "spell_holy_mindvision",
      "ranks": [
        31869
      ],
      "requires": [],
      "specId": 381
    },
    "1757": {
      "id": 1757,
      "row": 5,
      "col": 2,
      "icon": "spell_holy_divinepurpose",
      "ranks": [
        31871,
        31872
      ],
      "requires": [],
      "specId": 381
    },
    "1758": {
      "id": 1758,
      "row": 6,
      "col": 2,
      "icon": "ability_paladin_judgementofthewise",
      "ranks": [
        31876,
        31877,
        31878
      ],
      "requires": [],
      "specId": 381
    },
    "1759": {
      "id": 1759,
      "row": 7,
      "col": 1,
      "icon": "spell_holy_fanaticism",
      "ranks": [
        31879,
        31880,
        31881
      ],
      "requires": [
        {
          "id": 1441,
          "qty": 1
        }
      ],
      "specId": 381
    },
    "1761": {
      "id": 1761,
      "row": 3,
      "col": 2,
      "icon": "spell_holy_holysmite",
      "ranks": [
        32043,
        35396,
        35397
      ],
      "requires": [],
      "specId": 381
    },
    "1823": {
      "id": 1823,
      "row": 8,
      "col": 1,
      "icon": "spell_holy_crusaderstrike",
      "ranks": [
        35395
      ],
      "requires": [],
      "specId": 381
    },
    "2147": {
      "id": 2147,
      "row": 7,
      "col": 2,
      "icon": "ability_paladin_sanctifiedwrath",
      "ranks": [
        53375,
        53376
      ],
      "requires": [],
      "specId": 381
    },
    "2148": {
      "id": 2148,
      "row": 8,
      "col": 0,
      "icon": "ability_paladin_swiftretribution",
      "ranks": [
        53379,
        53484,
        53648
      ],
      "requires": [],
      "specId": 381
    },
    "2149": {
      "id": 2149,
      "row": 9,
      "col": 1,
      "icon": "ability_paladin_righteousvengeance",
      "ranks": [
        53380,
        53381,
        53382
      ],
      "requires": [],
      "specId": 381
    },
    "2150": {
      "id": 2150,
      "row": 10,
      "col": 1,
      "icon": "ability_paladin_divinestorm",
      "ranks": [
        53385
      ],
      "requires": [],
      "specId": 381
    },
    "2176": {
      "id": 2176,
      "row": 6,
      "col": 0,
      "icon": "ability_paladin_artofwar",
      "ranks": [
        53486,
        53488
      ],
      "requires": [],
      "specId": 381
    },
    "2179": {
      "id": 2179,
      "row": 8,
      "col": 2,
      "icon": "ability_paladin_sheathoflight",
      "ranks": [
        53501,
        53502,
        53503
      ],
      "requires": [],
      "specId": 381
    }
  },
  "382": {
    "1432": {
      "id": 1432,
      "row": 0,
      "col": 1,
      "icon": "spell_arcane_blink",
      "ranks": [
        20205,
        20206,
        20207,
        20209,
        20208
      ],
      "requires": [],
      "specId": 382
    },
    "1433": {
      "id": 1433,
      "row": 4,
      "col": 1,
      "icon": "spell_holy_heal",
      "ranks": [
        20216
      ],
      "requires": [
        {
          "id": 1461,
          "qty": 5
        }
      ],
      "specId": 382
    },
    "1435": {
      "id": 1435,
      "row": 2,
      "col": 0,
      "icon": "spell_holy_auramastery",
      "ranks": [
        31821
      ],
      "requires": [],
      "specId": 382
    },
    "1443": {
      "id": 1443,
      "row": 2,
      "col": 2,
      "icon": "spell_holy_layonhands",
      "ranks": [
        20234,
        20235
      ],
      "requires": [],
      "specId": 382
    },
    "1444": {
      "id": 1444,
      "row": 1,
      "col": 0,
      "icon": "spell_holy_holybolt",
      "ranks": [
        20237,
        20238,
        20239
      ],
      "requires": [],
      "specId": 382
    },
    "1446": {
      "id": 1446,
      "row": 3,
      "col": 2,
      "icon": "spell_holy_sealofwisdom",
      "ranks": [
        20244,
        20245
      ],
      "requires": [],
      "specId": 382
    },
    "1449": {
      "id": 1449,
      "row": 1,
      "col": 1,
      "icon": "spell_nature_sleep",
      "ranks": [
        20257,
        20258,
        20259,
        20260,
        20261
      ],
      "requires": [],
      "specId": 382
    },
    "1450": {
      "id": 1450,
      "row": 3,
      "col": 0,
      "icon": "spell_holy_mindsooth",
      "ranks": [
        20254,
        20255,
        20256
      ],
      "requires": [],
      "specId": 382
    },
    "1461": {
      "id": 1461,
      "row": 2,
      "col": 1,
      "icon": "spell_holy_greaterheal",
      "ranks": [
        20210,
        20212,
        20213,
        20214,
        20215
      ],
      "requires": [],
      "specId": 382
    },
    "1463": {
      "id": 1463,
      "row": 0,
      "col": 2,
      "icon": "ability_thunderbolt",
      "ranks": [
        20224,
        20225,
        20330,
        20331,
        20332
      ],
      "requires": [],
      "specId": 382
    },
    "1465": {
      "id": 1465,
      "row": 4,
      "col": 2,
      "icon": "spell_holy_healingaura",
      "ranks": [
        20359,
        20360,
        20361
      ],
      "requires": [],
      "specId": 382
    },
    "1502": {
      "id": 1502,
      "row": 6,
      "col": 1,
      "icon": "spell_holy_searinglight",
      "ranks": [
        20473
      ],
      "requires": [
        {
          "id": 1433,
          "qty": 1
        }
      ],
      "specId": 382
    },
    "1627": {
      "id": 1627,
      "row": 5,
      "col": 2,
      "icon": "spell_holy_power",
      "ranks": [
        5923,
        5924,
        5925,
        5926,
        25829
      ],
      "requires": [],
      "specId": 382
    },
    "1628": {
      "id": 1628,
      "row": 1,
      "col": 2,
      "icon": "spell_holy_unyieldingfaith",
      "ranks": [
        9453,
        25836
      ],
      "requires": [],
      "specId": 382
    },
    "1742": {
      "id": 1742,
      "row": 4,
      "col": 0,
      "icon": "spell_holy_pureofheart",
      "ranks": [
        31822,
        31823
      ],
      "requires": [],
      "specId": 382
    },
    "1743": {
      "id": 1743,
      "row": 5,
      "col": 0,
      "icon": "spell_holy_purifyingpower",
      "ranks": [
        31825,
        31826
      ],
      "requires": [],
      "specId": 382
    },
    "1744": {
      "id": 1744,
      "row": 6,
      "col": 2,
      "icon": "spell_holy_blessedlife",
      "ranks": [
        31828,
        31829,
        31830
      ],
      "requires": [],
      "specId": 382
    },
    "1745": {
      "id": 1745,
      "row": 6,
      "col": 0,
      "icon": "spell_holy_lightsgrace",
      "ranks": [
        31833,
        31835,
        31836
      ],
      "requires": [],
      "specId": 382
    },
    "1746": {
      "id": 1746,
      "row": 7,
      "col": 2,
      "icon": "spell_holy_holyguidance",
      "ranks": [
        31837,
        31838,
        31839,
        31840,
        31841
      ],
      "requires": [],
      "specId": 382
    },
    "1747": {
      "id": 1747,
      "row": 8,
      "col": 0,
      "icon": "spell_holy_divineillumination",
      "ranks": [
        31842
      ],
      "requires": [],
      "specId": 382
    },
    "2190": {
      "id": 2190,
      "row": 7,
      "col": 0,
      "icon": "ability_paladin_sacredcleansing",
      "ranks": [
        53551,
        53552,
        53553
      ],
      "requires": [],
      "specId": 382
    },
    "2191": {
      "id": 2191,
      "row": 9,
      "col": 2,
      "icon": "ability_paladin_enlightenedjudgements",
      "ranks": [
        53556,
        53557
      ],
      "requires": [],
      "specId": 382
    },
    "2192": {
      "id": 2192,
      "row": 10,
      "col": 1,
      "icon": "ability_paladin_beaconoflight",
      "ranks": [
        53563
      ],
      "requires": [],
      "specId": 382
    },
    "2193": {
      "id": 2193,
      "row": 9,
      "col": 1,
      "icon": "ability_paladin_infusionoflight",
      "ranks": [
        53569,
        53576
      ],
      "requires": [
        {
          "id": 1502,
          "qty": 1
        }
      ],
      "specId": 382
    },
    "2198": {
      "id": 2198,
      "row": 3,
      "col": 3,
      "icon": "ability_paladin_blessedhands",
      "ranks": [
        53660,
        53661
      ],
      "requires": [],
      "specId": 382
    },
    "2199": {
      "id": 2199,
      "row": 8,
      "col": 2,
      "icon": "ability_paladin_judgementofthepure",
      "ranks": [
        53671,
        53673,
        54151,
        54154,
        54155
      ],
      "requires": [],
      "specId": 382
    }
  },
  "383": {
    "1421": {
      "id": 1421,
      "row": 7,
      "col": 0,
      "icon": "ability_defend",
      "ranks": [
        20127,
        20130,
        20135
      ],
      "requires": [],
      "specId": 383
    },
    "1422": {
      "id": 1422,
      "row": 3,
      "col": 2,
      "icon": "spell_holy_devotionaura",
      "ranks": [
        20138,
        20139,
        20140
      ],
      "requires": [],
      "specId": 383
    },
    "1423": {
      "id": 1423,
      "row": 2,
      "col": 2,
      "icon": "spell_holy_devotion",
      "ranks": [
        20143,
        20144,
        20145,
        20146,
        20147
      ],
      "requires": [],
      "specId": 383
    },
    "1425": {
      "id": 1425,
      "row": 1,
      "col": 1,
      "icon": "spell_holy_sealofprotection",
      "ranks": [
        20174,
        20175
      ],
      "requires": [],
      "specId": 383
    },
    "1426": {
      "id": 1426,
      "row": 4,
      "col": 2,
      "icon": "spell_holy_blessingofstrength",
      "ranks": [
        20177,
        20179,
        20181,
        20180,
        20182
      ],
      "requires": [],
      "specId": 383
    },
    "1429": {
      "id": 1429,
      "row": 5,
      "col": 2,
      "icon": "inv_sword_20",
      "ranks": [
        20196,
        20197,
        20198
      ],
      "requires": [],
      "specId": 383
    },
    "1430": {
      "id": 1430,
      "row": 6,
      "col": 1,
      "icon": "classic_spell_holy_blessingofprotection",
      "ranks": [
        20925
      ],
      "requires": [
        {
          "id": 1431,
          "qty": 1
        }
      ],
      "specId": 383
    },
    "1431": {
      "id": 1431,
      "row": 4,
      "col": 1,
      "icon": "spell_nature_lightningshield",
      "ranks": [
        20911
      ],
      "requires": [],
      "specId": 383
    },
    "1442": {
      "id": 1442,
      "row": 0,
      "col": 1,
      "icon": "spell_holy_blindingheal",
      "ranks": [
        63646,
        63647,
        63648,
        63649,
        63650
      ],
      "requires": [],
      "specId": 383
    },
    "1501": {
      "id": 1501,
      "row": 2,
      "col": 1,
      "icon": "spell_holy_sealoffury",
      "ranks": [
        20468,
        20469,
        20470
      ],
      "requires": [],
      "specId": 383
    },
    "1521": {
      "id": 1521,
      "row": 3,
      "col": 1,
      "icon": "spell_holy_sealofmight",
      "ranks": [
        20487,
        20488
      ],
      "requires": [],
      "specId": 383
    },
    "1629": {
      "id": 1629,
      "row": 1,
      "col": 2,
      "icon": "spell_magic_lesserinvisibilty",
      "ranks": [
        20096,
        20097,
        20098,
        20099,
        20100
      ],
      "requires": [],
      "specId": 383
    },
    "1748": {
      "id": 1748,
      "row": 1,
      "col": 0,
      "icon": "spell_holy_stoicism",
      "ranks": [
        31844,
        31845,
        53519
      ],
      "requires": [],
      "specId": 383
    },
    "1750": {
      "id": 1750,
      "row": 5,
      "col": 0,
      "icon": "spell_holy_divineintervention",
      "ranks": [
        31848,
        31849
      ],
      "requires": [],
      "specId": 383
    },
    "1751": {
      "id": 1751,
      "row": 6,
      "col": 2,
      "icon": "spell_holy_ardentdefender",
      "ranks": [
        31850,
        31851,
        31852
      ],
      "requires": [],
      "specId": 383
    },
    "1753": {
      "id": 1753,
      "row": 7,
      "col": 2,
      "icon": "spell_holy_weaponmastery",
      "ranks": [
        31858,
        31859,
        31860
      ],
      "requires": [],
      "specId": 383
    },
    "1754": {
      "id": 1754,
      "row": 8,
      "col": 1,
      "icon": "spell_holy_avengersshield",
      "ranks": [
        31935
      ],
      "requires": [
        {
          "id": 1430,
          "qty": 1
        }
      ],
      "specId": 383
    },
    "2185": {
      "id": 2185,
      "row": 0,
      "col": 2,
      "icon": "ability_golemthunderclap",
      "ranks": [
        20262,
        20263,
        20264,
        20265,
        20266
      ],
      "requires": [],
      "specId": 383
    },
    "2194": {
      "id": 2194,
      "row": 8,
      "col": 2,
      "icon": "ability_paladin_gaurdedbythelight",
      "ranks": [
        53583,
        53585
      ],
      "requires": [],
      "specId": 383
    },
    "2195": {
      "id": 2195,
      "row": 8,
      "col": 0,
      "icon": "ability_paladin_touchedbylight",
      "ranks": [
        53590,
        53591,
        53592
      ],
      "requires": [],
      "specId": 383
    },
    "2196": {
      "id": 2196,
      "row": 10,
      "col": 1,
      "icon": "ability_paladin_hammeroftherighteous",
      "ranks": [
        53595
      ],
      "requires": [],
      "specId": 383
    },
    "2200": {
      "id": 2200,
      "row": 9,
      "col": 2,
      "icon": "ability_paladin_judgementsofthejust",
      "ranks": [
        53695,
        53696
      ],
      "requires": [],
      "specId": 383
    },
    "2204": {
      "id": 2204,
      "row": 9,
      "col": 1,
      "icon": "ability_paladin_shieldofthetemplar",
      "ranks": [
        53709,
        53710,
        53711
      ],
      "requires": [
        {
          "id": 1754,
          "qty": 1
        }
      ],
      "specId": 383
    },
    "2280": {
      "id": 2280,
      "row": 2,
      "col": 0,
      "icon": "spell_holy_powerwordbarrier",
      "ranks": [
        64205
      ],
      "requires": [],
      "specId": 383
    },
    "2281": {
      "id": 2281,
      "row": 3,
      "col": 0,
      "icon": "spell_holy_powerwordbarrier",
      "ranks": [
        53527,
        53530
      ],
      "requires": [
        {
          "id": 2280,
          "qty": 1
        }
      ],
      "specId": 383
    },
    "2282": {
      "id": 2282,
      "row": 6,
      "col": 0,
      "icon": "spell_holy_revivechampion",
      "ranks": [
        31785,
        33776
      ],
      "requires": [],
      "specId": 383
    }
  },
  "398": {
    "1936": {
      "id": 1936,
      "row": 6,
      "col": 2,
      "icon": "spell_deathknight_bloodpresence",
      "ranks": [
        50365,
        50371
      ],
      "requires": [],
      "specId": 398
    },
    "1938": {
      "id": 1938,
      "row": 1,
      "col": 0,
      "icon": "inv_shoulder_36",
      "ranks": [
        48978,
        49390,
        49391,
        49392,
        49393
      ],
      "requires": [],
      "specId": 398
    },
    "1939": {
      "id": 1939,
      "row": 0,
      "col": 0,
      "icon": "inv_axe_68",
      "ranks": [
        48979,
        49483
      ],
      "requires": [],
      "specId": 398
    },
    "1941": {
      "id": 1941,
      "row": 2,
      "col": 0,
      "icon": "spell_deathknight_runetap",
      "ranks": [
        48982
      ],
      "requires": [],
      "specId": 398
    },
    "1942": {
      "id": 1942,
      "row": 3,
      "col": 0,
      "icon": "spell_deathknight_runetap",
      "ranks": [
        48985,
        49488,
        49489
      ],
      "requires": [
        {
          "id": 1941,
          "qty": 1
        }
      ],
      "specId": 398
    },
    "1943": {
      "id": 1943,
      "row": 2,
      "col": 1,
      "icon": "spell_deathknight_darkconviction",
      "ranks": [
        48987,
        49477,
        49478,
        49479,
        49480
      ],
      "requires": [],
      "specId": 398
    },
    "1944": {
      "id": 1944,
      "row": 5,
      "col": 1,
      "icon": "ability_backstab",
      "ranks": [
        48988,
        49503,
        49504
      ],
      "requires": [
        {
          "id": 1943,
          "qty": 5
        }
      ],
      "specId": 398
    },
    "1945": {
      "id": 1945,
      "row": 0,
      "col": 1,
      "icon": "spell_deathknight_subversion",
      "ranks": [
        48997,
        49490,
        49491
      ],
      "requires": [],
      "specId": 398
    },
    "1948": {
      "id": 1948,
      "row": 1,
      "col": 1,
      "icon": "ability_rogue_bloodyeye",
      "ranks": [
        49004,
        49508,
        49509
      ],
      "requires": [],
      "specId": 398
    },
    "1949": {
      "id": 1949,
      "row": 4,
      "col": 3,
      "icon": "ability_hunter_rapidkilling",
      "ranks": [
        49005
      ],
      "requires": [],
      "specId": 398
    },
    "1950": {
      "id": 1950,
      "row": 4,
      "col": 2,
      "icon": "spell_misc_warsongfocus",
      "ranks": [
        49006,
        49526,
        50029
      ],
      "requires": [],
      "specId": 398
    },
    "1953": {
      "id": 1953,
      "row": 3,
      "col": 3,
      "icon": "spell_deathknight_vendetta",
      "ranks": [
        49015,
        50154,
        55136
      ],
      "requires": [],
      "specId": 398
    },
    "1954": {
      "id": 1954,
      "row": 6,
      "col": 1,
      "icon": "spell_deathknight_bladedarmor",
      "ranks": [
        49016
      ],
      "requires": [],
      "specId": 398
    },
    "1955": {
      "id": 1955,
      "row": 7,
      "col": 1,
      "icon": "spell_shadow_painspike",
      "ranks": [
        49018,
        49529,
        49530
      ],
      "requires": [],
      "specId": 398
    },
    "1957": {
      "id": 1957,
      "row": 8,
      "col": 1,
      "icon": "inv_weapon_shortblade_40",
      "ranks": [
        55050
      ],
      "requires": [],
      "specId": 398
    },
    "1958": {
      "id": 1958,
      "row": 8,
      "col": 2,
      "icon": "spell_deathknight_classicon",
      "ranks": [
        49023,
        49533,
        49534
      ],
      "requires": [],
      "specId": 398
    },
    "1959": {
      "id": 1959,
      "row": 8,
      "col": 0,
      "icon": "ability_creature_cursed_02",
      "ranks": [
        49189,
        50149,
        50150
      ],
      "requires": [],
      "specId": 398
    },
    "1960": {
      "id": 1960,
      "row": 6,
      "col": 0,
      "icon": "spell_shadow_soulleech",
      "ranks": [
        49027,
        49542,
        49543
      ],
      "requires": [],
      "specId": 398
    },
    "1961": {
      "id": 1961,
      "row": 10,
      "col": 1,
      "icon": "inv_sword_07",
      "ranks": [
        49028
      ],
      "requires": [],
      "specId": 398
    },
    "2015": {
      "id": 2015,
      "row": 4,
      "col": 0,
      "icon": "spell_deathknight_deathstrike",
      "ranks": [
        48977,
        49394,
        49395
      ],
      "requires": [],
      "specId": 398
    },
    "2017": {
      "id": 2017,
      "row": 0,
      "col": 2,
      "icon": "ability_upgrademoonglaive",
      "ranks": [
        49182,
        49500,
        49501,
        55225,
        55226
      ],
      "requires": [],
      "specId": 398
    },
    "2018": {
      "id": 2018,
      "row": 3,
      "col": 2,
      "icon": "spell_deathknight_spelldeflection",
      "ranks": [
        49145,
        49495,
        49497
      ],
      "requires": [],
      "specId": 398
    },
    "2019": {
      "id": 2019,
      "row": 7,
      "col": 2,
      "icon": "spell_shadow_lifedrain",
      "ranks": [
        55233
      ],
      "requires": [],
      "specId": 398
    },
    "2034": {
      "id": 2034,
      "row": 9,
      "col": 1,
      "icon": "spell_nature_reincarnation",
      "ranks": [
        61154,
        61155,
        61156,
        61157,
        61158
      ],
      "requires": [],
      "specId": 398
    },
    "2086": {
      "id": 2086,
      "row": 2,
      "col": 2,
      "icon": "inv_sword_62",
      "ranks": [
        49467,
        50033,
        50034
      ],
      "requires": [],
      "specId": 398
    },
    "2105": {
      "id": 2105,
      "row": 5,
      "col": 2,
      "icon": "ability_warrior_intensifyrage",
      "ranks": [
        53137,
        53138
      ],
      "requires": [],
      "specId": 398
    },
    "2217": {
      "id": 2217,
      "row": 1,
      "col": 2,
      "icon": "inv_sword_68",
      "ranks": [
        55107,
        55108
      ],
      "requires": [],
      "specId": 398
    },
    "2259": {
      "id": 2259,
      "row": 7,
      "col": 0,
      "icon": "spell_deathknight_butcher2",
      "ranks": [
        62905,
        62908
      ],
      "requires": [],
      "specId": 398
    }
  },
  "399": {
    "1968": {
      "id": 1968,
      "row": 0,
      "col": 2,
      "icon": "spell_holy_devotion",
      "ranks": [
        49042,
        49786,
        49787,
        49788,
        49789
      ],
      "requires": [],
      "specId": 399
    },
    "1971": {
      "id": 1971,
      "row": 3,
      "col": 3,
      "icon": "spell_shadow_twilight",
      "ranks": [
        49137,
        49657
      ],
      "requires": [],
      "specId": 399
    },
    "1973": {
      "id": 1973,
      "row": 1,
      "col": 2,
      "icon": "spell_shadow_darkritual",
      "ranks": [
        49140,
        49661,
        49662,
        49663,
        49664
      ],
      "requires": [],
      "specId": 399
    },
    "1975": {
      "id": 1975,
      "row": 8,
      "col": 1,
      "icon": "spell_deathknight_empowerruneblade2",
      "ranks": [
        49143
      ],
      "requires": [],
      "specId": 399
    },
    "1979": {
      "id": 1979,
      "row": 7,
      "col": 2,
      "icon": "inv_armor_helm_plate_naxxramas_raidwarrior_c_01",
      "ranks": [
        51271
      ],
      "requires": [],
      "specId": 399
    },
    "1980": {
      "id": 1980,
      "row": 4,
      "col": 3,
      "icon": "spell_shadow_soulleech_2",
      "ranks": [
        49796
      ],
      "requires": [],
      "specId": 399
    },
    "1981": {
      "id": 1981,
      "row": 3,
      "col": 2,
      "icon": "spell_frost_frostshock",
      "ranks": [
        49149,
        50115
      ],
      "requires": [],
      "specId": 399
    },
    "1989": {
      "id": 1989,
      "row": 10,
      "col": 1,
      "icon": "spell_frost_arcticwinds",
      "ranks": [
        49184
      ],
      "requires": [],
      "specId": 399
    },
    "1990": {
      "id": 1990,
      "row": 4,
      "col": 1,
      "icon": "inv_chest_mail_04",
      "ranks": [
        49186,
        51108,
        51109
      ],
      "requires": [],
      "specId": 399
    },
    "1992": {
      "id": 1992,
      "row": 5,
      "col": 2,
      "icon": "spell_frost_freezingbreath",
      "ranks": [
        49188,
        56822,
        59057
      ],
      "requires": [],
      "specId": 399
    },
    "1993": {
      "id": 1993,
      "row": 5,
      "col": 1,
      "icon": "inv_sword_112",
      "ranks": [
        49024,
        49538
      ],
      "requires": [],
      "specId": 399
    },
    "1997": {
      "id": 1997,
      "row": 8,
      "col": 0,
      "icon": "classic_spell_fire_elementaldevastation",
      "ranks": [
        49200,
        50151,
        50152
      ],
      "requires": [],
      "specId": 399
    },
    "1998": {
      "id": 1998,
      "row": 9,
      "col": 1,
      "icon": "spell_nature_tranquility",
      "ranks": [
        49202,
        50127,
        50128,
        50129,
        50130
      ],
      "requires": [],
      "specId": 399
    },
    "1999": {
      "id": 1999,
      "row": 6,
      "col": 1,
      "icon": "inv_staff_15",
      "ranks": [
        49203
      ],
      "requires": [],
      "specId": 399
    },
    "2020": {
      "id": 2020,
      "row": 0,
      "col": 1,
      "icon": "spell_arcane_arcane01",
      "ranks": [
        49455,
        50147
      ],
      "requires": [],
      "specId": 399
    },
    "2022": {
      "id": 2022,
      "row": 1,
      "col": 3,
      "icon": "ability_dualwield",
      "ranks": [
        49226,
        50137,
        50138
      ],
      "requires": [],
      "specId": 399
    },
    "2029": {
      "id": 2029,
      "row": 6,
      "col": 2,
      "icon": "spell_deathknight_frostpresence",
      "ranks": [
        50384,
        50385
      ],
      "requires": [],
      "specId": 399
    },
    "2030": {
      "id": 2030,
      "row": 4,
      "col": 2,
      "icon": "spell_nature_removedisease",
      "ranks": [
        49471,
        49790,
        49791
      ],
      "requires": [],
      "specId": 399
    },
    "2031": {
      "id": 2031,
      "row": 0,
      "col": 0,
      "icon": "spell_deathknight_icetouch",
      "ranks": [
        49175,
        50031,
        51456
      ],
      "requires": [],
      "specId": 399
    },
    "2035": {
      "id": 2035,
      "row": 1,
      "col": 1,
      "icon": "spell_frost_manarecharge",
      "ranks": [
        55061,
        55062
      ],
      "requires": [],
      "specId": 399
    },
    "2040": {
      "id": 2040,
      "row": 8,
      "col": 2,
      "icon": "inv-sword_53",
      "ranks": [
        50187,
        50190,
        50191
      ],
      "requires": [],
      "specId": 399
    },
    "2042": {
      "id": 2042,
      "row": 2,
      "col": 0,
      "icon": "spell_deathknight_icytalons",
      "ranks": [
        50880,
        50884,
        50885,
        50886,
        50887
      ],
      "requires": [
        {
          "id": 2031,
          "qty": 3
        }
      ],
      "specId": 399
    },
    "2044": {
      "id": 2044,
      "row": 3,
      "col": 1,
      "icon": "inv_sword_122",
      "ranks": [
        51123,
        51127,
        51128,
        51129,
        51130
      ],
      "requires": [],
      "specId": 399
    },
    "2048": {
      "id": 2048,
      "row": 2,
      "col": 2,
      "icon": "inv_weapon_hand_18",
      "ranks": [
        51468,
        51472,
        51473
      ],
      "requires": [],
      "specId": 399
    },
    "2210": {
      "id": 2210,
      "row": 7,
      "col": 1,
      "icon": "inv_weapon_shortblade_79",
      "ranks": [
        54639,
        54638,
        54637
      ],
      "requires": [],
      "specId": 399
    },
    "2215": {
      "id": 2215,
      "row": 2,
      "col": 1,
      "icon": "spell_shadow_raisedead",
      "ranks": [
        49039
      ],
      "requires": [],
      "specId": 399
    },
    "2223": {
      "id": 2223,
      "row": 5,
      "col": 0,
      "icon": "spell_deathknight_icytalons",
      "ranks": [
        55610
      ],
      "requires": [
        {
          "id": 2042,
          "qty": 5
        }
      ],
      "specId": 399
    },
    "2260": {
      "id": 2260,
      "row": 6,
      "col": 0,
      "icon": "spell_frost_wisp",
      "ranks": [
        50040,
        50041,
        50043
      ],
      "requires": [],
      "specId": 399
    },
    "2284": {
      "id": 2284,
      "row": 7,
      "col": 0,
      "icon": "ability_dualwieldspecialization",
      "ranks": [
        65661,
        66191,
        66192
      ],
      "requires": [],
      "specId": 399
    }
  },
  "400": {
    "1932": {
      "id": 1932,
      "row": 0,
      "col": 1,
      "icon": "spell_shadow_burningspirit",
      "ranks": [
        48962,
        49567,
        49568
      ],
      "requires": [],
      "specId": 400
    },
    "1933": {
      "id": 1933,
      "row": 1,
      "col": 1,
      "icon": "spell_shadow_deathanddecay",
      "ranks": [
        48963,
        49564,
        49565
      ],
      "requires": [],
      "specId": 400
    },
    "1934": {
      "id": 1934,
      "row": 1,
      "col": 3,
      "icon": "spell_deathknight_gnaw_ghoul",
      "ranks": [
        48965,
        49571,
        49572
      ],
      "requires": [],
      "specId": 400
    },
    "1962": {
      "id": 1962,
      "row": 7,
      "col": 1,
      "icon": "spell_nature_nullifydisease",
      "ranks": [
        49032,
        49631,
        49632
      ],
      "requires": [],
      "specId": 400
    },
    "1963": {
      "id": 1963,
      "row": 1,
      "col": 0,
      "icon": "spell_shadow_shadowwordpain",
      "ranks": [
        49036,
        49562
      ],
      "requires": [],
      "specId": 400
    },
    "1984": {
      "id": 1984,
      "row": 5,
      "col": 3,
      "icon": "spell_shadow_animatedead",
      "ranks": [
        52143
      ],
      "requires": [
        {
          "id": 2225,
          "qty": 2
        }
      ],
      "specId": 400
    },
    "1985": {
      "id": 1985,
      "row": 2,
      "col": 2,
      "icon": "ability_creature_disease_02",
      "ranks": [
        49158
      ],
      "requires": [],
      "specId": 400
    },
    "1996": {
      "id": 1996,
      "row": 4,
      "col": 0,
      "icon": "spell_shadow_contagion",
      "ranks": [
        49194
      ],
      "requires": [],
      "specId": 400
    },
    "2000": {
      "id": 2000,
      "row": 10,
      "col": 1,
      "icon": "ability_hunter_pet_bat",
      "ranks": [
        49206
      ],
      "requires": [],
      "specId": 400
    },
    "2001": {
      "id": 2001,
      "row": 5,
      "col": 2,
      "icon": "spell_shadow_shadetruesight",
      "ranks": [
        49208,
        56834,
        56835
      ],
      "requires": [],
      "specId": 400
    },
    "2003": {
      "id": 2003,
      "row": 8,
      "col": 0,
      "icon": "spell_shadow_callofbone",
      "ranks": [
        49217,
        49654,
        49655
      ],
      "requires": [],
      "specId": 400
    },
    "2004": {
      "id": 2004,
      "row": 3,
      "col": 2,
      "icon": "ability_criticalstrike",
      "ranks": [
        49219,
        49627,
        49628
      ],
      "requires": [],
      "specId": 400
    },
    "2005": {
      "id": 2005,
      "row": 4,
      "col": 1,
      "icon": "spell_shadow_shadowandflame",
      "ranks": [
        49220,
        49633,
        49635,
        49636,
        49638
      ],
      "requires": [],
      "specId": 400
    },
    "2007": {
      "id": 2007,
      "row": 7,
      "col": 2,
      "icon": "inv_chest_leather_13",
      "ranks": [
        49222
      ],
      "requires": [],
      "specId": 400
    },
    "2008": {
      "id": 2008,
      "row": 2,
      "col": 0,
      "icon": "spell_shadow_plaguecloud",
      "ranks": [
        49013,
        55236,
        55237
      ],
      "requires": [],
      "specId": 400
    },
    "2009": {
      "id": 2009,
      "row": 5,
      "col": 1,
      "icon": "spell_shadow_antimagicshell",
      "ranks": [
        49224,
        49610,
        49611
      ],
      "requires": [],
      "specId": 400
    },
    "2011": {
      "id": 2011,
      "row": 4,
      "col": 2,
      "icon": "spell_shadow_shadesofdarkness",
      "ranks": [
        49223,
        49599
      ],
      "requires": [],
      "specId": 400
    },
    "2013": {
      "id": 2013,
      "row": 6,
      "col": 2,
      "icon": "spell_deathknight_unholypresence",
      "ranks": [
        50391,
        50392
      ],
      "requires": [],
      "specId": 400
    },
    "2025": {
      "id": 2025,
      "row": 1,
      "col": 2,
      "icon": "spell_deathknight_strangulate",
      "ranks": [
        49588,
        49589
      ],
      "requires": [],
      "specId": 400
    },
    "2036": {
      "id": 2036,
      "row": 9,
      "col": 1,
      "icon": "inv_weapon_halberd14",
      "ranks": [
        50117,
        50118,
        50119,
        50120,
        50121
      ],
      "requires": [],
      "specId": 400
    },
    "2039": {
      "id": 2039,
      "row": 3,
      "col": 1,
      "icon": "spell_deathknight_summondeathcharger",
      "ranks": [
        49146,
        51267
      ],
      "requires": [],
      "specId": 400
    },
    "2043": {
      "id": 2043,
      "row": 8,
      "col": 1,
      "icon": "ability_creature_cursed_03",
      "ranks": [
        51099,
        51160,
        51161
      ],
      "requires": [
        {
          "id": 1962,
          "qty": 3
        }
      ],
      "specId": 400
    },
    "2047": {
      "id": 2047,
      "row": 2,
      "col": 1,
      "icon": "inv_weapon_shortblade_60",
      "ranks": [
        51459,
        51462,
        51463,
        51464,
        51465
      ],
      "requires": [],
      "specId": 400
    },
    "2082": {
      "id": 2082,
      "row": 0,
      "col": 0,
      "icon": "spell_deathknight_plaguestrike",
      "ranks": [
        51745,
        51746
      ],
      "requires": [],
      "specId": 400
    },
    "2085": {
      "id": 2085,
      "row": 6,
      "col": 3,
      "icon": "ability_ghoulfrenzy",
      "ranks": [
        63560
      ],
      "requires": [
        {
          "id": 1984,
          "qty": 1
        }
      ],
      "specId": 400
    },
    "2216": {
      "id": 2216,
      "row": 8,
      "col": 2,
      "icon": "spell_deathknight_scourgestrike",
      "ranks": [
        55090
      ],
      "requires": [],
      "specId": 400
    },
    "2218": {
      "id": 2218,
      "row": 0,
      "col": 2,
      "icon": "spell_nature_mirrorimage",
      "ranks": [
        55129,
        55130,
        55131,
        55132,
        55133
      ],
      "requires": [],
      "specId": 400
    },
    "2221": {
      "id": 2221,
      "row": 6,
      "col": 1,
      "icon": "spell_deathknight_antimagiczone",
      "ranks": [
        51052
      ],
      "requires": [
        {
          "id": 2009,
          "qty": 3
        }
      ],
      "specId": 400
    },
    "2225": {
      "id": 2225,
      "row": 3,
      "col": 3,
      "icon": "spell_deathknight_armyofthedead",
      "ranks": [
        55620,
        55623
      ],
      "requires": [],
      "specId": 400
    },
    "2226": {
      "id": 2226,
      "row": 5,
      "col": 0,
      "icon": "spell_shadow_shadowfiend",
      "ranks": [
        55666,
        55667
      ],
      "requires": [],
      "specId": 400
    },
    "2285": {
      "id": 2285,
      "row": 6,
      "col": 0,
      "icon": "spell_shadow_unholyfrenzy",
      "ranks": [
        66799,
        66814,
        66815,
        66816,
        66817
      ],
      "requires": [],
      "specId": 400
    }
  },
  "409": {
    "2110": {
      "id": 2110,
      "row": 2,
      "col": 0,
      "icon": "inv_misc_monsterhorn_06",
      "ranks": [
        61680,
        61681,
        52858
      ],
      "requires": [],
      "specId": 409
    },
    "2114": {
      "id": 2114,
      "row": 0,
      "col": 0,
      "icon": "spell_nature_guardianward",
      "ranks": [
        61682,
        61683
      ],
      "requires": [],
      "specId": 409
    },
    "2116": {
      "id": 2116,
      "row": 0,
      "col": 2,
      "icon": "spell_nature_unyeildingstamina",
      "ranks": [
        61686,
        61687,
        61688
      ],
      "requires": [],
      "specId": 409
    },
    "2117": {
      "id": 2117,
      "row": 0,
      "col": 3,
      "icon": "spell_nature_spiritarmor",
      "ranks": [
        61689,
        61690
      ],
      "requires": [],
      "specId": 409
    },
    "2122": {
      "id": 2122,
      "row": 1,
      "col": 3,
      "icon": "inv_helmet_94",
      "ranks": [
        53175,
        53176
      ],
      "requires": [
        {
          "id": 2117,
          "qty": 2
        }
      ],
      "specId": 409
    },
    "2123": {
      "id": 2123,
      "row": 2,
      "col": 1,
      "icon": "ability_physical_taunt",
      "ranks": [
        53178,
        53179
      ],
      "requires": [],
      "specId": 409
    },
    "2126": {
      "id": 2126,
      "row": 1,
      "col": 0,
      "icon": "inv_jewelry_necklace_22",
      "ranks": [
        53182,
        53183,
        53184
      ],
      "requires": [],
      "specId": 409
    },
    "2160": {
      "id": 2160,
      "row": 1,
      "col": 1,
      "icon": "ability_hunter_pet_boar",
      "ranks": [
        19596
      ],
      "requires": [],
      "specId": 409
    },
    "2161": {
      "id": 2161,
      "row": 3,
      "col": 3,
      "icon": "spell_nature_resistnature",
      "ranks": [
        53427,
        53429,
        53430
      ],
      "requires": [],
      "specId": 409
    },
    "2162": {
      "id": 2162,
      "row": 2,
      "col": 2,
      "icon": "inv_bannerpvp_02",
      "ranks": [
        53409,
        53411
      ],
      "requires": [],
      "specId": 409
    },
    "2163": {
      "id": 2163,
      "row": 3,
      "col": 2,
      "icon": "inv_misc_ahnqirajtrinket_02",
      "ranks": [
        53450,
        53451
      ],
      "requires": [],
      "specId": 409
    },
    "2169": {
      "id": 2169,
      "row": 4,
      "col": 3,
      "icon": "ability_hunter_pet_turtle",
      "ranks": [
        53476
      ],
      "requires": [],
      "specId": 409
    },
    "2170": {
      "id": 2170,
      "row": 4,
      "col": 1,
      "icon": "spell_nature_reincarnation",
      "ranks": [
        53477
      ],
      "requires": [
        {
          "id": 2123,
          "qty": 2
        }
      ],
      "specId": 409
    },
    "2171": {
      "id": 2171,
      "row": 4,
      "col": 0,
      "icon": "spell_nature_shamanrage",
      "ranks": [
        53478
      ],
      "requires": [],
      "specId": 409
    },
    "2172": {
      "id": 2172,
      "row": 4,
      "col": 2,
      "icon": "classic_ability_druid_demoralizingroar",
      "ranks": [
        53480
      ],
      "requires": [
        {
          "id": 2163,
          "qty": 2
        }
      ],
      "specId": 409
    },
    "2173": {
      "id": 2173,
      "row": 1,
      "col": 2,
      "icon": "spell_shadow_lifedrain",
      "ranks": [
        53481,
        53482
      ],
      "requires": [
        {
          "id": 2116,
          "qty": 3
        }
      ],
      "specId": 409
    },
    "2237": {
      "id": 2237,
      "row": 0,
      "col": 1,
      "icon": "ability_hunter_pet_bear",
      "ranks": [
        61685
      ],
      "requires": [],
      "specId": 409
    },
    "2255": {
      "id": 2255,
      "row": 5,
      "col": 2,
      "icon": "inv_misc_horn_04",
      "ranks": [
        62758,
        62762
      ],
      "requires": [
        {
          "id": 2172,
          "qty": 1
        }
      ],
      "specId": 409
    },
    "2258": {
      "id": 2258,
      "row": 5,
      "col": 1,
      "icon": "ability_hunter_pet_gorilla",
      "ranks": [
        62764,
        62765
      ],
      "requires": [],
      "specId": 409
    },
    "2277": {
      "id": 2277,
      "row": 2,
      "col": 3,
      "icon": "ability_golemthunderclap",
      "ranks": [
        63900
      ],
      "requires": [],
      "specId": 409
    }
  },
  "410": {
    "2106": {
      "id": 2106,
      "row": 2,
      "col": 0,
      "icon": "inv_misc_monsterhorn_06",
      "ranks": [
        61680,
        61681,
        52858
      ],
      "requires": [],
      "specId": 410
    },
    "2107": {
      "id": 2107,
      "row": 0,
      "col": 0,
      "icon": "spell_nature_guardianward",
      "ranks": [
        61682,
        61683
      ],
      "requires": [],
      "specId": 410
    },
    "2109": {
      "id": 2109,
      "row": 0,
      "col": 1,
      "icon": "ability_druid_dash",
      "ranks": [
        61684
      ],
      "requires": [],
      "specId": 410
    },
    "2111": {
      "id": 2111,
      "row": 2,
      "col": 3,
      "icon": "ability_hunter_pet_bear",
      "ranks": [
        61685
      ],
      "requires": [],
      "specId": 410
    },
    "2112": {
      "id": 2112,
      "row": 0,
      "col": 2,
      "icon": "spell_nature_unyeildingstamina",
      "ranks": [
        61686,
        61687,
        61688
      ],
      "requires": [],
      "specId": 410
    },
    "2113": {
      "id": 2113,
      "row": 0,
      "col": 3,
      "icon": "spell_nature_spiritarmor",
      "ranks": [
        61689,
        61690
      ],
      "requires": [],
      "specId": 410
    },
    "2124": {
      "id": 2124,
      "row": 1,
      "col": 0,
      "icon": "ability_druid_cower",
      "ranks": [
        53180,
        53181
      ],
      "requires": [],
      "specId": 410
    },
    "2125": {
      "id": 2125,
      "row": 1,
      "col": 2,
      "icon": "inv_jewelry_necklace_22",
      "ranks": [
        53182,
        53183,
        53184
      ],
      "requires": [],
      "specId": 410
    },
    "2128": {
      "id": 2128,
      "row": 1,
      "col": 1,
      "icon": "ability_druid_primaltenacity",
      "ranks": [
        53186,
        53187
      ],
      "requires": [],
      "specId": 410
    },
    "2129": {
      "id": 2129,
      "row": 3,
      "col": 2,
      "icon": "ability_hunter_pet_spider",
      "ranks": [
        53203,
        53204,
        53205
      ],
      "requires": [],
      "specId": 410
    },
    "2151": {
      "id": 2151,
      "row": 1,
      "col": 3,
      "icon": "ability_hunter_pet_boar",
      "ranks": [
        19596
      ],
      "requires": [],
      "specId": 410
    },
    "2152": {
      "id": 2152,
      "row": 2,
      "col": 2,
      "icon": "inv_bannerpvp_02",
      "ranks": [
        53409,
        53411
      ],
      "requires": [],
      "specId": 410
    },
    "2153": {
      "id": 2153,
      "row": 4,
      "col": 1,
      "icon": "ability_hunter_mendpet",
      "ranks": [
        53426
      ],
      "requires": [
        {
          "id": 2156,
          "qty": 1
        }
      ],
      "specId": 410
    },
    "2154": {
      "id": 2154,
      "row": 3,
      "col": 3,
      "icon": "spell_nature_resistnature",
      "ranks": [
        53427,
        53429,
        53430
      ],
      "requires": [],
      "specId": 410
    },
    "2155": {
      "id": 2155,
      "row": 4,
      "col": 0,
      "icon": "ability_druid_berserk",
      "ranks": [
        53401
      ],
      "requires": [],
      "specId": 410
    },
    "2156": {
      "id": 2156,
      "row": 3,
      "col": 1,
      "icon": "inv_misc_pheonixpet_01",
      "ranks": [
        55709
      ],
      "requires": [
        {
          "id": 2128,
          "qty": 2
        }
      ],
      "specId": 410
    },
    "2157": {
      "id": 2157,
      "row": 4,
      "col": 2,
      "icon": "ability_druid_kingofthejungle",
      "ranks": [
        53434
      ],
      "requires": [
        {
          "id": 2129,
          "qty": 3
        }
      ],
      "specId": 410
    },
    "2203": {
      "id": 2203,
      "row": 0,
      "col": 1,
      "icon": "spell_shadow_burningspirit",
      "ranks": [
        23145
      ],
      "requires": [],
      "specId": 410
    },
    "2219": {
      "id": 2219,
      "row": 2,
      "col": 3,
      "icon": "ability_hunter_pet_dragonhawk",
      "ranks": [
        52825
      ],
      "requires": [],
      "specId": 410
    },
    "2253": {
      "id": 2253,
      "row": 5,
      "col": 2,
      "icon": "inv_misc_horn_04",
      "ranks": [
        62758,
        62762
      ],
      "requires": [
        {
          "id": 2157,
          "qty": 1
        }
      ],
      "specId": 410
    },
    "2254": {
      "id": 2254,
      "row": 5,
      "col": 0,
      "icon": "inv_misc_fish_35",
      "ranks": [
        62759,
        62760
      ],
      "requires": [],
      "specId": 410
    }
  },
  "411": {
    "2118": {
      "id": 2118,
      "row": 0,
      "col": 0,
      "icon": "spell_nature_guardianward",
      "ranks": [
        61682,
        61683
      ],
      "requires": [],
      "specId": 411
    },
    "2119": {
      "id": 2119,
      "row": 0,
      "col": 1,
      "icon": "ability_druid_dash",
      "ranks": [
        61684
      ],
      "requires": [],
      "specId": 411
    },
    "2120": {
      "id": 2120,
      "row": 0,
      "col": 2,
      "icon": "spell_nature_unyeildingstamina",
      "ranks": [
        61686,
        61687,
        61688
      ],
      "requires": [],
      "specId": 411
    },
    "2121": {
      "id": 2121,
      "row": 0,
      "col": 3,
      "icon": "spell_nature_spiritarmor",
      "ranks": [
        61689,
        61690
      ],
      "requires": [],
      "specId": 411
    },
    "2127": {
      "id": 2127,
      "row": 1,
      "col": 3,
      "icon": "inv_jewelry_necklace_22",
      "ranks": [
        53182,
        53183,
        53184
      ],
      "requires": [],
      "specId": 411
    },
    "2165": {
      "id": 2165,
      "row": 1,
      "col": 0,
      "icon": "ability_hunter_pet_boar",
      "ranks": [
        19596
      ],
      "requires": [],
      "specId": 411
    },
    "2166": {
      "id": 2166,
      "row": 2,
      "col": 0,
      "icon": "inv_misc_monsterhorn_06",
      "ranks": [
        61680,
        61681,
        52858
      ],
      "requires": [],
      "specId": 411
    },
    "2167": {
      "id": 2167,
      "row": 2,
      "col": 1,
      "icon": "inv_bannerpvp_02",
      "ranks": [
        53409,
        53411
      ],
      "requires": [],
      "specId": 411
    },
    "2168": {
      "id": 2168,
      "row": 3,
      "col": 1,
      "icon": "spell_nature_resistnature",
      "ranks": [
        53427,
        53429,
        53430
      ],
      "requires": [],
      "specId": 411
    },
    "2175": {
      "id": 2175,
      "row": 4,
      "col": 2,
      "icon": "ability_warrior_bullrush",
      "ranks": [
        53490
      ],
      "requires": [
        {
          "id": 2177,
          "qty": 2
        }
      ],
      "specId": 411
    },
    "2177": {
      "id": 2177,
      "row": 3,
      "col": 2,
      "icon": "ability_hunter_survivalinstincts",
      "ranks": [
        52234,
        53497
      ],
      "requires": [],
      "specId": 411
    },
    "2181": {
      "id": 2181,
      "row": 4,
      "col": 0,
      "icon": "ability_druid_lacerate",
      "ranks": [
        53508
      ],
      "requires": [],
      "specId": 411
    },
    "2182": {
      "id": 2182,
      "row": 1,
      "col": 2,
      "icon": "ability_hunter_pet_owl",
      "ranks": [
        53514,
        53516
      ],
      "requires": [],
      "specId": 411
    },
    "2183": {
      "id": 2183,
      "row": 3,
      "col": 3,
      "icon": "inv_misc_fish_48",
      "ranks": [
        53511,
        53512
      ],
      "requires": [
        {
          "id": 2127,
          "qty": 3
        }
      ],
      "specId": 411
    },
    "2184": {
      "id": 2184,
      "row": 4,
      "col": 1,
      "icon": "ability_druid_mastershapeshifter",
      "ranks": [
        53517
      ],
      "requires": [],
      "specId": 411
    },
    "2201": {
      "id": 2201,
      "row": 0,
      "col": 1,
      "icon": "spell_shadow_burningspirit",
      "ranks": [
        23145
      ],
      "requires": [],
      "specId": 411
    },
    "2206": {
      "id": 2206,
      "row": 2,
      "col": 2,
      "icon": "ability_racial_cannibalize",
      "ranks": [
        54044
      ],
      "requires": [],
      "specId": 411
    },
    "2207": {
      "id": 2207,
      "row": 1,
      "col": 1,
      "icon": "ability_hunter_animalhandler",
      "ranks": [
        53483,
        53485
      ],
      "requires": [
        {
          "id": 2119,
          "qty": 1
        }
      ],
      "specId": 411
    },
    "2208": {
      "id": 2208,
      "row": 1,
      "col": 1,
      "icon": "ability_hunter_animalhandler",
      "ranks": [
        53554,
        53555
      ],
      "requires": [
        {
          "id": 2201,
          "qty": 1
        }
      ],
      "specId": 411
    },
    "2256": {
      "id": 2256,
      "row": 5,
      "col": 0,
      "icon": "inv_misc_horn_04",
      "ranks": [
        62758,
        62762
      ],
      "requires": [
        {
          "id": 2181,
          "qty": 1
        }
      ],
      "specId": 411
    },
    "2257": {
      "id": 2257,
      "row": 4,
      "col": 3,
      "icon": "inv_misc_ahnqirajtrinket_02",
      "ranks": [
        53450,
        53451
      ],
      "requires": [],
      "specId": 411
    },
    "2278": {
      "id": 2278,
      "row": 5,
      "col": 3,
      "icon": "classic_ability_druid_demoralizingroar",
      "ranks": [
        53480
      ],
      "requires": [
        {
          "id": 2257,
          "qty": 2
        }
      ],
      "specId": 411
    }
  }
};
