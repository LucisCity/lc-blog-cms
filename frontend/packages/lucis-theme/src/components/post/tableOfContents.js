import React, { useEffect, useState } from "react"
import { connect } from "frontity"
import { TableOfContentsContainer } from "../../styles/post"
import Link from "@frontity/components/link"

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
        headingArr[headingArr.length - 1].items.push({id: heading.id, title})
      }
    })
    setNestedHeading(headingArr)
  }, []);

  return (
    <TableOfContentsContainer
      aria-label="Table of contents"
      className="table-of-contents">
      <ul>
        {nestedHeading.length > 0 && nestedHeading.map((heading) => {
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${heading.id}`).scrollIntoView({
                    behavior: "smooth"
                  });
                }}
              >
                {heading.title}
              </a>
              {heading.items.length > 0 && (
                <ul style={{paddingLeft: "30px"}}>
                  {heading.items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(`#${item.id}`).scrollIntoView({
                            behavior: "smooth"
                          });
                        }}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </TableOfContentsContainer>
  )
}

export default connect(TableOfContents)