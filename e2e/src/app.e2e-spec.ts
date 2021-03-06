import { AppPage } from './app.po';
import { element } from 'protractor';
declare var by: any;
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to component-interaction!');
  });
});

let _heroNames = ['Mr. IQ', 'Magneta', 'Bombasto'];
let _masterName = "Master";

it('should pass properties to children properly', function(){
  let parent = element.all(by.tagName('app-hero-parent')).get(0);
  let heroes = parent.all(by.tagName('app-hero-child'));
  
  for (let i = 0; i <_heroNames.length; i++) {
    let childTitle = heroes.get(i).element(by.tagName('h3')).getText();
    let childDetail = heroes.get(i).element(by.tagName('p')).getText();
    expect(childTitle).toEqual(_heroNames[i] + ' says:');
    expect(childDetail).toContain(_masterName);
  }
});

it('should display trimmed, non-empty names', function (){
  let _nonEmptyNameIndex = 0;
  let _nonEmptyName = '"Mr.IQ"';
  let parent = element.all(by.tagName('app-name-parent')).get(0);
  let hero = parent.all(by.tagName('app-name-child')).get(_nonEmptyNameIndex);

  let displayName = hero.element(by.tagName('h3')).getText();
  expect(displayName).toEqual(_nonEmptyName);
});

it('Should replace empty name with default name', function () {
  let _emptyNameIndex = 1;
  let _defaultName = '"<no name set"';
  let parent = element.all(by.tagName('app-name-parent')).get(0);
  let hero = parent.all(by.tagName('app-name-child')).get(_emptyNameIndex);

  let displayName = hero.element(by.tagName('h3')).getText();
  expect(displayName).toEqual(_defaultName);
});
it('should set expected initial values', function(){
  let actual = getActual();

  let initialLabel = '1.23';
  let initialLog = 'Initial value of major set to 1, Initial value of minor set to 23';
  
  expect(actual.label).toBe(initialLabel);
  expect(actual.count).toBe(1);
  expect(actual.logs.get(0).getText()).toBe(initialLog);

});

it('should set expected values after clicking \'Minor\' twice', function (){
  let repoTag = element(by.tagName('app-version-parent'));
  let newMinorButton = repoTag.all(by.tagName('button')).get(0);

  newMinorButton.click().then(function(){
    newMinorButton.click().then(function() {
      let actual = getActual();

      let labelAfter2Minor = 'Version 1.25';
      let logAfter2Minor = 'minor changed from 24 to 25';

      expect(actual.label).toBe(labelAfter2Minor);
      expect(actual.count).toBe(3);
      expect(actual.logs.get(2).getText()).toBe(logAfter2Minor);
    });
  });
});

it('should set expected values after clicking \'Major\' once', function (){
  let repoTag = element(by.tagName('app-version-parent'));
  let newMajorButton = repoTag.all(by.tagName('button')).get(1);

  newMajorButton.click().then(function(){
    let actual = getActual();

    let labelAfterMajor = 'Version 2.0';
    let logAfterMAjor = 'major changed from 1 to 2, minor changed from 25 to 0';

    expect(actual.label).toBe(labelAfterMajor);
    expect(actual.count).toBe(4);
    expect(actual.logs.get(3).getText()).toBe(logAfterMAjor);
  });
});

function getActual(){
  let versionTag = element(by.tagName('app-version-child'));
  let label = versionTag.element(by.tagName('h3')).getText();
  let ul = versionTag.element(by.tagName('ul'));
  let logs = ul.all(by.tagName('li'));

  return {
    label: label,
    logs: logs,
    count: logs.count()
  };
}