export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    { name: 'user', type: 'reference', to: [{ type: 'user' }] },
    { name: 'items', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'total', type: 'number', title: 'Total Price' },
    { name: 'status', type: 'string', options: { list: ['Pending', 'Paid', 'Shipped'] } },
  ],
};
