import { connect } from "frontity"
import React, { useEffect, useState } from "react"
import { TableOfContentsContainer } from "../../../styles/post"
import iconLink from "../../../images/link.svg"

/*
  Requirements:
  - The post must have at least an H2 tag

  TOC structure:
  - H2
    - H3, H4, H5, H6
  - H2
    - H3, H4, H5, H6
  ...
 */
const TableOfContents = ({ state }) => {
  const [nestedHeading, setNestedHeading] = useState([])

  useEffect(() => {
    const headings = Array.from(document.querySelector('#post-content').querySelectorAll('h2, h3, h4, h5, h6'))
    const headingsArr = []

    const getHeadingIdOrDefault = (heading, index) => {
      return heading.id ?? 'toc-hx-' + index;
    }

    headings.forEach((heading, index) => {
      const { textContent: title } = heading
      const id = getHeadingIdOrDefault(heading, index);
      if (heading.nodeName === 'H2') {
        headingsArr.push({ id, title, items: [] })
      } else if (heading.nodeName !== 'H2' && headingsArr.length > 0) {
        headingsArr[headingsArr.length - 1].items.push({ id, title })
      }
      if (!heading.id) {
        // Set id to the dom element
        heading.id = id;
      }
      heading.classList.add('anchor-heading')
      heading.insertAdjacentHTML('beforeend', `
        <a href="#${id}" class="anchor">
          <img src="${iconLink}" />
        </a>
      `)
    })

    setNestedHeading(headingsArr)
  }, [state.router.link])

  return (
    <TableOfContentsContainer padding="30px 30px 30px 20px">
      <nav aria-label="Table of contents">
        <ol>
          {nestedHeading.length > 0 && nestedHeading.map((heading) => {
            return (
              <li key={heading.id}>
                <AnchorItem data={heading} />
                {heading.items.length > 0 && (
                  <ul style={{ listStyle: 'disc', marginTop: '15px' }} className="childrens-heading">
                    {heading.items.map((item) => (
                      <li key={item.id}>
                        <AnchorItem data={item} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </TableOfContentsContainer>
  )
}

const AnchorItem = ({ data }) => {
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
      <span>{data.title}</span>
    </a>
  )
}

export default connect(TableOfContents)
