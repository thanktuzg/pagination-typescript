
Installation
$ npm i pagination-typescript || yarn add pagination-typescript

Install dependencies
$ npm install || yarn add

<h3 id="uso">Uso(Use)</h3>

```js
const pagination = require('pagination-typescript'); // or import pagination from 'pagination-typescript' in typescript

const articles = [
  {
    id: 1,
    name: '1',
  },
  {
    id: 2,
    name: '2',
  },
  {
    id: 3,
    name: '3',
  },
  {
    id: 4,
    name: '4',
  },
  {
    id: 5,
    name: '5',
  },
  {
    id: 6,
    name: '6',
  },
];
// Pagination.pagination(items: any[], currentPage: number = 1, pageSize: number = 20) 
const paginationPage1= pagination(drones, 1, 5);
