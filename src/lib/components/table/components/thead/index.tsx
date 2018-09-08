import React, { HtmlHTMLAttributes } from 'react';
import { Title } from '../../interface';

interface TheadProps extends HtmlHTMLAttributes<HTMLTableHeaderCellElement> {
    titles: Title[];
}

const Thead = (props: TheadProps) => {
    const { titles } = props;
    return (
        <thead>
            <tr>
                {
                    titles.map((item, index) => {
                        return <th key={index}> {item}</th>
                    })
                }
            </tr>
        </thead>
    );
}

export default Thead;