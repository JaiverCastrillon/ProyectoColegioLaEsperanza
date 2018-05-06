import { ColegioCrudAppPage } from './app.po';

describe('colegio-crud-app App', function() {
  let page: ColegioCrudAppPage;

  beforeEach(() => {
    page = new ColegioCrudAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
