import { FileSystemRouter } from 'bun';
import { join } from 'path';

const router = new FileSystemRouter({
  dir: join(__dirname, 'routes'),
  style: 'nextjs',
  fileExtensions: ['.ts'],
});

const matchedRoute = router.match('/1/test/2');
console.log(matchedRoute);
