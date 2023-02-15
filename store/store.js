import create from "zustand";

// Global state for school to be donated to and amount to donate
const useDonationStore = create((set) => ({
  school: "",
  amount: 0,
  image: "",
  // update values from hook usages
  setSchool: ({ school }) => set({ school }),
  setAmount: ({ amount }) => set({ amount }),
  setImage: ({ image }) => set({ image }),
}));

export default useDonationStore;
