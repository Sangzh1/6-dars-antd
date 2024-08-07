// src/redux/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'fruit-shop',
  initialState: [
    {
      id: 1,
      name: '𝐀𝐩𝐥𝐥𝐞',
      price: 17,
      imageUrl:
        'https://dostavo4ka.uz/upload-file/2021/05/05/4921/750x750-7bffb8d4-039d-4d80-bf98-5feb96961f95.jpg',
    },
    {
      id: 2,
      name: '𝓑𝓪𝓷𝓪𝓷𝓪 ',
      price: 15,
      imageUrl:
        'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695916888_gas-kvas-com-p-kartinki-banan-36.jpg',
    },
    {
      id: 3,
      name: '𝐂𝐡𝐞𝐫𝐫𝐲 ',
      price: 12,
      imageUrl:
        'https://www.haxnicks.co.uk/cdn/shop/articles/cherry-tree.jpg?crop=center&height=1200&v=1627056664&width=1400',
    },
    {
      id: 4,
      name: '𝐃𝐚𝐭𝐞',
      price: 37,
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2024/02/Bowl-of-dates-6aae23f.jpg?quality=90&resize=470,300',
    },
    {
      id: 5,
      name: '𝐄𝐥𝐝𝐞𝐫𝐛𝐞𝐫𝐫𝐲',
      price: 40,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a9/Sambucus-berries.jpg',
    },

    {
      id: 7,
      name: '𝐒𝐭𝐫𝐚𝐰𝐛𝐞𝐫𝐫𝐲',
      price: 31,
      imageUrl:
        'https://www.allrecipes.com/thmb/1c99SWam7_FM6vUzpDDzIKffMR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-strawberry-fruit-or-vegetable-f6dd901427714e46af2d706a57b9016f.jpg',
    },

    {
      id: 8,
      name: '𝐊𝐢𝐰𝐢𝐢',
      price: 28,
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kiwi-fruits-582a07b.jpg?quality=90&resize=556,505',
    },
    {
      id: 9,
      name: '𝐋𝐞𝐦𝐨𝐧 ',
      price: 45,
      imageUrl:
        'https://belvoir-university-health.s3.amazonaws.com/media/2020/07/08144529/lemon-health-benefits-1.jpg',
    },

    {
      id: 10,
      name: '𝐎𝐫𝐚𝐧𝐠𝐞',
      price: 98,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsa3K1PkfEgVzc6JeayE-uGwejpsBDBbVBUw&s',
    },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
