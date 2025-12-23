const orders = [
  {
    restaurantId: 1,
    orders: [
      {
        id: 1,
        dish: "Hambúrguer",
        amount: 3,
        totalPrice: 57
      },
      {
        id: 2,
        dish: "Batata frita",
        amount: 2,
        totalPrice: 24
      }
    ]
  },
  {
    restaurantId: 2,
    orders: [
      {
        id: 1,
        dish: "Pizza calabresa",
        amount: 1,
        totalPrice: 45
      },
      {
        id: 2,
        dish: "Pizza quatro queijos",
        amount: 2,
        totalPrice: 96
      }
    ]
  },
  {
    restaurantId: 3,
    orders: [
      {
        id: 1,
        dish: "Sushi combo",
        amount: 1,
        totalPrice: 89
      },
      {
        id: 2,
        dish: "Temaki salmão",
        amount: 3,
        totalPrice: 48
        // calma… arruma isso direito abaixo
      },
      {
        id: 2,
        dish: "Temaki salmão",
        amount: 3,
        totalPrice: 90
      }
    ]
  }
];


const find = (restaurantId: number) => {
    const result = orders.filter((order) => order.restaurantId === restaurantId);
    return result
};

const restaurantOrdersService = {
    find
};

export default restaurantOrdersService;