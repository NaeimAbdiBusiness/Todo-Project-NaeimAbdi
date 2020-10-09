const todos = [
  {
    id: 1,
    category: "Work",
    title: "Morning meeting",
    description: "metting with john",
    status: false,
    iseditable: false,
    newRow: false,
  },
  {
    id: 2,
    category: "Study",
    title: "Math study",
    description: "Problems section 5",
    status: false,
    iseditable: false,
    newRow: false,
  },
  {
    id: 3,
    category: "Home",
    title: "Buy food for dinner",
    description: "Pizza",
    status: false,
    iseditable: false,
    newRow: false,
  },
  {
    id: 4,
    category: "Dr",
    title: "Checkup",
    description: "Monthly Checkup",
    status: true,
    iseditable: false,
    newRow: false,
  },
  {
    id: 5,
    category: "Work",
    title: "Evening meeting",
    description: "metting with ",
    status: false,
    iseditable: false,
    newRow: false,
  },
];

const headers = [
  {
    id: 11,
    title: "DoIt",
    sort: "",
    isSort: false,
  },
  {
    id: 12,
    title: "Category",
    sort: "",
    isSort: false,
  },
  {
    id: 13,
    title: "Title",
    sort: "",
    isSort: false,
  },
  {
    id: 14,
    title: "Description",
    sort: "",
    isSort: false,
  },
  {
    id: 15,
    title: "Status",
    sort: "",
    isSort: false,
  },
];

const doneHeaders = [
  {
    id: 111,
    title: "DoIt",
    sort: "",
    isSort: false,
  },
  {
    id: 122,
    title: "Category",
    sort: "",
    isSort: false,
  },
  {
    id: 133,
    title: "Title",
    sort: "",
    isSort: false,
  },
  {
    id: 144,
    title: "Description",
    sort: "",
    isSort: false,
  },
  {
    id: 155,
    title: "Status",
    sort: "",
    isSort: false,
  },
];

export function getAllActiveTodos() {
  return todos.filter((dones) => !dones.status);
}
export function getAllDoneTodos() {
  return todos.filter((dones) => dones.status);
}
export function getAllHeaders() {
  return headers;
}
export function getAllDoneHeaders() {
  return doneHeaders;
}
