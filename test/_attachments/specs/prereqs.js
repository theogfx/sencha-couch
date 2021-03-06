
describe("Prerequisites", function() {

  it("has loaded ExtJS 4.0.x", function() {
    expect(Ext).toBeDefined();
    expect(Ext.getVersion()).toBeTruthy();
    expect(Ext.getVersion().major).toEqual(4);
    expect(Ext.getVersion().minor === 0 || Ext.getVersion().minor === 1).toBeTruthy();
  });

  it("has loaded application code", function() {
    expect(Application).toBeDefined();
  });
  
});