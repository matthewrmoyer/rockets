import { RocketsPage } from './app.po';

describe('rockets App', () => {
  let page: RocketsPage;

  beforeEach(() => {
    page = new RocketsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
