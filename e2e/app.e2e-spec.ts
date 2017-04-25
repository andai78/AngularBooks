import { UdemyBooksPage } from './app.po';

describe('udemy-books App', () => {
  let page: UdemyBooksPage;

  beforeEach(() => {
    page = new UdemyBooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
