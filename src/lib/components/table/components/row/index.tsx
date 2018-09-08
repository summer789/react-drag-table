import React, { Component, Fragment, MouseEvent } from 'react';
import classnames from 'classnames';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import Col from '../col';
import { DataItem } from '../../../data';
import { ColumnsProps } from '../../interface';

export interface RowProps {
    data: DataItem;
    columns: ColumnsProps<DataItem>[];
    provided: DraggableProvided;
    snapshot: DraggableStateSnapshot;
    onRowclick: (item: any) => void;
}

class Row extends Component<RowProps> {
    handleRowclick = (e: MouseEvent<HTMLTableRowElement>, item: any) => {
        e.stopPropagation();
        this.props.onRowclick(item);
    }
    render() {
        const { provided, snapshot, data, columns } = this.props;
        const { isDragging } = snapshot;
        const trCls = classnames({
            'react-drag-table-tbody-tr': true,
            'react-drag-table-tbody-tr-drap': isDragging,
        })
        return (
            <Fragment>
                <tr
                    ref={provided.innerRef}
                    className={trCls}
                    style={{ userSelect: 'none', padding: 40 }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={(e) => this.handleRowclick(e, data)}
                >
                    {
                        columns.map((column, index) => {
                            return (
                                <Col
                                    key={column.key}
                                    data={data}
                                    colItem={column}
                                    index={index}
                                    isDragging={isDragging}
                                />
                            )
                        })
                    }
                </tr>
                {
                    provided.placeholder ? (
                        <tr>
                            <td
                                style={{ padding: 0, transform: "translate(0px, 20px)" }}
                            >
                                {provided.placeholder}
                            </td>
                        </tr>
                    ) : null
                }
            </Fragment>
        );
    }
}

export default Row;