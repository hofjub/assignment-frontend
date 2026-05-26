import {create} from "zustand";
import {KanbanStore} from "../types";
import {KanbanColumn} from "../types/column";
import {CreateKanbanCard, KanbanCard} from "../types/card";

const mockData: KanbanColumn[] = [
    {
        id: "column-1",
        title: "Todo",
        createdAt: new Date(),
        cards: [
            {
                id: "card-1",
                title: "Create project setup",
                description: "Initialize the project structure.",
                createdAt: new Date(),
            },
            {
                id: "card-2",
                title: "Add kanban layout",
                description: "Create the basic board layout.",
                createdAt: new Date(),
            },
        ],
    },
    {
        id: "column-2",
        title: "Done",
        createdAt: new Date(),
        cards: [
            {
                id: "card-3",
                title: "Install dependencies",
                description: "Install required packages.",
                createdAt: new Date(),
                finishedAt: new Date(),
            },
        ],
    },
];

export function reorder<T>(items: T[], from: number, to: number): T[] {
    const newItems = [...items];

    const isFromIndexInvalid = from < 0 || from >= newItems.length;
    const isToIndexInvalid = to < 0 || to >= newItems.length;

    if (isFromIndexInvalid || isToIndexInvalid) {
        return newItems;
    }

    const [item] = newItems.splice(from, 1);
    newItems.splice(to, 0, item);

    return newItems;
}



export const useKanbanStore = create<KanbanStore>((set, get) => ({
    columns: mockData,
    addColumn: (title: string) => {
        const newColumn: KanbanColumn = {
            id: crypto.randomUUID(),
            title,
            createdAt: new Date(),
            cards: [],
        };

        set((state) => ({
            columns: [...state.columns, newColumn],
        }));
    },
    addCard: (columnId: string, card: CreateKanbanCard) => {
        set((state) => {
            const newColumns = [...state.columns].map(c => {
                if(c.id !== columnId) return c;

                const newCard :KanbanCard = {
                    createdAt: new Date(),
                    id: crypto.randomUUID(),
                    ...card
                }

                return {
                    ...c,
                    cards: [...c.cards, newCard]
                }
            })

            return {columns: newColumns}
        })
    },
    reorderColumn: (from, to) => {
        set((state) => {
            return {
                columns: reorder(state.columns, from, to),
            }
        })
    },
    reorderCard: (columnId, from, to) => {
        set((state) => {
            const newColumns = [...state.columns].map(c => {
                if(c.id !== columnId) return c;

                return {
                    ...c,
                    cards: reorder(c.cards, from, to)
                }
            })

            return {columns: newColumns}
        })
    }
}))