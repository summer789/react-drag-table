import React, { Component } from 'react';
import {
    Droppable,
    Draggable,
    DropResult,
    DragDropContext,
    DragDropContextProps,
    DragStart,
    HookProvided,
    DragUpdate,
} from 'react-beautiful-dnd';
import { DataItem } from '../../../data';
import { ColumnsProps } from '../../interface';
import Row from '../row';



interface TbodyProps extends DragDropContextProps {
    columns: ColumnsProps<DataItem>[];
    dataSource: DataItem[];
    onClickRow?: (item: DataItem) => void;
}

class Tbody extends Component<TbodyProps> {
    onDragStart = (initial: DragStart, provided: HookProvided) => {
        const { onDragStart } = this.props;
        if (onDragStart) {
            onDragStart(initial, provided);
        }
    }
    onDragUpdate = (initial: DragUpdate, provided: HookProvided) => {
        const { onDragUpdate } = this.props;
        if (onDragUpdate) {
            onDragUpdate(initial, provided);
        }
    }

    onDragEnd = (result: DropResult, provided: HookProvided) => {
        this.props.onDragEnd(result, provided);
    }

    handleRowclick = (item: any) => {
        if (this.props.onClickRow) {
            this.props.onClickRow(item);
        }
    }

    render() {
        const { dataSource, columns } = this.props;
        return (
            <DragDropContext
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}
            >
                <Droppable droppableId="react-drag-table">
                    {(provided) => (
                        <tbody ref={provided.innerRef}>
                            {dataSource.map((item, index) => (
                                <Draggable key={item.key} draggableId={`${item.key}`} index={index}>
                                    {(provided, snapshot) => (
                                        <Row
                                            data={item}
                                            columns={columns}
                                            provided={provided}
                                            snapshot={snapshot}
                                            onRowclick={this.handleRowclick}
                                        />
                                    )}
                                </Draggable>
                            ))}
                        </tbody>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default Tbody;