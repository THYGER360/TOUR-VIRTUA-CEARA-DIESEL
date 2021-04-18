(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "duration": 1100,
 "id": "effect_F88D607B_E1F5_BF71_41BC_F79C2718BD2D",
 "easing": "quad_in",
 "class": "SlideOutEffect",
 "to": "right"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.73,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "id": "camera_A303D5A6_E22F_A190_41DA_A8F1CC885434",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 144.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A37B1590_E22F_A1B0_41E6_3EB54B05678E",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_camera"
  },
  {
   "media": "this.panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_camera"
  },
  {
   "media": "this.panorama_B3E48966_D887_D892_41C3_315A48960574",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B3E48966_D887_D892_41C3_315A48960574_camera"
  },
  {
   "media": "this.panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_camera"
  },
  {
   "media": "this.panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_camera"
  },
  {
   "media": "this.panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_camera"
  },
  {
   "media": "this.panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_camera"
  },
  {
   "media": "this.panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_camera"
  },
  {
   "media": "this.panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_camera"
  },
  {
   "media": "this.panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_camera"
  },
  {
   "media": "this.panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_camera"
  },
  {
   "media": "this.panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_camera"
  },
  {
   "media": "this.panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_camera"
  },
  {
   "media": "this.panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_camera"
  },
  {
   "media": "this.panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_camera"
  },
  {
   "media": "this.panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_camera"
  },
  {
   "media": "this.panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_camera"
  },
  {
   "media": "this.panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_camera"
  },
  {
   "media": "this.panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_camera"
  },
  {
   "media": "this.panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_camera"
  },
  {
   "media": "this.panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_camera"
  },
  {
   "media": "this.panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 21)",
   "camera": "this.panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 168.98,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_A2ECB507_E22F_A691_41C4_B9FA9B043D85",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "10",
 "id": "panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304",
 "thumbnailUrl": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_FE5602BA_D69E_3C36_41D5_2F50A36BC306",
  "this.overlay_FFB2485E_D69E_2C6E_41E9_75E59D1C1EB4",
  "this.overlay_FF37027E_D69E_1C2E_41E3_17C6583BCE3A",
  "this.overlay_FF501C7C_D69E_2432_41C7_5434C70EAFDF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -106.53,
  "class": "PanoramaCameraPosition",
  "pitch": 6.43
 },
 "id": "camera_A3BAA626_E22F_A293_41C5_25E6A0C86CD6",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A16C36FA_E22F_A370_418E_CDC4969D75D3",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 12.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0.79
 },
 "id": "panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "02",
 "id": "panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4",
 "thumbnailUrl": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_D9FBA56E_D662_642E_41D5_3B56E989874F",
  "this.overlay_D992203B_D662_3C35_41DD_CEBC4B2A3FF0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 148.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "id": "camera_A022467B_E22F_A371_41E7_0502CAB77F7F",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A09876C5_E22F_A390_41E3_E594EDBB2C70",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A33005D1_E22F_A1B0_41DC_FB1E394036CB",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.57,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_A314A5B0_E22F_A1F0_41A2_5E1907F524BC",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "15",
 "id": "panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9",
 "thumbnailUrl": "media/panorama_DC0D3A4E_D662_2C6E_41D3_5E326CBE75A9_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A06F1646_E22F_A293_41C7_2FDA4A0AC4B5",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 118.47,
  "class": "PanoramaCameraPosition",
  "pitch": 4.59
 },
 "id": "camera_A17E6704_E22F_A290_41E8_95E3197CF610",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "id": "camera_A15C06EF_E22F_A390_41D4_429C774AE938",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A05DD63B_E22F_A2F1_41E5_43F4996AFA8E",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 9.69,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0.59
 },
 "id": "panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": 0.59,
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "20",
 "id": "panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552",
 "thumbnailUrl": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EF3B17D0_E0F5_E7CB_41D3_6E11A79CE643",
  "this.overlay_EF3BF7D0_E0F5_E7CB_4192_1DDDD62A890E",
  "this.overlay_EF3BC7D0_E0F5_E7CB_41BB_AA82A3E83041"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0.79
 },
 "id": "panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -153.37,
  "class": "PanoramaCameraPosition",
  "pitch": 7.35
 },
 "id": "camera_A07F8651_E22F_A2B1_41E9_ED9C8BAB4E7D",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -68.88,
  "class": "PanoramaCameraPosition",
  "pitch": 8.27
 },
 "id": "camera_A3641586_E22F_A190_41E6_3D010C641B86",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "16",
 "id": "panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C",
 "thumbnailUrl": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_F0ED62EA_E0EB_19DF_41CF_3472910299C6",
  "this.overlay_F0EC92EA_E0EB_19DF_41D3_09E71FB18EE3",
  "this.overlay_F0ECA2EA_E0EB_19DF_41BC_346ACF9578A7",
  "this.overlay_F0ECC2EA_E0EB_19DF_41E4_97CE5FEADDDD"
 ]
},
{
 "gyroscopeEnabled": true,
 "buttonCardboardView": "this.IconButton_CC433A08_E27F_A29F_41AB_32E6632BA7E8",
 "buttonToggleHotspots": "this.IconButton_CC431A08_E27F_A29F_41D1_701E3CA4FBCA",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_CC40FA08_E27F_A29F_41E9_C25E1D6AB514",
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 108.37,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_A08856BA_E22F_A3F0_41DE_C6C922C62CF2",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 86.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A0BA06DA_E22F_A3B0_41D4_8B92D0F26191",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 24.33,
  "class": "PanoramaCameraPosition",
  "pitch": -0.59
 },
 "id": "panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.88,
  "class": "PanoramaCameraPosition",
  "pitch": 1.38
 },
 "id": "panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A001B666_E22F_A293_41EA_1C8C4A3C4968",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 33.98,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "id": "camera_A285C531_E22F_A6F1_416E_666A8A3D40B1",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01",
 "id": "panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8",
 "thumbnailUrl": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_t.jpg",
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EE2F8C53_E0EE_E8CD_41C0_8BC5EDDBBD02",
  "this.overlay_EE2F9C53_E0EE_E8CD_41E7_D215348D9860",
  "this.overlay_EE2F7C53_E0EE_E8CD_41A3_DA04AFA1C399",
  "this.overlay_F36DB451_E0EB_38CD_41E5_5D25825B0904"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.38,
  "class": "PanoramaCameraPosition",
  "pitch": -0.4
 },
 "id": "panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 400,
 "id": "effect_D38AAEEE_E26D_A390_41E0_0EEFA9A37CE7",
 "easing": "quad_in",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 124.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A2A0F550_E22F_A6B0_41C0_159E188A4FC0",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "13",
 "id": "panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12",
 "thumbnailUrl": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_F824158E_D6EE_24EE_41AE_8795B457D887",
  "this.overlay_F8192E54_D6EE_2472_41B1_AB23995F8B16"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -11.27,
  "class": "PanoramaCameraPosition",
  "pitch": -0.2
 },
 "id": "panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064"
  }
 ],
 "hfov": 360,
 "label": "009",
 "id": "panorama_B3E48966_D887_D892_41C3_315A48960574",
 "thumbnailUrl": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_t.jpg",
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B60F1057_D899_C8B2_41EA_84C57F18B859",
  "this.overlay_B7B1563B_D898_48F2_41E0_E5BE32E08258"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.84,
  "class": "PanoramaCameraPosition",
  "pitch": 1.19
 },
 "id": "panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -6.43,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "id": "camera_A2DE44F1_E22F_A771_41E4_7F1A7822C679",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B3E48966_D887_D892_41C3_315A48960574_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 400,
 "from": "left",
 "id": "effect_4D25D616_570D_66CE_41A8_E15436E28685",
 "easing": "quad_in",
 "class": "SlideInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.24,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "id": "camera_A2B7D55B_E22F_A6B0_41E8_13D042B6243E",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B3E48966_D887_D892_41C3_315A48960574"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "04",
 "id": "panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064",
 "thumbnailUrl": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_F0D478DE_E0EF_69F7_41C4_22E57C825649",
  "this.overlay_F0D468DE_E0EF_69F7_41C3_B265A919D410"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "14",
 "id": "panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F",
 "thumbnailUrl": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_FB75B3DE_D6EE_1C6E_41E2_C45585688EB6",
  "this.overlay_F82422BB_D6EE_1C36_41A3_51C9FEE60B79"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 91.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "id": "camera_A353257B_E22F_A170_41CC_31B0C2E9118A",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -153.37,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "id": "camera_A0320686_E22F_A393_41EB_34C7CB77D63D",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 77.14,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "id": "camera_A0C45691_E22F_A3B1_41A1_A178CCF1E360",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 33.03,
  "class": "PanoramaCameraPosition",
  "pitch": 2.18
 },
 "id": "panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -19.19,
  "class": "PanoramaCameraPosition",
  "pitch": 1.38
 },
 "id": "panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 6.43,
  "class": "PanoramaCameraPosition",
  "pitch": 5.51
 },
 "id": "camera_A3896606_E22F_A290_41C9_B9CFDE2B5674",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 132.24,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "id": "camera_A28FD527_E22F_A691_4155_DD500A7A3700",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -160.71,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "id": "camera_A2C674E6_E22F_A793_41E9_799D6411E736",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A298753B_E22F_A6F0_41A7_4195BC95B9FE",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 59.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "id": "camera_A3A8B61B_E22F_A2B1_41CD_D082F9B7CC57",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -70.71,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "id": "camera_A35CE571_E22F_A170_41E5_B05CC5D2E0EE",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 17.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0.59
 },
 "id": "panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.33,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "id": "camera_A3F945FB_E22F_A170_41D3_FE6A7B190FE7",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 164.39,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "id": "camera_A3E605F1_E22F_A170_41EB_E8DCC22BFE31",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -11.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A3C415DB_E22F_A1B0_41D7_FA18BEAA3E70",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0.99
 },
 "id": "panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 1100,
 "id": "effect_D5463434_E212_A6F0_41C1_74C49E00BBAE",
 "easing": "quad_in",
 "class": "SlideOutEffect",
 "to": "right"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "12",
 "id": "panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F",
 "thumbnailUrl": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_t.jpg",
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_E6E988BD_D6E2_2C32_41D6_81C760A31907",
  "this.overlay_E63BCB83_D6E3_ECD6_41C6_48F079FE8349"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A14A36E5_E22F_A390_41D1_E40314AD182F",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.79,
  "class": "PanoramaCameraPosition",
  "pitch": 1.19
 },
 "id": "panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "05",
 "id": "panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB",
 "thumbnailUrl": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_t.jpg",
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EFD38152_E0EE_F8CF_41D4_DB151F15EF31",
  "this.overlay_EFD36152_E0EE_F8CF_41D2_E3F34A2B39A3"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 121.22,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "id": "camera_A0A8F6CF_E22F_A390_41DB_64409066FA77",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.15,
  "class": "PanoramaCameraPosition",
  "pitch": -0.2
 },
 "id": "panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "07",
 "id": "panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020",
 "thumbnailUrl": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EFD160F5_E0ED_19B5_418F_634DA43354E1",
  "this.overlay_EFD170F5_E0ED_19B5_41E2_545F77883C95"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "18",
 "id": "panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75",
 "thumbnailUrl": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EF36CAC1_E0F5_29CD_41B7_B785E8CB4B92",
  "this.overlay_EF36DAC1_E0F5_29CD_41CC_1D15EF486ED6"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -80.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "id": "camera_A3988611_E22F_A2B0_41B7_1AEDAD821EB2",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -166.22,
  "class": "PanoramaCameraPosition",
  "pitch": -8.27
 },
 "id": "camera_A33F55C6_E22F_A190_41D3_E09206E5AC99",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.92,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_A34B4566_E22F_A690_41D1_F4E1C153D2EE",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "21",
 "id": "panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5",
 "thumbnailUrl": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EF652F1C_E0EA_E87B_41B4_69AD741AF946",
  "this.overlay_EF650F1C_E0EA_E87B_41D7_E760E44DE5E1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.99,
  "class": "PanoramaCameraPosition",
  "pitch": -0.2
 },
 "id": "panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "id": "camera_A0F616B0_E22F_A3F0_41E5_DE7B4ECEBF84",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 400,
 "from": "left",
 "id": "effect_4DDFE816_570D_AAC1_41BE_ED754EBAE851",
 "easing": "quad_in",
 "class": "SlideInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 106.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "id": "camera_A30CE59B_E22F_A1B0_41C0_E6714C0AD8D7",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "06",
 "id": "panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C",
 "thumbnailUrl": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EFA690BB_E0ED_79BD_41E5_BA28CFFC1D3D",
  "this.overlay_EFA680BB_E0ED_79BD_41DE_F0C18FFDE422"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -86.33,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "id": "camera_A071C65B_E22F_A2B1_41E8_9D02DA9F592E",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0.99
 },
 "id": "panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "11",
 "id": "panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736",
 "thumbnailUrl": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_t.jpg",
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_E737B423_D6E1_FBD5_41B1_D31D1C7E5228",
  "this.overlay_E7602A12_D6E1_EFF6_41D4_855C85398F9E",
  "this.overlay_E4B41C23_D6E6_2BD6_41B6_E85C57AAF313"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "22",
 "id": "panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E",
 "thumbnailUrl": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EF92E57D_E0EB_78B0_41D9_632E86B60499",
  "this.overlay_EF92D582_E0EB_784F_41B2_8279B4C7CC8D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 400,
 "id": "effect_4DD0850A_570D_5AC6_41BA_D356800A651E",
 "easing": "quad_in",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "08",
 "id": "panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284",
 "thumbnailUrl": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EFAF43D7_E0ED_1FF5_41D5_04D3AAD5DEB2",
  "this.overlay_EFAF63D7_E0ED_1FF5_41EA_87B3D4B37514"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -12.86,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_A3D4C5E6_E22F_A190_41D2_2F62ED2A56D4",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B3E48966_D887_D892_41C3_315A48960574"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "19",
 "id": "panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB",
 "thumbnailUrl": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_t.jpg",
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EF33C049_E0F5_18DD_41D5_930A8764C3DC",
  "this.overlay_EF33D049_E0F5_18DD_41AA_DDC6CAC17112",
  "this.overlay_EF33E049_E0F5_18DD_41DF_E288EF8FB96E",
  "this.overlay_EF33F049_E0F5_18DD_41EA_18B05CFF5EBF",
  "this.overlay_EF33A049_E0F5_18DD_41E6_FBF25D37E433"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": 4.59
 },
 "id": "camera_A0E656A6_E22F_A393_41D6_4425E22B0CC8",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -122.14,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "id": "camera_A0D4769B_E22F_A3B1_41E5_AB2AB893D7D5",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -40.41,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "id": "camera_A2AF0545_E22F_A690_41E5_0FE0C661B9A2",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 172.65,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "id": "camera_A2E58512_E22F_A6B3_4180_91AF28FA2662",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "17",
 "id": "panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B",
 "thumbnailUrl": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EF2326B7_E0EB_19B5_41EB_A2039B27F85B",
  "this.overlay_EF2336B7_E0EB_19B5_41DF_B180CE6E8762",
  "this.overlay_EF22D6B7_E0EB_19B5_41DE_09CD80078930"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "09",
 "id": "panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F",
 "thumbnailUrl": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EFB919BA_E0ED_6BBF_41E2_AAA758CF5B00",
  "this.overlay_EFB909BA_E0ED_6BBF_41DE_C12A32E0A53E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 2.76,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "id": "camera_A32825BB_E22F_A1F0_41E0_22DD8A6AFAE1",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -19.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "id": "camera_A013A671_E22F_A371_41C1_2B71A0EE69F7",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A2FB551C_E22F_A6B7_41CF_B0B1BC629784",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A04D0631_E22F_A2F1_41DF_8497A9DC3BDB",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 21.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "id": "camera_A2D674FC_E22F_A777_41E1_9226B78E0735",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.71,
  "class": "PanoramaCameraPosition",
  "pitch": -1.38
 },
 "id": "panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_camera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "right": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 100,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipTextShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipTextShadowVerticalLength": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "transparent",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "bottom": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "id": "HTMLText_CE406E30_D788_588E_41DB_C9D11AB7591A",
 "left": "35.9%",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText53815"
 },
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "bottom": "32.35%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "51.43%",
 "click": "this.setComponentVisibility(this.HTMLText_CE406E30_D788_588E_41DB_C9D11AB7591A, false, 0, this.effect_D5463434_E212_A6F0_41C1_74C49E00BBAE, 'hideEffect', false); this.setComponentVisibility(this.Image_FCBDEA0D_D798_5891_41C0_0A48493E53D4, false, 0, this.effect_D5463434_E212_A6F0_41C1_74C49E00BBAE, 'hideEffect', false); this.setComponentVisibility(this.Image_EF07730E_E095_3694_41D8_A65966A1CF99, false, 0, this.effect_D5463434_E212_A6F0_41C1_74C49E00BBAE, 'hideEffect', false)",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowVerticalLength": 3,
 "backgroundOpacity": 0.81,
 "shadowOpacity": 0.45,
 "paddingTop": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffff33;font-size:23px;\"><B><I>GIRE SEU CELULAR </I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffff33;font-size:23px;\"><B><I>             OU </I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffff33;font-size:23px;\"><B><I>   ARRASTE PARA</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffff33;font-size:23px;\"><B><I>        OS LADOS</I></B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadow": true,
 "paddingBottom": 20,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "maxHeight": 256,
 "maxWidth": 256,
 "data": {
  "name": "X"
 },
 "id": "Image_FCBDEA0D_D798_5891_41C0_0A48493E53D4",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0.06%",
 "width": "9.94%",
 "borderSize": 0,
 "url": "skin/Image_FCBDEA0D_D798_5891_41C0_0A48493E53D4.png",
 "minHeight": 100,
 "horizontalAlign": "center",
 "bottom": "42.21%",
 "verticalAlign": "middle",
 "minWidth": 100,
 "height": "11.074%",
 "click": "this.setComponentVisibility(this.HTMLText_CE406E30_D788_588E_41DB_C9D11AB7591A, false, 0, this.effect_F88D607B_E1F5_BF71_41BC_F79C2718BD2D, 'hideEffect', false); this.setComponentVisibility(this.Image_FCBDEA0D_D798_5891_41C0_0A48493E53D4, false, 0, this.effect_F88D607B_E1F5_BF71_41BC_F79C2718BD2D, 'hideEffect', false); this.setComponentVisibility(this.Image_EF07730E_E095_3694_41D8_A65966A1CF99, false, 0, this.effect_F88D607B_E1F5_BF71_41BC_F79C2718BD2D, 'hideEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "class": "Image"
},
{
 "maxHeight": 754,
 "maxWidth": 790,
 "data": {
  "name": "GIF"
 },
 "left": "42.47%",
 "paddingLeft": 0,
 "id": "Image_EF07730E_E095_3694_41D8_A65966A1CF99",
 "right": "43.3%",
 "paddingRight": 0,
 "borderSize": 0,
 "url": "skin/Image_EF07730E_E095_3694_41D8_A65966A1CF99.gif",
 "minHeight": 200,
 "horizontalAlign": "center",
 "bottom": "42.88%",
 "verticalAlign": "middle",
 "minWidth": 200,
 "top": "23.68%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "class": "Image"
},
{
 "data": {
  "name": "COLUNA"
 },
 "children": [
  "this.Container_CC42DA07_E27F_A291_41D6_C70E107F2238",
  "this.Container_CC42AA07_E27F_A291_41EA_8968FDAE6E2B"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_CC40CA08_E27F_A29F_41E1_92E708901110",
 "scrollBarVisible": "rollOver",
 "width": 300,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "IconButton Fullscreen"
 },
 "paddingLeft": 0,
 "id": "IconButton_CC432A08_E27F_A29F_41D4_41B133F6FB83",
 "transparencyActive": true,
 "width": 30,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_CC432A08_E27F_A29F_41D4_41B133F6FB83.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_CC432A08_E27F_A29F_41D4_41B133F6FB83_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "class": "IconButton"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "IconButton Sound"
 },
 "paddingLeft": 0,
 "id": "IconButton_CC430A08_E27F_A29F_41E8_EDB7EF8387D2",
 "transparencyActive": true,
 "width": 30,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_CC430A08_E27F_A29F_41E8_EDB7EF8387D2.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_CC430A08_E27F_A29F_41E8_EDB7EF8387D2_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "class": "IconButton"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_E9F444BC_D6FE_6432_41E6_7A290F8DCA6F",
   "pitch": -0.24,
   "yaw": 28.03,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C, this.camera_A013A671_E22F_A371_41C1_2B71A0EE69F7); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FE5602BA_D69E_3C36_41D5_2F50A36BC306",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 28.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_E9F4F4BC_D6FE_6432_41CB_43A2684A8A2D",
   "pitch": -0.83,
   "yaw": -41.99,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB, this.camera_A022467B_E22F_A371_41E7_0502CAB77F7F); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FFB2485E_D69E_2C6E_41E9_75E59D1C1EB4",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -41.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_E9F514BC_D6FE_6432_41D0_A02021D838BD",
   "pitch": -0.44,
   "yaw": 133.46,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F, this.camera_A0320686_E22F_A393_41EB_34C7CB77D63D); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FF37027E_D69E_1C2E_41E3_17C6583BCE3A",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 133.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.36,
   "image": "this.AnimatedImageResource_E9F5A4BD_D6FE_6432_41B9_05BA55F51FB4",
   "pitch": -3.4,
   "yaw": -179.86,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736, this.camera_A0C45691_E22F_A3B1_41A1_A178CCF1E360); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FF501C7C_D69E_2432_41C7_5434C70EAFDF",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.36,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_E98FC4B4_D6FE_6432_41E8_B58C17CA72A1",
   "pitch": 0.16,
   "yaw": -23.2,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB, this.camera_A16C36FA_E22F_A370_418E_CDC4969D75D3); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D9FBA56E_D662_642E_41D5_3B56E989874F",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -23.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_E9F014B4_D6FE_6432_41DF_B9993ED49E13",
   "pitch": -2.02,
   "yaw": 70.75,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8, this.camera_A17E6704_E22F_A290_41E8_95E3197CF610); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D992203B_D662_3C35_41DD_CEBC4B2A3FF0",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 70.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F10FEDE1_E0F5_2BCD_41B3_B001BD2EFB69",
   "pitch": -0.63,
   "yaw": 15.17,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12, this.camera_A3D4C5E6_E22F_A190_41D2_2F62ED2A56D4); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF3B17D0_E0F5_E7CB_41D3_6E11A79CE643",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 15.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F10C7DE2_E0F5_2BCF_41E7_8F78208558E3",
   "pitch": 0.16,
   "yaw": -77.4,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736, this.camera_A3C415DB_E22F_A1B0_41D7_FA18BEAA3E70); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF3BF7D0_E0F5_E7CB_4192_1DDDD62A890E",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -77.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F10CADE2_E0F5_2BCF_419D_73032259F698",
   "pitch": -2.61,
   "yaw": 108.14,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064, this.camera_A3E605F1_E22F_A170_41EB_E8DCC22BFE31); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF3BC7D0_E0F5_E7CB_41BB_AA82A3E83041",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 108.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F10AFDDF_E0F5_2BF5_41E9_2ACD5FF21646",
   "pitch": 1.94,
   "yaw": 40.09,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB, this.camera_A3641586_E22F_A190_41E6_3D010C641B86); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F0ED62EA_E0EB_19DF_41CF_3472910299C6",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 40.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F10B2DDF_E0F5_2BF5_41E1_FC32A5BA2624",
   "pitch": -1.42,
   "yaw": 157.39,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304, this.camera_A303D5A6_E22F_A190_41DA_A8F1CC885434); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F0EC92EA_E0EB_19DF_41D3_09E71FB18EE3",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 157.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F10B8DDF_E0F5_2BF5_41EB_B3C598381361",
   "pitch": -2.02,
   "yaw": -133.97,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB, this.camera_A30CE59B_E22F_A1B0_41C0_E6714C0AD8D7); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F0ECA2EA_E0EB_19DF_41BC_346ACF9578A7",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -133.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F1081DDF_E0F5_2BF5_41E2_CF2F52FA860D",
   "pitch": -2.41,
   "yaw": -45.36,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75, this.camera_A37B1590_E22F_A1B0_41E6_3EB54B05678E); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F0ECC2EA_E0EB_19DF_41E4_97CE5FEADDDD",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -45.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0,
 "id": "IconButton_CC433A08_E27F_A29F_41AB_32E6632BA7E8",
 "transparencyActive": true,
 "width": 30,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_CC433A08_E27F_A29F_41AB_32E6632BA7E8.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "class": "IconButton"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "IconButton Hs visibility"
 },
 "paddingLeft": 0,
 "id": "IconButton_CC431A08_E27F_A29F_41D1_701E3CA4FBCA",
 "transparencyActive": true,
 "width": 30,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_CC431A08_E27F_A29F_41D1_701E3CA4FBCA.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_CC431A08_E27F_A29F_41D1_701E3CA4FBCA_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "class": "IconButton"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "paddingLeft": 0,
 "id": "IconButton_CC40FA08_E27F_A29F_41E9_C25E1D6AB514",
 "transparencyActive": true,
 "width": 34,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_CC40FA08_E27F_A29F_41E9_C25E1D6AB514.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 34,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_CC40FA08_E27F_A29F_41E9_C25E1D6AB514_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "class": "IconButton"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F11D4DD8_E0F5_2BFB_41BC_E12C549CCF3F",
   "pitch": 0.55,
   "yaw": 10.82,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B, this.camera_A001B666_E22F_A293_41EA_1C8C4A3C4968); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EE2F8C53_E0EE_E8CD_41C0_8BC5EDDBBD02",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 10.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F11DFDD9_E0F5_2BFD_41C4_87C85CC62F18",
   "pitch": 1.15,
   "yaw": -92.63,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4, this.camera_A071C65B_E22F_A2B1_41E8_9D02DA9F592E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EE2F9C53_E0EE_E8CD_41E7_D215348D9860",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -92.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "bleaching": 0,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 34.02,
 "yaw": -180,
 "id": "overlay_EE2F7C53_E0EE_E8CD_41A3_DA04AFA1C399",
 "bleachingDistance": 0.7
},
{
 "bleaching": 0.29,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 33.82,
 "yaw": 23.34,
 "id": "overlay_F36DB451_E0EB_38CD_41E5_5D25825B0904",
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_E9F7A4BE_D6FE_642E_41E6_2331C7EBFD6F",
   "pitch": -2.61,
   "yaw": 173.22,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552, this.camera_A33F55C6_E22F_A190_41D3_E09206E5AC99); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F824158E_D6EE_24EE_41AE_8795B457D887",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 173.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_E9F7D4BE_D6FE_642E_41E0_467C0D6C346B",
   "pitch": -0.04,
   "yaw": -12.72,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C, this.camera_A33005D1_E22F_A1B0_41DC_FB1E394036CB); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F8192E54_D6EE_2472_41B1_AB23995F8B16",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -12.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.36,
   "image": "this.AnimatedImageResource_A30D09F3_D898_5B71_418E_4B4C1E375F17",
   "pitch": -3.4,
   "yaw": -130.41,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064, this.camera_A353257B_E22F_A170_41CC_31B0C2E9118A); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B60F1057_D899_C8B2_41EA_84C57F18B859",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.36,
   "yaw": -130.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_A30DC9F3_D898_5B71_41DB_7B94A600D163",
   "pitch": -0.24,
   "yaw": 139,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB, this.camera_A35CE571_E22F_A170_41E5_B05CC5D2E0EE); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B7B1563B_D898_48F2_41E0_E5BE32E08258",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 139,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F1037DDA_E0F5_2BFF_41A4_FB5AA6F27A98",
   "pitch": 1.15,
   "yaw": -87.49,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B3E48966_D887_D892_41C3_315A48960574, this.camera_A3A8B61B_E22F_A2B1_41CD_D082F9B7CC57); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F0D478DE_E0EF_69F7_41C4_22E57C825649",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -87.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F103ADDA_E0F5_2BFF_41E3_2A3B2B31F94D",
   "pitch": -2.41,
   "yaw": 13.39,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552, this.camera_A3988611_E22F_A2B0_41B7_1AEDAD821EB2); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F0D468DE_E0EF_69F7_41C3_B265A919D410",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 13.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_E9F844BE_D6FE_642E_41D3_94235D2631EC",
   "pitch": -1.23,
   "yaw": 179.74,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F, this.camera_A2DE44F1_E22F_A771_41E4_7F1A7822C679); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FB75B3DE_D6EE_1C6E_41E2_C45585688EB6",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 179.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_E9F894BE_D6FE_642E_41E5_4207DB084220",
   "pitch": -0.24,
   "yaw": -70.67,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB, this.camera_A2C674E6_E22F_A793_41E9_799D6411E736); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F82422BB_D6EE_1C36_41A3_51C9FEE60B79",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -70.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.36,
   "image": "this.AnimatedImageResource_E9F6F4BD_D6FE_6432_41D6_0CF168DC6A8B",
   "pitch": -3.01,
   "yaw": 170.45,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F, this.camera_A2FB551C_E22F_A6B7_41CF_B0B1BC629784); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E6E988BD_D6E2_2C32_41D6_81C760A31907",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.36,
   "yaw": 170.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_E9F764BE_D6FE_642E_41DA_2132224EEFBB",
   "pitch": -2.41,
   "yaw": -3.82,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736, this.camera_A2E58512_E22F_A6B3_4180_91AF28FA2662); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E63BCB83_D6E3_ECD6_41C6_48F079FE8349",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -3.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F1001DDB_E0F5_2BFD_41E7_23222B770EC3",
   "pitch": -0.63,
   "yaw": 93.11,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C, this.camera_A0D4769B_E22F_A3B1_41E5_AB2AB893D7D5); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EFD38152_E0EE_F8CF_41D4_DB151F15EF31",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 93.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F1006DDB_E0F5_2BFD_41E7_D0AA027ADC8E",
   "pitch": 0.16,
   "yaw": 179.74,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4, this.camera_A0E656A6_E22F_A393_41D6_4425E22B0CC8); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EFD36152_E0EE_F8CF_41D2_E3F34A2B39A3",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 179.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F1016DDB_E0F5_2BFD_41E9_397DA1EA65ED",
   "pitch": 0.75,
   "yaw": 23.87,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284, this.camera_A32825BB_E22F_A1F0_41E0_22DD8A6AFAE1); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EFD160F5_E0ED_19B5_418F_634DA43354E1",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 23.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F101CDDB_E0F5_2BFD_41EA_F5D6C9B9D5CF",
   "pitch": 0.36,
   "yaw": -153.16,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C, this.camera_A314A5B0_E22F_A1F0_41A2_5E1907F524BC); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EFD170F5_E0ED_19B5_41E2_545F77883C95",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -153.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F1096DE0_E0F5_2BCB_41C6_88D2422E9BCD",
   "pitch": -2.41,
   "yaw": 71.15,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B, this.camera_A0BA06DA_E22F_A3B0_41D4_8B92D0F26191); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF36CAC1_E0F5_29CD_41B7_B785E8CB4B92",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 71.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F109CDE0_E0F5_2BCB_41C1_2905754E0D0A",
   "pitch": -0.63,
   "yaw": -21.42,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C, this.camera_A0A8F6CF_E22F_A390_41DB_64409066FA77); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF36DAC1_E0F5_29CD_41CC_1D15EF486ED6",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -21.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F1079DDC_E0F5_2BFB_41C4_23DD7F49144D",
   "pitch": 0.16,
   "yaw": 1.52,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284, this.camera_A34B4566_E22F_A690_41D1_F4E1C153D2EE); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF652F1C_E0EA_E87B_41B4_69AD741AF946",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 1.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F107FDDC_E0F5_2BFB_41E5_3A10AADAFC3C",
   "pitch": 0.95,
   "yaw": -179.86,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C, this.camera_A2B7D55B_E22F_A6B0_41E8_13D042B6243E); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF650F1C_E0EA_E87B_41D7_E760E44DE5E1",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F100BDDB_E0F5_2BFD_41EB_109F534D406B",
   "pitch": 2.53,
   "yaw": 1.72,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020, this.camera_A2D674FC_E22F_A777_41E1_9226B78E0735); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EFA690BB_E0ED_79BD_41E5_BA28CFFC1D3D",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 1.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F1011DDB_E0F5_2BFD_41E1_97ABDDD4F440",
   "pitch": -1.82,
   "yaw": -179.86,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12, this.camera_A2ECB507_E22F_A691_41C4_B9FA9B043D85); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EFA680BB_E0ED_79BD_41DE_F0C18FFDE422",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_E9F5C4BD_D6FE_6432_41D4_5293016914DA",
   "pitch": 0.55,
   "yaw": -11.73,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F, this.camera_A0F616B0_E22F_A3F0_41E5_DE7B4ECEBF84); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E737B423_D6E1_FBD5_41B1_D31D1C7E5228",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -11.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_E9F614BD_D6FE_6432_41D4_1427BE5D5D68",
   "pitch": 2.14,
   "yaw": -98.76,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304, this.camera_A09876C5_E22F_A390_41E3_E594EDBB2C70); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E7602A12_D6E1_EFF6_41D4_855C85398F9E",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -98.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_E9F6B4BD_D6FE_6432_41AB_820290F195E8",
   "pitch": -0.83,
   "yaw": 172.23,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552, this.camera_A08856BA_E22F_A3F0_41DE_C6C922C62CF2); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E4B41C23_D6E6_2BD6_41B6_E85C57AAF313",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 172.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F1042DDC_E0F5_2BFB_41DB_B29B085FBF6C",
   "pitch": 0.36,
   "yaw": -173.73,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F, this.camera_A3F945FB_E22F_A170_41D3_FE6A7B190FE7); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF92E57D_E0EB_78B0_41D9_632E86B60499",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -173.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F1049DDD_E0F5_2BF5_41E7_A13C73CB9712",
   "pitch": 1.35,
   "yaw": 1.33,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8, this.camera_A3896606_E22F_A290_41C9_B9CFDE2B5674); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF92D582_E0EB_784F_41B2_8279B4C7CC8D",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 1.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F1063DDB_E0F5_2BFD_41E1_BAD4C8716B18",
   "pitch": 1.35,
   "yaw": 1.33,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F, this.camera_A06F1646_E22F_A293_41C7_2FDA4A0AC4B5); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EFAF43D7_E0ED_1FF5_41D5_04D3AAD5DEB2",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 1.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F1069DDC_E0F5_2BFB_4188_DF6E183D1A10",
   "pitch": -0.04,
   "yaw": 179.74,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020, this.camera_A07F8651_E22F_A2B1_41E9_ED9C8BAB4E7D); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EFAF63D7_E0ED_1FF5_41EA_87B3D4B37514",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": 179.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F10E2DE0_E0F5_2BCB_41E4_429BB99A119B",
   "pitch": -1.42,
   "yaw": 45.44,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064, this.camera_A2A0F550_E22F_A6B0_41C0_159E188A4FC0); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF33C049_E0F5_18DD_41D5_930A8764C3DC",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 45.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F10E9DE1_E0F5_2BCD_41DE_9A018463E425",
   "pitch": 1.35,
   "yaw": -61.58,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C, this.camera_A285C531_E22F_A6F1_416E_666A8A3D40B1); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF33D049_E0F5_18DD_41AA_DDC6CAC17112",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -61.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.36,
   "image": "this.AnimatedImageResource_F10EFDE1_E0F5_2BCD_41E4_F5C23F4A0688",
   "pitch": -2.81,
   "yaw": 111.11,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B3E48966_D887_D892_41C3_315A48960574, this.camera_A2AF0545_E22F_A690_41E5_0FE0C661B9A2); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF33E049_E0F5_18DD_41DF_E288EF8FB96E",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.36,
   "yaw": 111.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F10F5DE1_E0F5_2BCD_41DF_5F634ACA660E",
   "pitch": -0.44,
   "yaw": -18.45,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304, this.camera_A28FD527_E22F_A691_4155_DD500A7A3700); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF33F049_E0F5_18DD_41EA_18B05CFF5EBF",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -18.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F10FBDE1_E0F5_2BCD_41D7_7E79CFD694BD",
   "pitch": -0.24,
   "yaw": -155.93,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B, this.camera_A298753B_E22F_A6F0_41A7_4195BC95B9FE); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF33A049_E0F5_18DD_41E6_FBF25D37E433",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -155.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F1084DE0_E0F5_2BCB_41CC_39E876EC3BEA",
   "pitch": -1.62,
   "yaw": -4.41,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB, this.camera_A04D0631_E22F_A2F1_41DF_8497A9DC3BDB); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF2326B7_E0EB_19B5_41EB_A2039B27F85B",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -4.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F108DDE0_E0F5_2BCB_41E3_35F396E876BC",
   "pitch": -0.04,
   "yaw": -90.45,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75, this.camera_A3BAA626_E22F_A293_41C5_25E6A0C86CD6); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF2336B7_E0EB_19B5_41DF_B180CE6E8762",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -90.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F1093DE0_E0F5_2BCB_41AC_A7E9902925B8",
   "pitch": -2.22,
   "yaw": 175.98,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8, this.camera_A05DD63B_E22F_A2F1_41E5_43F4996AFA8E); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF22D6B7_E0EB_19B5_41DE_09CD80078930",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 175.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.38,
   "image": "this.AnimatedImageResource_F106DDDC_E0F5_2BFB_41CE_247FD4199015",
   "pitch": -0.04,
   "yaw": -178.87,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284, this.camera_A15C06EF_E22F_A390_41D4_429C774AE938); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EFB919BA_E0ED_6BBF_41E2_AAA758CF5B00",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.38,
   "yaw": -178.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": "this.AnimatedImageResource_F1073DDC_E0F5_2BFB_41C8_EB7A54473B0D",
   "pitch": 0.95,
   "yaw": 0.14,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E, this.camera_A14A36E5_E22F_A390_41D1_E40314AD182F); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EFB909BA_E0ED_6BBF_41DE_C12A32E0A53E",
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 0.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_CC42CA07_E27F_A291_41DC_D92D42459DFA",
  "this.IconButton_CC42BA07_E27F_A291_41E4_1B7C7583C9B4"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_CC42DA07_E27F_A291_41D6_C70E107F2238",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_CC429A07_E27F_A291_41C3_063533F68113"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_CC42AA07_E27F_A291_41EA_8968FDAE6E2B",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F444BC_D6FE_6432_41E6_7A290F8DCA6F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F4F4BC_D6FE_6432_41CB_43A2684A8A2D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F514BC_D6FE_6432_41D0_A02021D838BD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F5A4BD_D6FE_6432_41B9_05BA55F51FB4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0D56B7_D662_E43E_41E3_9BA20087D304_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E98FC4B4_D6FE_6432_41E8_B58C17CA72A1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F014B4_D6FE_6432_41DF_B9993ED49E13",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC13D797_D663_E4FE_41C7_E02065D7B1D4_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F10FEDE1_E0F5_2BCD_41B3_B001BD2EFB69",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F10C7DE2_E0F5_2BCF_41E7_8F78208558E3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F10CADE2_E0F5_2BCF_419D_73032259F698",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF3B37D0_E0F5_E7CB_41E1_68F0C4D22552_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F10AFDDF_E0F5_2BF5_41E9_2ACD5FF21646",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F10B2DDF_E0F5_2BF5_41E1_FC32A5BA2624",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F10B8DDF_E0F5_2BF5_41EB_B3C598381361",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1081DDF_E0F5_2BF5_41E2_CF2F52FA860D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F0ED52EA_E0EB_19DF_41E7_53EF5A422C4C_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F11D4DD8_E0F5_2BFB_41BC_E12C549CCF3F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F11DFDD9_E0F5_2BFD_41C4_87C85CC62F18",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EE2E1C52_E0EE_E8CF_41E3_CCC89365C8A8_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F7A4BE_D6FE_642E_41E6_2331C7EBFD6F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F7D4BE_D6FE_642E_41E0_467C0D6C346B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0DF380_D662_1CD2_41C7_60C4ED8BFD12_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_A30D09F3_D898_5B71_418E_4B4C1E375F17",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_A30DC9F3_D898_5B71_41DB_7B94A600D163",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B3E48966_D887_D892_41C3_315A48960574_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1037DDA_E0F5_2BFF_41A4_FB5AA6F27A98",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F103ADDA_E0F5_2BFF_41E3_2A3B2B31F94D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F0D418DE_E0EF_69F7_41B8_53B819CD8064_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F844BE_D6FE_642E_41D3_94235D2631EC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F894BE_D6FE_642E_41E5_4207DB084220",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0DFF52_D662_2476_41A8_5BCD9876BC0F_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F6F4BD_D6FE_6432_41D6_0CF168DC6A8B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F764BE_D6FE_642E_41DA_2132224EEFBB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0D0A56_D662_EC7F_41E0_4BB358B3EA4F_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1001DDB_E0F5_2BFD_41E7_23222B770EC3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1006DDB_E0F5_2BFD_41E7_D0AA027ADC8E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFD3A152_E0EE_F8CF_41E7_55064D06F0BB_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1016DDB_E0F5_2BFD_41E9_397DA1EA65ED",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F101CDDB_E0F5_2BFD_41EA_F5D6C9B9D5CF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFD090F5_E0ED_19B5_41D6_69ECE9D91020_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1096DE0_E0F5_2BCB_41C6_88D2422E9BCD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F109CDE0_E0F5_2BCB_41C1_2905754E0D0A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF36BAC1_E0F5_29CD_41E6_63E0420F1F75_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1079DDC_E0F5_2BFB_41C4_23DD7F49144D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F107FDDC_E0F5_2BFB_41E5_3A10AADAFC3C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF654F1C_E0EA_E87B_41D7_FAB2151B98C5_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F100BDDB_E0F5_2BFD_41EB_109F534D406B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1011DDB_E0F5_2BFD_41E1_97ABDDD4F440",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFA6A0BB_E0ED_79BD_41D5_CF4A3EB75B7C_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F5C4BD_D6FE_6432_41D4_5293016914DA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F614BD_D6FE_6432_41D4_1427BE5D5D68",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E9F6B4BD_D6FE_6432_41AB_820290F195E8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC0D5168_D662_FC52_41D2_7AC6DFC6B736_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1042DDC_E0F5_2BFB_41DB_B29B085FBF6C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1049DDD_E0F5_2BF5_41E7_A13C73CB9712",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF92957D_E0EB_78B5_41E0_ADFA8E58BB8E_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1063DDB_E0F5_2BFD_41E1_BAD4C8716B18",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1069DDC_E0F5_2BFB_4188_DF6E183D1A10",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFAF23D6_E0ED_1FF4_41C4_5B9C69D11284_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F10E2DE0_E0F5_2BCB_41E4_429BB99A119B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F10E9DE1_E0F5_2BCD_41DE_9A018463E425",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F10EFDE1_E0F5_2BCD_41E4_F5C23F4A0688",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F10F5DE1_E0F5_2BCD_41DF_5F634ACA660E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F10FBDE1_E0F5_2BCD_41D7_7E79CFD694BD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF332049_E0F5_18DD_41C0_9F9A013668FB_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1084DE0_E0F5_2BCB_41CC_39E876EC3BEA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F108DDE0_E0F5_2BCB_41E3_35F396E876BC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1093DE0_E0F5_2BCB_41AC_A7E9902925B8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF2316B7_E0EB_19B5_41D8_73EBF00EA41B_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F106DDDC_E0F5_2BFB_41CE_247FD4199015",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1073DDC_E0F5_2BFB_41C8_EB7A54473B0D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFB9C9BA_E0ED_6BBF_41E4_9E3AEA00400F_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_CC42CA07_E27F_A291_41DC_D92D42459DFA",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 36,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container"
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "data": {
  "name": "IconButton arrow"
 },
 "left": 10,
 "paddingLeft": 0,
 "id": "IconButton_CC42BA07_E27F_A291_41E4_1B7C7583C9B4",
 "transparencyActive": true,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_CC42BA07_E27F_A291_41E4_1B7C7583C9B4.png",
 "horizontalAlign": "center",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "top": "40%",
 "click": "this.setComponentVisibility(this.Container_CC42AA07_E27F_A291_41EA_8968FDAE6E2B, true, 0, this.effect_4D25D616_570D_66CE_41A8_E15436E28685, 'showEffect', false); this.setComponentVisibility(this.Container_CC42DA07_E27F_A291_41D6_C70E107F2238, false, 0, this.effect_4DD0850A_570D_5AC6_41BA_D356800A651E, 'hideEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_CC42BA07_E27F_A291_41E4_1B7C7583C9B4_rollover.png",
 "shadow": false,
 "propagateClick": true,
 "class": "IconButton"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container"
 },
 "children": [
  "this.Container_CC437A08_E27F_A29F_41D2_B8C6C9E87661",
  "this.IconButton_CC40DA08_E27F_A29F_41C3_9356F5E5B8E8",
  "this.Image_F8BC1F97_E11A_E875_41E5_02E717C68490",
  "this.Image_C2B9EB13_E12D_684D_41E7_867F35477A19",
  "this.Image_F82581D6_E115_3BF7_41A6_C3078B79F45D",
  "this.Image_F8B1307F_E11B_18B5_41D0_6E0829864A91"
 ],
 "id": "Container_CC429A07_E27F_A291_41C3_063533F68113",
 "left": "0%",
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "paddingRight": 40,
 "scrollBarVisible": "rollOver",
 "width": 300,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 40,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_CC436A08_E27F_A29F_41E1_94EA7083BCED",
  "this.Container_CC435A08_E27F_A29F_41E6_FD839BD103E1"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_CC437A08_E27F_A29F_41D2_B8C6C9E87661",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "height": 58,
 "top": "0%",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container"
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "data": {
  "name": "BOT\u00c3O DE BAIXO "
 },
 "id": "IconButton_CC40DA08_E27F_A29F_41C3_9356F5E5B8E8",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "width": 42,
 "borderSize": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_CC40DA08_E27F_A29F_41C3_9356F5E5B8E8.png",
 "horizontalAlign": "center",
 "bottom": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 42,
 "click": "this.setComponentVisibility(this.Container_CC42AA07_E27F_A291_41EA_8968FDAE6E2B, false, 0, this.effect_D38AAEEE_E26D_A390_41E0_0EEFA9A37CE7, 'hideEffect', false); this.setComponentVisibility(this.Container_CC42DA07_E27F_A291_41D6_C70E107F2238, true, 0, this.effect_4DDFE816_570D_AAC1_41BE_ED754EBAE851, 'showEffect', false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_CC40DA08_E27F_A29F_41C3_9356F5E5B8E8_rollover.png",
 "shadow": false,
 "class": "IconButton",
 "propagateClick": true
},
{
 "cursor": "hand",
 "maxHeight": 200,
 "maxWidth": 200,
 "data": {
  "name": "SITE"
 },
 "id": "Image_F8BC1F97_E11A_E875_41E5_02E717C68490",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "9.09%",
 "borderSize": 0,
 "url": "skin/Image_F8BC1F97_E11A_E875_41E5_02E717C68490.png",
 "minHeight": 200,
 "horizontalAlign": "center",
 "bottom": "47.65%",
 "verticalAlign": "middle",
 "minWidth": 200,
 "top": "40.19%",
 "click": "this.openLink('https://cearadiesel.com.br/', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "class": "Image"
},
{
 "cursor": "hand",
 "maxHeight": 200,
 "maxWidth": 200,
 "data": {
  "name": "FACE"
 },
 "left": "0.37%",
 "paddingLeft": 0,
 "id": "Image_C2B9EB13_E12D_684D_41E7_867F35477A19",
 "right": "8.72%",
 "paddingRight": 0,
 "borderSize": 0,
 "url": "skin/Image_C2B9EB13_E12D_684D_41E7_867F35477A19.png",
 "minHeight": 200,
 "horizontalAlign": "center",
 "bottom": "30.65%",
 "verticalAlign": "middle",
 "minWidth": 200,
 "top": "45.4%",
 "click": "this.openLink('https://www.facebook.com/CearaDiesel', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "class": "Image"
},
{
 "cursor": "hand",
 "maxHeight": 200,
 "maxWidth": 200,
 "data": {
  "name": "INSTA"
 },
 "left": "0%",
 "paddingLeft": 0,
 "id": "Image_F82581D6_E115_3BF7_41A6_C3078B79F45D",
 "right": "9.09%",
 "paddingRight": 0,
 "borderSize": 0,
 "url": "skin/Image_F82581D6_E115_3BF7_41A6_C3078B79F45D.png",
 "minHeight": 200,
 "horizontalAlign": "center",
 "bottom": "20.01%",
 "verticalAlign": "middle",
 "minWidth": 200,
 "top": "56.04%",
 "click": "this.openLink('https://www.instagram.com/cearadiesel/?hl=pt-br', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "class": "Image"
},
{
 "cursor": "hand",
 "maxHeight": 200,
 "maxWidth": 200,
 "data": {
  "name": "ZAP"
 },
 "id": "Image_F8B1307F_E11B_18B5_41D0_6E0829864A91",
 "left": "0.21%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "8.89%",
 "borderSize": 0,
 "url": "skin/Image_F8B1307F_E11B_18B5_41D0_6E0829864A91.png",
 "minHeight": 200,
 "horizontalAlign": "center",
 "bottom": "54.05%",
 "verticalAlign": "middle",
 "minWidth": 200,
 "top": "23.79%",
 "click": "this.openLink('http://api.whatsapp.com/send?phone=558596250300&text=Quero%20informações', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "class": "Image"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "blue line"
 },
 "id": "Container_CC436A08_E27F_A29F_41E1_94EA7083BCED",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 40,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container"
},
{
 "data": {
  "name": "-Container settings"
 },
 "children": [
  "this.IconButton_CC433A08_E27F_A29F_41AB_32E6632BA7E8",
  "this.IconButton_CC432A08_E27F_A29F_41D4_41B133F6FB83",
  "this.IconButton_CC431A08_E27F_A29F_41D1_701E3CA4FBCA",
  "this.IconButton_CC430A08_E27F_A29F_41E8_EDB7EF8387D2",
  "this.IconButton_CC40FA08_E27F_A29F_41E9_C25E1D6AB514"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_CC435A08_E27F_A29F_41E6_FD839BD103E1",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "height": 40,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 16,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container"
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_CC40FA08_E27F_A29F_41E9_C25E1D6AB514], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_CC432A08_E27F_A29F_41D4_41B133F6FB83].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player538"
 },
 "children": [
  "this.MainViewer",
  "this.HTMLText_CE406E30_D788_588E_41DB_C9D11AB7591A",
  "this.Image_FCBDEA0D_D798_5891_41C0_0A48493E53D4",
  "this.Image_EF07730E_E095_3694_41D8_A65966A1CF99",
  "this.Container_CC40CA08_E27F_A29F_41E1_92E708901110"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_CC432A08_E27F_A29F_41D4_41B133F6FB83",
 "scripts": {
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "minWidth": 20,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_CC430A08_E27F_A29F_41E8_EDB7EF8387D2",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Player",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
