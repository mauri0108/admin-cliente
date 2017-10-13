import { AdministracionPage } from './app.po';

describe('administracion App', () => {
  let page: AdministracionPage;

  beforeEach(() => {
    page = new AdministracionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
