import {create} from "zustand";
import {KanbanStore} from "../types";
import {KanbanColumn} from "../types/column";

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
    reorderColumn: (from, to) => {
        set((state) => {
            const newColumns = [...state.columns]

            const [item] = newColumns.splice(from, 1)
            newColumns.splice(to, 0, item)

            return {columns: newColumns}
        })
    }
}))