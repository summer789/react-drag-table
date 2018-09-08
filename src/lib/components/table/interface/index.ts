
export type Title = string | React.ReactNode;

export interface ColumnsProps<T> {
    title?: Title;
    key?: string;
    dataIndex?: string;
    width?: number;
    className?: string;
    render?: (text: any, record: T, index: number) => React.ReactNode | string;
}