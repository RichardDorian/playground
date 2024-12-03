import { FileSystemRouter } from 'bun';
import { join } from 'path';

const router = new FileSystemRouter({
  dir: join(__dirname, 'routes'),
  style: 'nextjs',
  fileExtensions: ['.ts'],
});

const matchedRoute = router.match('/categories/1/items/12?q=hello');
console.log(matchedRoute);
