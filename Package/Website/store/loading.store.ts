import { create } from 'zustand'

interface Store {
  loading: boolean
}

interface Actions {
  setLoading: (value: boolean) => void
}

const useLoadingStore = create<Store & Actions>()((set) => ({
  loading: true,
  setLoading: (value) => set(() => ({ loading: value })),
}))

export default useLoadingStore
