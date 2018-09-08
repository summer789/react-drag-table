import React, { Component } from 'react';
import _ from 'lodash';
import { DataItem } from '../../../data';
import { ColumnsProps } from '../../interface';
import { DataItem } from '../../../data/index';

export interface ColProps {
    isDragging: boolean;
    data: DataItem;
    index: number;
    colItem: ColumnsProps<DataItem>;
}

export interface Colstate {
    width: number;
    isResize: boolean;
}

class Col extends Component<ColProps, Colstate> {
    readonly state = {
        width: 0,
        isResize: false,
    }
    tdRef: HTMLTableDataCellElement;

    componentWillMount() {
        this.hanldeResize = _.debounce(this.hanldeResize, 300);
        window.addEventListener('resize', this.hanldeResize);
    }

    componentDidUpdate() {
        if (this.state.isResize) {
            this.setWidth();
            this.setState({
                isResize: false,
            });
        }
    }

    componentWillReceiveProps(nextProps: ColProps) {
        const { isDragging } = nextProps;
        if (isDragging && isDragging !== this.props.isDragging) {
            this.setWidth();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.hanldeResize);
    }

    hanldeResize = () => {
        if (!this.state.isResize) {
            this.setState({
                isResize: true,
            });
        }
    }

    setWidth = () => {
        if (this.tdRef) {
            const width = this.tdRef.offsetWidth;
            this.setState({
                width,
            });
        }
    }

    getTdRef = (dom: HTMLTableDataCellElement) => {
        this.tdRef = dom;
    }

    render() {
        const { width } = this.state
        const { isDragging, data, colItem, index } = this.props;
        const key = (colItem.dataIndex) as keyof DataItem;
        const style = isDragging && width ? { width } : {};
        return (
            <td ref={this.getTdRef} style={style}>
                {
                    colItem.render ? colItem.render(data[key], data, index) : data[key]
                }
            </td>
        );
    }
}

export default Col;