import React, { Component, CSSProperties, HtmlHTMLAttributes } from 'react';
import Colgroup from './components/colgroup';
import { ColumnsProps } from './interface';
import Thead from './components/thead';
import './index.pcss';

interface TableProps<T> extends HtmlHTMLAttributes<HTMLTableElement> {
    style?: CSSProperties;
    columns: ColumnsProps<T>[];
    dataSource: T[];
    renderTbody: (columns: ColumnsProps<T>[], dataSource: T[]) => React.ReactNode;
}

class Table<T> extends Component<TableProps<T>, any> {
    render() {
        const { style, columns, renderTbody, dataSource } = this.props;
        const widths = columns.map(item => item.width);
        const titles = columns.map(item => item.title);
        return (
            <table className="react-drag-table" style={style}>
                <Colgroup widths={widths} />
                <Thead titles={titles} />
                {renderTbody(columns, dataSource)}
            </table>
        );
    }
}

export default Table;