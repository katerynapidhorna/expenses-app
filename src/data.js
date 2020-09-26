let data = {
  accounts: [
    {
      id: 1,
      title: "private savings",
      color: "#d03b8b",
      icon: "icon",
      type: "bank account",
    },
    {
      id: 2,
      title: "family savings",
      color: "purple",
      icon: "icon",
      type: "cash",
    },
  ],
  category: [
    {
      id: 1,
      title: "groceries",
      color: "#d03b8b",
      icon: `faShoppingCart`,
    },
    {
      id: 2,
      title: "entertainment",
      color: "#d77085",
      icon: `faDice`,
    },
    {
      id: 3,
      title: "travel",
      color: "#db8a82",
      icon: `faPlane`,
    },
    {
      id: 4,
      title: "cloths",
      color: "#dea47e",
      icon: `faTshirt`,
    },
    {
      id: 5,
      title: "kids",
      color: "#d67558",
      icon: `faBaby`,
    },
    {
      id: 6,
      title: "health",
      color: "#cd4631",
      icon: `faHeartbeat`,
    },
    {
      id: 7,
      title: "household",
      color: "#f8f2cd",
      icon: `faHome`,
    },
    {
      id: 8,
      title: "gifts",
      color: "#81adc8",
      icon: `faGift`,
    },
  ],
  expense: [
    {
      id: 1,
      amount: 100,
      createdAt: Date.now() - 24 * 7,
      accountId: 2,
      categoryId: 1,
    },
    {
      id: 2,
      amount: 50,
      createdAt: Date.now() - 24 * 7,
      accountId: 1,
      categoryId: 2,
    },
  ],
};
module.exports = data;
