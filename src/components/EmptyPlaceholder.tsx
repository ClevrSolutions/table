import { createElement, ReactNode } from "react";
import { TableContainerProps } from "../../typings/TableProps";

export function EmptyPlaceholder(props: TableContainerProps, columnCount: number): ReactNode {
    const { emptyPlaceholder, showEmptyPlaceholder } = props;

    return (
        <div
            key="row-footer"
            className="td td-borders"
            style={{
                gridColumn: `span ${columnCount}`
            }}
        >
            <div className="empty-placeholder">{showEmptyPlaceholder === "custom" ? emptyPlaceholder : <div />}</div>
        </div>
    );
}
