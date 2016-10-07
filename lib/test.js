/* global describe, it */
'use strict'

const expect = require('chai').expect
const pkg = require('../package.json')

describe('javascript-boilerplate', function () {
  it('is called @wunderflats/javascript-boilerplate', function () {
    expect(pkg.name).to.equal('@wunderflats/javascript-boilerplate')
  })
})
