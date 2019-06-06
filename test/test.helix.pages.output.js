/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable no-console */
/* eslint-disable no-undef */

const assert = require('assert');
const request = require('request');
const jquery = require('jquery');
const { JSDOM } = require('jsdom');

const mainTitle = 'Helixing';
const textInBody = [
  'to change the HTML output',
  'git remote add origin',
];

// TODO build from Git repo name
const testURL = 'https://helixing-bdelacretaz.project-helix.page';

// TODO we should first wait for the Helix Pages output to be
// updated - include the Git revision hash in the output and check
// for that for example

describe('Basic test of the Helix Pages output', () => {
  it('contains our content', (done) => {
    request(testURL, async (err, res, body) => {
      assert(!err);
      assert.equal(res.statusCode, 200);
      const jsdom = new JSDOM(body);
      const $ = jquery(jsdom.window);
      assert.equal(mainTitle, $('h1:first').text());
      textInBody.forEach((text) => {
        assert(
          $('body').text().indexOf(text) > 0,
          `Expecting '${text})' to be found in the page content`,
        );
      });
      done();
    });
  });
});
