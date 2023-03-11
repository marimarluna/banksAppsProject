import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"

interface BankStore {
    loading: boolean,
    init: () => void,
    list: Array<any>,
    showDetails: boolean,
    details: any,
    closeModal: () => void,
    setDetails: (details: any) => void
}

export const useStore = create<BankStore>()(
    devtools(persist(
        (set, get) => ({
            loading: false,
            list: [],
            showDetails: false,
            details: {},
            init: async () => {
                const { data } = await axios.get("https://dev.obtenmas.com/catom/api/challenge/banks")
                set({ list: data })
            },
            closeModal: () => {
                set(state => ({ showDetails: !state.showDetails, details: {} }))
            },
            setDetails: (details) => {
                set({ showDetails: true, details })
            }
        }),
        {
            name: "bank-storage",
            storage: createJSONStorage(() => AsyncStorage),
        }
    ))
)