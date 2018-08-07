const Page = require('./helpers/Page');
let page;

beforeEach(async () => {
  page = await Page.build();
  page.goto('localhost:3000');
});

afterEach(async () => {
  page.close();
});

test('When log in can see log create form', async () => {
  await page.login();
  await page.click('a.btn-floating');
  const label = await page.getContentsOf('form label');
  expect(label).toEqual('Blog Title');
});
