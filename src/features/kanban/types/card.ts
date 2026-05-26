import {KanbanItem} from "./index";

/**
 * The card inside a column, for example a todo
 */
interface KanbanCard extends KanbanItem {
    finishedAt?: Date,
    description?:string,
    image?: string,
}

type CreateKanbanCard = Omit<KanbanCard, "createdAt"|"finishedAt" | "id">
type EditKanbanCard = Partial<Omit<KanbanCard, "id" | "createdAt">>

export type {KanbanCard, CreateKanbanCard, EditKanbanCard}
