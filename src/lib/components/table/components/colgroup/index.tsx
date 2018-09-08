
import React, { HtmlHTMLAttributes } from 'react';

interface ColgroupProps extends HtmlHTMLAttributes<HTMLTableColElement> {
    widths: number[];
}

const Colgroup = (props: ColgroupProps) => {
    const { widths } = props;
    return (
        <colgroup>
            {
                widths.map((item, index) => (
                    <col key={index} style={{ width: item, minWidth: item }} />
                ))
            }
        </colgroup>
    )
}

export default Colgroup;