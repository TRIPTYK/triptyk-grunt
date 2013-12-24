'use strict';
describe('somme', function() {
  it('somme', function() {
    // expect(somme()).toEqual('somme');
    expect(somme()).toContain('som');
  });
});

describe('supprimeVoyelle', function() {
  it('devrait supprimer toutes les voyelle minuscules', function() {
    expect(supprimeVoyelle('Hello world')).toEqual('Hll wrld');
  });
  it('devrait supprimer toutes les voyelle majuscules', function() {
    expect(supprimeVoyelle('Artistic Eagle')).toEqual('rtstc gl');
  });
  it('ne devrait pas supprimer les espace blancs', function() {
    expect(supprimeVoyelle('')).toEqual('');
  });
  it('ne devrait pas changer les strings sans voyelles', function() {
    expect(supprimeVoyelle('Mhmm')).toEqual('Mhmm');
  });
});