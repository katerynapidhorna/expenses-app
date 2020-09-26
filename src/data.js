let data = {
  accounts: [
    {
      id: 1,
      title: "private savings",
      color: "green",
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
      color: "light green",
      icon: `faShoppingCart`,
    },
    {
      id: 2,
      title: "entertainment",
      color: "red",
      icon: `faDice`,
    },
    {
      id: 3,
      title: "travel",
      color: "light green",
      icon: `faPlane`,
    },
    {
      id: 4,
      title: "cloths",
      color: "light green",
      icon: `faTshirt`,
    },
    {
      id: 5,
      title: "kids",
      color: "light green",
      icon: `faBaby`,
    },
    {
      id: 6,
      title: "health",
      color: "light green",
      icon: `faHeartbeat`,
    },
    {
      id: 7,
      title: "household",
      color: "light green",
      icon: `faHome`,
    },
    {
      id: 8,
      title: "gifts",
      color: "light green",
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
