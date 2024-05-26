import React, { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

interface Heading {
    id: string
    text: string
}

const useHeadingsData = () => {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll("h1"))
            .map((elem) => ({
		id: elem.id,
                text: elem.innerText,
            }))
        setHeadings(headingElements)
    }, []);

    return { headings };
};

const TableOfContents: FunctionComponent<{}> = () => {
    const { headings } = useHeadingsData();

    return (
        <nav aria-label="Table of contents">
	    <ul>
            {headings.map((heading) => (
		<li key={heading.text}>
                    <a href={`#${heading.id}`}>{heading.text}</a>
		    </li>))}
	</ul>
        </nav>
    );
};

export default TableOfContents;