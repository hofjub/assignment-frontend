import {KanbanColumn} from "./column";

interface KanbanStore {
    columns: KanbanColumn[],
}


interface KanbanItem {
    id: string,
    createdAt: Date,
    title: string,
}






export type {KanbanStore, KanbanItem}
export * from "../types"