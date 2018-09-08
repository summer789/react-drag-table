import React, { Component } from 'react';
import Table from './components/table/';
import { columns, dataSource, DataItem } from './components/data';
import { ColumnsProps } from './components/table/interface';
import Tbody from './components/table/components/tbody';
import { DropResult } from 'react-beautiful-dnd';

interface DragTableState {
    dataSource: DataItem[];
}

class DragTable extends Component<any, DragTableState> {
    state: DragTableState = {
        dataSource: dataSource.map(item => ({ ...item, id: parseInt(item.key) })),
    }
    handleDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }
        const items = this.handleReorder(
            this.state.dataSource,
            result.source.index,
            result.destination.index
        );

        this.setState({
            dataSource: items,
        });
    }

    handleReorder = (result: DataItem[], startIndex: number, endIndex: number) => {
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result.map((item, id) => ({ ...item, id: id + 1 }));
    }

    renderTbody = (columns: ColumnsProps<DataItem>[], dataSource: DataItem[]) => {
        return (
            <Tbody
                columns={columns}
                dataSource={dataSource}
                onDragEnd={this.handleDragEnd}
            />
        )
    }
    render() {
        return (
            <Table
                columns={columns}
                dataSource={this.state.dataSource}
                renderTbody={this.renderTbody}
            />
        );
    }
}

export default DragTable;



