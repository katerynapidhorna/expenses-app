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
      icon: "icon",
    },
    {
      id: 2,
      title: "entertainment",
      color: "red",
      icon: "icon",
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
