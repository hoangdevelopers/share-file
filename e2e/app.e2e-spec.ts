import { ShareFilePage } from './app.po';

describe('share-file App', () => {
  let page: ShareFilePage;

  beforeEach(() => {
    page = new ShareFilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
