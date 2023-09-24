export interface DLResult {
  status: "success" | "error"
  message?: string
  result?: {
    type: "video" | "image"
    id: string
    createTime: number
    description: string
    author: Author
    statistics: Statistics
    video?: string[]
    cover?: string[]
    dynamic_cover?: string[]
    images?: string[]
    music: string[]
  }
}

export interface Author {
  uid: number
  username: string
  nickname: string
  signature: string
  birthday: string
  region: string
}

export interface Statistics {
  playCount: number
  downloadCount: number
  shareCount: number
  commentCount: number
  likeCount: number
  favoriteCount: number
}

export interface StalkResult {
  status: "success" | "error"
  message?: string
  result?: {
    users: Users
    stats: Stats,
    videos: VideoInfo
  }
}

export interface Users {
  username: string
  nickname: string
  avatar: string
  signature: string
  verified: boolean
  region: string
}

export interface Stats {
  followerCount: number
  followingCount: number
  heartCount: number
  videoCount: number
  likeCount: number
}

export interface VideoInfo {
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
