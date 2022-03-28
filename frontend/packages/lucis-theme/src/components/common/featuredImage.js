import React from "react"
import { connect } from "frontity"
import Image from "@frontity/components/image";

const FeaturedImage = ({ state, id }) => {
  const media = state.source.attachment[id]
  if (!media) return null
  const srcset = Object.values(media.media_details.sizes)
    .map(item => {[item.source_url, item.width]})
    .reduce(
      (final, current, index, array) =>
        final.concat(
          `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
        ),
      ""
    )
  
  return (
    <Image
      className="featured-image"
      src={media.source_url}
      srcSet={srcset}
      alt={media.alt_text}
    />
  )
}

export default connect(FeaturedImage)