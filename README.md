# Tiktok Downloader

- Used to download videos, images, music from TikTok
- No login or password are required

## Installation

- @tobyg74/tiktok-api-dl requires Node.js v10+ to run.

### Install from NPM

```
npm install @tobyg74/tiktok-api-dl
```

### Install from YARN

```
yarn add @tobyg74/tiktok-api-dl
```

## Usage

### Tiktok Downloader

```js
const { TiktokDL } = require("@tobyg74/tiktok-api-dl")

const tiktok_url = "https://vt.tiktok.com/ZS84BnrU9"

TiktokDL(tiktok_url).then((result) => {
  console.log(result)
})
```

### Tiktok Profile

```js

const cookieString ='' +
  'tt_csrf_token=MY_TT_TOKEN;' +
  ' tt_chain_token=MY_TT_CHAIN_TOKEN;' +
  ' store-country-code=id;' +
  ' tt-target-idc=alisg;'


const { TiktokStalk } = require("@tobyg74/tiktok-api-dl")

const username = "tobz2k19"

TiktokStalk(username,cookieString).then((result) => {
  console.log(result)
})
```

or 

```js

const cookie = {
  tt_csrf_token: 'XXXXXXXXXXX',
  tt_chain_token: 'XXXXXXXXXXX',
}

const { TiktokStalk } = require("@tobyg74/tiktok-api-dl")

const username = "tobz2k19"

TiktokStalk(username,cookie).then((result) => {
  console.log(result)
})
```

### Set Custom user agent 

```js

const cookie = {
  tt_csrf_token: 'XXXXXXXXXXX',
  tt_chain_token: 'XXXXXXXXXXX',
}

const { TiktokStalk } = require("@tobyg74/tiktok-api-dl")

const username = "tobz2k19"
userAgent =  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36"
TiktokStalk(username,cookie,userAgent).then((result) => {
  console.log(result)
})
```

## Response

### Tiktok Downloader

```ts
{
  status: "success" | "error"
  message?: string
  result?: {
    type: "video" | "image"
    id: string
    createTime: number
    description: string
    author: {
      username: string
      nickname: string
      signature: string
      birthday: string
      region: string
    }
    statistics: {
      playCount: number
      downloadCount: number
      shareCount: number
      commentCount: number
      likeCount: number
      favoriteCount: number
    }
    video?: string[]
    cover?: string[]
    dynamic_cover?: string[]
    images?: string[]
    music: string[]
  }
}
```

### Tiktok Profile

```ts
{
  status: "success" | "error"
  message?: string
  result?: {
    users: {
      id: string;
      shortId: string;
      uniqueId: string;
      nickname: string;
      avatarLarger: string;
      avatarMedium: string;
      avatarThumb: string;
      signature: string;
      createTime: number;
      verified: boolean;
      secUid: string;
      ftc: boolean;
      relation: number;
      openFavorite: boolean;
      bioLink: Record<string, unknown>;
      commentSetting: number;
      commerceUserInfo: Record<string, unknown>; 
      duetSetting: number;
      stitchSetting: number;
      privateAccount: boolean;
      secret: boolean;
      isADVirtual: boolean;
      roomId: string;
      uniqueIdModifyTime: number;
      ttSeller: boolean;
      region: string;
      downloadSetting: number;
      profileTab: Record<string, unknown>; 
      followingVisibility: number;
      recommendReason: string;
      nowInvitationCardUrl: string;
      nickNameModifyTime: number;
      isEmbedBanned: boolean;
      canExpPlaylist: boolean;
      profileEmbedPermission: number;
      language: string;
      eventList: any[]; 
      extraInfo: Record<string, unknown>;
    },
    stats: {
      followerCount: number;
      followingCount: number;
      heart: number;
      heartCount: number;
      videoCount: number;
      diggCount: number;
      friendCount: number;
      needFix: boolean;
    },
    videos: {
      ID_VIDEO: {
        id: string;
        desc: string;
        createTime: string;
        scheduleTime: number;
        video: {
          id: string;
          height: number;
          width: number;
          duration: number;
          ratio: string;
          cover: string;
          originCover: string;
          dynamicCover: string;
          playAddr: string;
          downloadAddr: string;
          shareCover: string[];
          reflowCover: string;
          bitrate: number;
          encodedType: string;
          format: string;
          videoQuality: string;
          encodeUserTag: string;
          codecType: string;
          definition: string;
          subtitleInfos: any[];
          zoomCover: any;
          volumeInfo: any;
          bitrateInfo: number[];
        };
        author: string;
        music: {
          id: string;
          title: string;
          playUrl: string;
          coverLarge: string;
          coverMedium: string;
          coverThumb: string;
          authorName: string;
          original: boolean;
          duration: number;
          album: string;
          scheduleSearchTime: number;
          collected: boolean;
          preciseDuration: any;
        };
        challenges: any[][];
        stats: {
          diggCount: number;
          shareCount: number;
          commentCount: number;
          playCount: number;
          collectCount: string;
        };
        warnInfo: any[];
        originalItem: boolean;
        officalItem: boolean;
        textExtra: any[][];
        secret: boolean;
        forFriend: boolean;
        digged: boolean;
        itemCommentStatus: number;
        takeDown: number;
        effectStickers: any[];
        privateItem: boolean;
        stickersOnItem: any[];
        shareEnabled: boolean;
        comments: any[];
        duetDisplay: number;
        stitchDisplay: number;
        indexEnabled: boolean;
        locationCreated: string;
        contents: any[][];
        collected: boolean;
        channelTags: any[];
        nickname: string;
        authorId: string;
        authorSecId: string;
        avatarThumb: string;
        downloadSetting: number;
        authorPrivate: boolean;
        capcutAnchorsOriginal: any[];
        capcutAnchors: any[];
      }
    }
  }
}
```

### Collaborators

- [Nugraizy](https://github.com/nugraizy)
- [Aqul](https://github.om/zennn08)
