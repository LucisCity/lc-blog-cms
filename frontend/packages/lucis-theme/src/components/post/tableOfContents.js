import React, { useEffect, useState } from "react"
import { connect } from "frontity"
import { TableOfContentsContainer } from "../../styles/post"
import Link from "@frontity/components/link"
import { BoxRoundedBlur } from "../../styles/common"

const TableOfContents = ({ state }) => {
  const data = state.source.get(state.router.link)
  const [nestedHeading, setNestedHeading] = useState([])

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3'))
    const headingArr = []

    headings.forEach((heading, index) => {
      const { innerText: title, id } = heading
      heading.id = `heading-${index}`
      if (heading.nodeName === 'H2') {
        headingArr.push({ id: heading.id, title, items: [] })
      } else if (heading.nodeName !== 'H2' && headingArr.length > 0) {
        headingArr[headingArr.length - 1].items.push({ id: heading.id, title })
      }
    })
    setNestedHeading(headingArr)
  }, []);

  return (
    <BoxRoundedBlur>
      <nav aria-label="Table of contents">
        <ul>
          {nestedHeading.length > 0 && nestedHeading.map((heading, index) => {
            return (
              <li key={heading.id}>
                <span>{index + 1}. </span>
                <AnchorItem data={heading} />
                {heading.items.length > 0 && (
                  <ul className="childrens-heading">
                    {heading.items.map((item) => (
                      <li key={item.id}>
                        <span>+ </span>
                        <AnchorItem data={item} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </BoxRoundedBlur>
  )
}

const AnchorItem = ({ data }) => {
  return (
    <a
      href={`#${data.id}`}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(`#${data.id}`).scrollIntoView({
          behavior: "smooth"
        });
      }}
    >
      {data.title}
    </a>
  )
}

export default connect(TableOfContents)