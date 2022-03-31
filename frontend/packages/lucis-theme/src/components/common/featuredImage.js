import React from "react"
import { connect, styled } from "frontity"
import Image from "@frontity/components/image";

const FeaturedImage = ({ state, id, ...rest }) => {
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
      style={{ display: 'block' }}
      src={media.source_url}
      srcSet={srcset}
      alt={media.alt_text}
      {...rest}
    />
  )
}

export default connect(FeaturedImage)