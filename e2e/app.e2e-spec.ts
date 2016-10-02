import { Cabins4LessAppClientSidePage } from './app.po';

describe('cabins4-less-app-client-side App', function() {
  let page: Cabins4LessAppClientSidePage;

  beforeEach(() => {
    page = new Cabins4LessAppClientSidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
