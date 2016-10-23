import { Ngbook2RoutePage } from './app.po';

describe('ngbook2-route App', function() {
  let page: Ngbook2RoutePage;

  beforeEach(() => {
    page = new Ngbook2RoutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
