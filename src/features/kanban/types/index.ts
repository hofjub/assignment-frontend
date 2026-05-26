import {KanbanColumn} from "./column";

interface KanbanStore {
    columns: KanbanColumn[],
    addColumn: (title: string) => void,

    /**
     * @param from - current index of the column
     * @param to - new index of the column
     */
    reorderColumn: (from: number, to: number) => void
}


interface KanbanItem {
    id: string,
    createdAt: Date,
    title: string,
}


export type {KanbanStore, KanbanItem}
export * from "../types"