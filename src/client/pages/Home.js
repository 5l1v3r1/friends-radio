import React from 'react'

import Uploader from '../components/Uploader'
import MediaList, { withMedias } from '../components/MediaList'

import gql from 'graphql-tag'

const MEDIAS_QUERY = gql`
  query getMedias($skip: Int!) {
    medias(skip: $skip, limit: 50) {
      id
      title
      url
      thumbnail
      artist
      description
      posted_by {
        id
        name
      }
      myReaction {
        type
      }
    }
  }
`

const MediaListWithMedias = withMedias(MEDIAS_QUERY, 'homepage', [])(MediaList)

const Homepage = () => (
  <div>
    <Uploader />
    <MediaListWithMedias />
  </div>
)

export default Homepage