import {KanbanColumn} from "./column";
import {CreateKanbanCard, EditKanbanCard} from "./card";

interface KanbanStore {
    columns: KanbanColumn[],
    addColumn: (title: string) => void,
    addCard: (columnId: string, card: CreateKanbanCard) => void,
    editCard: (columnId: string, cardId: string, card: EditKanbanCard) => void,

    /**
     * @param from - current index of the column
     * @param to - new index of the column
     */
    reorderColumn: (from: number, to: number) => void,

    /**
     * @param columnId - id of the column which needs to be changed
     * @param from - current index of the card
     * @param to - new index of the card
     */
    reorderCard: (columnId: string, from: number, to: number) => void
}


interface KanbanItem {
    id: string,
    createdAt: Date,
    title: string,
}


export type {KanbanStore, KanbanItem}
export * from "../types"
