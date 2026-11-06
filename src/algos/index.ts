import { app } from '../lexicons/index.js'
import type { AppContext } from '../util/config.js'
import * as jaMedia from './ja-media'
import * as jaPosts from './ja-posts'
import * as jaVideos from './ja-videos'
import * as thinnedJaPosts from './thinned-ja-posts'

type AlgoHandler = (ctx: AppContext, params: app.bsky.feed.getFeedSkeleton.$Params) => Promise<app.bsky.feed.getFeedSkeleton.$OutputBody>

const algos: Record<string, AlgoHandler> = {
  [jaMedia.shortname]: jaMedia.handler,
  [jaPosts.shortname]: jaPosts.handler,
  [jaVideos.shortname]: jaVideos.handler,
  [thinnedJaPosts.shortname]: thinnedJaPosts.handler,
}

export default algos
