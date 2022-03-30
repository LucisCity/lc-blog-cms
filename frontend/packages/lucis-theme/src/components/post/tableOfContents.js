import React, { useEffect, useState } from "react"
import { connect } from "frontity"
import { TableOfContentsContainer } from "../../styles/post"

const TableOfContents = ({ state }) => {
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
    <TableOfContentsContainer padding="20px 30px">
      <nav aria-label="Table of contents">
        <ul>
          {nestedHeading.length > 0 && nestedHeading.map((heading, index) => {
            return (
              <li key={heading.id}>
                <AnchorItem data={heading} marker={index + 1 + '. '} />
                {heading.items.length > 0 && (
                  <ul className="childrens-heading">
                    {heading.items.map((item) => (
                      <li key={item.id}>
                        <AnchorItem data={item} marker="+" />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </TableOfContentsContainer>
  )
}

const AnchorItem = ({ data, marker }) => {
  const handleAnchorClick = (event, data) => {
    event.preventDefault()
    document.querySelector(`#${data.id}`)?.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <a
      href={`#${data.id}`}
      onClick={(event) => handleAnchorClick(event, data)}
    >
      <span>{marker}</span>
      <span>{data.title}</span>
    </a>
  )
}

export default connect(TableOfContents)