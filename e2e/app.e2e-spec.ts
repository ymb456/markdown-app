import { MarkdownAppPage } from './app.po';

describe('markdown-app App', function() {
  let page: MarkdownAppPage;

  beforeEach(() => {
    page = new MarkdownAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
